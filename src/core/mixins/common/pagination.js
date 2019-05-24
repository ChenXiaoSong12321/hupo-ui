import difference from '../../difference/difference.interface'
export default class Pagination {
  methods = {
    $stopRefresh() {
      const paginationArr = difference.selector(this, '.cml-h-pagination')
      if (!paginationArr.length) {
        console.warn('can not find the component of pagination')
        return
      }
      const pagination = paginationArr[0]
      pagination.stopRefresh()
    }
  }
}
