<template>
  <h-image
    class="h-image-wxParse"
    :class="[`${nodes.classStr}`,`wxParse-${nodes.tag}`]"
    :src="nodes.attr.src"
    mode="widthFix"
    :style="{width: nodes.width ? nodes.width + 'px;' : '100%'}"
    reload
  ></h-image>
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
@include img();
</style>
