<template>
  <view class="h-form-item">
    <slot></slot>
    <text class="h-form-item-error" v-if="errMsg">{{errMsg}}</text>
  </view>
</template>

<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'h-form-item',
  inject: {
    hForm: {
      default: null
    }
  },
  props: {
    required: {
      type: [String, Boolean],
      default: false
    },
    value: {
      type: null,
      default: ''
    },
    rules: {
      type: [Object, Array],
      default() {
        return []
      }
    }
  },
  data() {
    return {
      errMsg: ''
    }
  },
  created() {
    this.hForm && this.hForm.add(this)
  },
  beforeDestroy() {
    this.hForm && this.hForm.remove(this)
  },
  computed: {
    computedRule() {
      const computedRule = []
      if (this.required) {
        const rule = {
          required: true,
          whitespace: typeof this.value === 'string',
          message: typeof this.required === 'string' ? this.required : '请填写该字段！'
        }
        computedRule.push(rule)
      }
      const rules = this.rules instanceof Array ? this.rules : [this.rules]
      return computedRule.concat(rules)
    }
  },
  methods: {
    validate() {
      return new Promise((resolve, reject) => {
        if (!this.computedRule || this.computedRule.length === 0) {
          resolve()
          return true
        }
        const validator = new AsyncValidator({
          field: this.computedRule
        })
        validator.validate({
          field: this.value
        }, { firstFields: true }, (errors, fields) => {
          if (!errors) {
            this.errMsg = ''
            resolve()
          } else {
            const errorMsg = errors[0].message
            this.errMsg = errorMsg
            reject(new Error(errorMsg))
          }
        })
      })
    }
  }
}

</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(form-item) {
  width: 100%;
  @include e(error) {
    display: inline-block;
    vertical-align: top;
    padding-left: 215rpx;
    font-size: $--font-size-weak-large-FW1;
    color: $--primary-color-CM1;
    margin-bottom: 10rpx;
  }
}
</style>
