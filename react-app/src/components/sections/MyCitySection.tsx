import NewsLink from '../NewsLink'

const middleNews = [
  {
    title:
      'ગર્ભાવસ્થા પછી વાયરલ વોર 2 ના બિકીની સીન પર કિયારા અડવાણીએ ..',
    image: '/images/v47_692.png',
  },
  {
    title:
      "ધુરંધર આજે છાવાને હરાવશે, '૨૦૨૫ની સૌથી વધુ કમાણી કરનારી ફિલ્મ'",
    image: '/images/v47_695.png',
  },
  {
    title:
      'અભિનેત્રીઓ પર ટિપ્પણી કરવા બદલ અભિનેતા શિવાજીની ટીકા ..',
    image: '/images/v47_699.png',
  },
]

const rightNews = [
  'છૂટાછેડાની નોટિસ મોકલ્યાના એક અઠવાડિયા પછી બેંગલુરુના ટેકીએ પત્નીને ગોળી મારી',
  'બ્લુબર્ડ 6 પ્રક્ષેપણ ISRO માટે એક સીમાચિહ્નરૂપ કેમ છે: NDTV સમજાવે છે',
  'બ્લુબર્ડ 6 પ્રક્ષેપણ ISRO માટે એક સીમાચિહ્નરૂપ કેમ છે: NDTV સમજાવે છે',
]

export default function MyCitySection() {
  return (
    <section
      className="
        lg:absolute
        lg:top-[3389px]
        lg:left-0
        w-full
        lg:w-[1015px]
        h-auto
        lg:h-[328px]
        overflow-visible
        max-lg:flex
        max-lg:flex-col
        max-lg:gap-[16px]
      "
    >

      {/* =====================================================
          HEADER — મારું શહેર + CITY SELECTOR + DOTS
      ====================================================== */}
      <div
        className="
          relative
          lg:absolute
          lg:top-0
          lg:left-[5px]
          h-[34px]
          flex
          items-center
        "
      >
        {/* TITLE */}
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
          મારું શહેર
        </span>

        {/* CITY SELECTOR */}
        <div
          className="
            ml-[35px]
            relative
            w-[101px]
            h-[34px]
            flex
            items-center
            justify-center
            rounded-[5px]
            border-[1px]
            border-[#fece07]
          "
        >
          <span
            className="
              text-[#000000]
              font-['Hind_Vadodara']
              font-normal
              text-[16px]
              leading-none
            "
          >
            અમદાવાદ
          </span>

          <span
            className="
              absolute
              right-[-19px]
              top-[7px]
              text-[#00000066]
              font-['Hind_Vadodara']
              text-[16px]
            "
          >
            &gt;
          </span>
        </div>

        {/* DOTS */}
        <div
          className="
            ml-[12px]
            flex
            items-center
            gap-[3px]
          "
        >
          <span className="w-[9px] h-[9px] rounded-full bg-[#ff0f0f]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#ff7070]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#ffacac]" />
          <span className="w-[9px] h-[9px] rounded-full bg-[#f9dada]" />
        </div>
      </div>


      {/* =====================================================
          HERO — LEFT
      ====================================================== */}
      <article
        className="
          relative
          lg:absolute
          lg:top-[47px]
          lg:left-0
          w-full
          lg:w-[353px]
          h-auto
          lg:h-[280px]
        "
      >
        <img
          src="/images/v47_702.png"
          alt="રિતિક રોશન પિતરાઈ ભાઈ એશાનના લગ્નમાં"
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
            lg:top-[203px]
            lg:left-[2px]
            w-full
            lg:w-[353px]
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
          MIDDLE — 3 IMAGE + TEXT STORIES
      ====================================================== */}
      <div
        className="
          relative
          lg:absolute
          lg:top-[49px]
          lg:left-[388px]
          w-full
          lg:w-[345px]
          h-auto
          lg:h-[278px]
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
            lg:w-[345px]
            h-auto
            lg:h-[76px]
            flex
            items-start
            gap-[18px]
          "
        >
          <img
            src={middleNews[0].image}
            alt={middleNews[0].title}
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
              flex-1
              min-w-0
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
            lg:top-[96px]
            lg:left-0
            w-full
            lg:w-[345px]
            h-auto
            lg:h-[76px]
            flex
            items-start
            gap-[18px]
          "
        >
          <img
            src={middleNews[1].image}
            alt={middleNews[1].title}
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
              flex-1
              min-w-0
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
            lg:w-[345px]
            h-auto
            lg:h-[76px]
            flex
            items-start
            gap-[18px]
          "
        >
          <img
            src={middleNews[2].image}
            alt={middleNews[2].title}
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
              flex-1
              min-w-0
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
          RIGHT — 3 TEXT ONLY STORIES
      ====================================================== */}
      <div
        className="
          relative
          lg:absolute
          lg:top-[47px]
          lg:left-[764px]
          w-full
          lg:w-[251px]
          h-auto
          lg:h-[280px]
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
            lg:w-[251px]
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
            lg:top-[100px]
            lg:left-0
            w-full
            lg:w-[251px]
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
            lg:top-[200px]
            lg:left-0
            w-full
            lg:w-[251px]
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