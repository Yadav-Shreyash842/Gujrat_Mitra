import type { ReactNode } from 'react'

interface HorizontalNewsRailProps {
  children: ReactNode
  className?: string
}

export default function HorizontalNewsRail({ children, className = '' }: HorizontalNewsRailProps) {
  return (
    <div
      className={`
        gm-rail
        flex
        gap-[12px]
        overflow-x-auto
        snap-x
        snap-mandatory
        pb-[6px]
        ${className}
      `}
    >
      {children}
    </div>
  )
}