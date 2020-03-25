<template>
  <h-page title="Button 按钮" fixed>
    <demo-block title="按钮类型" padding>
      <demo-row>
        <h-button type="primary" class="h-demo-button-item" size="mediumsmall">主要按钮</h-button>
        <h-button type="secondary" class="h-demo-button-item" size="mediumsmall">二级按钮</h-button>
        <h-button type="preheat" class="h-demo-button-item" size="mediumsmall">成功按钮</h-button>
        <h-button type="forbidden" class="h-demo-button-item" size="mediumsmall">禁用按钮</h-button>
        <h-button type="member" class="h-demo-button-item" size="mediumsmall">会员按钮</h-button>
        <h-button type="specialmember" class="h-demo-button-item" size="mediumsmall">黑金会员</h-button>
      </demo-row>
    </demo-block>
    <demo-block title="朴素按钮" padding>
      <demo-row>
        <h-button type="primary" class="h-demo-button-item" size="mediumsmall" plain>主要按钮</h-button>
        <h-button type="secondary" class="h-demo-button-item" size="mediumsmall" plain>二级按钮</h-button>
        <h-button type="preheat" class="h-demo-button-item" size="mediumsmall" plain>成功按钮</h-button>
        <h-button type="forbidden" class="h-demo-button-item" size="mediumsmall" plain>禁用按钮</h-button>
      </demo-row>
    </demo-block>
    <demo-block title="按钮尺寸" padding>
      <demo-row>
        <h-button type="primary" size="max" class="h-demo-button-item">大号按钮</h-button>
        <h-button type="primary" size="medium" class="h-demo-button-item">普通按钮</h-button>
        <h-button type="primary" size="mediumsmall" class="h-demo-button-item">小型按钮</h-button>
        <h-button type="primary" size="mini" class="h-demo-button-item">迷你按钮</h-button>
      </demo-row>
    </demo-block>
    <demo-block title="圆角按钮" padding>
      <demo-row>
        <h-button type="secondary" size="medium" class="h-demo-button-item" :radius="false">方形按钮</h-button>
        <h-button type="secondary" size="medium" class="h-demo-button-item">圆角按钮</h-button>
      </demo-row>
    </demo-block>
    <demo-block title="图标按钮" padding>
      <demo-row>
        <h-button type="secondary" size="medium" class="h-demo-button-item" :radius="false">
          <h-icon name="iconmorenbugouxuanbeifen" style="margin-right: 10rpx; font-size: 24rpx"></h-icon>确认
        </h-button>
      </demo-row>
    </demo-block>
  </h-page>
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
@import "~@hupo/core-sass-bem";
@include b(demo-button) {
  @include e(item) {
    margin: 0 15px 15px 0;
  }
}
</style>
