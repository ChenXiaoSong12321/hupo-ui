export default {
  props: {
    mask: {
      type: Boolean,
      default: true
    },
    overlay: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 300
    },
    position: {
      type: String,
      default: 'center'
    },
    styles: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    onclose() {
      this.$emit('onclose')
    }
  }
}
