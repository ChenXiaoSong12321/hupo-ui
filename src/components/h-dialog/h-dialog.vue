<template>
  <h-popup-base :show="show" position="center">
    <view class="h-dialog--container">
      <view v-if="title" class="h-dialog-header">
        <view class="h-dialog-header--icon" v-if="icon" :style="{color: (iconColor || '#333')}">
          <h-icon :name="icon"></h-icon>
        </view>
        <view class="h-dialog-header--title">{{ title }}</view>
      </view>
      <view class="h-dialog-content" :class="{'is-has-title': title}">
        <view class="h-dialog-content--message">
          <h-rich-text :document="message"></h-rich-text>
        </view>
      </view>
      <view class="h-dialog-footer">
        <h-button
          v-for="(item, index) in buttons"
          :key="index"
          size="medium"
          type="none"
          class="h-dialog-footer-button-no-type"
          :class="{'is-cancel':item.type!=='confirm'}"
          :data-open-type="item.openType"
          :data-type="item.type"
          :open-type="item.openType"
          @onclick="handleButtclick(item)"
          @getuserinfo="handleUserInfoResponse"
          @getphonenumber="handlePhoneResponse"
          @opensetting="handleOpenSettingResponse"
        >
          <view
            class="button-text"
            :class="item.type==='confirm'?'is-confirm':'is-cancel'"
          >{{ item.text }}</view>
        </h-button>
      </view>
    </view>
  </h-popup-base>
</template>
<script>
import style from '@hupo/core-sass-bem'
import { filterType } from './authorize'

const needResponseOpenTypes = ['getUserInfo', 'getPhoneNumber', 'openSetting']
const promise = {}

export default {
  name: 'h-dialog',
  data() {
    return {
    // 标题
      title: '',
      // 自定义 btn 列表
      // { type: 按钮类型，回调时以此作为区分依据，text: 按钮文案, color: 按钮文字颜色, openType: 微信开放能力 }
      buttons: [],
      // 内容
      message: ' ',
      // 是否展示确定
      showConfirmButton: true,
      // 确认按钮文案
      confirmButtonText: '确定',
      // 确认按钮颜色
      confirmButtonColor: style.primaryColorCM1,
      // 是否展示取消
      showCancelButton: false,
      // 取消按钮文案
      cancelButtonText: '取消',
      // 取消按钮颜色
      cancelButtonColor: style.fontColorFC1,
      key: '',
      autoClose: true,
      icon: '',
      iconColor: '',
      show: false
    }
  },
  mounted() {
    this.$on('toggle', (options = {}) => {
      Object.keys(options).forEach(key => {
        this[key] = options[key]
        promise.resolve = options.promise ? options.promise.resolve : null
        promise.reject = options.promise ? options.promise.reject : null
      })
    })
  },
  methods: {
    handleButtclick(event) {
      // 获取当次弹出框的信息
      const { type = '', openType = '' } = event
      // 重置展示
      if (this.autoClose) {
        this.show = false
      }
      // 自定义按钮，全部 resolve 形式返回，根据 type 区分点击按钮
      const isNeedOpenDataButton = needResponseOpenTypes.indexOf(openType) > -1
      // 如果需要 openData，就额外返回一个 promise，用于后续 open 数据返回
      if (isNeedOpenDataButton) {
        if (type !== 'confirm') {
          this.selfEmit('cancel', {})
        }
        return
      }
      // 默认按钮，确认为 resolve，取消为 reject
      if (type === 'confirm') {
        this.selfEmit('confirm', {})
      } else {
        this.selfEmit('cancel', {})
      }
    },

    selfEmit(type, data) {
      this.show = false
      this.$emit(type, data)
      if (type === 'confirm' && promise.resolve) {
        promise.resolve(data)
      }
      if (type === 'cancel' && promise.reject) {
        promise.reject(data)
      }
    },

    // 以下为处理微信按钮开放能力的逻辑
    handleUserInfoResponse(event) {
      const detail = event
      const type = filterType(detail, 'getUserInfo')
      this.__handleOpenDataResponse({
        type,
        data: detail
      })
    },
    handlePhoneResponse(event) {
      const detail = event.detail
      const type = filterType(detail, 'getPhoneNumber')

      this.__handleOpenDataResponse({
        type,
        data: detail
      })
    },
    handleOpenSettingResponse(event) {
      const detail = event.detail
      const type = filterType(detail, 'openSetting')

      this.__handleOpenDataResponse({
        type,
        data: detail
      })
    },
    __handleOpenDataResponse(options) {
      const type = options.type || 'confirm'
      const data = options.data || {}
      this.selfEmit(type, data)
    }
  }
}
</script>
<style lang="scss">
@import './h-dialog.scss';
</style>
