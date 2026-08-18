import NewsLink from '../NewsLink'

const scienceRows = [
  { text: 'અભ્યાસ પૂર્વ એશિયાઈ પશુઓ અને પ્રાચીન સિલ્ક રોડ જોડાણોનો 10,000 વર્ષ', image: '/images/v143_2901.png' },
  { text: 'ધ્રુવોથી દૂર આકાશને પ્રકાશિત કરી રહ્યા છે લીલા અને જાંબલી ઓરોરા, અહીં', image: '/images/v143_2905.png' },
  { text: 'નાસાના પાર્કર સોલાર પ્રોબે સૂર્યના શક્તિશાળી વિસ્ફોટો અને રહસ્યમય ઉર્જા વળત..', image: '/images/v143_2909.png' },
  { text: 'ઉર્સિડ ઉલ્કા વર્ષા: તારીખ, શ્રેષ્ઠ સમય અને 2025 ની છેલ્લી અવકાશી પ્રવૃત્તિ કેવી', image: '/images/v143_2913.png' },
  { text: 'ઉર્સિડ ઉલ્કા વર્ષા: તારીખ, શ્રેષ્ઠ સમય અને 2025 ની છેલ્લી અવકાશી પ્રવૃત્તિ કેવી', image: '/images/v143_2917.png' },
]

const techRows = [
  { text: 'ભારતમાં લોન્ચ પહેલા Realme Pad 3 ના મુખ્ય સ્પષ્ટીકરણો જાહેર;', image: '/images/v143_2932.png' },
  { text: 'Oppo Find N6, Oppo Find X9 Ultra ચીનમાં લોન્ચ થવાની સમયરેખા..', image: '/images/v143_2936.png' },
  { text: 'ઓપ્પો પેડ એર 5 અનબોક્સિંગ વિડિઓ વધારાની ડિઝાઇન વિગતો,', image: '/images/v143_2940.png' },
  { text: 'OnePlus Turbo 1.5K BOE ડિસ્પ્લે અને 165Hz રિફ્રેશ રેટ સાથે લોન્ચ થવાની', image: '/images/v143_2944.png' },
  { text: 'OnePlus Turbo 1.5K BOE ડિસ્પ્લે અને 165Hz રિફ્રેશ રેટ સાથે લોન્ચ થવાની', image: '/images/v143_2948.png' },
]

function DotGroup() {
  return (
    <div className="flex items-center gap-[3px] mt-[2px]">
      <span className="w-[7px] h-[9px] rounded-full bg-[#ff0f0f] inline-block" />
      <span className="w-[7px] h-[9px] rounded-full bg-[#ff7070] inline-block" />
      <span className="w-[7px] h-[9px] rounded-full bg-[#ffacac] inline-block" />
      <span className="w-[7px] h-[9px] rounded-full bg-[#f9dada] inline-block" />
    </div>
  )
}

function ListRow({ image, text, imageWidth }: { image: string; text: string; imageWidth: string }) {
  return (
    <article className="flex items-start gap-[12px]">
      <div
        className={`shrink-0 ${imageWidth} h-[80px] rounded-[7px] bg-no-repeat bg-center bg-cover`}
        style={{ backgroundImage: `url('${image}')` }}
      />
      <span className="text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] leading-[1.2] text-left">
        <NewsLink>{text}</NewsLink>
      </span>
    </article>
  )
}

