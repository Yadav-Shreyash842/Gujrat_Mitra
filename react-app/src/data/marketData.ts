export interface MarketPoint {
  label: string
  value: number
}

export interface MarketTrendData {
  value: number
  change: number
  changePercent: number
  up: boolean
  open: number
  high: number
  low: number
  prevClose: number
}

export interface MarketRow {
  name: string
  price: string
  changePercent: string
  up: boolean
}

export interface MarketBreadthData {
  gainers: number
  flat: number
  losers: number
}

export interface MarketSector {
  name: string
  changePercent: string
  up: boolean
}

export interface MarketUpdate {
  text: string
  time: string
}

export const marketTrend: MarketTrendData = {
  value: 24206.05,
  change: -81.85,
  changePercent: -0.34,
  up: false,
  open: 24287.9,
  high: 24310.4,
  low: 24145.2,
  prevClose: 24287.9,
}

export const niftySeries: Record<string, MarketPoint[]> = {
  '1D': [
    { label: '09:15', value: 24300 },
    { label: '10:00', value: 24285 },
    { label: '10:45', value: 24310 },
    { label: '11:30', value: 24260 },
    { label: '12:15', value: 24240 },
    { label: '13:00', value: 24270 },
    { label: '13:45', value: 24250 },
    { label: '14:30', value: 24235 },
    { label: '15:15', value: 24206 },
  ],
  '5D': [
    { label: 'સોમ', value: 24150 },
    { label: 'મંગળ', value: 24210 },
    { label: 'બુધ', value: 24180 },
    { label: 'ગુરુ', value: 24270 },
    { label: 'શુક્ર', value: 24206 },
  ],
  '1M': [
    { label: '18', value: 23980 },
    { label: '21', value: 24050 },
    { label: '24', value: 24120 },
    { label: '27', value: 24090 },
    { label: '30', value: 24170 },
    { label: '03', value: 24240 },
    { label: '06', value: 24210 },
    { label: '09', value: 24280 },
    { label: '12', value: 24206 },
  ],
  '6M': [
    { label: 'માર્ચ', value: 22800 },
    { label: 'એપ્રિલ', value: 23150 },
    { label: 'મે', value: 23400 },
    { label: 'જૂન', value: 23650 },
    { label: 'જુલાઈ', value: 24000 },
    { label: 'ઓગસ્ટ', value: 24206 },
  ],
  '1Y': [
    { label: 'સપ્ટે', value: 22600 },
    { label: 'ઓક્ટો', value: 22950 },
    { label: 'નવે', value: 23200 },
    { label: 'ડિસે', value: 23050 },
    { label: 'જાન્યુ', value: 23450 },
    { label: 'ફેબ્રુ', value: 23700 },
    { label: 'માર્ચ', value: 23550 },
    { label: 'એપ્રિલ', value: 23900 },
    { label: 'મે', value: 24050 },
    { label: 'જૂન', value: 23980 },
    { label: 'જુલાઈ', value: 24150 },
    { label: 'ઓગસ્ટ', value: 24206 },
  ],
}

export const marketGainers: MarketRow[] = [
  { name: 'Tata Motors', price: '1,019.80', changePercent: '+2.45%', up: true },
  { name: 'HDFC Bank', price: '1,642.55', changePercent: '+1.85%', up: true },
  { name: 'Reliance', price: '2,903.30', changePercent: '+1.25%', up: true },
  { name: 'ICICI Bank', price: '1,244.10', changePercent: '+1.10%', up: true },
  { name: 'Infosys', price: '1,654.40', changePercent: '+0.95%', up: true },
]

export const marketLosers: MarketRow[] = [
  { name: 'Adani Ports', price: '1,210.45', changePercent: '-2.35%', up: false },
  { name: 'JSW Steel', price: '942.80', changePercent: '-1.85%', up: false },
  { name: 'Wipro', price: '283.60', changePercent: '-1.45%', up: false },
  { name: 'Bharti Airtel', price: '1,580.20', changePercent: '-1.15%', up: false },
  { name: 'UltraTech', price: '10,540.90', changePercent: '-0.85%', up: false },
]

export const marketBreadth: MarketBreadthData = {
  gainers: 856,
  flat: 120,
  losers: 914,
}

export const marketSectors: MarketSector[] = [
  { name: 'ઓટો', changePercent: '+1.45%', up: true },
  { name: 'બેંક', changePercent: '+0.85%', up: true },
  { name: 'ફાર્મા', changePercent: '+0.65%', up: true },
  { name: 'FMCG', changePercent: '+0.35%', up: true },
  { name: 'મેટલ', changePercent: '+0.25%', up: true },
  { name: 'IT', changePercent: '-0.15%', up: false },
  { name: 'ઓઇલ & ગેસ', changePercent: '-0.35%', up: false },
  { name: 'રિયલ્ટી', changePercent: '-0.55%', up: false },
  { name: 'મીડિયા', changePercent: '-0.75%', up: false },
  { name: 'પાવર', changePercent: '-0.85%', up: false },
  { name: 'ફાઇનાન્સ', changePercent: '-1.10%', up: false },
  { name: 'કેમિકલ', changePercent: '-1.25%', up: false },
]

export const marketUpdates: MarketUpdate[] = [
  { text: 'RBI એ વ્યાજદરમાં કોઈ ફેરફાર કર્યા વગર રેપો રેટ 6.50% પર યથાવત રાખ્યો.', time: '03:45 PM' },
  { text: 'IT સેક્ટરમાં મજબૂત ખરીદી, નિફ્ટી IT ઇન્ડેક્સ ઉછળ્યો.', time: '03:20 PM' },
  { text: 'વૈશ્વિક બજારમાં મંદીના સંકેત, અમેરિકન ફ્યુચર્સ લાલ નિશાનમાં.', time: '02:10 PM' },
  { text: 'સોનાના ભાવમાં નરમાઈ, 10 ગ્રામ દીઠ ₹71,000 ની આસપાસ.', time: '01:40 PM' },
  { text: 'ફોરેક્સ બજારમાં રૂપિયો 83.45 પ્રતિ ડોલર નજીક સ્થિર.', time: '12:55 PM' },
]