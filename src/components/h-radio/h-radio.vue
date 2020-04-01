<template>
  <view class="h-radio">
    <view class="h-radio-wrap" :class="radioClass" @tap="changeSelect">
      <view class="h-radio-select">
        <h-icon :name=" innerChecked ? 'success' : disabled ? 'radio-disabled' :'radio-l'"></h-icon>
      </view>
      <text class="h-radio-label" v-if="$slots.default || label">
        <slot></slot>
        <block v-if="!$slots.default">{{label}}</block>
      </text>
    </view>
  </view>
</template>
<script>
export default {
  name: 'h-radio',
  props: {
    label: {
      type: String
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
    radioClass() {
      if (this.disabled) {
        return 'is-disabled'
      }
      return this.innerChecked ? 'is-active' : ''
    }
  },
  created() {
    this._dispatch('h-radio-group', 'ui.radio.add', this)
  },
  mounted() {
    this.model = this.value
  },
  beforeDestroy() {
    this._dispatch('h-radio-group', 'ui.radio.remove', this)
  },
  methods: {
    changeSelect() {
      if (this.disabled || this.innerChecked) return
      this.innerChecked = !this.innerChecked
      this._dispatch('h-radio-group', 'ui.radio.change', this.label)
    }
  }
}
</script>

<style lang="scss">
@import './h-radio.scss';
</style>
