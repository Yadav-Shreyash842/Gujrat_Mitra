import type { MarketInstrument } from '../../data/market'

interface MarketIndicesProps {
  instruments: MarketInstrument[]
}

export default function MarketIndices({ instruments }: MarketIndicesProps) {
  const color = (change: string, up: boolean) => {
    if (change === '—') return 'text-[#8b8b8b]'
    return up ? 'text-[#1e8e3e] dark:text-[#3ddc84]' : 'text-[#d61f26] dark:text-[#ff6b6b]'
  }

  return (
    <div className="grid grid-cols-2 gap-[14px]">
      {instruments.map((m) => (
        <div
          key={m.name}
          className="market-page market-card bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] border border-[#e5e5e5] dark:border-[#333333] shadow-[0px_0px_20px_rgba(0,0,0,0.06)] px-[16px] py-[14px]"
        >
          <div className="market-page market-name font-['Hind_Vadodara'] font-bold text-[13px] text-[#000000] dark:text-[#e8e8e8]">
            {m.name}
          </div>
          <div className="market-page market-value mt-[6px] font-['Rasa'] font-bold text-[20px] text-[#000000] dark:text-[#e8e8e8]">
            {m.value}
          </div>
          <div
            className={`market-page market-change mt-[4px] font-['Hind_Vadodara'] font-bold text-[13px] ${color(m.change, m.up)}`}
          >
            {m.change}
          </div>
        </div>
      ))}
    </div>
  )
}