import { CHOGH_LABEL_GU, type ChoghSlot } from '../../data/aapniAaj'
import { formatGuTime } from '../../utils/gu'

interface ChoghadiyaPanelsProps {
  daySlots: ChoghSlot[]
  nightSlots: ChoghSlot[]
  natureColor: (name: string) => string
  t: (key: string) => string
}

function ChoghRows({ slots, natureColor, t }: { slots: ChoghSlot[]; natureColor: (name: string) => string; t: (key: string) => string }) {
  return (
    <div className="divide-y divide-[#f2f2f2] dark:divide-[#2a2a2a]">
      {slots.map((s) => (
        <div key={s.name + s.start} className="flex items-center justify-between px-[14px] py-[10px]">
          <span className="aapni-aaj-page aapni-aaj-chogh-time font-['Hind_Vadodara'] font-normal text-[13px] text-[#000000a6] dark:text-[#b0b0b0]">
            {formatGuTime(s.start)} - {formatGuTime(s.end)}
          </span>
          <span className={`aapni-aaj-page aapni-aaj-chogh-name font-['Hind_Vadodara'] font-bold text-[14px] ${natureColor(s.name)}`}>
            {s.isNow ? <span className="mr-[6px] text-[#1302ff] dark:text-[#8c9bff]">{t('now')}</span> : null}
            {CHOGH_LABEL_GU[s.name] ?? s.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function ChoghadiyaPanels({ daySlots, nightSlots, natureColor, t }: ChoghadiyaPanelsProps) {
  return (
    <div className="mt-[12px] grid grid-cols-1 lg:grid-cols-2 gap-[14px]">
      <details open className="aapni-aaj-page aapni-aaj-chogh-panel group bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] overflow-hidden">
        <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center justify-between gap-[10px] bg-[#ffad15] px-[14px] py-[10px]">
          <span className="aapni-aaj-page aapni-aaj-chogh-panel-title font-['Hind_Vadodara'] font-bold text-[15px] text-[#000000]">
            {t('choghDay')}
          </span>
          <span className="lg:hidden text-[#000000] text-[14px] transition-transform group-open:rotate-180" aria-hidden="true">
            ▾
          </span>
        </summary>
        <ChoghRows slots={daySlots} natureColor={natureColor} t={t} />
      </details>

      <details open className="aapni-aaj-page aapni-aaj-chogh-panel group bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] overflow-hidden">
        <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center justify-between gap-[10px] bg-[#ffad15] px-[14px] py-[10px]">
          <span className="aapni-aaj-page aapni-aaj-chogh-panel-title font-['Hind_Vadodara'] font-bold text-[15px] text-[#000000]">
            {t('choghNight')}
          </span>
          <span className="lg:hidden text-[#000000] text-[14px] transition-transform group-open:rotate-180" aria-hidden="true">
            ▾
          </span>
        </summary>
        <ChoghRows slots={nightSlots} natureColor={natureColor} t={t} />
      </details>
    </div>
  )
}
