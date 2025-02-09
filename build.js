const fs = require('fs')
const path = require('path')

const inDir = './src'
const outDir = './dist'

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir)
}
const files = fs.readdirSync(inDir).filter((file) => file.endsWith('.css'))
const compiled = files.map((file) => fs.readFileSync(path.join(inDir, file), 'utf8')).join('\n')
fs.writeFileSync(path.join(outDir, 'base.css'), compiled)
const filesMap = {
  'b_vars.css': 'vars.css',
  'c_reset.css': 'reset.css',
  'd_type.css': 'type.css',
  'e_utilities.css': 'utilities.css',
  'f_components.css': 'components.css',
  'g_scroll.css': 'scroll.css',
}
Object.entries(filesMap).forEach(([srcFileName, destFileName]) => {
  const srcPath = path.join(inDir, srcFileName)
  const destPath = path.join(outDir, destFileName)
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath)
  } else {
    console.warn(`Warning: ${srcFileName} not found in ${inDir}`)
  }
})
console.log('Successful compilation and file copying.')
