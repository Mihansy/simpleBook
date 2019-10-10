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
			<div class="leftfloat search">
				<input type="text" placeholder="搜索">
				<span class="search-btn search-btn-focus">
					<i class="iconfont icon41"></i>
				</span>
				<div class="tipbox">
					<div class="search-trending">
						<div class="search-trending-header clearfix">
							<span>热门搜索</span> 
							<a><i class="iconfont iconiconset0344"></i> 换一批</a>
						</div>
						<ul class="search-trending-tag-wrap">
							<li><a href="" target="_blank">微信</a></li>
						</ul>
					</div>
					<div class="search-recent">
						<ul class="search-recent-item-wrap">
							<li>
								<a href="" target="_blank">
									<i class="iconfont iconshijian"></i> 
									<span>国庆70周年</span> 
									<i class="iconfont iconxiangyou"></i>
								</a>
							</li>
							<li>
								<a href="" target="_blank">
									<i class="iconfont iconshijian"></i> 
									<span>国庆周年</span> 
									<i class="iconfont iconxiangyou"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="rightfloat user-info">
				<div>
					<a href="">
						<img src="../assets/images/head.png" width="40">
					</a>
				</div>
				<ul>
					<li><i class="iconfont iconportrait"></i>我的主页</li>
					<li><i class="iconfont iconshoucang"></i>收藏的文章</li>
					<li><i class="iconfont iconxihuan"></i>喜欢的文章</li>
					<li><i class="iconfont iconqian"></i>已购内容</li>
					<li><i class="iconfont icon20"></i>我的钱包</li>
					<li><i class="iconfont iconshezhi"></i>设置</li>
					<li><i class="iconfont iconbangzhu"></i>帮助与反馈</li>
					<li><i class="iconfont icontuichu"></i>退出</li>
				</ul>
			</div>
			<div class="rightfloat setting-theme-btn">
				<span><i class="iconfont iconzitifont5"></i></span>
				<div class="setting-theme-box">
					<div><i class="iconfont iconmoonbyueliang"></i>&nbsp;&nbsp;夜间模式&nbsp;&nbsp;&nbsp;&nbsp;
						<el-switch v-model="isNight" active-color="#6dacf4"></el-switch>
					</div>
					<div><i class="iconfont iconai247" style="font-size: 24px;"></i>&nbsp;设为宋体&nbsp;&nbsp;&nbsp;
						<el-switch v-model="isSong" active-color="#6dacf4"></el-switch>
					</div>
				</div>
			</div>
		</div>
		<button>写文章</button>
	</div>
</template>

<script>
	export default {
		name: 'headmenu',
		data() {
			return {
				isNight: true,
				isSong: true
			}
		},
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

		.logo {
			width: 200px;
			height: 54px;
			padding-top: 8px;
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

			.search {
				position: relative;
				height: 38px;
				margin-top: 9px;

				input {
					padding: 0 40px 0 20px;
					width: 100px;
					height: 38px;
					font-size: 16px;
					border-radius: 40px;
					transition: width .5s;
					transition-delay: .1s;

					&:focus {
						width: 190px;
					}
				}

				.search-btn {
					position: absolute;
					top: 5px;
					right: 7px;
					width: 30px;
					height: 30px;
					color: #969696;
					text-align: center;
					border-radius: 50%;
					cursor: pointer;

					i {
						font-size: 18px;
						line-height: 28px;
					}

					&.search-btn-focus {
						background-color: #999;

						i {
							color: #fff;
						}
					}
				}
				.tipbox {
					position: absolute;
					left: 0;
					top: 42px;
					display: none;
					box-shadow: 0 0 8px rgba(0,0,0,.2);
					margin-top: 9px;
					width: 250px;
					border-radius: 4px;
					&:before {
						position: absolute;
						top: -20px;
						left: 27px;
						z-index: 1;
						content: "";
						border: 10px solid transparent;
					}
					.search-trending {
						padding: 20px 20px 10px;
						.search-trending-header {
							height: 20px;
							margin-bottom: 10px;
							span {
								float: left;
								font-size: 14px;
							}
							a {
								float: right;
								font-size: 14px;
								cursor: pointer;
                i {
									font-size: 14px;
								}
							}
						}
						.search-trending-tag-wrap {
							li {
								margin-right: 10px;
								display: inline-block;
								line-height: 28px;
								a {
									padding: 2px 6px;
									font-size: 12px;
									border-radius: 3px;
								}
							} 
						}
					}
					.search-recent {
						padding: 5px;
						.search-recent-item-wrap {
							li {
								line-height: 20px;
								margin-right: 0;
								a {
									display: block;
									line-height: 20px;
									padding: 10px 15px;
									font-size: 14px;
									position: relative;
									span {
										vertical-align: middle;
										overflow: hidden;
										text-overflow: ellipsis;
										white-space: nowrap;
										display: block;
										padding-right: 30px;
									}
									.iconshijian {
										float: left;
										margin-right: 10px;
									}
									.iconxiangyou {
										position: absolute;
										right: 15px;
										top: 10px;
										color: #a0a0a0;
									}
								}
							}
						}
					}
				}
			}

			.user-info {
				position: relative;
				margin-left: 30px;

				div {
					padding: 2px 10px 2px 2px;

					a {
						position: relative;
						display: block;
						cursor: pointer;
						width: 40px;
						height: 40px;
						margin: 8px 24px 8px 16px;

						&:before {
							content: "";
							position: absolute;
							top: 18px;
							right: -16px;
							border-left: 5px solid transparent;
							border-right: 5px solid transparent;
							border-top: 6px solid #999;
						}

						img {
							display: block;
							width: 40px;
							height: 40px;
							border-radius: 50%;
							overflow: hidden;
						}
					}
				}

				ul {
					position: absolute;
					top: 100%;
					left: 0;
					z-index: 1000;
					display: none;
					float: left;
					min-width: 160px;
					padding: 16px 0 6px;
					font-size: 14px;
					text-align: left;
					border-radius: 4px;
					border: 1px solid rgba(0, 0, 0, .15);
					box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
					background-clip: padding-box;

					li {
						padding: 10px 20px;
						height: 30px;
						cursor: pointer;

						i {
							margin-right: 12px;
							color: #ea6f5a;
							font-size: 22px;
						}
					}
				}
			}

			.setting-theme-btn {
				position: relative;
				line-height: 58px;

				span {
					cursor: pointer;

					i {
						font-size: 30px;
						font-weight: 600;
						color: #999;
					}
				}

				.setting-theme-box {
					position: absolute;
					right: -20px;
					top: 60px;
					z-index: 1;
					display: none;
					padding: 20px 20px 20px 24px;
					margin-left: -80px;
					width: 160px;
					border-radius: 4px;
					box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
					filter: drop-shadow(0 0 8px rgba(0, 0, 0, .1));

					&:before {
						position: absolute;
						top: -17px;
						right: 22px;
						content: "";
						display: inline-block;
						border: 9px solid transparent;
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
