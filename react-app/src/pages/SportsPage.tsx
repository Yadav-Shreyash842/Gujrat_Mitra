import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import ScrollToTop from '../components/ScrollToTop'
import { usePreferences } from '../context/usePreferences'
import { getArticlesByCategory } from '../utils/categoryArticles'
import { pointsTable } from '../data/sports'
import { toGuDigits } from '../utils/gu'
import { fetchArticlesByCategory, fetchPointsTable } from '../services/api'

export default function SportsPage() {
  const { t } = usePreferences()
  const [points, setPoints] = useState(pointsTable)
  const [articles, setArticles] = useState(() => getArticlesByCategory('sports'))

  useEffect(() => {
    let active = true
    fetchPointsTable().then((rows) => {
      if (active && rows.length > 0) setPoints(rows)
    })
    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    let active = true
    setArticles(getArticlesByCategory('sports'))
    fetchArticlesByCategory('sports').then((rows) => {
      if (active && rows.length > 0) setArticles(rows)
    })
    return () => {
      active = false
    }
  }, [])

  return (
    <>
      <ScrollToTop />
      <PageLayout>
        <div className="max-w-[1440px] mx-auto">
            <div className="flex items-center gap-[12px] border-b-2 border-[#ffad15] pb-[8px]">
              <span className="sports-page sports-title text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-left">
                {t('sportsTitle')}
              </span>
            </div>

            <section className="mt-[24px]">
              <div className="sports-page sports-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                {t('pointsTable')}
              </div>
              <div className="mt-[12px] bg-[#ffffff] dark:bg-[#1f1f1f] rounded-[8px] shadow-[0px_0px_20px_rgba(0,0,0,0.25)] overflow-x-auto">
                <table className="sports-page sports-table w-full min-w-[320px] border-collapse">
                  <thead>
                    <tr className="border-b border-[#f2f2f2] dark:border-[#2a2a2a]">
                      <th className="sports-page sports-th text-left px-[16px] py-[12px] font-['Hind_Vadodara'] font-bold text-[13px] text-[#000000a6] dark:text-[#b0b0b0]">
                        {t('team')}
                      </th>
                      <th className="sports-page sports-th text-center px-[16px] py-[12px] font-['Hind_Vadodara'] font-bold text-[13px] text-[#000000a6] dark:text-[#b0b0b0]">
                        {t('matches')}
                      </th>
                      <th className="sports-page sports-th text-right px-[16px] py-[12px] font-['Hind_Vadodara'] font-bold text-[13px] text-[#000000a6] dark:text-[#b0b0b0]">
                        {t('points')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {points.map((row, i) => (
                      <tr
                        key={row.team}
                        className={i === 0 ? 'bg-[#fef5dc] dark:bg-[#2a2a1a]' : 'border-t border-[#f2f2f2] dark:border-[#2a2a2a]'}
                      >
                        <td className="sports-page sports-td px-[16px] py-[12px] font-['Hind_Vadodara'] font-bold text-[14px] text-[#000000] dark:text-[#e8e8e8]">
                          {row.team}
                        </td>
                        <td className="sports-page sports-td text-center px-[16px] py-[12px] font-['Hind_Vadodara'] font-normal text-[14px] text-[#000000a6] dark:text-[#b0b0b0]">
                          {toGuDigits(row.matches)}
                        </td>
                        <td className="sports-page sports-td text-right px-[16px] py-[12px] font-['Rasa'] font-bold text-[15px] text-[#000000] dark:text-[#e8e8e8]">
                          {toGuDigits(row.points)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-[28px]">
              <div className="sports-page sports-section-label font-['Hind_Vadodara'] font-bold text-[15px] lg:text-[17px] text-[#000000] dark:text-[#e8e8e8]">
                {t('sportsNews')}
              </div>
              {articles.length === 0 ? (
                <p className="sports-page sports-empty mt-[16px] text-[#000000a6] dark:text-[#b0b0b0] font-['Hind_Vadodara'] font-normal text-[16px]">
                  {t('categoryEmpty')}
                </p>
              ) : (
                <div className="sports-page sports-list mt-[16px] flex flex-col gap-[20px]">
                  {articles.map((article) => (
                    <Link key={article.slug} to={`/news/${article.slug}`} className="flex gap-[14px] no-underline items-start">
                      <img
                        src={article.image}
                        alt={article.imageAlt}
                        className="w-[112px] h-[72px] object-cover rounded-[7px] shrink-0 max-lg:w-[96px] max-lg:h-[64px]"
                      />
                      <span className="min-w-0">
                        <span className="sports-page sports-card-title block text-[#000000] dark:text-[#e8e8e8] font-['Rasa'] font-normal text-[19px] lg:text-[22px] leading-[1.3] max-lg:text-[18px]">
                          {article.title}
                        </span>
                        <span className="sports-page sports-card-meta block mt-[6px] text-[#999999] font-['Inter'] font-normal text-[11px] uppercase">
                          {article.category} • {article.date}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          </div>
        </PageLayout>
        <MobileBottomNav />
    </>
  )
}