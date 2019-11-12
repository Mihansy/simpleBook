<template>
	<div class="article-list">
		<ul class="note-list">
			<li class="have-img" 
			  v-for="(item, index) in list"
				:key="index">
				<a class="wrap-img">
					<img :src="item.pic"/>
				</a>
				<div class="content">
					<a class="title" @click="toArticleDetail">{{item.title}}</a>
					<p class="abstract">
						{{item.paragraph}}
					</p>
					<div class="meta">
						<span class="jsd-meta">
							<i class="iconfont icon31"></i>
							{{item.reward}}
						</span>
						<a class="nickname" target="_blank" @click="toPersonalHome">{{item.author}}</a>
						<a>
							<i class="iconfont icontubiaozhizuo-"></i> {{item.comment}}
						</a> <span><i class="iconfont iconxihuan"></i> {{item.like}}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'articleList',
		data() {
			return {

			}
		},
		props: {
			list: Array
		},
		methods: {
			toArticleDetail() {
				this.$router.push({
					path: '/articleDetail'
				})
			},
			toPersonalHome() {
				this.$router.push({
					path: '/personalHome'
				})
			}
		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	.article-list {
		.note-list {
			li {
				position: relative;
				width: 100%;
				margin: 0 0 15px;
				padding: 15px 2px 20px 0;
				border-bottom: 1px solid #f0f0f0;
				word-wrap: break-word;
				cursor: pointer;
				&.have-img {
					.wrap-img {
						position: absolute;
						top: 50%;
						margin-top: -60px;
						right: 0;
						width: 125px;
						height: 100px;
						img {
							width: 100%;
							height: 100%;
							border-radius: 4px;
							border: 1px solid #f0f0f0;
						}
					}
					.content {
						padding-right: 165px;
					}
				}
				.content {
					.title {
						margin: -7px 0 4px;
						display: inherit;
						font-size: 18px;
						font-weight: 700;
						line-height: 1.5;
						&:hover {
							text-decoration: underline;
						}
					}
					.abstract {
						margin: 0 0 8px;
						font-size: 13px;
						line-height: 24px;
						color: #999;
					}
					.meta {
						font-size: 12px;
						font-weight: 400;
						line-height: 20px;
						span,a {
							margin-right: 10px;
							color: #b4b4b4;
						}
						.jsd-meta {
						  color: #ea6f5a;
							i {
								font-size: 18px;
								vertical-align: middle;
							}
						}
					}
				}
			}
		}
	}
</style>
