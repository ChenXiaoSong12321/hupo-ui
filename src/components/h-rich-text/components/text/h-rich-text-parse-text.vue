<template>
  <text class="wxParse-inline" :class="nodes.classStr" :style="[nodes.styleStr]">
    <block v-if="nodes.node == 'text'">{{nodes.text}}</block>
  </text>
</template>
<script>
export default {
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
@include text();
</style>
