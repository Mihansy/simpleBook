<template>
	<div class="author-list">
		<div class="author-list-title">推荐作者 
			<span><i class="iconfont iconiconset0344"></i> 换一换</span>
		</div>
		<ul class="author-list-info">
			<li v-for="(item, index) in author" :key="index">
				<img :src="item.head_img" width="48">
				<div class="author-list-name">
					<div class="name">{{item.name}}</div>
					<div class="other">写了<span>{{item.total_word}}</span>字，<span>{{item.like}}</span>喜欢</div>
				</div>
				<div class="author-list-addfocus"><i class="iconfont iconjiahaob"></i>关注</div>
			</li>
		</ul>
		<div class="author-list-all">
			<el-button>查看全部 <i class="iconfont iconxiangyou"></i></el-button>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			author: Array
		},
	}
</script>

<style lang="scss">
	.author-list {
		color: #969696;
		.author-list-title {
			margin-bottom: 20px;
			span {
				float: right;
				cursor: pointer;
				i {
					font-size: 12px;
					font-weight: 600;
				}
			}
		}
		.author-list-info {
			li {
				display: flex;
				margin-bottom: 16px;
				img {
					display: block;
					width: 48px;
					height: 48px;
					border-radius: 50%;
					border: 1px solid #ddd;
					overflow: hidden;
					margin-right: 12px;
					cursor: pointer;
				}
				.author-list-name {
					flex: 1;
					.name {
						color: #333;
						margin-top: 4px;
						margin-bottom: 6px;
						cursor: pointer;
					}
					.other {
						font-size: 12px;
					}
				}
				.author-list-addfocus {
					font-size: 14px;
					color: #42c02e;
					margin-top: 4px;
					cursor: pointer;
					i {
						font-weight: 600;
					}
				}
			}
		}
		.author-list-all {
			margin-top: 6px;
			margin-bottom: 20px;
			button {
				padding: 8px 102px;
			}
		}
	}
</style>
