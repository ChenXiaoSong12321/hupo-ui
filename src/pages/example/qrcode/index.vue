<template>
  <demo-page title="Qrcode 二维码">
    <demo-block title="基础用法" padding>
      <demo-row>
        <h-qrcode
          v-if="show.qrcode1"
          @result="result('2')"
          type="member"
          :size="200"
          :value="value"
          class="h-demo-qrcode-item"
        ></h-qrcode>
      </demo-row>
    </demo-block>
    <demo-block title="自定义大小" padding>
      <demo-row>
        <h-qrcode
          v-if="show.qrcode2"
          @result="result('3')"
          type="member"
          :size="100"
          :value="value"
          class="h-demo-qrcode-item"
        ></h-qrcode>
        <h-qrcode
          v-if="show.qrcode3"
          @result="result('4')"
          type="member"
          :size="200"
          :value="value"
          class="h-demo-qrcode-item"
        ></h-qrcode>
        <h-qrcode
          v-if="show.qrcode4"
          @result="result('5')"
          type="member"
          :size="300"
          :value="value"
          class="h-demo-qrcode-item"
        ></h-qrcode>
      </demo-row>
    </demo-block>
    <demo-block title="自定义颜色" padding>
      <demo-row>
        <h-qrcode
          v-if="show.qrcode5"
          @result="result('6')"
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
    <!-- #ifndef H5 -->
    <demo-block title="二维码图标" padding>
      <demo-row>
        <h-qrcode
          v-if="show.qrcode6"
          type="member"
          :size="200"
          :iconSize="20"
          :value="value"
          :icon="icon"
          class="h-demo-qrcode-item"
        ></h-qrcode>
      </demo-row>
    </demo-block>
    <!-- #endif -->
  </demo-page>
</template>

<script>

export default {
  data() {
    return {
      value: 'https://github.com/ChenXiaoSong12321/hupo-ui/tree/2.0.0-uni-app',
      icon: require('../../images/logo.png'),
      show: {
        qrcode1: true,
        qrcode2: false,
        qrcode3: false,
        qrcode4: false,
        qrcode5: false,
        qrcode6: false
      }
    }
  },
  methods: {
    result(num) {
      this.show[`qrcode${num}`] = true
    }
  }
}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-qrcode) {
  @include e(item) {
    margin: 0 15px 15px 0;
  }
}
</style>
