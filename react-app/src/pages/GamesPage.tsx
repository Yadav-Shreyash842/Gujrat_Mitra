import { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import ScrollToTop from '../components/ScrollToTop'
import GameOverlay from '../components/games/GameOverlay'
import QuizGame from '../components/games/QuizGame'
import SudokuGame from '../components/games/SudokuGame'
import CrosswordGame from '../components/games/CrosswordGame'
import WordSearchGame from '../components/games/WordSearchGame'
import { usePreferences } from '../context/usePreferences'
import { gamesCatalog, quizQuestions, triviaQuestions, gamesLeaderboard } from '../data/games'
import type { GamesCatalogItem } from '../data/games'

export default function GamesPage() {
  const { t } = usePreferences()
  const [active, setActive] = useState<{ key: GamesCatalogItem['key']; title: string } | null>(null)

  const openGame = (g: GamesCatalogItem) => {
    setActive({ key: g.key, title: t(g.nameKey) })
  }

  const renderGame = () => {
    if (!active) return null
    switch (active.key) {
      case 'crossword':
        return <CrosswordGame />
      case 'sudoku':
        return <SudokuGame />
      case 'quiz':
        return <QuizGame questions={quizQuestions} label={t('quizName')} />
      case 'trivia':
        return <QuizGame questions={triviaQuestions} label={t('triviaName')} />
      case 'wordsearch':
        return <WordSearchGame />
    }
  }

  return (
    <>
      <ScrollToTop />
      <PageLayout>
        <div className="max-w-[1440px] mx-auto">
            <div>
              <div className="games-page games-kicker font-['Hind_Vadodara'] font-bold text-[13px] tracking-[0.08em] text-[#ffad15]">
                {t('gamesKicker')}
              </div>
              <div className="games-page games-title font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-[#000000] dark:text-[#ffffff] mt-[4px]">
                {t('gamesSubtitle')}
              </div>
              <div className="games-page games-tagline font-['Hind_Vadodara'] font-normal text-[14px] text-[#00000080] dark:text-[#b0b0b0] mt-[4px]">
                {t('gamesTagline')}
              </div>
            </div>

            <section className="mt-[28px]">
              <div className="games-page games-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                {t('allGames')}
              </div>
              <div className="mt-[14px] grid grid-cols-2 lg:grid-cols-5 gap-[12px]">
                {gamesCatalog.map((g) => (
                  <button
                    key={g.key}
                    type="button"
                    onClick={() => openGame(g)}
                    className="games-page games-card relative flex flex-col items-center text-center bg-[#ffffff] dark:bg-[#1f1f1f] border-[1px] border-[#e5e5e5] dark:border-[#333333] rounded-[14px] px-[14px] py-[16px] cursor-pointer active:scale-[0.96] transition-transform"
                  >
                    {g.tagKey ? (
                      <span className="games-page games-tag absolute top-[8px] right-[8px] text-[#ffffff] bg-[#ffad15] px-[7px] py-[2px] rounded-[6px] font-['Hind_Vadodara'] font-bold text-[9.5px]">
                        {t(g.tagKey)}
                      </span>
                    ) : null}
                    <span className="games-page games-icon w-[56px] h-[56px] flex items-center justify-center rounded-[12px] bg-[#f7f7f7] dark:bg-[#2a2a2a] border-[1px] border-[#e5e5e5] dark:border-[#333333] text-[26px] mb-[10px]">
                      {g.emoji}
                    </span>
                    <span className="games-page games-name font-['Rasa'] font-bold text-[16.5px] lg:text-[18px] text-[#000000] dark:text-[#ffffff] leading-[1.3] mb-[6px]">
                      {t(g.nameKey)}
                    </span>
                    <span className="games-page games-desc font-['Hind_Vadodara'] font-normal text-[13px] text-[#00000080] dark:text-[#b0b0b0] leading-[1.5]">
                      {t(g.descKey)}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="mt-[32px]">
              <div className="games-page games-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                {t('leaderboard')}
              </div>
              <div className="mt-[14px] bg-[#ffffff] dark:bg-[#1f1f1f] border-[1px] border-[#e5e5e5] dark:border-[#333333] rounded-[14px] px-[16px] py-[8px] max-w-[560px]">
                {gamesLeaderboard.map((p) => (
                  <div
                    key={p.rank}
                    className={`flex items-center justify-between py-[10px] border-b-[1px] border-[#f2f2f2] dark:border-[#2a2a2a] last:border-b-0 ${p.me ? 'bg-[rgba(255,173,21,0.12)] rounded-[8px] px-[8px]' : ''}`}
                  >
                    <span className="games-page games-lb-rank flex items-center gap-[8px] min-w-0">
                      <span className="w-[18px] text-center font-['Hind_Vadodara'] font-bold text-[14px] text-[#000000] dark:text-[#ffffff]">
                        {p.medal || p.rank}
                      </span>
                      <span
                        className={`games-page games-lb-name font-['Hind_Vadodara'] font-semibold text-[14px] truncate ${
                          p.me ? 'text-[#ffad15]' : 'text-[#000000] dark:text-[#e8e8e8]'
                        }`}
                      >
                        {p.name}
                      </span>
                    </span>
                    <span className="games-page games-lb-score font-['Hind_Vadodara'] font-bold text-[13px] text-[#1e8e3e]">
                      {p.score} pt
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </PageLayout>
        <MobileBottomNav />

      {active ? (
        <GameOverlay title={active.title} onClose={() => setActive(null)}>
          {renderGame()}
        </GameOverlay>
      ) : null}
    </>
  )
}
