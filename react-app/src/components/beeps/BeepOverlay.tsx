import { useEffect, useRef } from 'react'
import type { TouchEvent as ReactTouchEvent, MouseEvent as ReactMouseEvent } from 'react'
import { usePreferences } from '../../context/usePreferences'
import { useToast } from '../useToast'
import type { Beep } from '../../data/games'

interface BeepOverlayProps {
  beep: Beep
  index: number
  total: number
  onNavigate: (next: number) => void
  onClose: () => void
}

export default function BeepOverlay({ beep, index, total, onNavigate, onClose }: BeepOverlayProps) {
  const { t } = usePreferences()
  const { showToast } = useToast()
  const startY = useRef<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowUp' && index < total - 1) onNavigate(index + 1)
      if (e.key === 'ArrowDown' && index > 0) onNavigate(index - 1)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose, onNavigate, index, total])

  const onTouchStart = (e: ReactTouchEvent) => {
    startY.current = e.touches[0].clientY
  }

  const onTouchEnd = (e: ReactTouchEvent) => {
    if (startY.current === null) return
    const dy = e.changedTouches[0].clientY - startY.current
    startY.current = null
    if (Math.abs(dy) < 40) return
    if (dy < 0 && index < total - 1) onNavigate(index + 1)
    else if (dy > 0 && index > 0) onNavigate(index - 1)
  }

  const onMouseDown = (e: ReactMouseEvent) => {
    startY.current = e.clientY
  }

  const onMouseUp = (e: ReactMouseEvent) => {
    if (startY.current === null) return
    const dy = e.clientY - startY.current
    startY.current = null
    if (Math.abs(dy) < 40) return
    if (dy < 0 && index < total - 1) onNavigate(index + 1)
    else if (dy > 0 && index > 0) onNavigate(index - 1)
  }

  return (
    <div
      className="fixed inset-0 z-[120] flex flex-col bg-[#ffffff] dark:bg-[#121212] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={beep.text}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      <div className="beeps-page flex items-center justify-between px-[16px] py-[12px] border-b border-[#e5e5e5] dark:border-[#2a2a2a] sticky top-0 bg-[#ffffff] dark:bg-[#121212] z-10">
        <button
          type="button"
          onClick={() => showToast(t('beepShare'))}
          aria-label={t('share')}
          className="beeps-page flex items-center gap-[8px] bg-transparent border-none cursor-pointer text-[#000000] dark:text-[#ffffff]"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 3v12M8 7l4-4 4 4M5 13v6a2 2 0 002 2h10a2 2 0 002-2v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="beeps-page beep-share-label font-['Hind_Vadodara'] font-bold text-[13px]">{t('share')}</span>
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label={t('close')}
          className="beeps-page w-[34px] h-[34px] flex items-center justify-center bg-transparent border-none cursor-pointer text-[#000000] dark:text-[#ffffff] rounded-full hover:bg-[#0000000d] dark:hover:bg-[#ffffff1a]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="beeps-page beep-overlay-inner w-full max-w-[900px] mx-auto pb-[24px]">
        <img src={beep.img} alt={beep.text} className="w-full h-[200px] object-cover block" />
        <div className="beeps-page beep-badge inline-block mt-[14px] ml-[18px] bg-[#ffad15] text-[#161616] px-[10px] py-[3px] rounded-[6px] font-['Hind_Vadodara'] font-bold text-[11px]">
          Short &amp; Snappy
        </div>
        <div className="beeps-page beep-headline font-['Rasa'] font-bold text-[24px] leading-[1.4] text-[#000000] dark:text-[#ffffff] mx-[18px] mt-[10px]">
          {beep.text}
        </div>
        <div className="beeps-page beep-time font-['Hind_Vadodara'] text-[15px] text-[#00000080] dark:text-[#b0b0b0] mx-[18px] mt-[8px]">
          ગુજરાત મિત્ર • {beep.time}
        </div>
        <div className="beeps-page beep-snippet font-['Hind_Vadodara'] text-[17px] leading-[1.75] text-[#000000a6] dark:text-[#c8c8c8] mx-[18px] mt-[14px]">
          {beep.snippet}
        </div>
      </div>
    </div>
  )
}