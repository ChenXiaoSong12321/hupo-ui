import { HupoComponent } from '../create/component'
const _f = function _f() {}
const needResponseOpenTypes = ['getUserInfo', 'getPhoneNumber', 'openSetting']

HupoComponent({
  properties: {},

  data: {
    // 标题
    title: '',
    // 自定义 btn 列表
    // { type: 按钮类型，回调时以此作为区分依据，text: 按钮文案, color: 按钮文字颜色, openType: 微信开放能力 }
    buttons: [],
    // 内容
    message: ' ',
    html: '',
    // 选择节点
    selector: '#vant-dialog',
    // 按钮是否展示为纵向
    buttonsShowVertical: false,
    // 是否展示确定
    showConfirmButton: true,
    // 确认按钮文案
    confirmButtonText: '确定',
    // 确认按钮颜色
    confirmButtonColor: '#dd392e',
    // 是否展示取消
    showCancelButton: false,
    // 取消按钮文案
    cancelButtonText: '取消',
    // 取消按钮颜色
    cancelButtonColor: '#333',
    key: '',
    autoClose: true,
    center: true,
    large: false,
    icon: '',
    iconColor: '',
    show: false,
    promise: {}
  },

  methods: {
    handleButtclick(event) {
      const { type = '', openType = '' } = event.currentTarget.dataset

      // 获取当次弹出框的信息
      const resolve = this.data.promise.resolve || _f
      const reject = this.data.promise.reject || _f
      // 重置展示
      if (this.data.autoClose) {
        this.setData({ show: false })
      }
      // 自定义按钮，全部 resolve 形式返回，根据 type 区分点击按钮
      const isNeedOpenDataButton = needResponseOpenTypes.indexOf(openType) > -1
        // 如果需要 openData，就额外返回一个 promise，用于后续 open 数据返回
      if (isNeedOpenDataButton) {
        if (type !== 'confirm') {
          reject({
            type: 'cancel'
          })
          this.setData({ promise: {}})
        }
        return
      }

      // 默认按钮，确认为 resolve，取消为 reject
      if (type === 'confirm') {
        resolve({
          type: 'confirm'
        })
      } else {
        reject({
          type: 'cancel'
        })
      }

      this.setData({ promise: {}})
    },

    // 以下为处理微信按钮开放能力的逻辑
    handleUserInfoResponse(event) {
      const detail = event.detail

      this.__handleOpenDataResponse({
        type: detail.errMsg === 'getUserInfo:ok' ? 'resolve' : 'reject',
        data: detail
      })
    },
    handlePhoneResponse(event) {
      const detail = event.detail

      this.__handleOpenDataResponse({
        type: detail.errMsg === 'getPhoneNumber:ok' ? 'resolve' : 'reject',
        data: detail
      })
    },
    handleOpenSettingResponse(event) {
      const detail = event.detail

      this.__handleOpenDataResponse({
        type: detail.errMsg === 'openSetting:ok' ? 'resolve' : 'reject',
        data: detail
      })
    },
    __handleOpenDataResponse(options) {
      const type = options.type || 'resolve'
      const data = options.data || {}

      const promise = this.data.promise || {}
      const responseFunc = promise[type] || _f

      responseFunc(data)
      this.setData({ promise: {}})
    }
  }
})
