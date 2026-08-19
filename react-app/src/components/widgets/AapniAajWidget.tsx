export default function AapniAajWidget({ className }: { className?: string }) {
  return (
    <div id="aapni-aaj" className={`${className ?? 'relative lg:absolute lg:top-[800px] lg:left-[1040px]'} w-[198px] max-lg:w-full h-auto lg:h-[29px] bg-[url('/images/v47_1151.png')] bg-no-repeat bg-center bg-cover overflow-hidden max-lg:flex max-lg:items-center max-lg:min-h-[40px] max-lg:border-t max-lg:border-[#e8e8e8] max-lg:pt-[16px]`}>
      <span className="lg:top-[0px] lg:left-[38px] max-lg:pl-[38px] w-[119px] text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-center lg:absolute block">
        {"આપની આજ"}
      </span>
      <div className="lg:top-[13px] lg:left-[162px] w-[36px] h-auto lg:h-[9px] bg-[url('/images/v47_1153.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div className="relative top-[0px] left-[0px] w-[7px] h-[9px] bg-[#ff0f0f] rounded-[50%]" />
        <div className="lg:top-[0px] lg:left-[10px] w-[7px] h-[9px] bg-[#ff7070] rounded-[50%] lg:absolute" />
        <div className="lg:top-[0px] lg:left-[20px] w-[7px] h-[9px] bg-[#ffacac] rounded-[50%] lg:absolute" />
        <div className="lg:top-[0px] lg:left-[29px] w-[7px] h-[9px] bg-[#f9dada] rounded-[50%] lg:absolute" />
      </div>
      <div className="relative top-[0px] left-[0px] w-[28px] h-[29px] bg-[url('/images/v47_1158.png')] bg-no-repeat bg-center bg-cover overflow-hidden" />
    </div>
  )
}
