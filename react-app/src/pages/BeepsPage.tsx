import { useEffect, useRef, useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import ScrollToTop from '../components/ScrollToTop'
import BeepOverlay from '../components/beeps/BeepOverlay'
import { usePreferences } from '../context/usePreferences'
import { useToast } from '../components/useToast'
import { beeps } from '../data/games'

export default function BeepsPage() {
  const { t } = usePreferences()
  const { showToast } = useToast()
  const [audioOn, setAudioOn] = useState(false)
  const [autoScroll, setAutoScroll] = useState(false)
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([])
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    return () => {
      if (autoTimer.current) clearInterval(autoTimer.current)
    }
  }, [])

  const toggleAudio = () => {
    setAudioOn((v) => {
      showToast(v ? t('beepsAudioOff') : t('beepsAudioOn'))
      return !v
    })
  }

  const toggleAutoScroll = () => {
    setAutoScroll((v) => {
      const next = !v
      showToast(next ? t('beepsAutoOn') : t('beepsAutoOff'))
      if (next) {
        let idx = 0
        autoTimer.current = setInterval(() => {
          idx = (idx + 1) % beeps.length
          cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 4000)
      } else if (autoTimer.current) {
        clearInterval(autoTimer.current)
        autoTimer.current = null
      }
      return next
    })
  }

  const navigate = (next: number) => {
    if (next < 0 || next >= beeps.length) return
    setActiveIdx(next)
  }

  return (
    <>
      <ScrollToTop />
      <PageLayout>
        <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-[12px] border-b-2 border-[#ffad15] pb-[8px]">
              <span className="beeps-page beeps-title text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-left">
                {t('beepsTitle')}
              </span>
            </div>

            <div className="beeps-page beeps-subtitle font-['Hind_Vadodara'] font-normal text-[14px] text-[#00000080] dark:text-[#b0b0b0] mt-[10px]">
              {t('beepsSubtitle')}
            </div>

            <div className="mt-[18px] flex gap-[10px]">
              <button
                type="button"
                onClick={toggleAudio}
                aria-pressed={audioOn}
                className={`beeps-page beep-ctrl-btn flex items-center gap-[8px] px-[14px] py-[9px] rounded-[8px] border-[1px] bg-transparent cursor-pointer font-['Hind_Vadodara'] font-bold text-[13px] ${
                  audioOn
                    ? 'bg-[#ffad15] border-[#ffad15] text-[#161616]'
                    : 'border-[#e5e5e5] dark:border-[#333333] text-[#000000] dark:text-[#ffffff]'
                }`}
              >
                <span aria-hidden="true">{audioOn ? '🔇' : '🔊'}</span>
                {t('beepsAudio')}
              </button>
              <button
                type="button"
                onClick={toggleAutoScroll}
                aria-pressed={autoScroll}
                className={`beeps-page beep-ctrl-btn flex items-center gap-[8px] px-[14px] py-[9px] rounded-[8px] border-[1px] bg-transparent cursor-pointer font-['Hind_Vadodara'] font-bold text-[13px] ${
                  autoScroll
                    ? 'bg-[#ffad15] border-[#ffad15] text-[#161616]'
                    : 'border-[#e5e5e5] dark:border-[#333333] text-[#000000] dark:text-[#ffffff]'
                }`}
              >
                <span aria-hidden="true">{autoScroll ? '⏸️' : '▶️'}</span>
                {t('beepsAutoScroll')}
              </button>
            </div>

            <section className="mt-[20px]">
              <div className="beeps-page beeps-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                {t('beepsFeedLabel')}
              </div>
              <div className="mt-[12px] flex flex-col gap-[10px]">
                {beeps.map((b, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIdx(i)}
                    className="beeps-page beep-feed-card w-full flex items-center gap-[14px] bg-[#ffffff] dark:bg-[#1f1f1f] border-[1px] border-[#e5e5e5] dark:border-[#333333] rounded-[12px] p-[12px] cursor-pointer text-left active:bg-[#f2f2f2] dark:active:bg-[#2a2a2a]"
                    ref={(el) => {
                      cardRefs.current[i] = el
                    }}
                  >
                    <img src={b.img} alt="" className="w-[96px] h-[72px] object-cover rounded-[8px] shrink-0" />
                    <span className="min-w-0 flex-1">
                      <span className="beeps-page beep-feed-badge inline-block bg-[#ffad15] text-[#161616] px-[7px] py-[2px] rounded-[5px] font-['Hind_Vadodara'] font-bold text-[10px] mb-[6px]">
                        Short &amp; Snappy
                      </span>
                      <span className="beeps-page beep-feed-headline block font-['Hind_Vadodara'] font-bold text-[14.5px] leading-[1.35] text-[#000000] dark:text-[#ffffff]">
                        {b.text}
                      </span>
                      <span className="beeps-page beep-feed-time block mt-[6px] font-['Hind_Vadodara'] text-[11.5px] text-[#00000080] dark:text-[#b0b0b0]">
                        {b.time}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </PageLayout>
        <MobileBottomNav />

      {activeIdx !== null ? (
        <BeepOverlay
          beep={beeps[activeIdx]}
          index={activeIdx}
          total={beeps.length}
          onNavigate={navigate}
          onClose={() => setActiveIdx(null)}
        />
      ) : null}
    </>
  )
}