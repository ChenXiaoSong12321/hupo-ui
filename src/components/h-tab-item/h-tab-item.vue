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
      this._dispatch('h-tab', 'update', this)
    },
    name(newName, oldName) {
      this._dispatch('h-tab', 'updateName', newName, oldName)
    }
  },
  created() {
    this._dispatch('h-tab', 'add', this)
    console.log(this.$parent, this, 'tab-item')
  },
  beforeDestroy() {
    this._dispatch('h-tab', 'remove', this)
  }
}
</script>
<style lang="scss">
</style>
