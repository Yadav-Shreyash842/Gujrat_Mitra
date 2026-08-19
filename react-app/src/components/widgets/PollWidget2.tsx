import { usePreferences } from '../../context/usePreferences'
import { useToast } from '../useToast'

const OPTIONS = [
  { label: 'A. હા આવી શકે છે', pct: '10%' },
  { label: 'B. હા આવી શકે છે', pct: '80%' },
  { label: 'C. હા આવી શકે છે', pct: '05%' },
  { label: 'D. હા આવી શકે છે', pct: '05%' },
]

export default function PollWidget2() {
  const { t } = usePreferences()
  const { showToast } = useToast()
  const vote = () => showToast(t('voteRegistered'))
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={t('vote')}
      onClick={vote}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          vote()
        }
      }}
      id="poll-2"
      className="lg:top-[2194px] lg:left-[1041px] w-full lg:w-[300px] h-auto lg:h-[335px] bg-[url('/images/v47_1211.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute cursor-pointer"
    >
      {/* ===== MOBILE: stacked card ===== */}
      <div className="max-lg:flex max-lg:flex-col max-lg:gap-[12px] max-lg:border max-lg:border-[#e5e5e5] max-lg:rounded-[8px] max-lg:bg-[#ffffff] max-lg:shadow-[0_1px_4px_rgba(0,0,0,0.08)] max-lg:p-[16px] lg:hidden">
        <div className="flex items-center gap-[12px]">
          <span className="text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px]">
            {"તમને શું લાગે છે"}
          </span>
          <div className="flex items-center gap-[3px]">
            <span className="w-[7px] h-[9px] rounded-full bg-[#ff0f0f]" />
            <span className="w-[7px] h-[9px] rounded-full bg-[#ff7070]" />
            <span className="w-[7px] h-[9px] rounded-full bg-[#ffacac]" />
            <span className="w-[7px] h-[9px] rounded-full bg-[#f9dada]" />
          </div>
        </div>
        <span className="text-[#000000cc] font-['Rasa'] font-normal text-[20px] leading-[1.25]">
          {"દેશમાં આવી શકે છે કોરોનાની ત્રીજી લહેર: PMના મુખ્ય"}
        </span>
        <div className="flex flex-col gap-[10px]">
          {OPTIONS.map((opt) => (
            <div
              key={opt.label}
              className="flex items-center justify-between rounded-[10px] bg-[linear-gradient(rgba(255,173,21,1),rgba(255,215,142,1))] px-[12px] py-[8px]"
            >
              <span className="text-[#000000] text-[18px]">{opt.label}</span>
              <span className="text-[#000000] font-['Rasa'] font-normal text-[18px]">{opt.pct}</span>
            </div>
          ))}
        </div>
        <span className="text-[#0213ffc2] font-['Rasa'] font-normal text-[18px] text-right">
          {"અન્ય પોલ"}
        </span>
      </div>

      {/* ===== DESKTOP: original ===== */}
      <div className="max-lg:hidden">
      <div className="lg:top-[46px] lg:left-[0px] w-full lg:w-[300px] h-auto lg:h-[289px] bg-[url('/images/v47_1212.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div className="relative top-[0px] left-[0px] w-full lg:w-[300px] h-[289px] bg-[#ffffff] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px] shadow-[0px_0px_20px_rgba(0,_0,_0,_0.25)] overflow-hidden" />
        <div className="lg:top-[87px] lg:left-[29px] w-[242px] h-auto lg:h-[30px] bg-[url('/images/v47_1214.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="relative top-[0px] left-[0px] w-[242px] h-[30px] bg-[linear-gradient(rgba(255,173,21,1),rgba(255,215,142,1))] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] overflow-hidden" />
          <span className="lg:top-[3px] lg:left-[17px] w-[140px] text-[#000000] text-[20px] lg:text-[24px] text-left lg:absolute block">
            {"A. હા આવી શકે છે"}
          </span>
          <span className="lg:top-[10px] lg:left-[198px] w-[38px] text-[#000000] font-['Rasa'] font-normal text-[20px] lg:text-[24px] text-left lg:absolute block">
            {"10%"}
          </span>
        </div>
        <div className="lg:top-[127px] lg:left-[29px] w-[242px] h-auto lg:h-[30px] bg-[url('/images/v47_1218.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="relative top-[0px] left-[0px] w-[242px] h-[30px] bg-[linear-gradient(rgba(255,173,21,1),rgba(255,215,142,1))] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] overflow-hidden" />
          <span className="lg:top-[4px] lg:left-[19px] w-[140px] text-[#000000] text-[20px] lg:text-[24px] text-left lg:absolute block">
            {"B. હા આવી શકે છે"}
          </span>
          <span className="lg:top-[10px] lg:left-[198px] w-[38px] text-[#000000] font-['Rasa'] font-normal text-[20px] lg:text-[24px] text-left lg:absolute block">
            {"80%"}
          </span>
        </div>
        <div className="lg:top-[167px] lg:left-[29px] w-[242px] h-auto lg:h-[30px] bg-[url('/images/v47_1222.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="relative top-[0px] left-[0px] w-[242px] h-[30px] bg-[linear-gradient(rgba(255,173,21,1),rgba(255,215,142,1))] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] overflow-hidden" />
          <span className="lg:top-[10px] lg:left-[198px] w-[38px] text-[#000000] font-['Rasa'] font-normal text-[20px] lg:text-[24px] text-left lg:absolute block">
            {"05%"}
          </span>
          <span className="lg:top-[3px] lg:left-[17px] w-[140px] text-[#000000] text-[20px] lg:text-[24px] text-left lg:absolute block">
            {"C. હા આવી શકે છે"}
          </span>
        </div>
        <div className="lg:top-[207px] lg:left-[29px] w-[242px] h-auto lg:h-[30px] bg-[url('/images/v47_1226.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="relative top-[0px] left-[0px] w-[242px] h-[30px] bg-[linear-gradient(rgba(255,173,21,1),rgba(255,215,142,1))] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] overflow-hidden" />
          <span className="lg:top-[3px] lg:left-[17px] w-[140px] text-[#000000] text-[20px] lg:text-[24px] text-left lg:absolute block">
            {"D. હા આવી શકે છે"}
          </span>
          <span className="lg:top-[10px] lg:left-[198px] w-[38px] text-[#000000] font-['Rasa'] font-normal text-[20px] lg:text-[24px] text-left lg:absolute block">
            {"05%"}
          </span>
        </div>
        <span className="lg:top-[20px] lg:left-[29px] w-[242px] text-[#000000cc] font-['Rasa'] font-normal text-[20px] lg:text-[24px] text-left lg:absolute block">
          {"દેશમાં આવી શકે છે કોરોનાની ત્રીજી લહેર: PMના મુખ્ય"}
        </span>
        <span className="lg:top-[253px] lg:left-[118px] w-[65px] text-[#0213ffc2] font-['Rasa'] font-normal text-[21px] text-left lg:absolute block">
          {"અન્ય પોલ"}
        </span>
      </div>
      <div className="lg:top-[0px] lg:left-[1px] w-[219px] h-auto lg:h-[29px] bg-[url('/images/v47_1232.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <span className="lg:top-[0px] lg:left-[40px] w-[141px] text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-left lg:absolute block">
          {"તમને શું લાગે છે"}
        </span>
        <div className="lg:top-[14px] lg:left-[187px] w-[32px] h-auto lg:h-[6px] bg-[url('/images/v47_1234.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="relative top-[0px] left-[0px] w-[7px] h-[6px] bg-[#ff0f0f] rounded-[50%]" />
          <div className="lg:top-[0px] lg:left-[9px] w-[7px] h-[6px] bg-[#ff7070] rounded-[50%] lg:absolute" />
          <div className="lg:top-[0px] lg:left-[18px] w-[7px] h-[6px] bg-[#ffacac] rounded-[50%] lg:absolute" />
          <div className="lg:top-[0px] lg:left-[26px] w-[7px] h-[6px] bg-[#f9dada] rounded-[50%] lg:absolute" />
        </div>
        <div className="relative top-[0px] left-[0px] w-[29px] h-[29px] bg-[url('/images/v47_1239.png')] bg-no-repeat bg-center bg-cover overflow-hidden" />
      </div>
      </div>
    </div>
  )
}