<template>
  <view
    :class="[`${nodes.classStr}`,`wxParse-${nodes.tag}`,`wxParse-${nodes.tagType}`]"
    :style="nodes.styleStr"
  >
    <h-rich-text-parse-base v-for="item in nodes.nodes" :key="item.index" :nodes="item"></h-rich-text-parse-base>
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
@include inline();
</style>
