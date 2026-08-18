import { marketSectors } from '../../data/marketData'
import { usePreferences } from '../../context/usePreferences'

export default function SectorPerformance() {
  const { t } = usePreferences()

  return (
    <section className="market-page market-card w-full bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] border border-[#e5e5e5] dark:border-[#333333] shadow-[0px_0px_20px_rgba(0,0,0,0.06)] p-[16px] lg:p-[20px]">
      <h2 className="market-page market-card-title font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-[#000000] dark:text-[#e8e8e8]">
        {t('sectorPerformance')}
      </h2>

      <div className="mt-[14px] grid grid-cols-2 lg:grid-cols-3 gap-[10px]">
        {marketSectors.map((sector) => (
          <div
            key={sector.name}
            className={`market-page market-sector-tile flex items-center justify-between rounded-[8px] border px-[12px] py-[10px] ${
              sector.up
                ? 'border-[#1e8e3e] bg-[#1e8e3e0d] dark:border-[#3ddc84]'
                : 'border-[#d61f26] bg-[#d61f260d] dark:border-[#ff6b6b]'
            }`}
          >
            <span className="market-page market-sector-name font-['Hind_Vadodara'] font-bold text-[13px] text-[#000000] dark:text-[#e8e8e8]">
              {sector.name}
            </span>
            <span
              className={`market-page market-sector-change font-['Hind_Vadodara'] font-bold text-[13px] ${
                sector.up ? 'text-[#1e8e3e] dark:text-[#3ddc84]' : 'text-[#d61f26] dark:text-[#ff6b6b]'
              }`}
            >
              {sector.changePercent}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}