export default {
  props: {
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    upperThreshold: {
      type: Number,
      default: 50
    },
    lowerThreshold: {
      type: Number,
      default: 50
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    scrollLeft: {
      type: Number,
      default: 0
    },
    scrollIntoView: {
      type: String,
      default: ''
    },
    scrollWithAnimation: {
      type: Boolean,
      default: false
    },
    enableBackToTop: {
      type: Boolean,
      default: false
    },
    showScrollbar: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: -1
    },
    styles: {
      type: Object,
      default() {
        return {}
      }
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  methods: {
    scrolltoupper(event) {
      this.$emit('scrolltoupper', event)
    },
    scrolltolower(event) {
      this.$emit('scrolltolower', event)
    },
    scroll(event) {
      this.$emit('scroll', event)
    }
  }
}
