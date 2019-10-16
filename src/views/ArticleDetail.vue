<template>
	<div class="article-detail">
		<div class="ad-top" :class="{'show-top': hasTop === true}">
			<div class="clearfix ad-top-content">
				<h1 class="leftfloat">监工</h1>
				<div class="rightfloat user">
					<img class="user-img" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp"
					 alt="">
					<span class="user-name">原春秋</span>
					<el-button round type="danger" plain>关注</el-button>
					<el-button round type="danger">赞赏支持</el-button>
				</div>
			</div>
		</div>
		<div class="ad-box">
			<div class="ad-left-wrap">
				<el-card class="ad-content">
					<h1>监工</h1>
					<div class="s-dsoj">
						<i class="iconfont icon31"></i>
						<span class="first">107</span>
						<time>2019.08.20 00:03:05</time>
						<span>字数 1849</span>
						<span>阅读 2307</span>
					</div>
					<div class="_2rhmJa">
						<p>临下班时，老板把我叫到了办公室，郑重其事地对我说：“小高，明天交给你一个光荣而艰巨的任务。”“老总，请问什么任务？我怕我不能胜任。”“现在保密，到时你就知道了，明晨六点，你在住的地方，到时我叫司机小王去接你。”“太早了吧？我怕我起不来。”“不要找借口，这是硬任务，你必须完成，我相信你能行。”老总不容分说地说。</p>
						<p>第二天晨五点半，我的闹钟便响了，我睁开了惺忪的睡眼，匆忙起床，小解洗漱完毕后，便出门看有没有卖早餐的。我出得院落，只听得几声汽车喇叭响，我一看车牌，那是老总的大奔，只见老总司机小王正朝我颌首示意打招呼，我说“小王，等一下，我去买早餐，你吃了没，我也给你捎一份过来。”“不用买，我已买好了，包括你的中餐也有。”</p>
						<p>“咋回事呢？”我不解地问小王，“先上车。”小王说。</p>
						<p>上了车后，小王给我把早餐扔了过来，小王边开车边聊起了我这次老总吩咐的任务。</p>
					</div>
					<div class="clearfix ad-bottom-btns">
						<div class="leftfloat yuan">
							<span class="active"><i class="iconfont iconzan"></i></span>82人点赞
						</div>
						<div class="rightfloat right-btn">
							<div>日记本</div>
							<div class="more-type">
								<span class="yuan" @click="handleType"><i class="iconfont iconcaidan1"></i></span>
								<ul v-show="showType">
									<li>分享文章</li>
									<li>收入专题</li>
									<li>收藏文章</li>
									<li>举报文章</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="Uz-vZq">
						<div class="VwEQ52">
							<a class="_1OhGeD">
								<img class="_3nYIo3" src="//upload.jianshu.io/users/upload_avatars/14656935/ee86d3a7-b901-4133-83fc-2b5df310f159.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120/format/webp">
							</a>
							<div class="_2lfNuF">
								<div class="Cqpr1X" title="原春秋">
									<a class="_1OhGeD">原春秋</a>
								</div>
								<div class="_2qBui4">
									<span>拥有15.9W钻 (约17715.85元)</span>
								</div>
							</div>
							<el-button round type="danger" plain>关注</el-button>
						</div>
						<div class="VwEQ52 _13lIbp">
							<div class="_2lfNuF">
								<div class="Cqpr1X">"小礼物走一走，来简书关注我"</div>
								<div class="_2qBui4">
									<a class="H4XBOO _1OhGeD">
										<img src="http://upload.jianshu.io/users/upload_avatars/18941067/ec4ad2bb-1edb-4e53-b667-836b83505a62.jpg"></a>
									<a class="H4XBOO _1OhGeD">
										<img src="http://upload.jianshu.io/users/upload_avatars/12386245/ea39337b-0068-41aa-9b92-5805452b8f1c.jpg">
									</a>
									<a class="H4XBOO _1OhGeD">
										<img src="http://upload.jianshu.io/users/upload_avatars/6995288/67b3a63c-d0fd-463f-9451-fe44467c59b5.jpg">
									</a>
									<a class="H4XBOO _14FSyQ">
										<i aria-label="ic-others" class="anticon">
										</i>
									</a>
									<span class="_191KSt">共31人赞赏</span>
								</div>
							</div>
							<el-button round type="danger" plain>赞赏</el-button>
						</div>
					</div>
				</el-card>
				<el-card class="box-card comment-card">
					<div class="ad-comment-box">
						<img class="user-img" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
						<div class="right-comment">
							<el-input type="textarea" v-model="comment"></el-input>
							<div class="comment-btns">
								<el-button type="danger" round>发布</el-button>
								<el-button round plain>取消</el-button>
							</div>
						</div>
					</div>
					<div class="ad-comment-show">
						<div class="leftfloat title">全部评论 61</div>
						<div class="rightfloat order">
							<span class="current">按时间倒序</span>
							<span>按时间正序</span>
					  </div>
						<ul class="clearfix comment-list">
							<li>
								<img class="user-img" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
								<div class="comment-list-right">
									<div class="name">朋友圈的事</div>
									<div class="info">
										<span>41楼</span>
										<span>10.12</span>
										<span>20:32</span>
									</div>
									<div class="content">监工也不容易啊</div>
									<div class="comment-btns">
										<span><i class="iconfont iconzan"></i> 赞</span>
										<span><i class="iconfont icontubiaozhizuo-"></i> 回复</span>
									</div>
								</div>
							</li>
							<li>
								<img class="user-img" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
								<div class="comment-list-right">
									<div class="name">朋友圈的事</div>
									<div class="info">
										<span>41楼</span>
										<span>10.12</span>
										<span>20:32</span>
									</div>
									<div class="content">监工也不容易啊</div>
									<div class="comment-btns">
										<span><i class="iconfont iconzan"></i> 5</span>
										<span><i class="iconfont icontubiaozhizuo-"></i> 回复</span>
									</div>
								</div>
							</li>
						</ul>
						<div class="comment-page">
							<el-pagination
							  background
							  layout="prev, pager, next"
							  :total="100"
								:pageSize="20">
							</el-pagination>
						</div>
					</div>
				</el-card>
			</div>
			<div class="ad-right-wrap">
				<el-card class="box-card">
					<div class="_3Oo-T1">
						<a class="_1OhGeD" href="/u/b4f1bacc40ff" target="_blank">
							<img class="_3T9iJQ" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp"
							 alt="">
						</a>
						<div class="_32ZTTG">
							<div class="_2O0T_w">
								<div class="_2v-h3G">
									<span class="_2vh4fr" title="嘎拉呢">
										<a class="_1OhGeD" href="/u/b4f1bacc40ff" target="_blank" rel="noopener noreferrer">嘎拉呢</a>
									</span>
								</div>
								<button data-locale="zh-CN" type="button" class="tzrf9N _1OyPqC _3Mi9q9 _34692-">
									<span>关注</span>
								</button>
							</div>
							<div class="_1pXc22">拥有1钻 (约0.15元)</div>
						</div>
					</div>
					<div class="_19DgIp"></div>
					<div class="_26Hhi2">
						<div class="_3TNGId" title="前端常见面试题（小程序）二十二">
							<a class="_2ER8Tt _1OhGeD" href="/p/0d2194e14e3e" target="_blank" rel="noopener noreferrer">前端常见面试题（小程序）二十二</a>
						</div>
						<div class="DfvGP9">阅读 19</div>
					</div>
					<div class="_26Hhi2">
						<div class="_3TNGId" title="前端常见面试题（十六）">
							<a class="_2ER8Tt _1OhGeD" href="/p/b44d29e24be1" target="_blank">前端常见面试题（十六）</a>
						</div>
						<div class="DfvGP9">阅读 5</div>
					</div>
				</el-card>
				<el-card class="box-card">
					<h3 class="QHRnq8 QxT4hD">
						<span>精彩继续</span>
					</h3>
					<div class="cuOxAY _3Arx4A">
						<div class="_21cGJh">
							<div class="_3L5YSq" title="荒山上死了个越野爱好者，身上冲下的蛆，把下水道都堵了 | 非正常死亡014">
								<a class="_1-HJSV _1OhGeD" href="/p/9d5188ec60e3" target="_blank">荒山上死了个越野爱好者，身上冲下的蛆，把下水道都堵了 | 非正常死亡014</a>
							</div>
							<div class="_19haGh">阅读 3895</div>
						</div>
						<a class="M7wcSm _1OhGeD" href="/p/9d5188ec60e3" target="_blank">
							<img class="_1w8ebu" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp"
							 alt="">
						</a>
					</div>
					<div class="cuOxAY _3Arx4A">
						<div class="_21cGJh">
							<div class="_3L5YSq" title="把她逼疯，满意了吗？">
								<a class="_1-HJSV _1OhGeD" href="/p/f4ca938cfbbc" target="_blank">把她逼疯，满意了吗？</a>
							</div>
							<div class="_19haGh">阅读 2533</div>
						</div>
						<a class="M7wcSm _1OhGeD" href="/p/f4ca938cfbbc" target="_blank">
							<img class="_1w8ebu" src="//upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp"
							 alt="">
						</a>
					</div>
				</el-card>
			</div>

		</div>
		<div class="ad-bottom">
			<div class="comment-box">
				<el-input type="textarea" v-model="comment" placeholder="写下你的评论…"></el-input>
			</div>
			<div class="comment-btn">
				<i class="iconfont icontubiaozhizuo-"></i>
				<span>评论62</span>
			</div>
			<div class="zan-btn">
				<i class="iconfont iconzan"></i>
				<span>赞32</span>
			</div>
		</div>
		<div class="back-top" :class="{'show-back-top': backTopBtn === true}" @click="toTop">
			<i class="iconfont iconfanhuidingbu2"></i>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'articleDetail',
		data() {
			return {
				hasTop: false,
				backTopBtn: false,
				showType: false,
				comment: ''
			}
		},
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		methods: {
			handleScroll() {
				var top = document.documentElement.scrollTop || document.body.scrollTop
				if (top > 60) {
					this.hasTop = true
				} else {
					this.hasTop = false
				}

				if (top > 400) {
					this.backTopBtn = true
				} else {
					this.backTopBtn = false
				}
			},
			toTop() {
				document.documentElement.scrollTop = 0
			},
			handleType() {
				this.showType = !this.showType
			}
		}
	}
