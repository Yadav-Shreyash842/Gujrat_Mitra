import { marketBreadth } from '../../data/marketData'
import { usePreferences } from '../../context/usePreferences'

export default function MarketBreadth() {
  const { t } = usePreferences()

  const total = marketBreadth.gainers + marketBreadth.flat + marketBreadth.losers
  const net = marketBreadth.gainers - marketBreadth.losers
  const netColor = net >= 0 ? 'text-[#1e8e3e] dark:text-[#3ddc84]' : 'text-[#d61f26] dark:text-[#ff6b6b]'

  const C = 2 * Math.PI * 45
  const g = (marketBreadth.gainers / total) * C
  const f = (marketBreadth.flat / total) * C
  const l = (marketBreadth.losers / total) * C

  const markerPos = Math.min(80, Math.max(20, (marketBreadth.gainers / (marketBreadth.gainers + marketBreadth.losers)) * 100))

  return (
    <section className="market-page market-card w-full bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] border border-[#e5e5e5] dark:border-[#333333] shadow-[0px_0px_20px_rgba(0,0,0,0.06)] p-[16px]">
      <h2 className="market-page market-card-title font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-[#000000] dark:text-[#e8e8e8]">
        {t('marketBreadth')}
      </h2>

      <div className="flex flex-col items-center mt-[12px]">
        <div className="relative w-[140px] h-[140px]">
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
            <circle cx="60" cy="60" r="45" fill="none" stroke="#f0f0f0" strokeWidth="12" />
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#1e8e3e"
              strokeWidth="12"
              strokeDasharray={`${g} ${C}`}
              strokeDashoffset={0}
            />
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#b0b0b0"
              strokeWidth="12"
              strokeDasharray={`${f} ${C}`}
              strokeDashoffset={-g}
            />
            <circle
              cx="60"
              cy="60"
              r="45"
              fill="none"
              stroke="#d61f26"
              strokeWidth="12"
              strokeDasharray={`${l} ${C}`}
              strokeDashoffset={-(g + f)}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`market-page market-breadth-net font-['Rasa'] font-bold text-[26px] ${netColor}`}>
              {net > 0 ? '+' : ''}
              {net}
            </span>
            <span className="market-page market-breadth-net-label font-['Hind_Vadodara'] font-bold text-[11px] text-[#8b8b8b] uppercase">
              {t('marketNet')}
            </span>
          </div>
        </div>

        <div className="w-full mt-[14px] flex flex-col gap-[8px]">
          <div className="flex items-center gap-[10px]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#1e8e3e]" />
            <span className="flex-1 font-['Hind_Vadodara'] font-normal text-[14px] text-[#000000] dark:text-[#e8e8e8]">
              {t('marketGainers')}
            </span>
            <span className="market-page market-breadth-count font-['Rasa'] font-bold text-[15px] text-[#000000] dark:text-[#e8e8e8]">
              {marketBreadth.gainers}
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#b0b0b0]" />
            <span className="flex-1 font-['Hind_Vadodara'] font-normal text-[14px] text-[#000000] dark:text-[#e8e8e8]">
              {t('marketFlat')}
            </span>
            <span className="market-page market-breadth-count font-['Rasa'] font-bold text-[15px] text-[#000000] dark:text-[#e8e8e8]">
              {marketBreadth.flat}
            </span>
          </div>
          <div className="flex items-center gap-[10px]">
            <span className="w-[9px] h-[9px] rounded-full bg-[#d61f26]" />
            <span className="flex-1 font-['Hind_Vadodara'] font-normal text-[14px] text-[#000000] dark:text-[#e8e8e8]">
              {t('marketLosers')}
            </span>
            <span className="market-page market-breadth-count font-['Rasa'] font-bold text-[15px] text-[#000000] dark:text-[#e8e8e8]">
              {marketBreadth.losers}
            </span>
          </div>
        </div>

        <div className="w-full mt-[16px]">
          <div className="relative h-[4px] rounded-full bg-gradient-to-r from-[#d61f26] via-[#e0e0e0] to-[#1e8e3e]" />
          <div
            className="absolute mt-[-7px] w-[14px] h-[14px] rounded-[50%] border-[3px] border-[#ffffff] dark:border-[#121212] bg-[#000000]"
            style={{ left: `${markerPos}%`, transform: 'translateX(-50%)' }}
          />
          <div className="relative flex justify-between mt-[10px]">
            <span className="market-page market-sentiment font-['Hind_Vadodara'] font-bold text-[11px] text-[#d61f26]">
              {t('marketBearish')}
            </span>
            <span className="market-page market-sentiment font-['Hind_Vadodara'] font-bold text-[11px] text-[#8b8b8b]">
              {t('marketNeutral')}
            </span>
            <span className="market-page market-sentiment font-['Hind_Vadodara'] font-bold text-[11px] text-[#1e8e3e]">
              {t('marketBullish')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}