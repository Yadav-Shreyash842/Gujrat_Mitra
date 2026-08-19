import NewsLink from '../NewsLink'
import type { SectionItem } from './types'

const DEFAULT: SectionItem[] = [
  { title: 'કેનેડામાં ભારતીય મહિલા હિમાંશી ખુરાનાની હત્યા, પાર્ટનર મુખ્ય શંકાસ્પદ', image: '/images/v47_487.png' },
  { title: '"કોઈ અફસોસ નથી": શિમલાના સસ્પેન્ડેડ ડૉક્ટરે દર્દી સાથે શા માટે ઝઘડો કર્યો તે અંગે ફરિયાદ કરી', image: '/images/v47_490.png' },
  { title: '"આપણે સૌથી મોટા ભાગેડુ છીએ": નવા વિડીયોમાં, લલિત મોદી, વિજય માલ્યા ભારતને ટોણો', image: '/images/v47_493.png' },
  { title: '"આપણે સૌથી મોટા ભાગેડુ છીએ": નવા વિડીયોમાં, લલિત મોદી, વિજય માલ્યા ભારતને ટોણો', image: '/images/v47_497.png' },
]

export default function CanadaStory3({ items }: { items?: SectionItem[] }) {
  const list = items ?? DEFAULT
  const pick = (i: number) => list[i] ?? DEFAULT[i]

  return (
    <div className="lg:top-[2557px] lg:left-[2px] max-lg:border-t max-lg:border-[#e8e8e8] max-lg:pt-[16px] w-full h-auto lg:h-[230px] bg-[url('/images/v47_484.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
      <div className="relative top-[0px] left-[0px] max-lg:w-full w-[231px] h-auto lg:h-[230px] bg-[url('/images/v47_485.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
        <span className="lg:top-[150px] lg:left-[0px] max-lg:w-full w-[231px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(0).title}</NewsLink>
        </span>
        <div
          className="relative top-[0px] left-[0px] max-lg:w-full max-lg:aspect-[231/130] max-lg:h-auto w-[231px] h-[130px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden"
          style={{ backgroundImage: `url('${pick(0).image ?? DEFAULT[0].image}')` }}
        />
      </div>
      <div className="lg:top-[0px] lg:left-[261px] max-lg:w-full w-[231px] h-auto lg:h-[230px] bg-[url('/images/v47_488.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <span className="lg:top-[150px] lg:left-[1px] max-lg:w-full w-[231px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(1).title}</NewsLink>
        </span>
        <div
          className="relative top-[0px] left-[0px] max-lg:w-full max-lg:aspect-[231/130] max-lg:h-auto w-[231px] h-[130px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden"
          style={{ backgroundImage: `url('${pick(1).image ?? DEFAULT[1].image}')` }}
        />
      </div>
      <div className="lg:top-[0px] lg:left-[522px] max-lg:w-full w-[231px] h-auto lg:h-[230px] bg-[url('/images/v47_491.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <span className="lg:top-[150px] lg:left-[1px] max-lg:w-full w-[231px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(2).title}</NewsLink>
        </span>
        <div
          className="relative top-[0px] left-[0px] max-lg:w-full max-lg:aspect-[231/130] max-lg:h-auto w-[231px] h-[130px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden"
          style={{ backgroundImage: `url('${pick(2).image ?? DEFAULT[2].image}')` }}
        />
      </div>
      <div className="lg:top-[0px] lg:left-[783px] max-lg:w-full w-[231px] h-auto lg:h-[228px] bg-[url('/images/v47_494.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div className="lg:top-[150px] lg:left-[1px] max-lg:w-full w-[231px] h-auto lg:h-[78px] bg-[url('/images/v47_495.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <span className="relative top-[0px] left-[0px] max-lg:w-full w-[231px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left">
            <NewsLink>{pick(3).title}</NewsLink>
          </span>
        </div>
        <div
          className="relative top-[0px] left-[0px] max-lg:w-full max-lg:aspect-[231/130] max-lg:h-auto w-[231px] h-[130px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden"
          style={{ backgroundImage: `url('${pick(3).image ?? DEFAULT[3].image}')` }}
        />
      </div>
    </div>
  )
}
