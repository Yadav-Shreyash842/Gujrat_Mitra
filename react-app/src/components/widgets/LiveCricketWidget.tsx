export default function LiveCricketWidget() {
  return (
    <div
      className="
        relative
        w-full
        h-auto
        lg:w-[300px]
        lg:h-[146px]
        lg:absolute
        lg:top-[1653px]
        lg:left-[1041px]
        overflow-visible
      "
    >
      {/* Cricket Header */}
      <div
        className="
          relative
          z-20
          w-[89px]
          h-[30px]
          lg:h-[17px]
          bg-[url('/images/v47_1050.png')]
          bg-no-repeat
          bg-center
          bg-cover
        "
      >
        <span
          className="
            relative
            z-20
            left-0
            top-0
            w-[51px]
            text-[#ffad15]
            font-['Rasa']
            font-bold
            text-[23px]
            lg:text-[28px]
            text-center
            whitespace-nowrap
          "
        >
          {"ક્રિકેટ"}
        </span>

        <div
          className="
            absolute
            top-[7px]
            left-[54px]
            w-[35px]
            h-[9px]
            bg-[url('/images/v47_1052.png')]
            bg-no-repeat
            bg-center
            bg-cover
          "
        >
          <div className="absolute top-0 left-0 w-[7px] h-[9px] bg-[#ff0f0f] rounded-[50%]" />
          <div className="absolute top-0 left-[10px] w-[7px] h-[9px] bg-[#ff7070] rounded-[50%]" />
          <div className="absolute top-0 left-[20px] w-[7px] h-[9px] bg-[#ffacac] rounded-[50%]" />
          <div className="absolute top-0 left-[28px] w-[7px] h-[9px] bg-[#f9dada] rounded-[50%]" />
        </div>
      </div>

      {/* Cricket Card */}
      <div
        className="
          relative
          z-10
          w-full
          lg:w-[300px]
          h-[146px]
          lg:h-[114px]
          mt-[0px]
          lg:mt-[15px]
          bg-[url('/images/v47_1038.png')]
          bg-no-repeat
          bg-center
          bg-cover
          overflow-hidden
        "
      >
        {/* White Card */}
        <div
          className="
            absolute
            top-0
            left-0
            w-full
            lg:w-[300px]
            h-[114px]
            bg-[#ffffff]
            rounded-[8px]
            border
            border-[#e5e5e5]
            shadow-[0px_0px_20px_rgba(0,0,0,0.15)]
            overflow-hidden
          "
        />

        {/* Top Label */}
        <span
          className="
            absolute
            top-[7px]
            left-[14px]
            w-[94px]
            text-[#000000]
            font-['Hind_Vadodara']
            font-normal
            text-[8px]
            text-center
          "
        >
          {"લાઈવ | પાંચમી ટેસ્ટ | સિડની"}
        </span>

        {/* England */}
        <div
          className="
            absolute
            top-[34px]
            left-[15px]
            w-[276px]
            h-[19px]
            bg-[url('/images/v47_1046.png')]
            bg-no-repeat
            bg-center
            bg-cover
          "
        >
          <span
            className="
              absolute
              top-0
              left-[23px]
              w-[43px]
              text-[#000000a6]
              font-['Hind_Vadodara']
              font-bold
              text-[12px]
              text-center
            "
          >
            {"ઇંગ્લેન્ડ"}
          </span>

          <div
            className="
              absolute
              top-[4px]
              left-0
              w-[16px]
              h-[9px]
              bg-[url('/images/v47_1048.png')]
              bg-no-repeat
              bg-center
              bg-cover
            "
          />

          <span
            className="
              absolute
              top-0
              left-[204px]
              w-[73px]
              text-[#000000a6]
              font-['Hind_Vadodara']
              font-bold
              text-[12px]
              text-center
            "
          >
            {"૩૮૪ અને ૩૪૨"}
          </span>
        </div>

        {/* Australia */}
        <div
          className="
            absolute
            top-[58px]
            left-[15px]
            w-[277px]
            h-[19px]
            bg-[url('/images/v47_1042.png')]
            bg-no-repeat
            bg-center
            bg-cover
          "
        >
          <span
            className="
              absolute
              top-0
              left-[25px]
              w-[53px]
              text-[#000000]
              font-['Hind_Vadodara']
              font-bold
              text-[12px]
              text-center
            "
          >
            {"ઓસ્ટ્રેલિયા"}
          </span>

          <div
            className="
              absolute
              top-[4px]
              left-0
              w-[16px]
              h-[9px]
              bg-[url('/images/v47_1044.png')]
              bg-no-repeat
              bg-center
              bg-cover
            "
          />

          <span
            className="
              absolute
              top-0
              left-[127px]
              w-[151px]
              text-[12px]
              text-center
            "
          >
            {"(લક્ષ્ય:૧૬૦) ૫૬૭ અને ૧૫૫/૫"}
          </span>
        </div>

        {/* Bottom Message */}
        <span
          className="
            absolute
            top-[87px]
            left-1/2
            -translate-x-1/2
            w-[161px]
            text-[#000000]
            font-['Hind_Vadodara']
            font-normal
            text-[12px]
            text-center
            whitespace-nowrap
          "
        >
          {"ઓસ્ટ્રેલિયાને જીત માટે ૬ રનની જરૂર"}
        </span>
      </div>
    </div>
  );
}