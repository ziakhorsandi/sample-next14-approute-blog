import { MongoClient } from 'mongodb';

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'next14Blog';

let connection = null;

export async function connectToDb() {
  try {
    if (!connection) {
      connection = await client.connect();
      console.log('Connected successfully to server');
    }
    const db = client.db(dbName);
    // console.log('db', db);
    return db;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}

export async function connectDbClose() {
  await client.close();
}
