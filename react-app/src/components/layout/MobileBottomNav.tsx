import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { usePreferences } from '../../context/usePreferences'

interface BottomNavItem {
  id: string
  labelKey: string
  route?: string
  icon: ReactNode
}

const items: BottomNavItem[] = [
  { id: 'beeps', labelKey: 'beeps', route: '/beeps', icon: (
    <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  ) },
  { id: 'epaper', labelKey: 'epaper', route: '/epaper', icon: (
    <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0V6" />
      <path d="M14 6h6M14 10h6M14 14h6M10 4h4" />
    </svg>
  ) },
  { id: 'aapni-aaj', labelKey: 'aapniAaj', route: '/aapni-aaj', icon: (
    <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  ) },
  { id: 'video', labelKey: 'video', icon: (
    <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  ) },
  { id: 'games', labelKey: 'games', route: '/games', icon: (
    <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="3" />
      <circle cx="8" cy="12" r="1" fill="currentColor" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
      <circle cx="16" cy="12" r="1" fill="currentColor" />
    </svg>
  ) },
]

const HEADER_OFFSET = 64

export default function MobileBottomNav() {
  const [active, setActive] = useState(items[0].id)
  const location = useLocation()
  const navigate = useNavigate()
  const pendingTarget = useRef<string | null>(null)
  const { t } = usePreferences()

  const doScroll = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
    window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' })
  }

  useEffect(() => {
    if (location.pathname === '/' && pendingTarget.current) {
      const id = pendingTarget.current
      pendingTarget.current = null
      requestAnimationFrame(() => doScroll(id))
    }
  }, [location.pathname])

  useEffect(() => {
    const updateActive = () => {
      const routeItem = items.find((item) => item.route && location.pathname === item.route)
      if (routeItem) {
        setActive(routeItem.id)
        return
      }
      const pos = window.scrollY + HEADER_OFFSET
      let current = items[0].id
      for (const item of items) {
        const el = document.getElementById(item.id)
        if (!el) continue
        const top = el.getBoundingClientRect().top + window.scrollY
        if (top <= pos) current = item.id
      }
      setActive(current)
    }
    updateActive()
    window.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)
    return () => {
      window.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [location.pathname])

  const scrollToSection = (item: BottomNavItem) => {
    if (item.route) {
      navigate(item.route)
      return
    }
    if (document.getElementById(item.id)) {
      doScroll(item.id)
      return
    }
    pendingTarget.current = item.id
    navigate('/')
  }

  return (
    <nav
      aria-label={t('mainMenu')}
      className="fixed bottom-0 left-0 right-0 z-[100] hidden max-lg:block bg-[#ffffff] dark:bg-[#1a1a1a] border-t border-[#e5e5e5] dark:border-[#333333]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-5 w-full max-w-[640px] mx-auto">
        {items.map((item) => {
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              type="button"
              aria-label={t(item.labelKey)}
              aria-current={isActive ? 'true' : undefined}
              onClick={() => scrollToSection(item)}
              className={`flex flex-col items-center justify-center gap-[2px] min-h-[56px] w-full bg-transparent border-none cursor-pointer p-0 ${
                isActive ? 'text-[#ffad15]' : 'text-[#00000080] dark:text-[#b0b0b0]'
              }`}
            >
              {item.icon}
              <span
                className={`font-['Hind_Vadodara'] text-[11px] leading-none ${
                  isActive ? 'font-bold' : 'font-normal'
                }`}
              >
                {t(item.labelKey)}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}