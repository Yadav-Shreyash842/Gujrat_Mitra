const GU_DIGITS: Record<string, string> = {
  '0': '૦',
  '1': '૧',
  '2': '૨',
  '3': '૩',
  '4': '૪',
  '5': '૫',
  '6': '૬',
  '7': '૭',
  '8': '૮',
  '9': '૯',
}

export function toGuDigits(value: number | string): string {
  return String(value).replace(/[0-9]/g, (d) => GU_DIGITS[d] ?? d)
}

export const GU_MONTHS = [
  'જાન્યુઆરી',
  'ફેબ્રુઆરી',
  'માર્ચ',
  'એપ્રિલ',
  'મે',
  'જૂન',
  'જુલાઈ',
  'ઓગસ્ટ',
  'સપ્ટેમ્બર',
  'ઓક્ટોબર',
  'નવેમ્બર',
  'ડિસેમ્બર',
]

export const GU_DAYS = ['રવિવાર', 'સોમવાર', 'મંગળવાર', 'બુધવાર', 'ગુરુવાર', 'શુક્રવાર', 'શનિવાર']

export function todayGuDate(): string {
  const d = new Date()
  return `${toGuDigits(d.getDate())} ${GU_MONTHS[d.getMonth()]} ${toGuDigits(d.getFullYear())} • ${GU_DAYS[d.getDay()]}`
}

export function formatGuDate(d: Date): string {
  return `${toGuDigits(d.getDate())} ${GU_MONTHS[d.getMonth()]} ${toGuDigits(d.getFullYear())}`
}

export function formatGuWeekday(d: Date): string {
  return GU_DAYS[d.getDay()]
}

export function formatGuTime(min: number): string {
  const m = ((min % 1440) + 1440) % 1440
  let h = Math.floor(m / 60)
  const mm = m % 60
  const ap = h >= 12 ? 'PM' : 'AM'
  let h12 = h % 12
  if (h12 === 0) h12 = 12
  return toGuDigits(String(h12).padStart(2, '0')) + ':' + toGuDigits(String(mm).padStart(2, '0')) + ' ' + ap
}