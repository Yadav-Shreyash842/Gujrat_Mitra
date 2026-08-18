import { Router, Request, Response } from 'express';
import { connectDB } from '../config/db.js';

const router = Router();

// GET /api/market
router.get('/', async (_req: Request, res: Response) => {
  try {
    const db = await connectDB();
    const rows = await db.collection('market_data').find().sort({ sort_order: 1 }).toArray();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch market data', detail: (err as Error).message });
  }
});

export default router;
