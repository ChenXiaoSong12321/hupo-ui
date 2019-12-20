<template>
  <view class="h-loadmore-wrap">
    <view class="h-loadmore" v-show="loading">
      <view class="h-loadmore--loading"></view>
      <view class="h-loadmore-tips">加载中...</view>
    </view>
    <view class="h-loadmore h-loadmore--nodata" v-show="!loading && slogen">
      <image class="image" :src="nodata" mode="widthFix"></image>
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
