<template>
  <h-page title="Page 页面框架" :loading="loading">
    <demo-block
      title="h-page 组件自带 h-dialog h-toast h-load-more h-navbar 组件，并兼容刘海屏、IphoneX底部"
      padding
    ></demo-block>
    <demo-block title="加载状态" padding>
      <demo-row>
        <view class="h-demo-page-btnitem">
          <h-button
            type="primary"
            class="h-demo-page-btnitem"
            size="mediumsmall"
            @onclick="loadingToggle()"
          >页面加载</h-button>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="跳转链接" padding>
      <demo-row>
        <view class="h-demo-page-btnitem">
          <h-button type="primary" size="mediumsmall" @onclick="dialog()">dialog</h-button>
        </view>
        <view class="h-demo-page-btnitem">
          <h-button type="primary" size="mediumsmall" @onclick="toast()">toast</h-button>
        </view>
        <view class="h-demo-page-btnitem">
          <h-button
            type="primary"
            size="mediumsmall"
            @onclick="loadMore()"
            :styles="{width:'230rpx'}"
          >load-more</h-button>
        </view>
        <!-- #ifndef MP-ALIPAY -->
        <h-button
          type="primary"
          class="h-demo-page-btnitem"
          size="mediumsmall"
          @onclick="navbar()"
        >navbar</h-button>
        <!-- #endif -->
      </demo-row>
    </demo-block>
  </h-page>
</template>

<script>

export default {
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    this.loadingToggle()
  },
  methods: {
    dialog() {
      uni.navigateTo({
        url: `/pages/example/dialog/index`
      })
    },
    toast() {
      uni.navigateTo({
        url: `/pages/example/toast/index`
      })
    },
    loadMore() {
      uni.navigateTo({
        url: `/pages/example/load-more/index`
      })
    },
    navbar() {
      uni.navigateTo({
        url: `/pages/example/navbar/index`
      })
    },
    loadingToggle() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 1500)
    }
  }

}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-page) {
  @include e(btnitem) {
    margin: 0 15px 15px 0;
  }
}
</style>
