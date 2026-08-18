import { useRef, useState } from 'react'
import { usePreferences } from '../../context/usePreferences'
import { useToast } from '../useToast'
import { wordSearchRows, wordSearchWords } from '../../data/games'

export default function WordSearchGame() {
  const { t } = usePreferences()
  const { showToast } = useToast()
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [foundNames, setFoundNames] = useState<Set<string>>(new Set())
  const completedRef = useRef(false)

  const foundCells = new Set<string>()
  foundNames.forEach((name) => {
    const word = wordSearchWords.find((w) => w.name === name)
    word?.cells.forEach(([wr, wc]) => foundCells.add(`${wr}-${wc}`))
  })

  const onCellClick = (r: number, c: number) => {
    const key = `${r}-${c}`
    const selectedNext = new Set(selected)
    selectedNext.add(key)
    setSelected(selectedNext)

    const nextFound = new Set(foundNames)
    const newlyFound: string[] = []
    wordSearchWords.forEach((w) => {
      if (nextFound.has(w.name)) return
      if (w.cells.every(([wr, wc]) => selectedNext.has(`${wr}-${wc}`))) {
        nextFound.add(w.name)
        newlyFound.push(w.name)
      }
    })

    if (newlyFound.length > 0) {
      setFoundNames(nextFound)
      newlyFound.forEach((name) => showToast(`${t('wordSearchFound')} ${name}`))
      if (!completedRef.current && nextFound.size === wordSearchWords.length) {
        completedRef.current = true
        setTimeout(() => showToast(t('wordSearchAllFound')), 500)
      }
    }
  }

  return (
    <div>
      <div className="games-page font-['Hind_Vadodara'] text-[13px] text-[#00000080] dark:text-[#b0b0b0] text-center mb-[12px]">
        {t('wordSearchHint')}
      </div>
      <div className="grid grid-cols-8 w-full max-w-[300px] mx-auto gap-[2px] mb-[18px]">
        {wordSearchRows.map((row, r) =>
          row.map((letter, c) => {
            const key = `${r}-${c}`
            const isFound = foundCells.has(key)
            const isSelected = selected.has(key)
            let cls = 'bg-[#ffffff] dark:bg-[#1f1f1f] text-[#000000] dark:text-[#ffffff]'
            if (isFound) cls = 'bg-[#ffad15] text-[#161616]'
            else if (isSelected) cls = 'bg-[#ffffff] dark:bg-[#1f1f1f] text-[#ffad15]'
            return (
              <button
                key={key}
                type="button"
                onClick={() => onCellClick(r, c)}
                aria-label={`${letter}, Row ${r + 1}, Column ${c + 1}`}
                className={`games-page ws-cell aspect-square min-w-0 flex items-center justify-center rounded-[4px] cursor-pointer border-none font-['Hind_Vadodara'] font-bold text-[13px] ${cls} ${isSelected && !isFound ? 'outline-[2px] outline-[#ffad15] outline' : ''}`}
              >
                {letter}
              </button>
            )
          })
        )}
      </div>
      <div className="text-center">
        {wordSearchWords.map((w) => (
          <span
            key={w.name}
            className={`games-page ws-word-chip inline-block px-[12px] py-[6px] rounded-[14px] bg-[#ffffff] dark:bg-[#1f1f1f] border-[1px] border-[#e5e5e5] dark:border-[#333333] font-['Hind_Vadodara'] font-bold text-[12.5px] text-[#000000] dark:text-[#ffffff] mr-[6px] mb-[8px] ${
              foundNames.has(w.name) ? '!bg-[#ffad15] !text-[#161616] !line-through !border-[#ffad15]' : ''
            }`}
          >
            {w.name}
          </span>
        ))}
      </div>
    </div>
  )
}