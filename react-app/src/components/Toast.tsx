import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ToastContext } from './useToast'

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<{ id: number; message: string }[]>([])
  const idRef = useRef(0)

  const dismiss = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  const showToast = useCallback(
    (message: string) => {
      const id = ++idRef.current
      setToasts((prev) => [...prev, { id, message }])
      window.setTimeout(() => dismiss(id), 2200)
    },
    [dismiss],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setToasts([])
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        className="fixed left-1/2 -translate-x-1/2 bottom-[24px] max-lg:bottom-[calc(90px+env(safe-area-inset-bottom))] z-[999] flex flex-col items-center gap-[8px] pointer-events-none"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className="px-[16px] h-[38px] bg-[#1302ff] text-[#ffffff] font-['Inter'] font-normal text-[14px] leading-[38px] rounded-[4px] shadow-lg whitespace-nowrap max-w-[90vw] overflow-hidden text-ellipsis"
          >
            {t.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}