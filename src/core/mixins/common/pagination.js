import difference from '../../difference/difference.interface'
export default class Pagination {
  created() {

  }
  methods = {
    setList(newList, oldList) {
      console.log(newList, oldList)
    },
    stop() {
      const pagination = difference.selectComponent(this, 'h-pagination')
      const pagination1 = difference.selector(this, 'cml-h-pagination')
      console.log(pagination, pagination1, 'pagination')
      if (!pagination) return
    }
  }
}
