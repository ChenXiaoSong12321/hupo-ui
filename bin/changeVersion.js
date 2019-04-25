const fs = require('fs')
const path = require('path')
const hupoUiPackagePath = path.join(__dirname, '../package/package.json')
const hupoUiPackage = require(hupoUiPackagePath)
const version = process.env.v
if (version) {
  hupoUiPackage.version = version
  fs.writeFile(hupoUiPackagePath, JSON.stringify(hupoUiPackage, null, 2), function(err) {
    err ? console.log(err) : console.log(`change version success`)
  })
}
