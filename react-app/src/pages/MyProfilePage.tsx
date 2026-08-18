import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import ScrollToTop from '../components/ScrollToTop'
import { useAuth, type AuthUser } from '../context/useAuth'
import { usePreferences } from '../context/usePreferences'
import { useToast } from '../components/useToast'
import PreferencesPanel from '../components/PreferencesPanel'

const card = 'bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] border border-[#e5e5e5] dark:border-[#333333] overflow-hidden'
const sectionBtn = 'flex items-center justify-between gap-[10px] w-full px-[16px] py-[14px] bg-transparent border-none cursor-pointer text-[#000000] dark:text-[#e8e8e8]'
const sectionLabel = `font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-left`
const rowLabel = `profile-page profile-label font-['Hind_Vadodara'] font-normal text-[13px] text-[#000000a6] dark:text-[#b0b0b0]`
const rowValue = `profile-page profile-value font-['Hind_Vadodara'] font-normal text-[15px] text-[#000000] dark:text-[#e8e8e8] text-right break-all`
const smallBtn = `profile-page profile-btn h-[32px] px-[12px] rounded-[4px] border border-[#d0d0d0] dark:border-[#444444] bg-transparent text-[#000000] dark:text-[#e8e8e8] font-['Hind_Vadodara'] font-bold text-[13px] cursor-pointer hover:bg-[#fef5dc] dark:hover:bg-[#2a2a2a]`

function initialOf(name: string, email: string): string {
  if (name && name.trim()) return name.trim().charAt(0).toUpperCase()
  if (email && email.trim()) return email.trim().charAt(0).toUpperCase()
  return '?'
}

function usernameOf(email: string): string {
  return email.split('@')[0] || email
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-[18px] h-[18px] shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function AccountInfoContent({
  user,
  t,
  updateProfile,
  showToast,
}: {
  user: AuthUser
  t: (key: string) => string
  updateProfile: (patch: Partial<AuthUser>) => void
  showToast: (message: string) => void
}) {
  const [editingName, setEditingName] = useState(false)
  const [nameDraft, setNameDraft] = useState(user.name)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const initial = initialOf(user.name, user.email)
  const avatarBg = user.avatar || '#1302ff'

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    if (!file.type.startsWith('image/')) {
      showToast(t('photoError'))
      return
    }
    if (file.size > 2 * 1024 * 1024) {
      showToast(t('photoError'))
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        updateProfile({ avatarUrl: reader.result })
        showToast(t('profileSaved'))
      }
    }
    reader.readAsDataURL(file)
  }

  const saveName = () => {
    const next = nameDraft.trim()
    if (next) {
      updateProfile({ name: next })
      showToast(t('profileSaved'))
    }
    setEditingName(false)
  }

  return (
    <>
      <div className="flex items-center gap-[16px] py-[16px]">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={t('profile')}
            className="w-[56px] h-[56px] rounded-full object-cover select-none"
          />
        ) : (
          <span
            className={`w-[56px] h-[56px] rounded-full flex items-center justify-center text-[#ffffff] font-['Hind_Vadodara'] font-bold text-[22px] select-none`}
            style={{ backgroundColor: avatarBg }}
            aria-hidden="true"
          >
            {initial}
          </span>
        )}
        <div className="flex flex-wrap gap-[8px]">
          <button type="button" className={smallBtn} onClick={() => { setEditingName(true); setNameDraft(user.name) }}>
            {t('edit')}
          </button>
          <button type="button" className={smallBtn} onClick={() => fileInputRef.current?.click()}>
            {t('change')}
          </button>
          <button type="button" className={smallBtn} onClick={() => { updateProfile({ avatar: undefined, avatarUrl: undefined }); showToast(t('avatarRemoved')) }}>
            {t('remove')}
          </button>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </div>

      <div className="flex items-center justify-between gap-[16px] py-[10px] border-t border-[#f0f0f0] dark:border-[#2a2a2a]">
        <span className={rowLabel}>{t('name')}</span>
        {editingName ? (
          <div className="flex items-center gap-[8px]">
            <input
              value={nameDraft}
              onChange={(e) => setNameDraft(e.target.value)}
              className={`profile-page profile-input w-[140px] h-[32px] px-[8px] rounded-[4px] border border-[#d0d0d0] dark:border-[#444444] bg-[#ffffff] dark:bg-[#1a1a1a] text-[#000000] dark:text-[#e8e8e8] font-['Hind_Vadodara'] font-normal text-[14px] focus:outline-[2px] focus:outline-[#ffad15]`}
            />
            <button type="button" onClick={saveName} className={smallBtn}>{t('save')}</button>
            <button type="button" onClick={() => setEditingName(false)} className={smallBtn}>{t('cancel')}</button>
          </div>
        ) : (
          <span className={rowValue}>{user.name || '—'}</span>
        )}
      </div>

      <div className="flex items-center justify-between gap-[16px] py-[10px] border-t border-[#f0f0f0] dark:border-[#2a2a2a]">
        <span className={rowLabel}>{t('email')}</span>
        <span className={rowValue}>{user.email}</span>
      </div>

      <div className="flex items-center justify-between gap-[16px] py-[10px] border-t border-[#f0f0f0] dark:border-[#2a2a2a]">
        <span className={rowLabel}>{t('username')}</span>
        <span className={rowValue}>{usernameOf(user.email)}</span>
      </div>

      <div className="flex items-center justify-between gap-[16px] py-[10px] border-t border-[#f0f0f0] dark:border-[#2a2a2a]">
        <span className={rowLabel}>{t('status')}</span>
        <span className="flex items-center gap-[6px]">
          <span className="w-[8px] h-[8px] rounded-full bg-[#22c55e]" aria-hidden="true" />
          <span className={rowValue}>{t('statusRegistered')}</span>
        </span>
      </div>
    </>
  )
}

