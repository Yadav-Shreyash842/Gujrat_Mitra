import NewsLink from '../NewsLink'

const middleNews = [
  {
    title:
      'ગર્ભાવસ્થા પછી વાયરલ વોર 2 ના બિકીની સીન પર કિયારા અડવાણીએ ..',
    image: '/images/v47_515.png',
  },
  {
    title:
      "ધુરંધર આજે છાવાને હરાવશે, '૨૦૨૫ની સૌથી વધુ કમાણી કરનારી ફિલ્મ'",
    image: '/images/v47_519.png',
  },
  {
    title:
      'અભિનેત્રીઓ પર ટિપ્પણી કરવા બદલ અભિનેતા શિવાજીની ટીકા ..',
    image: '/images/v47_522.png',
  },
]

const rightNews = [
  'છૂટાછેડાની નોટિસ મોકલ્યાના એક અઠવાડિયા પછી બેંગલુરુના ટેકીએ પત્નીને ગોળી મારી',
  'બ્લુબર્ડ 6 પ્રક્ષેપણ ISRO માટે એક સીમાચિહ્નરૂપ કેમ છે: NDTV સમજાવે છે',
  'બ્લુબર્ડ 6 પ્રક્ષેપણ ISRO માટે એક સીમાચિહ્નરૂપ કેમ છે: NDTV સમજાવે છે',
]

