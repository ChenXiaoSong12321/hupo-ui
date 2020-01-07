<template>
  <view class="h-checkbox">
    <view class="h-checkbox-wrap" :class="checkClass" @tap="changeCheck">
      <block v-if="disabled || innerChecked">
        <h-icon class="h-checkbox-select" name="iconyigouxuanbeifen"></h-icon>
      </block>
      <block v-else>
        <h-icon class="h-checkbox-select" name="iconbukegouxuanbeifen1"></h-icon>
      </block>
      <text class="h-checkbox-label" v-if="$slots.default || label">
        <slot></slot>
        <block v-if="!$slots.default">{{label}}</block>
      </text>
    </view>
  </view>
</template>
<script>
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
      const label = this.innerChecked ? this.label : ''
      this.$emit('input', label)
      this.$emit('change', label)
      this.$root._broadcast('h-checkbox-group', 'ui.checkbox.change')
    }
  },
  mounted() {
    this.$root._broadcast('h-checkbox-group', 'ui.checkbox.add', this)
  },
  beforeDestroy() {
    this.$root._broadcast('h-checkbox-group', 'ui.checkbox.remove', this)
  }
}
</script>
<style lang="scss">
@import "./h-checkbox.scss";
</style>
