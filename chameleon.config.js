
//设置静态资源的线上路径
const publicPath = 'https://beatles-chameleon.github.io/cml-ui/dist';
//设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';
var fs = require('fs');
cml.config.merge({
  cmlNpm: [
  ],
  platforms: ["web","wx"],
  cmlComponents: [
  ],
  buildInfo: {
    wxAppId: '123456',
    wxEntryPage: ''
  },
  baseStyle: {
    web: false,
    wx: false
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      hash: true,
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  }
})

cml.utils.plugin('webpackConfig', function({ type, media, webpackConfig }, cb) {
  const findRule = test => {
    let rules
    webpackConfig.module.rules.some((item, index) => {
      if (new RegExp(item.test).test(test)){
        rules = {rule:item, index}
        return true
      } 
    })
    return rules
  }

  // 支持scss
  const cmlFile = findRule('.cml')
  if(cmlFile){
    cmlFile.rule.use = cmlFile.rule.use.map(use => {
      use.options.loaders.scss = JSON.parse(JSON.stringify(use.options.loaders.less)).map(item => {
        if (item.loader === 'less-loader') item.loader = 'sass-loader'
        return item
      })
      return use
    })
    webpackConfig.module.rules[cmlFile.index] = cmlFile.rule
  }

  cb({
    type,
    media,
    webpackConfig
  })
})


