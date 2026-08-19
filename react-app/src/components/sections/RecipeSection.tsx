import NewsLink from '../NewsLink'
import HorizontalNewsRail from '../rails/HorizontalNewsRail'

const HERO = {
  title: "'તમે ચૂંટણી ખોરવવા માટે ઉસ્માન હાદીની હત્યા કરાવી હતી': યુનુસ શાસન પર મોટો",
}

const ROWS = [
  {
    title: 'ગર્ભાવસ્થા પછી વાયરલ વોર 2 ના બિકીની સીન પર કિયારા અડવાણીએ ..',
    meta: '3:36 min | 3 days ago',
    image: '/images/v47_646.png',
  },
  {
    title: "ધુરંધર આજે છાવાને હરાવશે, '૨૦૨૫ની સૌથી વધુ કમાણી કરનારી ફિલ્મ'",
    meta: '3:36 min | 5 days ago',
    image: '/images/v47_651.png',
  },
  {
    title: 'અભિનેત્રીઓ પર ટિપ્પણી કરવા બદલ અભિનેતા શિવાજીની ટીકા ..',
    meta: '3:36 min | 5 days ago',
    image: '/images/v47_656.png',
  },
]

export default function RecipeSection() {
  return (
    <div className="lg:top-[4509px] lg:left-[2px] max-lg:flex max-lg:flex-col max-lg:gap-[16px] max-lg:border-t max-lg:border-[#e8e8e8] max-lg:pt-[16px] w-full h-auto lg:h-[409px] bg-[url('/images/v47_627.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
      <div className="lg:top-[0px] lg:left-[16px] max-lg:hidden w-[107px] h-auto lg:h-[26px] bg-[url('/images/v47_628.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div className="lg:top-[0px] lg:left-[0px] w-[107px] h-auto lg:h-[26px] bg-[url('/images/v47_629.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="lg:top-[0px] lg:left-[0px] w-[107px] h-auto lg:h-[26px] bg-[url('/images/v47_630.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
            <span className="lg:top-[0px] lg:left-[0px] w-[69px] text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-center lg:absolute block">
              {"રેસિપી"}
            </span>
            <div className="lg:top-[10px] lg:left-[72px] w-[35px] h-auto lg:h-[9px] bg-[url('/images/v47_632.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
              <div className="lg:top-[0px] lg:left-[0px] w-[7px] h-[9px] bg-[#ff0f0f] rounded-[50%] lg:absolute" />
              <div className="lg:top-[0px] lg:left-[9px] w-[7px] h-[9px] bg-[#ff7070] rounded-[50%] lg:absolute" />
              <div className="lg:top-[0px] lg:left-[18px] w-[7px] h-[9px] bg-[#ffacac] rounded-[50%] lg:absolute" />
              <div className="lg:top-[0px] lg:left-[27px] w-[7px] h-[9px] bg-[#f9dada] rounded-[50%] lg:absolute" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:top-[46px] lg:left-[0px] max-lg:hidden w-full h-auto lg:h-[363px] bg-[url('/images/v47_637.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div className="lg:top-[3px] lg:left-[0px] w-full lg:w-[546px] h-auto lg:h-[360px] bg-[url('/images/v47_638.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="lg:top-[0px] lg:left-[0px] w-full lg:w-[546px] max-lg:hidden h-[360px] bg-[linear-gradient(rgba(255,255,255,1),rgba(0,0,0,1))] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden lg:absolute" />
          <span className="lg:top-[264px] lg:left-[13px] w-full lg:w-[522px] font-['Rasa'] font-bold text-[36px] text-left lg:absolute block max-lg:text-[24px]">
            <NewsLink>{HERO.title}</NewsLink>
          </span>
          <div className="text-[#fff]" />
        </div>
        <div className="lg:top-[0px] lg:left-[576px] w-full lg:w-[434px] h-auto lg:h-[362px] bg-[url('/images/v47_642.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="lg:top-[0px] lg:left-[0px] max-lg:grid max-lg:grid-cols-[120px_1fr] max-lg:items-center max-lg:gap-[12px] w-full lg:w-[433px] h-auto lg:h-[107px] bg-[url('/images/v47_643.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
            <span className="lg:top-[7px] lg:left-[181px] max-lg:col-start-2 max-lg:row-start-1 max-lg:w-auto max-lg:min-w-0 w-[252px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
              <NewsLink>{ROWS[0].title}</NewsLink>
            </span>
            <span className="lg:top-[85px] lg:left-[184px] max-lg:col-start-2 max-lg:row-start-2 max-lg:w-auto max-lg:min-w-0 w-[126px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[14px] text-left lg:absolute block">
              {ROWS[0].meta}
            </span>
            <div className="lg:top-[0px] lg:left-[0px] max-lg:col-start-1 max-lg:row-start-1 max-lg:row-span-2 max-lg:w-full w-[159px] h-[107px] bg-[url('/images/v47_646.png')] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden lg:absolute" />
            <div className="text-[#fff]" />
          </div>
          <div className="lg:top-[127px] lg:left-[0px] max-lg:grid max-lg:grid-cols-[120px_1fr] max-lg:items-center max-lg:gap-[12px] w-full lg:w-[433px] h-auto lg:h-[107px] bg-[url('/images/v47_648.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
            <span className="lg:top-[5px] lg:left-[181px] max-lg:col-start-2 max-lg:row-start-1 max-lg:w-auto max-lg:min-w-0 w-[251px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
              <NewsLink>{ROWS[1].title}</NewsLink>
            </span>
            <span className="lg:top-[88px] lg:left-[184px] max-lg:col-start-2 max-lg:row-start-2 max-lg:w-auto max-lg:min-w-0 w-[126px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[14px] text-left lg:absolute block">
              {ROWS[1].meta}
            </span>
            <div className="lg:top-[0px] lg:left-[0px] max-lg:col-start-1 max-lg:row-start-1 max-lg:row-span-2 max-lg:w-full w-[159px] h-[107px] bg-[url('/images/v47_651.png')] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden lg:absolute" />
            <div className="text-[#fff]" />
          </div>
          <div className="lg:top-[255px] lg:left-[0px] max-lg:grid max-lg:grid-cols-[120px_1fr] max-lg:items-center max-lg:gap-[12px] w-full lg:w-[433px] h-auto lg:h-[107px] bg-[url('/images/v47_654.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
            <span className="lg:top-[3px] lg:left-[181px] max-lg:col-start-2 max-lg:row-start-1 max-lg:w-auto max-lg:min-w-0 w-[252px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
              <NewsLink>{ROWS[2].title}</NewsLink>
            </span>
            <div className="lg:top-[0px] lg:left-[0px] max-lg:col-start-1 max-lg:row-start-1 max-lg:row-span-2 max-lg:w-full w-[159px] h-[107px] bg-[url('/images/v47_656.png')] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden lg:absolute" />
            <span className="lg:top-[88px] lg:left-[187px] max-lg:col-start-2 max-lg:row-start-2 max-lg:w-auto max-lg:min-w-0 w-[126px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[14px] text-left lg:absolute block">
              {ROWS[2].meta}
            </span>
            <div className="text-[#fff]" />
          </div>
        </div>
      </div>

      {/* ===== MOBILE: horizontal rail (hero + rows as cards) ===== */}
      <div className="max-lg:flex max-lg:flex-col max-lg:gap-[12px] lg:hidden">
        <HorizontalNewsRail>
          <article className="w-[72vw] max-w-[250px] shrink-0 snap-start bg-[#ffffff] border border-[#e5e5e5] rounded-[7px] shadow-[0_1px_4px_rgba(0,0,0,0.08)] overflow-hidden">
            <div
              className="w-full aspect-[318/180] bg-[linear-gradient(rgba(255,255,255,1),rgba(0,0,0,1))] bg-center bg-cover"
            />
            <div className="p-[14px]">
              <span className="text-[#000000] font-['Rasa'] font-bold text-[22px] leading-[1.25] block">
                <NewsLink>{HERO.title}</NewsLink>
              </span>
            </div>
          </article>
          {ROWS.map((row, i) => (
            <article
              key={i}
              className="w-[72vw] max-w-[250px] shrink-0 snap-start bg-[#ffffff] border border-[#e5e5e5] rounded-[7px] shadow-[0_1px_4px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              <div
                className="w-full aspect-[318/180] bg-no-repeat bg-center bg-cover"
                style={{ backgroundImage: `url('${row.image}')` }}
              />
              <div className="p-[14px] flex flex-col gap-[6px]">
                <span className="text-[#000000] font-['Rasa'] font-normal text-[19px] leading-[1.25] block">
                  <NewsLink>{row.title}</NewsLink>
                </span>
                <span className="text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[14px]">
                  {row.meta}
                </span>
              </div>
            </article>
          ))}
        </HorizontalNewsRail>
      </div>
    </div>
  )
}