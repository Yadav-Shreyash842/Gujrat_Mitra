import { useMemo, useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import ScrollToTop from '../components/ScrollToTop'
import { usePreferences } from '../context/usePreferences'
import { useToast } from '../components/useToast'
import {
  aapniAajCities,
  aapniAajCityList,
  buildPanchang,
  computeChoghadiya,
  computeJainTimings,
  computeKaalMuhurat,
  currentDayChoghName,
  rashiList,
  rashiTips,
  CHOGH_NATURE,
} from '../data/aapniAaj'
import PanchangInfoCard from '../components/aapniAaj/PanchangInfoCard'
import DateSummary from '../components/aapniAaj/DateSummary'
import ChoghadiyaPanels from '../components/aapniAaj/ChoghadiyaPanels'
import AapniAajSidebar from '../components/aapniAaj/AapniAajSidebar'
import MobileFestivalSections from '../components/aapniAaj/MobileFestivalSections'

export default function AapniAajPage() {
  const [city, setCity] = useState(aapniAajCityList[0])
  const [rashiIdx, setRashiIdx] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState(() => new Date())
  const { t } = usePreferences()
  const { showToast } = useToast()

  const cd = aapniAajCities[city]
  const chogh = useMemo(() => computeChoghadiya(cd.sunriseMin, cd.sunsetMin, selectedDate), [cd, selectedDate])
  const jain = useMemo(() => computeJainTimings(cd.sunriseMin, cd.sunsetMin), [cd])
  const panchang = useMemo(
    () => buildPanchang(cd.sunriseMin, cd.sunsetMin, currentDayChoghName(cd.sunriseMin, cd.sunsetMin, selectedDate), selectedDate),
    [cd, selectedDate],
  )
  const kaal = useMemo(() => computeKaalMuhurat(cd.sunriseMin, cd.sunsetMin, selectedDate), [cd, selectedDate])

  const isToday = useMemo(() => {
    const now = new Date()
    return (
      selectedDate.getFullYear() === now.getFullYear() &&
      selectedDate.getMonth() === now.getMonth() &&
      selectedDate.getDate() === now.getDate()
    )
  }, [selectedDate])

  const prevDate = () => setSelectedDate((d) => new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1))
  const nextDate = () => setSelectedDate((d) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1))
  const resetDate = () => setSelectedDate(new Date())

  const skyTimes = [
    { label: t('sunrise'), value: cd.sunriseStr, emoji: '🌅' },
    { label: t('sunset'), value: cd.sunsetStr, emoji: '🌇' },
    { label: t('moonrise'), value: cd.moonriseStr, emoji: '🌙' },
    { label: t('moonset'), value: cd.moonsetStr, emoji: '🌘' },
  ]

  const natureColor = (name: string) => {
    const nature = CHOGH_NATURE[name] ?? 'neutral'
    if (nature === 'good') return 'text-[#1e8e3e] dark:text-[#3ddc84]'
    if (nature === 'bad') return 'text-[#d61f26] dark:text-[#ff6b6b]'
    return 'text-[#00000080] dark:text-[#b0b0b0]'
  }

  return (
    <>
      <ScrollToTop />
      <PageLayout>
        <div className="max-w-[1440px] mx-auto">
            <nav
              className="aapni-aaj-page aapni-aaj-breadcrumb font-['Hind_Vadodara'] font-normal text-[13px] text-[#00000080] dark:text-[#9a9a9a]"
              aria-label="Breadcrumb"
            >
              <span className="text-[#000000a6] dark:text-[#b0b0b0]">{t('home')}</span>
              <span className="mx-[6px]" aria-hidden="true">
                ›
              </span>
              <span className="font-bold text-[#000000] dark:text-[#e8e8e8]">{t('aapniAaj')}</span>
            </nav>

            <div className="mt-[14px] flex items-center gap-[12px] border-b-2 border-[#ffad15] pb-[8px]">
              <span
                className="flex items-center justify-center w-[34px] h-[34px] shrink-0 rounded-full bg-[#ffad15] text-[18px]"
                aria-hidden="true"
              >
                ☀️
              </span>
              <span className="aapni-aaj-page aapni-aaj-title text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-left">
                {t('aapniAaj')}
              </span>
              <span className="hidden sm:flex items-center gap-[5px]" aria-hidden="true">
                <span className="w-[5px] h-[5px] rounded-full bg-[#ffad15]" />
                <span className="w-[5px] h-[5px] rounded-full bg-[#ffad15]" />
                <span className="w-[5px] h-[5px] rounded-full bg-[#ffad15]" />
              </span>
            </div>

            <div className="mt-[20px]">
              <DateSummary
                date={selectedDate}
                isToday={isToday}
                onPrev={prevDate}
                onNext={nextDate}
                onToday={resetDate}
                panchang={panchang}
                sunrise={cd.sunriseStr}
                sunset={cd.sunsetStr}
                t={t}
              />
            </div>

            <div className="mt-[14px] flex flex-wrap items-center justify-end gap-[12px]">
              <label className="flex items-center gap-[8px]">
                <span className="aapni-aaj-page aapni-aaj-city-label font-['Hind_Vadodara'] font-normal text-[14px] text-[#000000a6] dark:text-[#b0b0b0]">
                  {t('city')}:
                </span>
                <select
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value)
                    showToast(e.target.value + ' ' + t('cityApplied'))
                  }}
                  className="aapni-aaj-page aapni-aaj-city-select bg-[#ffffff] dark:bg-[#1f1f1f] border border-[#e5e5e5] dark:border-[#333333] text-[#000000] dark:text-[#e8e8e8] rounded-[6px] px-[10px] py-[8px] font-['Hind_Vadodara'] font-semibold text-[14px]"
                >
                  {aapniAajCityList.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-[24px] lg:flex lg:items-start lg:gap-[24px]">
              <main className="min-w-0 flex-1">
                <section>
                  <div className="aapni-aaj-page aapni-aaj-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                    <span className="mr-[6px]" aria-hidden="true">
                      🕉️
                    </span>
                    {t('panchang')}
                  </div>
                  <div className="mt-[12px] grid grid-cols-2 lg:grid-cols-4 gap-[14px]">
                    {panchang.map((p) => (
                      <PanchangInfoCard key={p.label} emoji={p.emoji} label={p.label} value={p.value} />
                    ))}
                  </div>
                </section>

                <section className="mt-[28px]">
                  <div className="aapni-aaj-page aapni-aaj-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                    <span className="mr-[6px]" aria-hidden="true">
                      ☀️
                    </span>
                    {t('sunMoon')}
                  </div>
                  <div className="mt-[12px] grid grid-cols-2 lg:grid-cols-4 gap-[14px]">
                    {skyTimes.map((st) => (
                      <PanchangInfoCard key={st.label} center emoji={st.emoji} label={st.label} value={st.value} />
                    ))}
                  </div>
                </section>

                <section className="mt-[28px]">
                  <div className="aapni-aaj-page aapni-aaj-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                    <span className="mr-[6px]" aria-hidden="true">
                      ⏳
                    </span>
                    {t('kaalMuhurat')}
                  </div>
                  <div className="mt-[12px] grid grid-cols-2 lg:grid-cols-4 gap-[14px]">
                    {kaal.map((k) => (
                      <PanchangInfoCard key={k.label} emoji={k.emoji} label={k.label} value={k.value} />
                    ))}
                  </div>
                </section>

                <section className="mt-[28px]">
                  <div className="aapni-aaj-page aapni-aaj-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                    <span className="mr-[6px]" aria-hidden="true">
                      🕰️
                    </span>
                    {t('choghadiya')}
                  </div>
                  <ChoghadiyaPanels daySlots={chogh.daySlots} nightSlots={chogh.nightSlots} natureColor={natureColor} t={t} />
                </section>

                <section className="mt-[28px]">
                  <div className="aapni-aaj-page aapni-aaj-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                    <span className="mr-[6px]" aria-hidden="true">
                      🏛️
                    </span>
                    {t('jainTimings')}
                  </div>
                  <div className="mt-[12px] bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] divide-y divide-[#f2f2f2] dark:divide-[#2a2a2a]">
                    {jain.map((j) => (
                      <div key={j.name} className="flex items-center justify-between px-[14px] py-[10px]">
                        <span className="aapni-aaj-page aapni-aaj-jain-name font-['Hind_Vadodara'] font-normal text-[14px] text-[#000000] dark:text-[#e8e8e8]">
                          {j.name}
                        </span>
                        <span className="aapni-aaj-page aapni-aaj-jain-time font-['Hind_Vadodara'] font-bold text-[14px] text-[#1e8e3e] dark:text-[#3ddc84]">
                          {j.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="mt-[28px]">
                  <div className="aapni-aaj-page aapni-aaj-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                    <span className="mr-[6px]" aria-hidden="true">
                      ⭐
                    </span>
                    {t('rashi')}
                  </div>
                  <div className="mt-[12px] flex gap-[10px] overflow-x-auto pb-[8px]">
                    {rashiList.map((r, i) => (
                      <button
                        key={r.name}
                        type="button"
                        onClick={() => setRashiIdx(i)}
                        className={`aapni-aaj-page aapni-aaj-rashi-card shrink-0 cursor-pointer w-[84px] bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] px-[8px] py-[12px] text-center border-none ${
                          rashiIdx === i ? 'ring-2 ring-[#ffad15]' : ''
                        }`}
                      >
                        <div className="text-[26px]" aria-hidden="true">
                          {r.sym}
                        </div>
                        <div className="aapni-aaj-page aapni-aaj-rashi-name font-['Hind_Vadodara'] font-bold text-[13px] text-[#000000] dark:text-[#e8e8e8]">
                          {r.name}
                        </div>
                      </button>
                    ))}
                  </div>
                  {rashiIdx !== null && (
                    <div className="mt-[12px] bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] px-[16px] py-[16px]">
                      <div className="aapni-aaj-page aapni-aaj-rashi-sym text-[32px] text-center" aria-hidden="true">
                        {rashiList[rashiIdx].sym}
                      </div>
                      <div className="aapni-aaj-page aapni-aaj-rashi-name text-center font-['Hind_Vadodara'] font-bold text-[15px] text-[#000000] dark:text-[#e8e8e8]">
                        {rashiList[rashiIdx].name}
                      </div>
                      <p className="aapni-aaj-page aapni-aaj-rashi-tip mt-[8px] text-center font-['Hind_Vadodara'] font-normal text-[15px] text-[#000000a6] dark:text-[#b0b0b0] leading-[1.7]">
                        {rashiTips[rashiIdx]}
                      </p>
                    </div>
                  )}
                </section>

                <MobileFestivalSections panchang={panchang} sunrise={cd.sunriseStr} sunset={cd.sunsetStr} t={t} />
              </main>

              <aside className="hidden lg:block w-[301px] shrink-0 mt-[2px]">
                <AapniAajSidebar panchang={panchang} sunrise={cd.sunriseStr} sunset={cd.sunsetStr} t={t} />
              </aside>
            </div>
          </div>
        </PageLayout>
        <MobileBottomNav />
    </>
  )
}
