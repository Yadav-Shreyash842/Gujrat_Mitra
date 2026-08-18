import { Router, Request, Response } from 'express';
import { connectDB } from '../config/db.js';

const router = Router();

// GET /api/sports/points-table
router.get('/points-table', async (_req: Request, res: Response) => {
  try {
    const db = await connectDB();
    const rows = await db.collection('points_table').find().sort({ points: -1 }).toArray();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch points table', detail: (err as Error).message });
  }
});

export default router;
