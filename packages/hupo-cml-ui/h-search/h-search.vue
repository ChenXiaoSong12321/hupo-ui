<template>
  <view class="h-search">
    <view class="h-search-wrap">
      <h-button type="none" @onclick="onclick">
        <view class="h-search-detail" :class="{'is-cancel': cancel}">
          <h-icon name="iconsousuocopybeifen" class="h-search-icon"></h-icon>
          <input
            class="h-search-input"
            :style="inputStyle"
            :value="value"
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
            @input="input"
            @focus="focus"
            @blur="blur"
            @confirm="confirm"
          />
        </view>
      </h-button>
      <h-button type="none" @onclick="oncancel" v-if="cancel" class="h-search-cancel-wrap">
        <view class="h-search-cancel">取消</view>
      </h-button>
    </view>
  </view>
</template>

<script>
import inputMixin from '../../core/mixins/input.mixin'
export default {
  name: 'h-search',
  mixins: [inputMixin],
  props: {
    width: {
      type: String,
      default: ''
    },
    cancel: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputStyle() {
      return {
        /*
        border: none;
        height: 28rpx;
        line-height: 28rpx;
        font-size:26rpx;
        color:#666;
        padding:0;
        width:${this.inputWidth};
        border-radius: 0 56rpx 56rpx 0;
        vertical-align: bottom;
        outline: none;
        */
        width: this.width || (this.cancel ? '526rpx' : '446rpx')
      }
    }
  },
  methods: {
    onclick() {
      this.$emit('onclick', this.value)
    },
    oncancel() {
      this.$emit('oncancel', this.value)
    }
  }
}
</script>
<style lang="scss">
@import "./h-search.scss";
</style>
