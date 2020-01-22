<template>
  <view class="h-tab-item"></view>
</template>
<script>
export default {
  name: 'h-tab-item',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  watch: {
    label() {
      this.$parent.$emit('update', this)
    },
    name(newName, oldName) {
      this.$parent.$emit('updateName', newName, oldName)
    }
  },
  created() {
    this.$parent.$emit('add', this)
  },
  beforeDestroy() {
    this.$parent.$emit('remove', this)
  }
}
</script>
<style lang="scss">
</style>
