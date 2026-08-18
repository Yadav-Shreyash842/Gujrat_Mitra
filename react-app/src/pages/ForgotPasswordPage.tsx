import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import ScrollToTop from '../components/ScrollToTop'
import { usePreferences } from '../context/usePreferences'
import { useToast } from '../components/useToast'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ForgotPasswordPage() {
  const { t } = usePreferences()
  const { showToast } = useToast()

  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const inputClass = (invalid: boolean) =>
    `w-full h-[44px] px-[12px] rounded-[6px] border bg-[#ffffff] dark:bg-[#1a1a1a] text-[#000000] dark:text-[#e8e8e8] font-['Hind_Vadodara'] font-normal text-[16px] focus:outline-[2px] focus:outline-[#ffad15] ${
      invalid ? 'border-[#d32f2f]' : 'border-[#d0d0d0] dark:border-[#444444]'
    }`

  const handleSubmit = () => {
    if (!email.trim()) {
      setError(t('emailRequired'))
      return
    }
    if (!EMAIL_RE.test(email.trim())) {
      setError(t('invalidEmail'))
      return
    }
    setError('')
    showToast(t('resetLinkSent'))
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
                {t('forgotPassword')}
              </h1>
              <p className="auth-page auth-subtitle mt-[6px] font-['Hind_Vadodara'] font-normal text-[15px] text-[#000000a6] dark:text-[#b0b0b0]">
                {t('enterYourEmail')}
              </p>

              <div className="mt-[24px]">
                <label
                  htmlFor="forgot-email"
                  className="block font-['Hind_Vadodara'] font-bold text-[15px] text-[#000000] dark:text-[#e8e8e8]"
                >
                  {t('email')} <span className="text-[#d32f2f]">*</span>
                </label>
                <input
                  id="forgot-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError('')
                  }}
                  className={`${inputClass(!!error)} mt-[8px]`}
                />
                {error && (
                  <p className="auth-page auth-error mt-[6px] font-['Hind_Vadodara'] font-normal text-[13px] text-[#d32f2f]">
                    {error}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="auth-page auth-btn mt-[24px] w-full h-[44px] rounded-[6px] bg-[#ffad15] text-[#000000] font-['Hind_Vadodara'] font-bold text-[16px] border-none cursor-pointer hover:bg-[#f5a100]"
              >
                {t('sendResetLink')}
              </button>

              <p className="auth-page auth-switch mt-[20px] text-center">
                <Link
                  to="/login"
                  className="font-['Hind_Vadodara'] font-bold text-[15px] text-[#1302ff] no-underline hover:underline"
                >
                  {t('backToLogin')}
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
