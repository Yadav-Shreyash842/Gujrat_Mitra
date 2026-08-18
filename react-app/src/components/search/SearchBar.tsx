import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { searchArticles } from '../../utils/searchArticles'
import { usePreferences } from '../../context/usePreferences'

export default function SearchBar({
  variant = 'desktop',
  onDone,
}: {
  variant?: 'desktop' | 'mobile'
  onDone?: () => void
}) {
  const [query, setQuery] = useState('')
  const [focused, setFocused] = useState(false)
  const [pos, setPos] = useState<{ top: number; left: number; width: number } | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const { t } = usePreferences()

  const results = useMemo(() => searchArticles(query), [query])
  const showResults = focused && query.trim().length > 0

  const measure = () => {
    if (wrapRef.current) {
      const r = wrapRef.current.getBoundingClientRect()
      setPos({ top: r.bottom + 4, left: r.left, width: r.width })
    }
  }

  useEffect(() => {
    if (!showResults) return
    measure()
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', measure, { passive: true })
    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', measure)
    }
  }, [showResults])

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setFocused(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  const clear = () => {
    setQuery('')
    setFocused(false)
    onDone?.()
  }

  const inputClass =
    'w-full h-[32px] px-[8px] pr-[28px] py-[1px] border border-[#d0d0d0] rounded-[3px] bg-white text-[11px] font-[\'Hind_Vadodara\'] text-[#999999] focus:outline-none'

  return (
    <div ref={wrapRef} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setQuery('')
              setFocused(false)
              onDone?.()
            }
            if (e.key === 'Enter' && results.length > 0) {
              onDone?.()
            }
          }}
          placeholder={t('search')}
          aria-label={t('searchNews')}
className={
              variant === 'desktop'
                ? 'w-[170px] h-[32px] px-[8px] pr-[28px] py-[1px] border border-[#d0d0d0] rounded-[3px] bg-white text-[11px] font-[\'Hind_Vadodara\'] text-[#999999] focus:outline-none'
                : inputClass
            }
        />
        {query ? (
          <button
            type="button"
            aria-label={t('clearSearch')}
            onClick={clear}
            className="absolute right-[6px] top-[50%] transform -translate-y-[50%] w-[16px] h-[16px] flex items-center justify-center bg-transparent border-none cursor-pointer text-[#999999] p-0"
          >
            <svg
              className="w-[12px] h-[12px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        ) : (
          <svg
            className="absolute right-[8px] top-[50%] transform -translate-y-[50%] w-[14px] h-[14px] text-[#999999] pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        )}
      </div>

      {showResults && pos && (
        <div
          style={{ top: pos.top, left: pos.left, width: pos.width }}
          className="fixed z-[120] bg-[#ffffff] dark:bg-[#1c1c1c] border border-[#e5e5e5] dark:border-[#333333] rounded-[4px] shadow-[0px_4px_16px_rgba(0,_0,_0,_0.12)] overflow-hidden"
        >
          {results.length === 0 ? (
            <p className="px-[12px] py-[12px] text-[#000000] dark:text-[#e8e8e8] font-['Hind_Vadodara'] font-normal text-[14px]">
              {t('noResults')}
            </p>
          ) : (
            <ul className="max-h-[320px] overflow-y-auto">
              {results.map((article) => (
                <li key={article.slug}>
                  <Link
                    to={`/news/${article.slug}`}
                    onClick={() => {
                      setFocused(false)
                      setQuery('')
                      onDone?.()
                    }}
                    className="flex items-center gap-[10px] px-[10px] py-[8px] no-underline hover:bg-[#fef5dc] dark:hover:bg-[#2a2a2a]"
                  >
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="w-[56px] h-[40px] object-cover rounded-[3px] shrink-0"
                    />
                    <span className="min-w-0">
                      <span className="block text-[#000000] dark:text-[#e8e8e8] font-['Hind_Vadodara'] font-normal text-[14px] leading-[1.3] line-clamp-2">
                        {article.title}
                      </span>
                      <span className="block mt-[2px] text-[#999999] font-['Inter'] font-normal text-[11px] uppercase">
                        {article.category} • {article.date}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}