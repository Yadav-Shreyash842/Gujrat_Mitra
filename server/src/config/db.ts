import { MongoClient, type Db } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'gujarat_mitra';

let db: Db | null = null;
let connecting: Promise<Db> | null = null;

export async function connectDB(): Promise<Db> {
  if (db) return db;
  if (!connecting) {
    const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
    connecting = client.connect().then(() => {
      db = client.db(dbName);
      return db;
    });
  }
  return connecting;
}

export async function testConnection(): Promise<boolean> {
  try {
    const connection = await connectDB();
    await connection.command({ ping: 1 });
    return true;
  } catch (err) {
    console.error('DB connection error:', (err as Error).message);
    return false;
  }
}
