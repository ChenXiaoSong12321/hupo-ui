import { INVISIABLE, PULLINGDOWN, PULLINGUP, FINISH } from '../../assets/js/const.js'

export default {
  props: {
    state: {
      type: String,
      default: INVISIABLE
    }
  },
  methods: {
    onPullup() {
      if(this.state == PULLINGDOWN || this.state == PULLINGUP)return
      this.$cmlEmit("pullup", this);
    }
  }
}
