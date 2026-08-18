import { formatGuTime } from '../utils/gu'

export interface CityInfo {
  sunriseMin: number
  sunsetMin: number
  sunriseStr: string
  sunsetStr: string
  moonriseStr: string
  moonsetStr: string
  lat: number
  lon: number
}

export const aapniAajCities: Record<string, CityInfo> = {
  'સુરત': {
    sunriseMin: 6 * 60 + 12,
    sunsetMin: 19 * 60 + 24,
    sunriseStr: '૦૬:૧૨ AM',
    sunsetStr: '૦૭:૨૪ PM',
    moonriseStr: '૦૭:૨૦ PM',
    moonsetStr: '૦૬:૦૫ AM',
    lat: 21.17,
    lon: 72.83,
  },
  'અમદાવાદ': {
    sunriseMin: 6 * 60 + 7,
    sunsetMin: 19 * 60 + 28,
    sunriseStr: '૦૬:૦૭ AM',
    sunsetStr: '૦૭:૨૮ PM',
    moonriseStr: '૦૭:૧૫ PM',
    moonsetStr: '૦૬:૦૧ AM',
    lat: 23.02,
    lon: 72.57,
  },
  'વડોદરા': {
    sunriseMin: 6 * 60 + 9,
    sunsetMin: 19 * 60 + 26,
    sunriseStr: '૦૬:૦૯ AM',
    sunsetStr: '૦૭:૨૬ PM',
    moonriseStr: '૦૭:૧૭ PM',
    moonsetStr: '૦૬:૦૩ AM',
    lat: 22.3,
    lon: 73.19,
  },
  'રાજકોટ': {
    sunriseMin: 6 * 60 + 15,
    sunsetMin: 19 * 60 + 27,
    sunriseStr: '૦૬:૧૫ AM',
    sunsetStr: '૦૭:૨૭ PM',
    moonriseStr: '૦૭:૨૩ PM',
    moonsetStr: '૦૬:૦૮ AM',
    lat: 22.3,
    lon: 70.8,
  },
  'ભાવનગર': {
    sunriseMin: 6 * 60 + 13,
    sunsetMin: 19 * 60 + 25,
    sunriseStr: '૦૬:૧૩ AM',
    sunsetStr: '૦૭:૨૫ PM',
    moonriseStr: '૦૭:૨૧ PM',
    moonsetStr: '૦૬:૦૬ AM',
    lat: 21.76,
    lon: 72.15,
  },
}

export const aapniAajCityList = Object.keys(aapniAajCities)

export interface PanchangItem {
  emoji: string
  label: string
  value: string
}

const rahuSegmentByWeekday: Record<number, number> = { 0: 8, 1: 2, 2: 7, 3: 5, 4: 6, 5: 4, 6: 3 }
const gulikSegmentByWeekday: Record<number, number> = { 0: 5, 1: 4, 2: 3, 3: 2, 4: 1, 5: 8, 6: 7 }
const yamgandSegmentByWeekday: Record<number, number> = { 0: 6, 1: 5, 2: 4, 3: 3, 4: 2, 5: 1, 6: 8 }

function computeRahukaal(sunriseMin: number, sunsetMin: number, date: Date): string {
  const segment = rahuSegmentByWeekday[date.getDay()] ?? 1
  const segLen = (sunsetMin - sunriseMin) / 8
  const start = sunriseMin + (segment - 1) * segLen
  const end = start + segLen
  return formatGuTime(start) + ' - ' + formatGuTime(end)
}

function segmentTime(sunriseMin: number, sunsetMin: number, segment: number): string {
  const segLen = (sunsetMin - sunriseMin) / 8
  const start = sunriseMin + (segment - 1) * segLen
  return formatGuTime(start) + ' - ' + formatGuTime(start + segLen)
}

export interface KaalMuhuratItem {
  emoji: string
  label: string
  value: string
}

