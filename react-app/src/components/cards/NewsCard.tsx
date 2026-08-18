import { Link } from 'react-router-dom'

interface NewsCardProps {
  href: string
  image?: string
  imageAlt?: string
  title: string
  meta?: string
  variant?: 'featured' | 'card' | 'row' | 'text'
}

export default function NewsCard({
  href,
  image,
  imageAlt,
  title,
  meta,
  variant = 'card',
}: NewsCardProps) {
  if (variant === 'featured') {
    return (
      <Link to={href} className="block no-underline">
        <img
          src={image}
          alt={imageAlt}
          className="w-full aspect-[16/9] object-cover rounded-[7px]"
        />
        <span className="mt-[14px] block text-[#000000] dark:text-[#f2f2f2] font-['Rasa'] font-bold text-[26px] lg:text-[34px] leading-[1.25]">
          {title}
        </span>
        {meta && (
          <span className="category-page category-card-meta mt-[8px] block text-[#999999] font-['Inter'] font-normal text-[11px] uppercase">
            {meta}
          </span>
        )}
      </Link>
    )
  }

  if (variant === 'card') {
    return (
      <Link to={href} className="block no-underline">
        <img
          src={image}
          alt={imageAlt}
          className="w-full aspect-[16/9] object-cover rounded-[7px]"
        />
        <span className="category-page category-card-title block mt-[10px] text-[#000000] dark:text-[#e8e8e8] font-['Rasa'] font-normal text-[19px] lg:text-[22px] leading-[1.3]">
          {title}
        </span>
        {meta && (
          <span className="category-page category-card-meta block mt-[6px] text-[#999999] font-['Inter'] font-normal text-[11px] uppercase">
            {meta}
          </span>
        )}
      </Link>
    )
  }

  if (variant === 'row') {
    return (
      <Link to={href} className="flex gap-[14px] no-underline items-start">
        <img
          src={image}
          alt={imageAlt}
          className="w-[96px] h-[64px] object-cover rounded-[7px] shrink-0 lg:w-[107px] lg:h-[75px]"
        />
        <span className="min-w-0">
          <span className="category-page category-card-title block text-[#000000] dark:text-[#e8e8e8] font-['Rasa'] font-normal text-[18px] lg:text-[22px] leading-[1.3]">
            {title}
          </span>
          {meta && (
            <span className="category-page category-card-meta block mt-[6px] text-[#999999] font-['Inter'] font-normal text-[11px] uppercase">
              {meta}
            </span>
          )}
        </span>
      </Link>
    )
  }

  return (
    <Link
      to={href}
      className="category-page category-card-title block no-underline text-[#000000] dark:text-[#e8e8e8] font-['Rasa'] font-normal text-[18px] lg:text-[22px] leading-[1.3]"
    >
      {title}
    </Link>
  )
}