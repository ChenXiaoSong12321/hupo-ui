export default {
  data: {
    pageCount: 20,
    pageIndex: 1
  },
  methods: {
    _stopRefresh() {
      return this._broadcast('h-page', 'stop')
    }
  }
}
