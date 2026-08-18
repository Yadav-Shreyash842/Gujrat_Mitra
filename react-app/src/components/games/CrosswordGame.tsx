import { useMemo, useState } from 'react'
import { usePreferences } from '../../context/usePreferences'
import { useToast } from '../useToast'
import { crosswordLayout, crosswordNumbers, crosswordAcross, crosswordDown } from '../../data/games'

type CellResult = 'ok' | 'bad' | null

export default function CrosswordGame() {
  const { t } = usePreferences()
  const { showToast } = useToast()
  const [letters, setLetters] = useState<Record<string, string>>({})
  const [results, setResults] = useState<Record<string, CellResult>>({})

  const answer = useMemo(() => {
    const map: Record<string, string> = {}
    crosswordLayout.forEach((row, r) =>
      row.forEach((cell, c) => {
        if (cell !== '#') map[`${r}-${c}`] = cell
      })
    )
    return map
  }, [])

  const setCell = (r: number, c: number, value: string) => {
    const key = `${r}-${c}`
    setLetters((l) => ({ ...l, [key]: value.slice(0, 1) }))
  }

  const check = () => {
    let allCorrect = true
    const next: Record<string, CellResult> = {}
    Object.keys(answer).forEach((key) => {
      const correct = (letters[key] || '').trim() === answer[key]
      next[key] = correct ? 'ok' : 'bad'
      if (!correct) allCorrect = false
    })
    setResults(next)
    showToast(allCorrect ? t('crosswordWin') : t('crosswordWrong'))
  }

  return (
    <div>
      <div className="games-page font-['Hind_Vadodara'] text-[13px] text-[#00000080] dark:text-[#b0b0b0] text-center mb-[14px]">
        {t('crosswordHint')}
      </div>
      <div className="grid grid-cols-6 w-full max-w-[280px] mx-auto gap-[1px] bg-[#e5e5e5] dark:bg-[#333333] border-2 border-[#000000] dark:border-[#ffffff] mb-[18px]">
        {crosswordLayout.map((row, r) =>
          row.map((cell, c) => {
            if (cell === '#') {
              return (
                <div key={`${r}-${c}`} className="aspect-square bg-[#000000] dark:bg-[#ffffff]" />
              )
            }
            const key = `${r}-${c}`
            const res = results[key]
            const numLabel = crosswordNumbers[key]
            const color = res === 'ok' ? '#1e8e3e' : res === 'bad' ? '#d61f26' : '#ffad15'
            return (
              <div key={key} className="relative aspect-square bg-[#ffffff] dark:bg-[#1f1f1f] flex items-center justify-center min-w-0">
                {numLabel ? (
                  <span className="games-page cross-num absolute top-[1px] left-[2px] font-['Hind_Vadodara'] font-bold text-[8px] text-[#00000080] dark:text-[#b0b0b0]">
                    {numLabel}
                  </span>
                ) : null}
                <input
                  aria-label={`Row ${r + 1}, Column ${c + 1}`}
                  maxLength={1}
                  value={letters[key] || ''}
                  onChange={(e) => setCell(r, c, e.target.value)}
                  className="games-page cross-cell-input w-full h-full text-center bg-transparent border-none outline-none focus:outline-[2px] focus:outline-[#ffad15] font-['Hind_Vadodara'] font-bold text-[13px]"
                  style={{ color }}
                />
              </div>
            )
          })
        )}
      </div>

      <div className="games-page cross-clue-title font-['Hind_Vadodara'] font-bold text-[12.5px] text-[#ffad15] mt-[14px] mb-[6px]">
        {t('crosswordAcross')}
      </div>
      {crosswordAcross.map((clue) => (
        <div key={clue} className="games-page cross-clue font-['Hind_Vadodara'] text-[13px] text-[#000000a6] dark:text-[#b0b0b0] mb-[4px] leading-[1.5]">
          {clue}
        </div>
      ))}
      <div className="games-page cross-clue-title font-['Hind_Vadodara'] font-bold text-[12.5px] text-[#ffad15] mt-[14px] mb-[6px]">
        {t('crosswordDown')}
      </div>
      {crosswordDown.map((clue) => (
        <div key={clue} className="games-page cross-clue font-['Hind_Vadodara'] text-[13px] text-[#000000a6] dark:text-[#b0b0b0] mb-[4px] leading-[1.5]">
          {clue}
        </div>
      ))}

      <button
        type="button"
        onClick={check}
        className="games-page game-check-btn block bg-[#ffad15] text-[#161616] font-['Hind_Vadodara'] font-bold text-[14px] text-center px-[16px] py-[13px] rounded-[10px] cursor-pointer border-none mx-auto mt-[8px]"
      >
        {t('check')}
      </button>
    </div>
  )
}