export interface ArticleParagraph {
  type: 'paragraph' | 'heading';
  text: string;
}

export interface Article {
  slug: string;
  category: string;
  title: string;
  author: string;
  date: string;
  image: string;
  imageAlt: string;
  summary: string;
  content: ArticleParagraph[];
  related: string[];
}

export interface CategoryCount {
  category: string;
  article_count: number;
}

export interface MarketRow {
  name: string;
  value: string;
  change: string;
  up: boolean;
}

export interface PointsTableRow {
  team: string;
  matches: number;
  points: number;
}

export interface HealthResponse {
  server: 'ok';
  database: 'connected' | 'not connected';
}
