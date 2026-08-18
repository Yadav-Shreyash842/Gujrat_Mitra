import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const cssPath = join(__dirname, '..', '..', 'css', 'main.css')
const outPath = join(__dirname, '..', 'src', 'styles', 'class-map.json')

const css = readFileSync(cssPath, 'utf8')

const rules = []
const re = /([^{}]+)\{([^{}]*)\}/g
let m
while ((m = re.exec(css)) !== null) {
  const selector = m[1].trim()
  const body = m[2]
  if (!selector || selector.includes(',') || selector.includes(':') || selector.includes(' ')) continue
  if (selector === '*' || selector === 'body') continue
  const decls = {}
  for (const line of body.split(';')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const prop = line.slice(0, idx).trim()
    const value = line.slice(idx + 1).trim()
    if (prop) decls[prop] = value
  }
  rules.push({ selector, decls })
}

function roundAlpha(raw) {
  let a = parseFloat(raw)
  if (Number.isNaN(a)) a = 1
  a = Math.max(0, Math.min(1, Math.round(a * 100) / 100))
  return a
}

function rgbaToHex(r, g, b, a) {
  const h = (n) => n.toString(16).padStart(2, '0')
  const alpha = Math.round(roundAlpha(a) * 255)
  if (alpha === 255) return `#${h(r)}${h(g)}${h(b)}`
  return `#${h(r)}${h(g)}${h(b)}${h(alpha)}`
}

function parseRgba(value) {
  const m2 = /rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/.exec(value)
  if (!m2) return null
  return rgbaToHex(parseInt(m2[1], 10), parseInt(m2[2], 10), parseInt(m2[3], 10), m2[4] ? parseFloat(m2[4]) : 1)
}

const FONT_WEIGHTS = { Bold: 'font-bold', SemiBold: 'font-normal', Medium: 'font-normal', Regular: 'font-normal', Light: 'font-normal' }
const FONT_FAMILIES = { 'Hind Vadodara': "font-['Hind_Vadodara']", Inter: "font-['Inter']", Rasa: "font-['Rasa']", Roboto: "font-['Roboto']" }

function toClasses(decls) {
  const out = []

  switch (decls.position) {
    case 'absolute': out.push('absolute'); break
    case 'fixed': out.push('fixed'); break
    case 'relative': out.push('relative'); break
    case 'static': break
  }
  if (decls.top !== undefined) out.push(`top-[${decls.top}]`)
  if (decls.left !== undefined) out.push(`left-[${decls.left}]`)
  if (decls.right !== undefined) out.push(`right-[${decls.right}]`)
  if (decls.bottom !== undefined) out.push(`bottom-[${decls.bottom}]`)

  if (decls.width === '100%') out.push('w-full')
  else if (decls.width) out.push(`w-[${decls.width}]`)
  if (decls.height === '100%') out.push('h-full')
  else if (decls.height) out.push(`h-[${decls.height}]`)

  if (decls['box-sizing'] === 'border-box') out.push('box-border')

  const bg = decls.background
  if (bg) {
    const urlM = /url\("\.\.\/images\/([^"]+)"\)/.exec(bg)
    if (urlM) {
      out.push(`bg-[url('/images/${urlM[1]}')]`)
      if (decls['background-repeat'] === 'no-repeat') out.push('bg-no-repeat')
      if (decls['background-position'] === 'center center') out.push('bg-center')
      if (decls['background-size'] === 'cover') out.push('bg-cover')
    } else if (bg.startsWith('linear-gradient(')) {
      out.push(`bg-[${bg.replace(/\s+/g, '')}]`)
    } else if (bg.startsWith('rgba(') || bg.startsWith('rgb(')) {
      out.push(`bg-[${parseRgba(bg)}]`)
    } else {
      out.push(`bg-[${bg}]`)
    }
  }

  if (decls.color) {
    if (decls.color.includes('url(') || decls.color.includes('linear-gradient(')) {
      // invalid `color` values in original CSS; browsers ignore them and fall back to inherited color
    } else if (decls.color === '#fff') out.push('text-[#fff]')
    else out.push(`text-[${parseRgba(decls.color) ?? decls.color}]`)
  }

  if (decls['font-family']) out.push(FONT_FAMILIES[decls['font-family']] ?? `font-[${decls['font-family'].replace(/\s+/g, '_')}]`)
  if (decls['font-weight']) out.push(FONT_WEIGHTS[decls['font-weight']] ?? `font-[${decls['font-weight']}]`)
  if (decls['font-size']) out.push(`text-[${decls['font-size']}]`)
  if (decls['line-height']) out.push(`leading-[${decls['line-height']}]`)
  if (decls['letter-spacing']) out.push(`tracking-[${decls['letter-spacing']}]`)
  if (decls['text-align'] === 'center') out.push('text-center')
  else if (decls['text-align'] === 'right') out.push('text-right')
  else if (decls['text-align'] === 'left') out.push('text-left')

  if (decls['border-radius'] === '50%') out.push('rounded-[50%]')
  else if (decls['border-radius']) out.push(`rounded-[${decls['border-radius']}]`)
  if (decls['border-top-left-radius']) out.push(`rounded-tl-[${decls['border-top-left-radius']}]`)
  if (decls['border-top-right-radius']) out.push(`rounded-tr-[${decls['border-top-right-radius']}]`)
  if (decls['border-bottom-left-radius']) out.push(`rounded-bl-[${decls['border-bottom-left-radius']}]`)
  if (decls['border-bottom-right-radius']) out.push(`rounded-br-[${decls['border-bottom-right-radius']}]`)

  if (decls.border) {
    const bm = /(\d+)px\s+solid\s+(rgba?\([^)]+\))/.exec(decls.border)
    if (bm) {
      out.push(`border-[${bm[1]}px]`)
      out.push(`border-[${parseRgba(bm[2])}]`)
    } else {
      out.push(`border-[${decls.border}]`)
    }
  }

  if (decls['box-shadow']) {
    out.push(`shadow-[${decls['box-shadow'].replace(/\s+/g, '_')}]`)
  }

  if (decls.padding) {
    const parts = decls.padding.trim().split(/\s+/)
    if (parts.length === 1) out.push(`p-[${parts[0]}]`)
    else out.push(`p-[${parts.join('_')}]`)
  }

  if (decls.transform) {
    const rm = /rotate\((-?\d+(?:\.\d+)?)deg\)/.exec(decls.transform)
    if (rm) {
      const deg = parseFloat(rm[1])
      out.push(deg < 0 ? `-rotate-${Math.abs(deg)}` : `rotate-${deg}`)
    }
  }

  if (decls.overflow === 'hidden') out.push('overflow-hidden')
  if (decls.opacity && decls.opacity !== '1') out.push(`opacity-[${decls.opacity}]`)

  return out.join(' ')
}

const classMap = {}
for (const { selector, decls } of rules) {
  if (selector.startsWith('@')) continue
  classMap[selector.replace(/^\./, '')] = toClasses(decls)
}

mkdirSync(dirname(outPath), { recursive: true })
writeFileSync(outPath, JSON.stringify(classMap, null, 2))
console.log(`Wrote ${Object.keys(classMap).length} classes to ${outPath}`)