export interface NavItem {
  slug: string
  label: string
  img: string
  itemTop: string
  itemLeft: string
  itemW: string
  spanTop: string
  spanW: string
  color: string
}

export const navItems: NavItem[] = [
  { slug: 'national', label: 'નેશનલ ', img: 'v47_92.png', itemTop: '', itemLeft: 'lg:left-[0px]', itemW: 'w-[102px]', spanTop: 'lg:top-[5px]', spanW: 'w-[82px]', color: 'text-[#000000]' },
  { slug: 'world', label: 'વર્લ્ડ', img: 'v47_94.png', itemTop: 'lg:top-[2px]', itemLeft: 'lg:left-[110px]', itemW: 'w-[51px]', spanTop: 'lg:top-[3px]', spanW: 'w-[31px]', color: 'text-[#000000]' },
  { slug: 'sports', label: 'સ્પોર્ટ્સ', img: 'v47_96.png', itemTop: 'lg:top-[2px]', itemLeft: 'lg:left-[169px]', itemW: 'w-[71px]', spanTop: 'lg:top-[3px]', spanW: 'w-[51px]', color: 'text-[#000000]' },
  { slug: 'gujarat', label: 'ગુજરાત', img: 'v47_98.png', itemTop: 'lg:top-[1px]', itemLeft: 'lg:left-[248px]', itemW: 'w-[72px]', spanTop: 'lg:top-[3px]', spanW: 'w-[52px]', color: 'text-[#000000]' },
  { slug: 'surat', label: 'સુરત', img: 'v47_100.png', itemTop: 'lg:top-[1px]', itemLeft: 'lg:left-[328px]', itemW: 'w-[55px]', spanTop: 'lg:top-[3px]', spanW: 'w-[35px]', color: 'text-[#000000]' },
  { slug: 'health', label: 'હેલ્થ', img: 'v47_102.png', itemTop: 'lg:top-[1px]', itemLeft: 'lg:left-[391px]', itemW: 'w-[53px]', spanTop: 'lg:top-[3px]', spanW: 'w-[33px]', color: 'text-[#000000]' },
  { slug: 'entertainment', label: 'એંન્ટરટેએનમેન્ટ', img: 'v47_104.png', itemTop: 'lg:top-[1px]', itemLeft: 'lg:left-[452px]', itemW: 'w-[138px]', spanTop: 'lg:top-[6px]', spanW: 'w-[118px]', color: 'text-[#000000]' },
  { slug: 'politics', label: 'પોલિટિક્સ', img: 'v47_106.png', itemTop: 'lg:top-[2px]', itemLeft: 'lg:left-[598px]', itemW: 'w-[94px]', spanTop: 'lg:top-[3px]', spanW: 'w-[74px]', color: 'text-[#000000]' },
  { slug: 'video', label: 'વિડિયો', img: 'v47_108.png', itemTop: 'lg:top-[2px]', itemLeft: 'lg:left-[700px]', itemW: 'w-[70px]', spanTop: 'lg:top-[3px]', spanW: 'w-[50px]', color: 'text-[#000000]' },
  { slug: 'opinion', label: 'ઓપીનીયન', img: 'v47_110.png', itemTop: 'lg:top-[1px]', itemLeft: 'lg:left-[778px]', itemW: 'w-[103px]', spanTop: 'lg:top-[6px]', spanW: 'w-[83px]', color: 'text-[#000000]' },
  { slug: 'charchapatra', label: 'ચર્ચાપત્ર', img: 'v47_112.png', itemTop: 'lg:top-[2px]', itemLeft: 'lg:left-[889px]', itemW: 'w-[74px]', spanTop: 'lg:top-[3px]', spanW: 'w-[54px]', color: 'text-[#000000]' },
  { slug: 'other', label: 'અન્ય', img: 'v47_114.png', itemTop: 'lg:top-[2px]', itemLeft: 'lg:left-[971px]', itemW: 'w-[58px]', spanTop: 'lg:top-[3px]', spanW: 'w-[38px]', color: 'text-[#1302ff]' },
]