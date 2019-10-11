<template>
	<div class="find-box">
		<div class="find-left">
			<div class="banner">
				<img src="https://upload.jianshu.io/admin_banners/web_images/4741/240c3b01ebd63e7a7129976df20c5e10bd43d799.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540">
			</div>
			<ArticleList/>
			<div class="load-more-btn">
				<el-button>阅读更多</el-button>
			</div>
			<div class="friend-link">
				<a href="#">关于简书</a> |
				<a href="#">联系我们</a> |
				<a href="#">加入我们</a> |
				<a href="#">简书出版</a> |
				<a href="#">帮助中心</a> |
				<a href="#">合作伙伴</a>
			</div>
		</div>
		<div class="find-right">
			<div class="board">
				<router-link to="/">
					<img src="../assets/images/banner-s-01.png">
				</router-link>
				<router-link to="/">
					<img src="../assets/images/banner-s-02.png">
				</router-link>
				<router-link to="/">
					<img src="../assets/images/banner-s-03.png">
				</router-link>
				<router-link to="/">
					<img src="../assets/images/banner-s-04.png">
				</router-link>
			</div>
			<div class="download-erweima">
				<img class="qrcode" src="../assets/images/erweima.png" />
				<div class="info">
					<div class="title">下载简书手机App<i class="iconfont iconxiangyou"></i></div>
					<div class="description">随时随地发现和创作内容</div>
				</div>
			</div>
			<AuthorList/>
		</div>
	</div>
</template>

<script>
	import AuthorList from '@/components/find/AuthorList.vue'
	import ArticleList from '@/components/ArticleList.vue'
	
	export default {
		name: 'find',
		components: {
			AuthorList,
			ArticleList
		}
	}
</script>

<style lang="scss">
	.find-box {
		width: 1000px;
		margin: 0 auto;
    display: flex;
		.find-left {
			flex: 1;
			padding-top: 30px;
			margin-right: 40px;
			.banner {
				margin-bottom: 30px;
				img {
					width: 100%;
					height: 270px;
					background-color: hsla(0,0%,71%,.2);
					border-radius: 6px;
				}
			}
			.load-more-btn {
				button {
					width: 100%;
					height: 40px;
					margin: 30px auto 60px;
					padding: 10px 15px;
					text-align: center;
					font-size: 15px;
					border-radius: 20px;
					color: #fff;
					background-color: #a5a5a5;
					border: 0;
					&:hover {
						background-color: #9b9b9b;
					}
				}
			}
			.friend-link {
				color: #969696;
				a {
					color: #969696;
					font-size: 12px;
				}
			}
		}

		.find-right {
			width: 280px;
			padding-top: 30px;

			.board {
				a {
					display: block;
					margin-bottom: 6px;
					cursor: pointer;

					img {
						width: 280px;
						height: 50px;
					}
				}
			}

			.download-erweima {
				display: flex;
				margin-bottom: 30px;
				padding: 10px 22px;
				width: 100%;
				border: 1px solid #f0f0f0;
				border-radius: 6px;
				background-color: #fff;
				box-sizing: border-box;

				.qrcode {
					width: 60px;
					height: 60px;
					opacity: .85;
				}

				.info {
					margin-left: 10px;
					margin-top: 10px;

					.title {
						font-size: 15px;
						color: #333;
					}

					.description {
						margin-top: 4px;
						font-size: 13px;
						color: #999;
					}
				}
			}
		}
	}
</style>
