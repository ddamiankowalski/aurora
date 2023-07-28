import * as jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    throw new Error('');
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      throw err;
    }

    req.user = user;
    next();
  });
};
