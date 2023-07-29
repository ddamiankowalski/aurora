import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import { authenticateToken } from '../middleware/auth/auth-middleware';
import { User } from '../database/entity/user';
import { RefreshToken } from '../database/entity/refresh-token';
import { AuthController } from '../controllers/auth/auth-controller';

export const router = express.Router();

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;
  const controller = AuthController.getInstance();

  try {
    const { accessToken, refreshToken } = await controller.login(
      email,
      password
    );
    res.cookie('aurora_auth', accessToken);
    res.cookie('aurora_auth_ref', refreshToken);

    res.sendStatus(200);
  } catch (err) {
    return next(err);
  }
});

router.post('/register', async (req, res, next) => {
  const { password, email, firstName, lastName } = req.body;

  try {
    await User.createNew(
      email,
      firstName,
      lastName,
      await bcrypt.hash(password, 10)
    );
    res.sendStatus(200);
  } catch {
    return next(new Error('Duplicate entry'));
  }
});

router.get('/refresh', async (req, res, next) => {
  const refreshToken = req.cookies['aurora_auth_ref'];

  if (!refreshToken) {
    return next(new Error('Refresh token failed'));
  }

  try {
    const token = await RefreshToken.findOneBy({ token: refreshToken });

    if (!token) {
      return next(new Error('Refresh token failed'));
    }
  } catch (error) {
    return next(error);
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      throw err;
    }

    const { email, password } = user;

    const accessToken = jwt.sign(
      { email, password },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15s' }
    );

    res.cookie('aurora_auth', accessToken);
    res.sendStatus(200);
  });
});

router.get('/user', authenticateToken, (req, res) => {
  res.send('');
});
