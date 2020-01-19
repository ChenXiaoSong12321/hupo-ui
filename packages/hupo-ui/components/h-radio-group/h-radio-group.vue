<template>
  <view class="h-radio-group">
    <slot></slot>
  </view>
</template>
<script>
export default {
  name: 'h-radio-group',
  props: {
    value: {
      type: [String, Number, Boolean],
      default: ''
    }
  },
  created() {
    this.radios = []
    this.$on('ui.radio.add', radio => {
      this.radios.push(radio)
    })
    this.$on('ui.radio.remove', radio => {
      this.radios.splice(this.radios.indexOf(radio), 1)
    })

    this.$on('ui.radio.change', (label) => {
      this.$emit('change', label)
      this.$emit('input', label)
    })
  },
  mounted() {
    if (this.value) {
      this.$nextTick(() => {
        this.setRadioActive()
      })
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
    }
  }
}
</script>
<style lang="scss">
@import "./h-radio-group.scss";
</style>
