<template>
  <h-image
    class="h-image-wxParse"
    :class="[`${nodes.classStr}`,`wxParse-${nodes.tag}`]"
    :src="nodes.attr.src"
    mode="widthFix"
    :style="nodes.width ? nodes.width + 'px;' : ''"
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
