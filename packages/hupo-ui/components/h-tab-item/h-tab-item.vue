<template>
  <view class="h-tab-item"></view>
</template>
<script>
export default {
  name: 'h-tab-item',
  inject: ['hTab'],
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
    label(newValue, oldValue) {
      this.hTab && this.hTab.update(this)
    },
    name(newName, oldName) {
      this.hTab && this.hTab.updateName(newName, oldName)
    }
  },
  created() {
    this.hTab && this.hTab.add(this)
  },
  beforeDestroy() {
    this.hTab && this.hTab.remove(this)
  }
}
</script>
<style lang="scss">
</style>
