import { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import ScrollToTop from '../components/ScrollToTop'
import { usePreferences } from '../context/usePreferences'
import { useToast } from '../components/useToast'
import { epaperEditions, EPAPER_PREVIEW, EDITION_UNAVAILABLE } from '../data/epaper'
import { todayGuDate } from '../utils/gu'

export default function EPaperPage() {
  const [editionId, setEditionId] = useState(epaperEditions[0].id)
  const { t } = usePreferences()
  const { showToast } = useToast()
  const edition = epaperEditions.find((e) => e.id === editionId) ?? epaperEditions[0]

  const handleOpen = () => {
    if (!edition.available) showToast(EDITION_UNAVAILABLE)
  }

  return (
    <>
      <ScrollToTop />
      <PageLayout>
        <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-[12px] border-b-2 border-[#ffad15] pb-[8px]">
              <span className="epaper-page epaper-title text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-left">
                {t('epaper')}
              </span>
            </div>

            <section className="mt-[24px]">
              <div className="epaper-page epaper-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                {t('todayEdition')}
              </div>
              <div className="mt-[12px] grid lg:grid-cols-2 gap-[20px]">
                <div className="epaper-page epaper-preview-card bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] overflow-hidden">
                  <img src={EPAPER_PREVIEW} alt={edition.name} className="w-full aspect-[3/4] lg:aspect-[16/10] object-cover" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="epaper-page epaper-edition-name font-['Rasa'] font-bold text-[26px] lg:text-[32px] text-[#000000] dark:text-[#e8e8e8]">
                    {edition.name}
                  </div>
                  <div className="epaper-page epaper-edition-date mt-[8px] font-['Hind_Vadodara'] font-normal text-[15px] text-[#000000a6] dark:text-[#b0b0b0]">
                    {todayGuDate()}
                  </div>
                  <div className="mt-[16px]">
                    <button
                      type="button"
                      onClick={handleOpen}
                      className="epaper-page epaper-open-btn cursor-pointer bg-[#ffad15] text-[#000000] font-['Hind_Vadodara'] font-bold text-[16px] rounded-[6px] px-[24px] py-[10px] border-none"
                    >
                      {t('open')}
                    </button>
                  </div>
                  {!edition.available && (
                    <p className="epaper-page epaper-unavailable mt-[14px] font-['Hind_Vadodara'] font-normal text-[14px] text-[#8b8b8b]">
                      {EDITION_UNAVAILABLE}
                    </p>
                  )}
                </div>
              </div>
            </section>

            <section className="mt-[32px]">
              <div className="epaper-page epaper-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                {t('otherEditions')}
              </div>
              <div className="mt-[12px] grid grid-cols-2 lg:grid-cols-4 gap-[16px]">
                {epaperEditions.map((e) => (
                  <button
                    key={e.id}
                    type="button"
                    onClick={() => {
                      setEditionId(e.id)
                      showToast(e.name + ' ' + t('editionSelected'))
                    }}
                    className={`epaper-page epaper-edition-card cursor-pointer bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] overflow-hidden text-left p-0 border-none ${
                      editionId === e.id ? 'ring-2 ring-[#ffad15]' : ''
                    }`}
                  >
                    <img src={EPAPER_PREVIEW} alt={e.name} className="w-full aspect-[3/4] object-cover" />
                    <div className="px-[10px] py-[8px]">
                      <span className="epaper-page epaper-edition-name block font-['Hind_Vadodara'] font-bold text-[14px] text-[#000000] dark:text-[#e8e8e8]">
                        {e.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </PageLayout>
        <MobileBottomNav />
    </>
  )
}