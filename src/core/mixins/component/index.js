import Goto from '../common/goto'
import HDialog from '../common/dialog'
import HTool from '../common/tools'
import HToast from '../common/toast'
import ComponentStackMixin from '../../pageStack/mixins/component'
export default {
  mixins: [ComponentStackMixin, Goto, HDialog, HTool, HToast]
}
