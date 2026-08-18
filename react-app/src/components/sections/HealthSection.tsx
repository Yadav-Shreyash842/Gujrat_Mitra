import NewsLink from '../NewsLink'

// Figma ref: v47_197 — top:5585px, h:319px
// Left block (v47_207): 656px wide — large card (320×180) + 3 horizontal cards (112×75)
// Right block (v47_221): 305px wide — 3 horizontal cards (112×75)

const leftHorizontalCards = [
  { title: 'ગર્ભાવસ્થા પછી વાયરલ વોર 2 ના બિકીની સીન પર કિયારા અડવાણીએ ..', image: '/images/v47_211.png', top: '0px', rowHeight: '75px', textWidth: '176px', textTop: '2px', textLeft: '127px', rowLeft: '1px' },
  { title: "ધુરંધર આજે છાવાને હરાવશે, '૨૦૨૫ની સૌથી વધુ કમાણી કરનારી ફિલ્મ'", image: '/images/v47_214.png', top: '94px', rowHeight: '75px', textWidth: '176px', textTop: '0px', textLeft: '127px', rowLeft: '1px' },
  { title: 'અભિનેત્રીઓ પર ટિપ્પણી કરવા બદલ અભિનેતા શિવાજીની ટીકા ..', image: '/images/v47_217.png', top: '190px', rowHeight: '78px', textWidth: '177px', textTop: '1px', textLeft: '127px', rowLeft: '0px' },
]

const rightHorizontalCards = [
  { title: 'ગર્ભાવસ્થા પછી વાયરલ વોર 2 ના બિકીની સીન પર કિયારા અડવાણીએ ..', image: '/images/v47_224.png', top: '0px', rowHeight: '80px', textWidth: '177px', textTop: '0px', textLeft: '126px', rowLeft: '1px' },
  { title: "ધુરંધર આજે છાવાને હરાવશે, '૨૦૨૫ની સૌથી વધુ કમાણી કરનારી ફિલ્મ'", image: '/images/v47_227.png', top: '95px', rowHeight: '81px', textWidth: '177px', textTop: '1px', textLeft: '126px', rowLeft: '1px' },
  { title: 'અભિનેત્રીઓ પર ટિપ્પણી કરવા બદલ અભિનેતા શિવાજીની ટીકા ..', image: '/images/v47_230.png', top: '190px', rowHeight: '80px', textWidth: '177px', textTop: '0px', textLeft: '127px', rowLeft: '0px' },
]

