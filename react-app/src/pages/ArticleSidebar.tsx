import EPaperWidget from '../components/widgets/EPaperWidget'
import MarketWidget from '../components/widgets/MarketWidget'
import CricketScores from '../components/widgets/CricketScores'
import OpinionWidget from '../components/widgets/OpinionWidget'
import PollWidget from '../components/widgets/PollWidget'

const relative = 'relative top-[0px] left-[0px]'

export default function ArticleSidebar() {
  return (
    <aside className="w-full lg:w-[301px] flex flex-col gap-[20px]">
      <EPaperWidget className={relative} />
      <MarketWidget className={relative} />
      <CricketScores className={relative} />
      <PollWidget className={relative} />
      <OpinionWidget className={relative} />
    </aside>
  )
}