<template>
  <view
    v-if="isShow"
    class="h-popup-base"
    :style="{
      zIndex: zIndex,
      top: `${caculateTop}rpx`,
      bottom: `${caculateBottom}rpx`
    }"
  >
    <h-transition v-if="mask" name="fade" :duration="duration" :show="show">
      <view class="h-popup-base-mask" @tap.stop="onclose" @touchmove.stop="empty"></view>
    </h-transition>
    <h-transition
      :name="position === 'center' ? 'fade' : 'slide-' + position"
      :duration="duration"
      :styles="computedStyles"
      :show="show"
      @change="change"
    >
      <view class="h-popup-base-content" @tap.stop="empty">
        <slot></slot>
      </view>
    </h-transition>
  </view>
</template>
<script>
import popupMixin from './h-popup-base.mixin'
let zIndexBase = 1000
export default {
  name: 'h-popup-base',
  mixins: [popupMixin],
  data() {
    return {
      isShow: false,
      caculateTop: 0,
      caculateBottom: 0,
      zIndex: zIndexBase + 0
    }
  },
  computed: {
    computedStyles() {
      const styles = {
        position: 'absolute',
        zIndex: this.zIndex + 2,
        ...this.styles
      }
      switch (this.position) {
        case 'center':
          styles.top = '50%'
          styles.left = '50%'
          styles.transform = 'translate(-50%,-50%)'
          break
        case 'left':
          styles.left = `${this.offset}rpx`
          styles.top = `0`
          styles.bottom = `0`
          break
        case 'right':
          styles.right = `${this.offset}rpx`
          styles.top = `0`
          styles.bottom = `0`
          break
        case 'top':
          styles.top = `${this.offset}rpx`
          styles.left = '0'
          styles.right = '0'
          break
        case 'bottom':
          styles.bottom = `${this.offset}rpx`
          styles.left = '0'
          styles.right = '0'
          break
      }
      return styles
    }
  },
  watch: {
    show: {
      handler: 'toggle',
      immediate: true
    }
  },
  mounted() {
    this.caculateTop = this._calcTop(0)
    this.caculateBottom = this._calcBottom(0)
  },
  methods: {
    toggle(val) {
      val && this.showPopup()
    },
    showPopup() {
      // #ifdef H5
      document.body.appendChild(this.$el)
      // #endif
      zIndexBase += 1
      this.zIndex = zIndexBase
      this.isShow = true
    },
    change(val) {
      // 关闭
      this.isShow = val
      if (!val) {
        // #ifdef H5
        this.$el.parentNode.removeChild(this.$el)
        // #endif
      }
    },
    empty() {

    }
  }
}
</script>

<style lang="scss">
@import "./h-popup-base.scss";
</style>
