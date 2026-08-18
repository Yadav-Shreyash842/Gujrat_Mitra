import NewsLink from '../NewsLink'
import type { SectionItem } from './types'

const DEFAULT: SectionItem[] = [
  { title: 'વિજય હજારે ટ્રોફી, લાઈવ સ્કોર અપડેટ્સ: વિરાટ કોહલીના ઘરેલુ વાપસી પર કેપ્ટન રિષભ પંતે વિકેટ માટે પરસેવો પાડ્યો', image: '/images/v47_158.png' },
  { title: '"વિરાટ કોહલીનો કેપ્ટનશીપ યુગ નિરાશાજનક હતો": IPL વિજેતા કોચનું ઉત્તેજક નિવેદન' },
  { title: 'કેવી રીતે નિયમિત લાકડાના ટુકડાએ એક વિશાળ આતંકવાદી ભંડોળ નેટવર્કનો પર્દાફાશ કર્યો' },
  { title: 'વિજય હજારે ટ્રોફી, લાઈવ સ્કોર અપડેટ્સ: વિરાટ કોહલીના ઘરેલુ વાપસી પર કેપ્ટન રિષભ પંતે વિકેટ માટે પરસેવો પાડ્યો' },
  { title: 'ભારત જેવા મોટા પાડોશી સાથે કડવા સંબંધો નથી ઇચ્છતા: બાંગ્લાદેશના નેતા', image: '/images/v47_165.png' },
]

export default function CricketStory({ items }: { items?: SectionItem[] }) {
  const list = items ?? DEFAULT
  const pick = (i: number) => list[i] ?? DEFAULT[i]

  return (
    <div className="lg:top-[1035px] lg:left-[2px] max-lg:flex max-lg:flex-col max-lg:gap-[16px] w-full h-auto lg:h-[290px] bg-[url('/images/v47_156.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
      <div className="relative top-[0px] left-[0px] w-full lg:w-[317px] h-auto lg:h-[290px] bg-[url('/images/v47_157.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
        <div
          className="relative top-[0px] left-[0px] w-full lg:w-[317px] max-lg:aspect-[317/187] max-lg:h-auto h-[187px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden"
          style={{ backgroundImage: `url('${pick(0).image ?? DEFAULT[0].image}')` }}
        />
        <span className="lg:top-[208px] lg:left-[1px] w-full lg:w-[317px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(0).title}</NewsLink>
        </span>
      </div>
      <div className="lg:top-[1px] lg:left-[693px] w-full lg:w-[321px] h-auto lg:h-[289px] bg-[url('/images/v47_160.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <span className="relative top-[0px] left-[0px] w-full lg:w-[321px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left">
          <NewsLink>{pick(1).title}</NewsLink>
        </span>
        <span className="lg:top-[103px] lg:left-[0px] w-full lg:w-[321px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(2).title}</NewsLink>
        </span>
        <span className="lg:top-[206px] lg:left-[0px] w-full lg:w-[321px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(3).title}</NewsLink>
        </span>
      </div>
      <div className="lg:top-[0px] lg:left-[346px] w-full lg:w-[317px] h-auto lg:h-[290px] bg-[url('/images/v47_164.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div
          className="relative top-[0px] left-[0px] w-full lg:w-[317px] max-lg:aspect-[317/187] max-lg:h-auto h-[187px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden"
          style={{ backgroundImage: `url('${pick(4).image ?? DEFAULT[4].image}')` }}
        />
        <span className="lg:top-[208px] lg:left-[1px] w-full lg:w-[317px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(4).title}</NewsLink>
        </span>
      </div>
    </div>
  )
}
