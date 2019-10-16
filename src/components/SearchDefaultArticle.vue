<template>
	<!-- 搜索结果页 默认文章页 -->
	<div class="sda-box">
		<div class="top">
			<div class="relevant">
				<div class="title">相关用户<a class="rightfloat" href="#">查看全部 > </a></div>
				<ul class="list">
					<li>
						<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
						<div class="info">
							<div class="name">90后奶爸</div>
							<div>写了 0 字・3 喜欢</div>
						</div>
					</li>
					<li>
						<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
						<div class="info">
							<div class="name">90后奶爸</div>
							<div>写了 0 字・3 喜欢</div>
						</div>
					</li>
					<li>
						<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
						<div class="info">
							<div class="name">90后奶爸</div>
							<div>写了 0 字・3 喜欢</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="relevant">
				<div class="title">相关专题<a class="rightfloat" href="#">查看全部 > </a></div>
				<ul class="list">
					<li>
						<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
						<div class="info">
							<div class="name">两性情感</div>
							<div>15937 文章・6569 关注</div>
						</div>
					</li>
					<li>
						<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
						<div class="info">
							<div class="name">爱情答疑</div>
							<div>270 文章・2029 关注</div>
						</div>
					</li>
					<li>
						<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
						<div class="info">
							<div class="name">运动康复与健身</div>
							<div>214 文章・292 关注</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	  <div class="order clearfix">
			<div class="leftfloat left">
				<span class="current">综合排序</span>・
				<span>热门文章</span>・
				<span>最新发布</span>・
				<span>最新评论</span>&nbsp;&nbsp;|&nbsp;&nbsp;
				<span @click="handleShowSelect">时间顺序</span>&nbsp;&nbsp;
				<el-select v-show="isTimeOrder" v-model="value" placeholder="时间不限">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="rightfloat right">216330 个结果</div>
		</div>
	  <ul class="clearfix sda-article-list">
			<li>
				<div class="sda-article-top">
					<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
					<span class="name">Sempliciy</span>
					<span class="time">1年前</span>
				</div>
				<h2 class="title">给你90天，成为不一样的自己</h2>
				<div class="desc">我却是一个超级有毅力人，只要下定决心去坚持就一定会去做。 为了改变我的三分钟热度性格，我曾给自己提出一个要求，就是以“22天习惯养成”为基础。只不过，我要求自己，如果真正开始一件事就至少要坚持90天……以上，而一旦坚持了90天，接下来的继续也就十分容易了。它对我的确受益匪浅，我想把它也分享给已在职场的你。 如果当年我在职场，也有人能告诉我这样一个方法，我想我会比现在更好。 你的职场就是你的微缩人生……，无论你换了什么工作，什么公司，都无济于事。因为你根本没想让自己成熟起来，想让自己变的更优秀也不过是一句口头禅。 所以，我要拉你到我的计划。 你要认真看好，下面这10条，每天你都要做到，要至少坚持90天……</div>
				<div class="icons">
					<span><i class="iconfont icontubiaozhizuo-"></i>170980</span>
					<span><i class="iconfont icontubiaozhizuo-"></i>580</span>
					<span><i class="iconfont iconxihuan"></i>1980</span>
					<span><i class="iconfont iconshang"></i>17</span>
				</div>
			</li>
			<li>
				<div class="sda-article-top">
					<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
					<span class="name">Sempliciy</span>
					<span class="time">1年前</span>
				</div>
				<h2 class="title">单身是最好的升值期</h2>
				<div class="desc">我却是一个超级有毅力人，只要下定决心去坚持就一定会去做。 为了改变我的三分钟热度性格，我曾给自己提出一个要求，就是以“22天习惯养成”为基础。只不过，我要求自己，如果真正开始一件事就至少要坚持90天……以上，而一旦坚持了90天，接下来的继续也就十分容易了。它对我的确受益匪浅，我想把它也分享给已在职场的你。 如果当年我在职场，也有人能告诉我这样一个方法，我想我会比现在更好。 你的职场就是你的微缩人生……，无论你换了什么工作，什么公司，都无济于事。因为你根本没想让自己成熟起来，想让自己变的更优秀也不过是一句口头禅。 所以，我要拉你到我的计划。 你要认真看好，下面这10条，每天你都要做到，要至少坚持90天……</div>
				<div class="icons">
					<span><i class="iconfont icontubiaozhizuo-"></i>170980</span>
					<span><i class="iconfont icontubiaozhizuo-"></i>580</span>
					<span><i class="iconfont iconxihuan"></i>1980</span>
					<span><i class="iconfont iconshang"></i>17</span>
				</div>
			</li>
			<li>
				<div class="sda-article-top">
					<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
					<span class="name">Sempliciy</span>
					<span class="time">1年前</span>
				</div>
				<h2 class="title">你才20多岁，为什么总怕来不及</h2>
				<div class="desc">我却是一个超级有毅力人，只要下定决心去坚持就一定会去做。 为了改变我的三分钟热度性格，我曾给自己提出一个要求，就是以“22天习惯养成”为基础。只不过，我要求自己，如果真正开始一件事就至少要坚持90天……以上，而一旦坚持了90天，接下来的继续也就十分容易了。它对我的确受益匪浅，我想把它也分享给已在职场的你。 如果当年我在职场，也有人能告诉我这样一个方法，我想我会比现在更好。 你的职场就是你的微缩人生……，无论你换了什么工作，什么公司，都无济于事。因为你根本没想让自己成熟起来，想让自己变的更优秀也不过是一句口头禅。 所以，我要拉你到我的计划。 你要认真看好，下面这10条，每天你都要做到，要至少坚持90天……</div>
				<div class="icons">
					<span><i class="iconfont icontubiaozhizuo-"></i>170980</span>
					<span><i class="iconfont icontubiaozhizuo-"></i>580</span>
					<span><i class="iconfont iconxihuan"></i>1980</span>
					<span><i class="iconfont iconshang"></i>17</span>
				</div>
			</li>
		</ul>
		<div class="sda-article-page">
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="1000">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '1',
					label: '时间不限'
				}, {
					value: '2',
					label: '最近一周'
				}, {
					value: '3',
					label: '最近一天'
				}, {
					value: '4',
					label: '最近三月'
				}],
				value: '',
				isTimeOrder: false
			}
		},
		methods: {
			handleShowSelect() {
				this.isTimeOrder = true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.sda-box {
		.top {
			margin-bottom: 20px;
			background-color: hsla(0,0%,71%,.1);
			border: 1px solid #f0f0f0;
			border-radius: 4px;
			.relevant {
				padding: 20px 0;
				&:first-child {
					border-bottom: 1px solid #f0f0f0;
				}
				.title {
					margin-left: 18px;
					a {
						margin-right: 18px;
						color: #3194d0;
						font-size: 12px;
					}
				}
				.list {
					display: flex;
					justify-content: space-between;
					margin: 10px 18px 0;
					li {
						.userimg {
							display: inline-block;
							vertical-align: top;
							margin-right: 6px;
							width: 48px;
							height: 48px;
							border: 1px solid #ddd;
							border-radius: 50%;
						}
						.info {
							display: inline-block;
							vertical-align: top;
							div {
								margin-top: 5px;
								font-size: 12px;
								color: #969696;
							}
							.name {
								color: #333;
								margin-top: 3px;
								font-size: 16px;
								font-weight: 700;
								vertical-align: middle;
								text-overflow: ellipsis;
								overflow: hidden;
								white-space: nowrap;
							}
						}
					}
				}
			}
		}
		.order {
			color: #969696;
			.left {
				line-height: 40px;
				span {
					cursor: pointer;
				}
				.current {
					color: #333;
				}
				.el-select {
					width: 105px;
				}
			}
			.right {
				line-height: 40px;
			}
		}
		.sda-article-list {
			padding-top: 10px;
			li {
				width: 100%;
				margin: 0 0 15px;
				padding: 15px 2px 20px 0;
				border-bottom: 1px solid #f0f0f0;
				word-wrap: break-word;
				.sda-article-top {
					display: flex;
					height: 30px;
					margin-bottom: 14px;
					line-height: 30px;
					.userimg {
						width: 24px;
						height: 24px;
						cursor: pointer;
						border: 1px solid #ddd;
						border-radius: 50%;
					}
					.name {
						margin: 0 10px;
					}
					.time {
						color: #969696;
					}
				}
				.title {
					margin: -7px 0 4px;
					font-size: 18px;
					font-weight: 700;
					line-height: 1.5;
				}
				.desc {
					margin: 6px 0 8px;
					font-size: 14px;
					line-height: 24px;
					color: #999;
				}
				.icons {
					font-size: 12px;
					color: #b4b4b4;
					span {
						margin-right: 16px;
						i {
							font-size: 14px;
							margin-right: 4px;
						}
					}
				}
			}
		}
		.sda-article-page {
			margin: 30px 0;
			text-align: center;
		}
	}
	
</style>
