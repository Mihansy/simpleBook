<template>
	<div class="header">
		<a class="logo" href="">
			<img src="../assets/images/logo-small.png" width="200">
		</a>
		<div class="parent container">
			<div class="leftfloat nav">
				<router-link to="/">发现</router-link>
				<router-link to="/attention">关注</router-link>
				<router-link to="/message">消息</router-link>
			</div>
			<div class="leftfloat">
				<input type="text" placeholder="搜索">
				<span></span>
			</div>
			<div class="rightfloat">
				<a href="">
					<img src="../assets/images/logo-large.png">
				</a>
			</div>
			<div class="rightfloat">
				<a href="">
					Aa
				</a>
			</div>
		</div>
		<button>写文章</button>
	</div>
</template>

<script>
	export default {
		name: 'header'
	}
</script>

<style scoped lang="scss">
	.header {
		display: flex;
		justify-content: space-around;
		height: 58px;
		min-width: 768px;
		max-width: 1440px;
		margin: 0 auto;
		border-bottom: 1px solid #dfdfdf;
		.logo {
			width: 200px;
			height: 54px;
			padding-top: 3px;
		}
		.container {
			width: 1000px;
			height: 58px;
			.nav {
				display: flex;
				justify-content: start;
				a {
					display: block;
					height: 58px;
					line-height: 26px;
					padding: 15px;
					font-size: 18px;
					margin-right: 10px;
					box-sizing: border-box;
					&.router-link-exact-active {
						color: #ea6f5a;
					}
				}
			}
		}
		button {
			width: 100px;
			height: 40px;
			line-height: 24px;
			margin: 4px 12px 0;
			border-radius: 20px;
			font-size: 15px;
			color: #fff;
			background-color: #ea6f5a;
			border: 1px solid transparent;
			cursor: pointer;
		}
	}
</style>
