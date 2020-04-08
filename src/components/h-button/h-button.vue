<template>
  <block>
    <!-- #ifdef MP-ALIPAY -->
    <button
      type="keng"
      class="h-button"
      v-if="stateClass"
      hover-class="h-button--active"
      :class="stateClass"
      :open-type="openType"
      :style="customStyle"
      @tap="handleTap"
      @contact="contact"
      @getuserinfo="getuserinfo"
      @getphonenumber="getphonenumber"
      @error="error"
      @opensetting="opensetting"
    >
      <slot></slot>
    </button>
    <!-- #endif -->
    <!-- #ifdef MP-TOUTIAO -->
    <button
      type="keng"
      class="h-button"
      v-if="stateClass"
      :class="stateClass"
      :open-type="openType"
      :style="customStyle"
      @tap="handleTap"
      @contact="contact"
      @getuserinfo="getuserinfo"
      @getphonenumber="getphonenumber"
      @error="error"
      @opensetting="opensetting"
    >
      <slot></slot>
    </button>
    <!-- #endif -->
    <!--  #ifndef (H5 || MP-ALIPAY || MP-TOUTIAO) -->
    <button
      type="keng"
      class="h-button"
      :class="stateClass"
      :open-type="openType"
      :style="customStyle"
      @tap="handleTap"
      @contact="contact"
      @getuserinfo="getuserinfo"
      @getphonenumber="getphonenumber"
      @error="error"
      @opensetting="opensetting"
    >
      <slot></slot>
    </button>
    <!--  #endif -->

    <!--  #ifdef H5 -->
    <view class="h-button" :class="stateClass" :style="customStyle" @tap="handleTap">
      <slot></slot>
    </view>
    <!--  #endif -->
  </block>
</template>

<script>
import HButtonMixins from './h-button.mixins.js'
export default {
  name: 'h-button',
  mixins: [HButtonMixins],
  methods: {
    getuserinfo(e) {
      this.btnEmit('getuserinfo', e.detail)
    },
    contact(e) {
      this.btnEmit('contact', e.detail)
    },
    getphonenumber(e) {
      this.btnEmit('getphonenumber', e.detail)
    },
    error(e) {
      this.btnEmit('error', e.detail)
    },
    opensetting(e) {
      this.btnEmit('opensetting', e.detail)
    },
    handleTap(e) {
      const { disabled, openType } = this
      if (disabled || openType) return
      this.btnEmit('onclick', e.detail)
    }
  }
}
</script>

<style lang="scss">
@import './h-button.scss';
</style>
