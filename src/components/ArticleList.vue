<template>
	<div class="article-list">
		<ul class="note-list">
			<li class="have-img">
				<a class="wrap-img">
					<img src="../assets/images/head.png"/>
				</a>
				<div class="content">
					<a class="title" @click="toArticleDetail">Kiwi 浏览器：完美支持 Chrome 扩展的安卓浏览器</a>
					<p class="abstract">
						前言 扩展程序可以说是 Chrome 浏览器的灵魂了，遗憾的是手机版 Chrome 并不支持扩展安装，虽然也很简洁快速，但总觉得差点意思…… 这...
					</p>
					<div class="meta">
						<a class="nickname" target="_blank" @click="toPersonalHome">己粒</a>
						<a>
							<i class="iconfont icontubiaozhizuo-"></i> 1
						</a> <span><i class="iconfont iconxihuan"></i> 7</span>
					</div>
				</div>
			</li>
			<li>
				<div class="content">
					<a class="title" @click="toArticleDetail">Kiwi 浏览器：完美支持 Chrome 扩展的安卓浏览器</a>
					<p class="abstract">
						前言 扩展程序可以说是 Chrome 浏览器的灵魂了，遗憾的是手机版 Chrome 并不支持扩展安装，虽然也很简洁快速，但总觉得差点意思…… 这...
					</p>
					<div class="meta">
						<span class="jsd-meta">
							<i class="iconfont icon31"></i> 2.2
						</span>
						<a class="nickname" target="_blank" @click="toPersonalHome">己粒</a>
						<a>
							<i class="iconfont icontubiaozhizuo-"></i> 1
						</a> <span><i class="iconfont iconxihuan"></i> 7</span>
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
