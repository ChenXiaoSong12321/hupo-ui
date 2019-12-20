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
      status: '',
      loaded: false
    }
  },
  mounted() {
    uni.setNavigationBarTitle({
      title: this.title
    })
    this.initNavigation()
    promise.delay(100).then(() => {
      this.loaded = true
    })
    this.$on('toggle', (options = {}) => {
      Object.keys(options).forEach(key => {
        this[key] = options[key]
      })
    })
    this.$on('emit-event', name => {
      this.$emit(name)
    })
    // #ifdef H5
    this._getSystemInfo().then(system => {
      const onScroll = () => {
        const scollTop = document.documentElement.scrollTop
        const scrollHeight = document.documentElement.scrollHeight
        const documentHeight = system.windowHeight
        if (scollTop + documentHeight + 100 > scrollHeight) {
          this.$emit('pullup')
        }
      }
      window.onscroll = debounce(onScroll, 100)
    })
    // #endif

    this.$on('onshow', () => {
      this.initNavigation()
    })
  },
  onPageShow() {
    console.log(this)
    this.initNavigation()
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
