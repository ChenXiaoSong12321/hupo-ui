<template>
  <scroll-view
    class="h-scroll"
    :style="computedStyle"
    :scrollX="scrollX"
    :scrollY="scrollY"
    :upperThreshold="upperThreshold"
    :lowerThreshold="lowerThreshold"
    :scrollTop="scrollTop"
    :scrollLeft="scrollLeft"
    :scrollIntoView="scrollIntoView"
    :scrollWithAnimation="scrollWithAnimation"
    :enableBackToTop="enableBackToTop"
    :showScrollbar="showScrollbar"
    scroll-anchoring
    @scrolltoupper="scrolltoupper"
    @scroll="scroll"
    @scrolltolower="onPullup"
  >
    <slot></slot>
  </scroll-view>
</template>
<script>
import { viewport } from '@hupo/core'
import debounce from 'lodash.debounce'
import scrollMixin from './h-scroll.mixin'
export default {
  name: 'h-scroll',
  mixins: [scrollMixin],
  data() {
    return {
      viewportHeight: 0
    }
  },
  computed: {
    computedStyle() {
      return this.transformStyle({
        ...this.styles,
        height: this.height == -1 ? `${this.viewportHeight - (viewport.bottomHeight + viewport.headerHeight) - this.offset}rpx` : this.height + 'rpx;'
      })
    }
  },
  async created() {
    const system = await this._getSystemInfo()
    this.viewportHeight = viewport.px2rpx(system.windowHeight)
  },
  methods: {
    onPullup: debounce(function(event) {
      this.$emit('pullup', event)
      this.scrolltolower()
    }, 100)
  }
}
</script>
<style lang="scss">
</style>