export default function HealthSection() {
  return (
    <div className="lg:top-[5585px] lg:left-[2px] w-full h-auto lg:h-[319px] overflow-hidden lg:absolute">

      {/* ── Section heading ── */}
      <div className="lg:top-[1px] lg:left-[23px] flex items-center gap-[8px] lg:absolute">
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

      {/* ── Main content row ── */}
      <div className="lg:top-[47px] lg:left-[0px] w-full h-auto lg:h-[272px] lg:absolute flex flex-col lg:block gap-[16px] max-lg:mt-[8px]">

        {/* Left block: large card + 3 horizontal cards (v47_207 / v47_208) */}
        <div className="lg:top-[0px] lg:left-[0px] lg:w-[656px] lg:h-[272px] lg:absolute flex flex-col gap-[12px] max-lg:gap-[12px]">

          {/* Large image card (v47_218 / v47_219) — 320×180 image + text */}
          <div className="lg:top-[0px] lg:left-[0px] lg:w-[320px] lg:h-[265px] lg:absolute flex flex-col gap-[8px]">
            <div
              className="w-full lg:w-[320px] aspect-[320/180] lg:h-[180px] lg:aspect-auto bg-[url('/images/v47_219.png')] bg-no-repeat bg-center bg-cover rounded-[7px] overflow-hidden"
            />
            <span className="lg:top-[195px] lg:left-[0px] w-full lg:w-[320px] text-[#000000] font-['Rasa'] font-normal text-[18px] lg:text-[22px] leading-[1.2] text-left lg:absolute block">
              <NewsLink>
                {'રિતિક રોશન પિતરાઈ ભાઈ એશાનના લગ્નમાં પુત્રો હ્રીહાન અને હૃધાન સાથે પોઝ આપે છે'}
              </NewsLink>
            </span>
          </div>

          {/* 3 horizontal cards on the right of the large card (v47_208) */}
          <div className="lg:top-[4px] lg:left-[351px] lg:w-[305px] lg:h-[268px] lg:absolute flex flex-col gap-[16px] lg:gap-0">
            {leftHorizontalCards.map((card, i) => (
              <div
                key={i}
                className="lg:absolute w-full lg:w-[304px] relative"
                style={{ top: card.top, left: card.rowLeft, height: card.rowHeight }}
              >
                <div
                  className="absolute top-0 left-0 w-[112px] h-[75px] bg-no-repeat bg-center bg-cover rounded-[7px] overflow-hidden"
                  style={{ backgroundImage: `url('${card.image}')` }}
                />
                <span
                  className="absolute text-[#000000] font-['Rasa'] font-normal text-[17px] lg:text-[22px] leading-[1.2] text-left"
                  style={{ width: card.textWidth, top: card.textTop, left: card.textLeft }}
                >
                  <NewsLink>{card.title}</NewsLink>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right block: 3 horizontal cards (v47_221) — 305×270 */}
        <div className="lg:top-[0px] lg:left-[1035px] lg:w-[305px] lg:h-[270px] lg:absolute flex flex-col gap-[16px] lg:gap-0">
          {rightHorizontalCards.map((card, i) => (
            <div
              key={i}
              className="lg:absolute w-full lg:w-[304px] relative"
              style={{ top: card.top, left: card.rowLeft, height: card.rowHeight }}
            >
              <div
                className="absolute top-0 left-0 w-[112px] h-[75px] bg-no-repeat bg-center bg-cover rounded-[7px] overflow-hidden"
                style={{ backgroundImage: `url('${card.image}')` }}
              />
              <span
                className="absolute text-[#000000] font-['Rasa'] font-normal text-[17px] lg:text-[22px] leading-[1.2] text-left"
                style={{ width: card.textWidth, top: card.textTop, left: card.textLeft }}
              >
                <NewsLink>{card.title}</NewsLink>
              </span>
            </div>
          ))}
        </div>

        {/* Middle block (v47_231 + v47_240): જીવનશૈલી */}
        <div className="lg:top-[0px] lg:left-[705px] lg:w-[320px] lg:h-[272px] lg:absolute flex flex-col gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <span className="text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] leading-none">
              જીવનશૈલી
            </span>
            <div className="flex items-center gap-[4px] mt-[2px]">
              <span className="w-[7px] h-[9px] rounded-full bg-[#ff0f0f] inline-block" />
              <span className="w-[7px] h-[9px] rounded-full bg-[#ff7070] inline-block" />
              <span className="w-[7px] h-[9px] rounded-full bg-[#ffacac] inline-block" />
              <span className="w-[7px] h-[9px] rounded-full bg-[#f9dada] inline-block" />
            </div>
          </div>
          <div
            className="w-full lg:w-[320px] aspect-[320/180] lg:h-[180px] lg:aspect-auto bg-[url('/images/v47_243.png')] bg-no-repeat bg-center bg-cover rounded-[7px] overflow-hidden"
          />
          <span className="w-full lg:w-[320px] text-[#000000] font-['Rasa'] font-normal text-[18px] lg:text-[22px] leading-[1.2] text-left block">
            <NewsLink>
              {'વાયરલ વીડિયો: એમિરેટ્સ A380 ફ્લાઇટ AI ટ્વિસ્ટમાં સાન્ટાના સ્લેહ સાથે ઉડાન ભરી'}
            </NewsLink>
          </span>
        </div>

      </div>
    </div>
  )
}
