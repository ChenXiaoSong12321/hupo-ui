<template>
  <demo-page title="Dialog 弹出框">
    <demo-block title="文字提示" padding>
      <demo-row>
        <h-button
          type="primary"
          class="h-demo-dialog-btnitem"
          size="mediumsmall"
          @onclick="alert()"
        >提示弹窗</h-button>
        <h-button
          type="primary"
          :styles="{width:'230rpx'}"
          class="h-demo-dialog-btnitem"
          size="mediumsmall"
          @onclick="alertNoTitle()"
        >提示弹窗(无标题)</h-button>
      </demo-row>
    </demo-block>
    <demo-block title="文字提示" padding>
      <demo-row>
        <h-button
          type="primary"
          class="h-demo-dialog-btnitem"
          size="mediumsmall"
          @onclick="confirm()"
        >确认弹窗</h-button>
      </demo-row>
    </demo-block>
    <demo-block title="rich-text 支持" padding>
      <demo-row>
        <h-button
          type="primary"
          :styles="{width:'230rpx'}"
          class="h-demo-dialog-btnitem"
          size="mediumsmall"
          @onclick="confirmRichText()"
        >rich-text内容</h-button>
      </demo-row>
    </demo-block>
    <demo-block title="open-type 确认" padding>
      <demo-row>
        <h-button
          type="primary"
          :styles="{width:'230rpx'}"
          class="h-demo-dialog-btnitem"
          size="mediumsmall"
          @onclick="confirmOpenType()"
        >open-type 确认</h-button>
      </demo-row>
    </demo-block>
  </demo-page>
</template>

<script>

export default {
  methods: {
    alert() {
      this._alert({
        title: '标题',
        message: '我是一个 alert 弹窗'
      })
    },
    alertNoTitle() {
      this._alert({
        title: '',
        message: '我是一个无标题的 alert 弹窗'
      })
    },
    confirm() {
      this._confirm({
        title: '标题',
        message: '我是一个的 confirm 弹窗'
      })
    },
    confirmRichText() {
      this._confirm({
        title: '标题',
        message: `
          <p style="color:red">这部分内容是用rich-text富文本渲染的</p>
        `
      })
    },
    async confirmOpenType() {
      const rs = await this._confirm({
        title: '标题',
        openType: 'getUserInfo',
        message: '我是一个的 confirm 弹窗'
      })
      console.log(rs)
    }
  }
}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-dialog) {
  @include e(btnitem) {
    margin: 0 15px 15px 0;
  }
}
</style>
