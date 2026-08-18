import NewsLink from '../NewsLink'
import type { SectionItem } from './types'

const DEFAULT: SectionItem[] = [
  { title: 'કેનેડામાં ભારતીય મહિલા હિમાંશી ખુરાનાની હત્યા, પાર્ટનર મુખ્ય શંકાસ્પદ', image: '/images/v47_148.png' },
  { title: 'કેનેડામાં ભારતીય મહિલા હિમાંશી ખુરાનાની હત્યા, પાર્ટનર મુખ્ય શંકાસ્પદ', image: '/images/v47_151.png' },
  { title: 'કેનેડામાં ભારતીય મહિલા હિમાંશી ખુરાનાની હત્યા, પાર્ટનર મુખ્ય શંકાસ્પદ', image: '/images/v47_154.png' },
]

export default function CanadaStory({ items }: { items?: SectionItem[] }) {
  const list = items ?? DEFAULT
  const pick = (i: number) => list[i] ?? DEFAULT[i]

  return (
    <div className="lg:top-[712px] lg:left-[2px] max-lg:flex max-lg:flex-col max-lg:gap-[16px] w-full h-auto lg:h-[222px] bg-[url('/images/v47_145.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
      <div className="relative top-[0px] left-[0px] max-lg:w-full w-[231px] h-auto lg:h-[215px] bg-[url('/images/v47_146.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
        <span className="lg:top-[136px] lg:left-[8px] max-lg:w-full w-[216px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(0).title}</NewsLink>
        </span>
        <div
          className="relative top-[0px] left-[0px] max-lg:w-full max-lg:aspect-[231/130] max-lg:h-auto w-[231px] h-[130px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden"
          style={{ backgroundImage: `url('${pick(0).image ?? DEFAULT[0].image}')` }}
        />
      </div>
      <div className="lg:top-[0px] lg:left-[261px] max-lg:w-full w-[231px] h-auto lg:h-[215px] bg-[url('/images/v47_149.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <span className="lg:top-[136px] lg:left-[9px] max-lg:w-full w-[216px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(1).title}</NewsLink>
        </span>
        <div
          className="relative top-[0px] left-[0px] max-lg:w-full max-lg:aspect-[231/130] max-lg:h-auto w-[231px] h-[130px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden"
          style={{ backgroundImage: `url('${pick(1).image ?? DEFAULT[1].image}')` }}
        />
      </div>
      <div className="lg:top-[0px] lg:left-[522px] max-lg:w-full w-[232px] h-auto lg:h-[215px] bg-[url('/images/v47_152.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <span className="lg:top-[136px] lg:left-[9px] max-lg:w-full w-[216px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(2).title}</NewsLink>
        </span>
        <div
          className="relative top-[0px] left-[0px] max-lg:w-full max-lg:aspect-[232/130] max-lg:h-auto w-[232px] h-[130px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden"
          style={{ backgroundImage: `url('${pick(2).image ?? DEFAULT[2].image}')` }}
        />
      </div>
      <div className="lg:top-[0px] lg:left-[782px] max-lg:hidden w-[231px] h-[222px] bg-[#d9d9d9] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden lg:absolute" />
    </div>
  )
}
