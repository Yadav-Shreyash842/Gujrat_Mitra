import Header from './Header'
import Footer from './Footer'

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen bg-[#ffffff] dark:bg-[#121212] overflow-x-hidden">
      <div className="relative top-[0px] left-0 lg:absolute lg:top-[44px] lg:left-[49px] w-full h-auto lg:h-[154px]">
        <Header />
      </div>
      <main className="relative w-full px-[49px] pt-[40px] pb-[60px] max-lg:px-[16px] max-lg:pt-[24px] max-lg:pb-[calc(88px+env(safe-area-inset-bottom))] lg:pt-[238px]">
        {children}
      </main>
      <div className="relative top-[0px] left-0 lg:left-[2px] w-full h-auto lg:h-[256px]">
        <Footer />
      </div>
    </div>
  )
}
