<template>
  <demo-page title="Progess 进度条">
    <demo-block title="基础用法" padding>
      <demo-row>
        <view class="h-demo-progress-item">
          <h-progress percentage="30"></h-progress>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="自定义颜色" padding>
      <demo-row>
        <view class="h-demo-progress-item">
          <h-progress percentage="40" color="#008aff"></h-progress>
        </view>
        <view class="h-demo-progress-item">
          <h-progress percentage="50" color="#51B94A"></h-progress>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="自定义高度" padding>
      <demo-row>
        <view class="h-demo-progress-item">
          <h-progress percentage="60" height="30"></h-progress>
        </view>
      </demo-row>
    </demo-block>
  </demo-page>
</template>

<script>

export default {

}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-progress) {
  @include e(item) {
    flex: 1;
    padding: 15rpx;
  }
}
</style>
