<template>
  <demo-page title="Tab 标签页">
    <demo-block title="Tab 搭配 TabItem">
      <h-tab v-model="tabByItemValue">
        <h-tab-item label="标签1" name="label1"></h-tab-item>
        <h-tab-item label="标签2" name="label2"></h-tab-item>
        <h-tab-item label="标签3" name="label3"></h-tab-item>
      </h-tab>
    </demo-block>
    <demo-block title="Tab 搭配 TabPane">
      <h-tab v-model="tabByPaneValue">
        <h-tab-pane label="标签1" name="label1">
          <view class="h-demo-tab-pane-item">pane1</view>
        </h-tab-pane>
        <h-tab-pane label="标签2" name="label2">
          <view class="h-demo-tab-pane-item">pane2</view>
        </h-tab-pane>
        <h-tab-pane label="标签3" name="label3">
          <view class="h-demo-tab-pane-item">pane3</view>
        </h-tab-pane>
      </h-tab>
    </demo-block>
  </demo-page>
</template>

<script>

export default {
  data() {
    return {
      tabByItemValue: 'label1',
      tabByPaneValue: 'label1'
    }
  }
}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-tab) {
  @include e(pane-item) {
    // margin: 0 15px 15px 0;
    height: 200rpx;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100rpx;
  }
}
</style>
