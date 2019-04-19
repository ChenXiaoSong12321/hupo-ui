Component({
  properties: {
    loadmore: {
      type: Object,
      value: {
        loading: false,
        nomore: false,
        nodata: true
      }
    },
    length: {
      type: Number,
      value: 20
    },
    isSlogen: {
      type: Boolean,
      value: false
    },
    isSlotSlogen: {
      type: Boolean,
      value: false
    }
  }
})
