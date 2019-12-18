<template>
  <view
    v-if="visible"
    class="h-popup-manager"
    :class="[`${visible ? 'h-popup-manager--show' : '' }`,`h-popup-manager--${mask ? 'full' : 'none'}`,`h-popup-manager--${position}`]"
    :style="[`top: ${caculateTop}rpx`, `bottom: ${caculateBottom}rpx`]"
  >
    <view
      v-if="mask"
      class="h-popup-manager-mask is-transition"
      :class="transitionIn ? 'is-in' : 'is-leave'"
      :style="[`z-index: ${zIndex}`]"
      @tap.stop="closeevent"
      @touchmove.stop="empty"
    ></view>
    <!-- c-catch禁止事件冒泡 -->
    <view
      class="h-popup-manager-content is-transition"
      :class="[`${transitionIn ? 'is-in' : 'is-leave'}`,`h-popup-manager-content--${position || 'center'}`]"
      :style="[`z-index: ${zIndex+1}`, `${top ? top + 'rpx' : ''}`, `${bottom ? bottom + 'rpx' : ''}`, `${left ? left + 'rpx' : ''}`, `${right ? right + 'rpx' : ''}`]"
      @tap="closeevent"
    >
      <view @tap="empty">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script>
let zindexManager = 1000
export default {
  name: 'h-popup-manager',
  props: {
    mask: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'center'
    },
    top: {
      type: [String, Number],
      default: 0
    },
    left: {
      type: [String, Number],
      default: 0
    },
    bottom: {
      type: [String, Number],
      default: 0
    },
    right: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      caculateTop: 0,
      caculateBottom: 0,
      transitionIn: false,
      visible: false,
      zIndex: 1000
    }
  },
  watch: {
    show() {
      this.toggle()
    }
  },
  mounted() {
    this.caculateTop = this._calcTop(0)
    this.caculateBottom = this._calcBottom(0)
    this.toggle()
  },
  methods: {
    toggle() {
      this.show ? this.showPopup() : this.hidePopup()
    },
    closeevent() {
      this.$emit('onclose')
    },
    showPopup() {
      // #ifdef H5
      document.body.appendChild(this.$el)
      // #endif
      zindexManager = zindexManager + 2
      this.zIndex = zindexManager
      this.visible = true
      this._setTimeout(() => {
        this.transitionIn = true
      }, 50)
    },
    hidePopup() {
      this.transitionIn = false
      this._setTimeout(() => {
        this.visible = false
        // #ifdef H5
        this.$el.parentNode.removeChild(this.$el)
        // #endif
      }, 300)
    },
    empty() {

    }
  }
}
</script>

<style lang="scss">
@import "./h-popup-manager.scss";
</style>
