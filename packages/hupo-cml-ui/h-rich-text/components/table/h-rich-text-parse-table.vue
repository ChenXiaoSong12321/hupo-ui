<template>
  <view :class="[`${nodes.classStr}`,`wxParse-${nodes.tag}`]" :style="nodes.styleStr">
    <block v-for="body in nodes.nodes" :key="body.index">
      <view
        v-if="body.tag"
        :class="[`${body.classStr}`,`wxParse-${body.tag}`]"
        :style="body.styleStr"
      >
        <block v-for="tr in body.nodes" :key="tr.index">
          <view v-if="tr.tag" :class="[`${tr.classStr}`,`wxParse-${tr.tag}`]" :style="tr.styleStr">
            <block v-for="td in tr.nodes" :key="td.index">
              <view
                v-if="td.tag"
                :class="[`${td.classStr}`,`wxParse-${td.tag}`]"
                :style="td.styleStr"
              >
                <h-rich-text-parse-base v-for="item in td.nodes" :key="item.index" :nodes="item"></h-rich-text-parse-base>
              </view>
            </block>
          </view>
        </block>
      </view>
    </block>
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
@include table();
</style>
