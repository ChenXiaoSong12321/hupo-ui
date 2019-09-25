const path = require('path')
// 设置静态资源的线上路径
const publicPath = 'https://beatles-chameleon.github.io/cml-ui/dist'
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com'
cml.config.merge({
  cmlNpm: [
  ],
  platforms: ['web', 'wx'],
  baseStyle: {
    web: false,
    wx: false
  },
  check: {
    enable: false
  },
  cmlComponents: [
  ],
  buildInfo: {
    wxAppId: 'wx4db830f3098a9a11',
    wxEntryPage: ''
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
  },
  babelPath: [path.resolve(__dirname, `node_modules`)]
})

cml.utils.plugin('webpackConfig', function({ type, media, webpackConfig }, cb) {
  const findRule = test => {
    let rules
    webpackConfig.module.rules.some((item, index) => {
      if (new RegExp(item.test).test(test)) {
        rules = { rule: item, index }
        return true
      }
    })
    return rules
  }
  const alias = {
    '@core': path.join(__dirname, './src/core'),
    '~@output': path.join(__dirname, './src/assets/scss/_output.scss')
  }
  webpackConfig.resolve.alias = { ...webpackConfig.resolve.alias, ...alias }
  // 支持scss
  const cmlFile = findRule('.cml')
  if (cmlFile) {
    cmlFile.rule.use = cmlFile.rule.use.map(use => {
      use.options.loaders.scss = JSON.parse(JSON.stringify(use.options.loaders.less)).map(item => {
        if (item.loader === 'less-loader') {
          item.loader = 'sass-loader'
          if (webpackConfig.resolve.alias['~@output'])item.options.data = '@import "~@output";'
          else console.warn('请添加 ~@output 别名指向 _output.scss 文件')
        }
        return item
      })
      return use
    })
    webpackConfig.module.rules[cmlFile.index] = cmlFile.rule
  }

  if (type === 'wx') {
    webpackConfig.plugins.push({
      apply(compiler) {
        compiler.plugin('emit', function(compilation, callback) {
          const target = 'components/h-rich-text/components/video/h-rich-text-parse-video.json' // 改这里
          const obj = JSON.parse(compilation.assets[target]._value)
          obj.usingComponents['txv-video'] = 'plugin://tencentvideo/video'
          compilation.assets[target]._value = JSON.stringify(obj, '', 4)
          // console.log(compilation.assets)
          return callback()
        })
      }
    })
  }

  cb({
    type,
    media,
    webpackConfig
  })
})

