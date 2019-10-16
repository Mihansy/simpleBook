<template>
	<div class="header">
		<a class="logo" href="">
			<img src="../assets/images/logo-small.png" width="200">
		</a>
		<div class="parent container">
			<div class="leftfloat nav">
				<router-link to="/">发现</router-link>
				<router-link to="/attention">关注</router-link>
				<div @mouseenter="enter" @mouseleave="leave">
					<router-link :to="{name: 'message', params: {componentName: 'Comment', currentIndex: 0}}">消息</router-link>
					<ul class="dropdown-menu" v-show="isHover">
						<li 
							v-for="(item, index) in menu" 
							:key="index" 
							@click="switchTab(index, item.componentName)">
							<div>
								<i class="iconfont" :class="item.icon"></i>
								<span>{{item.name}}</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="leftfloat search">
				<input 
				  type="text" 
					placeholder="搜索"
					v-model="keyword"
					@focus="showTip"
					@keyup.enter="toSearchResult(keyword)">
				<span class="search-btn search-btn-focus" @click="toSearchResult(keyword)">
					<i class="iconfont icon41"></i>
				</span>
				<div class="tipbox" v-show="isFocus">
					<div class="search-trending">
						<div class="search-trending-header clearfix">
							<span>热门搜索</span>
							<a><i class="iconfont iconiconset0344"></i> 换一批</a>
						</div>
						<ul class="search-trending-tag-wrap">
							<li v-for="(item, index) in hotWord" :key="index">
								<span @click="toSearchResult(item)">{{item}}</span>
								<!-- tag="a" target="_blank" 表示在新窗口打开页面 -->
								<!-- <router-link 
								  :to="{path: '/searchResult', query: {keyword: item}}" 
									tag="a" 
									target="_blank">
									{{item}}
								</router-link> -->
							</li>
						</ul>
					</div>
					<div class="search-recent">
						<ul class="search-recent-item-wrap">
							<li v-for="(item, index) in recentWord" :key="item.id">
								<div @click="toSearchResult(item.name)">
									<i class="iconfont iconshijian"></i>
									<span>{{item.name}}</span>
									<i class="iconfont iconguanbi" @click.stop="delWord(index)"></i>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="rightfloat login-btns">
				<span class="sign-in-btn" @click="toLogin('sign-in')">登录</span>
				<span class="sign-up-btn" @click="toLogin('sign-up')">注册</span>
			</div>
			<div class="rightfloat user-info">
				<div @click="toPersonalHome">
					<a>
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
				<span @click="showSetting"><i class="iconfont iconzitifont5"></i></span>
				<div class="setting-theme-box" v-show="isSetting">
					<div>
						<i class="iconfont iconmoonbyueliang"></i><span style="padding: 0 30px 0 10px;">夜间模式</span>
						<el-switch v-model="theme.isNight" active-color="#6dacf4" @change="setTheme"></el-switch>
					</div>
					<div>
						<i class="iconfont iconai247" style="font-size: 24px; margin-left: -8px;"></i><span style="padding: 0 30px 0 10px;">设为宋体</span>
						<el-switch v-model="theme.isSong" active-color="#6dacf4" @change="setTheme"></el-switch>
					</div>
				</div>
			</div>
		</div>
		<button>写文章</button>
	</div>
</template>

