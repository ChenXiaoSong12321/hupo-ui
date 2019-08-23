import cml from 'chameleon-api'
import defaultData from '../../../../core/viewport/defaultData'
import calculate from '../../../../core/viewport/calculate'
import { INVISIABLE } from './const'
export default {
  props: {
    height: {
      type: [String, Number],
      default: -1
    },
    topThreshold: {
      type: Number,
      default: 80
    },
    bottomThreshold: {
      type: Number,
      default: 120
    },
    pulldown: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data: {
    viewport: defaultData,
    status: INVISIABLE
  },

  computed: {
    topThreshold_px() {
      return parseInt(cml.cpx2px(this.topThreshold))
    },
    bottomThreshold_px() {
      return parseInt(cml.cpx2px(this.bottomThreshold))
    },
    scrollHeight() {
      if (this.height == -1) {
        const viewportHeight = cml.cpx2px(this.viewport.viewportHeight)
        return Math.floor(viewportHeight - this.viewport.headerHeight - this.viewport.bottomHeight)
      } else {
        return cml.cpx2px(parseInt(this.height))
      }
    }
  },

  async created() {
    const data = await calculate()
    this.viewport = data
  }
}
