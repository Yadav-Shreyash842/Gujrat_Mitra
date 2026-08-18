import { usePreferences } from '../../context/usePreferences'
import type { Video } from '../../data/videos'

export default function VideoPlayer({ video }: { video: Video }) {
  const { t } = usePreferences()
  const hasSource = typeof video.videoUrl === 'string' && video.videoUrl.length > 0

  if (hasSource) {
    return (
      <div className="video-player relative w-full aspect-video bg-[#000000] overflow-hidden">
        <video
          className="w-full h-full block"
          src={video.videoUrl}
          poster={video.thumbnail}
          controls
          preload="metadata"
        />
      </div>
    )
  }

  return (
    <div className="video-player relative w-full aspect-video bg-[#000000] overflow-hidden">
      <img
        src={video.thumbnail}
        alt={video.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-[12px] bg-[#00000059]">
        <span
          role="img"
          aria-label={t('playVideo')}
          className="w-[64px] h-[64px] flex items-center justify-center rounded-[50%] bg-[#00000099] text-[#ffffff]"
        >
          <svg className="w-[26px] h-[26px] ml-[3px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5.14v13.72L19 12 8 5.14z" />
          </svg>
        </span>
        <span className="text-[#ffffff] font-['Hind_Vadodara'] font-normal text-[14px]">
          {t('videoUnavailable')}
        </span>
      </div>
    </div>
  )
}