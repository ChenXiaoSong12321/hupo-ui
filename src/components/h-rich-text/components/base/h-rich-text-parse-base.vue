<template>
  <block v-if="nodes.node == 'text'">
    <h-rich-text-parse-text class="wxParse-inline" :nodes="nodes"></h-rich-text-parse-text>
  </block>
  <block v-else-if="['video','embed','img','br','button','li','a','table'].indexOf(nodes.tag) > -1">
    <h-rich-text-parse-video v-if="nodes.tag == 'video' || nodes.tag == 'embed'" :nodes="nodes"></h-rich-text-parse-video>
    <h-rich-text-parse-img v-if="nodes.tag == 'img'" :nodes="nodes"></h-rich-text-parse-img>
    <h-rich-text-parse-br v-if="nodes.tag == 'br'" :nodes="nodes"></h-rich-text-parse-br>
    <h-rich-text-parse-button v-if="nodes.tag == 'button'" :nodes="nodes"></h-rich-text-parse-button>
    <h-rich-text-parse-li v-if="nodes.tag == 'li'" :nodes="nodes"></h-rich-text-parse-li>
    <h-rich-text-parse-a v-if="nodes.tag == 'a'" :nodes="nodes"></h-rich-text-parse-a>
    <h-rich-text-parse-table v-if="nodes.tag == 'table'" :nodes="nodes"></h-rich-text-parse-table>
  </block>
  <block v-else-if="nodes.tagType == 'block'">
    <h-rich-text-parse-block :nodes="nodes"></h-rich-text-parse-block>
  </block>
  <block v-else>
    <h-rich-text-parse-inline class="wxParse-inline" :nodes="nodes"></h-rich-text-parse-inline>
  </block>
</template>
<script>
import hRichTextParseA from '../a/h-rich-text-parse-a'
import hRichTextParseBlock from '../block/h-rich-text-parse-block'
import hRichTextParseBr from '../br/h-rich-text-parse-br'
import hRichTextParseButton from '../button/h-rich-text-parse-button'
import hRichTextParseImg from '../img/h-rich-text-parse-img'
import hRichTextParseInline from '../inline/h-rich-text-parse-inline'
import hRichTextParseLi from '../li/h-rich-text-parse-li'
import hRichTextParseTable from '../table/h-rich-text-parse-table'
import hRichTextParseText from '../text/h-rich-text-parse-text'
import hRichTextParseVideo from '../video/h-rich-text-parse-video'
export default {
  components: {
    hRichTextParseA,
    hRichTextParseBlock,
    hRichTextParseBr,
    hRichTextParseButton,
    hRichTextParseImg,
    hRichTextParseInline,
    hRichTextParseLi,
    hRichTextParseTable,
    hRichTextParseText,
    hRichTextParseVideo
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
