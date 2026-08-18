import { Link } from 'react-router-dom'
import { usePreferences } from '../../context/usePreferences'
import type { Video } from '../../data/videos'

export default function VideoCard({ video }: { video: Video }) {
  const { t } = usePreferences()
  return (
    <Link
      to={`/video/${video.slug}`}
      aria-label={video.title}
      className="block w-full max-sm:w-[240px] max-sm:shrink-0 no-underline"
    >
      <div className="relative w-full aspect-[182/209] overflow-hidden rounded-[7px] bg-[#000000]">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span
          role="img"
          aria-label={t('playVideo')}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="w-[44px] h-[44px] flex items-center justify-center rounded-[50%] bg-[#00000099] text-[#ffffff]">
            <svg className="w-[18px] h-[18px] ml-[2px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </span>
        </span>
      </div>
      <span className="video-card-title mt-[8px] block text-[#000000] dark:text-[#e8e8e8] font-['Rasa'] font-normal text-[19px] lg:text-[22px] leading-[1.25]">
        {video.title}
      </span>
      <span className="video-card-meta mt-[4px] block text-[#949494] dark:text-[#b0b0b0] font-['Rasa'] font-bold text-[16px] lg:text-[18px]">
        {video.date}
      </span>
    </Link>
  )
}