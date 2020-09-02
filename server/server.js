import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import users from './routes/users';

dotenv.config();

const app = express();

app.get('/', (_, res) => {
  res.send('<h1>Hello from Express</h1>');
});

app.use(cors());

app.use(express.json());

app.use('/users', users);

app.listen(process.env.PORT || 5000);
