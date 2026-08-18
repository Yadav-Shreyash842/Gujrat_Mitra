import { Router, Request, Response } from 'express';
import { connectDB } from '../config/db.js';

const router = Router();

// GET /api/categories
router.get('/', async (_req: Request, res: Response) => {
  try {
    const db = await connectDB();
    const rows = await db
      .collection('articles')
      .aggregate([
        { $group: { _id: '$category', article_count: { $sum: 1 } } },
        { $sort: { _id: 1 } },
        { $project: { _id: 0, category: '$_id', article_count: 1 } },
      ])
      .toArray();
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch categories', detail: (err as Error).message });
  }
});

export default router;
