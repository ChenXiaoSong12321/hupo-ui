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
        if (item.isFirst)item.isFirst = false
      })
      field.isGroup = true
      this.fields.push(field)
      this.fields[0].isFirst = true
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
