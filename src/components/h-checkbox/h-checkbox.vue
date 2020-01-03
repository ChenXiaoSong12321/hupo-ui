<template>
  <view class="h-checkbox">
    <view class="h-checkbox-wrap" :class="checkClass" @tap="changeCheck">
      <block v-if="disabled || innerChecked">
        <h-icon class="h-checkbox-select" name="iconyigouxuanbeifen"></h-icon>
      </block>
      <block v-else>
        <h-icon class="h-checkbox-select" name="iconbukegouxuanbeifen1"></h-icon>
      </block>
      <text class="h-checkbox-label" v-if="label">{{ label }}</text>
    </view>
  </view>
</template>
<script>
// todo -- checkgroup 封装
export default {
  name: 'h-checkbox',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    value: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {
      innerChecked: false
    }
  },
  computed: {
    checkClass() {
      if (this.disabled) {
        return 'is-disabled'
      }
      return this.innerChecked ? 'is-active' : ''
    }
  },
  watch: {
    checked: {
      handler(val) {
        this.innerChecked = val
      },
      immediate: true
    }
  },
  methods: {
    changeCheck() {
      if (this.disabled) return
      this.innerChecked = !this.innerChecked
      this.$emit('changeevent', this.innerChecked ? this.value : '')
      this.$emit('change', this.innerChecked ? this.value : '')
    }
  }
}
</script>
<style lang="scss">
@import "./h-checkbox.scss";
</style>
