<template>
  <h-page title="Pagination 分页">
    <h-pagination @pullup="pullup" :loading="loading">
      <demo-block title="分页加载" padding></demo-block>
      <view class="h-demo-pagination-cell" v-for="(item, index) in list" :key="index">文本 {{index}}</view>
    </h-pagination>
  </h-page>
</template>

<script>

export default {
  data() {
    return {
      loading: false,
      list: []
    }
  },
  methods: {
    pullup(options) {
      this.loading = true
      this._loadingToast(`正在加载${options.pageIndex}页`)
      setTimeout(() => {
        this.list = this.list.concat(Array.from({ length: 40 }, () => ''))
        this._clearToast()
        this.loading = false
      }, 2000)
    }
  }

}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-pagination) {
  @include e(cell) {
    background: $--white;
    padding: 0 15px;
    border-bottom: 1px solid $--border-color-PC1;
    font-size: 28rpx;
    line-height: 75rpx;
  }
}
</style>
