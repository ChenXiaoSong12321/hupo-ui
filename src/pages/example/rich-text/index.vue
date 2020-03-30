<template>
  <demo-page title="RichText 富文本">
    <demo-block title="基础用法" padding>
      <h-rich-text :document="document2"></h-rich-text>
    </demo-block>
    <demo-block title="懒加载" padding>
      <h-rich-text :document="document1" :renderNum="5"></h-rich-text>
    </demo-block>
  </demo-page>
</template>

<script>
import { document1 } from './document'
export default {
  data() {
    return {
      document1: document1,
      document2: '<p style=\"color: rgb(102, 102, 102);\">支持懒加载，通过 renderNum 控制每次加载的节点个数</p><p style=\"color: rgb(102, 102, 102);\">支持腾讯视频播放</p>'
    }
  }
}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-tag) {
  @include e(item) {
    margin: 0 15px 15px 0;
  }
}
</style>
