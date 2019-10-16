<template>
	<div class="login">
		<div class="logo">
			<img src="../assets/images/logo-large.png" width="120">
		</div>
		<div class="main">
			<el-tabs stretch v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="登录" name="sign-in">
					<el-form ref="formSignIn" :rules="rules" :model="formSignIn" label-width="100px">
						<el-form-item label="账号" prop="phone">
							<el-input v-model="formSignIn.phone"></el-input>
						</el-form-item>
						<el-form-item label="密码" prop="psd">
							<el-input type="password" v-model="formSignIn.psd"></el-input>
						</el-form-item>
						<el-form-item>
							<div class="leftfloat" style="margin-left: -100px;">
								<el-checkbox v-model="formSignIn.checked">记住我</el-checkbox>
							</div>
							<a class="rightfloat">登录遇到问题？</a>
						</el-form-item>
						<el-form-item>
							<div class="btn-width">
								<el-button type="primary" round @click="onSubmit('formSignIn')">登录</el-button>
							</div>
						</el-form-item>
					</el-form>
					<div class="other-login">
						<div class="title">&nbsp;&nbsp;&nbsp;&nbsp;社交账号登录&nbsp;&nbsp;&nbsp;&nbsp;</div>
						<div class="btns">
							<a href=""><i class="iconfont iconweibo1"></i></a>
							<a href=""><i class="iconfont iconweixin1"></i></a>
							<a href=""><i class="iconfont iconQQ"></i></a>
						</div>
					</div>
				</el-tab-pane>
				<el-tab-pane label="注册" name="sign-up">
					<el-form ref="formSignUp" :rules="rules" :model="formSignUp" label-width="100px">
						<el-form-item label="你的昵称" prop="name">
							<el-input v-model="formSignUp.name"></el-input>
						</el-form-item>
						<el-form-item label="手机号码" prop="phone">
							<el-input v-model="formSignUp.phone"></el-input>
						</el-form-item>
						<el-form-item label="设置密码" prop="psd">
							<el-input type="password" v-model="formSignUp.psd"></el-input>
						</el-form-item>
						<el-form-item>
							<div class="btn-width" style="margin-top: 8px;">
								<el-button type="primary" round @click="onSubmit('formSignUp')">注册</el-button>
							  <div class="tip">点击 “注册” 即表示您同意并愿意遵守简书用户协议 和 隐私政策 。</div>
							</div>
						</el-form-item>
					</el-form>
					<div class="other-login">
						<div class="title">&nbsp;&nbsp;&nbsp;&nbsp;社交账号直接注册&nbsp;&nbsp;&nbsp;&nbsp;</div>
						<div class="btns">
							<a href=""><i class="iconfont iconweixin1"></i></a>
							<a href=""><i class="iconfont iconQQ"></i></a>
						</div>
					</div>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'articleDetail',
		data() {
			//验证手机号
			var checkPhone = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('手机号不能为空'));
				} else {
					const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
					//console.log(reg.test(value));
					if (reg.test(value)) {
						callback();
					} else {
						return callback(new Error('请输入正确的手机号'));
					}
				}
			};
			
			return {
				activeName: 'sign-in',
				formSignIn: {
					phone: '',
					psd: '',
					checked: true
				},
				formSignUp: {
					name: '',
					phone: '',
					psd: ''
				},
				rules: {
					name: [{
							required: true,
							message: '您的昵称',
							trigger: 'blur'
						},
						{
							min: 1,
							max: 10,
							message: '长度在 1 到 10 个字符',
							trigger: 'blur'
						}
					],
					phone: [{
						required: true,
						validator: checkPhone,
						trigger: 'blur'
					}],
					psd: [{
						required: true,
						message: '密码不能为空',
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			},
			onSubmit(formName) {
				this.$refs[formName].validate((valid) => {
					let obj = {
						//"name": this.form.name,
						"phone": this.form.phone,
						"password": this.form.psd
					}
					
					if (valid) {
						//console.log(this.form)
						this.$http.getEmail(obj)
						.then(res => {
							if(res.data.resultCode == 0){
								Message.success({
									message: '提交成功',
									offset: 120
								})
							}else {
								Message.error({
									message: '提交失败',
									offset: 120
								})
							}
						}).catch(err => {
							console.log(err)
						})
					}else {
						return false;
					}
				});
			}
		},
		mounted() {
			this.activeName = this.$route.params.type
		}
	}
</script>

<style lang="scss">
	.login {
		height: 100%;
		min-height: 750px;
		text-align: center;
		font-size: 14px;
		background-color: #f1f1f1;

		.logo {
			position: absolute;
			top: 56px;
			margin-left: 50px;
		}

		.main {
			width: 400px;
			margin: 60px auto 0;
			padding: 30px 50px 30px;
			background-color: #fff;
			border-radius: 4px;
			box-shadow: 0 0 8px rgba(0, 0, 0, .1);
			vertical-align: middle;
			display: inline-block;
			box-sizing: border-box;
		}
	}
	.btn-width {
		width: 150%;
		margin-top: -10px;
		margin-left: -100px; 
		button {
			width: 100%;
		}
		.tip {
			line-height: 20px;
			color: #969696;
			font-size: 12px;
			margin-top: 10px;
			padding: 0 30px;
		}
	}
	.other-login {
		.title {
			font-size: 12px;
			color: #969696;
			display: flex;
			justify-content: center;
			align-items: center;
			padding-top: 10px;
			padding-bottom: 16px;
			&:after, &:before {
				background: #ddd;
				content: "";
				height: 1px;
				width: 20%;
			}
		}
		.btns {
			a {
				i {
					font-size: 32px;
					margin: 0 15px;
					&.iconweibo1 {
						color: #e05244;
					}
					&.iconweixin1 {
						color: #00bb29;
						font-size: 36px;
					}
					&.iconQQ {
						color: #498ad5;
					}
				}
			}
		}
	}
	.el-tabs__header {
		margin-bottom: 30px;
	}
	.el-tabs__item {
		font-size: 18px;
		font-weight: 700;
		color: #969696;
	}
	.el-form-item__label {
		text-align: left;
		// width: 60px !important;
		font-size: 16px;
	}
	.el-form-item__content {
		// margin-left: 60px !important;
	}
</style>
