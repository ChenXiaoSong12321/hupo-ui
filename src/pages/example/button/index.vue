<template>
  <demo-page title="Button 按钮">
    <demo-block title="按钮类型" padding>
      <demo-row>
        <view class="h-demo-button-item">
          <h-button type="primary" size="mediumsmall">主要按钮</h-button>
        </view>
        <view class="h-demo-button-item">
          <h-button type="secondary" size="mediumsmall">二级按钮</h-button>
        </view>
        <view class="h-demo-button-item">
          <h-button type="preheat" size="mediumsmall">成功按钮</h-button>
        </view>
        <view class="h-demo-button-item">
          <h-button type="forbidden" size="mediumsmall">禁用按钮</h-button>
        </view>
        <view class="h-demo-button-item">
          <h-button type="member" size="mediumsmall">会员按钮</h-button>
        </view>
        <view class="h-demo-button-item">
          <h-button type="specialmember" size="mediumsmall">黑金会员</h-button>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="朴素按钮" padding>
      <demo-row>
        <view class="h-demo-button-item">
          <h-button type="primary" size="mediumsmall" plain>主要按钮</h-button>
        </view>
        <view class="h-demo-button-item">
          <h-button type="secondary" size="mediumsmall" plain>二级按钮</h-button>
        </view>
        <view class="h-demo-button-item">
          <h-button type="preheat" size="mediumsmall" plain>成功按钮</h-button>
        </view>
        <view class="h-demo-button-item">
          <h-button type="forbidden" size="mediumsmall" plain>禁用按钮</h-button>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="按钮尺寸" padding>
      <demo-row>
        <view class="h-demo-button-item">
          <h-button type="primary" size="max">大号按钮</h-button>
        </view>
        <view class="h-demo-button-item">
          <h-button type="primary" size="medium">普通按钮</h-button>
        </view>
        <view class="h-demo-button-item">
          <h-button type="primary" size="mediumsmall">小型按钮</h-button>
        </view>
        <view class="h-demo-button-item">
          <h-button type="primary" size="mini">迷你按钮</h-button>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="圆角按钮" padding>
      <demo-row>
        <view class="h-demo-button-item">
          <h-button type="secondary" size="medium" :radius="false">方形按钮</h-button>
        </view>
        <view class="h-demo-button-item">
          <h-button type="secondary" size="medium">圆角按钮</h-button>
        </view>
      </demo-row>
    </demo-block>
    <demo-block title="图标按钮" padding>
      <demo-row>
        <view class="h-demo-button-item">
          <h-button type="secondary" size="medium" :radius="false">
            <h-icon name="success-l" style="margin-right: 10rpx; font-size: 24rpx"></h-icon>确认
          </h-button>
        </view>
      </demo-row>
    </demo-block>
  </demo-page>
</template>

<script>
/*
  尺寸：
  full:( width:100%, height:100%, font-size:32rpx),
  max:( width:600rpx, height:80rpx, font-size:32rpx),
  large:( width:560rpx, height:70rpx, font-size:32rpx),
  medium:( width:240rpx, height:70rpx, font-size:28rpx),
  mediumsmall:( width:150rpx, height:50rpx, font-size:24rpx),
  small:( width:120rpx, height:50rpx, font-size:24rpx),
  mini:( width:100rpx, height:40rpx, font-size:24rpx)

  类型：
  default:( color:$--white, background-color:$--primary-color-CM1, plain-color:$--primary-color-CM1 ),
  primary:( color:$--white, background-color:$--primary-color-CM1, plain-color:$--primary-color-CM1 ),
  secondary:( color:$--white, background-color:$--secondary-color-CA2, plain-color:$--secondary-color-CA2 ),
  preheat:( color:$--white, background-color:$--preheat-color, plain-color:$--preheat-color ),
  muted:( color:$--font-color-FC2, background-color:$--border-color-PC1, plain-color:$--border-color-PC1 ),
  forbidden:( color:$--font-color-FC3, background-color:$--border-color-PC1, plain-color:$--border-color-PC1 ),
  member:( color:$--font-color-FC1, background-color:$--member-color-MCM1, plain-color:$--font-color-FC1 ),
  specialmember:( color:$--member-color-MCM1, background-color:$--font-color-FC1, plain-color:$--member-color-MCM1 )
*/
export default {

}
</script>
<style lang="scss">
@import '~@hupo/core-sass-bem';
@include b(demo-button) {
  @include e(item) {
    margin: 0 15px 15px 0;
  }
}
</style>
