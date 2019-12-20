<script>
export default {
  async onLaunch() {
    console.log(uni.px2rpx)
    console.log('App Launch')
    const test = await uni.getSystemInfo()
    console.log(test)
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/*  #ifdef H5 */
html,
body {
  margin: 0;
}
uni-view {
  display: block;
}
/*  #endif  */
</style>
