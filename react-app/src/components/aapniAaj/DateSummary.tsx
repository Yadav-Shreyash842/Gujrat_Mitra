import type { PanchangItem } from '../../data/aapniAaj'
import { formatGuDate, formatGuWeekday } from '../../utils/gu'

interface DateSummaryProps {
  date: Date
  isToday: boolean
  onPrev: () => void
  onNext: () => void
  onToday: () => void
  panchang: PanchangItem[]
  sunrise: string
  sunset: string
  t: (key: string) => string
}

const pick = (list: PanchangItem[], label: string) => list.find((p) => p.label === label)?.value ?? ''

export default function DateSummary({
  date,
  isToday,
  onPrev,
  onNext,
  onToday,
  panchang,
  sunrise,
  sunset,
  t,
}: DateSummaryProps) {
  const chips = [
    { label: 'તિથિ', value: pick(panchang, 'તિથિ') },
    { label: 'નક્ષત્ર', value: pick(panchang, 'નક્ષત્ર') },
    { label: 'રાહુકાળ', value: pick(panchang, 'રાહુકાળ') },
    { label: t('sunrise'), value: sunrise },
    { label: t('sunset'), value: sunset },
  ]

  return (
    <div className="aapni-aaj-page aapni-aaj-date-summary w-full bg-[#fef5dc] dark:bg-[#2b2413] rounded-[10px] border border-[#ffad1540] px-[18px] py-[16px]">
      <div className="flex flex-wrap items-center justify-between gap-[12px]">
        <div>
          <div className="aapni-aaj-page aapni-aaj-date-summary-date font-['Rasa'] font-bold text-[24px] lg:text-[28px] text-[#000000] dark:text-[#e8e8e8]">
            {formatGuDate(date)}
          </div>
          <div className="aapni-aaj-page aapni-aaj-date-summary-weekday font-['Hind_Vadodara'] font-normal text-[14px] text-[#000000a6] dark:text-[#b0b0b0]">
            {formatGuWeekday(date)}
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous date"
            className="aapni-aaj-page aapni-aaj-date-nav-btn cursor-pointer flex items-center justify-center w-[36px] h-[36px] rounded-[6px] bg-[#ffffff] dark:bg-[#1f1f1f] border border-[#e5e5e5] dark:border-[#333333] text-[#000000] dark:text-[#e8e8e8] text-[18px] leading-none"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={onToday}
            disabled={isToday}
            className={`aapni-aaj-page aapni-aaj-date-today-btn cursor-pointer font-['Hind_Vadodara'] font-bold text-[13px] rounded-[6px] px-[14px] py-[8px] border-none ${
              isToday
                ? 'bg-[#f2f2f2] dark:bg-[#2a2a2a] text-[#00000080] dark:text-[#9a9a9a] cursor-default'
                : 'bg-[#ffad15] text-[#000000]'
            }`}
          >
            {t('todayNav')}
          </button>
          <button
            type="button"
            onClick={onNext}
            aria-label="Next date"
            className="aapni-aaj-page aapni-aaj-date-nav-btn cursor-pointer flex items-center justify-center w-[36px] h-[36px] rounded-[6px] bg-[#ffffff] dark:bg-[#1f1f1f] border border-[#e5e5e5] dark:border-[#333333] text-[#000000] dark:text-[#e8e8e8] text-[18px] leading-none"
          >
            ›
          </button>
        </div>
      </div>

      <div className="mt-[14px] flex flex-wrap items-center gap-[8px]">
        {chips.map((c) => (
          <div
            key={c.label}
            className="aapni-aaj-page aapni-aaj-summary-chip bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[6px] px-[10px] py-[6px]"
          >
            <span className="aapni-aaj-page aapni-aaj-summary-chip-label block font-['Hind_Vadodara'] font-normal text-[11px] text-[#00000080] dark:text-[#9a9a9a]">
              {c.label}
            </span>
            <span className="aapni-aaj-page aapni-aaj-summary-chip-value block font-['Rasa'] font-bold text-[14px] text-[#000000] dark:text-[#e8e8e8]">
              {c.value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-[14px] flex flex-wrap items-center justify-between gap-[12px] border-t border-[#ffad1540] pt-[12px]">
        <span className="aapni-aaj-page aapni-aaj-shubh-badge inline-flex items-center gap-[6px] font-['Hind_Vadodara'] font-bold text-[14px] text-[#1e8e3e] dark:text-[#3ddc84]">
          <span className="w-[8px] h-[8px] rounded-full bg-[#1e8e3e] dark:bg-[#3ddc84]" aria-hidden="true" />
          {t('aajnoDivas')} · {t('shubh')}
        </span>
        <span className="aapni-aaj-page aapni-aaj-view-link font-['Hind_Vadodara'] font-bold text-[14px] text-[#ffad15]">
          {t('viewDetails')} →
        </span>
      </div>
    </div>
  )
}
