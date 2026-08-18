import { useEffect, useState } from 'react'
import { useParams, Navigate, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../components/layout/Header'
import Ticker from '../components/layout/Ticker'
import MobileBottomNav from '../components/layout/MobileBottomNav'
import BreakingHeadline from '../components/sections/BreakingHeadline'
import CanadaStory from '../components/sections/CanadaStory'
import CricketStory from '../components/sections/CricketStory'
import CricketStory2 from '../components/sections/CricketStory2'
import EntertainmentStory from '../components/sections/EntertainmentStory'
import CanadaStory2 from '../components/sections/CanadaStory2'
import CanadaStory3 from '../components/sections/CanadaStory3'
import GujaratSection from '../components/sections/GujaratSection'
import MyCitySection from '../components/sections/MyCitySection'
import EntertainmentBlock2 from '../components/sections/EntertainmentBlock2'
import EducationSection from '../components/sections/EducationSection'
import RecipeSection from '../components/sections/RecipeSection'
import WebStories from '../components/sections/WebStories'
import HealthSection from '../components/sections/HealthSection'
import IndiaNews from '../components/sections/IndiaNews'
import EntertainmentBlock from '../components/sections/EntertainmentBlock'
import PodcastSection from '../components/sections/PodcastSection'
import HealthSection2 from '../components/sections/HealthSection2'
import EntertainmentFeature from '../components/sections/EntertainmentFeature'
import Footer from '../components/layout/Footer'
import AdSlot498 from '../components/widgets/AdSlot498'
import AdSlot499 from '../components/widgets/AdSlot499'
import AdSlot500 from '../components/widgets/AdSlot500'
import EPaperWidget from '../components/widgets/EPaperWidget'
import PlaceholderBox from '../components/widgets/PlaceholderBox'
import AapniAajWidget from '../components/widgets/AapniAajWidget'
import DateBar from '../components/widgets/DateBar'
import MarketWidget from '../components/widgets/MarketWidget'
import CricketScores from '../components/widgets/CricketScores'
import LiveCricketWidget from '../components/widgets/LiveCricketWidget'
import MobilePoll from '../components/widgets/MobilePoll'
import PollWidget2 from '../components/widgets/PollWidget2'
import GamesWidget from '../components/widgets/GamesWidget'
import OpinionWidget from '../components/widgets/OpinionWidget'
import FashionWidget from '../components/widgets/FashionWidget'
import CelebrityCard from '../components/widgets/CelebrityCard'
import PlaceholderSpacer from '../components/widgets/PlaceholderSpacer'
import { getCategoryBySlug, getArticlesByCategory } from '../utils/categoryArticles'
import { fetchArticlesByCategory } from '../services/api'
import { videos } from '../data/videos'
import type { SectionItem } from '../components/sections/types'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const categorySlug = slug ?? ''
  const category = getCategoryBySlug(categorySlug)
  const [articles, setArticles] = useState(() => getArticlesByCategory(categorySlug))

  useEffect(() => {
    let active = true
    setArticles(getArticlesByCategory(categorySlug))
    fetchArticlesByCategory(categorySlug).then((rows) => {
      if (active && rows.length > 0) setArticles(rows)
    })
    return () => {
      active = false
    }
  }, [categorySlug])

  if (!category) {
    return <Navigate to="/" replace />
  }

  const items: SectionItem[] =
    category.slug === 'video'
      ? videos.map((video) => ({
          title: video.title,
          image: video.thumbnail,
          href: `/video/${video.slug}`,
        }))
      : articles.map((article) => ({
          title: article.title,
          image: article.image,
          href: `/news/${article.slug}`,
        }))

  return (
    <>
      <ScrollToTop />
      <div className="relative top-[0px] left-[0px] w-full h-auto lg:h-[8692px] bg-[#ffffff] lg:overflow-hidden overflow-x-hidden">
        <div className="relative flex flex-col lg:block lg:absolute lg:top-[44px] lg:left-[49px] w-full h-auto lg:h-[8571px] gap-[16px] lg:gap-0 max-lg:pb-[calc(76px+env(safe-area-inset-bottom))] bg-[url('/images/v69_116.png')] bg-no-repeat bg-center bg-cover lg:overflow-hidden overflow-x-hidden">
          <Header />
          <Ticker className="lg:absolute lg:top-[184px] lg:left-[1px] lg:w-[1340px]" />
          <div className="flex flex-col gap-[16px] lg:gap-0 max-lg:px-[16px] lg:contents">
            <BreakingHeadline items={items} />
            <Link to="/epaper" className="hidden lg:block no-underline">
              <EPaperWidget />
            </Link>
            <div className="hidden lg:block">
              <PlaceholderBox />
            </div>
            <CanadaStory items={items} />
            <Link to="/aapni-aaj" className="hidden lg:block no-underline">
              <AapniAajWidget />
            </Link>
            <div className="hidden lg:block">
              <DateBar />
            </div>
            <CricketStory items={items} />
            <Link to="/market" className="hidden lg:block no-underline">
              <MarketWidget />
            </Link>
            <Link to="/sports" className="hidden lg:block no-underline">
              <CricketScores />
            </Link>
            <EntertainmentStory items={items} />
            <CricketStory2 items={items} />
            <Link to="/sports" className="hidden lg:block no-underline">
              <LiveCricketWidget />
            </Link>
            <MobilePoll />
            <CanadaStory2 />
            <div className="hidden lg:block">
              <PollWidget2 />
            </div>
            <CanadaStory3 items={items} />
            <Link to="/games" className="hidden lg:block no-underline">
              <GamesWidget />
            </Link>
            <GujaratSection />
            <div className="hidden lg:block">
              <OpinionWidget />
            </div>
            <AdSlot498 />
            <MyCitySection />
            <EntertainmentBlock2 />
            <EducationSection />
            <AdSlot500 />
            <div className="hidden lg:block">
              <FashionWidget />
            </div>
            <RecipeSection />
            <div className="hidden lg:block">
              <CelebrityCard />
            </div>
            <WebStories />
            <AdSlot499 />
            <HealthSection />
            <IndiaNews />
            <EntertainmentBlock />
            <PodcastSection />
            <HealthSection2 />
            <EntertainmentFeature />
            <Footer />
            <PlaceholderSpacer />
          </div>
        </div>
      </div>
      <MobileBottomNav />
    </>
  )
}
