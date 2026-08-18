import type { MarketInstrument } from '../../data/market'

interface MarketTickerProps {
  instruments: MarketInstrument[]
}

export default function MarketTicker({ instruments }: MarketTickerProps) {
  const color = (change: string, up: boolean) => {
    if (change === '—') return 'text-[#8b8b8b]'
    return up ? 'text-[#1e8e3e] dark:text-[#3ddc84]' : 'text-[#d61f26] dark:text-[#ff6b6b]'
  }

  return (
    <div className="market-page market-ticker relative w-full rounded-[8px] border border-[#e5e5e5] dark:border-[#333333] bg-[#ffffff] dark:bg-[#1f1f1f] shadow-[0px_0px_20px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="flex items-center gap-[16px] overflow-x-auto scrollbar-width-none [&::-webkit-scrollbar]:hidden px-[16px] py-[14px]">
        {instruments.map((m, index) => (
          <div key={m.name} className="flex items-center gap-[16px] shrink-0">
            {index > 0 && <span className="w-[1px] h-[28px] bg-[#e5e5e5] dark:bg-[#333333]" />}
            <div className="whitespace-nowrap">
              <div className="market-page market-ticker-name font-['Hind_Vadodara'] font-bold text-[13px] text-[#000000] dark:text-[#e8e8e8]">
                {m.name}
              </div>
              <div className="flex items-center gap-[6px] mt-[2px]">
                <span className="market-page market-ticker-value font-['Rasa'] font-bold text-[16px] text-[#000000] dark:text-[#e8e8e8]">
                  {m.value}
                </span>
                <span
                  className={`market-page market-ticker-change font-['Hind_Vadodara'] font-bold text-[13px] ${color(m.change, m.up)}`}
                >
                  {m.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}