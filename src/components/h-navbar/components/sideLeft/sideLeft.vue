<template>
  <view class="h-navbar-left">
    <h-button
      class="h-navbar-left-button"
      type="none"
      :customStyle="['height: 100%']"
      v-if="selfShowBackIcon"
      @onclick="back"
    >
      <view class="h-navbar-left-button-slot">
        <h-icon
          name="iconfanhuicopybeifen"
          class="h-navbar-left-button-icon"
          :class="[`h-navbar-left-button-icon--${type}`]"
        ></h-icon>
      </view>
    </h-button>
    <h-button
      class="h-navbar-left-button"
      type="none"
      :customStyle="['height: 100%']"
      v-if="showHomeIcon && selfShowHomeIcon"
      @onclick="_backToHome"
    >
      <view class="h-navbar-left-button-slot">
        <h-icon
          name="iconshouyecopybeifen"
          class="h-navbar-left-button-icon"
          :class="[`h-navbar-left-button-icon--${type}`]"
        ></h-icon>
      </view>
    </h-button>
  </view>
</template>
<script>
import { global } from '@hupo/core'
export default {
  name: 'h-navbar-side-left',
  props: {
    showHomeIcon: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {
      selfShowBackIcon: true,
      selfShowHomeIcon: true
    }
  },
  mounted() {
    const historys = getCurrentPages().length
    const isHome = this.$root.route === global.indexRoute
    this.selfShowBackIcon = historys > 1 && !isHome
    this.selfShowHomeIcon = !isHome
  },
  methods: {
    back() {
      this._back()
    }
  }
}
</script>
<style lang="scss">
@import "./sideLeft.scss";
</style>
