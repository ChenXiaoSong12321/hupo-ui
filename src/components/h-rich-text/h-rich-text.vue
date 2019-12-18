<template>
  <view class="h-rich-text">
    <view class="wxParse">
      <block v-for="item in selfNodes">
        <block v-for="(node, y) in item">
          <h-rich-text-parse-base
            :nodes="node"
            :class="node.node !== 'element' || (node.tagType && node.tagType === 'inline') ? 'wxParse-inline' : ''"
            :key="node.node + node.tag + node.tagType + y"
          ></h-rich-text-parse-base>
        </block>
      </block>
    </view>
  </view>
</template>
<script>
import wxParse from './wxParse/index.js'
import { promise } from '@hupo/core'
import hRichTextParseBase from './components/base/h-rich-text-parse-base'

export default {
  name: 'h-rich-text',
  components: {
    hRichTextParseBase
  },
  props: {
    document: {
      type: String,
      default: ''
    },
    renderNum: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      selfNodes: []
    }
  },
  watch: {
    document() {
      this.parse()
    }
  },
  mounted() {
    this.parse()
  },
  methods: {
    async parse() {
      if (!this.document) return
      const parsedData = wxParse(this.document)
      this.init(parsedData.nodes)
    },
    async init(nodes) {
      // const selfNodesArray = []
      const selfNodes = new Map()
      const renderNum = this.renderNum
      if (nodes.length > renderNum) {
        for (let i = 0, len = nodes.length; i < len; i += renderNum) {
          const index = parseInt(i / renderNum)
          const item = nodes.slice(i, i + renderNum)
          selfNodes.set(index, item)
        }
      } else {
        selfNodes.set(0, nodes)
      }
      this.selfNodes = []
      for (const [_, item] of selfNodes) {
        this.selfNodes.push(item)
        await this.nextTick()
        await promise.delay(200)
      }
      this.$emit('success')
    }
  }
}
</script>
<style lang="scss">
@import "./h-rich-text.scss";
</style>
