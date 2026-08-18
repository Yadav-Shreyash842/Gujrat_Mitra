import { useState } from 'react'
import { usePreferences } from '../../context/usePreferences'
import type { QuizQuestion } from '../../data/games'

interface QuizGameProps {
  questions: QuizQuestion[]
  label: string
}

export default function QuizGame({ questions, label }: QuizGameProps) {
  const { t } = usePreferences()
  const [qIdx, setQIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [chosen, setChosen] = useState<number | null>(null)
  const [done, setDone] = useState(false)

  const item = questions[qIdx]

  const pick = (oi: number) => {
    if (answered) return
    setAnswered(true)
    setChosen(oi)
    if (oi === item.correct) setScore((s) => s + 1)
  }

  const next = () => {
    if (qIdx + 1 < questions.length) {
      setQIdx((i) => i + 1)
      setAnswered(false)
      setChosen(null)
    } else {
      setDone(true)
    }
  }

  const retry = () => {
    setQIdx(0)
    setScore(0)
    setAnswered(false)
    setChosen(null)
    setDone(false)
  }

  if (done) {
    return (
      <div className="quiz-score text-center px-[20px] py-[40px]">
        <div className="text-[40px]">🏆</div>
        <div className="games-page quiz-score-num font-['Rasa'] font-bold text-[44px] text-[#ffad15] mb-[6px]">
          {score}/{questions.length}
        </div>
        <div className="games-page font-['Hind_Vadodara'] text-[14px] text-[#000000a6] dark:text-[#b0b0b0] mb-[20px]">
          {label} {t('quizComplete')}
        </div>
        <button
          type="button"
          onClick={retry}
          className="games-page game-check-btn w-full max-w-[300px] mx-auto block bg-[#ffad15] text-[#161616] font-['Hind_Vadodara'] font-bold text-[14px] text-center px-[16px] py-[13px] rounded-[10px] cursor-pointer border-none"
        >
          {t('retry')}
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="games-page quiz-progress font-['Hind_Vadodara'] font-bold text-[12px] text-[#00000080] dark:text-[#b0b0b0] mb-[14px]">
        {t('questionProgress')} {qIdx + 1} / {questions.length}
      </div>
      <div className="games-page quiz-q font-['Rasa'] font-bold text-[15.5px] lg:text-[18px] text-[#000000] dark:text-[#ffffff] mb-[14px] leading-[1.4]">
        {item.q}
      </div>
      <div className="flex flex-col">
        {item.opts.map((o, i) => {
          let cls =
            'border-[#e5e5e5] dark:border-[#333333] text-[#000000] dark:text-[#ffffff] bg-[#ffffff] dark:bg-[#1f1f1f]'
          if (answered) {
            if (i === item.correct) cls = 'border-[#1e8e3e] bg-[rgba(30,142,62,0.12)] text-[#1e8e3e]'
            else if (i === chosen) cls = 'border-[#d61f26] bg-[rgba(214,31,38,0.1)] text-[#d61f26]'
          }
          return (
            <button
              key={i}
              type="button"
              onClick={() => pick(i)}
              disabled={answered}
              className={`games-page quiz-opt w-full text-left px-[14px] py-[13px] border-[1.5px] rounded-[10px] mb-[10px] font-['Hind_Vadodara'] font-semibold text-[14px] cursor-pointer ${cls}`}
            >
              {o}
            </button>
          )
        })}
      </div>
      {answered && (
        <button
          type="button"
          onClick={next}
          className="games-page game-check-btn w-full bg-[#ffad15] text-[#161616] font-['Hind_Vadodara'] font-bold text-[14px] text-center px-[16px] py-[13px] rounded-[10px] cursor-pointer border-none mt-[6px]"
        >
          {qIdx === questions.length - 1 ? t('showResult') : t('nextQuestion')}
        </button>
      )}
    </div>
  )
}