export default {
  onShareAppMessage() {
    return {
      title: 'Hupo UI 演示',
      path: this.__route__,
      imageUrl: ''
    }
  }
}
