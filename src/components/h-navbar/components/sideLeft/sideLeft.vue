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
// todo
const getIndexRoute = () => ''
// 判断 route 是否是首页
// todo
const isHomeRoute = route => getIndexRoute().indexOf(route) > -1 || route === '/'
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
    console.log(global)
    const historys = getCurrentPages().length
    const isHome = isHomeRoute(this.$root.route)
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