<script>
	import Comment from '@/components/message/Comment.vue'
	import Contribute from '@/components/message/Contribute.vue'
	import Email from '@/components/message/Email.vue'
	import Like from '@/components/message/Like.vue'
	import AllAttention from '@/components/message/AllAttention.vue'
	import AppreciatePay from '@/components/message/AppreciatePay.vue'
	import Other from '@/components/message/Other.vue'
	import {Bus} from '@/assets/js/bus.js'
	
	export default {
		name: 'headmenu',
		components: {
			Comment,
			Contribute,
			Email,
			Like,
			AllAttention,
			AppreciatePay,
			Other
		},
		data() {
			return {
				menu: [{
					"icon": "iconpinglun",
					"name": "评论",
					"componentName": "Comment"
				},{
					"icon": "icone-mail_icon",
					"name": "简信",
					"componentName": "Email"
				},{
					"icon": "iconfuwuqingqiu",
					"name": "投稿请求",
					"componentName": "Contribute"
				},{
					"icon": "iconlike-1",
					"name": "喜欢和赞",
					"componentName": "Like"
				},{
					"icon": "iconguanzhuchenggong",
					"name": "关注",
					"componentName": "AllAttention"
				},{
					"icon": "iconqianfenleishouye",
					"name": "赞赏和付费",
					"componentName": "AppreciatePay"
				},{
					"icon": "iconcaidan1",
					"name": "其他提醒",
					"componentName": "Other"
				}],
				isNight: false,
				isSong: false,
				isHover: false,
				keyword: '',
				hotWord: ['微信', '北京', '70周年', 'vue', 'python', '90后脱发'],
				recentWord: [{
					name: '国庆70周年',
					id: '001'
				},{
					name: '容联七陌年',
					id: '002'
				},{
					name: 'pyecharts',
					id: '003'
				}],
				mask: {
					isMask: true,
					which: ''
				},
				theme: {
					isNight: false,
					isSong: false
				}
			}
		},
		props: {
			isFocus: {
				type: Boolean,
				default: false
			},
			isSetting: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			toPersonalHome() {
				this.$router.push({
					path: '/personalHome'
				})
			},
			toLogin(type) {
				this.$router.push({
					name: 'login',
					params: {
						type: type
					}
				})
			},
			enter() {
				this.isHover = true
			},
			leave() {
				this.isHover = false
			},
			switchTab(index, componentName) {
				const params = {
					componentName: componentName,
					currentIndex: index
				}
				//如果是当前页面，就把参数params传过去，切换组件。否则，跳转页面。
				if(this.$route.path == '/message') {
					Bus.$emit('changeComponent', params) //在该组件中定义，要调用Message组件中的bus事件名changeComponent
				}else{
					this.$router.push({
						name: 'message',
						params: params
					})
				}
			},
			showTip() {
				this.mask = {
					isMask: true,
					which: '1'
				}
				this.$emit('hasMask', this.mask)
			},
			toSearchResult(keyword) {
				if(keyword !== '') {
					this.mask = {
						isMask: false,
						which: '1'
					}
					this.$emit('hasMask', this.mask)
					
					let resultPage = this.$router.resolve({
						path: '/searchResult',
						query: {
							keyword: keyword
						}
					})
					window.open(resultPage.href, '_blank')
				}
			},
			delWord(index) {
				this.recentWord.splice(index, 1)
			},
			showSetting() {
				this.mask = {
					isMask: true,
					which: '2'
				}
				this.$emit('hasMask', this.mask)
			},
			setTheme() {
				console.log(this.theme)
				this.$emit('changeTheme', this.theme)
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
        position: relative;
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
				.dropdown-menu {
					position: absolute;
					top: 103%;
					left: 152px;
					z-index: 1000;
					width: 180px;
					border-radius: 0 0 4px 4px;
					min-width: 160px;
					padding: 5px 0;
					margin: -1px 0 0;
					text-align: left;
					background-color: #fff;
					box-shadow: 0 6px 12px rgba(0,0,0,.175);
					background-clip: padding-box;
					li {
						line-height: 20px;
						div {
							clear: both;
							font-weight: 400;
							font-size: 14px;
							color: #333;
							white-space: nowrap;
							height: auto;
							padding: 10px 20px;
							line-height: 30px;
							margin-right: 0;
							cursor: pointer;
							&:hover {
								background-color: rgba(240,240,240,.7);
							}
							i {
								margin-right: 15px;
								font-size: 22px;
								font-weight: 600;
								color: #ea6f5a;
								vertical-align: middle;
							}
							span {
								vertical-align: middle;
							}
						}
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
					z-index: 10;
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
					z-index: 9;
					box-shadow: 0 0 8px rgba(0, 0, 0, .2);
					margin-top: 9px;
					width: 250px;
					border-radius: 4px;

					&:before {
						position: absolute;
						top: -20px;
						left: 27px;
						z-index: 9;
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

								span {
									padding: 2px 6px;
									font-size: 12px;
									border-radius: 3px;
									cursor: pointer;
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

								div {
									line-height: 20px;
									padding: 10px 15px;
									font-size: 14px;
									position: relative;
									cursor: pointer;

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

									.iconguanbi {
										position: absolute;
										right: 15px;
										top: 10px;
										color: #a0a0a0;
										cursor: pointer;
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
					z-index: 9;
					display: none;
					float: left;
					min-width: 160px;
					padding: 16px 0 6px;
					font-size: 14px;
					text-align: left;
					border-radius: 4px;
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
				&:hover ul {
					display: block;
				}
			}
      .login-btns {
				font-size: 16px;
				.sign-in-btn {
					display: inline-block;
					margin: 18px 6px 0 10px;
					cursor: pointer;
				}
				.sign-up-btn {
					display: inline-block;
					font-weight: 400;
					text-align: center;
					vertical-align: middle;
					touch-action: manipulation;
					cursor: pointer;
					background-image: none;
					white-space: nowrap;
					padding: 6px 12px;
					user-select: none;
					width: 80px;
					height: 38px;
					line-height: 24px;
					margin: 0 5px 0 15px;
					border: 1px solid rgba(236,97,73,.7);
					border-radius: 20px;
					font-size: 15px;
					color: #ea6f5a;
					background-color: transparent;
					box-sizing: border-box;
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
					z-index: 9;
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
			margin: 8px 12px 0;
			border-radius: 20px;
			font-size: 15px;
			color: #fff;
			background-color: #ea6f5a;
			border: 1px solid transparent;
			cursor: pointer;
		}
	}
</style>
