<template>
  <view class="h-form">
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'h-form',
  created() {
    this.formItems = []
    this.$on('addFormItems', (formItem) => {
      if (formItem) {
        this.formItems.push(formItem)
      }
    })
    this.$on('removeFormItems', (formItem) => {
      this.formItems.splice(this.formItems.indexOf(formItem), 1)
    })
  },
  methods: {
    async validate() {
      const promises = []
      this.formItems.map(item => {
        promises.push(item.validate())
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
}
</script>
<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(form) {
  width: 100%;
}
</style>
