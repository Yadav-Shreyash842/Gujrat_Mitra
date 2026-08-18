import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { testConnection } from './config/db.js';
import articlesRouter from './routes/articles.js';
import categoriesRouter from './routes/categories.js';
import marketRouter from './routes/market.js';
import sportsRouter from './routes/sports.js';
import { HealthResponse } from './types.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = Number(process.env.PORT) || 4000;

app.use(cors());
app.use(express.json());

app.use('/api/articles', articlesRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/market', marketRouter);
app.use('/api/sports', sportsRouter);

app.get('/api/health', async (_req: Request, res: Response<HealthResponse>) => {
  const dbOk = await testConnection();
  res.json({ server: 'ok', database: dbOk ? 'connected' : 'not connected' });
});

// Production: serve the built React client (react-app/dist)
const clientDist = path.join(__dirname, '..', '..', 'react-app', 'dist');
app.use(express.static(clientDist));
app.get('*', (_req: Request, res: Response) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

app.listen(PORT, async () => {
  console.log(`Gujarat Mitra server running: http://localhost:${PORT}`);
  const dbOk = await testConnection();
  console.log(dbOk
    ? 'MongoDB connection: OK'
    : 'MongoDB connection: FAILED — check server/.env MONGODB_URI, then run npm run seed');
});
