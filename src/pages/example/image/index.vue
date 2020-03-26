<template>
  <demo-page title="Image 图片">
    <demo-block title="基本用法" padding>
      <demo-row>
        <view class="h-demo-image-item">
          <h-image :src="src" class="h-demo-image-item-image" style="width: 100px; height: 100px;"></h-image>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="填充模式（兼容h5）" padding>
      <demo-row>
        <view class="h-demo-image-item">
          <h-image
            :src="src"
            mode="aspectFit"
            class="h-demo-image-item-image"
            style="width: 100px; height: 100px;"
          ></h-image>
          <view class="h-demo-image-item-text">aspectFit</view>
        </view>
        <view class="h-demo-image-item">
          <h-image
            :src="src"
            mode="aspectFill"
            class="h-demo-image-item-image"
            style="width: 100px; height: 100px;"
          ></h-image>
          <view class="h-demo-image-item-text">aspectFill</view>
        </view>
        <view class="h-demo-image-item">
          <h-image
            :src="src"
            mode="scaleToFill"
            class="h-demo-image-item-image"
            style="width: 100px; height: 100px;"
          ></h-image>
          <view class="h-demo-image-item-text">scaleToFill</view>
        </view>
        <view class="h-demo-image-item">
          <h-image :src="src" mode="widthFix" class="h-demo-image-item-image" style="width: 100px;"></h-image>
          <view class="h-demo-image-item-text">widthFix</view>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="加载中提示" padding>
      <demo-row>
        <view class="h-demo-image-item">
          <h-image class="h-demo-image-item-image" style="width: 100px; height: 100px;"></h-image>
          <view class="h-demo-image-item-text">默认提示</view>
        </view>
        <view class="h-demo-image-item">
          <h-image class="h-demo-image-item-image" style="width: 100px; height: 100px;">
            <h-loading slot="loading"></h-loading>
          </h-image>
          <view class="h-demo-image-item-text">自定义提示</view>
        </view>
        <view class="h-demo-image-item">
          <view style="width: 100px; height: 100px;"></view>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="加载失败提示" padding>
      <demo-row>
        <view class="h-demo-image-item">
          <h-image src="x" class="h-demo-image-item-image" style="width: 100px; height: 100px;"></h-image>
          <view class="h-demo-image-item-text">默认提示</view>
        </view>
        <view class="h-demo-image-item">
          <h-image
            src="x"
            reload
            class="h-demo-image-item-image"
            style="width: 100px; height: 100px;"
          ></h-image>
          <view class="h-demo-image-item-text">点击重载</view>
        </view>
        <view class="h-demo-image-item">
          <h-image src="x" class="h-demo-image-item-image" style="width: 100px; height: 100px;">
            <text slot="error">加载失败</text>
          </h-image>
          <view class="h-demo-image-item-text">自定义提示</view>
        </view>
      </demo-row>
    </demo-block>
  </demo-page>
</template>

<script>
export default {
  data() {
    return {
      src: 'https://img.yzcdn.cn/vant/cat.jpeg'
    }
  }
}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-image) {
  @include e(item) {
    display: flex;
    flex-direction: column;
    color: #666;
    margin-bottom: 40rpx;
  }
  @include e(item-image) {
    background: #eee;
  }
  @include e(item-text) {
    color: #333;
    font-size: 22rpx;
    text-align: center;
    margin-top: 20rpx;
  }
}
</style>
