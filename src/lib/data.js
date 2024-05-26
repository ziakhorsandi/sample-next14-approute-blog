import { connectToDb } from './connectTodb';
import { ObjectId } from 'mongodb';
// const { ObjectId } = require('mongodb');
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

export const getUser = async (id) => {
  try {
    const db = await connectToDb();

    const user = await db
      .collection('users')
      .findOne({ _id: new ObjectId(id) });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error('Fail to fetch User');
  }
};
