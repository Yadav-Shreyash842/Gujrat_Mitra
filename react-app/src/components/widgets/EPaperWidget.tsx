export default function EPaperWidget({ className }: { className?: string }) {
  return (
    <div id="epaper" className={`${className ?? 'relative lg:absolute lg:top-[250px] lg:left-[1040px]'} w-full lg:w-[301px] h-auto lg:h-[191px] bg-[url('/images/v47_929.png')] bg-no-repeat bg-center bg-cover overflow-hidden`}>
      <div className="lg:top-[44px] lg:left-[0px] max-lg:relative w-full lg:w-[301px] h-auto lg:h-[146px] bg-[url('/images/v47_930.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div className="relative top-[0px] left-[0px] w-full lg:w-[301px] h-[146px] bg-[#ffffff] rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[8px] rounded-br-[8px] shadow-[0px_0px_20px_rgba(0,_0,_0,_0.25)] overflow-hidden" />
        <div className="lg:top-[17px] lg:left-[16px] max-lg:absolute max-lg:top-[17px] max-lg:left-[16px] max-lg:right-[16px] max-lg:w-auto max-lg:h-auto max-lg:aspect-[269/115] w-[269px] h-[115px] bg-[url('/images/v47_932.png')] bg-no-repeat bg-center bg-cover rounded-tl-[2px] rounded-tr-[2px] rounded-bl-[2px] rounded-br-[2px] overflow-hidden lg:absolute" />
      </div>
      <div className="relative top-[0px] left-[0px] w-[148px] h-auto lg:h-[29px] bg-[url('/images/v47_933.png')] bg-no-repeat bg-center bg-cover overflow-hidden">
        <span className="lg:top-[0px] lg:left-[40px] w-[68px] text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-center lg:absolute block">
          {"ઇ-પેપર"}
        </span>
        <div className="lg:top-[12px] lg:left-[114px] w-[34px] h-auto lg:h-[7px] bg-[url('/images/v47_935.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="relative top-[0px] left-[0px] w-[7px] h-[7px] bg-[#ff0f0f] rounded-[50%]" />
          <div className="lg:top-[0px] lg:left-[10px] w-[7px] h-[7px] bg-[#ff7070] rounded-[50%] lg:absolute" />
          <div className="lg:top-[0px] lg:left-[19px] w-[7px] h-[7px] bg-[#ffacac] rounded-[50%] lg:absolute" />
          <div className="lg:top-[0px] lg:left-[28px] w-[7px] h-[7px] bg-[#f9dada] rounded-[50%] lg:absolute" />
        </div>
        <div className="relative top-[0px] left-[0px] w-[30px] h-[29px] bg-[url('/images/v47_940.png')] bg-no-repeat bg-center bg-cover overflow-hidden" />
      </div>
    </div>
  )
}
