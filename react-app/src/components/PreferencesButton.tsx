import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import PreferencesPanel from './PreferencesPanel'

export default function PreferencesButton({
  trigger,
  className,
  buttonClassName,
  panelClassName,
  align = 'right',
}: {
  trigger: ReactNode
  className?: string
  buttonClassName?: string
  panelClassName?: string
  align?: 'left' | 'right'
}) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  const measure = useCallback(() => {
    if (!wrapRef.current) return
    const r = wrapRef.current.getBoundingClientRect()
    const panelW = 220
    const left =
      align === 'right' ? Math.max(8, r.left + r.width - panelW) : Math.min(r.left, window.innerWidth - panelW - 8)
    setPos({ top: r.bottom + 8, left })
  }, [align])

  useEffect(() => {
    if (!open) return
    measure()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
      window.removeEventListener('resize', measure)
    }
  }, [open, measure])

  return (
    <div ref={wrapRef} className={className}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className={`flex items-center justify-center cursor-pointer border-none p-0 bg-transparent text-[#000000] dark:text-[#e8e8e8] ${buttonClassName ?? ''}`}
      >
        {trigger}
      </button>
      {open && pos && (
        <div
          role="dialog"
          aria-label="Settings"
          style={{ top: pos.top, left: pos.left }}
          className={`fixed z-[130] ${panelClassName ?? ''}`}
        >
          <PreferencesPanel />
        </div>
      )}
    </div>
  )
}