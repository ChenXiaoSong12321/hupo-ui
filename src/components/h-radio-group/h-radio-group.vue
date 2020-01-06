<template>
  <view class="h-radio-group">
    <slot></slot>
  </view>
</template>
<script>
export default {
  name: 'h-radio-group',
  created() {
    this.radios = []
    this.$on('ui.radio.add', radio => {
      this.radios.push(radio)
    })
    this.$on('ui.radio.remove', radio => {
      this.radios.splice(this.radios.indexOf(radio), 1)
    })

    this.$on('ui.radio.change', ({ current, val }) => {
      this.radios.forEach(radio => {
        if (current !== radio) {
          radio.innerChecked = false
        }
      })
      this.$emit('change', val)
    })
  }
}
</script>
<style lang="scss">
@import "./h-radio-group.scss";
</style>
