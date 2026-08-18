export interface EPaperEdition {
  id: string
  name: string
  available: boolean
}

export const epaperEditions: EPaperEdition[] = [
  { id: 'surat', name: 'સુરત', available: false },
  { id: 'navsari-valsad-vapi', name: 'નવસારી-વલસાડ-વાપી', available: false },
  { id: 'bardoli-vyara-bharuch', name: 'બારડોલી-વ્યારા-ભરૂચ', available: false },
  { id: 'vadodara', name: 'વડોદરા', available: false },
]

export const EPAPER_PREVIEW = '/images/epaper-preview.jpg'

export const EDITION_UNAVAILABLE = 'આ આવૃત્તિ હાલમાં ઉપલબ્ધ નથી'