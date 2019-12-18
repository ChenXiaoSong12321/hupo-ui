import { viewport, promise } from '@hupo/core'
import debounce from 'lodash.debounce'
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '琥珀亲子'
    },
    showHomeIcon: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'default'
    },
    background: {
      type: String,
      default: 'BgC3'
    },
    fixed: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    heightStyle() {
      return `${this.fixed ? 'min-' : ''}height: 100vh;`
    }
  },
  watch: {
    title(val) {
      uni.setNavigationBarTitle({
        title: val
      })
    },
    type() {
      this.initNavigation()
    }
  },
  data() {
    return {
      navbarLoading: false,
      viewport,
      viewportHeight: 0,
      status: '',
      loaded: false
    }
  },
  mounted() {
    uni.setNavigationBarTitle({
      title: this.title
    })
    this.initNavigation()
    this._getSystemInfo().then(system => {
      this.viewportHeight = system.viewportHeight
    })
    promise.delay(500).then(() => {
      this.loaded = true
    })
    this._on('toggleLoading', (options = {}) => {
      Object.keys(options).forEach(key => {
        this[key] = options[key]
      })
    })
    this._on('pulldown', () => {
      this.$cmlEmit('pulldown')
    })
    this._on('pullup', () => {
      this.$cmlEmit('pullup')
    })
    const onScroll = () => {
      const scollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const documentHeight = cml.rpx2px(this.viewportHeight)
      if (scollTop + documentHeight + 100 > scrollHeight) {
        this.$cmlEmit('pullup')
      }
    }
    channelInterface({
      H5() {
        window.onscroll = debounce(onScroll, 100)
      },
      WX_H5() {
        window.onscroll = debounce(onScroll, 100)
      }
    })

    this._on('onShow', () => {
      this.initNavigation()
      this.$cmlEmit('onshow')
    })
    this.$cmlEmit('onshow')
  },
  methods: {
    initNavigation() {
      // #ifdef MP-WEIXIN
      uni.setNavigationBarColor({
        frontColor: this.type === 'default' ? '#000000' : '#ffffff',
        backgroundColor: this.type === 'default' ? '#fafafa' : '#dd392e'
      })
      // #endif
    }
  }
}
