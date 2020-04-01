<template>
  <view class="h-tab">
    <view class="h-tab-label" :style="stickyStyle">
      <view
        class="h-tab-label-item"
        :class="{'is-active': currentName === item.name}"
        v-for="item in tabs"
        :key="item.name"
        @tap="handleTabTap(item)"
      >
        <text class="h-tab-label-text">{{item.label}}</text>
        <view class="h-tab-label-line"></view>
      </view>
    </view>
    <view class="h-tab-content">
      <slot></slot>
    </view>
  </view>
</template>
<script>
export default {
  name: 'h-tab',
  props: {
    value: {
      type: String,
      default: ''
    },
    sticky: {
      type: Boolean,
      default: false
    },
    stickyOption: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      tabs: [],
      currentName: ''
    }
  },
  computed: {
    stickyStyle() {
      let stickyStyle = ''
      if (this.sticky) {
        stickyStyle += `position: sticky;${this.transformStyle(this.stickyOption)}`
      }
      return stickyStyle
    }
  },
  watch: {
    value(val) {
      this.setCurrentName(val)
    }
  },
  created() {
    this.items = []
    this.$on('add', item => {
      this.items.push(item)
      const tab = {
        name: item.name,
        label: item.label
      }
      this.tabs.push(tab)
      if (!this.currentName) this.setCurrentName(item.name)
    })

    this.$on('update', item => {
      const currentItemIndex = this.tabs.findIndex(v => v.name === item.name)
      this.tabs[currentItemIndex].label = item.label
    })
    this.$on('updateName', (newName, oldName) => {
      const currentItemIndex = this.tabs.findIndex(v => v.name === oldName)
      this.tabs[currentItemIndex].name = newName
    })
    this.$on('remove', item => {
      this.items.splice(this.items.indexOf(item), 1)
      this.tabs.splice(this.tabs.findIndex(v => v.name === item.name), 1)
    })
  },
  mounted() {
    if (this.value) {
      this.$nextTick(() => {
        this.setCurrentName(this.value)
      })
    }
  },
  methods: {
    setCurrentName(value) {
      this.currentName = value
      this.$emit('input', value)
      this.$emit('change', value)
      // 避免闪烁，优先处理show，后面再循环处理hide
      const currentItem = this.items.find(item => item.name === value)
      if (currentItem && currentItem.setCurrentName) {
        currentItem.setCurrentName(value)
        currentItem.$nextTick(() => {
          this.items.forEach(item => {
            if (item.name !== value) {
              item.setCurrentName(value)
            }
          })
        })
      }
    },
    handleTabTap(tab) {
      this.setCurrentName(tab.name)
    }
  }
}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(tab) {
  @include e(label) {
    width: 100%;
    height: 90rpx;
    background-color: $--white;
    display: flex;
    border-bottom: 1rpx solid $--border-color-PC1;
  }
  @include e(label-item) {
    position: relative;
    flex: 1;
    height: 90rpx;
    line-height: 90rpx;
    text-align: center;
    @include when(active) {
      @include e(label-text) {
        color: $--primary-color-CM1;
      }
      @include e(label-line) {
        display: block;
      }
    }
  }
  @include e(label-text) {
    font-size: 30rpx;
    color: $--font-color-FC2;
  }
  @include e(label-line) {
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 80rpx;
    height: 4rpx;
    border-radius: 2rpx;
    background: $--primary-color-CM1;
    margin: auto;
  }
}
</style>

