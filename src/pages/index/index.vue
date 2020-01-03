<template>
  <h-page title="h-popup-base 演示">
    <view class="container">
      <h-tag type="member">儿童</h-tag>
    </view>
  </h-page>
</template>
<script>
export default {
  data: function() {
    return {
      test: {
        data1: '1',
        data2: '2',
        data3: '3',
        data4: '4',
        data5: '5',
        data6: '6',
        data7: '7',
        data8: '8',
        data9: '9'
      },
      mask: true,
      show: false,
      show2: false,
      position: '',
      pos: ['left', 'top', 'right', 'bottom', ''],
      posi: 0
    }
  },
  computed: {
    contentStyle() {
      let style
      switch (this.position) {
        case 'left':
          style = 'width:200rpx;background:#fff;'
          break
        case 'top':
          style = 'height:200rpx;background:#fff;'
          break
        case 'right':
          style = 'width:200rpx;background:#fff;'
          break
        case 'bottom':
          style = 'height:200rpx;background:#fff;'
          break
        default:
          style =
            'display:block;width: 500rpx;height: 200rpx;background: #fff;'
          break
      }
      return style
    }
  },
  methods: {
    showPopup() {
      this.show = true
    },

    showPopup2(e) {
      // this.position = e
      // console.log(e)
      // this.show2 = true
      this._alert({
        message: `<p>您的账号已在其他地方登录，请重新验证身份。</p>
                   <p>您的账号已在其他地方登录，请重新验证身份。</p>
          `,
        title: 'alert',
        confirmButtonText: 'perfect'
      })
    },
    closePopup() {
      this.show = false
      this.show2 = false
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  .btn {
    margin-top: 20rpx;
  }
}
</style>
