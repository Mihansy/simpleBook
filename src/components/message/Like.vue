<template>
	<div class="msg-right">
		<div class="msg-right-title">喜欢和赞</div>
		<div class="msg-right-content">
			<ul class="like-list">
				<li>
					<a href="/u/080668fefa8b" class="avatar">
						<img src="//upload.jianshu.io/users/upload_avatars/10185705/471a14d9-06ab-4e3c-8e12-bddf270a30cd?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp">
					</a>
					<div class="info">
						<a href="/u/080668fefa8b" class="user">青柠檬_bbbd</a>
						<span>喜欢了你的文章</span>
						<a href="/p/67fbe52cf203">《将本地vue项目上传到git》</a>
						<div class="time">2019.06.20 14:23</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'like'
	}
</script>

<style scoped lang="scss">
	@import '@/assets/scss/common.scss';
	.msg-right {
		.msg-right-content {
			.like-list {
				li {
					padding: 20px;
					border-top: 1px solid #f0f0f0;
					line-height: 20px;
					&:first-child {
						border-top: 0;
					}
					.avatar {
						display: inline-block;
						margin-right: 5px;
						width: 40px;
						height: 40px;
						cursor: pointer;
						img {
							width: 100%;
							height: 100%;
							border: 1px solid #ddd;
							border-radius: 50%;
						}
					}
					.info {
						display: inline-block;
						vertical-align: top;
						width: 600px;
						font-size: 16px;
						line-height: 1.7;
						a {
							color: #3194d0;
						}
						.user {
							color: #333;
							margin: 0 5px 0 0;
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
	}
</style>
