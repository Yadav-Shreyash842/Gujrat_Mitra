import NewsLink from '../NewsLink'
import HorizontalNewsRail from '../rails/HorizontalNewsRail'

const ITEMS = [
  'રિતિક રોશન પિતરાઈ ભાઈ એશાનના લગ્નમાં પુત્રો હ્રીહાન અને હૃધાન સાથે પોઝ આપે છે',
  'કેવી રીતે નિયમિત લાકડાના ટુકડાએ એક વિશાળ આતંકવાદી ભંડોળ નેટવર્કનો પર્દાફાશ કર્યો',
  'વિજય હજારે ટ્રોફી, લાઈવ સ્કોર અપડેટ્સ: વિરાટ કોહલીના ઘરેલુ વાપસી પર કેપ્ટન રિષભ પંતે વિકેટ ..',
  'વિજય હજારે ટ્રોફી, લાઈવ સ્કોર અપડેટ્સ: વિરાટ કોહલીના ઘરેલુ વાપસી પર કેપ્ટન રિષભ પંતે વિકેટ ..',
]

export default function CelebrityCard() {
  return (
    <div className="lg:top-[4748px] lg:left-[1041px] max-lg:flex max-lg:flex-col max-lg:gap-[12px] max-lg:w-full max-lg:border-t max-lg:border-[#e8e8e8] max-lg:pt-[16px] w-[292px] h-auto lg:h-[623px] bg-[url('/images/v47_559.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
      <div className="lg:top-[47px] lg:left-[1px] max-lg:w-full max-lg:aspect-[291/163] max-lg:h-auto w-[291px] h-[163px] bg-[url('/images/v47_560.png')] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden lg:absolute" />
      <span className="lg:top-[230px] lg:left-[0px] max-lg:hidden w-[290px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
        <NewsLink>{ITEMS[0]}</NewsLink>
      </span>
      <span className="lg:top-[333px] lg:left-[0px] max-lg:hidden w-[290px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
        <NewsLink>{ITEMS[1]}</NewsLink>
      </span>
      <span className="lg:top-[436px] lg:left-[0px] max-lg:hidden w-[290px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
        <NewsLink>{ITEMS[2]}</NewsLink>
      </span>
      <span className="lg:top-[540px] lg:left-[0px] max-lg:hidden w-[290px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
        <NewsLink>{ITEMS[3]}</NewsLink>
      </span>
      <div className="lg:top-[0px] lg:left-[0px] max-lg:order-first w-[184px] h-auto lg:h-[27px] bg-[url('/images/v47_565.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div className="lg:top-[0px] lg:left-[0px] w-[184px] h-auto lg:h-[27px] bg-[url('/images/v47_566.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="lg:top-[0px] lg:left-[0px] w-[184px] h-auto lg:h-[27px] bg-[url('/images/v47_567.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
            <div className="lg:top-[0px] lg:left-[0px] w-[184px] h-auto lg:h-[27px] bg-[url('/images/v47_568.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
              <div className="lg:top-[0px] lg:left-[0px] w-[184px] h-auto lg:h-[27px] bg-[url('/images/v47_569.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
                <span className="lg:top-[0px] lg:left-[0px] w-[134px] text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-center lg:absolute block">
                  {"ગોચર અગોચર"}
                </span>
                <div className="lg:top-[10px] lg:left-[143px] w-[40px] h-auto lg:h-[9px] bg-[url('/images/v47_571.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
                  <div className="lg:top-[0px] lg:left-[0px] w-[8px] h-[9px] bg-[#ff0f0f] rounded-[50%] lg:absolute" />
                  <div className="lg:top-[0px] lg:left-[10px] w-[8px] h-[9px] bg-[#ff7070] rounded-[50%] lg:absolute" />
                  <div className="lg:top-[0px] lg:left-[21px] w-[8px] h-[9px] bg-[#ffacac] rounded-[50%] lg:absolute" />
                  <div className="lg:top-[0px] lg:left-[32px] w-[8px] h-[9px] bg-[#f9dada] rounded-[50%] lg:absolute" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== MOBILE: horizontal rail ===== */}
      <div className="max-lg:block lg:hidden">
        <div className="flex items-center gap-[12px] mb-[12px]">
          <span className="text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px]">
            {"ગોચર અગોચર"}
          </span>
          <div className="flex items-center gap-[3px]">
            <span className="w-[7px] h-[9px] rounded-full bg-[#ff0f0f]" />
            <span className="w-[7px] h-[9px] rounded-full bg-[#ff7070]" />
            <span className="w-[7px] h-[9px] rounded-full bg-[#ffacac]" />
            <span className="w-[7px] h-[9px] rounded-full bg-[#f9dada]" />
          </div>
        </div>
        <HorizontalNewsRail>
          {ITEMS.map((title, i) => (
            <article
              key={i}
              className="w-[72vw] max-w-[250px] shrink-0 snap-start bg-[#ffffff] border border-[#e5e5e5] rounded-[7px] shadow-[0_1px_4px_rgba(0,0,0,0.08)] p-[14px] flex items-center min-h-[96px]"
            >
              <span className="text-[#000000] font-['Rasa'] font-normal text-[19px] leading-[1.25]">
                <NewsLink>{title}</NewsLink>
              </span>
            </article>
          ))}
        </HorizontalNewsRail>
      </div>
    </div>
  )
}