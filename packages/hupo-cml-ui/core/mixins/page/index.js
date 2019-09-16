import Goto from '../common/goto'
import HDialog from '../common/dialog'
import HTool from '../common/tools'
import HToast from '../common/toast'
import PageLifeCycle from './PageLifeCycle.js'

import { pageBaseTreeMixin, pageEventMixin, timer } from '@hupo/core'

export default [pageBaseTreeMixin, pageEventMixin, HTool, Goto, HDialog, HToast, PageLifeCycle, timer]
