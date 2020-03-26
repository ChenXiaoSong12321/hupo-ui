<template>
  <demo-page title="Popup 弹出层">
    <demo-block title="基本用法" padding>
      <h-button size="mediumsmall" @onclick="showBasic">展示弹出层</h-button>
      <h-popup-base :show="show.basic" @onclose="hideBasic">
        <view class="h-demo-popup-content" style="width: 200px; height: 200px;">内容</view>
      </h-popup-base>
    </demo-block>
    <demo-block title="弹出位置" padding>
      <demo-row>
        <view class="h-demo-popup-item">
          <h-button size="mediumsmall" @onclick="showTop">顶部弹出</h-button>
          <h-popup-base :show="show.top" position="top" @onclose="hideTop">
            <view class="h-demo-popup-content" style="width: 100%; height: 200px;">顶部弹出</view>
          </h-popup-base>
        </view>
        <view class="h-demo-popup-item">
          <h-button size="mediumsmall" @onclick="showBottom">底部弹出</h-button>
          <h-popup-base :show="show.bottom" position="bottom" @onclose="hideBottom">
            <view class="h-demo-popup-content" style="width: 100%; height: 200px;">底部弹出</view>
          </h-popup-base>
        </view>
        <view class="h-demo-popup-item">
          <h-button size="mediumsmall" @onclick="showLeft">左侧弹出</h-button>
          <h-popup-base :show="show.left" position="left" @onclose="hideLeft">
            <view class="h-demo-popup-content" style="width: 200px; height: 100%;">左侧弹出</view>
          </h-popup-base>
        </view>
        <view class="h-demo-popup-item">
          <h-button size="mediumsmall" @onclick="showRight">右侧弹出</h-button>
          <h-popup-base :show="show.right" position="right" @onclose="hideRight">
            <view class="h-demo-popup-content" style="width: 200px; height: 100%;">右侧弹出</view>
          </h-popup-base>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="遮罩层" padding>
      <demo-row>
        <view class="h-demo-popup-item">
          <h-button size="mediumsmall" @onclick="showMask">默认半透明</h-button>
          <h-popup-base :show="show.mask" @onclose="hideMask">
            <view class="h-demo-popup-content" style="width: 200px; height: 200px;">默认半透明</view>
          </h-popup-base>
        </view>
        <view class="h-demo-popup-item">
          <h-button size="mediumsmall" @onclick="showNoMask">无遮罩层</h-button>
          <h-popup-base :show="show.noMask" :mask="false">
            <view
              class="h-demo-popup-content"
              style="width: 200px; height: 200px; background: #eee;"
            >无遮罩层</view>
          </h-popup-base>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="动画时间" padding>
      <demo-row>
        <view class="h-demo-popup-item">
          <h-button size="mediumsmall" @onclick="showDuration">默认300ms</h-button>
          <h-popup-base :show="show.duration" @onclose="hideDuration">
            <view class="h-demo-popup-content" style="width: 200px; height: 200px;">默认300ms</view>
          </h-popup-base>
        </view>
        <view class="h-demo-popup-item">
          <h-button size="mediumsmall" @onclick="showShortDuration">100ms</h-button>
          <h-popup-base :show="show.shortDuration" :duration="100" @onclose="hideShortDuration">
            <view class="h-demo-popup-content" style="width: 200px; height: 200px;">100ms</view>
          </h-popup-base>
        </view>
      </demo-row>
    </demo-block>
  </demo-page>
</template>

<script>
export default {
  data() {
    return {
      show: {
        basic: false,
        top: false,
        bottom: false,
        left: false,
        right: false,
        mask: false,
        noMask: false,
        duration: false,
        shortDuration: false
      }
    }
  },
  methods: {
    toggle(type, value) {
      this.show[type] = value
    },

    showBasic() {
      this.toggle('basic', true)
    },

    hideBasic() {
      this.toggle('basic', false)
    },

    showTop() {
      this.toggle('top', true)
    },

    hideTop() {
      this.toggle('top', false)
    },

    showLeft() {
      this.toggle('left', true)
    },

    hideLeft() {
      this.toggle('left', false)
    },

    showRight() {
      this.toggle('right', true)
    },

    hideRight() {
      this.toggle('right', false)
    },

    showBottom() {
      this.toggle('bottom', true)
    },

    hideBottom() {
      this.toggle('bottom', false)
    },

    showMask() {
      this.toggle('mask', true)
    },

    hideMask() {
      this.toggle('mask', false)
    },

    showNoMask() {
      this.toggle('noMask', true)
      setTimeout(() => {
        this.toggle('noMask', false)
      }, 2000)
    },

    showDuration() {
      this.toggle('duration', true)
    },

    hideDuration() {
      this.toggle('duration', false)
    },
    showShortDuration() {
      this.toggle('shortDuration', true)
    },

    hideShortDuration() {
      this.toggle('shortDuration', false)
    }

  }
}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(demo-popup) {
  @include e(item) {
    margin: 0 20rpx 20rpx 0;
  }
  @include e(content) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $--white;
  }
}
</style>
