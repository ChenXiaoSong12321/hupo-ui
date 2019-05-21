import { PULLINGDOWN, PULLINGUP, FINISH } from '../../assets/js/const.js'

export default class HScrollView {
  methods = {
    onPullup() {
      if(this.status == PULLINGDOWN || this.status == PULLINGUP)return
      this.status = PULLINGUP
      this.$cmlEmit("pullup", this);
    },
    stop() {
      this.status = FINISH;
    }
  };
}
