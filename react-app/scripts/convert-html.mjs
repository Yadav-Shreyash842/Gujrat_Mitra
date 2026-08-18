import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { parse } from 'node-html-parser'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { sections } from './sections.config.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const htmlPath = join(__dirname, '..', '..', 'index.html')
const mapPath = join(__dirname, '..', 'src', 'styles', 'class-map.json')
const outPath = join(__dirname, '..', 'src', 'App.tsx')
const compRoot = join(__dirname, '..', 'src', 'components')

const html = readFileSync(htmlPath, 'utf8')
const classMap = JSON.parse(readFileSync(mapPath, 'utf8'))

const root = parse(html)
const body = root.querySelector('body')

function escText(t) {
  return t.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
}

function escAttr(s) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function buildClassName(node) {
  const cls = node.getAttribute('class')
  if (!cls) return ''
  return cls
    .trim()
    .split(/\s+/)
    .map((c) => classMap[c] ?? '')
    .filter(Boolean)
    .join(' ')
}

function buildAttrs(node) {
  const attrs = []
  for (const [key, value] of Object.entries(node.attributes)) {
    if (key === 'class') continue
    attrs.push(`${key}="${escAttr(value)}"`)
  }
  return attrs.length ? ` ${attrs.join(' ')}` : ''
}

function openTag(node, indent) {
  const clsStr = buildClassName(node)
  return `${indent}<${node.rawTagName}${clsStr ? ` className="${clsStr}"` : ''}${buildAttrs(node)}>`
}

function renderNode(node, indent) {
  if (node.nodeType === 3) {
    const text = node.text.replace(/\s+/g, ' ').trim()
    if (text.length === 0) return null
    return `${indent}{"${escText(text)}"}`
  }
  if (node.nodeType === 8) return null

  const children = node.childNodes.map((c) => renderNode(c, indent + '  ')).filter(Boolean)

  if (children.length === 0) {
    const clsStr = buildClassName(node)
    return `${indent}<${node.rawTagName}${clsStr ? ` className="${clsStr}"` : ''}${buildAttrs(node)} />`
  }

  return [openTag(node, indent), ...children, `${indent}</${node.rawTagName}>`].join('\n')
}

// ---- find the two wrapper divs ----
const wrappers = body.childNodes.filter((n) => n.nodeType === 1)
const rootNode = wrappers.find((n) => (n.getAttribute('class') || '').includes('v47_85'))
if (!rootNode) throw new Error('v47_85 root not found')
const canvas = rootNode.childNodes.find((n) => n.nodeType === 1 && (n.getAttribute('class') || '').includes('v69_116'))
if (!canvas) throw new Error('v69_116 canvas not found')

const sectionNodes = canvas.childNodes.filter((n) => n.nodeType === 1)
if (sectionNodes.length !== sections.length) {
  throw new Error(`config mismatch: ${sectionNodes.length} sections vs ${sections.length} config entries`)
}

// ---- verify ids match config ----
for (let i = 0; i < sectionNodes.length; i++) {
  const cls = sectionNodes[i].getAttribute('class') || ''
  const vid = cls.match(/v\d+_[A-Za-z0-9]+/)
  const cfgId = sections[i].id
  if (cfgId && (!vid || vid[0] !== cfgId)) {
    throw new Error(`id mismatch at index ${i}: config=${cfgId} html=${vid ? vid[0] : 'none'}`)
  }
}

// ---- emit component files ----
const usages = []
for (let i = 0; i < sectionNodes.length; i++) {
  const { folder, name } = sections[i]
  const jsx = renderNode(sectionNodes[i], '    ')
  const file = `${compRoot}\\${folder}\\${name}.tsx`
  const content = `export default function ${name}() {\n  return (\n${jsx}\n  )\n}\n`
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, content)
  usages.push({ name, folder, jsx })
}

// ---- assemble App.tsx ----
const imports = usages.map(({ name, folder }) => `import ${name} from './components/${folder}/${name}'`)
const appBody = [
  `function App() {`,
  `  return (`,
  openTag(rootNode, ''),
  openTag(canvas, '  '),
  ...usages.map(({ name }) => `    <${name} />`),
  `  </div>`,
  `</div>`,
  `  )`,
  `}`,
  ``,
  `export default App`,
  ``,
].join('\n')

const output = `${imports.join('\n')}\n\n${appBody}`

writeFileSync(outPath, output)
console.log(`Wrote ${outPath} (${output.split('\n').length} lines)`)
console.log(`Wrote ${usages.length} components to ${compRoot}`)