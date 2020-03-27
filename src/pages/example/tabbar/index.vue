<template>
  <demo-page :title="title">
    <demo-block title="基础用法" padding></demo-block>
    <h-tabbar @change="change" v-model="currentTabbar" :tabbar="tabbar"></h-tabbar>
  </demo-page>
</template>

<script>

export default {
  data() {
    return {
      currentTabbar: '',
      title: '',
      tabbar: [
        {
          label: 'Tabbar 标签栏',
          icon: require('../../index/tabbar/index.png'),
          selectedIcon: require('../../index/tabbar/index-active.png'),
          value: 'home'
        },
        {
          label: 'Tabbar 标签栏2',
          icon: require('../../index/tabbar/trip.png'),
          selectedIcon: require('../../index/tabbar/trip-active.png'),
          value: 'trip'
        },
        {
          label: 'Tabbar 标签栏3',
          icon: require('../../index/tabbar/my.png'),
          selectedIcon: require('../../index/tabbar/my-active.png'),
          value: 'my'
        }
      ]
    }
  },
  created() {
    this.title = this.tabbar[0].label
    this.currentTabbar = this.tabbar[0].value
  },
  // computed: {
  //   currentTabbar: {
  //     get() {
  //       return this.$store.state.tabbar.value
  //     },
  //     set(val) {
  //       this.$store.commit('tabbar/switch', val)
  //     }
  //   }
  // },
  methods: {
    change(item) {
      this.title = item.label
    }
  }
}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-tag) {
  @include e(item) {
    margin: 0 15px 15px 0;
  }
}
</style>
