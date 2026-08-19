import NewsLink from '../NewsLink'
import type { SectionItem } from './types'

const DEFAULT: SectionItem[] = [
  { title: '"વિરાટ કોહલીનો કેપ્ટનશીપ યુગ નિરાશાજનક હતો": IPL વિજેતા કોચનું ઉત્તેજક નિવેદન' },
  { title: 'કેવી રીતે નિયમિત લાકડાના ટુકડાએ એક વિશાળ આતંકવાદી ભંડોળ નેટવર્કનો પર્દાફાશ કર્યો' },
  { title: 'વિજય હજારે ટ્રોફી, લાઈવ સ્કોર અપડેટ્સ: વિરાટ કોહલીના ઘરેલુ વાપસી પર કેપ્ટન રિષભ પંતે વિકેટ માટે પરસેવો પાડ્યો' },
  { title: 'ભારત જેવા મોટા પાડોશી સાથે કડવા સંબંધો નથી ઇચ્છતા: બાંગ્લાદેશના નેતા', image: '/images/v47_172.png' },
  { title: 'વિજય હજારે ટ્રોફી, લાઈવ સ્કોર અપડેટ્સ: વિરાટ કોહલીના ઘરેલુ વાપસી પર કેપ્ટન રિષભ પંતે વિકેટ માટે પરસેવો પાડ્યો', image: '/images/v47_169.png' },
]

export default function CricketStory2({ items }: { items?: SectionItem[] }) {
  const list = items ?? DEFAULT
  const pick = (i: number) => list[i] ?? DEFAULT[i]

  return (
    <div className="lg:top-[1615px] lg:left-[2px] max-lg:flex max-lg:flex-col max-lg:gap-[16px] max-lg:border-t max-lg:border-[#e8e8e8] max-lg:pt-[16px] w-full h-auto lg:h-[281px] bg-[url('/images/v47_167.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
      <div className="lg:top-[0px] lg:left-[696px] w-full lg:w-[316px] h-auto lg:h-[281px] bg-[url('/images/v47_168.png')] bg-no-repeat bg-center bg-cover max-lg:bg-[#ffffff] max-lg:rounded-[7px] max-lg:border max-lg:border-[#e5e5e5] max-lg:shadow-[0_1px_4px_rgba(0,0,0,0.08)] overflow-hidden lg:absolute">
        <div
          className="lg:top-[0px] lg:left-[1px] w-full lg:w-[315px] max-lg:aspect-[315/180] max-lg:h-auto h-[180px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] overflow-hidden lg:absolute"
          style={{ backgroundImage: `url('${pick(4).image ?? DEFAULT[4].image}')` }}
        />
        <span className="lg:top-[197px] lg:left-[0px] max-lg:w-full max-lg:block max-lg:px-[12px] max-lg:pt-[10px] max-lg:pb-[12px] max-lg:text-[18px] w-full lg:w-[316px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(4).title}</NewsLink>
        </span>
      </div>
      <div className="lg:top-[0px] lg:left-[350px] w-full lg:w-[316px] h-auto lg:h-[281px] bg-[url('/images/v47_171.png')] bg-no-repeat bg-center bg-cover max-lg:bg-[#ffffff] max-lg:rounded-[7px] max-lg:border max-lg:border-[#e5e5e5] max-lg:shadow-[0_1px_4px_rgba(0,0,0,0.08)] overflow-hidden lg:absolute">
        <div
          className="lg:top-[0px] lg:left-[1px] w-full lg:w-[315px] max-lg:aspect-[315/180] max-lg:h-auto h-[180px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] overflow-hidden lg:absolute"
          style={{ backgroundImage: `url('${pick(3).image ?? DEFAULT[3].image}')` }}
        />
        <span className="lg:top-[197px] lg:left-[0px] max-lg:w-full max-lg:block max-lg:px-[12px] max-lg:pt-[10px] max-lg:pb-[12px] max-lg:text-[18px] w-full lg:w-[316px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(3).title}</NewsLink>
        </span>
      </div>
      <div className="relative top-[0px] left-[0px] w-full lg:w-[320px] h-auto lg:h-[281px] bg-[url('/images/v47_174.png')] bg-no-repeat bg-center bg-cover max-lg:bg-[#ffffff] max-lg:rounded-[7px] max-lg:border max-lg:border-[#e5e5e5] max-lg:shadow-[0_1px_4px_rgba(0,0,0,0.08)] p-[12px] flex flex-col gap-[16px] overflow-hidden">
        <span className="relative top-[0px] left-[0px] w-full lg:w-[320px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left">
          <NewsLink>{pick(0).title}</NewsLink>
        </span>
        <span className="lg:top-[99px] lg:left-[0px] w-full lg:w-[320px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(1).title}</NewsLink>
        </span>
        <span className="lg:top-[198px] lg:left-[0px] w-full lg:w-[320px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(2).title}</NewsLink>
        </span>
      </div>
    </div>
  )
}
