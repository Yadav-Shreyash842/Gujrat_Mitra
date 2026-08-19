import { Link } from 'react-router-dom'
import NewsLink from '../NewsLink'
import type { SectionItem } from './types'

const DEFAULT: SectionItem[] = [
  {
    title: "'તમે ચૂંટણી ખોરવવા માટે ઉસ્માન હાદીની હત્યા કરાવી હતી': યુનુસ શાસન પર મોટો આરોપ",
    image: '/images/v47_130.png',
    href: '/news/usman-hadi-yunus-government',
  },
  { title: "ભારતના 'બાહુબલી' રોકેટે સૌથી ભારે ઉપગ્રહને ભ્રમણકક્ષામાં મૂક્યો", image: '/images/v47_134.png' },
  { title: 'હવે H-1B લોટરી નહીં, અમેરિકાએ વર્ક વિઝા માટે નવી પ્રક્રિયાની સૂચના આપી' },
  { title: 'જગન રેડ્ડીના જન્મદિવસ પર ફટાકડા ફોડવા સામે ગર્ભવતી મહિલાનો વિરોધ, લાત મારી' },
  { title: 'બ્લુબર્ડ 6 પ્રક્ષેપણ ISRO માટે એક સીમાચિહ્નરૂપ કેમ છે: NDTV સમજાવે છે' },
  { title: 'છૂટાછેડાની નોટિસ મોકલ્યાના એક અઠવાડિયા પછી બેંગલુરુના ટેકીએ પત્નીને ગોળી મારી' },
  { title: "ભારતના 'બાહુબલી' રોકેટે સૌથી ભારે ઉપગ્રહને ભ્રમણકક્ષામાં મૂક્યો", image: '/images/v47_143.png' },
]

