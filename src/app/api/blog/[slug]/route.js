import { connectToDb } from '@/lib/connectTodb';
import { NextResponse } from 'next/server';

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    const db = await connectToDb();
    const post = await db.collection('posts').findOne({ slug: slug });
    console.log('post : ', post);
    return NextResponse.json(post);
  } catch (error) {
    console.log('error : ', error);
    throw new Error('Failt to GET posts');
  }
};
