<template>
  <view class="h-checkbox-group">
    <slot></slot>
  </view>
</template>
<script>
export default {
  name: 'h-checkbox-group',
  created() {
    this.checkboxs = []
    this.$on('ui.checkbox.add', checkbox => {
      this.checkboxs.push(checkbox)
    })
    this.$on('ui.checkbox.remove', checkbox => {
      this.checkboxs.splice(this.checkboxs.indexOf(checkbox), 1)
    })

    this.$on('ui.checkbox.change', () => {
      const values = []
      this.checkboxs.forEach(checkbox => {
        if (checkbox.innerChecked) {
          values.push(checkbox.value)
        }
      })
      this.$emit('change', values)
    })
  }
}
</script>
<style lang="scss">
@import "./h-checkbox-group.scss";
</style>
