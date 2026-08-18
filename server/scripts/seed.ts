import 'dotenv/config';
import { connectDB } from '../src/config/db';
import { articles } from '../../react-app/src/data/articles';
import { marketInstruments } from '../../react-app/src/data/market';
import { pointsTable } from '../../react-app/src/data/sports';

async function main(): Promise<void> {
  const db = await connectDB();

  const articleColl = db.collection('articles');
  await articleColl.deleteMany({});
  const now = Date.now();
  const docs = articles.map((a, i) => ({
    ...a,
    published_at: new Date(now - i * 60000),
    is_hero: i === 0,
    headline: a.title,
    body: a.content.map((b) => b.text).join('\n\n'),
    image_url: a.image,
    time_ago: '૨ કલાક પહેલા',
    read_time: '3 મિનિટ',
  }));
  await articleColl.insertMany(docs);

  const marketColl = db.collection('market_data');
  await marketColl.deleteMany({});
  await marketColl.insertMany(marketInstruments.map((m, i) => ({ ...m, sort_order: i, updated_at: new Date() })));

  const pointsColl = db.collection('points_table');
  await pointsColl.deleteMany({});
  await pointsColl.insertMany(pointsTable.map((p) => ({ ...p, updated_at: new Date() })));

  console.log(`Seeded ${docs.length} articles, ${marketInstruments.length} market rows, ${pointsTable.length} points rows.`);
  process.exit(0);
}

main().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
