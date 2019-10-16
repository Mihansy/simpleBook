<template>
	<div class="msg-box">
		<div class="msg-left-wrap">
			<ul class="dropdown-menu">
				<li 
					v-for="(item, index) in menu" 
					:key="index" 
					@click="switchTab(index, item.componentName)" 
					:class="{'active': currentIndex===index}">
					<a>
						<i class="iconfont" :class="item.icon"></i>
						<span>{{item.name}}</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="msg-right-wrap">
			<component :is="componentName"></component>
		</div>
	</div>
</template>

<script>
	import Comment from '@/components/message/Comment.vue'
	import Contribute from '@/components/message/Contribute.vue'
	import Email from '@/components/message/Email.vue'
	import Like from '@/components/message/Like.vue'
	import AllAttention from '@/components/message/AllAttention.vue'
	import AppreciatePay from '@/components/message/AppreciatePay.vue'
	import Other from '@/components/message/Other.vue'
	import {Bus} from '@/assets/js/bus.js'
	
	export default {
		name: 'message',
		components: {
			Comment,
			Contribute,
			Email,
			Like,
			AllAttention,
			AppreciatePay,
			Other
		},
		data() {
			return {
				menu: [{
					"icon": "iconpinglun",
					"name": "评论",
					"componentName": "Comment"
				},{
					"icon": "icone-mail_icon",
					"name": "简信",
					"componentName": "Email"
				},{
					"icon": "iconfuwuqingqiu",
					"name": "投稿请求",
					"componentName": "Contribute"
				},{
					"icon": "iconlike-1",
					"name": "喜欢和赞",
					"componentName": "Like"
				},{
					"icon": "iconguanzhuchenggong",
					"name": "关注",
					"componentName": "AllAttention"
				},{
					"icon": "iconqianfenleishouye",
					"name": "赞赏和付费",
					"componentName": "AppreciatePay"
				},{
					"icon": "iconcaidan1",
					"name": "其他提醒",
					"componentName": "Other"
				}],
				currentIndex: 0,
				componentName: "Comment"
			}
		},
		methods: {
			switchTab(index, componentName) {
				this.currentIndex = index
				this.componentName = componentName
			},
		},
		mounted() {
			Bus.$on('changeComponent',(params) => { //在该组件中调用回调函数
				//console.log(params)
				this.currentIndex = params.currentIndex
				this.componentName = params.componentName
			})
		}
	}
</script>

<style scoped lang="scss">
	.msg-box {
		width: 1000px;
		margin: 0 auto;
		display: flex;
		.msg-left-wrap {
			width: 262px;
			margin-right: 40px;
			padding-top: 30px;
			.dropdown-menu {
				padding: 5px 0;
				text-align: left;
				li {
					line-height: 20px;
					cursor: pointer;
					&.active {
						background-color: rgba(240, 240, 240, 0.7);
					}
					&:hover {
						background-color: rgba(240, 240, 240, 0.7);
					}
					a {
						display: block;
						clear: both;
						font-weight: 400;
						font-size: 14px;
						color: #333;
						white-space: nowrap;
						height: auto;
						padding: 10px 20px;
						line-height: 30px;
						margin-right: 0;
						i {
							margin-right: 15px;
							font-size: 22px;
							font-weight: 600;
							color: #ea6f5a;
							vertical-align: middle;
							&.iconpinglun,&.iconcaidan1 {
								font-size: 20px;
							}
							&.icone-mail_icon {
								font-size: 20px;
								margin-left: -3px;
							}
							&.iconguanzhuchenggong {
								font-size: 24px;
								margin-left: -2px;
							}
						}
						span {
							vertical-align: middle;
						}
					}
				}
			}
		}
		.msg-right-wrap {
			flex: 1;
			padding-top: 30px;
		}
	}
</style>
