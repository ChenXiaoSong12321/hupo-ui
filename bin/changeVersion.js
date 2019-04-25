const fs = require('fs')
let hupoUiPackagePath = '../package/package.json'
let hupoUiPackage = require(hupoUiPackagePath)
let version = process.argv.splice(2)[0]
if(version){
  hupoUiPackage.version = version
  fs.writeFile(hupoUiPackagePath, JSON.stringify(hupoUiPackage,null,2), function(err){
    err?console.log(err):console.log(`change version success`)
  })
}
