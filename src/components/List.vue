<template>
	<div class="list-box">
		<div class="clearfix list-title">
			<div class="leftfloat">
				<span>综合排序</span>&nbsp;&nbsp;&nbsp;&nbsp;|
				<span>&nbsp;&nbsp;&nbsp;时间顺序：</span>
				<el-select v-model="value" placeholder="时间不限">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</div>
			<div class="rightfloat total-result">11290 个结果</div>
		</div>
		<ul class="list-content">
			<li class="clearfix">
				<div class="leftfloat">
					<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
					<div class="info">
						<div class="name">90后小爸爸</div>
						<div class="desc">关注 20&nbsp;&nbsp;|&nbsp;&nbsp;粉丝 5&nbsp;&nbsp;|&nbsp;&nbsp;文章 5</div>
						<div class="desc">写了 4090 字，获得了 93 个喜欢</div>
					</div>
				</div>
				<div class="rightfloat add-btn">
					<el-button type="success" round>
						<i class="iconfont iconjiahaob"></i>关注
					</el-button>
				</div>
			</li>
			<li class="clearfix">
				<div class="leftfloat">
					<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
					<div class="info">
						<div class="name">90后小爸爸</div>
						<div class="desc">关注 20&nbsp;&nbsp;|&nbsp;&nbsp;粉丝 5&nbsp;&nbsp;|&nbsp;&nbsp;文章 5</div>
						<div class="desc">写了 4090 字，获得了 93 个喜欢</div>
					</div>
				</div>
				<div class="rightfloat add-btn">
					<el-button type="success" round>
						<i class="iconfont iconjiahaob"></i>关注
					</el-button>
				</div>
			</li>
			<li class="clearfix">
				<div class="leftfloat">
					<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
					<div class="info">
						<div class="name">90后小爸爸</div>
						<div class="desc">关注 20&nbsp;&nbsp;|&nbsp;&nbsp;粉丝 5&nbsp;&nbsp;|&nbsp;&nbsp;文章 5</div>
						<div class="desc">写了 4090 字，获得了 93 个喜欢</div>
					</div>
				</div>
				<div class="rightfloat add-btn">
					<el-button type="success" round>
						<i class="iconfont iconjiahaob"></i>关注
					</el-button>
				</div>
			</li>
			<li class="clearfix">
				<div class="leftfloat">
					<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
					<div class="info">
						<div class="name">90后小爸爸</div>
						<div class="desc">关注 20&nbsp;&nbsp;|&nbsp;&nbsp;粉丝 5&nbsp;&nbsp;|&nbsp;&nbsp;文章 5</div>
						<div class="desc">写了 4090 字，获得了 93 个喜欢</div>
					</div>
				</div>
				<div class="rightfloat add-btn">
					<el-button type="success" round>
						<i class="iconfont iconjiahaob"></i>关注
					</el-button>
				</div>
			</li>
			<li class="clearfix">
				<div class="leftfloat">
					<img class="userimg" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
					<div class="info">
						<div class="name">90后小爸爸</div>
						<div class="desc">关注 20&nbsp;&nbsp;|&nbsp;&nbsp;粉丝 5&nbsp;&nbsp;|&nbsp;&nbsp;文章 5</div>
						<div class="desc">写了 4090 字，获得了 93 个喜欢</div>
					</div>
				</div>
				<div class="rightfloat add-btn">
					<el-button type="success" round>
						<i class="iconfont iconjiahaob"></i>关注
					</el-button>
				</div>
			</li>
		</ul>
		<div class="clearfix list-page">
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
		name: 'list',
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
				value: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-box {
		.list-title {
			padding-bottom: 20px;
			.total-result {
				color: #969696;
				font-size: 12px;
				line-height: 40px;
			}
		}
		.list-content {
			padding-top: 40px;
			li {
				padding-bottom: 20px;
				margin-bottom: 20px;
				overflow: hidden;
				border-bottom: 1px solid #f0f0f0;
				div {
					.userimg {
						display: inline-block;
						vertical-align: top;
						width: 52px;
						height: 52px;
						margin-right: 8px;
						vertical-align: middle;
						border: 1px solid #ddd;
						border-radius: 50%;
						cursor: pointer;
					}
					.info {
						display: inline-block;
						vertical-align: top;
						.name {
							font-size: 16px;
							font-weight: 700;
							color: #333;
							cursor: pointer;
						}
						.desc {
							padding-top: 2px;
							font-size: 12px;
							color: #969696;
						}
					}
				}
				.add-btn {
					button {
						padding: 10px 27px;
					}
				}
			}
		}
		.list-page {
			text-align: center;
			padding-top: 20px;
			margin-bottom: 30px;
		}
	}
</style>
