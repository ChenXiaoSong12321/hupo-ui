<template>
  <view class="h-field">
    <view class="h-field-box" :class="{'h-field-box--border': isGroup && !isFirst}">
      <view class="h-field-prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </view>
      <view class="h-field-label" v-if="label">{{label}}</view>
      <input
        class="h-field-input"
        v-model="inputVal"
        :type="type"
        :password="password"
        :placeholder="placeholder"
        :placeholderStyle="placeholderStyle"
        :placeholderClass="placeholderClass"
        :maxlength="maxlength"
        :cursorSpacing="cursorSpacing"
        :focus="focus"
        :confirmType="confirmType"
        :confirmHold="confirmHold"
        :cursor="cursor"
        :selectionStart="selectionStart"
        :selectionEnd="selectionEnd"
        :adjustPosition="adjustPosition"
        @focus="handleFocus"
        @blur="handleBlur"
        @confirm="handleConfirm"
      />
      <view class="h-field-append" v-if="$slots.append">
        <slot name="append"></slot>
      </view>
    </view>
  </view>
</template>

<script>
import inputMixin from '../../core/mixins/input.mixin'
export default {
  name: 'h-field',
  mixins: [inputMixin],
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isGroup: false,
      isFirst: false
    }
  },
  mounted() {
    this._dispatch('h-field-group', 'add', this)
  },
  beforeDestroy() {
    this._dispatch('h-field-group', 'remove', this)
  }
}

</script>

<style lang="scss">
@import "./h-field.scss";
</style>
