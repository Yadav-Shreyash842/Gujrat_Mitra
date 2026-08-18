import { Link } from 'react-router-dom'
import { slugForHeadline } from '../data/articles'

export default function NewsLink({ children }: { children: React.ReactNode }) {
  const title = typeof children === 'string' ? children : ''
  const slug = slugForHeadline(title)
  if (!slug) return <>{children}</>
  return (
    <Link to={`/news/${slug}`} className="no-underline" aria-label={title}>
      {children}
    </Link>
  )
}