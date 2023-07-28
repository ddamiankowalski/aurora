import express from 'express';
import { router as authRouter } from './routes/Auth.routes';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import globalErrorHandler from './middleware/errors/error-handler';
import 'reflect-metadata';

const app = express();
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use('/api', authRouter);

app.use('*', globalErrorHandler);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
