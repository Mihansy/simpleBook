<template>
	<div class="atten-box">
		<div class="atten-left-wrap">
			<div class="atten-left-title">
				<span class="all-atten">全部关注</span>
				<span class="add-btn"><i class="iconfont iconjiahaob"></i>添加关注</span>
			</div>
			<ul class="atten-left-nav">
				<li class="active">
					<img src="https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp">
					<span class="name">简友圈</span>
					<span class="count">100</span>
				</li>
				<li>
					<img src="https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp">
					<span class="name">简友圈</span>
					<span class="count">100</span>
				</li>
				<li>
					<img src="https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp">
					<span class="name">简友圈</span>
					<span class="count">100</span>
				</li>
			</ul>
		</div>
		<div class="atten-right-wrap">
			<div class="atten-right-top">
				<img @click="toSpecialSubject" src="https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240/format/webp"
				 alt="">
				<div class="name">
					<div class="name-theme" @click="toSpecialSubject">摄影</div>
					<div class="name-info">
						<span class="user">简书</span>编 · 收录了<span>143323</span>篇文章 · <span>2474143</span>人关注
					</div>
				</div>
				<div class="btns">
					<el-button type="primary" round>投稿</el-button>
					<el-button type="primary" round @click="toSpecialSubject">专题主页 > </el-button>
				</div>
			</div>
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="最新收录" name="first">
					<span slot="label"><i class="iconfont iconwenzhang2"></i> 最新收录</span>
					<ArticleList/>
				</el-tab-pane>
				<el-tab-pane label="最新评论" name="second">
					<span slot="label"><i class="iconfont iconpinglunzu"></i> 最新评论</span>
					<ArticleList/>
				</el-tab-pane>
				<el-tab-pane label="热门" name="third">
					<span slot="label"><i class="iconfont iconremen"></i> 热门</span>
					<ArticleList/>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	import ArticleList from '@/components/ArticleList.vue'
	
	export default {
		name: 'attention',
		components: {
			ArticleList
		},
		data() {
			return {
				activeName: 'first'
			}
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			toSpecialSubject() {
				this.$router.push({
					path: '/attention/specialSubject'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '@/assets/scss/common.scss';
	.atten-box {
		width: 1000px;
		margin: 0 auto;
		display: flex;

		.atten-left-wrap {
			width: 262px;
			margin-right: 40px;
			padding-top: 30px;

			.atten-left-title {
				overflow: hidden;
				padding: 0 13px 10px;
				border-bottom: 1px solid #f0f0f0;

				.all-atten {
					float: left;
					font-size: 16px;
				}

				.add-btn {
					float: right;
					cursor: pointer;

					i {
						font-weight: 600;
					}
				}
			}

			.atten-left-nav {
				li {
					display: flex;
					padding: 10px 13px;
					line-height: 40px;
					cursor: pointer;

					&:hover,
					&.active {
						background-color: rgba(240, 240, 240, .7);
						border-radius: 5px 0 0 5px;
					}

					img {
						width: 40px;
						height: 40px;
						margin-right: 8px;
						display: block;
						border: 1px solid #ddd;
						border-radius: 10%;
					}

					.name {
						flex: 1;
						vertical-align: middle;
						display: block;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.count {
						color: #969696;
					}
				}
			}
		}

		.atten-right-wrap {
			flex: 1;
			padding-top: 30px;
		}
	}
</style>
