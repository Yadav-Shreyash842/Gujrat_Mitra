import { Router, Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { connectDB } from '../config/db.js';

const router = Router();

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// GET /api/articles?category=WORLD&limit=20&offset=0&q=text
router.get('/', async (req: Request, res: Response) => {
  try {
    const { category, limit = '20', offset = '0', q } = req.query;
    const db = await connectDB();
    const coll = db.collection('articles');
    const filter: Record<string, unknown> = {};
    if (category && category !== 'foryou') {
      filter.category = new RegExp(`^${escapeRegExp(String(category))}$`, 'i');
    }
    if (q) {
      const rx = new RegExp(escapeRegExp(String(q)), 'i');
      filter.$or = [{ title: rx }, { summary: rx }, { related: rx }, { content: { $elemMatch: { text: rx } } }];
    }
    const rows = await coll
      .find(filter)
      .sort({ published_at: -1 })
      .skip(Number(offset) || 0)
      .limit(Number(limit) || 20)
      .toArray();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch articles', detail: (err as Error).message });
  }
});

// GET /api/articles/slug/:slug
router.get('/slug/:slug', async (req: Request, res: Response) => {
  try {
    const db = await connectDB();
    const row = await db.collection('articles').findOne({ slug: req.params.slug });
    if (!row) return res.status(404).json({ error: 'Not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch article', detail: (err as Error).message });
  }
});

// GET /api/articles/:id  (numeric id or ObjectId)
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const db = await connectDB();
    const coll = db.collection('articles');
    const id = req.params.id;
    let row = null;
    if (/^[a-f\d]{24}$/i.test(id)) {
      row = await coll.findOne({ _id: new ObjectId(id) });
    }
    if (!row && /^\d+$/.test(id)) {
      row = await coll.findOne({ id: Number(id) });
    }
    if (!row) return res.status(404).json({ error: 'Not found' });
    res.json(row);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch article', detail: (err as Error).message });
  }
});

export default router;
