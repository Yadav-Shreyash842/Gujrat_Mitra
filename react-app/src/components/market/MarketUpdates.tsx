import { marketUpdates } from '../../data/marketData'
import { usePreferences } from '../../context/usePreferences'

export default function MarketUpdates() {
  const { t } = usePreferences()

  return (
    <section className="market-page market-card w-full bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] border border-[#e5e5e5] dark:border-[#333333] shadow-[0px_0px_20px_rgba(0,0,0,0.06)] p-[16px]">
      <h2 className="market-page market-card-title font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-[#000000] dark:text-[#e8e8e8]">
        {t('quickUpdates')}
      </h2>

      <div className="mt-[12px] flex flex-col divide-y divide-[#e8e8e8] dark:divide-[#2e2e2e]">
        {marketUpdates.map((update, index) => (
          <div key={index} className="flex items-start gap-[10px] py-[12px] first:pt-0 last:pb-0">
            <span className="market-page market-update-bullet w-[6px] h-[6px] rounded-[50%] bg-[#ffad15] mt-[7px] shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="market-page market-update-text font-['Hind_Vadodara'] font-normal text-[14px] leading-[1.45] text-[#000000] dark:text-[#e8e8e8]">
                {update.text}
              </p>
              <span className="market-page market-update-time block mt-[4px] font-['Hind_Vadodara'] font-normal text-[12px] text-[#8b8b8b]">
                {update.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}