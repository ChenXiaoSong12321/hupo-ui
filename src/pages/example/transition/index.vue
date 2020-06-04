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
          <h-button size="mediumsmall" @onclick="trigger('flip')">flip</h-button>
        </view>
        <view class="h-demo-transition-button">
          <h-button size="mediumsmall" @onclick="trigger('zoom')">zoom</h-button>
        </view>
        <view class="h-demo-transition-button">
          <h-button size="mediumsmall" @onclick="trigger('fade-left-flip')">组合动画</h-button>
        </view>
      </demo-row>
    </demo-block>
    <view class="h-demo-transition">
      <h-transition :show="show" :name="name" :duration="1200">
        <view class="h-demo-transition-item" style="width: 50px; height: 50px;"></view>
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
      }, 2000)
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
