import { connectToDb } from '@/lib/connectTodb';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  try {
    const db = await connectToDb();
    const posts = await db.collection('posts').find({}).toArray();
    console.log('posts------------------', posts);
    return NextResponse.json(posts);
  } catch (error) {
    console.log('error : ', error);
    throw new Error('Failt to GET posts');
  }
};
