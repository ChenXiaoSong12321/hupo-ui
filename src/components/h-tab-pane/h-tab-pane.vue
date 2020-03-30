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
      this._dispatch('h-tab', 'update', this)
    },
    name(newName, oldName) {
      this._dispatch('h-tab', 'updateName', newName, oldName)
    }
  },
  created() {
    this._dispatch('h-tab', 'add', this)
  },
  beforeDestroy() {
    this._dispatch('h-tab', 'remove', this)
  },
  methods: {
    setCurrentName(currentName) {
      this.active = currentName === this.name
      if (this.active && !this.loaded) {
        this.loaded = true
        this.$emit('load')
      }
    }
  }
}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(tab-pane) {
  display: none;
  @include when(active) {
    display: block;
  }
}
</style>
