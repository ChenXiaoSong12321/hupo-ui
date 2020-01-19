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
    label: {
      type: String,
      required: true
    },
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      model: false
    }
  },
  computed: {
    innerChecked: {
      get() {
        return this.model
      },
      set(val) {
        this.$emit('input', val)
        this.$emit('change', val)
        this.model = val
      }
    },
    checkClass() {
      if (this.disabled) {
        return 'is-disabled'
      }
      return this.innerChecked ? 'is-active' : ''
    }
  },
  created() {
    this._dispatch('h-checkbox-group', 'ui.checkbox.add', this)
  },
  mounted() {
    this.model = this.value
  },
  beforeDestroy() {
    this._dispatch('h-checkbox-group', 'ui.checkbox.remove', this)
  },
  methods: {
    changeCheck() {
      if (this.disabled) return
      this.innerChecked = !this.innerChecked
      this._dispatch('h-checkbox-group', 'ui.checkbox.change')
    }
  }
}
</script>
<style lang="scss">
@import "./h-checkbox.scss";
</style>
