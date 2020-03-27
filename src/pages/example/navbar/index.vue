<template>
  <demo-page title="NavBar 导航栏">
    <demo-block :title="navbarBasic.title">
      <h-navbar
        :type="navbarBasic.type"
        :loading="navbarBasic.loading"
        :title="navbarBasic.title"
        :showHomeIcon="navbarBasic.showHomeIcon"
        :fixed="navbarBasic.fixed"
      ></h-navbar>
    </demo-block>
    <demo-block :title="navbarPrimary.title">
      <h-navbar
        :type="navbarPrimary.type"
        :loading="navbarPrimary.loading"
        :title="navbarPrimary.title"
        :showHomeIcon="navbarPrimary.showHomeIcon"
        :fixed="navbarPrimary.fixed"
      ></h-navbar>
    </demo-block>
    <demo-block :title="navbarHome.title">
      <h-navbar
        :type="navbarHome.type"
        :loading="navbarHome.loading"
        :title="navbarHome.title"
        :showHomeIcon="navbarHome.showHomeIcon"
        :fixed="navbarHome.fixed"
      ></h-navbar>
    </demo-block>
    <demo-block :title="navbarLoading.title">
      <h-navbar
        :type="navbarLoading.type"
        :loading="navbarLoading.loading"
        :title="navbarLoading.title"
        :showHomeIcon="navbarLoading.showHomeIcon"
        :fixed="navbarLoading.fixed"
      ></h-navbar>
    </demo-block>
    <demo-block :title="navbarFixed.title">
      <view class="h-demo-navbar-btn-item">
        <h-button type="primary" size="mediumsmall" @onclick="toggleFixed()">固顶切换</h-button>
      </view>

      <h-navbar
        :type="navbarFixed.type"
        :loading="navbarFixed.loading"
        :title="navbarFixed.title"
        :showHomeIcon="navbarFixed.showHomeIcon"
        :fixed="navbarFixed.fixed"
      ></h-navbar>
    </demo-block>
    <view style="width:750rpx;height:500rpx"></view>
  </demo-page>
</template>

<script>

export default {
  data() {
    return {
      navbarBasic: {
        type: 'default',
        loading: false,
        title: '基础用法',
        showHomeIcon: false,
        fixed: false
      },
      navbarPrimary: {
        type: 'primary',
        loading: false,
        title: '基础用法',
        showHomeIcon: false,
        fixed: false
      },
      navbarHome: {
        type: 'default',
        loading: false,
        title: '回到首页',
        showHomeIcon: true,
        fixed: false
      },
      navbarLoading: {
        type: 'default',
        loading: true,
        title: '加载状态',
        showHomeIcon: true,
        fixed: false
      },
      navbarFixed: {
        type: 'primary',
        loading: false,
        title: '固顶状态',
        showHomeIcon: true,
        fixed: false
      }
    }
  },
  methods: {
    toggleFixed() {
      this.$set(this.navbarFixed, 'fixed', !this.navbarFixed.fixed)
    }
  }
}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-navbar) {
  @include e(btn-item) {
    margin-left: 15rpx;
    margin-bottom: 15rpx;
  }
}
</style>
