<template>
  <view class="h-navbar-loading" v-if="show">
    <image class="h-navbar-loading-icon" v-if="type == 'default'" :src="image.loadingBlack"></image>
    <image class="h-navbar-loading-icon" v-else :src="image.loadingWhite"></image>
  </view>
</template>
<script>
export default {
  name: 'h-navbar-loading',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      image: {
        loadingBlack: require('../../assets/images/loading-black.png'),
        loadingWhite: require('../../assets/images/loading-white.png')
      }
    }
  }
}
</script>
<style lang="scss">
@import "./loading.scss";
</style>
