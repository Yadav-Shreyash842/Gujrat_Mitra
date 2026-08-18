import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import ScrollToTop from '../components/ScrollToTop'
import { usePreferences } from '../context/usePreferences'
import { useToast } from '../components/useToast'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface Errors {
  name?: string
  email?: string
  password?: string
  confirm?: string
}

export default function RegisterPage() {
  const { t } = usePreferences()
  const { showToast } = useToast()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  const inputClass = (invalid: boolean) =>
    `w-full h-[44px] px-[12px] pr-[40px] rounded-[6px] border bg-[#ffffff] dark:bg-[#1a1a1a] text-[#000000] dark:text-[#e8e8e8] font-['Hind_Vadodara'] font-normal text-[16px] focus:outline-[2px] focus:outline-[#ffad15] ${
      invalid ? 'border-[#d32f2f]' : 'border-[#d0d0d0] dark:border-[#444444]'
    }`

  const handleSubmit = () => {
    const next: Errors = {}
    if (!name.trim()) next.name = t('usernameRequired')
    if (!email.trim()) next.email = t('emailRequired')
    else if (!EMAIL_RE.test(email.trim())) next.email = t('invalidEmail')
    if (!password) next.password = t('passwordRequired')
    if (confirm !== password) next.confirm = t('passwordMismatch')
    setErrors(next)
    if (Object.keys(next).length > 0) return

    localStorage.setItem(
      'demoAuthUser',
      JSON.stringify({ email: email.trim(), name: name.trim(), at: Date.now() }),
    )
    showToast(t('accountCreated'))
    navigate('/login')
  }

  const sendVerification = () => {
    showToast(t('verificationSent'))
  }

  return (
    <>
      <ScrollToTop />
      <PageLayout>
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <div className="auth-page auth-card w-full max-w-[420px] bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] border border-[#e5e5e5] dark:border-[#333333] overflow-hidden">
            <div className="h-[4px] bg-[#ffad15]" />
            <div className="p-[24px] lg:p-[32px]">
              <h1 className="auth-page auth-title font-['Rasa'] font-bold text-[26px] lg:text-[30px] text-[#000000] dark:text-[#e8e8e8] text-left">
                {t('registration')}
              </h1>
              <p className="auth-page auth-subtitle mt-[6px] font-['Hind_Vadodara'] font-normal text-[15px] text-[#000000a6] dark:text-[#b0b0b0]">
                {t('createAccountSubtitle')}
              </p>

              <div className="mt-[24px]">
                <label
                  htmlFor="register-name"
                  className="block font-['Hind_Vadodara'] font-bold text-[15px] text-[#000000] dark:text-[#e8e8e8]"
                >
                  {t('userName')} <span className="text-[#d32f2f]">*</span>
                </label>
                <input
                  id="register-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`${inputClass(!!errors.name)} mt-[8px]`}
                />
                {errors.name && (
                  <p className="auth-page auth-error mt-[6px] font-['Hind_Vadodara'] font-normal text-[13px] text-[#d32f2f]">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="mt-[16px]">
                <label
                  htmlFor="register-email"
                  className="block font-['Hind_Vadodara'] font-bold text-[15px] text-[#000000] dark:text-[#e8e8e8]"
                >
                  {t('email')} <span className="text-[#d32f2f]">*</span>
                </label>
                <input
                  id="register-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`${inputClass(!!errors.email)} mt-[8px]`}
                />
                {errors.email && (
                  <p className="auth-page auth-error mt-[6px] font-['Hind_Vadodara'] font-normal text-[13px] text-[#d32f2f]">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="mt-[16px]">
                <label
                  htmlFor="register-password"
                  className="block font-['Hind_Vadodara'] font-bold text-[15px] text-[#000000] dark:text-[#e8e8e8]"
                >
                  {t('createPassword')} <span className="text-[#d32f2f]">*</span>
                </label>
                <div className="relative mt-[8px]">
                  <input
                    id="register-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputClass(!!errors.password)}
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? t('hidePassword') : t('showPassword')}
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-[10px] top-[50%] -translate-y-[50%] w-[24px] h-[24px] flex items-center justify-center bg-transparent border-none cursor-pointer text-[#999999] p-0"
                  >
                    {showPassword ? (
                      <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="auth-page auth-error mt-[6px] font-['Hind_Vadodara'] font-normal text-[13px] text-[#d32f2f]">
                    {errors.password}
                  </p>
                )}
              </div>

              <div className="mt-[16px]">
                <label
                  htmlFor="register-confirm"
                  className="block font-['Hind_Vadodara'] font-bold text-[15px] text-[#000000] dark:text-[#e8e8e8]"
                >
                  {t('confirmPassword')} <span className="text-[#d32f2f]">*</span>
                </label>
                <div className="relative mt-[8px]">
                  <input
                    id="register-confirm"
                    type={showConfirm ? 'text' : 'password'}
                    autoComplete="new-password"
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.value)}
                    className={inputClass(!!errors.confirm)}
                  />
                  <button
                    type="button"
                    aria-label={showConfirm ? t('hidePassword') : t('showPassword')}
                    onClick={() => setShowConfirm((v) => !v)}
                    className="absolute right-[10px] top-[50%] -translate-y-[50%] w-[24px] h-[24px] flex items-center justify-center bg-transparent border-none cursor-pointer text-[#999999] p-0"
                  >
                    {showConfirm ? (
                      <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg className="w-[20px] h-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.confirm && (
                  <p className="auth-page auth-error mt-[6px] font-['Hind_Vadodara'] font-normal text-[13px] text-[#d32f2f]">
                    {errors.confirm}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="auth-page auth-btn mt-[24px] w-full h-[44px] rounded-[6px] bg-[#ffad15] text-[#000000] font-['Hind_Vadodara'] font-bold text-[16px] border-none cursor-pointer hover:bg-[#f5a100]"
              >
                {t('createAccount')}
              </button>

              <button
                type="button"
                onClick={sendVerification}
                className="auth-page auth-btn mt-[12px] w-full h-[44px] rounded-[6px] bg-transparent text-[#1302ff] font-['Hind_Vadodara'] font-bold text-[15px] border border-[#d0d0d0] dark:border-[#444444] cursor-pointer hover:bg-[#fef5dc] dark:hover:bg-[#2a2a2a]"
              >
                {t('sendVerificationCode')}
              </button>

              <p className="auth-page auth-switch mt-[20px] text-center font-['Hind_Vadodara'] font-normal text-[15px] text-[#000000a6] dark:text-[#b0b0b0]">
                <Link
                  to="/login"
                  className="font-bold text-[#1302ff] no-underline hover:underline"
                >
                  {t('signIn')}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </PageLayout>
      <MobileBottomNav />
    </>
  )
}
