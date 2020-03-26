<template>
  <view class="h-stepper">
    <h-button
      :throttle="false"
      class="h-stepper-subtract"
      :class="{
        'is-disabled': disabled || (stepValue == min)
      }"
      type="none"
      @onclick="onChange('subtract')"
    >
      <view class="text">-</view>
    </h-button>
    <view
      class="h-stepper-input-wrap"
      :class="{
        'is-disabled': disabled
      }"
    >{{stepValue}}</view>
    <h-button
      :throttle="false"
      class="h-stepper-add"
      :class="{
        'is-disabled': disabled || (stepValue == max)
      }"
      type="none"
      @onclick="onChange('add')"
    >
      <view class="text">+</view>
    </h-button>
  </view>
</template>

<script>
const MAX = 2147483647

export default {
  name: 'h-stepper',
  props: {
    disabled: Boolean,
    value: {
      type: Number,
      default: 1
    },
    min: {
      type: null,
      default: 1
    },
    max: {
      type: null,
      default: MAX
    },
    step: {
      type: null,
      default: 1
    }
  },
  data() {
    return {
      stepValue: 1
    }
  },
  watch: {
    value: 'setValue',
    stepValue(val) {
      if (val !== this.value) {
        this.$emit('change', val)
        this.$emit('input', val)
      }
    },
    min(val) {
      if (!!val && this.stepValue < val) {
        this.setValue(val)
      }
    },
    max(val) {
      if (!!val && this.stepValue > val) {
        this.setValue(val)
      }
    }
  },
  mounted() {
    this.stepValue = this.value
    if (this.stepValue < this.min) this.setValue(this.min)
  },
  methods: {
    setValue(val) {
      if (!val)val = this.min
      if (val < this.min || val > this.max) {
        this.$emit('overlimit')
        return
      }
      this.stepValue = val
    },
    onChange(type) {
      if (this.disabled) return
      const diff = type === 'subtract' ? -this.step : +this.step
      const stepValue = Math.round((Number(this.stepValue) + diff) * 100) / 100
      this.setValue(stepValue)
      this.$emit(type)
    }
  }
}
</script>

<style lang="scss">
@import "./h-stepper.scss";
</style>
