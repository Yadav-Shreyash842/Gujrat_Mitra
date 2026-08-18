import { usePreferences } from '../context/usePreferences'
import { FONT_SCALES } from '../utils/storage'
import { LANGUAGES } from '../utils/translations'

export default function PreferencesPanel() {
  const { theme, toggleTheme, fontScale, setFontScale, language, setLanguage, t } = usePreferences()

  const changeFont = (dir: 1 | -1) => {
    const idx = FONT_SCALES.indexOf(fontScale)
    const next = FONT_SCALES[Math.min(FONT_SCALES.length - 1, Math.max(0, idx + dir))]
    setFontScale(next)
  }

  const row = 'flex flex-col gap-[8px] py-[10px]'
  const label =
    'text-[#000000] dark:text-[#e8e8e8] font-[\'Inter\'] font-bold text-[11px] uppercase tracking-[0.08em]'
  const buttonBase =
    'h-[30px] px-[12px] bg-[#f4f4f4] dark:bg-[#2a2a2a] text-[#000000] dark:text-[#e8e8e8] font-[\'Inter\'] font-normal text-[13px] rounded-[4px] cursor-pointer border-none flex items-center justify-center gap-[6px] hover:bg-[#e8e8e8] dark:hover:bg-[#333333]'

  return (
    <div className="w-[220px] max-sm:w-[240px] bg-[#ffffff] dark:bg-[#1c1c1c] border border-[#e5e5e5] dark:border-[#333333] rounded-[6px] shadow-[0px_4px_16px_rgba(0,0,0,0.15)] p-[12px]">
      <div className={row}>
        <span className={label}>{t('theme')}</span>
        <div className="flex gap-[8px]">
          <button
            type="button"
            onClick={() => theme !== 'light' && toggleTheme()}
            aria-pressed={theme === 'light'}
            className={`${buttonBase} flex-1 ${
              theme === 'light' ? 'bg-[#1302ff] text-[#ffffff]' : ''
            }`}
          >
            <span aria-hidden="true">☀️</span>
            {t('themeLight')}
          </button>
          <button
            type="button"
            onClick={() => theme !== 'dark' && toggleTheme()}
            aria-pressed={theme === 'dark'}
            className={`${buttonBase} flex-1 ${
              theme === 'dark' ? 'bg-[#1302ff] text-[#ffffff]' : ''
            }`}
          >
            <span aria-hidden="true">🌙</span>
            {t('themeDark')}
          </button>
        </div>
      </div>

      <div className={row}>
        <span className={label}>{t('fontSize')}</span>
        <div className="flex items-center gap-[8px]">
          <button
            type="button"
            onClick={() => changeFont(-1)}
            disabled={fontScale === 80}
            aria-label={t('fontDecrease')}
            className={`${buttonBase} w-[34px] shrink-0 disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            A−
          </button>
          <div className="flex-1 text-center text-[#000000] dark:text-[#e8e8e8] font-[\'Inter\'] font-bold text-[13px]">
            {fontScale}%
          </div>
          <button
            type="button"
            onClick={() => changeFont(1)}
            disabled={fontScale === 130}
            aria-label={t('fontIncrease')}
            className={`${buttonBase} w-[34px] shrink-0 disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            A+
          </button>
        </div>
      </div>

      <div className={row}>
        <span className={label}>{t('language')}</span>
        <div className="grid grid-cols-2 gap-[8px]">
          {LANGUAGES.map(({ code, native }) => (
            <button
              key={code}
              type="button"
              onClick={() => setLanguage(code)}
              aria-pressed={language === code}
              className={`${buttonBase} w-full ${
                language === code ? 'bg-[#1302ff] text-[#ffffff]' : ''
              }`}
            >
              {native}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}