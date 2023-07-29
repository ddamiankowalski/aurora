import * as express from 'express';
import { AuthController } from '../controllers/auth/auth-controller';
import 'dotenv/config';

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
  const controller = AuthController.getInstance();

  try {
    await controller.register(email, firstName, lastName, password);
    res.status(200).json({ ok: true });
  } catch (err) {
    return next(err);
  }
});

router.get('/refresh', async (req, res, next) => {
  const refreshToken = req.cookies['aurora_auth_ref'];
  const controller = AuthController.getInstance();

  try {
    const accessToken = await controller.refresh(refreshToken);
    res.cookie('aurora_auth', accessToken);
    res.sendStatus(200);
  } catch (err) {
    return next(err);
  }
});
