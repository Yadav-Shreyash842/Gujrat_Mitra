import HorizontalNewsRail from '../rails/HorizontalNewsRail'

const TEAMS = [
  { rank: '૧', flag: '/images/v47_1026.png', name: 'ભારત', total: '૬૭ ૫૭ ૫૪ ૧૭૮' },
  { rank: '૨', flag: '/images/v47_1016.png', name: 'ઓસ્ટ્રેલિયા', total: '૫૭ ૬૬ ૫૩ ૧૭૬' },
  { rank: '૩', flag: '/images/v47_1021.png', name: 'ઇંગ્લેન્ડ', total: '૨૬ ૩૨ ૩૪ ૯૨' },
  { rank: '૪', flag: '/images/v47_999.png', name: 'કેનેડા', total: '૨૨ ૧૬ ૨૩ ૬૧' },
  { rank: '૫', flag: '/images/v47_1003.png', name: 'ન્યુઝીલેન્ડ', total: '૨૦ ૧૨ ૧૭ ૪૯' },
]

export default function CricketScores({ className }: { className?: string }) {
  return (
    <div className={`${className ?? 'relative lg:absolute lg:top-[1373px] lg:left-[1040px]'} w-full lg:w-[300px] h-auto lg:h-[249px] bg-[url('/images/v47_992.png')] bg-no-repeat bg-center bg-cover overflow-hidden max-lg:border-t max-lg:border-[#e8e8e8] max-lg:pt-[16px]`}>
      {/* ===== MOBILE: horizontal rail ===== */}
      <div className="max-lg:block lg:hidden">
        <div className="flex items-center gap-[12px] mb-[12px]">
          <span className="text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px]">
            {"કોમનવેલ્થ ગેમ્સ"}
          </span>
          <div className="flex items-center gap-[3px]">
            <span className="w-[7px] h-[9px] rounded-full bg-[#ff0f0f]" />
            <span className="w-[7px] h-[9px] rounded-full bg-[#ff7070]" />
            <span className="w-[7px] h-[9px] rounded-full bg-[#ffacac]" />
            <span className="w-[7px] h-[9px] rounded-full bg-[#f9dada]" />
          </div>
        </div>
        <HorizontalNewsRail>
          {TEAMS.map((team) => (
            <article
              key={team.name}
              className="w-[72vw] max-w-[250px] shrink-0 snap-start bg-[#ffffff] border border-[#e5e5e5] rounded-[7px] shadow-[0_1px_4px_rgba(0,0,0,0.08)] p-[12px] flex flex-col gap-[8px]"
            >
              <div className="flex items-center gap-[8px]">
                <span className="w-[5px] h-[9px] bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('${team.flag}')` }} />
                <span className="text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px]">
                  {team.rank}. {team.name}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-[#e5e5e5] pt-[8px]">
                <span className="text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px]">
                  {"ચંદ્રક તાલિકા"}
                </span>
                <span className="text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px]">
                  {team.total}
                </span>
              </div>
            </article>
          ))}
        </HorizontalNewsRail>
      </div>

      {/* ===== DESKTOP: original table ===== */}
      <div className="max-lg:hidden">
      <div className="lg:top-[38px] lg:left-[0px] w-full lg:w-[300px] h-auto lg:h-[211px] bg-[url('/images/v47_993.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div className="relative top-[3px] left-[1px] w-full lg:w-[297px] h-[205px] bg-[#ffffff] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px] shadow-[0px_0px_20px_rgba(0,_0,_0,_0.25)] " />
        <div className="lg:top-[66px] lg:left-[225px] w-[8px] h-[10px] bg-[url('/images/v47_995.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute" />
        <div className="lg:top-[67px] lg:left-[243px] w-[12px] h-[10px] bg-[url('/images/v47_996.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute" />
        <div className="lg:top-[146px] lg:left-[21px] w-[264px] h-auto lg:h-[20px] bg-[url('/images/v47_997.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <span className="lg:top-[0px] lg:left-[44px] w-[27px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"કેનેડા"}
          </span>
          <div className="lg:top-[6px] lg:left-[23px] w-[15px] h-[7px] bg-[url('/images/v47_999.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute" />
          <span className="relative top-[0px] left-[0px] w-[14px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center">
            {"૪"}
          </span>
          <span className="lg:top-[0px] lg:left-[175px] w-[90px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"૨૨ ૧૬ ૨૩ ૬૧"}
          </span>
        </div>
        <div className="lg:top-[170px] lg:left-[21px] w-[265px] h-auto lg:h-[20px] bg-[url('/images/v47_1002.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="lg:top-[5px] lg:left-[23px] w-[16px] h-[9px] bg-[url('/images/v47_1003.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute" />
          <span className="lg:top-[0px] lg:left-[44px] w-[46px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"ન્યુઝીલેન્ડ"}
          </span>
          <span className="relative top-[0px] left-[0px] w-[14px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center">
            {"૫"}
          </span>
          <span className="lg:top-[0px] lg:left-[176px] w-[90px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"૨૦ ૧૨ ૧૭ ૪૯"}
          </span>
        </div>
        <span className="lg:top-[20px] lg:left-[119px] w-[131px] text-[#000000] font-['Hind_Vadodara'] font-bold text-[10px] text-center lg:absolute block">
          {"કોમનવેલ્થ ગેમ્સ | અમદાવાદ ૨૦૩૦"}
        </span>
        <span className="lg:top-[35px] lg:left-[162px] w-[50px] text-[#000000] font-['Hind_Vadodara'] font-normal text-[10px] text-center lg:absolute block">
          {"ચંદ્રક તાલિકા"}
        </span>
        <span className="lg:top-[64px] lg:left-[263px] w-[15px] text-[#000000] font-['Hind_Vadodara'] font-normal text-[10px] text-center lg:absolute block">
          {"કુલ"}
        </span>
        <span className="lg:top-[64px] lg:left-[20px] w-[15px] text-[#000000] font-['Hind_Vadodara'] font-normal text-[10px] text-center lg:absolute block">
          {"ક્રમ"}
        </span>
        <span className="lg:top-[64px] lg:left-[103px] w-[15px] text-[#000000] font-['Hind_Vadodara'] font-normal text-[10px] text-center lg:absolute block">
          {"દેશ"}
        </span>
        <div className="lg:top-[100px] lg:left-[21px] w-[266px] h-auto lg:h-[19px] bg-[url('/images/v47_1012.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <span className="lg:top-[0px] lg:left-[44px] w-[53px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"ઓસ્ટ્રેલિયા"}
          </span>
          <span className="relative top-[0px] left-[0px] w-[14px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center">
            {"૨"}
          </span>
          <span className="lg:top-[0px] lg:left-[177px] w-[90px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"૫૭ ૬૬ ૫૩ ૧૭૬"}
          </span>
          <div className="lg:top-[5px] lg:left-[23px] w-[16px] h-[9px] bg-[url('/images/v47_1016.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute" />
        </div>
        <div className="lg:top-[123px] lg:left-[21px] w-[262px] h-auto lg:h-[19px] bg-[url('/images/v47_1017.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <span className="lg:top-[0px] lg:left-[44px] w-[34px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"ઇંગ્લેન્ડ"}
          </span>
          <span className="relative top-[0px] left-[0px] w-[14px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center">
            {"૩"}
          </span>
          <span className="lg:top-[0px] lg:left-[173px] w-[90px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"૨૬ ૩૨ ૩૪ ૯૨"}
          </span>
          <div className="lg:top-[5px] lg:left-[23px] w-[16px] h-[9px] bg-[url('/images/v47_1021.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute" />
        </div>
        <div className="lg:top-[77px] lg:left-[21px] w-[266px] h-auto lg:h-[19px] bg-[url('/images/v47_1022.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <span className="lg:top-[0px] lg:left-[44px] w-[30px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"ભારત"}
          </span>
          <span className="relative top-[0px] left-[0px] w-[14px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center">
            {"૧"}
          </span>
          <span className="lg:top-[0px] lg:left-[177px] w-[90px] text-[#000000a6] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"૬૭ ૫૭ ૫૪ ૧૭૮"}
          </span>
          <div className="lg:top-[5px] lg:left-[23px] w-[15px] h-[9px] bg-[url('/images/v47_1026.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute" />
        </div>
        <div className="lg:top-[19px] lg:left-[43px] w-[64px] h-[28px] bg-[url('/images/v47_1027.png')] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden lg:absolute" />
        <div className="lg:top-[65px] lg:left-[203px] w-[14px] h-[12px] bg-[url('/images/v47_1028.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute" />
      </div>
      <div className="relative top-[0px] left-[0px] w-[180px] h-auto lg:h-[23px] bg-[url('/images/v47_1029.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
        <div className="relative top-[0px] left-[0px] w-[180px] h-auto lg:h-[23px] bg-[url('/images/v47_1030.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
          <span className="relative top-[0px] left-[0px] w-[146px] text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-center">
            {"કોમનવેલ્થ ગેમ્સ"}
          </span>
          <div className="lg:top-[10px] lg:left-[150px] w-[30px] h-auto lg:h-[9px] bg-[url('/images/v47_1032.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
            <div className="relative top-[0px] left-[0px] w-[6px] h-[9px] bg-[#ff0f0f] rounded-[50%]" />
            <div className="lg:top-[0px] lg:left-[9px] w-[6px] h-[9px] bg-[#ff7070] rounded-[50%] lg:absolute" />
            <div className="lg:top-[0px] lg:left-[17px] w-[6px] h-[9px] bg-[#ffacac] rounded-[50%] lg:absolute" />
            <div className="lg:top-[0px] lg:left-[25px] w-[6px] h-[9px] bg-[#f9dada] rounded-[50%] lg:absolute" />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}