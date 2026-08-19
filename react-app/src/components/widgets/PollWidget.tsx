import { usePreferences } from '../../context/usePreferences'
import { useToast } from '../useToast'

export default function PollWidget({ className }: { className?: string }) {
  const { t } = usePreferences()
  const { showToast } = useToast()
  const vote = () => showToast(t('voteRegistered'))
  return (
    <div id="poll" className={`${className ?? 'relative lg:absolute lg:top-[1855px] lg:left-[1056px]'} w-full lg:w-[300px] h-auto lg:h-[335px] bg-[url('/images/v47_1180.png')] bg-no-repeat bg-center bg-cover overflow-hidden max-lg:bg-none max-lg:bg-[#ffffff] max-lg:border max-lg:border-t-0 max-lg:rounded-t-none max-lg:rounded-b-[8px] max-lg:p-[16px]`}>
      <div className="lg:top-[46px] lg:left-[0px] w-full lg:w-[300px] h-auto lg:h-[289px] bg-[url('/images/v47_1181.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute max-lg:bg-none max-lg:flex max-lg:flex-col max-lg:gap-[10px]">
        <div className="relative top-[-3px] left-[0px] w-full lg:w-[300px] h-[285px] max-lg:hidden bg-[#fdfcfc] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px] shadow-[0px_0px_10px_rgba(0,_0,_0,_0.25)] " />
        <div className="lg:top-[87px] lg:left-[29px] w-[242px] h-auto lg:h-[30px] bg-[url('/images/v47_1183.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute max-lg:w-full max-lg:bg-none max-lg:flex max-lg:items-center max-lg:gap-[10px]">
          <div className="relative top-[0px] left-[0px] w-[242px] h-[30px] bg-[#0000001a] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] overflow-hidden max-lg:flex-1 max-lg:h-[12px] max-lg:bg-[#efefef] max-lg:rounded-[4px]">
            <div className="max-lg:absolute max-lg:inset-y-0 max-lg:left-0 max-lg:bg-[#ffca68] max-lg:rounded-[4px]" style={{ width: '10%' }} />
          </div>
          <span className="lg:top-[3px] lg:left-[17px] w-[140px] text-[#000000] text-[20px] lg:text-[24px] text-left lg:absolute block max-lg:order-first max-lg:shrink-0 max-lg:w-auto max-lg:font-['Rasa'] max-lg:text-[16px] max-lg:leading-[1.4]">
            {"A. હા આવી શકે છે"}
          </span>
          <span className="lg:top-[10px] lg:left-[198px] w-[38px] text-[#000000] font-['Rasa'] font-normal text-[20px] lg:text-[24px] text-left lg:absolute block max-lg:order-last max-lg:shrink-0 max-lg:text-[13px]">
            {"10%"}
          </span>
        </div>
        <div className="lg:top-[127px] lg:left-[29px] w-[242px] h-auto lg:h-[30px] bg-[url('/images/v47_1187.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute max-lg:w-full max-lg:bg-none max-lg:flex max-lg:items-center max-lg:gap-[10px]">
          <div className="relative top-[0px] left-[0px] w-[242px] h-[30px] bg-[#ffca68] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] overflow-hidden max-lg:flex-1 max-lg:h-[12px] max-lg:bg-[#efefef] max-lg:rounded-[4px]">
            <div className="max-lg:absolute max-lg:inset-y-0 max-lg:left-0 max-lg:bg-[#ffca68] max-lg:rounded-[4px]" style={{ width: '80%' }} />
          </div>
          <span className="lg:top-[4px] lg:left-[19px] w-[140px] text-[#000000] text-[20px] lg:text-[24px] text-left lg:absolute block max-lg:order-first max-lg:shrink-0 max-lg:w-auto max-lg:font-['Rasa'] max-lg:text-[16px] max-lg:leading-[1.4]">
            {"B. હા આવી શકે છે"}
          </span>
          <span className="lg:top-[10px] lg:left-[198px] w-[38px] text-[#000000] font-['Rasa'] font-normal text-[20px] lg:text-[24px] text-left lg:absolute block max-lg:order-last max-lg:shrink-0 max-lg:text-[13px]">
            {"80%"}
          </span>
        </div>
        <div className="lg:top-[167px] lg:left-[29px] w-[242px] h-auto lg:h-[30px] bg-[url('/images/v47_1191.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute max-lg:w-full max-lg:bg-none max-lg:flex max-lg:items-center max-lg:gap-[10px]">
          <div className="relative top-[0px] left-[0px] w-[242px] h-[30px] bg-[#0000001a] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] overflow-hidden max-lg:flex-1 max-lg:h-[12px] max-lg:bg-[#efefef] max-lg:rounded-[4px]">
            <div className="max-lg:absolute max-lg:inset-y-0 max-lg:left-0 max-lg:bg-[#ffca68] max-lg:rounded-[4px]" style={{ width: '5%' }} />
          </div>
          <span className="lg:top-[10px] lg:left-[198px] w-[38px] text-[#000000] font-['Rasa'] font-normal text-[20px] lg:text-[24px] text-left lg:absolute block max-lg:order-last max-lg:shrink-0 max-lg:text-[13px]">
            {"05%"}
          </span>
          <span className="lg:top-[3px] lg:left-[17px] w-[140px] text-[#000000] text-[20px] lg:text-[24px] text-left lg:absolute block max-lg:order-first max-lg:shrink-0 max-lg:w-auto max-lg:font-['Rasa'] max-lg:text-[16px] max-lg:leading-[1.4]">
            {"C. હા આવી શકે છે"}
          </span>
        </div>
        <div className="lg:top-[207px] lg:left-[29px] w-[242px] h-auto lg:h-[30px] bg-[url('/images/v47_1195.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute max-lg:w-full max-lg:bg-none max-lg:flex max-lg:items-center max-lg:gap-[10px]">
          <div className="relative top-[0px] left-[0px] w-[242px] h-[30px] bg-[#0000001a] rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px] overflow-hidden max-lg:flex-1 max-lg:h-[12px] max-lg:bg-[#efefef] max-lg:rounded-[4px]">
            <div className="max-lg:absolute max-lg:inset-y-0 max-lg:left-0 max-lg:bg-[#ffca68] max-lg:rounded-[4px]" style={{ width: '5%' }} />
          </div>
          <span className="lg:top-[3px] lg:left-[17px] w-[140px] text-[#000000] text-[20px] lg:text-[24px] text-left lg:absolute block max-lg:order-first max-lg:shrink-0 max-lg:w-auto max-lg:font-['Rasa'] max-lg:text-[16px] max-lg:leading-[1.4]">
            {"D. હા આવી શકે છે"}
          </span>
          <span className="lg:top-[10px] lg:left-[198px] w-[38px] text-[#000000] font-['Rasa'] font-normal text-[20px] lg:text-[24px] text-left lg:absolute block max-lg:order-last max-lg:shrink-0 max-lg:text-[13px]">
            {"05%"}
          </span>
        </div>
        <span className="lg:top-[20px] lg:left-[29px] w-[242px] text-[#000000cc] font-['Rasa'] font-normal text-[20px] lg:text-[24px] text-left lg:absolute block max-lg:order-first max-lg:w-full max-lg:text-[17px] max-lg:leading-[1.45]">
          {"દેશમાં આવી શકે છે કોરોનાની ત્રીજી લહેર: PMના મુખ્ય"}
        </span>
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
          className="lg:top-[250px] lg:left-[121px] w-[52px] h-auto lg:h-[25px] bg-[url('/images/v47_1200.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute cursor-pointer max-lg:order-last max-lg:self-center max-lg:w-auto max-lg:min-w-[130px] max-lg:h-[40px] max-lg:bg-none max-lg:bg-[#ffad15] max-lg:rounded-[6px] max-lg:flex max-lg:items-center max-lg:justify-center"
        >
          <div className="relative top-[0px] left-[0px] w-[52px] h-[25px] bg-[#ffad1580] rounded-tl-[5px] rounded-tr-[5px] rounded-bl-[5px] rounded-br-[5px] shadow-[0px_4px_10px_rgba(0,_0,_0,_0.4000000059604645)] overflow-hidden max-lg:hidden" />
          <span className="lg:top-[2px] lg:left-[4px] w-[44px] text-[#000000] font-['Hind_Vadodara'] font-bold text-[12px] text-center lg:absolute block max-lg:relative max-lg:top-auto max-lg:left-auto max-lg:w-auto max-lg:text-[14px]">
            {"વોટ કરો"}
          </span>
        </div>
      </div>
      <div className="lg:top-[0px] lg:left-[1px] w-[219px] h-auto lg:h-[29px] bg-[url('/images/v47_1203.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute max-lg:hidden">
        <span className="lg:top-[0px] lg:left-[40px] w-[141px] text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-left lg:absolute block">
          {"તમને શું લાગે છે"}
        </span>
        <div className="lg:top-[14px] lg:left-[187px] w-[32px] h-auto lg:h-[6px] bg-[url('/images/v47_1205.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="relative top-[0px] left-[0px] w-[7px] h-[6px] bg-[#ff0f0f] rounded-[50%]" />
          <div className="lg:top-[0px] lg:left-[9px] w-[7px] h-[6px] bg-[#ff7070] rounded-[50%] lg:absolute" />
          <div className="lg:top-[0px] lg:left-[18px] w-[7px] h-[6px] bg-[#ffacac] rounded-[50%] lg:absolute" />
          <div className="lg:top-[0px] lg:left-[26px] w-[7px] h-[6px] bg-[#f9dada] rounded-[50%] lg:absolute" />
        </div>
        <div className="relative top-[0px] left-[0px] w-[29px] h-[29px] bg-[url('/images/v47_1210.png')] bg-no-repeat bg-center bg-cover overflow-hidden" />
      </div>
    </div>
  )
}
