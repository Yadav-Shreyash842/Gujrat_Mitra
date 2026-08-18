import { articles, type Article } from '../data/articles'
import { navItems } from '../data/nav'

const categoryCodes: Record<string, string[]> = {
  national: ['INDIA'],
  world: ['WORLD'],
  sports: ['CRICKET'],
  gujarat: ['GUJARAT'],
  surat: ['SURAT'],
  health: ['HEALTH'],
  entertainment: ['ENTERTAINMENT'],
  politics: ['POLITICS'],
  video: [],
  opinion: ['OPINION'],
  charchapatra: ['CHARCHAPATRA'],
  other: ['TECH', 'SCIENCE', 'EDUCATION', 'TRAVEL'],
}

export function getCategoryBySlug(slug: string): { slug: string; label: string } | undefined {
  return navItems.find((item) => item.slug === slug)
}

export function getCategoryCodes(slug: string): string[] {
  return categoryCodes[slug] ?? []
}

export function getArticlesByCategory(slug: string): Article[] {
  const codes = getCategoryCodes(slug)
  if (codes.length === 0) return []
  return articles.filter((article) => codes.includes(article.category))
}