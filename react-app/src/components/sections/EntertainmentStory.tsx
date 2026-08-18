import NewsLink from '../NewsLink'
import type { SectionItem } from './types'

const DEFAULT: SectionItem[] = [
  {
    title:
      'રિતિક રોશન પોતાના દીકરા હ્રેહાન અને હૃદ્ધાન સાથે પિતરાઈ ભાઈ-બહેનોના ..',
    image: '/images/v47_180.png',
  },
  {
    title:
      'વૈભવ સૂર્યવંશીએ ૩૬ બોલમાં સદી ફટકારી, વન-ડે ક્રિકેટનો ઇતિહાસ રચ્યો ..',
    image: '/images/v47_184.png',
  },
  {
    title:
      'જ્યારે ધુરંધર ડિરેક્ટર આદિત્ય ધરે ડિસ્લેક્સિયાના પોતાના સંઘર્ષનો ખુલાસો કર્યો ..',
    image: '/images/v47_187.png',
  },
  {
    title:
      'રિતિક રોશન પોતાના દીકરા હ્રેહાન અને હૃદ્ધાન સાથે પિતરાઈ ભાઈ-બહેનોના ..',
    image: '/images/v47_180.png',
  },
  {
    title:
      'વૈભવ સૂર્યવંશીએ ૩૬ બોલમાં સદી ફટકારી, વન-ડે ક્રિકેટનો ઇતિહાસ રચ્યો ..',
    image: '/images/v47_184.png',
  },
  {
    title:
      'જ્યારે ધુરંધર ડિરેક્ટર આદિત્ય ધરે ડિસ્લેક્સિયાના પોતાના સંઘર્ષનો ખુલાસો કર્યો ..',
    image: '/images/v47_187.png',
  },
]

type StoryCardProps = {
  title: string
  image: string
}

function StoryCard({ title, image }: StoryCardProps) {
  return (
    <article
      className="
        w-full
        lg:w-[314px]
        h-[85px]
        relative
        overflow-hidden
        shrink-0
      "
    >
      {/* TEXT */}
      <span
        className="
          absolute
          top-[5px]
          left-0
          right-[120px]
          w-auto
          lg:right-auto
          lg:w-[201px]
          text-[#000000]
          font-['Rasa']
          font-medium
          text-[22px]
          leading-[1.18]
          text-left
        "
      >
        <NewsLink>{title}</NewsLink>
      </span>

      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="
          absolute
          top-0
          right-0
          w-[112px]
          h-[85px]
          object-cover
          rounded-[7px]
        "
      />
    </article>
  )
}

export default function EntertainmentStory({ items }: { items?: SectionItem[] }) {
  const list = items && items.length >= 6 ? items : DEFAULT
  const upperNews = list.slice(0, 3)
  const lowerNews = list.slice(3, 6)

  return (
    <div
      className="
        lg:absolute
        lg:top-[1375px]
        lg:left-[5px]
        w-full
        lg:w-[1010px]
        h-auto
        max-lg:flex
        max-lg:flex-col
        max-lg:gap-[16px]
      "
    >

      {/* =========================================
          UPPER DIV — FIRST 3 NEWS
      ========================================== */}
      <div
        className="
          flex
          flex-wrap
          gap-x-[31px]
          gap-y-[20px]
          w-full
          lg:h-[85px]
        "
      >
        {upperNews.map((item, index) => (
          <StoryCard
            key={`upper-${index}`}
            title={item.title}
            image={item.image ?? '/images/v47_180.png'}
          />
        ))}
      </div>


      {/* =========================================
          LOWER DIV — LAST 3 NEWS
      ========================================== */}
      <div
        className="
          flex
          flex-wrap
          gap-x-[30px]
          w-full
          lg:h-[85px]
          lg:mt-[20px]
        "
      >
        {lowerNews.map((item, index) => (
          <StoryCard
            key={`lower-${index}`}
            title={item.title}
            image={item.image ?? '/images/v47_180.png'}
          />
        ))}
      </div>

    </div>
  )
}