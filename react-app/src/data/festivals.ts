export interface TodayVrat {
  name: string
  note: string
  active: boolean
}

export interface UpcomingFestival {
  name: string
  date: string
}

export const todayVrat: TodayVrat = {
  name: 'ગુરુ પૂર્ણિમા',
  note: 'વ્યાસ પૂજન, ગુરુ પૂજનનો દિવસ. આજે સર્વ શુભ કાર્ય શુભ રહેશે.',
  active: true,
}

export const upcomingFestivals: UpcomingFestival[] = [
  {
    name: 'હરિયાળી અમાસ',
    date: '૧૩ ઓગસ્ટ',
  },
  {
    name: 'નાગ પંચમી',
    date: '૧૭ ઓગસ્ટ',
  },
  {
    name: 'રક્ષાબંધન',
    date: '૨૮ ઓગસ્ટ',
  },
  {
    name: 'જન્માષ્ટમી',
    date: '૦૪ સપ્ટેમ્બર',
  },
]
