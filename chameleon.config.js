
//设置静态资源的线上路径
const publicPath = 'https://beatles-chameleon.github.io/cml-ui/dist';
//设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';

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
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix,
      hash: false
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

