import { Link } from 'react-router-dom'
import { slugForHeadline } from '../../data/articles'

function videoHref(title: string): string {
  return `/video/${slugForHeadline(title) ?? ''}`
}

export default function WebStories() {
  return (
    <div id="video" className="lg:top-[4968px] lg:left-[4px] w-full h-auto lg:h-[372px] bg-[url('/images/v47_244.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
      <div className="lg:top-[0px] lg:left-[17px] w-[156px] h-auto lg:h-[30px] bg-[url('/images/v47_245.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <span className="lg:top-[0px] lg:left-[0px] w-[113px] text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] text-left lg:absolute block">
          {"વેબ વાર્તાઓ"}
        </span>
        <div className="lg:top-[10px] lg:left-[121px] w-[35px] h-auto lg:h-[9px] bg-[url('/images/v47_247.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <div className="lg:top-[0px] lg:left-[0px] w-[7px] h-[9px] bg-[#ff0f0f] rounded-[50%] lg:absolute" />
          <div className="lg:top-[0px] lg:left-[9px] w-[7px] h-[9px] bg-[#ff7070] rounded-[50%] lg:absolute" />
          <div className="lg:top-[0px] lg:left-[18px] w-[7px] h-[9px] bg-[#ffacac] rounded-[50%] lg:absolute" />
          <div className="lg:top-[0px] lg:left-[27px] w-[7px] h-[9px] bg-[#f9dada] rounded-[50%] lg:absolute" />
        </div>
      </div>
      <div className="lg:top-[47px] lg:left-[0px] max-lg:flex max-lg:gap-[12px] max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory max-lg:scrollbar-width-none max-lg:[&::-webkit-scrollbar]:hidden w-full h-auto lg:h-[325px] bg-[url('/images/v47_252.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <div className="lg:top-[0px] lg:left-[0px] max-lg:w-[75vw] max-lg:shrink-0 max-lg:snap-start w-[184px] h-auto lg:h-[324px] bg-[url('/images/v47_253.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <Link
            to={videoHref('વરિયાળી ખાવાના ફાયદા')}
            aria-label="વરિયાળી ખાવાના ફાયદા"
            className="block relative lg:top-[0px] lg:left-[0px] max-lg:w-full max-lg:aspect-[182/209] max-lg:h-auto w-[182px] h-[209px] bg-[url('/images/v47_254.png')] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden lg:absolute no-underline"
          >
            <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <span className="w-[40px] h-[40px] flex items-center justify-center rounded-[50%] bg-[#00000099] text-[#ffffff]">
                <svg className="w-[16px] h-[16px] ml-[1px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
            </span>
          </Link>
          <span className="lg:top-[220px] lg:left-[0px] max-lg:w-full w-[182px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
            <Link to={videoHref('વરિયાળી ખાવાના ફાયદા')} className="no-underline" aria-label="વરિયાળી ખાવાના ફાયદા">
              {"વરિયાળી ખાવાના ફાયદા"}
            </Link>
          </span>
          <span className="lg:top-[303px] lg:left-[0px] max-lg:w-full w-[183px] text-[#949494] font-['Rasa'] font-bold text-[18px] lg:text-[20px] text-left lg:absolute block">
            {"૨૪ ડિસેમ્બર, ૨૦૨૫"}
          </span>
          <span className="lg:top-[166px] lg:left-[0px] max-lg:w-full w-[182px] text-[#ffffff] font-['Rasa'] font-bold text-[27px] text-left lg:absolute block">
            {"------------------"}
          </span>
        </div>
        <div className="lg:top-[0px] lg:left-[207px] max-lg:w-[75vw] max-lg:shrink-0 max-lg:snap-start w-[183px] h-auto lg:h-[325px] bg-[url('/images/v47_258.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <Link
            to={videoHref('મગરો બર્ફીલા વાતાવરણમાં કેવી રીતે ટકી રહે છે')}
            aria-label="મગરો બર્ફીલા વાતાવરણમાં કેવી રીતે ટકી રહે છે"
            className="block relative lg:top-[0px] lg:left-[0px] max-lg:w-full max-lg:aspect-[182/209] max-lg:h-auto w-[182px] h-[209px] bg-[url('/images/v47_259.png')] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden lg:absolute no-underline"
          >
            <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <span className="w-[40px] h-[40px] flex items-center justify-center rounded-[50%] bg-[#00000099] text-[#ffffff]">
                <svg className="w-[16px] h-[16px] ml-[1px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
            </span>
          </Link>
          <span className="lg:top-[220px] lg:left-[0px] max-lg:w-full w-[182px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
            <Link to={videoHref('મગરો બર્ફીલા વાતાવરણમાં કેવી રીતે ટકી રહે છે')} className="no-underline" aria-label="મગરો બર્ફીલા વાતાવરણમાં કેવી રીતે ટકી રહે છે">
              {"મગરો બર્ફીલા વાતાવરણમાં કેવી રીતે ટકી રહે છે"}
            </Link>
          </span>
          <span className="lg:top-[304px] lg:left-[0px] max-lg:w-full w-[160px] text-[#949494] font-['Rasa'] font-bold text-[18px] lg:text-[20px] text-left lg:absolute block">
            {"૨૪ ડિસેમ્બર, ૨૦૨૫"}
          </span>
          <span className="lg:top-[166px] lg:left-[0px] max-lg:w-full w-[182px] text-[#ffffff] font-['Rasa'] font-bold text-[27px] text-left lg:absolute block">
            {"------------------"}
          </span>
        </div>
        <div className="lg:top-[0px] lg:left-[413px] max-lg:w-[75vw] max-lg:shrink-0 max-lg:snap-start w-[184px] h-auto lg:h-[325px] bg-[url('/images/v47_263.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <Link
            to={videoHref('2026 માં ભારતમાં આવનારી ઇલેક્ટ્રિક કાર')}
            aria-label="2026 માં ભારતમાં આવનારી ઇલેક્ટ્રિક કાર"
            className="block relative lg:top-[0px] lg:left-[0px] max-lg:w-full max-lg:aspect-[182/209] max-lg:h-auto w-[183px] h-[209px] bg-[url('/images/v47_264.png')] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden lg:absolute no-underline"
          >
            <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <span className="w-[40px] h-[40px] flex items-center justify-center rounded-[50%] bg-[#00000099] text-[#ffffff]">
                <svg className="w-[16px] h-[16px] ml-[1px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
            </span>
          </Link>
          <span className="lg:top-[220px] lg:left-[1px] max-lg:w-full w-[183px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
            <Link to={videoHref('2026 માં ભારતમાં આવનારી ઇલેક્ટ્રિક કાર')} className="no-underline" aria-label="2026 માં ભારતમાં આવનારી ઇલેક્ટ્રિક કાર">
              {"2026 માં ભારતમાં આવનારી ઇલેક્ટ્રિક કાર"}
            </Link>
          </span>
          <span className="lg:top-[304px] lg:left-[0px] max-lg:w-full w-[174px] text-[#949494] font-['Rasa'] font-bold text-[18px] lg:text-[20px] text-left lg:absolute block">
            {"૨૪ ડિસેમ્બર, ૨૦૨૫"}
          </span>
          <span className="lg:top-[166px] lg:left-[0px] max-lg:w-full w-[182px] text-[#ffffff] font-['Rasa'] font-bold text-[27px] text-left lg:absolute block">
            {"------------------"}
          </span>
        </div>
        <div className="lg:top-[0px] lg:left-[620px] max-lg:w-[75vw] max-lg:shrink-0 max-lg:snap-start w-[182px] h-auto lg:h-[325px] bg-[url('/images/v47_268.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <Link
            to={videoHref('પરીક્ષાની તૈયારીમાં 10 ભૂલો તમારા સ્કોર ઘટાડી શકે છે')}
            aria-label="પરીક્ષાની તૈયારીમાં 10 ભૂલો તમારા સ્કોર ઘટાડી શકે છે"
            className="block relative lg:top-[0px] lg:left-[0px] max-lg:w-full max-lg:aspect-[182/209] max-lg:h-auto w-[182px] h-[209px] bg-[url('/images/v47_269.png')] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden lg:absolute no-underline"
          >
            <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <span className="w-[40px] h-[40px] flex items-center justify-center rounded-[50%] bg-[#00000099] text-[#ffffff]">
                <svg className="w-[16px] h-[16px] ml-[1px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
            </span>
          </Link>
          <span className="lg:top-[220px] lg:left-[0px] max-lg:w-full w-[182px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
            <Link to={videoHref('પરીક્ષાની તૈયારીમાં 10 ભૂલો તમારા સ્કોર ઘટાડી શકે છે')} className="no-underline" aria-label="પરીક્ષાની તૈયારીમાં 10 ભૂલો તમારા સ્કોર ઘટાડી શકે છે">
              {"પરીક્ષાની તૈયારીમાં 10 ભૂલો તમારા સ્કોર ઘટાડી શકે છે"}
            </Link>
          </span>
          <span className="lg:top-[304px] lg:left-[0px] max-lg:w-full w-[160px] text-[#949494] font-['Rasa'] font-bold text-[18px] lg:text-[20px] text-left lg:absolute block">
            {"૨૪ ડિસેમ્બર, ૨૦૨૫"}
          </span>
          <span className="lg:top-[166px] lg:left-[0px] max-lg:w-full w-[182px] text-[#ffffff] font-['Rasa'] font-bold text-[27px] text-left lg:absolute block">
            {"------------------"}
          </span>
        </div>
        <div className="lg:top-[0px] lg:left-[827px] max-lg:w-[75vw] max-lg:shrink-0 max-lg:snap-start w-[186px] h-auto lg:h-[324px] bg-[url('/images/v47_273.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
          <Link
            to={videoHref('કિવીના 7 સ્વાસ્થ્ય લાભો')}
            aria-label="કિવીના 7 સ્વાસ્થ્ય લાભો"
            className="block relative lg:top-[0px] lg:left-[0px] max-lg:w-full max-lg:aspect-[182/209] max-lg:h-auto w-[182px] h-[209px] bg-[url('/images/v47_274.png')] bg-no-repeat bg-center bg-cover rounded-tl-[7px] rounded-tr-[7px] rounded-bl-[7px] rounded-br-[7px] overflow-hidden lg:absolute no-underline"
          >
            <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <span className="w-[40px] h-[40px] flex items-center justify-center rounded-[50%] bg-[#00000099] text-[#ffffff]">
                <svg className="w-[16px] h-[16px] ml-[1px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8 5.14v13.72L19 12 8 5.14z" />
                </svg>
              </span>
            </span>
          </Link>
          <span className="lg:top-[219px] lg:left-[6px] max-lg:w-full w-[180px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
            <Link to={videoHref('કિવીના 7 સ્વાસ્થ્ય લાભો')} className="no-underline" aria-label="કિવીના 7 સ્વાસ્થ્ય લાભો">
              {"કિવીના 7 સ્વાસ્થ્ય લાભો"}
            </Link>
          </span>
          <span className="lg:top-[303px] lg:left-[0px] max-lg:w-full w-[168px] text-[#949494] font-['Rasa'] font-bold text-[18px] lg:text-[20px] text-left lg:absolute block">
            {"૨૪ ડિસેમ્બર, ૨૦૨૫"}
          </span>
          <span className="lg:top-[165px] lg:left-[0px] max-lg:w-full w-[182px] text-[#ffffff] font-['Rasa'] font-bold text-[27px] text-left lg:absolute block">
            {"------------------"}
          </span>
        </div>
      </div>
      <div className="lg:top-[8px] lg:left-[717px] max-lg:hidden w-[289px] h-auto lg:h-[25px] bg-[url('/images/v47_278.png')] bg-no-repeat bg-center bg-cover overflow-hidden lg:absolute">
        <span className="lg:top-[0px] lg:left-[0px] w-[72px] text-[#000000] font-['Rasa'] font-bold text-[19px] lg:text-[22px] text-left lg:absolute block">
          {"નવીનતમ"}
        </span>
        <span className="lg:top-[0px] lg:left-[89px] w-[55px] text-[#000000] font-['Rasa'] font-bold text-[19px] lg:text-[22px] text-left lg:absolute block">
          {"સુવિધા"}
        </span>
        <span className="lg:top-[0px] lg:left-[160px] w-[59px] text-[#000000] font-['Rasa'] font-bold text-[19px] lg:text-[22px] text-left lg:absolute block">
          {"શિક્ષણ"}
        </span>
        <span className="lg:top-[0px] lg:left-[236px] w-[53px] text-[#000000] font-['Rasa'] font-bold text-[19px] lg:text-[22px] text-left lg:absolute block">
          {"ખોરાક"}
        </span>
      </div>
    </div>
  )
}