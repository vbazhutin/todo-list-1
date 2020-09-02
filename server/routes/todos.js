import { Router } from 'express';
import {
  findTodosByUser, addTodoByUser, toggleCompletion, deleteTodo,
} from '../db';

const router = new Router();

router.post('/', async ({ body }, res) => {
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

router.patch('/toggle-complete', async ({ body }, res) => {
  try {
    const mongoRes = await toggleCompletion(body.todo, body.completion);
    console.log(body);
    res.status(204);
    res.send(mongoRes);
  } catch (err) {
    res.status(500);
  }
});

router.delete('/', async ({ body }, res) => {
  try {
    const mongoRes = await deleteTodo(body);
    console.log(body);
    res.status(204);
    res.send(mongoRes);
  } catch (err) {
    res.status(500);
  }
});

export default router;
