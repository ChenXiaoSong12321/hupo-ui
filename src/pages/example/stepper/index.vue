<template>
  <demo-page title="Stepper 步进器">
    <demo-block title="基本用法" padding>
      <h-stepper v-model="num1"></h-stepper>
    </demo-block>
    <demo-block title="步长设置" padding>
      <h-stepper step="2" v-model="num2"></h-stepper>
    </demo-block>
    <demo-block title="限制范围" padding>
      <h-stepper min="5" max="10" v-model="num3"></h-stepper>
    </demo-block>
    <demo-block title="禁用状态" padding>
      <h-stepper disabled v-model="num4"></h-stepper>
    </demo-block>
  </demo-page>
</template>

<script>
export default {
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 5,
      num4: 1
    }
  }
}
</script>
<style lang="scss">
</style>
