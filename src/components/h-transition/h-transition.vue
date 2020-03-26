<template>
  <view
    v-if="isShow"
    ref="ani"
    class="h-transition"
    :class="[nameClass, animationClass]"
    :style="stylesObject"
  >
    <slot></slot>
  </view>
</template>

<script>
export default {
  name: 'h-transition',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'fade'
    },
    duration: {
      type: Number,
      default: 300
    },
    styles: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      isShow: false,
      animationClass: ''
    }
  },
  watch: {
    show: {
      handler(newVal) {
        if (newVal) {
          this.open()
        } else {
          this.close()
        }
      },
      immediate: true
    }
  },
  computed: {
    stylesObject() {
      const styles = {
        ...this.styles,
        'transition-duration': this.duration / 1000 + 's'
      }
      return this.transformStyle(styles)
    },
    nameClass() {
      return `h-transition--${this.name}`
    }
  },
  methods: {
    open() {
      this.isShow = true
      this.$nextTick(() => {
        setTimeout(() => {
          this._animation(true)
        }, 50)
      })
    },
    close() {
      this._animation(false)
    },
    _animation(type) {
      this.animationClass = type ? 'is-active' : ''
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        if (!type) {
          this.isShow = false
        }
        this.$emit('change', this.isShow)
      }, this.duration)
    }
  }
}
</script>

<style lang="scss">
@import "~@hupo/core-sass-bem";
@include b(transition) {
  transition-timing-function: ease;
  transition-duration: 0.3s;
  transition-property: transform, opacity;
  @include m(fade) {
    opacity: 0;
    @include when(active) {
      opacity: 1;
    }
  }
  @include m(slide-top) {
    transform: translateY(-100%);
    @include when(active) {
      transform: translateY(0);
    }
  }
  @include m(slide-bottom) {
    transform: translateY(100%);
    @include when(active) {
      transform: translateY(0);
    }
  }
  @include m(slide-right) {
    transform: translateX(100%);
    @include when(active) {
      transform: translateX(0);
    }
  }
  @include m(slide-left) {
    transform: translateX(-100%);
    @include when(active) {
      transform: translateX(0);
    }
  }
  @include m(fade-top) {
    transform: translateY(-100%);
    opacity: 0;
    @include when(active) {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @include m(fade-bottom) {
    transform: translateY(100%);
    opacity: 0;
    @include when(active) {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @include m(fade-right) {
    transform: translateX(100%);
    opacity: 0;
    @include when(active) {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @include m(fade-left) {
    transform: translateX(-100%);
    opacity: 0;
    @include when(active) {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>
