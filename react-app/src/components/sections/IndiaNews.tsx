import NewsLink from '../NewsLink'

type RowItem = {
  title: string
  image: string
}

type ColumnProps = {
  title: string
  items: RowItem[]
  className?: string
}

const indiaItems: RowItem[] = [
  { title: 'હુમાયુ કબીર "રીલ્સ" થી પ્રભાવિત વ્યક્તિને છોડી દે છે, તેણી કહે છે "કારણ કે ..', image: '/images/v47_297.png' },
  { title: "ધુરંધર આજે છાવાને હરાવશે, '૨૦૨૫ની સૌથી વધુ કમાણી કરનારી ફિલ્મ'", image: '/images/v47_300.png' },
  { title: 'મહારાષ્ટ્રમાં સારવાર છતાં કૂતરા કરડવાના એક મહિના પછી 6 વર્ષની છોકરીનું મોત', image: '/images/v47_303.png' },
  { title: "'હું દિલ્હીમાં 2 દિવસ રહીશ, મને ચેપ લાગશે': નીતિન ગડકરીએ ઝેરી હવાનો ..", image: '/images/v47_306.png' },
]

const offbeatItems: RowItem[] = [
  { title: 'સાન્ટા ટ્રેકર 2025: સાન્તાક્લોઝ અત્યારે ક્યાં છે, સ્લેહને કેવી રીતે ફોલો કરવું..', image: '/images/v47_346.png' },
  { title: 'મુંબઈ મહિલાઓને સલામતી આપે છે એકલા પ્રવાસીએ શહેરના રાત્રિ પ્રવ.', image: '/images/v47_350.png' },
  { title: 'મંજૂર રજા હોવા છતાં મેનેજર કર્મચારી પર તબીબી દસ્તાવેજો માટે દબાણ કરે છે:', image: '/images/v47_354.png' },
  { title: 'અમારી પાસે સમયમર્યાદા છે શ્વાસ લેવામાં તકલીફ પડી રહી હત....', image: '/images/v47_358.png' },
]

const scienceItems: RowItem[] = [
  { title: 'અભ્યાસ પૂર્વ એશિયાઈ પશુઓ અને પ્રાચીન સિલ્ક રોડ જોડાણોનો 10,000 વર્ષ', image: '/images/v47_320.png' },
  { title: 'ધ્રુવોથી દૂર આકાશને પ્રકાશિત કરી રહ્યા છે લીલા અને જાંબલી ઓરોરા, અહીં', image: '/images/v47_323.png' },
  { title: 'નાસાના પાર્કર સોલાર પ્રોબે સૂર્યના શક્તિશાળી વિસ્ફોટો અને રહસ્યમય ઉર્જા વળત..', image: '/images/v47_327.png' },
  { title: 'ઉર્સિડ ઉલ્કા વર્ષા: તારીખ, શ્રેષ્ઠ સમય અને 2025 ની છેલ્લી અવકાશી પ્રવૃત્તિ કેવી', image: '/images/v47_331.png' },
]

const techItems: RowItem[] = [
  { title: 'ભારતમાં લોન્ચ પહેલા Realme Pad 3 ના મુખ્ય સ્પષ્ટીકરણો જાહેર;', image: '/images/v47_372.png' },
  { title: 'Oppo Find N6, Oppo Find X9 Ultra ચીનમાં લોન્ચ થવાની સમયરેખા..', image: '/images/v47_376.png' },
  { title: 'ઓપ્પો પેડ એર 5 અનબોક્સિંગ વિડિઓ વધારાની ડિઝાઇન વિગતો,', image: '/images/v47_380.png' },
  { title: 'OnePlus Turbo 1.5K BOE ડિસ્પ્લે અને 165Hz રિફ્રેશ રેટ સાથે લોન્ચ થવાની', image: '/images/v47_384.png' },
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

function NewsColumn({ title, items, className = '' }: ColumnProps) {
  return (
    <div className={`w-[84vw] shrink-0 snap-start lg:w-[312px] ${className}`}>
      <div className="flex items-center gap-[8px] mb-[12px] lg:mb-[16px]">
        <span className="text-[#ffad15] font-['Rasa'] font-bold text-[23px] lg:text-[42px] leading-[1]">
          {title}
        </span>
        <DotGroup />
      </div>

      <div className="flex flex-col gap-[10px] lg:gap-[12px]">
        {items.map((item, index) => (
          <article key={`${title}-${index}`} className="flex items-start gap-[10px] lg:gap-[12px]">
            <div
              className="shrink-0 w-[107px] h-[75px] bg-no-repeat bg-center bg-cover rounded-[7px]"
              style={{ backgroundImage: `url('${item.image}')` }}
            />
            <span className="text-[#000000] font-['Rasa'] font-normal text-[17px] lg:text-[22px] leading-[1.18] text-left">
              <NewsLink>{item.title}</NewsLink>
            </span>
          </article>
        ))}
      </div>
    </div>
  )
}

export default function IndiaNews() {
  return (
    <div className="lg:top-[5955px] lg:left-[2px] w-full h-auto lg:h-[403px] lg:absolute">
      <div className="flex gap-[16px] overflow-x-auto pb-[6px] snap-x snap-mandatory scrollbar-width-none [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-[312px_312px_311px_312px] lg:gap-[31px] lg:overflow-visible lg:pb-0">
        <NewsColumn title="ભારત સમાચાર" items={indiaItems} />
        <NewsColumn title="ઓફબીટ" items={offbeatItems} />
        <NewsColumn title="વિજ્ઞાન" items={scienceItems} className="lg:w-[311px]" />
        <NewsColumn title="ટેક" items={techItems} />
      </div>
    </div>
  )
}
