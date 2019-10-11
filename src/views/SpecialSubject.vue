<template>
	<div class="special-box">
		<div class="special-left-wrap">
			<div class="atten-right-top">
				<img src="https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240/format/webp"
				 alt="">
				<div class="name">
					<div class="name-theme">摄影</div>
					<div class="name-info">
						<span class="user">简书</span>编 · 收录了<span>143323</span>篇文章 · <span>2474143</span>人关注
					</div>
				</div>
				<div class="btns">
					<el-button type="primary" round>投稿</el-button>
					<el-button type="primary" round>√ 已关注</el-button>
				</div>
			</div>
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="最新收录" name="first">
					<span slot="label"><i class="iconfont iconwenzhang2"></i> 最新收录</span>
					<ArticleList />
				</el-tab-pane>
				<el-tab-pane label="最新评论" name="second">
					<span slot="label"><i class="iconfont iconpinglunzu"></i> 最新评论</span>
					<ArticleList />
				</el-tab-pane>
				<el-tab-pane label="热门" name="third">
					<span slot="label"><i class="iconfont iconremen"></i> 热门</span>
					<ArticleList />
				</el-tab-pane>
			</el-tabs>
		</div>
		<div class="special-right-wrap">
			<div class="special-right-title">专题公告</div>
			<div class="description js-description">
				<p>邂逅一个国家，讲述一座城市，这里有你期待的诗与远方。</p>

				<p>1.投稿请查看<a href="https://www.jianshu.com/p/946325a846b1">https://www.jianshu.com/p/946325a846b1</a>了解相关内容，鼓励作者优先投到自己所写内容所属的地区/大洲子专题；</p>

				<p>2.内容方向只收录优质攻略及旅行相关富有故事或极具特色的内容，拒收含有水印推广信息的投稿；</p>

				<p>3.以诗歌散文随笔摄影美食为主体的内容拒收，转投其他对应专题；</p>

			</div>
			<div class="share">
				<span>分享到</span>
				<a class="option" href="javascript:void((function(s,d,e,r,l,p,t,z,c){var%20f='http://v.t.sina.com.cn/share/share.php?appkey=1881139527',u=z||d.location,p=['&amp;url=',e(u),'&amp;title=',e(t||d.title),'&amp;source=',e(r),'&amp;sourceUrl=',e(l),'&amp;content=',c||'gb2312','&amp;pic=',e(p||'')].join('');function%20a(){if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,width=440,height=430,left=',(s.width-440)/2,',top=',(s.height-430)/2].join('')))u.href=[f,p].join('');};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else%20a();})(screen,document,encodeURIComponent,'','','http://upload.jianshu.io/collections/images/13/%E5%95%8A.png', '推荐专题《旅行·在路上》（ 分享自 @简书 ）','https://www.jianshu.com/c/5AUzod?utm_campaign=maleskine&amp;utm_content=collection&amp;utm_medium=reader_share&amp;utm_source=weibo','页面编码gb2312|utf-8默认gb2312'));">
					<i class="iconfont iconweibo" style="font-size: 26px;"></i>
				</a>
				<a class="option" data-action="weixin-share">
					<i class="iconfont iconweixin"></i>
				</a>
			</div>
			<div class="admin">
				<div>
					<p class="title">管理员</p>
					<ul class="list collection-editor">
						<li>
							<a href="/u/yZq3ZV" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/259/5210859b-fc54-4cf8-908f-830f0237926a.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"></a>
							<a href="/u/yZq3ZV" target="_blank" class="name">简书</a> <span class="tag">创建者</span>
						</li>
						<li>
							<a href="/u/e9dd67d5e1b0" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/3356997/f67e8c62-5ec8-4adc-83fc-a19779f961ca.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"></a>
							<a href="/u/e9dd67d5e1b0" target="_blank" class="name">苏羽Loner</a>
						</li>
					</ul>
				</div>
				<div>
					<div class="title">
						推荐作者(30)
						<i class="iconfont ic-navigation-help"></i>
					</div>
					<ul class="list collection-follower">
						<li>
							<a href="/u/6c47f63d67f6" target="_blank" class="avatar">
								<img src="//upload.jianshu.io/users/upload_avatars/16354774/b2af8088-4004-4fbc-af51-d204b6472373.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/c197b70a2cbc" target="_blank" class="avatar">
								<img src="//upload.jianshu.io/users/upload_avatars/16712024/e48f1b79-19bf-46da-9486-f1d07bcf9f3e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/15714a2e7323" target="_blank" class="avatar">
								<img src="//upload.jianshu.io/users/upload_avatars/16890458/896df681-7934-4a8d-9f7a-f0cd2e74e901?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/e0177cb24577" target="_blank" class="avatar">
								<img src="//upload.jianshu.io/users/upload_avatars/17398851/76ef37f6-9ad9-4799-8a8c-6612a53a958c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/7181af4becd7" target="_blank" class="avatar">
								<img src="//upload.jianshu.io/users/upload_avatars/17451807/bc64c978-66bc-42fb-b782-b2df7372412d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/46ab8e750804" target="_blank" class="avatar">
								<img src="//upload.jianshu.io/users/upload_avatars/17556503/1e52432f-fda5-4bf2-ac88-f6c7ddd7da9c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/147480f42037" target="_blank" class="avatar">
								<img src="//upload.jianshu.io/users/upload_avatars/17675709/e02ff9e4-c44b-475c-99a6-1b8b12e1a896.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/d58c86f9520a" target="_blank" class="avatar">
								<img src="//upload.jianshu.io/users/upload_avatars/17985717/9ab5348f-53ab-4d24-80fd-9475ad19764c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<a class="function-btn"><i class="iconfont iconcaidan1"></i></a>
					</ul>
				</div>
				<div>
					<div class="title">关注的人(3199896)</div>
					<ul class="list collection-follower">
						<li>
							<a href="/u/254f2c9b11d6" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/19756617/7dcec793-f132-4f9c-856d-2d0d74922c17?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/861722734111" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/19756612/fcc38302-950e-494b-aeff-829758f92c08?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/83520a8a7d76" target="_blank" class="avatar"><img src="//upload.jianshu.io/users/upload_avatars/19756530/60d457d3-c8ab-4587-8171-10323fc246de?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/f2acd7a976c0" target="_blank" class="avatar">
								<img src="//upload.jianshu.io/users/upload_avatars/19756596/23cbd44a-b9b0-49c5-a84f-48079976eaf7?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/eb4270fc5a3c" target="_blank" class="avatar">
								<img src="//upload.jianshu.io/users/upload_avatars/19756573/9ddfb4fd-61cb-4a33-a191-4f1dd2a80a74?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/cf0b4f98dcbd" target="_blank" class="avatar">
								<img src="//upload.jianshu.io/users/upload_avatars/19756541/c01d34d5-20a8-4318-8438-cf6012d02dfe?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<li>
							<a href="/u/05fb7aad6d81" target="_blank" class="avatar">
								<img src="//cdn2.jianshu.io/assets/default_avatar/5-33d2da32c552b8be9a0548c7a4576607.jpg">
							</a>
						</li>
						<li>
							<a href="/u/f6748b952df0" target="_blank" class="avatar">
								<img src="//upload.jianshu.io/users/upload_avatars/19756559/e3d690c7-1c0e-4d9d-a01b-eb4f3ff454d8?imageMogr2/auto-orient/strip|imageView2/1/w/32/h/32/format/webp">
							</a>
						</li>
						<a class="function-btn"><i class="iconfont iconcaidan1"></i></a>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ArticleList from '@/components/ArticleList.vue'
	export default {
		name: 'specialSubject',
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
		},
	}
