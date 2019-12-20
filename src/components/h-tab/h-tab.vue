<template>
  <view class="h-tabs">
    <view class="h-tabs-wrap">
      <h-tab-item
        class="h-tabs-item"
        v-for="(item, index) in tabs"
        :key="index"
        :tab="item"
        :activeLabel="activeLabel"
        :hasUnderline="hasUnderline"
        :activeLabelStyle="activeLabelStyle"
        @tabclick="handleTabTap"
      ></h-tab-item>
    </view>
    <view class="h-tabs-bottom"></view>
    <!-- <view c-if="{{hasUnderline}}" class="h-tabs-line-wrap" style="{{tabLineStyle}}"></view> -->
  </view>
</template>
<script>
import tabItemMixin from '../h-tab-item/h-tab-item.mixin'
export default {
  name: 'h-tab',
  mixins: [tabItemMixin],
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleTabTap(tab) {
      const label = tab.label
      const activeIndex = this.tabs.findIndex(item => item.label === label)

      this.$emit('tabclick', { label, activeIndex })
    }
  }
}
</script>
<style lang="scss">
@include b(tabs) {
  position: relative;
  @include e(item) {
    flex: 1;
    text-align: center;
  }
  @include e(wrap) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #fff;
  }
  @include e(bottom) {
    width: 100%;
    height: 1rpx;
    background-color: $--border-color-PC1;
  }
}
</style>

