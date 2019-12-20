const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  transpileDependencies: ['@hupo'],
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@hupo/ui', resolve('src'))
  }
}
