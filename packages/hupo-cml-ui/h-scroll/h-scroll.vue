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
    @scrolltoupper="scrolltoupper"
    @scroll="scroll"
    @scrolltolower="onPullup"
  >
    <slot></slot>
  </scroll-view>
</template>
<script>
// import { viewport } from '@hupo/core'
import debounce from 'lodash.debounce'
import scrollMixin from './h-scroll.mixin'
export default {
  name: 'h-scroll',
  mixins: [scrollMixin],
  props: {
    styles: {
      type: Object,
      default() {
        return {}
      }
    },
    height: {
      type: Number,
      default: -1
    }
  },
  computed: {
    computedStyle() {
      return {
        ...this.styles,
        height: this.height == -1 ? '100%;' : this.height + 'rpx;'
      }
    }
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
