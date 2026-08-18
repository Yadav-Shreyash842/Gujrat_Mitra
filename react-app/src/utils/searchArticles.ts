import { articles, type Article } from '../data/articles'

const MAX_RESULTS = 8

function normalize(value: string): string {
  return value.trim().toLocaleLowerCase()
}

function scoreArticle(article: Article, query: string): number {
  const q = normalize(query)
  if (!q) return 0
  const title = normalize(article.title)
  const category = normalize(article.category)
  const summary = normalize(article.summary)

  if (title === q) return 100
  if (title.includes(q)) return 80
  if (category.includes(q)) return 60
  if (summary.includes(q)) return 40
  if (
    article.content.some((block) => normalize(block.text).includes(q)) ||
    article.related.some((tag) => normalize(tag).includes(q))
  ) {
    return 20
  }
  return 0
}

export function searchArticles(query: string): Article[] {
  const q = normalize(query)
  if (!q) return []

  return articles
    .map((article) => ({ article, score: scoreArticle(article, q) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS)
    .map((entry) => entry.article)
}