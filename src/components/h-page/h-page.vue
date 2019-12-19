<template>
  <view class="h-page" :class="[`h-page--${background}`, `${this.fixed ? '' : 'is-disabled'}`]">
    <view class="h-page-popup">
      <h-dialog></h-dialog>
      <h-toast></h-toast>
    </view>
    <h-navbar
      :type="type"
      :loading="navbarLoading"
      :title="title"
      :showHomeIcon="showHomeIcon"
      :fixed="fixed"
    ></h-navbar>
    <view class="h-page-loading" v-if="loading || !loaded">
      <h-load-more loading></h-load-more>
    </view>
    <view class="h-page-container" :class="[(disabled || !fixed) ? 'is-disabled' : '']" v-else>
      <slot></slot>
    </view>
    <view
      class="h-page-bottom"
      v-if="viewport.isAllScreen"
      :style="{height: `${viewport.bottomHeight}rpx`}"
    >
      <view class="h-page-bottom-fixed" :style="{height: `${viewport.bottomHeight}rpx`}"></view>
    </view>
  </view>
</template>

<script>
import HPage from './h-page.js'
export default HPage

</script>

<style lang="scss">
@import "./h-page.scss";
</style>
