import type { Article } from '../data/articles'
import { getArticle as localGetArticle } from '../data/articles'
import type { MarketInstrument } from '../data/market'
import { marketInstruments as localMarket } from '../data/market'
import type { PointsTableRow } from '../data/sports'
import { pointsTable as localPoints } from '../data/sports'
import {
  getArticlesByCategory as localArticlesByCategory,
  getCategoryCodes,
} from '../utils/categoryArticles'

const TIMEOUT_MS = 2500

async function fetchJSON<T>(url: string): Promise<T> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
  try {
    const res = await fetch(url, { signal: controller.signal })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return (await res.json()) as T
  } finally {
    clearTimeout(timer)
  }
}

export async function fetchArticleBySlug(slug: string): Promise<Article | undefined> {
  try {
    const row = await fetchJSON<Article | null>(`/api/articles/slug/${encodeURIComponent(slug)}`)
    if (row && row.slug) return row
  } catch {
    // fall through to local data
  }
  return localGetArticle(slug)
}

export async function fetchArticlesByCategory(slug: string): Promise<Article[]> {
  try {
    const codes = getCategoryCodes(slug)
    if (codes.length === 0) return []
    let rows: Article[]
    if (codes.length === 1) {
      rows = await fetchJSON<Article[]>(`/api/articles?category=${encodeURIComponent(codes[0])}&limit=50`)
    } else {
      rows = await fetchJSON<Article[]>(`/api/articles?limit=100`)
      rows = rows.filter((article) => codes.includes(article.category))
    }
    if (Array.isArray(rows) && rows.length > 0) return rows
  } catch {
    // fall through to local data
  }
  return localArticlesByCategory(slug)
}

export async function fetchMarketInstruments(): Promise<MarketInstrument[]> {
  try {
    const rows = await fetchJSON<MarketInstrument[]>(`/api/market`)
    if (Array.isArray(rows) && rows.length > 0) return rows
  } catch {
    // fall through to local data
  }
  return localMarket
}

export async function fetchPointsTable(): Promise<PointsTableRow[]> {
  try {
    const rows = await fetchJSON<PointsTableRow[]>(`/api/sports/points-table`)
    if (Array.isArray(rows) && rows.length > 0) return rows
  } catch {
    // fall through to local data
  }
  return localPoints
}
