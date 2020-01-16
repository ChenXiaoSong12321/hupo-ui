<template>
  <h-page title="h-popup-base 演示">
    <view class="container">
      <h-checkbox-group v-model="checkbox">
        <h-checkbox label="a">选择框a</h-checkbox>
        <h-checkbox label="b">选择框b</h-checkbox>
        <h-checkbox label="c">选择框c</h-checkbox>
        <h-checkbox label="d">选择框d</h-checkbox>
        <h-checkbox label="e">选择框e</h-checkbox>
      </h-checkbox-group>
    </view>
  </h-page>
</template>
<script>
export default {
  data: function() {
    return {
      checkbox: ['a', 'e']
    }
  },
  mounted() {

  },
  methods: {
    change(tabName) {
      this.show[tabName] = true
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  .btn {
    margin-top: 20rpx;
  }
}
</style>
