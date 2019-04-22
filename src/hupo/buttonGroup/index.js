import { HupoComponent } from '../create/component'
import button from '../mixins/button'

HupoComponent({
  mixins: [button],
  props: {
    type: {
      type: String,
      value: 'capsule'
    }
  },
  relation: {
    name: 'button',
    type: 'child',
    linked(target) {
      this.updateChildForTwoChild(target)
    }
  },
  relations: {
    '../authorizeButton/index': {
      type: 'child',
      linked(target) {
        this.updateChildForTwoChild(target)
      }
    }
  },
  methods: {
    updateChildForTwoChild(target) {
      console.log('插进去了')
      const nodes = this.getRelationNodes('../button/index')
      const authorizeButtonNodes = this.getRelationNodes('../authorizeButton/index')

      target.setData({
        groupType: 'capsule',
        customStyle: nodes.length === 1 || authorizeButtonNodes.length === 1 ? 'width:280rpx;border-top-right-radius: 0;border-bottom-right-radius: 0;border-right:none;' : 'width:280rpx;border-top-left-radius: 0;border-bottom-left-radius: 0;border-left:none;'
      })
    }
  }
})
