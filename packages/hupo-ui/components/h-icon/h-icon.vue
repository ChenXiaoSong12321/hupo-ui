<template>
  <view :style="styles" :class="name" class="h-icon"></view>
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
  }
}
</script>

<style lang="scss">
@import "./iconfont.scss";
.h-icon {
  @include icon();
}
</style>
