import { useRef } from 'react'
import { Link } from 'react-router-dom'

const trendingTopics = [
  { label: 'રશિયા-યધ્ધુ નેર્કુય' },
  { label: 'રશિયા-યધ્ધુ નેર્કુય' },
  { label: 'IPL 2025' },
  { label: 'સુરત ખાદીપુર' },
  { label: 'વિમાન દુર્ઘટના' },
  { label: 'ઇઝરાયેલ-ઇરાન' },
  { label: 'સુરત મેટ્રો' },
  { label: 'IPL 2026' },
  { label: 'અમદાવાદ વિમાન દુર્ઘટના' },
  { label: 'ઇઝરાયેલ-ઇરાન' },
  { label: 'સુરત મેટ્રો' },
  { label: 'IPL 2026' },
]

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="#FFCD05" />
      <g stroke="#FFCD05" strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
        <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
        <line x1="19.07" y1="4.93" x2="16.95" y2="7.05" />
        <line x1="7.05" y1="16.95" x2="4.93" y2="19.07" />
      </g>
    </svg>
  )
}

function TrendingPill({ label, children, to }: { label?: string; children?: React.ReactNode; to?: string }) {
  const pillClass =
    "inline-flex items-center gap-1 h-[34px] px-[10px] rounded-full border border-[#FFCD05] font-['Roboto'] font-bold text-[15px] text-black whitespace-nowrap flex-shrink-0 cursor-pointer hover:bg-[#00adf730] transition-colors no-underline"
  const content = (
    <>
      {children ?? (
        <>
          <span className="leading-none">{label}</span>
          <span className="font-normal text-[15px] leading-none">{'>'}</span>
        </>
      )}
    </>
  )
  if (to) {
    return (
      <Link to={to} className={pillClass} style={{ background: 'rgba(0,173,247,0.11)' }}>
        {content}
      </Link>
    )
  }
  return (
    <div className={pillClass.replace(' no-underline', '')} style={{ background: 'rgba(0,173,247,0.11)' }}>
      {content}
    </div>
  )
}

export default function Ticker({ className }: { className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir === 'right' ? 180 : -180, behavior: 'smooth' })
  }

  return (
    <div className={`w-full h-auto lg:h-[37px] flex items-center gap-2 px-2 lg:px-4 lg:overflow-hidden ${className ?? ''} max-lg:px-[8px]`}>
      {/* Left scroll button */}
      <button
        type="button"
        onClick={() => scroll('left')}
        className="flex-shrink-0 w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#f3f4f6] transition-colors"
        style={{ border: '1.5px solid #374151' }}
        aria-label="Scroll left"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="11 6 5 12 11 18" />
        </svg>
      </button>

      {/* Scrollable pills area */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-x-auto"
        style={{ scrollBehavior: 'smooth', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
      >
        <div className="flex items-center gap-[6px] flex-nowrap w-max">
          {/* First pill: sun + આપની આજ (links to Aapni Aaj) */}
          <TrendingPill to="/aapni-aaj">
            <SunIcon />
            <span className="font-normal leading-none">{'આપની આજ | રાશી, તિથિ, મુહૂર્ત >'}</span>
          </TrendingPill>

          {trendingTopics.map((t, i) => (
            <TrendingPill key={i} label={t.label} />
          ))}
        </div>
      </div>

      {/* Right scroll button */}
      <button
        type="button"
        onClick={() => scroll('right')}
        className="flex-shrink-0 w-[36px] h-[36px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-[#f3f4f6] transition-colors"
        style={{ border: '1.5px solid #374151' }}
        aria-label="Scroll right"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      </button>
    </div>
  )
}
