import NewsLink from '../NewsLink'

// Figma ref: v47_833 — top:7367px, h:315px
// v47_874: large card 323×265 (image 321×180 + text) at left:0
// v47_844: col-2 308×265 at left:353 — 3 horizontal cards (113×75)
// v47_854: col-3 308×265 at left:692 — 3 horizontal cards (113×75)
// v47_864: col-4 308×265 at left:1030 — 3 horizontal cards (113×75)

const col2Cards = [
  { title: 'ગર્ભાવસ્થા પછી વાયરલ વોર 2 ના બિકીની સીન પર કિયારા અડવાણીએ ..', image: '/images/v47_847.png', top: '0px', textTop: '3px' },
  { title: "ધુરંધર આજે છાવાને હરાવશે, '૨૦૨૫ની સૌથી વધુ કમાણી કરનારી ફિલ્મ'", image: '/images/v47_850.png', top: '95px', textTop: '4px' },
  { title: 'અભિનેત્રીઓ પર ટિપ્પણી કરવા બદલ અભિનેતા શિવાજીની ટીકા ..', image: '/images/v47_853.png', top: '190px', textTop: '2px' },
]

const col3Cards = [
  { title: 'ગર્ભાવસ્થા પછી વાયરલ વોર 2 ના બિકીની સીન પર કિયારા અડવાણીએ ..', image: '/images/v47_857.png', top: '0px', textTop: '3px' },
  { title: "ધુરંધર આજે છાવાને હરાવશે, '૨૦૨૫ની સૌથી વધુ કમાણી કરનારી ફિલ્મ'", image: '/images/v47_860.png', top: '95px', textTop: '4px' },
  { title: 'અભિનેત્રીઓ પર ટિપ્પણી કરવા બદલ અભિનેતા શિવાજીની ટીકા ..', image: '/images/v47_863.png', top: '190px', textTop: '2px' },
]

const col4Cards = [
  { title: 'ગર્ભાવસ્થા પછી વાયરલ વોર 2 ના બિકીની સીન પર કિયારા અડવાણીએ ..', image: '/images/v47_867.png', top: '0px', textTop: '3px' },
  { title: "ધુરંધર આજે છાવાને હરાવશે, '૨૦૨૫ની સૌથી વધુ કમાણી કરનારી ફિલ્મ'", image: '/images/v47_870.png', top: '95px', textTop: '4px' },
  { title: 'અભિનેત્રીઓ પર ટિપ્પણી કરવા બદલ અભિનેતા શિવાજીની ટીકા ..', image: '/images/v47_873.png', top: '190px', textTop: '2px' },
]

function HorizontalCardList({
  cards,
  className = '',
}: {
  cards: { title: string; image: string; top: string; textTop: string }[]
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-[16px] lg:gap-0 ${className}`}>
      {cards.map((card, i) => (
        <div
          key={i}
          className="lg:absolute w-full lg:w-[307px] h-[75px] relative"
          style={{ top: card.top, left: '1px' }}
        >
          <div
            className="absolute top-0 left-0 w-[113px] h-[75px] bg-no-repeat bg-center bg-cover rounded-[7px] overflow-hidden"
            style={{ backgroundImage: `url('${card.image}')` }}
          />
          <span
            className="absolute text-[#000000] font-['Rasa'] font-normal text-[17px] lg:text-[22px] leading-[1.2] text-left"
            style={{ width: '178px', left: '128px', top: card.textTop }}
          >
            <NewsLink>{card.title}</NewsLink>
          </span>
        </div>
      ))}
    </div>
  )
}

export default function HealthSection2() {
  return (
    <div className="lg:top-[7367px] lg:left-[2px] w-full h-auto lg:h-[315px] overflow-hidden lg:absolute">

      {/* ── Section heading ── */}
      <div className="lg:top-[0px] lg:left-[23px] flex items-center gap-[8px] lg:absolute">
        <span className="text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] leading-none">
          આરોગ્ય
        </span>
        <div className="flex items-center gap-[4px] mt-[2px]">
          <span className="w-[7px] h-[9px] rounded-full bg-[#ff0f0f] inline-block" />
          <span className="w-[7px] h-[9px] rounded-full bg-[#ff7070] inline-block" />
          <span className="w-[7px] h-[9px] rounded-full bg-[#ffacac] inline-block" />
          <span className="w-[7px] h-[9px] rounded-full bg-[#f9dada] inline-block" />
        </div>
      </div>

      {/* ── Content row ── */}
      <div className="lg:top-[46px] lg:left-[0px] w-full h-auto lg:h-[269px] lg:absolute flex flex-col gap-[16px] max-lg:mt-[8px] lg:block">

        {/* Col 1 — large image card (v47_874): 323×265, image 321×180 */}
        <div className="lg:top-[0px] lg:left-[0px] lg:w-[323px] lg:h-[265px] lg:absolute flex flex-col gap-[8px]">
          <div
            className="w-full lg:w-[321px] aspect-[321/180] lg:h-[180px] lg:aspect-auto bg-[url('/images/v47_875.png')] bg-no-repeat bg-center bg-cover rounded-[7px] overflow-hidden"
          />
          <span className="lg:top-[195px] lg:left-[0px] w-full lg:w-[323px] text-[#000000] font-['Rasa'] font-normal text-[18px] lg:text-[22px] leading-[1.2] text-left lg:absolute block">
            <NewsLink>
              {'રિતિક રોશન પિતરાઈ ભાઈ એશાનના લગ્નમાં પુત્રો હ્રીહાન અને હૃધાન સાથે પોઝ આપે છે'}
            </NewsLink>
          </span>
        </div>

        {/* Col 2 — 3 horizontal cards (v47_844): left:353 */}
        <div className="lg:top-[4px] lg:left-[353px] lg:w-[308px] lg:h-[265px] lg:absolute">
          <HorizontalCardList cards={col2Cards} />
        </div>

        {/* Col 3 — 3 horizontal cards (v47_854): left:692 */}
        <div className="lg:top-[0px] lg:left-[692px] lg:w-[308px] lg:h-[265px] lg:absolute">
          <HorizontalCardList cards={col3Cards} />
        </div>

        {/* Col 4 — 3 horizontal cards (v47_864): left:1030 */}
        <div className="lg:top-[0px] lg:left-[1030px] lg:w-[308px] lg:h-[265px] lg:absolute">
          <HorizontalCardList cards={col4Cards} />
        </div>

      </div>
    </div>
  )
}
