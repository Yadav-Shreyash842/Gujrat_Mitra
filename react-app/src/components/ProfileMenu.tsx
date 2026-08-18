import { useCallback, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/useAuth'
import { usePreferences } from '../context/usePreferences'
import { useToast } from './useToast'
import PreferencesPanel from './PreferencesPanel'

const itemBase =
  'flex items-center gap-[10px] w-full px-[12px] py-[9px] text-left bg-transparent border-none cursor-pointer text-[#000000] dark:text-[#e8e8e8] font-[\'Hind_Vadodara\'] text-[14px] hover:bg-[#f4f4f4] dark:hover:bg-[#2a2a2a]'
const separator = 'h-[1px] bg-[#eeeeee] dark:bg-[#333333] my-[6px]'

function UserIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function LogOutIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}

function LogInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" y1="12" x2="3" y2="12" />
    </svg>
  )
}

function UserPlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="8.5" cy="7" r="4" />
      <line x1="20" y1="8" x2="20" y2="14" />
      <line x1="23" y1="11" x2="17" y2="11" />
    </svg>
  )
}

function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

function BackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function initialOf(user: { name: string; email: string } | null): string {
  if (user?.name && user.name.trim()) return user.name.trim().charAt(0).toUpperCase()
  if (user?.email && user.email.trim()) return user.email.trim().charAt(0).toUpperCase()
  return ''
}

function usernameOf(email: string): string {
  return email.split('@')[0] || email
}

export default function ProfileMenu({
  className,
  buttonClassName,
  variant = 'icon',
}: {
  className?: string
  buttonClassName?: string
  variant?: 'icon' | 'account'
}) {
  const { user, signOut } = useAuth()
  const { t } = usePreferences()
  const { showToast } = useToast()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<'menu' | 'prefs'>('menu')
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  const close = useCallback(() => {
    setOpen(false)
    setView('menu')
  }, [])

  const measure = useCallback(() => {
    if (!wrapRef.current) return
    const r = wrapRef.current.getBoundingClientRect()
    const panelW = view === 'prefs' ? 240 : 160
    const left = Math.max(8, Math.min(r.left + r.width - panelW, window.innerWidth - panelW - 8))
    setPos({ top: r.bottom + 8, left })
  }, [view])

  useEffect(() => {
    if (!open) return
    measure()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) close()
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
      window.removeEventListener('resize', measure)
    }
  }, [open, measure, close])

  useEffect(() => {
    close()
  }, [location.pathname, close])

  const initial = initialOf(user)
  const avatarBg = user?.avatar || '#1302ff'
  const displayName = user?.name?.trim() || usernameOf(user?.email ?? '')

  return (
    <div ref={wrapRef} className={className}>
      <button
        type="button"
        onClick={() => {
          setView('menu')
          setOpen((v) => !v)
        }}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Profile menu"
        className={`flex items-center justify-center cursor-pointer border-none p-0 bg-transparent text-[#000000] dark:text-[#e8e8e8] ${buttonClassName ?? ''}`}
      >
        {variant === 'account' && user ? (
          <span className="flex items-center gap-[8px]">
            {user.avatarUrl ? (
              <img
                src={user.avatarUrl}
                alt=""
                className="w-[30px] h-[30px] rounded-full object-cover select-none"
                aria-hidden="true"
              />
            ) : (
              <span
                className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-[#ffffff] font-['Hind_Vadodara'] font-bold text-[13px] select-none"
                style={{ backgroundColor: avatarBg }}
                aria-hidden="true"
              >
                {initial}
              </span>
            )}
            <span className="whitespace-nowrap font-['Inter'] font-bold text-[13px] leading-none text-[#000000] dark:text-[#e8e8e8]">
              {displayName}
            </span>
          </span>
        ) : user ? (
          <span
            className="w-[32px] h-[32px] rounded-full flex items-center justify-center text-[#ffffff] font-['Hind_Vadodara'] font-bold text-[14px] select-none"
            style={{ backgroundColor: avatarBg }}
            aria-hidden="true"
          >
            {initial}
          </span>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        )}
      </button>

      {open && pos && (
        <div
          role="menu"
          aria-label="Profile menu"
          style={{ top: pos.top, left: pos.left }}
          className={`fixed z-[130] bg-[#ffffff] dark:bg-[#1c1c1c] border border-[#e5e5e5] dark:border-[#333333] rounded-[6px] shadow-[0px_4px_16px_rgba(0,0,0,0.15)] p-[6px] ${
            view === 'prefs' ? 'w-[240px]' : 'w-[160px]'
          }`}
        >
          {view === 'menu' ? (
            <>
              {user ? (
                <>
                  <Link to="/profile" className={`${itemBase} no-underline`} onClick={close}>
                    <UserIcon />
                    {t('profile')}
                  </Link>
                  <button type="button" className={itemBase} onClick={() => {
                    signOut()
                    showToast(t('signedOut'))
                    close()
                  }}>
                    <LogOutIcon />
                    {t('signOut')}
                  </button>
                </>
              ) : (
                <>
                  <Link to="/register" className={`${itemBase} no-underline`} onClick={close}>
                    <UserPlusIcon />
                    {t('register')}
                  </Link>
                  <Link to="/login" className={`${itemBase} no-underline`} onClick={close}>
                    <LogInIcon />
                    {t('signIn')}
                  </Link>
                </>
              )}
              <div className={separator} />
              <button type="button" className={itemBase} onClick={() => setView('prefs')}>
                <SettingsIcon />
                {t('settings')}
              </button>
            </>
          ) : (
            <>
              <button type="button" className={itemBase} onClick={() => setView('menu')}>
                <BackIcon />
                {t('back')}
              </button>
              <div className={separator} />
              <div className="px-[6px]">
                <PreferencesPanel />
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
