<template>
  <view class="h-checkbox-group">
    <slot></slot>
  </view>
</template>
<script>
export default {
  name: 'h-checkbox-group',
  provide() {
    return {
      hCheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  watch: {
    value: 'setChecked'
  },
  created() {
    this.checkboxs = []
  },
  mounted() {
    if (this.value.length) {
      this._setTimeout(() => {
        this.setChecked()
      }, 200)
    }
  },
  methods: {
    add(checkbox) {
      this.checkboxs.push(checkbox)
    },
    remove(checkbox) {
      this.checkboxs.splice(this.checkboxs.indexOf(checkbox), 1)
    },
    change() {
      const values = []
      this.checkboxs.forEach(checkbox => {
        if (checkbox.innerChecked) {
          values.push(checkbox.label)
        }
      })
      this.$emit('change', values)
      this.$emit('input', values)
    },
    setChecked() {
      this.checkboxs.forEach(checkbox => {
        if (this.value.indexOf(checkbox.label) > -1) {
          checkbox.innerChecked = true
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import './h-checkbox-group.scss';
</style>
