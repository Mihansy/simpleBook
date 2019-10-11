<template>
	<div class="msg-right">
		<div class="msg-right-title">全部简信</div>
		<div class="msg-right-content">
			<ul class="jianxin-list">
				<li>
					<div class="pull-right"><span class="time">2018.10.27 14:28</span>
						<div>
							<a class="open-menu-btn"><i class="iconfont icondown"></i></a>
							<ul class="dropdown-menu">
								<li><a><i class="iconfont iconshanchu"></i>删除会话</a></li>
								<li><a><i class="iconfont iconGroup-"></i>加入黑名单</a></li>
								<li><a class="report"><span><i class="iconfont iconjubao"></i>举报用户</span></a></li>
							</ul>
						</div>
					</div>
					<a href="/u/c5580cc1c3f4" target="_blank" class="avatar">
						<img src="//upload.jianshu.io/users/upload_avatars/3627484/eb973bb9-37ba-4d07-acec-850c0a66d1bb.png?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp">
					</a>
					<a href="/u/c5580cc1c3f4" target="_blank" class="name">简书大学堂</a>
					<a href="/notifications/#/chats/1265487512" class="wrap">
						<p>简信内容：总是有许许多多的人和节目，在教大家怎么做人。可是这个世界都不会好了，我还能好得了吗？...</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'email'
	}
</script>

<style scoped lang="scss">
	@import '@/assets/scss/common.scss';

	.msg-right {
		.msg-right-content {
			.jianxin-list {
				li {
					position: relative;
					border-top: 1px solid #f0f0f0;
					line-height: 20px;
          height: 96px;
					&:first-child {
						border-top: 0;
					}

					.pull-right {
						float: right;
						margin: 20px 20px 0 0;
						font-size: 13px;

						.time {
							color: #9b9b9b;
						}

						div {
							.open-menu-btn {
								position: absolute;
								top: 20px;
								right: 0;
								color: #969696;
								cursor: pointer;
							}
							.dropdown-menu {
								display: none;
								position: absolute;
								top: auto;
								right: -5px;
								z-index: 1000;
								color: #333;
								min-width: inherit;
								padding: 5px 0;
								font-size: 14px;
								text-align: left;
								background-color: #fff;
								border-radius: 4px;
								background-clip: padding-box;
								box-shadow: 0 2px 8px rgba(0,0,0,.1);
								filter: drop-shadow(0 2px 8px rgba(0,0,0,.1));
								li {
									border: none;
                  height: 42px;
									a {
										display: block;
										padding: 10px 20px;
										clear: both;
										font-weight: 400;
										line-height: 1.42857;
										color: #333;
										white-space: nowrap;
                    cursor: pointer;
										&:hover {
											background-color: rgba(240, 240, 240, 0.7);
										}
										i {
											margin-right: 10px;
										}
									}
								}
							}
						}
					}

					.avatar {
						float: left;
						margin: 20px 10px 20px 20px;
						width: 48px;
						height: 48px;

						img {
							width: 100%;
							height: 100%;
							border: 1px solid #ddd;
							border-radius: 50%;
						}
					}

					.name {
						position: absolute;
						top: 25px;
						font-size: 15px;
					}

					.wrap {
						display: block;
						padding: 20px 20px 20px 0;
						min-height: 88px;

						p {
							margin: 28px 0 0;
							font-size: 12px;
							color: #999;
							overflow: hidden;
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
		}
	}
</style>
