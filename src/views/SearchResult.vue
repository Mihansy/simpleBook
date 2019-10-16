<template>
	<div class="search-result">
		<div class="sr-left-wrap">
			<ul class="sr-left-tab">
				<li class="active">
					<i class="iconfont iconwenzhang2"></i>
					<span>文章</span>
				</li>
				<li>
					<i class="iconfont iconportrait"></i>
					<span>用户</span>
				</li>
				<li>
					<i class="iconfont iconcaidan"></i>
					<span>专题</span>
				</li>
				<li>
					<i class="iconfont iconwenzhang2"></i>
					<span>文集</span>
				</li>
			</ul>
			<div class="sr-left-recent">最近搜索
				<span class="rightfloat">清空</span>
			</div>
			<ul class="sr-left-recent-list">
				<li>
					<i class="iconfont iconshijian"></i>
					<span>90后</span>
					<i class="iconfont iconguanbi"></i>
				</li>
				<li>
					<i class="iconfont iconshijian"></i>
					<span>国庆70周年</span>
					<i class="iconfont iconguanbi"></i>
				</li>
			</ul>
		</div>
		<div class="sr-right-wrap">
			<component :is="componentName"></component>
		</div>
	</div>
</template>

<script>
	import SearchDefaultArticle from '@/components/SearchDefaultArticle.vue'
	import List from '@/components/List.vue'
	
	export default {
		name: 'searchResult',
		data() {
			return {
				componentName: 'SearchDefaultArticle'
			}
		},
		components: {
			SearchDefaultArticle,
			List
		}
	}
</script>

<style scoped lang="scss">
	.search-result {
		width: 1000px;
		margin: 0 auto;
		display: flex;
		.sr-left-wrap {
			width: 260px;
			margin-right: 40px;
			padding-top: 30px;
			.sr-left-tab {
				padding-bottom: 20px;
				border-bottom: 1px solid #f0f0f0;
				li {
					padding: 10px 16px;
					font-size: 16px;
					cursor: pointer;
					&.active {
						background-color: #f0f0f0;
						border-radius: 4px;
					}
					&:hover {
						background-color: #f0f0f0;
						border-radius: 4px;
					}
					i {
						color: #a0a0a0;
						font-size: 20px;
						margin-right: 16px;
					}
					span {
						
					}
				}
			}
			.sr-left-recent {
				color: #969696;
				margin: 20px 0;
				padding: 0 16px;
				span {
					cursor: pointer;
				}
			}
			.sr-left-recent-list {
				li {
					padding: 10px 16px;
					cursor: pointer;
					&:hover {
						background-color: #f0f0f0;
						border-radius: 4px;
					}
					.iconshijian {
						margin-right: 10px;
						color: #969696;
					}
					.iconguanbi {
						float: right;
						color: #969696;
						font-size: 14px;
					}
				}
			}
		}
		.sr-right-wrap {
			flex: 1;
			padding-top: 30px;
		}
	}
</style>
