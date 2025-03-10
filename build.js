const fs = require("fs")
const path = require("path")
const { transform, Features } = require("lightningcss")

// Configuration
const CONFIG = {
  INPUT_DIR: "./src",
  OUTPUT_DIR: "./dist",
  META_INFO: `/*
* @tfs-8/basecss v1.0.2
* MIT Licensed <https://opensource.org/license/MIT>
* Source Code on Github <https://github.com/MFM-347/BaseCSS>
*/\n\n`,
  FILES_MAP: {
    "a_vars.css": "vars.min.css",
    "b_reset.css": "reset.min.css",
    "c_type.css": "type.min.css",
    "d_utilities.css": "utilities.min.css",
    "e_components.css": "components.min.css",
    "f_scroll.css": "scroll.min.css",
  },
}

// Utility Functions
function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

function readFilesFromDirectory(dir, extension) {
  return fs.readdirSync(dir).filter((file) => file.endsWith(extension))
}

function compileCSS(filename, code, minify = false) {
  return transform({
    filename,
    code: Buffer.from(code),
    minify,
    include: Features.Colors | Features.FontFamilySystemUi | Features.ColorFunction,
    exclude: Features.VendorPrefixes,
  }).code
}

function writeFileWithMeta(filePath, content, meta = "") {
  fs.writeFileSync(filePath, meta + content)
}

function logFileSize(label, filePath, originalSize, fileSizes) {
  const size = fs.statSync(filePath).size
  fileSizes.push({
    File: label,
    "Original Size (bytes)": originalSize,
    "Minified Size (bytes)": size,
  })
}

// Main Build Process
function buildCSS() {
  console.log("\nBuilding...")

  ensureDirectoryExists(CONFIG.OUTPUT_DIR)

  const fileSizes = []
  const cssFiles = readFilesFromDirectory(CONFIG.INPUT_DIR, ".css")

  const combinedCSS = cssFiles
    .map((file) => fs.readFileSync(path.join(CONFIG.INPUT_DIR, file), "utf8"))
    .join("\n")

  const baseCSSPath = path.join(CONFIG.OUTPUT_DIR, "base.css")
  writeFileWithMeta(baseCSSPath, combinedCSS, CONFIG.META_INFO)
  logFileSize("base.css", baseCSSPath, Buffer.byteLength(combinedCSS), fileSizes)
  console.log("Created base.css")

  // Minify base.css into base.min.css
  const minifiedCSS = compileCSS("base.min.css", combinedCSS, true)
  const minBaseCSSPath = path.join(CONFIG.OUTPUT_DIR, "base.min.css")
  writeFileWithMeta(minBaseCSSPath, minifiedCSS, CONFIG.META_INFO)
  logFileSize("base.min.css", minBaseCSSPath, Buffer.byteLength(combinedCSS), fileSizes)
  console.log("Minified base.css to base.min.css")

  // Process individual files
  Object.entries(CONFIG.FILES_MAP).forEach(([inputName, outputName]) => {
    const srcPath = path.join(CONFIG.INPUT_DIR, inputName)
    const outPath = path.join(CONFIG.OUTPUT_DIR, outputName)

    if (!fs.existsSync(srcPath)) {
      console.error(`Warning: ${inputName} not found in ${CONFIG.INPUT_DIR}`)
      return
    }

    const cssContent = fs.readFileSync(srcPath, "utf8")
    const minified = compileCSS(outputName, cssContent, true)
    fs.writeFileSync(outPath, minified)
    logFileSize(outputName, outPath, Buffer.byteLength(cssContent), fileSizes)
    console.log(`Minified ${outputName}`)
  })

  // Log build summary
  console.log("\nBuild Summary:")
  console.table(fileSizes)
  console.log("\nSuccessful compilation, minification, and file copying.")
}

// Run the build process
buildCSS()