function PreferencesContent() {
  return <PreferencesPanel />
}

function ProfileSidebar({
  activeSection,
  onSelect,
  t,
}: {
  activeSection: 'accountInfo' | 'preferences'
  onSelect: (section: 'accountInfo' | 'preferences') => void
  t: (key: string) => string
}) {
  const items: { key: 'accountInfo' | 'preferences'; label: string }[] = [
    { key: 'accountInfo', label: t('accountInfo') },
    { key: 'preferences', label: t('settings') },
  ]

  return (
    <nav>
      {items.map((item) => {
        const active = activeSection === item.key
        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onSelect(item.key)}
            aria-current={active ? 'page' : undefined}
            className={`flex items-center w-full px-[16px] py-[12px] border-l-[3px] bg-transparent cursor-pointer text-left font-['Hind_Vadodara'] font-bold text-[14px] ${
              active
                ? 'border-[#ffad15] text-[#1302ff]'
                : 'border-transparent text-[#000000] dark:text-[#e8e8e8] hover:bg-[#fef5dc] dark:hover:bg-[#2a2a2a]'
            }`}
          >
            {item.label}
          </button>
        )
      })}
    </nav>
  )
}

export default function MyProfilePage() {
  const { user, updateProfile } = useAuth()
  const { t } = usePreferences()
  const { showToast } = useToast()

  const [accountOpen, setAccountOpen] = useState(true)
  const [prefsOpen, setPrefsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<'accountInfo' | 'preferences'>('accountInfo')

  if (!user) {
    return (
      <>
        <ScrollToTop />
        <PageLayout>
          <div className="max-w-[1440px] mx-auto flex flex-col items-center">
            <div className="w-full max-w-[420px] bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] border border-[#e5e5e5] dark:border-[#333333] overflow-hidden">
              <div className="h-[4px] bg-[#ffad15]" />
              <div className="p-[24px] lg:p-[32px] text-center">
                <p className={`profile-page profile-value font-['Hind_Vadodara'] font-normal text-[15px] text-[#000000a6] dark:text-[#b0b0b0]`}>
                  {t('pleaseSignIn')}
                </p>
                <Link
                  to="/login"
                  className={`profile-page profile-btn inline-block mt-[16px] px-[24px] py-[10px] rounded-[6px] bg-[#ffad15] text-[#000000] font-['Hind_Vadodara'] font-bold text-[15px] no-underline hover:bg-[#f5a100]`}
                >
                  {t('signIn')}
                </Link>
              </div>
            </div>
          </div>
        </PageLayout>
        <MobileBottomNav />
      </>
    )
  }

  return (
    <>
      <ScrollToTop />
      <PageLayout>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center gap-[12px] border-b-2 border-[#ffad15] pb-[8px]">
            <span className={`profile-page profile-title text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-left`}>
              {t('myProfile')}
            </span>
          </div>

          <div className="lg:hidden">
            <section className="mt-[24px] max-w-[560px]">
              <div className={card}>
                <button type="button" aria-expanded={accountOpen} onClick={() => setAccountOpen((v) => !v)} className={sectionBtn}>
                  <span className={`${sectionLabel} profile-page profile-section-label`}>{t('accountInfo')}</span>
                  <Chevron open={accountOpen} />
                </button>
                {accountOpen && (
                  <div className="px-[16px] pb-[16px] border-t border-[#eeeeee] dark:border-[#333333]">
                    <AccountInfoContent user={user} t={t} updateProfile={updateProfile} showToast={showToast} />
                  </div>
                )}
              </div>
            </section>

            <section className="mt-[20px] max-w-[560px]">
              <div className={card}>
                <button type="button" aria-expanded={prefsOpen} onClick={() => setPrefsOpen((v) => !v)} className={sectionBtn}>
                  <span className={`${sectionLabel} profile-page profile-section-label`}>{t('settings')}</span>
                  <Chevron open={prefsOpen} />
                </button>
                {prefsOpen && (
                  <div className="px-[16px] py-[8px] border-t border-[#eeeeee] dark:border-[#333333]">
                    <PreferencesContent />
                  </div>
                )}
              </div>
            </section>
          </div>

          <div className="hidden lg:grid lg:grid-cols-[240px_1fr] lg:gap-[24px] lg:items-start lg:mt-[24px]">
            <aside className={card}>
              <ProfileSidebar activeSection={activeSection} onSelect={setActiveSection} t={t} />
            </aside>

            <section className="min-w-0">
              <div className={card}>
                <div className="px-[16px] lg:px-[24px] py-[16px] lg:py-[20px]">
                  {activeSection === 'accountInfo' ? (
                    <AccountInfoContent user={user} t={t} updateProfile={updateProfile} showToast={showToast} />
                  ) : (
                    <PreferencesContent />
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </PageLayout>
      <MobileBottomNav />
    </>
  )
}
