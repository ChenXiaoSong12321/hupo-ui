<template>
  <view class="h-radio-group">
    <slot></slot>
  </view>
</template>
<script>
export default {
  name: 'h-radio-group',
  provide() {
    return {
      hRadioGroup: this
    }
  },
  props: {
    value: {
      type: [String, Number, Boolean],
      default: ''
    }
  },
  created() {
    this.radios = []
  },
  mounted() {
    if (this.value) {
      this._setTimeout(() => {
        this.setRadioActive()
      }, 200)
    }
  },
  watch: {
    value: 'setRadioActive'
  },
  methods: {
    setRadioActive() {
      this.radios.forEach(radio => {
        if (this.value === radio.label) {
          radio.innerChecked = true
        } else {
          radio.innerChecked = false
        }
      })
    },
    add(radio) {
      this.radios.push(radio)
    },
    remove(radio) {
      this.radios.splice(this.radios.indexOf(radio), 1)
    },
    change(label) {
      this.$emit('change', label)
      this.$emit('input', label)
    }
  }
}
</script>
<style lang="scss">
@import './h-radio-group.scss';
</style>
