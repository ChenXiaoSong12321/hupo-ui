<template>
  <view class="h-radio">
    <view class="h-radio-wrap" :class="radioClass" @tap="changeSelect">
      <block v-if="disabled">
        <h-icon class="h-radio-select" name="iconbukegouxuanbeifen"></h-icon>
      </block>
      <block v-else-if="innerChecked">
        <h-icon class="h-radio-select" name="iconyigouxuanbeifen"></h-icon>
      </block>
      <block v-else>
        <h-icon class="h-radio-select" name="iconbukegouxuanbeifen1"></h-icon>
      </block>
      <text class="h-radio-label">{{ label }}</text>
    </view>
  </view>
</template>
<script>
// todo -- radio group 封装
export default {
  name: 'h-radio',
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
    radioClass() {
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
    changeSelect() {
      if (this.disabled) return
      this.innerChecked = !this.innerChecked
      this.$emit('change', this.innerChecked ? this.value : '')
    }
  }
}
</script>

<style lang="scss">
@import "./h-radio.scss";
</style>
