<template>
  <demo-page title="Search Bar 搜索">
    <demo-block title="基本用法" padding>
      <h-search-bar v-model="value1" show-input></h-search-bar>
    </demo-block>
    <demo-block title="事件监听" padding>
      <h-search-bar v-model="value2" show-input @confirm="confirm" @clear="clear"></h-search-bar>
    </demo-block>
    <demo-block title="禁用输入框" padding>
      <h-search-bar></h-search-bar>
    </demo-block>
  </demo-page>
</template>

<script>
export default {
  data() {
    return {
      value1: '',
      value2: ''
    }
  },
  methods: {
    confirm() {
      this._toast('搜索：' + this.value2)
    },
    clear() {
      this._toast('清空')
    }
  }
}
</script>
<style lang="scss">
</style>
