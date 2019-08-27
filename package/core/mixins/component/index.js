import Goto from '../common/goto'
import HDialog from '../common/dialog'
import HTool from '../common/tools'
import HToast from '../common/toast'
import HTimer from '../common/timer'

import {componentBaseTreeMixin, componentEventMixin} from '@hupo/core'
export default [componentBaseTreeMixin, componentEventMixin, Goto, HDialog, HTool, HTimer, HToast]
