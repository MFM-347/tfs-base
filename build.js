const fs = require('fs')
const path = require('path')
const { transform, Features } = require('lightningcss')

console.log('\nBuilding...')
const inDir = './src'
const outDir = './dist'

const meta =
  '/*\n* @tfs-8/basecss v1.0.2-beta\n* MIT Licensed <https://opensource.org/license/MIT>\n* Source Code: Github <https://github.com/MFM-347/BaseCSS>\n*/\n\n'
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir)
}
const files = fs.readdirSync(inDir).filter((file) => file.endsWith('.css'))
const c = files.map((file) => fs.readFileSync(path.join(inDir, file), 'utf8')).join('\n')
const compiled = transform({
  filename: 'base.css',
  code: Buffer.from(c),
  minify: false,
  include: Features.Colors | Features.Nesting,
  exclude: Features.VendorPrefixes,
}).code
fs.writeFileSync(path.join(outDir, 'base.css'), meta + compiled)
console.log('Compiled base.css')
const minified = transform({
  filename: 'base.css',
  code: Buffer.from(compiled),
  minify: true,
  include: Features.Colors | Features.Nesting,
  exclude: Features.VendorPrefixes,
}).code
fs.writeFileSync(path.join(outDir, 'base.min.css'), meta + minified)
console.log('Minified base.css to base.min.css')

const filesMap = {
  'b_vars.css': 'vars.min.css',
  'c_reset.css': 'reset.min.css',
  'd_type.css': 'type.min.css',
  'e_utilities.css': 'utilities.min.css',
  'f_components.css': 'components.min.css',
  'g_scroll.css': 'scroll.min.css',
}

Object.entries(filesMap).forEach(([inputName, outputName]) => {
  const src = path.join(inDir, inputName)
  const dist = path.join(outDir, outputName)

  if (fs.existsSync(src)) {
    const css = fs.readFileSync(src, 'utf8')
    const minified = transform({
      filename: outputName,
      code: Buffer.from(css),
      minify: true,
      include: Features.Colors | Features.Nesting,
      exclude: Features.VendorPrefixes,
    }).code
    fs.writeFileSync(dist, minified)
    console.log(`Minified ${outputName}`)
  } else {
    console.error(`Warning: ${inputName} not found in ${inDir}`)
  }
})

console.log('\nSuccessful compilation, minification, and file copying.')
