<template>
  <view class="h-field-group">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'h-field-group',
  created() {
    this.fields = []
    this.$on('add', field => {
      this.fields.forEach(item => {
        if (item.isLast)item.isLast = false
      })
      field.isGroup = true
      field.isLast = true
      this.fields.push(field)
    })
    this.$on('remove', field => {
      this.fields.splice(this.fields.indexOf(field), 1)
    })
  }
}

</script>

<style lang="scss">
@import "./h-field-group.scss";
</style>
