const path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  transpileDependencies: ['@hupo'],
  productionSourceMap: false,
  chainWebpack: config => {
    config.module.rule('images').use('url-loader')
      .loader('url-loader').tap(options => {
        options.limit = 100
        return options
      })
    config.resolve.alias
      .set('@hupo/ui', resolve('src'))
  }
}
