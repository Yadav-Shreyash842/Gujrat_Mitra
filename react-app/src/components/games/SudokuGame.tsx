import { useState } from 'react'
import { usePreferences } from '../../context/usePreferences'
import { useToast } from '../useToast'
import { sudokuPuzzle, sudokuSolution } from '../../data/games'

type CellResult = 'ok' | 'bad' | null

export default function SudokuGame() {
  const { t } = usePreferences()
  const { showToast } = useToast()
  const [grid, setGrid] = useState<number[][]>(() => sudokuPuzzle.map((row) => [...row]))
  const [results, setResults] = useState<Record<string, CellResult>>({})

  const setCell = (r: number, c: number, value: string) => {
    const digit = value.replace(/[^1-9]/g, '')
    setGrid((g) => {
      const next = g.map((row) => [...row])
      next[r][c] = digit ? parseInt(digit, 10) : 0
      return next
    })
  }

  const check = () => {
    let allCorrect = true
    let allFilled = true
    const next: Record<string, CellResult> = {}
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        const v = grid[r][c]
        if (!v) allFilled = false
        const key = `${r}-${c}`
        if (v && v === sudokuSolution[r][c]) {
          next[key] = 'ok'
        } else if (v) {
          next[key] = 'bad'
          allCorrect = false
        }
      }
    }
    setResults(next)
    showToast(!allFilled ? t('sudokuIncomplete') : allCorrect ? t('sudokuWin') : t('sudokuWrong'))
  }

  return (
    <div>
      <div className="games-page font-['Hind_Vadodara'] text-[13px] text-[#00000080] dark:text-[#b0b0b0] text-center mb-[14px]">
        {t('sudokuHint')}
      </div>
      <div className="grid grid-cols-9 w-full max-w-[315px] mx-auto gap-[1px] bg-[#e5e5e5] dark:bg-[#333333] border-2 border-[#000000] dark:border-[#ffffff] mb-[16px]">
        {grid.map((row, r) =>
          row.map((val, c) => {
            const blockR = c % 3 === 2 && c !== 8
            const blockB = r % 3 === 2 && r !== 8
            const res = results[`${r}-${c}`]
            const isGiven = sudokuPuzzle[r][c] !== 0
            const base =
              'aspect-square flex items-center justify-center min-w-0 ' +
              (blockR ? 'border-r-2 border-[#000000] dark:border-[#ffffff] ' : '') +
              (blockB ? 'border-b-2 border-[#000000] dark:border-[#ffffff] ' : '') +
              (isGiven ? 'bg-[#0000000d] dark:bg-[#333333] ' : 'bg-[#ffffff] dark:bg-[#1f1f1f] ')
            if (isGiven) {
              return (
                <div key={`${r}-${c}`} className={`${base} games-page sudoku-cell font-['Hind_Vadodara'] font-bold text-[14px] text-[#000000] dark:text-[#ffffff]`}>
                  {val}
                </div>
              )
            }
            const color = res === 'ok' ? '#1e8e3e' : res === 'bad' ? '#d61f26' : '#ffad15'
            return (
              <div key={`${r}-${c}`} className={base}>
                <input
                  aria-label={`Row ${r + 1}, Column ${c + 1}`}
                  inputMode="numeric"
                  maxLength={1}
                  value={val === 0 ? '' : String(val)}
                  onChange={(e) => setCell(r, c, e.target.value)}
                  className="games-page sudoku-cell-input w-full h-full text-center bg-transparent border-none outline-none focus:outline-[2px] focus:outline-[#ffad15] font-['Hind_Vadodara'] font-bold text-[14px]"
                  style={{ color }}
                />
              </div>
            )
          })
        )}
      </div>
      <button
        type="button"
        onClick={check}
        className="games-page game-check-btn block bg-[#ffad15] text-[#161616] font-['Hind_Vadodara'] font-bold text-[14px] text-center px-[16px] py-[13px] rounded-[10px] cursor-pointer border-none mx-auto"
      >
        {t('check')}
      </button>
    </div>
  )
}