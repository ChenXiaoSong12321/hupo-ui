import {
  moment,
  regeneratorRuntime,
  createComponent
} from '../../../../lib/index.js'
import {
  common,
  wxTools
} from '../../../../utils/index.js'

const currentComponent = createComponent({
  mixins: [common],
  properties: {
    src: {
      type: String,
      value: '',
      observer() {
        this.init()
      }
    },
    mode: {
      type: String,
      value: 'scaleToFill'
    },
    loadingHeight: {
      type: String,
      value: ''
    },
    lazyLoad: {
      type: Boolean,
      value: true
    },
    reload: {
      type: Boolean,
      value: false
    }
  },
  data: {
    show: false,
    url: '',
    i: 0,
    status: 'loading'
  },
  async ready() {
    this.init()
    if (this.data.lazyLoad) {
      await this.$relativeToViewport('.humall-image')
    }
    this.setData({
      show: true
    })
  },
  methods: {
    async init() {
      if (!this.data.src) return
      const data = await wxTools.getNetworkType()
      if (data.networkType == 'none') {
        this.$setData({
          status: this.data.reload ? 'load-refresh' : 'load-fail'
        })
      } else {
        this.$setData({
          url: this.data.src
        })
        // this.timeout()
      }
    },
    reloadImage() {
      if (this.data.status == 'load-complete') return false
      let i = this.data.i
      this.$setData({
        url: this.addQs(this.data.src, {
          i
        }),
        i: i++,
        status: 'loading'
      })
    },
    // async timeout() {
    //   await this.delay(30000)
    //   if (this.data.status == 'load-complete') return false
    //   this.$setData({
    //     status: 'load-fail'
    //   })
    // },
    __imageOnLoad() {
      this.$setData({
        status: 'load-complete'
      })
      this.triggerEvent('load')
    },
    __imageOnLoadError(e) {
      this.$setData({
        status: this.data.reload ? 'load-refresh' : 'load-fail'
      })
      this.triggerEvent('error')
    }
  },
  pageLifetimes: {
    async show() {
      if (this.data.status == 'load-fail') {
        this.$setData({
          status: 'loading'
        })
        await this.$relativeToViewport('.humall-image')
        this.reloadImage()
      }
    }
  }
})
Component(currentComponent)
