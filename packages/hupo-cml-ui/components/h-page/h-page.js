import cml from 'chameleon-api'
import { wxTools, channelInterface, viewport } from '@hupo/core'
import debounce from 'lodash.debounce'
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    loadmore: {
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
      return `${this.fixed ? 'min-' : ''}height: ${this.viewportHeight}cpx;`
    }
  },
  watch: {
    title(val) {
      this.selfTitle = val
    },
    type() {
      this.initNavigation()
    }
  },
  data: {
    navbarLoading: false,
    viewport,
    viewportHeight: 0,
    status: '',
    selfTitle: ''
  },
  async created() {
    this.selfTitle = this.title
    this.initNavigation()
    const system = await cml.getSystemInfo()
    this.viewportHeight = system.viewportHeight
  },
  mounted() {
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
      const documentHeight = cml.cpx2px(this.viewportHeight)
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
      channelInterface({
        WX_MINI_PROGRAM: () => {
          wxTools.setNavigationBarColor({
            frontColor: this.type === 'default' ? '#000000' : '#ffffff',
            backgroundColor: this.type === 'default' ? '#fafafa' : '#dd392e'
          })
        }
      })
    }
  }
}
