<template>
	<div class="msg-right">
		<div class="msg-right-title">投稿请求</div>
		<div class="msg-right-content">
			<ul class="push-list">
				<li>
					<a href="/notifications/#/pending_submissions" class="wrap">
						<div class="all-push"><i class="iconfont iconfuwuqingqiu"></i></div>
						<div class="name">全部未处理请求</div>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'contribute'
	}
</script>

<style scoped lang="scss">
	@import '@/assets/scss/common.scss';
	.msg-right {
		.msg-right-content {
			.push-list {
				li {
					border-top: 1px solid #f0f0f0;
					line-height: 20px;
					&:first-child {
						border-top: 0;
					}
					.wrap {
						padding: 20px;
						display: block;
						.all-push {
							position: relative;
							margin-right: 10px;
							width: 48px;
							height: 48px;
							text-align: center;
							border: 1px solid #f4f4f4;
							border-radius: 4px;
							display: inline-block;
							vertical-align: middle;
							i {
								margin-top: 14px;
								font-size: 25px;
								color: #ea6f5a;
								display: block;
							}
						}
						.name {
							max-width: 500px;
							font-size: 15px;
							vertical-align: middle;
							display: inline-block;
						}
					}
				}
			}
		}
	}
</style>
