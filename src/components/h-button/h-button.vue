<template>
  <block>
    <!--  #ifdef MP-WEIXIN -->
    <form
      @submit="handleFormSubmit"
      report-submit
      class="h-button-form"
      :class="{'h-button-form--none': type === 'none','h-button-form--full': size === 'full'}"
    >
      <button
        type="keng"
        :form-type="openType ? '' : 'submit'"
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
    </form>
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
import { global } from '@hupo/core'
global._buttonFormIds = []
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
    },
    // #ifdef MP-WEIXIN
    handleFormSubmit(event) {
      const formId = event.detail.formId || ''
      if (formId !== 'the formId is a mock one') {
        global._buttonFormIds.push(formId)
      }
    }
    // #endif
  }
}
</script>

<style lang="scss">
@import "./h-button.scss";
</style>
