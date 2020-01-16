<template>
  <h-page title="h-popup-base 演示">
    <view class="container">
      <h-progress style="width: 60%;" height="30"></h-progress>
      <text>\r\n</text>
      <h-load-more :loading="loading" :slogen="false">
        <view slot="slogen">slogenslogen</view>
      </h-load-more>
    </view>
  </h-page>
</template>
<script>
export default {
  data: function() {
    return {
      loading: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  methods: {
    change(tabName) {
      this.show[tabName] = true
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  .btn {
    margin-top: 20rpx;
  }
}
</style>
