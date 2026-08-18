interface PanchangInfoCardProps {
  emoji: string
  label: string
  value: string
  center?: boolean
}

export default function PanchangInfoCard({ emoji, label, value, center = false }: PanchangInfoCardProps) {
  if (center) {
    return (
      <div className="aapni-aaj-page aapni-aaj-sky-card bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] px-[14px] py-[16px] text-center">
        <div className="text-[20px] leading-none" aria-hidden="true">
          {emoji}
        </div>
        <div className="aapni-aaj-page aapni-aaj-sky-label mt-[6px] font-['Hind_Vadodara'] font-normal text-[13px] text-[#000000a6] dark:text-[#b0b0b0]">
          {label}
        </div>
        <div className="aapni-aaj-page aapni-aaj-sky-value mt-[6px] font-['Rasa'] font-bold text-[20px] text-[#000000] dark:text-[#e8e8e8]">
          {value}
        </div>
      </div>
    )
  }

  return (
    <div className="aapni-aaj-page aapni-aaj-panchang-card bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] px-[14px] py-[14px] flex items-center gap-[10px]">
      <span className="text-[22px]" aria-hidden="true">
        {emoji}
      </span>
      <span className="min-w-0">
        <span className="aapni-aaj-page aapni-aaj-panchang-label block font-['Hind_Vadodara'] font-normal text-[12px] text-[#000000a6] dark:text-[#b0b0b0]">
          {label}
        </span>
        <span className="aapni-aaj-page aapni-aaj-panchang-value block font-['Rasa'] font-bold text-[16px] text-[#000000] dark:text-[#e8e8e8]">
          {value}
        </span>
      </span>
    </div>
  )
}
