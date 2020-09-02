import { Router } from 'express';
import { addUser, loginUser } from '../db';

const router = new Router();

router.get('/', (_, res) => {
  res.send('<h1>Testing users get!</h1>');
});

router.post('/create', async ({ body }, res) => {
  try {
    const mongoRes = await addUser(body);
    console.log(body);
    res.status(201);
    res.json(mongoRes);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

router.get('/login', async ({ body }, res) => {
  try {
    const mongoRes = await loginUser(body);
    console.log(body);
    res.status(201);
    res.json(mongoRes);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
});

export default router;
