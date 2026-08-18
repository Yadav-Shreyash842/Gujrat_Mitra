import { Link } from 'react-router-dom'
import type { PanchangItem } from '../../data/aapniAaj'
import { todayVrat, upcomingFestivals } from '../../data/festivals'

interface AapniAajSidebarProps {
  panchang: PanchangItem[]
  sunrise: string
  sunset: string
  t: (key: string) => string
}

const pick = (list: PanchangItem[], label: string) => list.find((p) => p.label === label)?.value ?? ''

export default function AapniAajSidebar({ panchang, sunrise, sunset, t }: AapniAajSidebarProps) {
  const panchangRows = [
    { label: 'તિથિ', value: pick(panchang, 'તિથિ') },
    { label: t('paksha'), value: pick(panchang, 'પક્ષ') },
    { label: 'નક્ષત્ર', value: pick(panchang, 'નક્ષત્ર') },
    { label: 'યોગ', value: pick(panchang, 'યોગ') },
    { label: 'કરણ', value: pick(panchang, 'કરણ') },
    { label: t('sunrise'), value: sunrise },
    { label: t('sunset'), value: sunset },
  ]

  return (
    <div>
      <div className="rounded-[8px] border border-[#e5e5e5] dark:border-[#333333] bg-[#ffffff] dark:bg-[#1f1f1f] p-[14px]">
        <div className="aapni-aaj-page aapni-aaj-sidebar-title font-['Hind_Vadodara'] font-bold text-[16px] text-[#000000] dark:text-[#e8e8e8]">
          {t('vratFestival')}
        </div>
        <div className="mt-[10px] border-l-[3px] border-[#1e8e3e] dark:border-[#3ddc84] bg-[#f2f9f2] dark:bg-[#1c2a1c] rounded-[4px] px-[10px] py-[10px]">
          <div className="aapni-aaj-page aapni-aaj-festival-name font-['Rasa'] font-bold text-[18px] text-[#1e8e3e] dark:text-[#3ddc84]">
            {todayVrat.name}
          </div>
          <p className="aapni-aaj-page aapni-aaj-festival-note mt-[4px] font-['Hind_Vadodara'] font-normal text-[13px] text-[#000000a6] dark:text-[#b0b0b0] leading-[1.6]">
            {todayVrat.note}
          </p>
        </div>
      </div>

      <div className="mt-[14px] rounded-[8px] border border-[#e5e5e5] dark:border-[#333333] bg-[#ffffff] dark:bg-[#1f1f1f] p-[14px]">
        <div className="aapni-aaj-page aapni-aaj-sidebar-title font-['Hind_Vadodara'] font-bold text-[16px] text-[#000000] dark:text-[#e8e8e8]">
          {t('todaysPanchang')}
        </div>
        <div className="mt-[10px] space-y-[8px]">
          {panchangRows.map((r) => (
            <div key={r.label} className="flex items-center justify-between gap-[8px]">
              <span className="aapni-aaj-page aapni-aaj-sidebar-row-label font-['Hind_Vadodara'] font-normal text-[13px] text-[#000000a6] dark:text-[#b0b0b0]">
                {r.label}
              </span>
              <span className="aapni-aaj-page aapni-aaj-sidebar-row-value font-['Rasa'] font-bold text-[14px] text-[#000000] dark:text-[#e8e8e8] text-right">
                {r.value}
              </span>
            </div>
          ))}
        </div>
        <Link
          to="/aapni-aaj"
          className="aapni-aaj-page aapni-aaj-view-link mt-[12px] inline-block font-['Hind_Vadodara'] font-bold text-[13px] text-[#ffad15] no-underline"
        >
          {t('viewDetails')} →
        </Link>
      </div>

      <div className="mt-[14px] rounded-[8px] border border-[#e5e5e5] dark:border-[#333333] bg-[#ffffff] dark:bg-[#1f1f1f] p-[14px]">
        <div className="aapni-aaj-page aapni-aaj-sidebar-title font-['Hind_Vadodara'] font-bold text-[16px] text-[#000000] dark:text-[#e8e8e8]">
          {t('upcomingFestivals')}
        </div>
        <div className="mt-[10px] divide-y divide-[#f2f2f2] dark:divide-[#2a2a2a]">
          {upcomingFestivals.map((f) => (
            <div key={f.name} className="flex items-center justify-between gap-[8px] py-[8px]">
              <span className="aapni-aaj-page aapni-aaj-upcoming-name font-['Hind_Vadodara'] font-bold text-[14px] text-[#000000] dark:text-[#e8e8e8]">
                {f.name}
              </span>
              <span className="aapni-aaj-page aapni-aaj-upcoming-date font-['Rasa'] font-semibold text-[13px] text-[#ffad15]">
                {f.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
