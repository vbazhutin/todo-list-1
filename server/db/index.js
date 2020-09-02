import client from './client';

export const addUser = async ({ newUser: email }) => {
  try {
    const userExists = await client.db('todos').collection('users').findOne({ email }).toArray();
    if (!userExists) {
      return await client.db('todos').collection('users').insertOne(newUser);
    }
    throw new Error('User alrady exists!');
  } catch (err) {
    throw new Error(err);
  }
};

export const loginUser = async (user) => {
  try {
    return await client.db('todos').collection('users').find(user).toArray();
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