export function computeKaalMuhurat(sunriseMin: number, sunsetMin: number, date: Date = new Date()): KaalMuhuratItem[] {
  const dayLen = sunsetMin - sunriseMin
  const abhijitStart = sunriseMin + (7 * dayLen) / 16
  const abhijitEnd = abhijitStart + dayLen / 16
  return [
    { emoji: '⏳', label: 'રાહુકાળ', value: computeRahukaal(sunriseMin, sunsetMin, date) },
    { emoji: '🕛', label: 'ગુલિક કાળ', value: segmentTime(sunriseMin, sunsetMin, gulikSegmentByWeekday[date.getDay()] ?? 1) },
    { emoji: '🚫', label: 'યમગંડ', value: segmentTime(sunriseMin, sunsetMin, yamgandSegmentByWeekday[date.getDay()] ?? 1) },
    { emoji: '✨', label: 'અભિજિત મુહૂર્ત', value: formatGuTime(abhijitStart) + ' - ' + formatGuTime(abhijitEnd) },
  ]
}

export function buildPanchang(sunriseMin: number, sunsetMin: number, currentChoghName: string, date: Date = new Date()): PanchangItem[] {
  return [
    { emoji: '📅', label: 'તારીખ', value: '૧૦ જુલાઈ ૨૦૨૬' },
    { emoji: '🕉️', label: 'તિથિ', value: 'ગુરુ પૂર્ણિમા' },
    { emoji: '⭐', label: 'નક્ષત્ર', value: 'ઉત્તરાષાઢા' },
    { emoji: '⏰', label: 'રાહુકાળ', value: computeRahukaal(sunriseMin, sunsetMin, date) },
    { emoji: '🌤️', label: 'ચોઘડિયા', value: currentChoghName },
    { emoji: '🌙', label: 'પક્ષ', value: 'શુક્લ પક્ષ' },
    { emoji: '🌦️', label: 'ઋતુ', value: 'વર્ષા ઋતુ' },
    { emoji: '🔯', label: 'યોગ', value: 'સિદ્ધિ યોગ' },
    { emoji: '◐', label: 'કરણ', value: 'બવ કરણ' },
    { emoji: '☀️', label: 'અયન', value: 'દક્ષિણાયન' },
    { emoji: '🌡️', label: 'હવામાન', value: '30°C, વાદળછાયું' },
  ]
}

const CHOGH_ROTATION = ['Udveg', 'Chal', 'Labh', 'Amrit', 'Kaal', 'Shubh', 'Rog']
const CHOGH_DAY_START = ['Udveg', 'Amrit', 'Rog', 'Labh', 'Shubh', 'Chal', 'Kaal']
const CHOGH_NIGHT_START = ['Shubh', 'Chal', 'Kaal', 'Udveg', 'Amrit', 'Rog', 'Labh']

export const CHOGH_LABEL_GU: Record<string, string> = {
  Udveg: 'ઉદ્વેગ',
  Chal: 'ચલ',
  Labh: 'લાભ',
  Amrit: 'અમૃત',
  Kaal: 'કાળ',
  Shubh: 'શુભ',
  Rog: 'રોગ',
}

export const CHOGH_NATURE: Record<string, 'good' | 'bad' | 'neutral'> = {
  Udveg: 'bad',
  Chal: 'neutral',
  Labh: 'good',
  Amrit: 'good',
  Kaal: 'bad',
  Shubh: 'good',
  Rog: 'bad',
}

function choghSequence(startName: string): string[] {
  const startIdx = CHOGH_ROTATION.indexOf(startName)
  const seq: string[] = []
  for (let i = 0; i < 8; i++) seq.push(CHOGH_ROTATION[(startIdx + i) % 7])
  return seq
}

export interface ChoghSlot {
  name: string
  start: number
  end: number
  isNow: boolean
}

export interface Choghadiya {
  daySlots: ChoghSlot[]
  nightSlots: ChoghSlot[]
}

