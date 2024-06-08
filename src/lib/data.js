import { connectToDb } from './connectTodb';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';

import { unstable_noStore as noStore } from 'next/cache';

export const getPosts = async () => {
  try {
    const db = await connectToDb();
    const posts = await db.collection('posts').find({}).toArray();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error('fail');
  }
};

export const getPost = async (slug) => {
  noStore();
  try {
    const db = await connectToDb();
    const post = await db.collection('posts').findOne({ slug: slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error('fail');
  }
};

export const getUser = async (params) => {
  const { id, email, username } = params;
  try {
    const db = await connectToDb();
    let user = null;
    if (id) {
      user = await db.collection('users').findOne({ _id: new ObjectId(id) });
    }
    if (email) {
      user = await db.collection('users').findOne({ email: email });
    }
    if (username) {
      user = await db.collection('users').findOne({ username: username });
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const createUser = async (user) => {
  const { username, email, password, img } = user;
  let hashPassword = undefined;
  if (password) {
    const salt = await bcrypt.genSalt(10);
    hashPassword = await bcrypt.hash(password, salt);
  }
  try {
    const db = await connectToDb();

    const user = await db.collection('users').insertOne({
      _id: new ObjectId(),
      username,
      email,
      password: hashPassword,
      isAdmin: false,
      createdAt: new Date(),
      img,
    });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Fail to create User');
  }
};
