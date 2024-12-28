const fs = require("fs");
const path = require("path");

const files = fs.readdirSync("./src").filter((file) => file.endsWith(".css"));
const compiled = files
  .map((file) => fs.readFileSync(path.join("./src", file), "utf8"))
  .join("\n");

fs.writeFileSync("base.css", compiled);
console.log("CSS files are successfully compiled into base.css");
