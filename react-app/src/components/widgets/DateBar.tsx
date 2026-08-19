import { Link } from 'react-router-dom'

export default function DateBar() {
  return (
    <div className="lg:top-[845px] lg:left-[1040px] max-lg:relative max-lg:h-[214px] max-lg:border-t max-lg:border-[#e8e8e8] max-lg:pt-[16px] w-full lg:w-[300px] h-auto lg:h-[214px] bg-[url('/images/v47_1159.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
      <div className="relative top-[0px] left-[0px] w-full lg:w-[300px] h-[214px] bg-[#ffffff] rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] border-[1px] border-[#ffcd05] shadow-[0px_0px_20px_rgba(0,_0,_0,_0.25)] overflow-hidden" />
      <span className="lg:top-[18px] lg:left-[70px] max-lg:absolute max-lg:top-[18px] max-lg:left-0 max-lg:right-0 max-lg:w-auto w-[160px] text-[14px] text-center lg:absolute block">
        {"૧૭-ફેબ્રુઆરી-૨૦૨૩ , શુક્રવાર સંવત ૨૦૭૯ મહા સુદ બારસ"}
      </span>
      <div className="lg:top-[74px] lg:left-[19px] max-lg:absolute max-lg:top-[74px] max-lg:left-[19px] w-[45px] h-[44px] bg-[url('/images/v47_1163.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute" />
      <Link
        to="/aapni-aaj"
        className="lg:top-[74px] lg:left-[62px] max-lg:absolute max-lg:top-[78px] max-lg:left-[62px] w-[83px] text-[#000000] font-['Rasa'] font-bold text-[20px] lg:text-[24px] text-center lg:absolute block no-underline cursor-pointer"
      >
        {"આપની આજ"}
      </Link>
      <span className="lg:top-[124px] lg:left-[30px] max-lg:absolute max-lg:top-[124px] max-lg:left-[30px] w-[105px] text-[#858385] font-['Hind_Vadodara'] font-bold text-[10px] text-center lg:absolute block">
        {"રાશિ , તીથી , મૃહુર્ત , સાપ્તાહિક અને બીજું ઘણું બધું"}
      </span>
      <div className="lg:top-[74px] lg:left-[186px] max-lg:absolute max-lg:top-[74px] max-lg:left-[186px] w-[95px] h-auto lg:h-[86px] bg-[url('/images/v47_1166.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div className="relative top-[0px] left-[0px] w-[56px] h-auto lg:h-[17px] bg-[url('/images/v47_1167.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
          <span className="relative top-[0px] left-[0px] w-[23px] text-[#000000] font-['Hind_Vadodara'] font-bold text-[12px] text-center">
            {"રાશિ"}
          </span>
          <span className="lg:top-[0px] lg:left-[28px] w-[28px] text-[#8b8b8b] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"વ્રુશિક"}
          </span>
        </div>
        <div className="lg:top-[22px] lg:left-[0px] w-[95px] h-auto lg:h-[17px] bg-[url('/images/v47_1170.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <span className="relative top-[0px] left-[0px] w-[23px] text-[#000000] font-['Hind_Vadodara'] font-bold text-[12px] text-center">
            {"તીથી"}
          </span>
          <span className="lg:top-[0px] lg:left-[28px] w-[67px] text-[#8b8b8b] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"મહા સુદ બારસ"}
          </span>
        </div>
        <div className="lg:top-[45px] lg:left-[0px] w-[67px] h-auto lg:h-[17px] bg-[url('/images/v47_1173.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <span className="relative top-[0px] left-[0px] w-[36px] text-[#000000] font-['Hind_Vadodara'] font-bold text-[12px] text-center">
            {"સુર્યોદય"}
          </span>
          <span className="lg:top-[0px] lg:left-[44px] w-[24px] text-[#8b8b8b] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"૬.૨૦"}
          </span>
        </div>
        <div className="lg:top-[68px] lg:left-[0px] w-[67px] h-auto lg:h-[17px] bg-[url('/images/v47_1176.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <span className="relative top-[0px] left-[0px] w-[35px] text-[#000000] font-['Hind_Vadodara'] font-bold text-[12px] text-center">
            {"સુર્યાસ્ત"}
          </span>
          <span className="lg:top-[0px] lg:left-[45px] w-[23px] text-[#8b8b8b] font-['Hind_Vadodara'] font-normal text-[12px] text-center lg:absolute block">
            {"૧૯.૨"}
          </span>
        </div>
      </div>
      <span className="lg:top-[178px] lg:left-[0px] max-lg:absolute max-lg:top-[178px] max-lg:left-0 max-lg:right-0 w-full lg:w-[300px] text-[#1302ff] font-['Rasa'] font-bold text-[18px] text-center lg:absolute block">
        {"આજનું રાશિફળ"}
      </span>
    </div>
  )
}