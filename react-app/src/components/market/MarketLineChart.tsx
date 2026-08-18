import type { MarketPoint } from '../../data/marketData'

interface MarketLineChartProps {
  points: MarketPoint[]
}

const W = 320
const H = 200
const PAD_X = 8
const PAD_Y = 14

export default function MarketLineChart({ points }: MarketLineChartProps) {
  const values = points.map((p) => p.value)
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = max - min || 1

  const x = (i: number) => PAD_X + (i * (W - PAD_X * 2)) / (points.length - 1)
  const y = (v: number) => PAD_Y + ((max - v) / range) * (H - PAD_Y * 2)

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(p.value)}`).join(' ')
  const areaPath = `${linePath} L ${x(points.length - 1)} ${H} L ${x(0)} ${H} Z`

  const gridYs = [0, 1, 2, 3].map((g) => PAD_Y + (g * (H - PAD_Y * 2)) / 3)
  const yLabels = [max, max - range / 3, max - (2 * range) / 3, min]

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className="w-full h-[220px] lg:h-[280px]"
      role="img"
      aria-hidden="true"
    >
      {gridYs.map((gy) => (
        <line key={gy} x1={PAD_X} y1={gy} x2={W - PAD_X} y2={gy} stroke="#e8e8e8" strokeWidth="1" />
      ))}
      <path d={areaPath} fill="#d61f2626" />
      <path d={linePath} fill="none" stroke="#d61f26" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {yLabels.map((v, i) => (
        <text
          key={`y-${i}`}
          x={PAD_X}
          y={gridYs[i] - 3}
          fontSize="8"
          fill="#999999"
          fontFamily="Hind_Vadodara, sans-serif"
        >
          {Math.round(v)}
        </text>
      ))}
      {points.map((p, i) =>
        i === 0 || i === points.length - 1 ? (
          <text
            key={`x-${i}`}
            x={x(i)}
            y={H - 4}
            fontSize="8"
            fill="#999999"
            fontFamily="Hind_Vadodara, sans-serif"
            textAnchor={i === 0 ? 'start' : 'end'}
          >
            {p.label}
          </text>
        ) : null,
      )}
    </svg>
  )
}