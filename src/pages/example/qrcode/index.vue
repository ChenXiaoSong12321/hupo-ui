<template>
  <demo-page title="Qrcode 二维码">
    <demo-block title="基础用法" padding>
      <demo-row>
        <h-qrcode type="member" :size="200" :value="value" class="h-demo-qrcode-item"></h-qrcode>
      </demo-row>
    </demo-block>
    <demo-block title="自定义大小" padding>
      <demo-row>
        <h-qrcode type="member" :size="100" :value="value" class="h-demo-qrcode-item"></h-qrcode>
        <h-qrcode type="member" :size="200" :value="value" class="h-demo-qrcode-item"></h-qrcode>
        <h-qrcode type="member" :size="300" :value="value" class="h-demo-qrcode-item"></h-qrcode>
      </demo-row>
    </demo-block>
    <demo-block title="自定义颜色" padding>
      <demo-row>
        <h-qrcode
          type="member"
          :size="200"
          :value="value"
          background="#999999"
          foreground="#f35367"
          pdground="#008aff"
          class="h-demo-qrcode-item"
        ></h-qrcode>
      </demo-row>
    </demo-block>
    <demo-block title="二维码图标" padding>
      <demo-row>
        <h-qrcode
          type="member"
          :size="200"
          :iconSize="20"
          :value="value"
          :icon="icon"
          class="h-demo-qrcode-item"
        ></h-qrcode>
      </demo-row>
    </demo-block>
  </demo-page>
</template>

<script>

export default {
  data() {
    return {
      value: 'https://github.com/ChenXiaoSong12321/hupo-ui/tree/2.0.0-uni-app',
      icon: require('../../images/logo.png')
    }
  }
}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-qrcode) {
  @include e(item) {
    margin: 0 15px 15px 0;
  }
}
</style>
