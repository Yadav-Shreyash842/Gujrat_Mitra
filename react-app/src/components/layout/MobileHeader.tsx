import { useEffect, useRef, useState } from 'react'
import MobileDrawer from './MobileDrawer'
import SearchBar from '../search/SearchBar'
import ProfileMenu from '../ProfileMenu'
import { usePreferences } from '../../context/usePreferences'

export default function MobileHeader() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const { t } = usePreferences()

  useEffect(() => {
    if (!searchOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSearchOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false)
      }
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [searchOpen])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] hidden max-lg:flex items-center justify-between gap-[8px] w-full h-[52px] px-[16px] bg-[#ffffff] dark:bg-[#1a1a1a] border-b border-[#e5e5e5] dark:border-[#333333]">
        <div className="flex items-center gap-[8px] min-w-0">
          <button
            type="button"
            aria-label={t('menu')}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
            className="w-[40px] h-[40px] flex items-center justify-center shrink-0 bg-transparent border-none cursor-pointer text-[#000000] dark:text-[#e8e8e8] p-0"
          >
            <svg
              className="w-[24px] h-[24px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="w-[130px] h-[36px] bg-[url('/images/v47_119.png')] bg-no-repeat bg-center bg-contain shrink-0" />
        </div>
        <div className="flex items-center gap-[8px]">
          <button
            type="button"
            aria-label={t('search')}
            aria-expanded={searchOpen}
            aria-controls="mobile-search-panel"
            onClick={() => setSearchOpen(true)}
            className="w-[40px] h-[40px] flex items-center justify-center shrink-0 bg-transparent border-none cursor-pointer text-[#000000] dark:text-[#e8e8e8] p-0"
          >
            <svg
              className="w-[24px] h-[24px]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <ProfileMenu buttonClassName="w-[40px] h-[40px] shrink-0" />
        </div>
      </div>
      <div className="hidden max-lg:block h-[52px] w-full shrink-0" aria-hidden="true" />
      {searchOpen && (
        <div
          id="mobile-search-panel"
          role="dialog"
          aria-modal="false"
          aria-label={t('searchNews')}
          ref={searchRef}
          className="hidden max-lg:block fixed top-0 left-0 right-0 z-[115] bg-[#ffffff] dark:bg-[#1a1a1a] border-b border-[#e5e5e5] dark:border-[#333333]"
          style={{ paddingBottom: 'env(safe-area-inset-top)' }}
        >
          <div className="flex items-center gap-[8px] px-[16px] pt-[8px] pb-[8px]">
            <div className="flex-1 min-w-0">
              <SearchBar
                variant="mobile"
                onDone={() => setSearchOpen(false)}
              />
            </div>
            <button
              type="button"
              aria-label={t('close')}
              onClick={() => setSearchOpen(false)}
              className="w-[32px] h-[32px] flex items-center justify-center shrink-0 bg-transparent border-none cursor-pointer text-[#000000] dark:text-[#e8e8e8] p-0"
            >
              <svg
                className="w-[20px] h-[20px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                viewBox="0 0 24 24"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  )
}
