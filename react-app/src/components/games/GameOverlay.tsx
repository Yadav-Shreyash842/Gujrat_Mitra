import { useEffect, type ReactNode } from 'react'

interface GameOverlayProps {
  title: string
  onClose: () => void
  children: ReactNode
}

export default function GameOverlay({ title, onClose, children }: GameOverlayProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[120] flex flex-col bg-[#ffffff] dark:bg-[#121212]" role="dialog" aria-modal="true" aria-label={title}>
      <div className="games-page flex items-center gap-[14px] px-[16px] py-[14px] border-b border-[#e5e5e5] dark:border-[#2a2a2a]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="w-[34px] h-[34px] shrink-0 flex items-center justify-center bg-transparent border-none cursor-pointer rounded-full hover:bg-[#0000000d] dark:hover:bg-[#ffffff1a]"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <span className="games-page game-overlay-title font-['Rasa'] font-bold text-[17px] lg:text-[20px] text-[#000000] dark:text-[#ffffff] truncate">
          {title}
        </span>
      </div>
      <div className="games-page flex-1 overflow-y-auto w-full max-w-[1360px] mx-auto px-[16px] lg:px-[24px] py-[18px] box-border">
        {children}
      </div>
    </div>
  )
}