export function computeChoghadiya(sunriseMin: number, sunsetMin: number, date: Date = new Date()): Choghadiya {
  const now = date
  const weekday = now.getDay()
  const nowMinRaw = now.getHours() * 60 + now.getMinutes()
  const effectiveNow = nowMinRaw < sunriseMin ? nowMinRaw + 1440 : nowMinRaw

  const dayDur = (sunsetMin - sunriseMin) / 8
  const daySeq = choghSequence(CHOGH_DAY_START[weekday])
  const daySlots = daySeq.map((name, i) => ({
    name,
    start: sunriseMin + i * dayDur,
    end: sunriseMin + (i + 1) * dayDur,
    isNow: effectiveNow >= sunriseMin + i * dayDur && effectiveNow < sunriseMin + (i + 1) * dayDur,
  }))

  const nextSunriseMin = sunriseMin + 1440
  const nightDur = (nextSunriseMin - sunsetMin) / 8
  const nightSeq = choghSequence(CHOGH_NIGHT_START[weekday])
  const nightSlots = nightSeq.map((name, i) => ({
    name,
    start: sunsetMin + i * nightDur,
    end: sunsetMin + (i + 1) * nightDur,
    isNow: effectiveNow >= sunsetMin + i * nightDur && effectiveNow < sunsetMin + (i + 1) * nightDur,
  }))

  return { daySlots, nightSlots }
}

export function currentDayChoghName(sunriseMin: number, sunsetMin: number, date: Date = new Date()): string {
  const chogh = computeChoghadiya(sunriseMin, sunsetMin, date)
  const current = chogh.daySlots.find((s) => s.isNow)
  const slot = current ?? chogh.daySlots[0]
  return CHOGH_LABEL_GU[slot.name] ?? slot.name
}

export interface JainTiming {
  name: string
  time: string
}

export function computeJainTimings(sunriseMin: number, sunsetMin: number): JainTiming[] {
  const dayLen = sunsetMin - sunriseMin
  return [
    { name: 'જૈન તિથિ', time: 'અષાઢ સુદ ૧૪' },
    { name: 'નવકારશી', time: formatGuTime(sunriseMin + 48) },
    { name: 'ચૌવિહાર', time: formatGuTime(sunsetMin) },
    { name: 'પોરસી', time: formatGuTime(sunriseMin + dayLen / 4) },
    { name: 'સાઢપોરસી', time: formatGuTime(sunriseMin + (3 * dayLen) / 8) },
    { name: 'પુરિમઢ્ઢ', time: formatGuTime(sunriseMin + dayLen / 2) },
    { name: 'અવઢ્ઢ', time: formatGuTime(sunriseMin + (3 * dayLen) / 4) },
  ]
}

export interface Rashi {
  sym: string
  name: string
}

export const rashiList: Rashi[] = [
  { sym: '♈', name: 'મેષ' },
  { sym: '♉', name: 'વૃષભ' },
  { sym: '♊', name: 'મિથુન' },
  { sym: '♋', name: 'કર્ક' },
  { sym: '♌', name: 'સિંહ' },
  { sym: '♍', name: 'કન્યા' },
  { sym: '♎', name: 'તુલા' },
  { sym: '♏', name: 'વૃશ્ચિક' },
  { sym: '♐', name: 'ધન' },
  { sym: '♑', name: 'મકર' },
  { sym: '♒', name: 'કુંભ' },
  { sym: '♓', name: 'મીન' },
]

export const rashiTips: string[] = [
  'આજે નવા કાર્યોની શરૂઆત માટે શુભ દિવસ છે.',
  'આર્થિક બાબતોમાં સાવચેતી રાખવી હિતાવહ છે.',
  'મિત્રો સાથે સમય પસાર કરવાની તક મળશે.',
  'કૌટુંબિક બાબતોમાં ધ્યાન આપવાની જરૂર છે.',
  'કારકિર્દીમાં સારા સમાચાર મળી શકે છે.',
  'સ્વાસ્થ્યનું ધ્યાન રાખવું જરૂરી છે.',
  'સંબંધોમાં મીઠાશ જળવાઈ રહેશે.',
  'ધીરજ રાખવાથી કાર્ય સફળ થશે.',
  'મુસાફરીના યોગ બની શકે છે.',
  'વ્યવસાયમાં પ્રગતિની શક્યતા છે.',
  'નવા સંપર્કો લાભદાયી રહેશે.',
  'આધ્યાત્મિક બાબતોમાં રસ વધશે.',
]