export default function GujaratSection() {
  return (
    <section
      className="
        lg:absolute
        lg:top-[2837px]
        lg:left-[2px]
        w-full
        lg:w-[1013px]
        h-auto
        lg:h-[321px]
        overflow-visible
        max-lg:flex
        max-lg:flex-col
        max-lg:gap-[16px]
        max-lg:border-t
        max-lg:border-[#e8e8e8]
        max-lg:pt-[16px]
      "
    >
      {/* =====================================================
          SECTION TITLE
      ====================================================== */}
      <div
        className="
          relative
          lg:absolute
          lg:top-0
          lg:left-[8px]
          flex
          items-center
          gap-[14px]
          h-[30px]
        "
      >
        <span
          className="
            text-[#ffad15]
            font-['Rasa']
            font-bold
            text-[28px]
            leading-[27px]
            whitespace-nowrap
          "
        >
          આપણું ગુજરાત
        </span>

        <div className="flex items-center gap-[4px]">
          <span className="w-[8px] h-[9px] rounded-full bg-[#ff0f0f]" />
          <span className="w-[8px] h-[9px] rounded-full bg-[#ff7070]" />
          <span className="w-[8px] h-[9px] rounded-full bg-[#ffacac]" />
          <span className="w-[8px] h-[9px] rounded-full bg-[#f9dada]" />
        </div>
      </div>

      {/* =====================================================
          LEFT — HERO
      ====================================================== */}
      <article
        className="
          relative
          lg:absolute
          lg:top-[46px]
          lg:left-0
          w-full
          lg:w-[353px]
          h-auto
          lg:h-[275px]
        "
      >
        <img
          src="/images/v47_525.png"
          alt="રિતિક રોશન પિતરાઈ ભાઈ એશાનના લગ્નમાં"
          loading="lazy"
          className="
            block
            w-full
            lg:w-[353px]
            aspect-[353/183]
            lg:aspect-auto
            lg:h-[183px]
            object-cover
            rounded-[7px]
          "
        />

        <div
          className="
            relative
            lg:absolute
            lg:top-[198px]
            lg:left-[4px]
            w-full
            lg:w-[349px]
            mt-[8px]
            lg:mt-0
            text-[#000000]
            font-['Rasa']
            font-normal
            text-[22px]
            leading-[1.25]
          "
        >
          <NewsLink>
            રિતિક રોશન પિતરાઈ ભાઈ એશાનના લગ્નમાં પુત્રો હ્રીહાન અને હૃધાન સાથે પોઝ આપે છે
          </NewsLink>
        </div>
      </article>

      {/* =====================================================
          MIDDLE — 3 IMAGE + TEXT NEWS
      ====================================================== */}
      <div
        className="
          relative
          lg:absolute
          lg:top-[48px]
          lg:left-[383px]
          w-full
          lg:w-[350px]
          h-auto
          lg:h-[273px]
          flex
          flex-col
          gap-[16px]
        "
      >
        {/* NEWS 1 */}
        <article
          className="
            relative
            lg:absolute
            lg:top-0
            lg:left-0
            w-full
            lg:w-[350px]
            h-auto
            lg:h-[76px]
            flex
            items-start
            gap-[18px]
          "
        >
          <img
            src="/images/v47_515.png"
            alt={middleNews[0].title}
            loading="lazy"
            className="
              block
              shrink-0
              w-[128px]
              h-[76px]
              object-cover
              rounded-[7px]
            "
          />

          <div
            className="
              min-w-0
              flex-1
              text-[#000000]
              font-['Rasa']
              font-normal
              text-[22px]
              leading-[1.22]
            "
          >
            <NewsLink>{middleNews[0].title}</NewsLink>
          </div>
        </article>

        {/* NEWS 2 */}
        <article
          className="
            relative
            lg:absolute
            lg:top-[97px]
            lg:left-0
            w-full
            lg:w-[350px]
            h-auto
            lg:h-[76px]
            flex
            items-start
            gap-[18px]
          "
        >
          <img
            src="/images/v47_519.png"
            alt={middleNews[1].title}
            loading="lazy"
            className="
              block
              shrink-0
              w-[128px]
              h-[76px]
              object-cover
              rounded-[7px]
            "
          />

          <div
            className="
              min-w-0
              flex-1
              text-[#000000]
              font-['Rasa']
              font-normal
              text-[22px]
              leading-[1.22]
            "
          >
            <NewsLink>{middleNews[1].title}</NewsLink>
          </div>
        </article>

        {/* NEWS 3 */}
        <article
          className="
            relative
            lg:absolute
            lg:top-[194px]
            lg:left-0
            w-full
            lg:w-[350px]
            h-auto
            lg:h-[76px]
            flex
            items-start
            gap-[18px]
          "
        >
          <img
            src="/images/v47_522.png"
            alt={middleNews[2].title}
            loading="lazy"
            className="
              block
              shrink-0
              w-[128px]
              h-[76px]
              object-cover
              rounded-[7px]
            "
          />

          <div
            className="
              min-w-0
              flex-1
              text-[#000000]
              font-['Rasa']
              font-normal
              text-[22px]
              leading-[1.22]
            "
          >
            <NewsLink>{middleNews[2].title}</NewsLink>
          </div>
        </article>
      </div>

      {/* =====================================================
          RIGHT — TEXT ONLY
      ====================================================== */}
      <div
        className="
          relative
          lg:absolute
          lg:top-[47px]
          lg:left-[763px]
          w-full
          lg:w-[250px]
          h-auto
          lg:h-[274px]
          flex
          flex-col
          gap-[16px]
        "
      >
        {/* RIGHT NEWS 1 */}
        <div
          className="
            relative
            lg:absolute
            lg:top-0
            lg:left-0
            w-full
            lg:w-[250px]
            text-[#000000]
            font-['Rasa']
            font-normal
            text-[22px]
            leading-[1.25]
          "
        >
          <NewsLink>{rightNews[0]}</NewsLink>
        </div>

        {/* RIGHT NEWS 2 */}
        <div
          className="
            relative
            lg:absolute
            lg:top-[97px]
            lg:left-0
            w-full
            lg:w-[250px]
            text-[#000000]
            font-['Rasa']
            font-normal
            text-[22px]
            leading-[1.25]
          "
        >
          <NewsLink>{rightNews[1]}</NewsLink>
        </div>

        {/* RIGHT NEWS 3 */}
        <div
          className="
            relative
            lg:absolute
            lg:top-[195px]
            lg:left-0
            w-full
            lg:w-[250px]
            text-[#000000]
            font-['Rasa']
            font-normal
            text-[22px]
            leading-[1.25]
          "
        >
          <NewsLink>{rightNews[2]}</NewsLink>
        </div>
      </div>
    </section>
  )
}