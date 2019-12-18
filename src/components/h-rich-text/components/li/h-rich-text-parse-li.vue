<template>
  <view :class="[`${nodes.classStr}`,`wxParse-${nodes.tag}`]" :style="[nodes.styleStr]">
    <view class="wxParse-li-inner">
      <view class="wxParse-li-text">
        <view class="wxParse-li-circle"></view>
      </view>
      <view class="wxParse-li-text">
        <h-rich-text-parse-base v-for="item in nodes.nodes" :nodes="item"></h-rich-text-parse-base>
      </view>
    </view>
  </view>
</template>
<script>
import { beforeCreate } from '../../recursion'
import hRichTextParseBase from '../base/h-rich-text-parse-base'
export default {
  components: {
    hRichTextParseBase
  },
  beforeCreate() {
    beforeCreate(this)
  },
  props: {
    nodes: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="scss">
@import "../common.scss";
</style>
