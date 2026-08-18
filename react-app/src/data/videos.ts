import { getArticle } from './articles'

export interface Video {
  slug: string
  title: string
  thumbnail: string
  category: string
  date: string
  duration?: string
  videoUrl?: string
  description?: string
  related: string[]
}

const catalog: Omit<Video, 'category' | 'date' | 'description' | 'related'>[] = [
  { slug: 'variali-fennel-benefits', title: 'વરિયાળી ખાવાના ફાયદા', thumbnail: '/images/v47_254.png' },
  { slug: 'crocodiles-cold-weather', title: 'મગરો બર્ફીલા વાતાવરણમાં કેવી રીતે ટકી રહે છે', thumbnail: '/images/v47_259.png' },
  { slug: 'electric-cars-india-2026', title: '2026 માં ભારતમાં આવનારી ઇલેક્ટ્રિક કાર', thumbnail: '/images/v47_264.png' },
  { slug: 'exam-prep-10-mistakes', title: 'પરીક્ષાની તૈયારીમાં 10 ભૂલો તમારા સ્કોર ઘટાડી શકે છે', thumbnail: '/images/v47_269.png' },
  { slug: 'kiwi-7-health-benefits', title: 'કિવીના 7 સ્વાસ્થ્ય લાભો', thumbnail: '/images/v47_274.png' },
]

export const videos: Video[] = catalog.map((v) => ({
  ...v,
  category: 'VIDEO',
  date: '૨૪ ડિસેમ્બર, ૨૦૨૫',
  description: getArticle(v.slug)?.content?.[0]?.text,
  related: catalog.filter((other) => other.slug !== v.slug).map((other) => other.slug),
}))

export function getVideo(slug: string): Video | undefined {
  return videos.find((v) => v.slug === slug)
}

export function getRelatedVideos(slug: string, count = 4): Video[] {
  const current = getVideo(slug)
  if (!current) return []
  return current.related
    .map((relatedSlug) => getVideo(relatedSlug))
    .filter((v): v is Video => v !== undefined)
    .slice(0, count)
}
