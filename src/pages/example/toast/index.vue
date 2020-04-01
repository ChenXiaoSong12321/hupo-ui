<template>
  <demo-page title="Toast 轻提示">
    <demo-block title="文字提示" padding>
      <demo-row>
        <view class="h-demo-toast-btnitem">
          <h-button type="primary" size="mediumsmall" @onclick="toast('提示内容')">文字提示</h-button>
        </view>
        <view class="h-demo-toast-btnitem">
          <h-button type="primary" size="mediumsmall" @onclick="toast('我是一个很长很长很长很长很长很长的内容')">长文字提示</h-button>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="加载提示" padding>
      <demo-row>
        <view class="h-demo-toast-btnitem">
          <h-button type="primary" size="mediumsmall" @onclick="loadingToast()">加载提示</h-button>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="手动关闭" padding>
      <demo-row>
        <view class="h-demo-toast-btnitem">
          <h-button type="primary" size="mediumsmall" @onclick="clearToast()">手动关闭</h-button>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="成功/失败提示" padding>
      <demo-row>
        <view class="h-demo-toast-btnitem">
          <h-button type="primary" size="mediumsmall" @onclick="successToast()">成功提示</h-button>
        </view>
        <view class="h-demo-toast-btnitem">
          <h-button type="primary" size="mediumsmall" @onclick="failToast()">失败提示</h-button>
        </view>
      </demo-row>
    </demo-block>
  </demo-page>
</template>
<script>

export default {
  methods: {
    toast(msg) {
      this._toast(msg)
    },
    loadingToast() {
      this._loadingToast()
    },
    clearToast() {
      this._clearToast()
    },
    failToast() {
      this._failToast()
    },
    successToast() {
      this._successToast()
    }
  }
}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-toast) {
  @include e(btnitem) {
    margin: 0 15px 15px 0;
  }
}
</style>
