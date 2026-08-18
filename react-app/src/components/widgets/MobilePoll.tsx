import { useState } from 'react'
import PollWidget from './PollWidget'

export default function MobilePoll() {
  const [open, setOpen] = useState(false)

  return (
    <div id="poll" className="w-full">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="lg:hidden flex items-center justify-between w-full min-h-[44px] px-[16px] bg-[#ffffff] dark:bg-[#1a1a1a] border border-b-0 border-[#e5e5e5] dark:border-[#333333] rounded-t-[8px] rounded-b-none cursor-pointer font-['Hind_Vadodara'] font-normal text-[18px] text-[#000000] dark:text-[#e8e8e8]"
      >
        <span>પોલ</span>
        <svg
          className={`w-[16px] h-[16px] shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div className={`${open ? 'block' : 'hidden'} lg:block`}>
        <PollWidget />
      </div>
    </div>
  )
}