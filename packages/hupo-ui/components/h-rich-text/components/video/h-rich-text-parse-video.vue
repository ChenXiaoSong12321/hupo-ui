<template>
  <view
    class="wxParse-video"
    :class="[`${nodes.classStr}`,`wxParse-${nodes.tag}`]"
    :style="nodes.styleStr"
  >
    <block v-if="video.type == 'tencentvideo'">
      <!-- #ifdef MP-WEIXIN -->
      <txv-video :vid="video.vid" :playerid="video.vid" width="100%" height="auto"></txv-video>
      <!-- #endif -->
      <!-- #ifdef H5-->
      <iframe
        class="wxParse-iframe-video"
        frameborder="0"
        :src="`https://v.qq.com/txp/iframe/player.html?vid=${video.vid}`"
        allowfullscreen="true"
      ></iframe>
      <!-- #endif -->
    </block>
  </view>
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
  },
  computed: {
    video() {
      const video = {}
      if (this.nodes.attr && this.nodes.attr.src && this.nodes.attr.src.indexOf('qq.com') > -1) {
        video.type = 'tencentvideo'
        video.vid = this.nodes.attr.src.split('/').pop().replace(/\.html/, '')
      }
      return video
    }
  }
}
</script>

<style lang="scss">
@import "../common.scss";
@include video();
</style>
