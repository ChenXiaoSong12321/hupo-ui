<template>
  <demo-page title="Page 页面框架">
    <demo-block
      title="h-page 组件自带 h-dialog h-toast h-load-more h-navbar 组件，并兼容刘海屏、IphoneX底部"
      padding
    ></demo-block>
  </demo-page>
</template>

<script>

export default {

}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-tag) {
  @include e(item) {
    margin: 0 15px 15px 0;
  }
}
</style>
