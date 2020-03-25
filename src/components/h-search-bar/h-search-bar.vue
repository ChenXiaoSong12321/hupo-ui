<template>
  <view class="h-search-bar">
    <view class="h-search-bar-box">
      <view class="h-search-bar-icon">
        <h-icon name="search"></h-icon>
      </view>
      <input
        v-if="showInput"
        :focus="focus"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @confirm="confirm"
        class="h-search-bar-input"
        confirm-type="search"
        type="text"
        v-model="searchVal"
      />
      <text v-else class="h-search-bar-placeholder">{{ placeholder }}</text>
      <view
        v-if="showInput && clearButton === 'auto' && searchVal !== ''"
        class="h-search-bar-clear"
        @click="clear"
      >
        <h-icon name="close"></h-icon>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'h-search-bar',
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入搜索内容'
    },
    clearButton: {
      type: String,
      default: 'auto'
    },
    maxlength: {
      type: [Number, String],
      default: 100
    },
    showInput: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      focus: false
    }
  },
  computed: {
    searchVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  watch: {
    showInput: {
      handler(val) {
        if (val) {
          this.$nextTick(() => {
            this.focus = true
          })
        }
      },
      immediate: true
    }
  },
  methods: {
    clear() {
      this.searchVal = ''
    },
    confirm() {
      uni.hideKeyboard()
      this.$emit('confirm', this.searchVal)
    }
  }
}
</script>

<style lang="scss">
@import "./h-search-bar.scss";
</style>
