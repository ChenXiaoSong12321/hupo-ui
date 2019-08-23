import difference from '../../difference/difference.interface'
export default {
  data: {
    pageCount: 20,
    pageIndex: 1
  },
  methods: {
    $stopRefresh() {
      const paginationArr = difference.selector(this, '.cml-h-pagination')
      if (!paginationArr.length) {
        console.warn('can not find component of pagination')
        return
      }
      const pagination = paginationArr[0]
      pagination.stopRefresh()
    }
  }
}
