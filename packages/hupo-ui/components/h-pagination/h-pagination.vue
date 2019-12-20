<template>
  <h-scroll
    :scrollX="scrollX"
    :scrollY="scrollY"
    :upperThreshold="upperThreshold"
    :lowerThreshold="lowerThreshold"
    :scrollTop="scrollTop"
    :scrollLeft="scrollLeft"
    :scrollIntoView="scrollIntoView"
    :scrollWithAnimation="scrollWithAnimation"
    :enableBackToTop="enableBackToTop"
    :showScrollbar="showScrollbar"
    @scrolltoupper="scrolltoupper"
    @scroll="scroll"
    @scrolltolower="scrolltolower"
    @pullup="onPullup"
  >
    <block v-if="empty">
      <slot name="empty"></slot>
    </block>
    <block v-else>
      <slot></slot>
      <h-load-more :loading="loading"></h-load-more>
    </block>
  </h-scroll>
</template>

<script>
import HPagination from './h-pagination.js'
export default HPagination
</script>

<style lang="scss">
</style>
