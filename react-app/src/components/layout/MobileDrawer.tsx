import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navItems } from '../../data/nav'
import { useAuth } from '../../context/useAuth'
import { usePreferences } from '../../context/usePreferences'
import { useToast } from '../useToast'

function Icon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  } as const
  switch (name) {
    case 'home':
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M10 21v-6h4v6" />
        </svg>
      )
    case 'national':
      return (
        <svg {...common}>
          <path d="M4 5h16v14H4z" />
          <path d="M4 9h16" />
          <path d="M9 9v10" />
        </svg>
      )
    case 'world':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
        </svg>
      )
    case 'sports':
      return (
        <svg {...common}>
          <path d="M6 9a6 6 0 0 1 12 0c0 5-2 8-6 8s-6-3-6-8Z" />
          <path d="M12 17v4M8 21h8" />
        </svg>
      )
    case 'gujarat':
      return (
        <svg {...common}>
          <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      )
    case 'surat':
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V8l7-5 7 5v13" />
          <path d="M9 21v-4h6v4" />
        </svg>
      )
    case 'health':
      return (
        <svg {...common}>
          <path d="M12 20.5S4 15 4 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5c0 5.5-8 11-8 11Z" />
        </svg>
      )
    case 'entertainment':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m10 9 5 3-5 3z" />
        </svg>
      )
    case 'politics':
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V10h14v11" />
          <path d="M12 3v7M12 3 8 6l4 3 4-3z" />
        </svg>
      )
    case 'video':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m10 8 6 4-6 4z" />
        </svg>
      )
    case 'opinion':
      return (
        <svg {...common}>
          <path d="m4 20 1-4L16 5l3 3L8 19z" />
          <path d="m13 8 3 3" />
        </svg>
      )
    case 'charchapatra':
      return (
        <svg {...common}>
          <path d="M6 3h9l4 4v14H6z" />
          <path d="M15 3v4h4" />
          <path d="M9 12h6M9 16h6" />
        </svg>
      )
    case 'other':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      )
    case 'epaper':
      return (
        <svg {...common}>
          <path d="M5 4h11l3 3v13H5z" />
          <path d="M16 4v4h3" />
        </svg>
      )
    case 'signUp':
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
          <circle cx="9.5" cy="7" r="4" />
          <path d="M19 8v6M16 11h6" />
        </svg>
      )
    case 'signIn':
      return (
        <svg {...common}>
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <path d="m10 17 5-5-5-5M15 12H3" />
        </svg>
      )
    case 'profile':
      return (
        <svg {...common}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    case 'signOut':
      return (
        <svg {...common}>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <path d="m16 17 5-5-5-5M21 12H9" />
        </svg>
      )
    case 'chevron':
      return (
        <svg {...common} strokeWidth={2}>
          <path d="m9 18 6-6-6-6" />
        </svg>
      )
    default:
      return null
  }
}

const rowBase =
  'flex items-center min-h-[46px] px-[16px] no-underline text-[#000000] dark:text-[#e8e8e8] font-[\'Hind_Vadodara\'] font-normal text-[17px] border-b border-[#f0f0f0] dark:border-[#2a2a2a]'
const iconWrap =
  'flex items-center justify-center w-[28px] shrink-0 text-[#000000] dark:text-[#e8e8e8]'
const chevronWrap =
  'flex items-center justify-center ml-auto w-[18px] shrink-0 text-[#6b6b6b] dark:text-[#9a9a9a]'
const activeBg = 'bg-[#fef5dc] dark:bg-[#2a2a2a] border-l-[3px] border-l-[#ffad15] font-bold text-[#1302ff] dark:text-[#1302ff]'

