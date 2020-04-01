<template>
  <h-popup-base
    :mask="mask"
    :show="show"
    :duration="duration"
    :offset="offset"
    :position="position"
    :styles="styles"
    @onclose="onclose"
  >
    <view class="h-popup" @touchmove.stop="empty">
      <view class="h-popup-close">
        <h-button type="none" @onclick="onclose">
          <!-- #ifndef MP-ALIPAY -->
          <h-icon name="close-l" class="h-popup-close-icon"></h-icon>
          <!-- #endif -->
          <!-- #ifdef MP-ALIPAY -->
          <view class="h-popup-close-icon">
            <h-icon name="close-l"></h-icon>
          </view>
          <!-- #endif -->
        </h-button>
      </view>
      <view class="h-popup-box">
        <view class="h-popup-box-content">
          <slot></slot>
        </view>
      </view>
    </view>
  </h-popup-base>
</template>
<script>
import popupMixin from '../h-popup-base/h-popup-base.mixin'
export default {
  name: 'h-popup',
  mixins: [popupMixin],
  props: {
    styles: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    empty() {}
  }
}
</script>
<style scoped lang="scss">
@import './h-popup.scss';
</style>
