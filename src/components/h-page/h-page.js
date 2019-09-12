import defaultData from '../../core/viewport/defaultData'
import { wxTools, channelInterface, viewport } from '@hupo/core'
import cml from 'chameleon-api'
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
      if (this.fixed) return `min-height: ${this.viewport.viewportHeight}cpx;`
      else return `height: ${this.viewport.viewportHeight}cpx;`
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
    viewport: defaultData,
    status: '',
    selfTitle: ''
  },
  async created() {
    this.selfTitle = this.title
    this.initNavigation()
    const data = await viewport(cml)
    this.viewport = data
  },
  mounted() {
    this._on('toggleLoading', (options = {}) => {
      Object.keys(options).forEach(key => {
        this[key] = options[key]
      })
    })
  },
  methods: {
    initNavigation() {
      channelInterface({
        WX_MINI_PROGRAM() {
          wxTools.setNavigationBarColor({
            frontColor: this.type === 'default' ? '#000000' : '#ffffff',
            backgroundColor: this.type === 'default' ? '#fafafa' : '#dd392e'
          })
        }
      })
    }
  }
}
