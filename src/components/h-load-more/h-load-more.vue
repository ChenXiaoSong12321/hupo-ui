<template>
  <view class="h-loadmore">
    <view v-show="loading">
      <view class="h-loadmore-loading"></view>
      <view class="h-loadmore-tips">加载中...</view>
    </view>
    <view class="h-loadmore-nodata" v-show="!loading && slogen">
      <block v-if="$slots.slogen">
        <slot name="slogen"></slot>
      </block>
      <block v-else>
        <image class="h-loadmore-image" :src="nodata" mode="widthFix"></image>
      </block>
    </view>
  </view>
</template>

<script>
export default {
  name: 'h-load-more',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    slogen: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      nodata: require('./nodata.png')
    }
  }
}
</script>

<style lang="scss">
@import "./h-load-more.scss";
</style>
