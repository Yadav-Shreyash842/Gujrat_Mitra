import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import ScrollToTop from '../components/ScrollToTop'
import { usePreferences } from '../context/usePreferences'
import { useToast } from '../components/useToast'
import { useAuth } from '../context/useAuth'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const DEMO_EMAIL = 'yadavshreyash842@gmail.com'
const DEMO_PASSWORD = 'Shreyash@123'

interface Errors {
  email?: string
  password?: string
}

export default function LoginPage() {
  const { t } = usePreferences()
  const { showToast } = useToast()
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Errors>({})

  const inputClass = (invalid: boolean) =>
    `w-full h-[44px] px-[12px] pr-[40px] rounded-[6px] border bg-[#ffffff] dark:bg-[#1a1a1a] text-[#000000] dark:text-[#e8e8e8] font-['Hind_Vadodara'] font-normal text-[16px] focus:outline-[2px] focus:outline-[#ffad15] ${
      invalid ? 'border-[#d32f2f]' : 'border-[#d0d0d0] dark:border-[#444444]'
    }`

  const handleSubmit = () => {
    const next: Errors = {}
    if (!email.trim()) next.email = t('emailRequired')
    else if (!EMAIL_RE.test(email.trim())) next.email = t('invalidEmail')
    if (!password) next.password = t('passwordRequired')
    if (Object.keys(next).length > 0) {
      setErrors(next)
      return
    }
    if (email.trim() !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
      next.password = t('invalidCredentials')
      setErrors(next)
      return
    }

    signIn(DEMO_EMAIL, 'Shreyash Yadav')
    showToast(t('loginSuccessful'))
    navigate('/profile')
  }

  const socialLogin = () => {
    showToast(t('socialLoginSoon'))
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
                {t('signIn')}
              </h1>
              <p className="auth-page auth-subtitle mt-[6px] font-['Hind_Vadodara'] font-normal text-[15px] text-[#000000a6] dark:text-[#b0b0b0]">
                {t('enterLoginDetails')}
              </p>

              <div className="mt-[24px]">
                <label
                  htmlFor="login-email"
                  className="block font-['Hind_Vadodara'] font-bold text-[15px] text-[#000000] dark:text-[#e8e8e8]"
                >
                  {t('email')} <span className="text-[#d32f2f]">*</span>
                </label>
                <input
                  id="login-email"
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
                  htmlFor="login-password"
                  className="block font-['Hind_Vadodara'] font-bold text-[15px] text-[#000000] dark:text-[#e8e8e8]"
                >
                  {t('password')} <span className="text-[#d32f2f]">*</span>
                </label>
                <div className="relative mt-[8px]">
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
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

              <button
                type="button"
                onClick={handleSubmit}
                className="auth-page auth-btn mt-[24px] w-full h-[44px] rounded-[6px] bg-[#ffad15] text-[#000000] font-['Hind_Vadodara'] font-bold text-[16px] border-none cursor-pointer hover:bg-[#f5a100]"
              >
                {t('signIn')}
              </button>

              <div className="flex items-center gap-[12px] my-[20px]">
                <div className="flex-1 h-px bg-[#e5e5e5] dark:bg-[#333333]" />
                <span className="auth-page auth-or text-[#000000a6] dark:text-[#b0b0b0] font-['Inter'] font-normal text-[11px] tracking-wide whitespace-nowrap">
                  {t('orContinueWith')}
                </span>
                <div className="flex-1 h-px bg-[#e5e5e5] dark:bg-[#333333]" />
              </div>

              <div className="flex items-center justify-center gap-[12px]">
                <button
                  type="button"
                  onClick={socialLogin}
                  aria-label="Google"
                  className="w-[44px] h-[44px] rounded-[6px] border border-[#d0d0d0] dark:border-[#444444] bg-[#ffffff] dark:bg-[#1a1a1a] text-[#000000] dark:text-[#e8e8e8] font-['Inter'] font-bold text-[16px] cursor-pointer hover:bg-[#fef5dc] dark:hover:bg-[#2a2a2a]"
                >
                  G
                </button>
                <button
                  type="button"
                  onClick={socialLogin}
                  aria-label="LinkedIn"
                  className="w-[44px] h-[44px] rounded-[6px] border border-[#d0d0d0] dark:border-[#444444] bg-[#ffffff] dark:bg-[#1a1a1a] text-[#0077b5] dark:text-[#4fa3d1] font-['Inter'] font-bold text-[16px] cursor-pointer hover:bg-[#fef5dc] dark:hover:bg-[#2a2a2a]"
                >
                  in
                </button>
                <button
                  type="button"
                  onClick={socialLogin}
                  aria-label="Facebook"
                  className="w-[44px] h-[44px] rounded-[6px] border border-[#d0d0d0] dark:border-[#444444] bg-[#ffffff] dark:bg-[#1a1a1a] text-[#1877f2] dark:text-[#5a97f5] font-['Inter'] font-bold text-[16px] cursor-pointer hover:bg-[#fef5dc] dark:hover:bg-[#2a2a2a]"
                >
                  f
                </button>
              </div>

              <div className="mt-[20px] flex flex-col sm:flex-row items-center justify-between gap-[10px]">
                <Link
                  to="/forgot-password"
                  className="auth-page auth-link font-['Hind_Vadodara'] font-normal text-[15px] text-[#1302ff] no-underline hover:underline"
                >
                  {t('forgotPassword')}
                </Link>
                <Link
                  to="/register"
                  className="auth-page auth-link font-['Hind_Vadodara'] font-bold text-[15px] text-[#1302ff] no-underline hover:underline"
                >
                  {t('createAccount')}
                </Link>
              </div>
            </div>
          </div>

          <div className="auth-page auth-demo w-full max-w-[420px] mt-[16px] rounded-[8px] border border-[#1302ff]/40 dark:border-[#4fa3d1]/40 bg-[#f1f1ff] dark:bg-[#191929] p-[14px]">
            <div className="font-['Hind_Vadodara'] font-bold text-[13px] text-[#000000] dark:text-[#e8e8e8]">
              {t('demoLogin')}
            </div>
            <div className="mt-[6px] font-['Hind_Vadodara'] font-normal text-[13px] text-[#000000a6] dark:text-[#b0b0b0]">
              {t('demoEmail')}:{' '}
              <span className="font-bold text-[#1302ff]">yadavshreyash842@gmail.com</span>
              <br />
              {t('demoPassword')}:{' '}
              <span className="font-bold text-[#1302ff]">Shreyash@123</span>
            </div>
          </div>
        </div>
      </PageLayout>
      <MobileBottomNav />
    </>
  )
}
