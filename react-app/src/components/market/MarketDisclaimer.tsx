import { usePreferences } from '../../context/usePreferences'

export default function MarketDisclaimer() {
  const { t } = usePreferences()

  return (
    <div className="market-page market-disclaimer mt-[24px] rounded-[8px] border border-[#e5e5e5] dark:border-[#333333] bg-[#fafafa] dark:bg-[#1c1c1c] px-[16px] py-[14px]">
      <p className="market-page market-disclaimer-note font-['Hind_Vadodara'] font-normal text-[13px] text-[#8b8b8b]">
        {t('marketDisclaimer')}
      </p>
      <p className="market-page market-disclaimer-update mt-[6px] font-['Hind_Vadodara'] font-normal text-[13px] text-[#8b8b8b]">
        {t('marketLastUpdate')}
      </p>
      <p className="market-page market-disclaimer-source mt-[2px] font-['Hind_Vadodara'] font-normal text-[13px] text-[#8b8b8b]">
        {t('marketDataSource')}
      </p>
    </div>
  )
}