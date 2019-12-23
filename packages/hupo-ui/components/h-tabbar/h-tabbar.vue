<template>
  <view class="h-tab-bar" :class="{'h-tab-bar--fixed': fixed}" :style="tabbarStyle">
    <view class="h-tab-bar-wrap">
      <view v-for="(item, index) in tabbar" :key="item.text" class="h-tab-bar-item-wrap">
        <view class="h-tab-bar-content" @tap="onTabbarItemTap(index)">
          <view class="h-tab-bar-icon-wrap" v-if="!top && hasIcon">
            <image v-if="index === tapedIndex" class="tab-icon" :src="item.selectedIcon || item.icon" :style="item.selectedIconStyle || ''"></image>
            <image v-else class="tab-icon" :src="item.icon" :style="item.iconStyle || ''"></image>
          </view>
          <view class='tab-title'>
            <text class="tab-text" :style="{color: index === tapedIndex ? selectedTextStyle : textStyle}">{{item.text}}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { primaryColor, fontColorC3 } from '@hupo/ui/core/options/style/var'

export default {
  name: 'h-tabbar',
  props: {
    tabbar: {
      type: Array,
      default() {
        return []
      }
    },
    tabLineStyle: {
      type: String,
      default: ''
    },
    textStyle: {
      type: String,
      default: fontColorC3
    },
    selectedTextStyle: {
      type: String,
      default: primaryColor
    },
    position: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    },
    selectedIndex: { // 默认选中那个tabbbar
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tapedIndex: 0
    }
  },
  computed: {
    top() {
      return this.tabbar.position === 'top'
    },
    // 必须每个list中都配置icon,selectedIcon才展示icon,有一个不配置就不会展示
    hasIcon() {
      const necessaryKeys = ['icon']
      return (this.tabbar || []).every((item) => {
        return necessaryKeys.every((key) => Object.keys(item).includes(key))
      })
    },
    tabbarStyle() {
      const style = {}
      if (this.top) {
        style.top = `${this._calcTop(0)}rpx`
      } else {
        style.bottom = `${this._calcBottom(0)}rpx`
      }
      return style
    }
  },
  watch: {
    selectedIndex(val) {
      this.tapedIndex = val
    }
  },
  mounted() {
    this.tapedIndex = this.selectedIndex
  },
  methods: {
    onTabbarItemTap(index) {
      this.tapedIndex = index
      this.$emit('tabbarclick', {
        index
      })
    }
  }
}
</script>
<style lang="scss">
@import './h-tabbar.scss';
</style>