export default function EntertainmentFeature() {
  return (
    <div className="lg:top-[7732px] lg:left-[2px] max-lg:flex max-lg:flex-col max-lg:gap-[24px] w-full h-auto lg:h-[532px] lg:absolute">
      <div className="lg:top-[0px] lg:left-[0px] max-lg:flex max-lg:flex-col max-lg:gap-[12px] w-full lg:w-[307px] h-auto lg:h-[524px] overflow-hidden lg:absolute">
        <div className="lg:top-[0px] lg:left-[14px] max-lg:order-first flex items-center gap-[8px] lg:absolute">
          <span className="text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] leading-none">મનોરંજન</span>
          <DotGroup />
        </div>
        <div className="lg:top-[45px] lg:left-[2px] w-full lg:w-[303px] max-lg:aspect-[303/170] max-lg:h-auto h-[170px] bg-[url('/images/v143_2859.png')] bg-no-repeat bg-center bg-cover rounded-[7px] overflow-hidden lg:absolute" />
        <span className="lg:top-[236px] lg:left-[0px] w-full lg:w-[306px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{'રિતિક રોશન પિતરાઈ ભાઈ એશાનના લગ્નમાં પુત્રો હ્રીહાન અને હૃધાન સાથે પોઝ આપે છે'}</NewsLink>
        </span>
        <span className="lg:top-[341px] lg:left-[0px] w-full lg:w-[306px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{'કેવી રીતે નિયમિત લાકડાના ટુકડાએ એક વિશાળ આતંકવાદી ભંડોળ નેટવર્કનો પર્દાફાશ કર્યો'}</NewsLink>
        </span>
        <span className="lg:top-[447px] lg:left-[0px] w-full lg:w-[307px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
          <NewsLink>{'વિજય હજારે ટ્રોફી, લાઈવ સ્કોર અપડેટ્સ: વિરાટ કોહલીના ઘરેલુ વાપસી પર કેપ્ટન રિષભ પંતે વિકેટ ..'}</NewsLink>
        </span>
      </div>

      <div className="lg:top-[1px] lg:left-[338px] max-lg:flex max-lg:flex-col max-lg:gap-[12px] w-full lg:w-[307px] h-auto lg:h-[523px] overflow-hidden lg:absolute">
        <div className="lg:top-[0px] lg:left-[20px] flex items-center gap-[8px] lg:absolute">
          <span className="text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] leading-none">મુસાફરી</span>
          <DotGroup />
        </div>
        <div className="lg:top-[45px] lg:left-[0px] w-full lg:w-[307px] h-auto lg:h-[478px] overflow-hidden lg:absolute">
          <div className="lg:top-[0px] lg:left-[1px] w-full lg:w-[303px] max-lg:aspect-[303/170] max-lg:h-auto h-[170px] bg-[url('/images/v143_2884.png')] bg-no-repeat bg-center bg-cover rounded-[7px] overflow-hidden lg:absolute" />
          <span className="lg:top-[190px] lg:left-[1px] w-full lg:w-[306px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
            <NewsLink>{'મધ્યપ્રદેશ સરકારને મોટો ઝટકો આપતા, NGT એ બાયપાસને પહોળો કરવા માટે 8,000 લીલા વૃક્ષો કાપવા'}</NewsLink>
          </span>
          <span className="lg:top-[295px] lg:left-[1px] w-full lg:w-[306px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
            <NewsLink>{'ભોપાલમાં ચાઇનીઝ માંજાના ઉપયોગ, વેચાણ અને ખરીદી પર પ્રતિબંધ મૂકવામાં આવ્યો છે, આ આદેશ તાત'}</NewsLink>
          </span>
          <span className="lg:top-[401px] lg:left-[1px] w-full lg:w-[307px] text-[#000000] font-['Rasa'] font-normal text-[19px] lg:text-[22px] text-left lg:absolute block">
            <NewsLink>{'લૂંટારા પકડાયા: એક કોલે લૂંટારાનો પ્લાન નિષ્ફળ બનાવ્યો, પોલીસે તેને સરહદ પારથી પકડ્યો, તેઓ સ્થળ પર'}</NewsLink>
          </span>
        </div>
      </div>

      <div className="lg:top-[1px] lg:left-[676px] max-lg:flex max-lg:flex-col max-lg:gap-[12px] w-full lg:w-[310px] h-auto lg:h-[531px] overflow-hidden lg:absolute">
        <div className="lg:top-[0px] lg:left-[19px] flex items-center gap-[8px] lg:absolute">
          <span className="text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] leading-none">વિજ્ઞાન</span>
          <DotGroup />
        </div>
        <div className="lg:top-[52px] lg:left-[0px] flex flex-col gap-[12px] w-full lg:w-[310px] h-auto lg:h-[479px] lg:absolute">
          {scienceRows.map((row, index) => (
            <ListRow key={`science-${index}`} image={row.image} text={row.text} imageWidth="w-[114px]" />
          ))}
        </div>
      </div>

      <div className="lg:top-[1px] lg:left-[1018px] max-lg:flex max-lg:flex-col max-lg:gap-[12px] w-full lg:w-[322px] h-auto lg:h-[531px] overflow-hidden lg:absolute">
        <div className="lg:top-[0px] lg:left-[19px] flex items-center gap-[8px] lg:absolute">
          <span className="text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[28px] leading-none">ટેક</span>
          <div className="flex items-center gap-[3px] mt-[2px]">
            <span className="w-[8px] h-[9px] rounded-full bg-[#ff0f0f] inline-block" />
            <span className="w-[8px] h-[9px] rounded-full bg-[#ff7070] inline-block" />
            <span className="w-[8px] h-[9px] rounded-full bg-[#ffacac] inline-block" />
            <span className="w-[8px] h-[9px] rounded-full bg-[#f9dada] inline-block" />
          </div>
        </div>
        <div className="lg:top-[52px] lg:left-[0px] flex flex-col gap-[12px] w-full lg:w-[322px] h-auto lg:h-[479px] lg:absolute">
          {techRows.map((row, index) => (
            <ListRow key={`tech-${index}`} image={row.image} text={row.text} imageWidth="w-[117px]" />
          ))}
        </div>
      </div>
    </div>
  )
}
