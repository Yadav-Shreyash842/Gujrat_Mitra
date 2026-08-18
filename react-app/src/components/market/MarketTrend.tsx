import { useState } from 'react'
import { marketTrend, niftySeries } from '../../data/marketData'
import { usePreferences } from '../../context/usePreferences'
import MarketLineChart from './MarketLineChart'

const timeframes = ['1D', '5D', '1M', '6M', '1Y']

export default function MarketTrend() {
  const { t } = usePreferences()
  const [range, setRange] = useState('1M')

  const valueClass = marketTrend.up ? 'text-[#1e8e3e] dark:text-[#3ddc84]' : 'text-[#d61f26] dark:text-[#ff6b6b]'

  const stats: { label: string; value: string }[] = [
    { label: t('marketOpen'), value: marketTrend.open.toLocaleString('en-IN') },
    { label: t('marketHigh'), value: marketTrend.high.toLocaleString('en-IN') },
    { label: t('marketLow'), value: marketTrend.low.toLocaleString('en-IN') },
    { label: t('marketPrevClose'), value: marketTrend.prevClose.toLocaleString('en-IN') },
  ]

  return (
    <section className="market-page market-card w-full bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] border border-[#e5e5e5] dark:border-[#333333] shadow-[0px_0px_20px_rgba(0,0,0,0.06)] p-[16px] lg:p-[20px]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[12px]">
        <h2 className="market-page market-card-title font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-[#000000] dark:text-[#e8e8e8]">
          {t('marketTrend')}
        </h2>
        <div className="flex items-center gap-[8px] overflow-x-auto scrollbar-width-none [&::-webkit-scrollbar]:hidden">
          {timeframes.map((tf) => (
            <button
              key={tf}
              type="button"
              onClick={() => setRange(tf)}
              className={`market-page market-tf-btn shrink-0 px-[12px] py-[6px] rounded-[6px] font-['Hind_Vadodara'] font-bold text-[13px] border transition-colors ${
                range === tf
                  ? 'bg-[#ffad15] border-[#ffad15] text-[#000000]'
                  : 'bg-[#ffffff] dark:bg-[#1f1f1f] border-[#e5e5e5] dark:border-[#333333] text-[#000000] dark:text-[#e8e8e8] hover:border-[#ffad15]'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-[14px] flex items-baseline gap-[12px] flex-wrap">
        <span className="market-page market-trend-value font-['Rasa'] font-bold text-[28px] lg:text-[34px] text-[#000000] dark:text-[#e8e8e8]">
          {marketTrend.value.toLocaleString('en-IN')}
        </span>
        <span className={`market-page market-trend-change font-['Hind_Vadodara'] font-bold text-[15px] ${valueClass}`}>
          {marketTrend.change > 0 ? '+' : ''}
          {marketTrend.change.toLocaleString('en-IN')} ({marketTrend.changePercent > 0 ? '+' : ''}
          {marketTrend.changePercent}%)
        </span>
      </div>

      <div className="mt-[14px]">
        <MarketLineChart points={niftySeries[range] ?? niftySeries['1M']} />
      </div>

      <div className="mt-[14px] grid grid-cols-2 lg:grid-cols-4 gap-[10px]">
        {stats.map((s) => (
          <div key={s.label} className="rounded-[6px] bg-[#f7f7f7] dark:bg-[#2a2a2a] px-[12px] py-[8px]">
            <div className="market-page market-stat-label font-['Hind_Vadodara'] font-normal text-[12px] text-[#8b8b8b]">
              {s.label}
            </div>
            <div className="market-page market-stat-value font-['Rasa'] font-bold text-[16px] text-[#000000] dark:text-[#e8e8e8]">
              {s.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}