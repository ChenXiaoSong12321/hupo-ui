<template>
  <view class="h-image">
    <block v-if="status == 'load-complete'">
      <view class="h-image-loaded">
        <image class="h-image-loaded-image" :src="url" :mode="mode"></image>
      </view>
    </block>
    <block v-else-if="status == 'load-fail' || status == 'load-refresh'">
      <view class="h-image-load-fail" @tap="reloadImage">
        <block v-if="$slots.error">
          <slot name="error"></slot>
        </block>
        <block v-else-if="status == 'load-refresh'">
          <h-icon name="refresh" :styles="{'fontSize':'40rpx'}"></h-icon>
        </block>
        <block v-else>
          <h-icon name="img-load-error" :styles="{'fontSize':'40rpx'}"></h-icon>
        </block>
      </view>
    </block>
    <block v-else>
      <view class="h-image-loading" :class="[`h-image-loading--${mode}`]">
        <block v-if="$slots.loading">
          <slot name="loading"></slot>
        </block>
        <block v-else>
          <image class="h-image-loading-image" :src="placeholder" mode="widthFix"></image>
        </block>
      </view>
      <!-- 隐藏的image，用于隐士加载 -->
      <!-- #ifndef MP-ALIPAY -->
      <image
        class="h-image-hidden"
        :lazy-load="lazyLoad"
        :src="url"
        :mode="mode"
        @load="__imageOnLoad"
        @error="__imageOnLoadError"
      ></image>
      <!-- #endif -->
      <!-- #ifdef MP-ALIPAY -->
      <image
        class="h-image-hidden"
        :src="url"
        :mode="mode"
        @load="__imageOnLoad"
        @error="__imageOnLoadError"
      ></image>
      <!-- #endif -->
    </block>
  </view>
</template>

<script>
import { url } from '@hupo/core'
export default {
  name: 'h-image',
  props: {
    src: {
      type: String,
      default: ''
    },
    mode: {
      type: String,
      default: 'scaleToFill'
    },
    lazyLoad: {
      type: Boolean,
      default: true
    },
    reload: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: require('./assets/images/image-load-background.png')
    }
  },
  data() {
    return {
      url: '',
      i: 0,
      status: 'loading'
    }
  },
  watch: {
    src() {
      this.init()
    }
  },
  mounted() {
    this.init()
  },
  onPageShow() {
    if (this.status == 'load-fail') {
      this.status = 'loading'
      this.reloadImage()
    }
  },
  methods: {
    async init() {
      if (!this.src) return
      const data = await uni.getNetworkType()
      if (data.networkType == 'none') {
        this.status = this.reload ? 'load-refresh' : 'load-fail'
      } else {
        this.status = 'loading'
        this.url = this.src
      }
    },
    __imageOnLoad($event) {
      this.status = 'load-complete'
      this.$emit('load', $event)
    },
    __imageOnLoadError($event) {
      this.status = this.reload ? 'load-refresh' : 'load-fail'
      this.$emit('error', $event)
    },
    reloadImage() {
      if (this.status == 'load-complete' || this.status == 'load-fail') return false
      this.url = url.addUrlParam({ i: this.i }, this.src)
      this.i++
      this.status = 'loading'
    }
  }
}

</script>

<style lang="scss">
@import "./h-image.scss";
</style>
