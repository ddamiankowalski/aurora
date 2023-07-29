import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import { authenticateToken } from '../middleware/auth/auth-middleware';
import { User } from '../database/entity/user';

export const router = express.Router();

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error('ERROR');
  }

  const user = await User.findOneBy({ email });

  if (!user) {
    return next(new Error('No user was found'));
  }

  const compare = await bcrypt.compare(password, user.password);
  if (!compare) {
    return next(new Error('Password is incorrect'));
  }

  const accessToken = jwt.sign(
    { email, password },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '15s' }
  );

  const refreshToken = jwt.sign(
    { email, password },
    process.env.REFRESH_TOKEN_SECRET
  );

  res.cookie('aurora_auth', accessToken);
  res.cookie('aurora_auth_ref', refreshToken);

  res.send(user);
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

router.get('/refresh', (req, res) => {
  const refreshToken = req.cookies['aurora_auth_ref'];

  if (!refreshToken) {
    throw new Error('ERROR');
  }

  // check if refreshtoken exists in the database etc

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
  });
});

router.get('/user', authenticateToken, (req, res) => {
  res.send('');
});
