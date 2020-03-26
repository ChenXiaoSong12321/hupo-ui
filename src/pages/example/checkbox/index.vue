<template>
  <demo-page title="Checkbox 复选框">
    <demo-block title="基本用法" padding>
      <h-checkbox v-model="checkbox1">复选框</h-checkbox>
    </demo-block>
    <demo-block title="禁用状态" padding>
      <h-checkbox disabled>复选框</h-checkbox>
      <h-checkbox disabled v-model="disabled">复选框</h-checkbox>
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
@import "~@hupo/core-sass-bem";
@include b(demo-transition) {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @include e(item) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: $--primary-color-CM1;
  }
  @include e(button) {
    margin-bottom: 20rpx;
  }
}
</style>
