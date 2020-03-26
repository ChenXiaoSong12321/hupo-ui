<template>
  <demo-page title="Tag 标签">
    <demo-block title="基础用法" padding>
      <demo-row>
        <h-tag class="h-demo-tag-item">标签</h-tag>
        <h-tag type="member" class="h-demo-tag-item">标签</h-tag>
      </demo-row>
    </demo-block>
    <demo-block title="空心样式" padding>
      <demo-row>
        <h-tag class="h-demo-tag-item" plain>标签</h-tag>
      </demo-row>
    </demo-block>
    <demo-block title="自定义颜色" padding>
      <demo-row>
        <h-tag class="h-demo-tag-item" plain color="#ffb82f">标签</h-tag>
        <h-tag class="h-demo-tag-item" color="#51B94A">标签</h-tag>
        <h-tag class="h-demo-tag-item" plain color="#008aff">标签</h-tag>
        <h-tag class="h-demo-tag-item" color="#F83543">标签</h-tag>
        <h-tag class="h-demo-tag-item" plain color="#666666">标签</h-tag>
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
@include b(demo-tag) {
  @include e(item) {
    margin: 0 15px 15px 0;
  }
}
</style>
