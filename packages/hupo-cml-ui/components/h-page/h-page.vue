<template>
  <view
    class="h-page"
    :class="`h-page--${background}`"
    :style="`${this.fixed ? 'min-' : ''}height: 100vh;`"
  >
    <view class="h-page-popup">
      <h-dialog></h-dialog>
      <h-toast></h-toast>
    </view>
    <h-navbar
      :type="type"
      :loading="navbarLoading"
      :title="title"
      :showHomeIcon="showHomeIcon"
      :fixed="fixed"
    ></h-navbar>
    <view class="h-page-loading" v-if="loading || !loaded">
      <h-load-more loading></h-load-more>
    </view>
    <view class="h-page-container" :class="(disabled || !fixed) ? 'is-disabled' : ''" v-else>
      <slot></slot>
    </view>
    <view
      class="h-page-bottom"
      v-if="viewport.isAllScreen"
      :style="`height: ${viewport.bottomHeight}px;`"
    >
      <view class="h-page-bottom-fixed" :style="`height: ${viewport.bottomHeight}px;`"></view>
    </view>
  </view>
</template>

<script>
// import { wxTools, channelInterface, viewport, promise } from '@hupo/core'
import debounce from 'lodash.debounce'
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: '琥珀亲子'
    },
    showHomeIcon: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'default'
    },
    background: {
      type: String,
      default: 'BgC3'
    },
    fixed: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    title(val) {
      cml.setTitle(val)
    },
    type() {
      this.initNavigation()
    }
  },
  data(){
    return {
      navbarLoading: false,
      viewport,
      viewportHeight: 0,
      status: '',
      loaded: false
    }
  },
  mounted() {
    cml.setTitle(this.title)
    this.initNavigation()
    this._getSystemInfo().then(system => {
      this.viewportHeight = system.viewportHeight
    })
    promise.delay(500).then(() => {
      this.loaded = true
    })
    this._on('toggleLoading', (options = {}) => {
      Object.keys(options).forEach(key => {
        this[key] = options[key]
      })
    })
    this._on('pulldown', () => {
      this.$emit('pulldown')
    })
    this._on('pullup', () => {
      this.$emit('pullup')
    })
    // #ifdef H5
    const onScroll = () => {
      const scollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const documentHeight = cml.cpx2px(this.viewportHeight)
      if (scollTop + documentHeight + 100 > scrollHeight) {
        this.$emit('pullup')
      }
    }
    window.onscroll = debounce(onScroll, 100)
    // #endif

    this._on('onShow', () => {
      this.initNavigation()
      this.$emit('onshow')
    })
    this.$emit('onshow')
  },
  methods: {
    initNavigation() {
      channelInterface({
        WX_MINI_PROGRAM: () => {
          wxTools.setNavigationBarColor({
            frontColor: this.type === 'default' ? '#000000' : '#ffffff',
            backgroundColor: this.type === 'default' ? '#fafafa' : '#dd392e'
          })
        }
      })
    }
  }
}

</script>

<style lang="scss">
@import "./h-page.scss";
</style>