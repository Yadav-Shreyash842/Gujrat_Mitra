import { useEffect } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import BreakingHeadline from './components/sections/BreakingHeadline'
import CanadaStory from './components/sections/CanadaStory'
import CricketStory from './components/sections/CricketStory'
import CricketStory2 from './components/sections/CricketStory2'
import EntertainmentStory from './components/sections/EntertainmentStory'
import HealthSection from './components/sections/HealthSection'
import WebStories from './components/sections/WebStories'
import IndiaNews from './components/sections/IndiaNews'
import EntertainmentBlock from './components/sections/EntertainmentBlock'
import CanadaStory2 from './components/sections/CanadaStory2'
import CanadaStory3 from './components/sections/CanadaStory3'
import AdSlot498 from './components/widgets/AdSlot498'
import AdSlot499 from './components/widgets/AdSlot499'
import AdSlot500 from './components/widgets/AdSlot500'
import GujaratSection from './components/sections/GujaratSection'
import EntertainmentBlock2 from './components/sections/EntertainmentBlock2'
import CelebrityCard from './components/widgets/CelebrityCard'
import EducationSection from './components/sections/EducationSection'
import FashionWidget from './components/widgets/FashionWidget'
import RecipeSection from './components/sections/RecipeSection'
import PodcastSection from './components/sections/PodcastSection'
import MyCitySection from './components/sections/MyCitySection'
import Footer from './components/layout/Footer'
import EntertainmentFeature from './components/sections/EntertainmentFeature'
import HealthSection2 from './components/sections/HealthSection2'
import Ticker from './components/layout/Ticker'
import PlaceholderSpacer from './components/widgets/PlaceholderSpacer'
import EPaperWidget from './components/widgets/EPaperWidget'
import OpinionWidget from './components/widgets/OpinionWidget'
import MarketWidget from './components/widgets/MarketWidget'
import CricketScores from './components/widgets/CricketScores'
import LiveCricketWidget from './components/widgets/LiveCricketWidget'
import PlaceholderBox from './components/widgets/PlaceholderBox'
import GamesWidget from './components/widgets/GamesWidget'
import AapniAajWidget from './components/widgets/AapniAajWidget'
import DateBar from './components/widgets/DateBar'
import PollWidget2 from './components/widgets/PollWidget2'
import MobilePoll from './components/widgets/MobilePoll'
import MobileBottomNav from './components/layout/MobileBottomNav'
import { ToastProvider } from './components/Toast'
import { PreferencesProvider } from './context/PreferencesContext'
import { AuthProvider } from './context/AuthContext'
import ArticlePage from './pages/ArticlePage'
import CategoryPage from './pages/CategoryPage'
import VideoPage from './pages/VideoPage'
import EPaperPage from './pages/EPaperPage'
import AapniAajPage from './pages/AapniAajPage'
import MarketPage from './pages/MarketPage'
import SportsPage from './pages/SportsPage'
import GamesPage from './pages/GamesPage'
import BeepsPage from './pages/BeepsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import MyProfilePage from './pages/MyProfilePage'

function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if ((location.state as { scrollToPoll?: boolean } | null)?.scrollToPoll) {
      const el = document.getElementById('poll')
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 96
        window.scrollTo({ top: Math.max(y, 0), behavior: 'smooth' })
      }
    }
  }, [location.state])

  return (
<div className="relative top-[0px] left-[0px] w-full h-auto lg:h-[8692px] bg-[#ffffff] lg:overflow-hidden overflow-x-hidden">
  <div className="relative flex flex-col lg:block lg:absolute lg:top-[44px] lg:left-[49px] w-full h-auto lg:h-[8571px] gap-[16px] lg:gap-0 max-lg:pb-[calc(76px+env(safe-area-inset-bottom))] bg-[url('/images/v69_116.png')] bg-no-repeat bg-center bg-cover lg:overflow-hidden overflow-x-hidden">
    <Header />
    <Ticker className="lg:absolute lg:top-[184px] lg:left-[1px] lg:w-[1340px]" />
    <div className="flex flex-col gap-[16px] lg:gap-0 max-lg:px-[16px] lg:contents">
    <BreakingHeadline />
    <Link to="/epaper" className="hidden lg:block no-underline">
      <EPaperWidget />
    </Link>
    <div className="hidden lg:block">
      <PlaceholderBox />
    </div>
    <CanadaStory />
    <Link to="/aapni-aaj" className="hidden lg:block no-underline">
      <AapniAajWidget />
    </Link>
    <div className="hidden lg:block">
      <DateBar />
    </div>
    <CricketStory />
    <Link to="/market" className="hidden lg:block no-underline">
      <MarketWidget />
    </Link>
    <Link to="/sports" className="hidden lg:block no-underline">
      <CricketScores />
    </Link>
    <EntertainmentStory />
    <CricketStory2 />
    <Link to="/sports" className="hidden lg:block no-underline">
      <LiveCricketWidget />
    </Link>
    <MobilePoll />
    <CanadaStory2 />
    <div className="hidden lg:block">
      <PollWidget2 />
    </div>
    <CanadaStory3 />
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
  <MobileBottomNav />
</div>
  )
}

function App() {
  return (
    <AuthProvider>
      <PreferencesProvider>
        <ToastProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/news/:slug" element={<ArticlePage />} />
            <Route path="/video/:slug" element={<VideoPage />} />
            <Route path="/epaper" element={<EPaperPage />} />
            <Route path="/aapni-aaj" element={<AapniAajPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/beeps" element={<BeepsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/profile" element={<MyProfilePage />} />
          </Routes>
        </ToastProvider>
      </PreferencesProvider>
    </AuthProvider>
  )
}

export default App