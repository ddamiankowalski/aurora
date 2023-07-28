import * as express from 'express';

export const router = express.Router();

router.post('/login', (req, res) => {
  res.send('This is it');
});
