export interface MarketInstrument {
  name: string
  value: string
  change: string
  up: boolean
}

export const marketInstruments: MarketInstrument[] = [
  { name: 'સેન્સેક્સ', value: '૮૧,૩૫૦', change: '▲', up: true },
  { name: 'નિફ્ટી ૫૦', value: '૨૪,૭૨૦', change: '▲', up: true },
  { name: 'ગિફ્ટ નિફ્ટી', value: '૨૪,૬૯૦', change: '▼', up: false },
  { name: 'ડોલર/રૂપિયો', value: '₹૮૩.૪૨', change: '—', up: true },
  { name: 'સોનું', value: '₹૭૨,૪૫૦', change: '—', up: true },
  { name: 'ચાંદી', value: '₹૮૯,૧૨૦', change: '▼', up: false },
]