</script>

<style scoped lang="scss">
	@import '@/assets/scss/common.scss';

	.special-box {
		width: 1000px;
		margin: 0 auto;
		display: flex;

		.special-left-wrap {
			flex: 1;
			margin-right: 40px;
			padding-top: 30px;
		}

		.special-right-wrap {
			width: 280px;
			padding-top: 30px;

			.special-right-title {
				margin-bottom: 10px;
				font-size: 14px;
				color: #969696;
			}

			.description {
				position: relative;
				margin-bottom: 20px;
				padding: 0 0 16px;
				text-align: left;
				font-size: 14px;
				border-bottom: 1px solid #f0f0f0;
				clear: both;
				word-break: break-word;
			}

			.share {
				margin-bottom: 20px;
				padding-bottom: 20px;
				border-bottom: 1px solid #f0f0f0;
				line-height: 30px;

				.option {
					margin-left: 10px;
					color: #333;

					i {
						font-size: 22px;
						vertical-align: middle;
					}
				}
			}

			.admin {
				div {
					.title {
						margin-bottom: 10px;
						font-size: 14px;
						color: #969696;
					}

					.list {
						margin-bottom: 20px;
						padding-bottom: 10px;
						list-style: none;
						border-bottom: 1px solid #f0f0f0;
						clear: both;

						li {
							margin-bottom: 10px;
							line-height: 20px;

							a {
								display: inline-block;
							}

							.avatar {
								margin-right: 5px;
								width: 32px;
								height: 32px;
								vertical-align: middle;
								margin-right: 10px;

								img {
									width: 100%;
									height: 100%;
									border: 1px solid #ddd;
									border-radius: 50%;
								}
							}

							.name {
								position: relative;
								max-width: 236px;
								vertical-align: middle;
								top: 1px;
								font-size: 14px;
								color: #333;
							}

							.tag {
								padding: 1px 3px;
								margin-left: 2px;
								border-radius: 3px;
								font-size: 12px;
								color: #969696;
								border: 1px solid #969696;
							}
						}

						&.collection-follower {
							li {
								display: inline-block;

								&:first-child {
									margin-left: -3px;
								}

								a {
									margin-right: -10px;

									img {
										border: 3px solid #fff;
										background-color: #fff;
									}
								}
							}

							.function-btn {
								position: absolute;
								margin-left: 3px;
								width: 32px;
								height: 32px;
								border: 3px solid #fff;
								border-radius: 50%;
								background-color: #f0f0f0;
								color: #999;
								text-align: center;
								line-height: 2;

								i {
									font-size: 12px;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
