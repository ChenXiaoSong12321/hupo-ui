<template>
  <view class="h-tab-bar">
    <view v-for="(item, index) in tabbar" :key="item.label" class="h-tab-bar-item" :class="{'is-active': selected === item.value || selected === index}" @tap="onTabbarItemTap(item, index)">
      <image v-if="selected === item.value || selected === index" class="h-tab-bar-icon" :src="item.selectedIcon"></image>
      <image v-else class="h-tab-bar-icon" :src="item.icon"></image>
      <view class='h-tab-bar-title'>
        {{item.label}}
      </view>
    </view>
  </view>
</template>

<script>
/*
 label
 icon
 selectedIcon
 value
*/
export default {
  name: 'h-tabbar',
  props: {
    tabbar: {
      type: Array,
      default() {
        return []
      }
    },
    value: {
      type: [String, Number],
      default: 0
    }
  },
  computed: {
    selected: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    onTabbarItemTap(item, index) {
      this.selected = item.value || index
      this.$emit('change', item, index)
    }
  }
}
</script>
<style lang="scss">
@import './h-tabbar.scss';
</style>
