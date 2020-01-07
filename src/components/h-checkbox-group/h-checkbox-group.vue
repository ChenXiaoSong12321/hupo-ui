<template>
  <view class="h-checkbox-group">
    <slot></slot>
  </view>
</template>
<script>
export default {
  name: 'h-checkbox-group',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  created() {
    this.checkboxs = []
    this.$on('ui.checkbox.add', checkbox => {
      this.checkboxs.push(checkbox)
    })
    this.$on('ui.checkbox.remove', checkbox => {
      this.checkboxs.splice(this.checkboxs.indexOf(checkbox), 1)
    })
    this.$on('ui.checkbox.change', () => {
      const values = []
      this.checkboxs.forEach(checkbox => {
        if (checkbox.innerChecked) {
          values.push(checkbox.label)
        }
      })
      this.$emit('change', values)
      this.$emit('input', values)
    })
  },
  mounted() {
    this.setChecked()
  },
  watch: {
    value(val) {
      this.setChecked()
    }
  },
  methods: {
    setChecked() {
      this.checkboxs.forEach(checkbox => {
        if (this.value.indexOf(checkbox.label) !== -1) {
          checkbox.innerChecked = true
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import "./h-checkbox-group.scss";
</style>
