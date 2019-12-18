<template>
  <view class="h-navbar" v-if="viewport.headerHeight > 0">
    <view class="h-navbar-place" v-if="fixed" :style="[`height: ${viewport.headerHeight}rpx`]"></view>
    <view
      class="h-navbar-box"
      :class="[`h-navbar-box--${type}`, `${fixed ? 'is-fixed' : ''}`]"
      :style="[`height: ${viewport.capsuleHeight}rpx`, `paddingTop: ${viewport.statusBarHeight}rpx`]"
    >
      <view class="h-navbar-box-side">
        <!-- <slot name="left"></slot> -->
        <h-navbar-side-left
          class="h-navbar-box-side-full"
          :showHomeIcon="showHomeIcon"
          :type="type"
        ></h-navbar-side-left>
      </view>
      <view class="h-navbar-box-middle">
        <h-navbar-title :title="title" :loading="loading" :type="type"></h-navbar-title>
      </view>
      <view class="h-navbar-box-side">
        <!-- <slot name="right"></slot> -->
      </view>
    </view>
  </view>
</template>
<script>
import { viewport } from '@hupo/core'
import hNavbarSideLeft from './components/sideLeft/sideLeft'
import hNavbarTitle from './components/title/title'
export default {
  name: 'h-navbar',
  components: {
    hNavbarSideLeft,
    hNavbarTitle
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '琥珀亲子'
    },
    showHomeIcon: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'default'
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      viewport
    }
  }
}
</script>
<style lang="scss">
@import "./h-navbar.scss";
</style>
