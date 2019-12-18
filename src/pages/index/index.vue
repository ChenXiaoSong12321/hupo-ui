<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {

  },
  methods: {

  }
}
</script>

<style>
	.content {
		text-align: center;
		height: 400rpx;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
