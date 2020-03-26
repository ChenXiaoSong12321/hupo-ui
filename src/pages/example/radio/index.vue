<template>
  <demo-page title="Radio 单选框">
    <demo-block title="基本用法" padding>
      <h-radio-group v-model="radio1">
        <h-radio label="1">单选框 1</h-radio>
        <h-radio label="2">单选框 2</h-radio>
        <h-radio label="3">单选框 3</h-radio>
      </h-radio-group>
    </demo-block>
    <demo-block title="禁用状态" padding>
      <h-radio disabled>单选框</h-radio>
      <h-radio disabled v-model="disabled">单选框</h-radio>
    </demo-block>
  </demo-page>
</template>

<script>
export default {
  data() {
    return {
      disabled: true,
      radio1: '1'
    }
  }
}
</script>
<style lang="scss">
</style>
