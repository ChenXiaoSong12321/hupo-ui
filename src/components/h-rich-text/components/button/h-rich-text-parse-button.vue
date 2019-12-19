<template>
  <block>
    <h-rich-text-parse-base v-for="item in nodes.nodes" :key="item.index" :nodes="item"></h-rich-text-parse-base>
  </block>
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
