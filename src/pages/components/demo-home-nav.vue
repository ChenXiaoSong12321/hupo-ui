<template>
  <view class="h-demo-home-nav">
    <view class="h-demo-home-nav-title">{{ group.groupName }}</view>
    <view class="h-demo-home-nav-group">
      <view
        v-for="item in group.list"
        :key="item.title"
        class="h-demo-home-nav-block"
        @tap="onClick('/pages/example' + item.path + '/index')"
      >
        {{ item.title }}
        <h-icon name="iconfanhuicopybeifen-copy" class="h-demo-home-nav-icon" />
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    group: {
      type: Object,
      required: true
    }
  },
  methods: {
    onClick(path) {
      uni.navigateTo({
        url: path
      })
    }
  }
}
</script>

<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-home-nav) {
  @include e(title) {
    margin: 24px 0 8px 16px;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
  @include e(block) {
    position: relative;
    display: flex;
    margin: 0 0 12px;
    padding-left: 20px;
    color: #323233;
    font-weight: 500;
    font-size: 14px;
    line-height: 40px;
    background: #f7f8fa;
    border-radius: 99px;
    transition: background 0.3s;
    @include pseudo(hover) {
      background: darken(#f7f8fa, 3%);
    }
    @include pseudo(active) {
      background: darken(#f7f8fa, 6%);
    }
  }
  @include e(icon) {
    position: absolute !important;
    right: 16px;
    color: rgb(182, 195, 210);
    font-weight: 900 !important;
    font-size: 20rpx;
  }
}
</style>
