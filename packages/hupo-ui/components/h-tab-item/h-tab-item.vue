<template>
  <view class="h-tabs-item h-tabs-item--row" @tap="handleTabTap">
    <text class="h-tabs-item-text" :style="finalLabel">{{tab.label}}</text>
  </view>
</template>
<script>
import tabItemMixin from './h-tab-item.mixin'

export default {
  name: 'h-tab-item',
  mixins: [tabItemMixin],
  props: {
    tab: {
      type: Object,
      default() {
        return {}
      }
    },
    inline: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    finalLabel() {
      return {
        ...this.activeLabelStyle,
        ...this.tab.labelStyle
      }
    },
    isActive() {
      return this.activeLabel === this.tab.label
    }
  },
  methods: {
    handleTabTap() {
      this.$emit('tabclick', this.tab)
    }
  }
}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(tabs-item) {
  @include m(row) {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @include e(text) {
    line-height: 90rpx;
    font-size: 30rpx;
    text-align: center;
    height: 90rpx;
    padding-left: 5rpx;
    color: $--font-color-FC2;
    padding-right: 5rpx;
    padding-top: 5rpx;
    padding-bottom: 5rpx;
  }
}
</style>
