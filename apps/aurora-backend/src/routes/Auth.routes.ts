import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';
import { authenticateToken } from '../middleware/auth/auth-middleware';

export const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new Error('ERROR');
  }

  const compare = bcrypt.compareSync(
    password,
    '$2b$10$Xe.PREcv8VJ4zMS./TeWM.BW.3fuoNUm2uqFSKjzCq4ncYnIB0ONu'
  );
  if (!compare) {
    throw new Error('PASSWORD INCORRECT');
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

  res.send('ok');
});

router.post('/register', (req, res) => {
  const { password, email } = req.body;

  try {
    const hashedPass = bcrypt.hashSync(password, 10);
    res.send(hashedPass);
  } catch {
    throw new Error('ERROR');
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
