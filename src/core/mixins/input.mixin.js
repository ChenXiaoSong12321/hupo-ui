export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    password: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    placeholderStyle: {
      type: String,
      default: ''
    },
    placeholderClass: {
      type: String,
      default: 'input-placeholder'
    },
    maxlength: {
      type: Number,
      default: 140
    },
    cursorSpacing: {
      type: Number,
      default: 0
    },
    focus: {
      type: Boolean,
      default: false
    },
    confirmType: {
      type: String,
      default: 'done'
    },
    confirmHold: {
      type: Boolean,
      default: false
    },
    cursor: {
      type: Number,
      default: 0
    },
    selectionStart: {
      type: Number,
      default: -1
    },
    selectionEnd: {
      type: Number,
      default: -1
    },
    adjustPosition: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    handleFocus(event) {
      this.$emit('focus', event)
    },
    handleBlur(event) {
      this.$emit('blur', event)
    },
    handleConfirm(event) {
      this.$emit('confirm', event)
    }
  }
}
