<template>
  <view :style="customStyle" :class="name" class="h-icon"></view>
</template>

<script>

export default {
  name: 'h-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    styles: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    customStyle() {
      return this.transformStyle(this.styles)
    }
  }
}
</script>

<style lang="scss">
@import "./iconfont.scss";
.h-icon {
  @include icon();
}
</style>
