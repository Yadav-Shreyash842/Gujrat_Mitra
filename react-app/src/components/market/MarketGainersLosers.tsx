import { marketGainers, marketLosers } from '../../data/marketData'
import { usePreferences } from '../../context/usePreferences'

interface MarketGainersLosersProps {
  variant: 'gainers' | 'losers'
}

export default function MarketGainersLosers({ variant }: MarketGainersLosersProps) {
  const { t } = usePreferences()
  const rows = variant === 'gainers' ? marketGainers : marketLosers
  const title = variant === 'gainers' ? t('topGainers') : t('topLosers')

  return (
    <section className="market-page market-card w-full bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] border border-[#e5e5e5] dark:border-[#333333] shadow-[0px_0px_20px_rgba(0,0,0,0.06)] p-[16px]">
      <h2 className="market-page market-card-title font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-[#000000] dark:text-[#e8e8e8]">
        {title}
      </h2>

      <div className="mt-[12px] flex flex-col divide-y divide-[#e8e8e8] dark:divide-[#2e2e2e]">
        {rows.map((row) => (
          <div key={row.name} className="flex items-center gap-[10px] py-[10px] first:pt-0 last:pb-0">
            <span className="market-page market-gl-name flex-1 min-w-0 font-['Hind_Vadodara'] font-normal text-[14px] text-[#000000] dark:text-[#e8e8e8] truncate">
              {row.name}
            </span>
            <span className="market-page market-gl-price font-['Rasa'] font-bold text-[14px] text-[#000000] dark:text-[#e8e8e8] shrink-0">
              {row.price}
            </span>
            <span
              className={`market-page market-gl-change w-[72px] text-right shrink-0 font-['Hind_Vadodara'] font-bold text-[13px] ${
                row.up ? 'text-[#1e8e3e] dark:text-[#3ddc84]' : 'text-[#d61f26] dark:text-[#ff6b6b]'
              }`}
            >
              {row.changePercent}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}