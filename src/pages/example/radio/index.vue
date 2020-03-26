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
