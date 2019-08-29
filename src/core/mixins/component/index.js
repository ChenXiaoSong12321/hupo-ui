import Goto from '../common/goto'
import HDialog from '../common/dialog'
import HTool from '../common/tools'
import HToast from '../common/toast'

import {componentBaseTreeMixin, componentEventMixin, timer} from '@hupo/core'
export default [componentBaseTreeMixin, componentEventMixin, Goto, HDialog, HTool, HToast, timer]
