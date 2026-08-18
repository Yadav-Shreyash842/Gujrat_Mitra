import { Fragment, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MobileHeader from './MobileHeader'
import SearchBar from '../search/SearchBar'
import PreferencesButton from '../PreferencesButton'
import ProfileMenu from '../ProfileMenu'
import { navItems } from '../../data/nav'
import { useAuth } from '../../context/useAuth'
import { usePreferences } from '../../context/usePreferences'
import { useToast } from '../useToast'

const HEADER_OFFSET = 96

function LogOutIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, signOut } = useAuth()
  const { t } = usePreferences()
  const { showToast } = useToast()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const activeSlug = location.pathname.startsWith('/category/')
    ? location.pathname.replace('/category/', '')
    : null

  useEffect(() => {
    if (!dropdownOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDropdownOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [dropdownOpen])

  const goToPoll = () => {
    setDropdownOpen(false)
    const scrollToPoll = () => {
      const el = document.getElementById('poll')
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
        window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' })
      }
    }
    if (location.pathname === '/') {
      scrollToPoll()
    } else {
      navigate('/', { state: { scrollToPoll: true } })
    }
  }

  const goTo = (path: string) => {
    setDropdownOpen(false)
    navigate(path)
  }

  return (
    <div className="flex flex-col lg:block lg:top-[0px] lg:left-[4px] w-full h-auto lg:h-[154px] bg-[url('/images/v47_86.png')] bg-no-repeat bg-center bg-cover lg:overflow-hidden lg:absolute">
      <MobileHeader />
      <div className="order-2 lg:order-none flex items-center lg:top-[110px] lg:left-[3px] w-full h-auto lg:h-[44px] bg-[url('/images/v47_87.png')] bg-no-repeat bg-center bg-cover lg:overflow-hidden lg:absolute">
        <div className="hidden lg:block lg:top-[0px] lg:left-[58px] w-full lg:w-[1283px] h-[44px] bg-[#fef5dc] lg:absolute" />
        <Link to="/" aria-label="હોમ" className="home-nav relative flex items-center justify-center shrink-0 no-underline w-[66px] h-[44px] bg-[#fece07]">
          <div className="w-[30px] h-[24px] bg-[url('/images/v47_90.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:top-[10px] lg:left-[14px] lg:absolute" />
        </Link>
        <div className="flex items-center overflow-x-auto lg:overflow-hidden flex-1 min-w-0 h-[44px] lg:block lg:top-[3px] lg:left-[73px] lg:w-[1200px] lg:h-[37px] bg-[#fef5dc] bg-[url('/images/v47_91.png')] bg-no-repeat bg-center bg-cover lg:absolute mobile-cat-nav max-lg:flex-nowrap max-lg:overscroll-x-contain">
          {navItems.map((item, index) => {
            const left = Number(item.itemLeft.match(/\d+/)?.[0] ?? '0')
            const sepLeft = index === 0 ? null : left - 8
            const isActive = activeSlug === item.slug
            const activeColor = isActive ? 'text-[#1302ff]' : item.color
            return (
              <Fragment key={item.label}>
                {sepLeft !== null && (
                  <div className="w-px h-5 bg-[#cccccc] lg:top-[6px] lg:absolute max-lg:shrink-0" style={{ left: `${sepLeft}px` }} />
                )}
                {index === navItems.length - 1 ? (
                  <>
                    <Link
                      to={`/category/${item.slug}`}
                      className={`max-lg:hidden shrink-0 lg:absolute ${item.itemTop} ${item.itemLeft} ${item.itemW} h-auto lg:h-[27px] bg-[url('/images/${item.img}')] bg-no-repeat bg-center bg-cover p-[5px_10px] overflow-hidden block no-underline`}
                    >
                      <span className={`lg:absolute block ${item.spanTop} lg:left-[10px] ${item.spanW} ${activeColor} font-['Hind_Vadodara'] font-normal text-[18px] text-left`}>
                        {item.label}
                      </span>
                    </Link>
                    <button
                      type="button"
                      aria-expanded={dropdownOpen}
                      aria-haspopup="menu"
                      onClick={() => setDropdownOpen((o) => !o)}
                      onMouseDown={(e) => e.stopPropagation()}
                      className={`lg:hidden flex items-center justify-center gap-[4px] shrink-0 min-w-[58px] h-[44px] bg-[url('/images/${item.img}')] bg-no-repeat bg-center bg-cover p-[5px_10px] overflow-hidden border-none cursor-pointer ${
                        dropdownOpen
                          ? 'text-[#1302ff]'
                          : 'text-[#000000] dark:text-[#e8e8e8]'
                      }`}
                    >
                      <span className="font-['Hind_Vadodara'] font-normal text-[18px] text-left whitespace-nowrap">
                        {item.label}
                      </span>
                      <svg
                        className={`w-[14px] h-[14px] shrink-0 transition-transform ${
                          dropdownOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </>
                ) : index === 0 ? (
                  <Link
                    to={`/category/${item.slug}`}
                    className="relative top-[0px] left-[0px] w-[102px] h-auto lg:h-[37px] bg-[url('/images/v47_92.png')] bg-no-repeat bg-center bg-cover p-[5px_10px] overflow-hidden max-lg:shrink-0 block no-underline"
                  >
                    <span className={`lg:absolute block ${item.spanTop} lg:left-[10px] ${item.spanW} ${activeColor} font-['Hind_Vadodara'] font-normal text-[18px] text-left`}>
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <Link
                    to={`/category/${item.slug}`}
                    className={`shrink-0 lg:absolute ${item.itemTop} ${item.itemLeft} ${item.itemW} h-auto lg:h-[27px] bg-[url('/images/${item.img}')] bg-no-repeat bg-center bg-cover p-[5px_10px] overflow-hidden max-lg:shrink-0 block no-underline`}
                  >
                    <span className={`lg:absolute block ${item.spanTop} lg:left-[10px] ${item.spanW} ${activeColor} font-['Hind_Vadodara'] font-normal text-[18px] text-left`}>
                      {item.label}
                    </span>
                  </Link>
                )}
              </Fragment>
            )
          })}
          <div className="hidden lg:block lg:absolute lg:top-[4px] lg:right-[-4px] relative">
            <SearchBar variant="desktop" />
          </div>
        </div>
        {dropdownOpen && (
          <>
            <div
              className="hidden max-lg:block fixed inset-0 z-[104]"
              onClick={() => setDropdownOpen(false)}
              aria-hidden="true"
            />
            <div
              ref={menuRef}
              role="menu"
              className="hidden max-lg:block fixed left-0 right-0 top-[96px] z-[110] bg-[#ffffff] dark:bg-[#1a1a1a] border-b border-[#e5e5e5] dark:border-[#333333] shadow-xl"
            >
              <button
                type="button"
                role="menuitem"
                onClick={goToPoll}
                className="flex items-center min-h-[44px] w-full px-[16px] bg-transparent border-none cursor-pointer text-left font-['Hind_Vadodara'] font-normal text-[18px] text-[#000000] dark:text-[#e8e8e8] hover:bg-[#fef5dc] dark:hover:bg-[#2a2a2a]"
              >
                પોલ
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => goTo('/market')}
                className="flex items-center min-h-[44px] w-full px-[16px] bg-transparent border-none cursor-pointer text-left font-['Hind_Vadodara'] font-normal text-[18px] text-[#000000] dark:text-[#e8e8e8] hover:bg-[#fef5dc] dark:hover:bg-[#2a2a2a]"
              >
                વેપાર બજાર
              </button>
              <button
                type="button"
                role="menuitem"
                onClick={() => goTo('/sports')}
                className="flex items-center min-h-[44px] w-full px-[16px] bg-transparent border-none cursor-pointer text-left font-['Hind_Vadodara'] font-normal text-[18px] text-[#000000] dark:text-[#e8e8e8] hover:bg-[#fef5dc] dark:hover:bg-[#2a2a2a]"
              >
                કોમનવેલ્થ ગેમ્સ
              </button>
            </div>
          </>
        )}
        <div className="text-[#fff]" />
      </div>
      <div className="order-1 lg:order-none lg:top-[0px] lg:left-[3px] w-full h-auto lg:h-[90px] bg-[url('/images/v47_117.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute max-lg:hidden">
        <div className="relative top-[0px] left-[0px] w-full lg:w-[835px] h-auto lg:h-[90px] bg-[url('/images/v47_118.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
          <div className="relative top-[0px] left-[0px] w-full lg:w-[360px] h-[90px] bg-[url('/images/v47_119.png')] bg-no-repeat bg-center bg-cover overflow-hidden" />
          <div className="lg:top-[7px] lg:left-[403px] w-full lg:w-[432px] h-[75px] bg-[url('/images/v47_120.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute" />
        </div>
        <div className="hidden lg:flex lg:items-stretch lg:gap-[12px] lg:top-[0px] lg:left-[1085px] lg:h-[80px] lg:absolute">
          <div className="flex flex-col justify-center gap-[8px]">
            <Link
              to="/epaper"
              className="text-[#1302ff] font-['Inter'] font-normal text-[14px] text-left block no-underline hover:underline whitespace-nowrap"
            >
              E-PAPER HOME
            </Link>
            <div className="flex flex-col gap-[6px]">
              <ProfileMenu variant="account" />
              {user && (
                <button
                  type="button"
                  onClick={() => {
                    signOut()
                    showToast(t('signedOut'))
                  }}
                  className="flex items-center gap-[6px] p-0 bg-transparent border-none cursor-pointer text-[#d32f2f] font-['Inter'] font-normal text-[12px] leading-none"
                >
                  <LogOutIcon />
                  {t('signOut')}
                </button>
              )}
            </div>
          </div>
          <div className="w-px self-stretch bg-[#bababa]" aria-hidden="true" />
          <div className="self-stretch w-[99px] bg-[url('/images/v47_122.png')] bg-no-repeat bg-center bg-cover shrink-0" aria-hidden="true" />
        </div>
        <PreferencesButton
          align="right"
          className="hidden lg:block lg:absolute lg:top-[12px] lg:right-[12px]"
          trigger={
            <>
              <span className="sr-only">Settings</span>
              <svg
                className="w-[20px] h-[20px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </>
          }
        />
      </div>
    </div>
  )
}