export default function MobileDrawer({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const location = useLocation()
  const { t } = usePreferences()
  const { user, signOut } = useAuth()
  const { showToast } = useToast()
  const activeSlug = location.pathname.startsWith('/category/')
    ? location.pathname.replace('/category/', '')
    : null

  useEffect(() => {
    if (!open) return
    triggerRef.current = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      triggerRef.current?.focus()
    }
  }, [open, onClose])

  return (
    <div className="hidden max-lg:block">
      {open && (
        <div
          className="fixed inset-0 z-[105] bg-black/40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label={t('menu')}
        className={`fixed inset-y-0 left-0 z-[110] w-[85vw] max-w-[360px] bg-[#ffffff] dark:bg-[#1a1a1a] shadow-xl transition-transform duration-300 flex flex-col ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-[16px] h-[56px] border-b border-[#e5e5e5] dark:border-[#333333] shrink-0">
          <div className="w-[130px] h-[36px] bg-[url('/images/v47_119.png')] bg-no-repeat bg-center bg-contain" />
          <button
            ref={closeButtonRef}
            type="button"
            aria-label={t('close')}
            onClick={onClose}
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
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain">
          <Link
            to="/"
            onClick={onClose}
            className={`${rowBase} ${location.pathname === '/' ? activeBg : 'hover:bg-[#faf5e4] dark:hover:bg-[#2a2a2a]'}`}
          >
            <span className={iconWrap}>
              <Icon name="home" />
            </span>
            <span className="ml-[12px]">{t('home')}</span>
            <span className={chevronWrap}>
              <Icon name="chevron" />
            </span>
          </Link>

          {navItems.map((item) => (
            <Link
              key={item.label}
              to={`/category/${item.slug}`}
              onClick={onClose}
              className={`${rowBase} ${
                activeSlug === item.slug
                  ? activeBg
                  : 'hover:bg-[#faf5e4] dark:hover:bg-[#2a2a2a]'
              }`}
            >
              <span className={iconWrap}>
                <Icon name={item.slug} />
              </span>
              <span className="ml-[12px]">{item.label.trim()}</span>
              <span className={chevronWrap}>
                <Icon name="chevron" />
              </span>
            </Link>
          ))}
        </nav>

        <div className="shrink-0 border-t-[3px] border-t-[#ffad15] bg-[#fef9ec] dark:bg-[#20201c]">
          <Link
            to="/epaper"
            onClick={onClose}
            className={`${rowBase} hover:bg-[#faf5e4] dark:hover:bg-[#2a2a2a] border-b-0 ${
              location.pathname === '/epaper' ? activeBg : ''
            }`}
          >
            <span className={iconWrap}>
              <Icon name="epaper" />
            </span>
            <span className="ml-[12px]">{t('epaper')}</span>
            <span className={chevronWrap}>
              <Icon name="chevron" />
            </span>
          </Link>

          {user ? (
            <>
              <Link
                to="/profile"
                onClick={onClose}
                className={`${rowBase} hover:bg-[#faf5e4] dark:hover:bg-[#2a2a2a] border-b-0 ${
                  location.pathname === '/profile' ? activeBg : ''
                }`}
              >
                <span className={iconWrap}>
                  <Icon name="profile" />
                </span>
                <span className="ml-[12px]">{t('profile')}</span>
                <span className={chevronWrap}>
                  <Icon name="chevron" />
                </span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  signOut()
                  showToast(t('signedOut'))
                  onClose()
                }}
                className={`${rowBase} w-full bg-transparent cursor-pointer text-left border-b-0 text-[#d32f2f] dark:text-[#ef6c6c] hover:bg-[#faf5e4] dark:hover:bg-[#2a2a2a]`}
              >
                <span className="flex items-center justify-center w-[28px] shrink-0 text-[#d32f2f] dark:text-[#ef6c6c]">
                  <Icon name="signOut" />
                </span>
                <span className="ml-[12px]">{t('signOut')}</span>
                <span className={chevronWrap}>
                  <Icon name="chevron" />
                </span>
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                onClick={onClose}
                className={`${rowBase} hover:bg-[#faf5e4] dark:hover:bg-[#2a2a2a] border-b-0 ${
                  location.pathname === '/register' ? activeBg : ''
                }`}
              >
                <span className={iconWrap}>
                  <Icon name="signUp" />
                </span>
                <span className="ml-[12px]">{t('signUp')}</span>
                <span className={chevronWrap}>
                  <Icon name="chevron" />
                </span>
              </Link>
              <Link
                to="/login"
                onClick={onClose}
                className={`${rowBase} hover:bg-[#faf5e4] dark:hover:bg-[#2a2a2a] border-b-0 ${
                  location.pathname === '/login' ? activeBg : ''
                }`}
              >
                <span className={iconWrap}>
                  <Icon name="signIn" />
                </span>
                <span className="ml-[12px]">{t('login')}</span>
                <span className={chevronWrap}>
                  <Icon name="chevron" />
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
