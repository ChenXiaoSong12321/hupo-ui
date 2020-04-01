<template>
  <demo-page title="Transition 动画">
    <demo-block title="基本用法" padding>
      <demo-row space-between>
        <view class="h-demo-transition-button">
          <h-button size="mediumsmall" @onclick="trigger('fade')">fade</h-button>
        </view>
        <view class="h-demo-transition-button">
          <h-button size="mediumsmall" @onclick="trigger('fade-top')">fade-top</h-button>
        </view>
        <view class="h-demo-transition-button">
          <h-button size="mediumsmall" @onclick="trigger('fade-bottom')">fade-bottom</h-button>
        </view>
        <view class="h-demo-transition-button">
          <h-button size="mediumsmall" @onclick="trigger('fade-right')">fade-right</h-button>
        </view>
        <view class="h-demo-transition-button">
          <h-button size="mediumsmall" @onclick="trigger('fade-left')">fade-left</h-button>
        </view>
        <view class="h-demo-transition-button">
          <h-button size="mediumsmall" @onclick="trigger('slide-top')">slide-top</h-button>
        </view>
        <view class="h-demo-transition-button">
          <h-button size="mediumsmall" @onclick="trigger('slide-bottom')">slide-bottom</h-button>
        </view>
        <view class="h-demo-transition-button">
          <h-button size="mediumsmall" @onclick="trigger('slide-right')">slide-right</h-button>
        </view>
        <view class="h-demo-transition-button">
          <h-button size="mediumsmall" @onclick="trigger('slide-left')">slide-left</h-button>
        </view>
      </demo-row>
    </demo-block>
    <view class="h-demo-transition">
      <h-transition :show="show" :name="name">
        <view class="h-demo-transition-item" style="width: 200px; height: 200px;"></view>
      </h-transition>
    </view>
  </demo-page>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      name: 'fade'
    }
  },
  methods: {
    trigger(name) {
      this.name = name
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 500)
    }

  }
}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-transition) {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include e(item) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $--primary-color-CM1;
  }
  @include e(button) {
    margin-bottom: 20rpx;
  }
}
</style>
