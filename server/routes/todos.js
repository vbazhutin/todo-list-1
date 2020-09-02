import { Router } from 'express';
import { findTodosByUser, addTodoByUser } from '../db';

const router = new Router();

router.post('/', async (body, res) => {
  try {
    const mongoRes = await findTodosByUser(body);
    res.status(201);
    res.send(mongoRes);
  } catch (err) {
    res.status(500);
    res.json(err);
  }
  res.send('<h1>Testing users get!</h1>');
});

router.post('/add', async ({ body }, res) => {
  try {
    const mongoRes = await addTodoByUser(body);
    console.log(body);
    res.status(201);
    res.send(mongoRes);
  } catch (err) {
    res.status(500);
  }
});

export default router;