export default function BreakingHeadline({ items }: { items?: SectionItem[] }) {
  const list = items ?? DEFAULT
  const pick = (i: number) => list[i] ?? DEFAULT[i]
  const hero = pick(0)

  return (
    <div id="beeps" className="lg:top-[251px] lg:left-[2px] max-lg:flex max-lg:flex-col max-lg:gap-[16px] max-lg:border-t max-lg:border-[#e8e8e8] max-lg:pt-[16px] w-full h-auto lg:h-[411px] bg-[url('/images/v47_128.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
      <Link
        to={hero.href ?? '/news/usman-hadi-yunus-government'}
        className="block w-full lg:w-[469px] no-underline"
        aria-label={hero.title}
      >
        <div className="relative top-[0px] left-[0px] w-full lg:w-[469px] h-auto lg:h-[408px] bg-[url('/images/v47_129.png')] bg-no-repeat bg-center bg-cover max-lg:bg-[#ffffff] max-lg:rounded-[7px] max-lg:border max-lg:border-[#e5e5e5] max-lg:shadow-[0_1px_4px_rgba(0,0,0,0.08)] overflow-hidden">
          <div
            className="relative top-[0px] left-[0px] w-full lg:w-[469px] h-[283px] max-lg:aspect-[469/283] max-lg:h-auto bg-no-repeat bg-center bg-cover overflow-hidden"
            style={{ backgroundImage: `url('${hero.image ?? DEFAULT[0].image}')` }}
          />
          <span className="lg:top-[298px] lg:left-[17px] w-full lg:w-[433px] max-lg:block max-lg:px-[12px] max-lg:pt-[10px] max-lg:pb-[12px] max-lg:text-[24px] text-[#000000] font-['Rasa'] font-bold text-[26px] lg:text-[34px] text-left lg:absolute block">
            {hero.title}
          </span>
        </div>
      </Link>
      <div className="lg:top-[0px] lg:left-[499px] max-lg:w-full w-[242px] h-auto lg:h-[411px] bg-[url('/images/v47_132.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div className="relative top-[0px] left-[0px] max-lg:w-full w-[242px] h-auto lg:h-[209px] bg-[url('/images/v47_133.png')] bg-no-repeat bg-center bg-cover max-lg:bg-[#ffffff] max-lg:rounded-[7px] max-lg:border max-lg:border-[#e5e5e5] max-lg:shadow-[0_1px_4px_rgba(0,0,0,0.08)] overflow-hidden">
          <div
            className="relative top-[0px] left-[0px] max-lg:w-full max-lg:aspect-[242/125] max-lg:h-auto w-[242px] h-[125px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] overflow-hidden"
            style={{ backgroundImage: `url('${pick(1).image ?? DEFAULT[1].image}')` }}
          />
          <span className="lg:top-[132px] lg:left-[6px] max-lg:w-full max-lg:block max-lg:px-[12px] max-lg:pt-[10px] max-lg:pb-[12px] max-lg:text-[17px] w-[229px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
            <NewsLink>{pick(1).title}</NewsLink>
          </span>
        </div>
        <span className="lg:top-[236px] lg:left-[1px] max-lg:w-full max-lg:block max-lg:mt-[12px] max-lg:px-[12px] max-lg:py-[12px] max-lg:border max-lg:border-[#e5e5e5] max-lg:rounded-[7px] max-lg:bg-[#ffffff] max-lg:text-[17px] w-[240px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(2).title}</NewsLink>
        </span>
        <span className="lg:top-[333px] lg:left-[1px] max-lg:w-full max-lg:block max-lg:mt-[12px] max-lg:px-[12px] max-lg:py-[12px] max-lg:border max-lg:border-[#e5e5e5] max-lg:rounded-[7px] max-lg:bg-[#ffffff] max-lg:text-[17px] w-[240px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(3).title}</NewsLink>
        </span>
      </div>
      <div className="lg:top-[0px] lg:left-[772px] max-lg:w-full w-[241px] h-auto lg:h-[411px] bg-[url('/images/v47_138.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <span className="lg:top-[334px] lg:left-[0px] max-lg:w-full max-lg:block max-lg:px-[12px] max-lg:py-[12px] max-lg:border max-lg:border-[#e5e5e5] max-lg:rounded-[7px] max-lg:bg-[#ffffff] max-lg:text-[17px] w-[240px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{pick(4).title}</NewsLink>
        </span>
        <div className="lg:top-[236px] lg:left-[0px] max-lg:w-full max-lg:block max-lg:mt-[12px] max-lg:px-[12px] max-lg:py-[12px] max-lg:border max-lg:border-[#e5e5e5] max-lg:rounded-[7px] max-lg:bg-[#ffffff] max-lg:text-[17px] w-[240px] h-auto lg:h-[77px] bg-[url('/images/v47_140.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <span className="relative top-[0px] left-[0px] max-lg:w-full w-[240px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left">
            <NewsLink>{pick(5).title}</NewsLink>
          </span>
        </div>
        <div className="relative top-[0px] left-[0px] max-lg:w-full max-lg:mt-[12px] w-[241px] h-auto lg:h-[209px] bg-[url('/images/v47_142.png')] bg-no-repeat bg-center bg-cover max-lg:bg-[#ffffff] max-lg:rounded-[7px] max-lg:border max-lg:border-[#e5e5e5] max-lg:shadow-[0_1px_4px_rgba(0,0,0,0.08)] overflow-hidden">
          <div
            className="relative top-[0px] left-[0px] max-lg:w-full max-lg:aspect-[241/125] max-lg:h-auto w-[241px] h-[125px] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] overflow-hidden"
            style={{ backgroundImage: `url('${pick(6).image ?? DEFAULT[6].image}')` }}
          />
          <span className="lg:top-[132px] lg:left-[6px] max-lg:w-full max-lg:block max-lg:px-[12px] max-lg:pt-[10px] max-lg:pb-[12px] max-lg:text-[17px] w-[228px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
            <NewsLink>{pick(6).title}</NewsLink>
          </span>
        </div>
      </div>
    </div>
  )
}
