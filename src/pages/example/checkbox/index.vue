<template>
  <demo-page title="Checkbox 复选框">
    <demo-block title="基本用法" padding>
      <h-checkbox v-model="checkbox1" label=" ">复选框</h-checkbox>
    </demo-block>
    <demo-block title="禁用状态" padding>
      <h-checkbox disabled label=" ">复选框</h-checkbox>
      <h-checkbox disabled v-model="disabled" label=" ">复选框</h-checkbox>
    </demo-block>
    <demo-block title="复选框组" padding>
      <h-checkbox-group v-model="list">
        <h-checkbox label="a">复选框 a</h-checkbox>
        <h-checkbox label="b">复选框 b</h-checkbox>
        <h-checkbox label="c">复选框 c</h-checkbox>
      </h-checkbox-group>
    </demo-block>
  </demo-page>
</template>

<script>
export default {
  data() {
    return {
      disabled: true,
      checkbox1: true,
      list: ['a', 'b', 'c']
    }
  },
  methods: {
    trigger(name) {
      this.name = name
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 500)
    }

  }
}
</script>
<style lang="scss">
</style>
