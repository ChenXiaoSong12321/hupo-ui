import scrollMixin from '../h-scroll/h-scroll.mixin'
export default {
  name: 'h-pagination',
  mixins: [scrollMixin],
  props: {
    step: {
      type: [String, Number],
      default: 1
    },
    pages: {
      type: [String, Number],
      default: 999999
    },
    loading: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pageIndex: 1
    }
  },
  mounted() {
    this.onPullup()
  },
  methods: {
    onPullup() {
      if (!this.loading && this.pageIndex <= this.pages) {
        this.$emit('pullup', {
          step: this.step,
          pageIndex: this.pageIndex
        })
        this.pageIndex += 1
      }
    }
  }
}
