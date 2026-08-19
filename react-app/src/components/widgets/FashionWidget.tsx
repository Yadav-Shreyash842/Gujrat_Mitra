import NewsLink from '../NewsLink'
import HorizontalNewsRail from '../rails/HorizontalNewsRail'

const ITEMS = [
  { title: 'હુમાયુ કબીર "રીલ્સ" થી પ્રભાવિત વ્યક્તિને છોડી દે છે, તેણી કહે છે "કારણ' },
  { title: "ધુરંધર આજે છાવાને હરાવશે, '૨૦૨૫ની સૌથી વધુ કમાણી કરનારી ફિલ્મ'" },
  { title: 'મહારાષ્ટ્રમાં સારવાર છતાં કૂતરા કરડવાના એક મહિના પછી 6 વર્ષની' },
  { title: "'હું દિલ્હીમાં 2 દિવસ રહીશ, મને ચેપ લાગશે': નીતિન ગડકરીએ ઝેરી" },
]

export default function FashionWidget() {
  return (
    <div className="lg:top-[4307px] lg:left-[1041px] w-[293px] max-lg:w-full max-lg:border-t max-lg:border-[#e8e8e8] max-lg:pt-[16px] h-auto lg:h-[411px] bg-[url('/images/v47_603.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
      {/* ===== MOBILE: horizontal rail ===== */}
      <div className="max-lg:block lg:hidden">
        <div className="flex items-center gap-[12px] mb-[12px]">
          <span className="text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px]">
            {"ફેશન"}
          </span>
          <div className="flex items-center gap-[3px]">
            <span className="w-[7px] h-[9px] rounded-full bg-[#ff0f0f]" />
            <span className="w-[7px] h-[9px] rounded-full bg-[#ff7070]" />
            <span className="w-[7px] h-[9px] rounded-full bg-[#ffacac]" />
            <span className="w-[7px] h-[9px] rounded-full bg-[#f9dada]" />
          </div>
        </div>
        <HorizontalNewsRail>
          {ITEMS.map((item, i) => (
            <article
              key={i}
              className="w-[72vw] max-w-[250px] shrink-0 snap-start bg-[#ffffff] border border-[#e5e5e5] rounded-[7px] shadow-[0_1px_4px_rgba(0,0,0,0.08)] p-[14px] flex items-center min-h-[96px]"
            >
              <span className="text-[#000000] font-['Rasa'] font-normal text-[19px] leading-[1.25]">
                <NewsLink>{item.title}</NewsLink>
              </span>
            </article>
          ))}
        </HorizontalNewsRail>
      </div>

      {/* ===== DESKTOP: original ===== */}
      <div className="max-lg:hidden">
      <div className="lg:top-[0px] lg:left-[1px] w-[98px] h-auto lg:h-[27px] bg-[url('/images/v47_604.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div className="relative top-[0px] left-[0px] w-[98px] h-auto lg:h-[27px] bg-[url('/images/v47_605.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
          <div className="relative top-[0px] left-[0px] w-[98px] h-auto lg:h-[27px] bg-[url('/images/v47_606.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
            <div className="relative top-[0px] left-[0px] w-[98px] h-auto lg:h-[27px] bg-[url('/images/v47_607.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
              <div className="relative top-[0px] left-[0px] w-[98px] h-auto lg:h-[27px] bg-[url('/images/v47_608.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
                <span className="relative top-[0px] left-[0px] w-[50px] text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-center">
                  {"ફેશન"}
                </span>
                <div className="lg:top-[10px] lg:left-[57px] w-[41px] h-auto lg:h-[9px] bg-[url('/images/v47_610.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
                  <div className="lg:top-[0px] lg:left-[0px] w-[8px] h-[9px] bg-[#ff0f0f] rounded-[50%] lg:absolute" />
                  <div className="lg:top-[0px] lg:left-[11px] w-[8px] h-[9px] bg-[#ff7070] rounded-[50%] lg:absolute" />
                  <div className="lg:top-[0px] lg:left-[22px] w-[8px] h-[9px] bg-[#ffacac] rounded-[50%] lg:absolute" />
                  <div className="lg:top-[0px] lg:left-[32px] w-[8px] h-[9px] bg-[#f9dada] rounded-[50%] lg:absolute" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:top-[44px] lg:left-[0px] w-[293px] h-auto lg:h-[80px] bg-[url('/images/v47_615.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute max-lg:w-full max-lg:grid max-lg:grid-cols-[auto_1fr] max-lg:items-center max-lg:gap-[12px]">
         <span className="max-lg:col-start-2 max-lg:row-start-1 max-lg:w-auto max-lg:min-w-0">
          {"હુમાયુ કબીર \"રીલ્સ\" થી પ્રભાવિત વ્યક્તિને છોડી દે છે, તેણી કહે છે \"કારણ"}
        </span>
         <div className="max-lg:col-start-1 max-lg:row-start-1" />
      </div>
      <div className="lg:top-[140px] lg:left-[2px] w-[291px] h-auto lg:h-[80px] bg-[url('/images/v47_618.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute max-lg:w-full max-lg:grid max-lg:grid-cols-[auto_1fr] max-lg:items-center max-lg:gap-[12px]">
         <span className="max-lg:col-start-2 max-lg:row-start-1 max-lg:w-auto max-lg:min-w-0">
          {"ધુરંધર આજે છાવાને હરાવશે, '૨૦૨૫ની સૌથી વધુ કમાણી કરનારી ફિલ્મ'"}
        </span>
         <div className="max-lg:col-start-1 max-lg:row-start-1" />
      </div>
      <div className="lg:top-[236px] lg:left-[2px] w-[290px] h-auto lg:h-[80px] bg-[url('/images/v47_621.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute max-lg:w-full max-lg:grid max-lg:grid-cols-[auto_1fr] max-lg:items-center max-lg:gap-[12px]">
         <span className="max-lg:col-start-2 max-lg:row-start-1 max-lg:w-auto max-lg:min-w-0">
          {"મહારાષ્ટ્રમાં સારવાર છતાં કૂતરા કરડવાના એક મહિના પછી 6 વર્ષની"}
        </span>
         <div className="max-lg:col-start-1 max-lg:row-start-1" />
      </div>
      <div className="lg:top-[331px] lg:left-[0px] w-[293px] h-auto lg:h-[80px] bg-[url('/images/v47_624.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute max-lg:w-full max-lg:grid max-lg:grid-cols-[auto_1fr] max-lg:items-center max-lg:gap-[12px]">
         <span className="max-lg:col-start-2 max-lg:row-start-1 max-lg:w-auto max-lg:min-w-0">
          {"'હું દિલ્હીમાં 2 દિવસ રહીશ, મને ચેપ લાગશે': નીતિન ગડકરીએ ઝેરી"}
        </span>
         <div className="max-lg:col-start-1 max-lg:row-start-1" />
      </div>
      </div>
    </div>
  )
}