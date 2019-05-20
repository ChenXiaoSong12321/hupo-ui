import cml from "chameleon-api";
import defaultData from '../../../../core/viewport/defaultData'
import calculate from '../../../../core/viewport/calculate'
import { INVISIABLE } from './const'
export default class HScrollMixin{
  props = {
    flexible: {
      type: Boolean,
      default: true
    },
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
    loadMore: {
      type: Boolean,
      default: true
    }
  }

  data = {
    viewport: defaultData,
    status: INVISIABLE
  }

  computed = {
    topThreshold_px(){
      return parseInt(cml.cpx2px(this.topThreshold))
    },
    bottomThreshold_px(){
      return parseInt(cml.cpx2px(this.bottomThreshold))
    },
    scrollHeight() {
      const viewportHeight = cml.cpx2px(this.viewport.viewportHeight);
      return Math.floor( viewportHeight - this.viewport.headerHeight - this.viewport.bottomHeight );
    }
  }

  async created() {
    const data = await calculate()
    this.viewport = data
  }
}
