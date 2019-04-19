Component({
  options: {
    addGlobalClass: true
  },
  externalClasses: [
    'custom-class',
    'overlay-class'
  ],
  properties: {
    show: Boolean,
    overlayStyle: String,
    overlay: {
      type: Boolean,
      value: true
    },
    closeclickOverlay: {
      type: Boolean,
      value: true
    },
    position: {
      type: String,
      value: 'center'
    },
    top: {
      type: String,
      value: '50%'
    }
  },
  methods: {
    clickOverlay() {
      this.triggerEvent('click-overlay')

      if (this.data.closeclickOverlay) {
        this.triggerEvent('close')
      }
    }
  }
})
