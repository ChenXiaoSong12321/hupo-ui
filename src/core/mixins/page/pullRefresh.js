export default {
  onPullDownRefresh() {
    this._broadcast('h-page', 'pulldown')
  },
  onReachBottom() {
    this._broadcast('h-page', 'pullup')
    // this._broadcast('h-pagination', 'pullup')
  }
}
