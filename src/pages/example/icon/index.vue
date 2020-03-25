<template>
  <h-page title="Icon 图标" fixed>
    <demo-block title="基本用法" padding>
      <demo-row>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="success"></h-icon>
          <view class="h-demo-icon-item-text">success</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="warning"></h-icon>
          <view class="h-demo-icon-item-text">warning</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="close"></h-icon>
          <view class="h-demo-icon-item-text">close</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="success-l"></h-icon>
          <view class="h-demo-icon-item-text">success-l</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="warning-l"></h-icon>
          <view class="h-demo-icon-item-text">warning-l</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="close-l"></h-icon>
          <view class="h-demo-icon-item-text">close-l</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="checkbox-disabled"></h-icon>
          <view class="h-demo-icon-item-text">checkbox-disabled</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="checkbox-l"></h-icon>
          <view class="h-demo-icon-item-text">checkbox-l</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="radio-disabled"></h-icon>
          <view class="h-demo-icon-item-text">radio-disabled</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="radio-l"></h-icon>
          <view class="h-demo-icon-item-text">radio-l</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="arrow-right"></h-icon>
          <view class="h-demo-icon-item-text">arrow-right</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="arrow-left"></h-icon>
          <view class="h-demo-icon-item-text">arrow-left</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="loading"></h-icon>
          <view class="h-demo-icon-item-text">loading</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="refresh"></h-icon>
          <view class="h-demo-icon-item-text">refresh</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="search"></h-icon>
          <view class="h-demo-icon-item-text">search</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="home"></h-icon>
          <view class="h-demo-icon-item-text">home</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="internet-errorr"></h-icon>
          <view class="h-demo-icon-item-text">internet-errorr</view>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" name="img-load-error"></h-icon>
          <view class="h-demo-icon-item-text">img-load-error</view>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="图标颜色" padding>
      <demo-row>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" style="color: #43C678" name="success"></h-icon>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" style="color: red" name="close"></h-icon>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="图标大小" padding>
      <demo-row>
        <view class="h-demo-icon-item">
          <h-icon
            class="h-demo-icon-item-icon"
            style="color: #43C678; font-size: 100rpx;"
            name="success"
          ></h-icon>
        </view>
        <view class="h-demo-icon-item">
          <h-icon class="h-demo-icon-item-icon" style="color: red; font-size: 80rpx;" name="close"></h-icon>
        </view>
        <view class="h-demo-icon-item">
          <h-icon
            class="h-demo-icon-item-icon"
            style="color: #FFBD3B; font-size: 60rpx;"
            name="warning"
          ></h-icon>
        </view>
      </demo-row>
    </demo-block>
  </h-page>
</template>

<script>
export default {

}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-icon) {
  @include e(item) {
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 160rpx;
    color: #666;
  }
  @include e(item-icon) {
    display: block;
    font-size: 50rpx;
  }
  @include e(item-text) {
    color: #333;
    font-size: 22rpx;
    text-align: center;
    margin-top: 20rpx;
  }
}
</style>
