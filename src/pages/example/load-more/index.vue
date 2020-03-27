<template>
  <demo-page title="LoadMore 加载更多">
    <demo-block title="基础用法" padding>
      <h-load-more></h-load-more>
    </demo-block>
    <demo-block title="加载状态" padding>
      <h-load-more :loading="loading1"></h-load-more>
    </demo-block>
    <demo-block title="自定义 slogen" padding>
      <h-load-more>
        <view slot="slogen" class="h-demo-load-more-custom-slogen">custom slogen</view>
      </h-load-more>
    </demo-block>
  </demo-page>
</template>

<script>

export default {
  mounted() {
    // setTimeout(() => {
    //   this.loading1 = false
    // }, 2000)
  },
  data() {
    return {
      loading1: true
    }
  }
}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-load-more) {
  @include e(custom-slogen) {
    height: 40rpx;
    background-color: cornflowerblue;
    width: 750rpx;
    text-align: center;
  }
}
</style>
