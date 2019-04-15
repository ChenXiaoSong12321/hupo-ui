import { HupoComponent } from '../create/component'
import button from '../mixins/button'
import { api, wxTools } from '../../utils/index.js'
import { regeneratorRuntime } from '../../lib/index.js'

HupoComponent({
  mixins: [button],
  relation: {
    name: 'buttonGroup',
    type: 'parent'
  },
  data: {
    _customStyle: '',
    stateClass: ''
  },
  props: {
    type: {
      type: String,
      value: 'primary'
    },
    transition: {
      type: Boolean,
      value: false
    }
  },
  watch: {
    radius: 'updateStateClass',
    disabled: 'updateStateClass',
    opacity: 'updateStateClass',
    transition: 'updateStateClass',
    plain() {
      this.setCustomStyle()
      this.updateStateClass()
    },
    bgColor: 'setCustomStyle',
    color: 'setCustomStyle',
    customStyle: 'setCustomStyle'
  },
  mounted() {
    this.updateStateClass()
    this.setCustomStyle()
  },
  methods: {
    updateStateClass() {
      const classes = ['group', 'radius', 'plain', 'disabled', 'opacity']
      let stateClass = ''
      classes.forEach(item => {
        if (this.data[item] && (item != 'radius' || !this.data.group)) {
          stateClass += `is-${item} `
        }
      })
      this.setData({
        stateClass
      })
    },
    setCustomStyle() {
      let style = ''
      if (this.data.plain) {
        this.data.bgColor && (style = `border: 1px solid ${this.data.bgColor};background-color: transparent;color: ${this.data.bgColor};`)
      } else {
        style = `color: ${this.data.color};background-color: ${this.data.bgColor};`
      }
      style = ';' + style + ';' + this.data.customStyle
      style = style.replace(/color:\ *;/, ';').replace(/background-color:\ *;/, ';').replace(/;+/g, ';').replace(/^;/, '').replace(/;/g, '!important;')
      console.log(this.data._customStyle, '_customStyle')
      this.setData({
        _customStyle: style || this.data._customStyle
      })
    },
    handleTap() {
      if (!this.data.openType) {
        this.__emit__('click')
      }
    },
    async  __emit__(type, data = {}) {
      if (this.data.throttle > 0) {
        await this.$throttle(this.data.throttle)
      }
      this._emit(type, data)
    },
    async handleFormSubmit(event) {
      event.currentTarget.dataset = Object.assign({}, event.detail.target.dataset)
      const tap = event.detail.target.dataset.tap
      if (tap) {
        this[tap](event)
      }
      const res = await wxTools.getSystemInfo()
      if (res.platform != 'devtools') {
        const formId = [event.detail.formId] || []
        const ctx = this.$viewportCommonGetCurrentPage()
        const token = await ctx.$getToken()
        await ctx.$api(api.user.apiPostFormId, {
          token,
          formId: JSON.stringify(formId)
        })
      }
    },
    handleGetuserinfo(event = {}) {
      this.__emit__('getuserinfo', event.detail || {})
    },

    handleContact(event = {}) {
      this.__emit__('contact', event.detail || {})
    },

    handleGetphonenumber(event = {}) {
      this.__emit__('getphonenumber', event.detail || {})
    },

    handleOpensetting(event = {}) {
      this.__emit__('opensetting', event.detail || {})
    },

    handleError(event = {}) {
      this.__emit__('error', event.detail || {})
    }
  }
})