</script>

<style lang="scss">
	.article-detail {
		.ad-top {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 60px;
			opacity: 0;
			background-color: #fff;
			box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
			transform: translateY(100%);
			transition: transform .3s cubic-bezier(.645, .045, .355, 1);
			transition: transform .3s cubic-bezier(.645, .045, .355, 1), -webkit-transform .3s cubic-bezier(.645, .045, .355, 1);

			&.show-top {
				z-index: 99;
				opacity: 1;
				transform: translateY(0);
			}

			.ad-top-content {
				width: 1000px;
				margin: 0 auto;
				line-height: 60px;

				h1 {
					font-size: 24px;
					font-weight: 700;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
				}

				.user {
					.user-img {
						width: 40px;
						height: 40px;
						border-radius: 50%;
						vertical-align: middle;
					}

					.user-name {
						color: #7d7d7d;
						margin: 0 10px;
					}

					button {
						padding: 7px 14px;
					}
				}
			}
		}

		.ad-bottom {
			position: fixed;
			bottom: 0;
			left: 0;
			z-index: 99;
			display: flex;
			width: 100%;
			height: 56px;
			line-height: 56px;
			color: #969696;
			background-color: #fff;
			box-shadow: 0 -1px 3px rgba(26, 26, 26, .1);
			.comment-box {
				.el-textarea {
					vertical-align: middle;
					textarea {
						width: 200px;
						height: 36px;
						line-height: 36px;
						resize: none;
						margin-right: 16px;
						padding: 0px 18px;
						border-radius: 18px;
						border: 0;
						background-color: #f2f2f2;
					}
				}
			}
			.comment-btn,.zan-btn {
				margin-left: 12px;
				margin-right: 10px;
				cursor: pointer;
				i {
					font-size: 20px;
					margin-right: 4px;
				}
			}
		}

		.back-top {
			position: fixed;
			right: 50px;
			bottom: 100px;
			z-index: 100;
			opacity: 0;

			i {
				color: #ea6f5a;
				font-size: 40px;
				cursor: pointer;
			}

			&.show-back-top {
				opacity: 1;
			}
		}

		.ad-box {
			position: relative;
			width: 1000px;
			margin: 0 auto;
			display: flex;
			margin-bottom: 100px;
			padding-top: 10px;

			.ad-left-wrap {
				flex: 1;

				.ad-content {
					padding: 4px;

					h1 {
						margin-bottom: .5em;
					}

					.s-dsoj {
						font-size: 12px;
						margin-bottom: 32px;
						color: #969696;

						i {
							color: #ec7259;
							font-size: 20px;
							vertical-align: middle;
						}

						span {
							padding: 0 8px;

							&.first {
								color: #ec7259;
								padding-left: 2px;
							}
						}
					}

					._2rhmJa {
						font-size: 16px;
						font-weight: 400;
						line-height: 1.8;
						margin-bottom: 20px;

						p {
							margin-bottom: 20px;
							word-break: break-word;
						}
					}

					.ad-bottom-btns {
						height: 40px;
						color: #969696;
						padding-bottom: 28px;
						border-bottom: 1px solid #f0f0f0;

						.yuan {
							span {
								display: inline-block;
								width: 40px;
								height: 40px;
								text-align: center;
								line-height: 37px;
								border: 1px solid #eee;
								border-radius: 50%;
								font-size: 18px;
								margin-right: 8px;
								box-sizing: border-box;
								cursor: pointer;

								i {
									font-size: 20px;
								}

								&.active {
									color: #fff;
									background-color: #ec7259;
									border-color: #ec7259;
								}
							}
						}

						.right-btn {
							div {
								display: inline-block;

								&.more-type {
									position: relative;

									.yuan {
										display: inline-block;
										width: 40px;
										height: 40px;
										text-align: center;
										line-height: 37px;
										border: 1px solid #eee;
										border-radius: 50%;
										font-size: 18px;
										margin-left: 8px;
										box-sizing: border-box;
										cursor: pointer;
									}

									ul {
										position: absolute;
										width: 88px;
										top: -170px;
										left: -24px;
										z-index: 100;
										text-align: left;
										background-color: #fff;
										background-clip: padding-box;
										border-radius: 4px;
										box-shadow: 0 2px 8px rgba(0, 0, 0, .15);

										li {
											color: #333;
											padding: 6px 14px;
											line-height: 30px;
											cursor: pointer;

											&:hover {
												background-color: rgba(240, 240, 240, .7);
											}
										}
									}
								}
							}
						}
					}
					.Uz-vZq {
						display: flex;
						flex-basis: 50%;
						-webkit-box-flex: 1;
						flex-grow: 1;
						-webkit-box-align: center;
						align-items: center;
						padding-top: 30px;
						overflow: hidden;
						.VwEQ52 {
							&:first-child {
								position: relative;
								&:before {
									content: "";
									position: absolute;
									width: 1px;
									height: 60px;
									right: 0;
									background-color: #eee;
								}
							}
							&._13lIbp {
								padding-left: 20px;
							}
							a {
								display: inline-block;
								vertical-align: top;
								._3nYIo3 {
									min-width: 54px;
									min-height: 54px;
									width: 54px;
									height: 54px;
									border-radius: 50%;
									border: 1px solid #eee;
								}
							}
							._2lfNuF {
								display: inline-block;
								vertical-align: top;
								-webkit-box-flex: 1;
								flex-grow: 1;
								margin-left: 10px;
								margin-top: 10px;
								overflow: hidden;
								.Cqpr1X {
									color: #2d2d2d;
									font-weight: 500;
									font-size: 14px;
									margin-bottom: 2px;
									overflow: hidden;
									-o-text-overflow: ellipsis;
									text-overflow: ellipsis;
									white-space: nowrap;
								}
								._2qBui4 {
									display: inline-flex;
									-webkit-box-align: center;
									align-items: center;
									color: #969696;
									font-size: 12px;
									a {
										img {
											width: 24px;
											height: 24px;
											min-width: 24px;
											min-height: 24px;
											border-radius: 50%;
											border: 2px solid #fff;
										}
									}
								}
							}
							button {
								padding: 7px 14px;
								margin: 20px;
							}
							._3Mi9q9 {
								color: #ec7259;
								background-color: #fff;
								border-color: #ec7259;
							}
						}
					}
				}
				.comment-card {
					margin-top: 10px;
					.ad-comment-box {
						margin-bottom: 20px;
						.user-img {
							display: inline-block;
							width: 40px;
							height: 40px;
							border-radius: 50%;
							border: 1px solid #eee;
							margin-right: 10px;
							vertical-align: top;
						}
						.right-comment {
							display: inline-block;
							textarea {
								padding: 12px 16px;
								width: 632px;
								height: 90px;
								font-size: 14px;
								border: 1px solid #eee;
								border-radius: 4px;
								background-color: #fafafa;
								resize: none;
								display: inline-block;
								vertical-align: top;
								outline-style: none;
							}
							.comment-btns {
								text-align: right;
								margin-top: 16px;
								button {
									padding: 7px 12px;
								}
							}
						}
					}
					.ad-comment-show {
						.title {
							margin-bottom: 16px;
							padding-left: 12px;
							border-left: 4px solid #ec7259;
							font-size: 18px;
							font-weight: 500;
							height: 20px;
							line-height: 20px;
						}
						.order {
							font-size: 12px;
							color: #969696;
							margin-left: 12px;
							
							span {
								margin-left: 20px;
								cursor: pointer;
								&.current {
									color: #333;
								}
							}
						}
						.comment-list {
							padding-top: 10px;
							margin-bottom: 30px;
							li {
								.user-img {
									display: inline-block;
									vertical-align: top;
									cursor: pointer;
									width: 40px;
									height: 40px;
									border: 1px solid #eee;
									border-radius: 50%;
									overflow: hidden;
								}
								.comment-list-right {
									width: 632px;
									display: inline-block;
									vertical-align: top;
									margin-left: 10px;
									margin-bottom: 20px;
									padding-bottom: 16px;
									border-bottom: 1px solid #eee;
									.name {
										cursor: pointer;
									}
									.info {
										margin-top: 2px;
										font-size: 12px;
										color: #969696;
									}
									.content {
										margin-top: 10px;
										font-size: 16px;
										line-height: 1.5;
										word-break: break-word;
									}
									.comment-btns {
										margin-top: 12px;
										font-size: 16px;
										color: #b0b0b0;
										span {
											margin-right: 14px;
											cursor: pointer;
										}
									}
								}
							}
						}
						.comment-page {
							text-align: center;
						}
					}
				}
			}

			.ad-right-wrap {
				margin-left: 10px;
				width: 260px;

				.box-card {
					margin-bottom: 10px;

					._3Oo-T1 {
						display: flex;
						-webkit-box-align: center;
						align-items: center;

						a {
							._3T9iJQ {
								display: block;
								width: 45px;
								height: 45px;
								border-radius: 50%;
							}
						}

						._32ZTTG {
							display: flex;
							-webkit-box-pack: justify;
							justify-content: space-between;
							-webkit-box-orient: vertical;
							flex-direction: column;
							-webkit-box-flex: 1;
							flex-grow: 1;
							overflow: hidden;
							min-height: 45px;
							margin-left: 8px;

							._2O0T_w {
								display: flex;
								-webkit-box-pack: justify;
								justify-content: space-between;
								-webkit-box-align: center;
								align-items: center;
								margin-bottom: 4px;

								._2v-h3G {
									display: flex;
									margin-right: 4px;
									overflow: hidden;
								}

								.tzrf9N {
									padding: 2px 12px;
									font-size: 12px;
									color: #ec7259;
									background-color: #fff;
									border-radius: 50px;
									cursor: pointer;
									border: 1px solid #ec7259;
								}
							}

							._1pXc22 {
								color: #969696;
								font-size: 12px;
							}
						}
					}

					._19DgIp {
						width: 100%;
						height: 1px;
						margin: 16px 0;
						background-color: #eee;
					}

					._26Hhi2 {
						margin-top: 16px;

						._3TNGId {
							font-size: 14px;
							color: #2d2d2d;
							margin-bottom: 4px;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
						}

						.DfvGP9 {
							font-size: 12px;
							color: #969696;
						}
					}

					.QHRnq8 {
						font-size: 16px;
						padding-left: 6px;
						height: 18px;
						margin-bottom: 16px;
						border-left: 4px solid #ec7259;
						font-weight: 500;
						line-height: 20px;
					}

					.cuOxAY {
						display: flex;
						-webkit-box-align: center;
						align-items: center;
						-webkit-box-pack: justify;
						justify-content: space-between;
						margin-bottom: 12px;

						._21cGJh {
							display: flex;
							-webkit-box-direction: normal;
							flex-direction: column;
							-webkit-box-pack: justify;
							justify-content: space-between;
							-webkit-box-flex: 1;
							flex-grow: 1;
							min-height: 60px;
							-webkit-box-orient: vertical;
							overflow: hidden;

							._3L5YSq {
								height: 36px;
								text-overflow: ellipsis;
								-webkit-box-orient: vertical;
								overflow: hidden;
							}

							._19haGh {
								font-size: 12px;
								color: #969696;
							}
						}

						.M7wcSm {
							margin-left: 8px;

							._1w8ebu {
								flex-shrink: 0;
								width: 90px;
								height: 64px;
								border-radius: 2px;
							}
						}
					}
				}
			}
		}
	}
</style>
