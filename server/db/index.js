import client from './client';

export const addUser = async (newUser) => {
  try {
    return await client.db('todos').collection('users').insertOne(newUser);
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
