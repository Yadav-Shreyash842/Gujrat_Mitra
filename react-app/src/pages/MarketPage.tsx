import { useEffect, useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import ScrollToTop from '../components/ScrollToTop'
import MarketTicker from '../components/market/MarketTicker'
import MarketIndices from '../components/market/MarketIndices'
import MarketTrend from '../components/market/MarketTrend'
import MarketGainersLosers from '../components/market/MarketGainersLosers'
import MarketBreadth from '../components/market/MarketBreadth'
import SectorPerformance from '../components/market/SectorPerformance'
import MarketUpdates from '../components/market/MarketUpdates'
import MarketDisclaimer from '../components/market/MarketDisclaimer'
import { usePreferences } from '../context/usePreferences'
import { marketInstruments } from '../data/market'
import { fetchMarketInstruments } from '../services/api'

export default function MarketPage() {
  const { t } = usePreferences()
  const [instruments, setInstruments] = useState(marketInstruments)

  useEffect(() => {
    let active = true
    fetchMarketInstruments().then((rows) => {
      if (active && rows.length > 0) setInstruments(rows)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <ScrollToTop />
      <PageLayout>
        <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-[12px] border-b-2 border-[#ffad15] pb-[12px]">
              <span className="w-[40px] h-[40px] flex items-center justify-center rounded-[8px] bg-[#ffad15] shrink-0">
                <svg className="w-[22px] h-[22px] text-[#ffffff]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 9.5 8 13l4-5 8 8h-3.5v2H21v-5.5h-2V14l-7-7-4 4.5L6 8.5H2V7h2v2.5z" />
                </svg>
              </span>
              <div className="min-w-0">
                <h1 className="market-page market-title text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-left leading-[1.1]">
                  {t('stockMarketTitle')}
                </h1>
                <p className="market-page market-subtitle mt-[4px] font-['Hind_Vadodara'] font-normal text-[13px] lg:text-[14px] text-[#8b8b8b]">
                  {t('stockMarketSubtitle')}
                </p>
              </div>
            </div>

            <div className="mt-[24px]">
              <MarketTicker instruments={instruments} />
            </div>

            <p className="market-page market-static-note mt-[12px] font-['Hind_Vadodara'] font-normal text-[13px] text-[#8b8b8b]">
              {t('marketStaticNote')}
            </p>

            <div className="mt-[20px] lg:hidden">
              <MarketIndices instruments={instruments} />
            </div>

            <div className="mt-[24px] grid grid-cols-1 gap-[24px] lg:grid-cols-4">
              <div className="lg:col-span-2">
                <MarketTrend />
              </div>
              <div className="flex flex-col gap-[24px] lg:col-span-1">
                <MarketGainersLosers variant="gainers" />
                <MarketGainersLosers variant="losers" />
              </div>
              <div className="lg:col-span-1">
                <MarketBreadth />
              </div>
              <div className="lg:col-span-3">
                <SectorPerformance />
              </div>
              <div className="lg:col-span-1">
                <MarketUpdates />
              </div>
            </div>

            <MarketDisclaimer />
          </div>
        </PageLayout>
        <MobileBottomNav />
    </>
  )
}