<template>
	<div class="msg-right">
		<div class="msg-right-title">其他提醒</div>
		<div class="msg-right-content">
			<ul class="other-list">
				<li>
					<div class="info">
						<i class="iconfont iconbangzhu"></i>
						<span>你的文章</span>
						<a href="/p/15365fb33156">《学习使用vuex，简单理解state，getters，mutations，actions》</a><span>已转为仅自己可见，如有疑问请查看<a href="https://www.jianshu.com/p/15f4a9bd6321">《为什么文章会被锁定？》</a>或邮件联系
							help@jianshu.com，谢谢你的分享</span>
					</div>
					<div class="time">2019.05.28 17:16</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'other'
	}
</script>

<style scoped lang="scss">
	@import '@/assets/scss/common.scss';

	.msg-right {
		.msg-right-content {
			.other-list {
				li {
					padding: 20px;
					border-top: 1px solid #f0f0f0;
					line-height: 20px;

					&:first-child {
						border-top: 0;
					}

					.info {
						display: inline-block;
						vertical-align: top;
						width: 600px;
						font-size: 16px;
						line-height: 1.7;
            i {
							margin-right: 5px;
							font-size: 20px;
							color: #ea6f5a;
							vertical-align: middle;
						}
						a {
							color: #3194d0;
						}
					}
					.time {
						margin-top: 2px;
						font-size: 12px;
						color: #969696;
						line-height: normal;
					}
				}
			}
		}
	}
</style>
