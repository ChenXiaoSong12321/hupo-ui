<template>
  <view class="h-tab-pane" :class="{'is-active': active}">
    <slot></slot>
  </view>
</template>
<script>
export default {
  name: 'h-tab-pane',
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
  data() {
    return {
      loaded: false,
      active: false
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
    this.$on('setCurrentName', currentName => {
      this.active = currentName === this.name
      if (this.active && !this.loaded) {
        this.loaded = true
        this.$emit('load')
      }
    })
    this.$parent.$emit('add', this)
  },
  beforeDestroy() {
    this.$parent.$emit('remove', this)
  }
}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(tab-pane) {
  display: none;
  @include when(active) {
    display: block;
  }
}
</style>
