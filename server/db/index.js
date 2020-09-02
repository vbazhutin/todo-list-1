import client from './client';

export const addUser = async (newUser) => {
  try {
    const { email } = newUser;
    const userExists = await client.db('todos').collection('users').findOne({ email });
    if (!userExists) {
      return await client.db('todos').collection('users').insertOne(newUser);
    }
    throw new Error('User already exists!');
  } catch (err) {
    throw new Error(err);
  }
};

export const loginUser = async (user) => {
  try {
    console.log('user', user);
    return await client.db('todos').collection('users').findOne(user);
  } catch (err) {
    throw new Error(err);
  }
};

export const findTodosByUser = async (user) => {
  try {
    return await client.db('todos').collection('todos').find(user).toArray();
  } catch (err) {
    throw new Error(err);
  }
};

export const addTodoByUser = async (todo) => {
  try {
    return await client.db('todos').collection('todos').insertOne(todo);
  } catch (err) {
    throw new Error(err);
  }
};

export const toggleCompletion = async (todo, completionStatus) => {
  try {
    return await client.db('todos').collection('todos').updateOne(todo, { $set: { completed: completionStatus } });
  } catch (err) {
    throw new Error(err);
  }
};

export const deleteTodo = async (todo) => {
  try {
    return await client.db('todos').collection('todos').deleteOne(todo);
  } catch (err) {
    throw new Error(err);
  }
};
