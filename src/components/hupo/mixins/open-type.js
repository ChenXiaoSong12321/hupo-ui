import { regeneratorRuntime } from '../../lib/index.js'
export const openType = {
  properties: {
    openType: String
  },
  methods: {
    async handleGetuserinfo(event = {}) {
      if (event.detail.iv && event.detail.encryptedData) {
        await this.__emit('getuserinfo', event.detail || {})
      }
    },

    async handleContact(event = {}) {
      await this.__emit('contact', event.detail || {})
    },

    async handleGetphonenumber(event = {}) {
      await this.__emit('getphonenumber', event.detail || {})
    },

    async handleOpensetting(event = {}) {
      await this.__emit('opensetting', event.detail || {})
    },

    async handleError(event = {}) {
      await this.__emit('error', event.detail || {})
    }
  }
}
