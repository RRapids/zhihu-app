<template>
	<div class="login-bar tx-center">
		<router-link to="/">
			<img src="https://pic4.zhimg.com/80/v2-a47051e92cf74930bedd7469978e6c08_hd.png" class="logo" />
		</router-link>
		<div class="tab-login-tz">
			<div class="singFlow-tabs">
				<div class="singFlow-tab" :class="{ active: signUpisActive }" @click="signUpclick"><a>免密码登录</a></div>
				<div class="singFlow-tab1" :class="{ active: loginisActive }" @click="loginclick"><a target="_blank">密码登录</a></div>
			</div>
			<!-- 免密登陆 -->
			<div class="sign-box-tz" v-show="signUpistrue == true">
				<div class="singFlow-account">
					<div class="account-left link"><input style="color: #8590A6;font-size: 15px;" placeholder="中国 +86"></input></div>
					<svg class="Zi Zi--Select Select-arrow" style="color: #8590A6;" viewBox="0 0 24 24" width="24" height="22">
						<path d="M12 16.183l2.716-2.966a.757.757 0 0 1 1.064.001.738.738 0 0 1 0 1.052l-3.247 3.512a.758.758 0 0 1-1.064 0L8.22 14.27a.738.738 0 0 1 0-1.052.758.758 0 0 1 1.063 0L12 16.183zm0-9.365L9.284 9.782a.758.758 0 0 1-1.064 0 .738.738 0 0 1 0-1.052l3.248-3.512a.758.758 0 0 1 1.065 0L15.78 8.73a.738.738 0 0 1 0 1.052.757.757 0 0 1-1.063.001L12 6.818z"
						 fill-rule="evenodd"></path>
					</svg>
					<span>
						<p style="color: #8590A6;">|</p>
					</span>
					<div class="account-right"><input style="color: #8590A6;font-size: 15px;" type="text" placeholder="手机号" v-model="userDto.mobile"></input></div>
				</div>
				<div class="singFlow-Input">
					<input style="color: #8590A6;font-size: 15px;" type="text" placeholder="输入6位数的短信验证" v-model="userDto.code"></input>
					<button class="xx link" style="background-color: white;font-size: 15px;" @click="getsms">获取短信验证码</button>
				</div>
				<div class="login-options">
					<p class="tz-text-1" style="font-size: 15px;margin-left: 43px;" 接>接受语收验证码</p>
				</div>
				<div class="login-btn"><button class="btn link" @click="signIn()">注册/登录</button></div>
				<div class="singFlow-tip d-inline-block">
					<div class="tip-left">
						<p style="margin-left: -42%;color: #8590A6;">未注册手机验证后自动登录</p>
						<p style="color: #8590A6;">注册即代表同意《知乎协议》《隐私保护指引》</p>
					</div>
					<a href="https://www.zhihu.com/org/signup" class="sign">注册机构号</a>
				</div>
			</div>

			<!-- 账号密码登录 -->
			<div class="login-box-tz" v-show="loginistrue == true">
				<div class="singFlow-account">
					<div class="account-left1 link"><input style="color: #8590A6;font-size: 15px;" type="text" placeholder="手机号或邮箱"
						 v-model="userDto.mobile"></input></div>
				</div>
				<div class="singFlow-Input">
					<input style="color: #8590A6;margin-right: 300px;font-size: 15px;" type="password" placeholder="密码" v-model="userDto.password"></input>
					<svg width="24" height="20" viewBox="0 0 24 24" class="Icon SignFlow-switchPasswordIcon Icon--inconspicuous"
					 aria-hidden="true" style="vertical-align: middle; height: 20px; width: 24px;">
						<title></title>
						<g>
							<title>Inconspicuous</title>
							<path d="M17.007 11.504c0 .65-.13 1.26-.36 1.83l3 3.073S23 14.136 23 11.504C23 8.008 17.255 4 11.995 4c-1.4 0-2.741.25-3.982.701l2.161 2.16c.57-.23 1.18-.36 1.831-.36a5.004 5.004 0 0 1 5.002 5.003zM2.57 4.342l2.067 2.075C3.499 7.258 1 9.119 1 11.504c0 3.336 5.79 7.503 11.005 7.503 1.55 0 3.031-.3 4.382-.84l.42.42 2.125 2.118s.782.571 1.314 0-.074-1.305-.074-1.305L3.955 3.183s-.76-.742-1.385-.19c-.626.554 0 1.35 0 1.35zm4.963 4.96l1.55 1.552c-.05.21-.08.43-.08.65 0 1.66 1.341 3.001 3.002 3.001.22 0 .44-.03.65-.08l1.551 1.551c-.67.33-1.41.53-2.2.53a5.004 5.004 0 0 1-5.003-5.002c0-.79.2-1.53.53-2.201zm4.312-.78l3.151 3.152.02-.16c0-1.66-1.34-3.001-3.001-3.001l-.17.01z"
							 fill-rule="evenodd"></path>
						</g>
					</svg>
				</div>
				<div class="login-options1">
					<span class="text-tz-1">海外手机号登录</span>
					<span>忘记密码？</span>
				</div>
				<div class="login-btn"><button class="btn link" @click="signUp()">注册/登录</button></div>
				<div class="singFlow-tip d-inline-block">
					<div class="tip-left">
						<p style="margin-left: -42%;color: #8590A6;">未注册手机验证后自动登录</p>
						<p style="color: #8590A6;">注册即代表同意《知乎协议》《隐私保护指引》</p>
					</div>
					<a href="https://www.zhihu.com/org/signup" class="sign">注册机构号</a>
				</div>
			</div>


			<!-- 二维码扫描登录 -->
			<div @click="show = !show">
				<div id="erwei" class="tz-erwei">
					<iframe class="iframe"></iframe>
					<div class="promoBox"></div>
				</div>
			</div>

		</div>
		<div class="card-login">
			<div class="card-left">
				<p>社交帐号登录</p>
			</div>
			<div class="card-right">
				<div class="Login-socialButton">
					<svg viewBox="0 0 20 19" class="Icon Login-socialIcon Icon--wechat" width="18" height="18" aria-hidden="true"
					 style="fill: rgb(96, 200, 77); height: 18px; width: 18px;">
						<title></title>
						<g>
							<path fill-rule="evenodd" d="M.224 18.667s4.24-1.825 4.788-2.056C13.03 20.14 20 14.715 20 8.9 20 3.984 15.523 0 10 0S0 3.984 0 8.898c0 1.86.64 3.585 1.737 5.013-.274.834-1.513 4.757-1.513 4.757zM6.167 8.96c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272z"></path>
						</g>
					</svg>
					微信
				</div>
				<div class="Login-socialButton">
					<svg width="18" height="18" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" class="Icon Login-socialIcon Icon--qq"
					 aria-hidden="true" style="fill: rgb(80, 200, 253); height: 18px; width: 18px;">
						<title></title>
						<g>
							<title>QQ</title>
							<path d="M9.003 0c-2.265 0-6.29 1.364-6.29 7.325V8.52S.55 12.96.55 15.474c0 .665.17 1.025.28 1.025.115 0 .903-.485 1.75-2.073 0 0-.18 2.197 1.903 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.24.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.11 0 .283-.36.283-1.026 0-2.514-2.166-6.954-2.166-6.954V7.325C15.29 1.365 11.268 0 9.003 0z"
							 fill-rule="evenodd"></path>
						</g>
					</svg>
					QQ
				</div>

				<div class="Login-socialButton">
					<svg viewBox="0 0 22 18" class="Icon Login-socialIcon Icon--weibo" width="18" height="18" aria-hidden="true" style="fill: rgb(251, 102, 34); height: 18px; width: 18px;">
						<title></title>
						<g>
							<g fill-rule="evenodd">
								<path d="M14.518.06s-.87.644.03 1.71c0 0 6.287-1.19 5.69 6.33 0 0 1.05 1.13 1.674-.31 0 .002 1.44-8.584-7.394-7.73zM4.883 13.17s.038 2.584 3.326 2.584c3.657 0 3.683-2.98 3.683-2.98S12.1 9.67 8.687 9.61c-3.863-.07-3.804 3.56-3.804 3.56zM7.41 14.21c-.668 0-1.214-.447-1.214-.998 0-.55.543-.998 1.215-.998.67 0 1.213.447 1.213.998 0 .55-.54.998-1.212.998z"></path>
								<path d="M4.317 4.52C-2.603 10.353.873 14.85.873 14.85c.57 1.01 3.382 3.1 8.596 3.1 5.21 0 9.314-3.628 9.314-6.44 0-2.813-2.918-2.714-2.918-2.714 1.04-1.554.19-2.65.19-2.65-1.684-2.118-5.404-.16-5.407-.158.772-1.717.11-2.797.11-2.797C8.932.66 4.317 4.52 4.317 4.52zm10.448 7.79s-.467 4.16-6.447 4.16c-5.745 0-5.82-3.322-5.842-3.712 0 0-.073-4.423 6.58-4.654 5.94-.204 5.71 4.207 5.71 4.207zM18.65 7.045s1.018-4.37-3.864-3.818c0 0-.628.58.09 1.346 0 0 2.602-.58 2.397 2.598 0 0 .715.885 1.376-.125z"></path>
							</g>
						</g>
					</svg>
					微博
				</div>
			</div>
		</div>
		<div class="singFlow-btn">
			<div class="end">
				<span class="an">
					<svg width="20" height="20" fill="currentColor">
						<g fill="none" fill-rule="evenodd">
							<path fill="#0084FF" d="M15.234 0C18.125 0 20 1.875 20 4.766v10.468C20 18.125 18.125 20 15.234 20H4.766C1.875 20 0 18.125 0 15.234V4.766C0 1.875 1.875 0 4.766 0h10.468z"></path>
							<path d="M0 0h20v20H0z"></path>
							<path fill="#FFF" d="M10.313 10.352c0-.012-.004-1.036-.328-1.055h-2.26a48.42 48.42 0 0 0 .095-3.164h2.21c0-.003.084-.982-.37-.977H5.837c.15-.563.34-1.15.566-1.758 0 0-1.039 0-1.393.937-.146.386-.57 1.87-1.325 3.388.254-.028 1.095-.05 1.59-.963.091-.255.109-.289.222-.627h1.246c0 .452-.051 2.897-.072 3.164H4.414c-.507.019-.672 1.043-.672 1.055h2.832c-.19 2.15-1.209 3.972-3.058 5.413.884.253 1.766-.04 2.202-.43 0 0 .992-.906 1.536-3.004l2.33 2.817s.342-1.166-.053-1.734c-.328-.387-1.212-1.434-1.589-1.814l-.631.504a7.686 7.686 0 0 0 .34-1.752h2.662zM10.898 5v9.441h1.015l.334 1.145 1.82-1.144h2.144V5h-5.313zm4.258 8.398h-1.214l-1.212.782-.22-.782h-.518V6.016h3.164v7.382z"></path>
						</g>
					</svg>
				</span>
				<p style="color: #0C89FF;">下载知乎App</p>
			</div>
		</div>
		<div class="bottom-text-set">
			<p>知乎专栏·圆桌·发现·移动应用·联系我们·来知乎工作·注册机构号</p>
			<p style="margin-top: 10px;">2020知乎·京ICP证110745号·京ICP备13052560号-1·
				<img src="https://pic3.zhimg.com/80/v2-d0289dc0a46fc5b15b3363ffa78cf6c7.png">
				京公网按备11010802010035号·出版物经营许可证</p>
			<p style="margin-top: 10px;">侵权举报·网上有害信息举报专区·儿童色情信息举报专区·违法和不良信息举报：010-82716601</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'login',
		data() {
			return {
				signUpisActive: true,
				loginisActive: false,
				signUpistrue: true,
				loginistrue: false,

				userDto: {
					mobile: '',
					password: '',
					code: ''
				},
			};
		},
		methods: {
			signUpclick() {
				this.signUpistrue = true;
				this.loginistrue = false;

				this.signUpisActive = true;
				this.loginisActive = false;
			},
			loginclick() {
				this.signUpistrue = false;
				this.loginistrue = true;
				this.signUpisActive = false;
				this.loginisActive = true;
			},
			// 免密登录
			// 获取短信验证码
			getsms() {
				let that = this;
				this.axios({
					method: 'post',
					url: 'http://localhost:8080/api/user/sms',
					data: {
						mobile: this.userDto.mobile
					}
				}).then(res => {
					alert("短信发送成功")
					console.log(res);
				});
			},
			// 3.验证手机号和短信验证码   登录
			signIn() {
				let that = this;
				this.axios({
					method: 'post',
					url: 'http://localhost:8080/api/user/signup',
					data: {
						mobile: this.userDto.mobile,
						code: this.userDto.code,
					}
				}).then(res => {
					console.log(res);
					alert(res.data.msg);
					if (res.data.msg == "成功") {
						alert("注册成功");
						this.$router.push('/home');
					}
				});
			},

			// 账号密码登录
			signUp() {
				let that = this;
				this.axios({
					method: 'post',
					url: 'http://localhost:8080/api/user/login',
					data: {
						mobile: this.userDto.mobile,
						password: this.userDto.password
					}
				}).then(res => {
					alert(res.data.msg)
					if (res.data.msg == "成功") {
						this.$router.push('/home');
					}
					if (res.data.msg == "用户不存在") {
						this.mobileistrue = true;
					} else {
						this.mobileistrue = false;
					}
					if (res.data.msg == "密码错误") {
						this.passwordistrue = true;
					} else {
						this.passwordistrue = false;
					}
				}).catch(function(error) {
					console.log(Error)
				});
			}
		},
		created() {}
	};
</script>

<style lang="scss" scoped>
	.login-bar {
		background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
		background-repeat: no-repeat;
		background-color: #b8e5f8;
		background-size: cover;
		width: 100%;
		height: 100vh;
		overflow: auto;

		.logo {
			width: 128px;
			height: 81px;
			margin-bottom: 24px;
			margin-top: 40px;
			
		}
	}

	.tx-center {
		text-align: center;
	}


	.Login-socialButton {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		padding: 20px;
	}

	.sign-box-tz {
		width: 450px;
		height: 420px;
	}

	.login-box-tz {
		width: 450px;
		height: 420px;
	}

	.an {
		padding-top: 5px;
	}

	.end {
		line-height: 50px;
		display: flex;
		margin-left: 35%;
		margin-top: 2%;
		width: 150px;
		height: 40px;
		background-color: #ffffff;
	}

	.singFlow-btn {
		width: 450px;
		height: 50px;
		margin-top: 2%;
		margin-left: 37%;
		background-color: #ffffff;
	}

	.ap {
		display: flex;
		padding-left: 10px;
	}

	.pp {
		line-height: 50px;
	}

	.bottom-text-set {
		color: white;
		padding-top: 20px;
	}

	.card-right {
		padding-left: 5px;
		display: flex;
		flex-wrap: nowrap;
		width: 269px;
		height: 55px;
		background-color: #ffffff;
	}

	.card-left {
		line-height: 55px;
		width: 155px;
		height: 55px;
		background-color: #ffffff;
		color: #8590a6;
	}

	.card-login {
		display: flex;
		margin-top: 2.5%;
		margin-left: 37%;
		width: 450px;
		height: 55px;
		background-color: #ffffff;
		border-radius: 5px;
	}

	.sign {
		padding-top: 6%;
		padding-left: 2%;
		color: #0084ff;
	}

	.tip-left {
		margin-left: 3%;
		margin-top: 3%;
		line-height: 20px;
		width: 350;
		height: 58px;
		background-color: #f6f6f6;
	}

	.singFlow-tip {
		display: flex;
		margin-top: 6%;
		margin-left: 0%;
		width: 450px;
		height: 70px;
		background-color: #f6f6f6;
	}

	.btn {
		border-color: #0084ff;
		display: inline-block;
		padding: 0 16px;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		cursor: pointer;
		background: none;
		border: 1px solid #0084ff;
		border-radius: 3px;
		color: #ffffff;
	}

	.login-btn {
		display: inline-block;
		margin-top: 6%;
		margin-left: -2%;
		width: 390px;
		height: 42px;
		background-color: #0084ff;
	}

	.login-options {
		margin-left: 43%;
		margin-top: 2%;
		line-height: 40px;
		width: 300px;
		height: 40px;
		color: #8590a6;

	}

	.login-options1 {
		margin-top: 2%;
		line-height: 40px;
		width: 450px;
		height: 40px;
		color: #8590a6;

		.text-tz-1 {
			color: rgb(23, 81, 153);
			margin-top: 1%;
			margin-right: 210px;
		}
	}

	.singFlow-Input {
		display: flex;
		line-height: 50px;
		text-align: justify;
		margin-left: 6.5%;
		margin-top: 5%;
		width: 390px;
		height: 50px;
		background-color: #ffffff;
		border-bottom: 1px solid #ebebeb;
		align-items: center;
	}

	.account-left {
		display: inline-block;
		width: 70px;
		height: 20px;
		background-color: #ffffff;
	}

	.account-left1 {
		display: inline-block;
		width: 90px;
		height: 20px;
		background-color: #ffffff;
	}

	.account-right {
		width: 70px;
		height: 20px;
		background-color: #ffffff;
	}

	.singFlow-account {
		display: flex;
		width: 390px;
		height: 50px;
		margin-left: 6.5%;
		margin-top: 5%;
		background-color: #ffffff;
		border-bottom: 1px solid #ebebeb;
		align-items: center;
	}

	.singFlow-tab {
		line-height: 60px;
		width: 90px;
		height: 60px;
		cursor: pointer;
		font-size: 18px;
		color: #444;

		// font-weight: bold;
		// border-bottom: 3px solid rgb(0, 132, 255);
		a {
			font-weight: bold;
			border-bottom: 3px solid rgb(0, 132, 255);
			color: black;
			padding-bottom: 22px;
		}
	}

	.singFlow-tab1 {
		margin-left: 20px;
		line-height: 60px;
		width: 80px;
		height: 60px;
		cursor: pointer;
		font-size: 18px;
		color: #444;

		a:before {
			color: black;
			font-size: 15px;
		}

		a:after {
			font-weight: bold;
			border-bottom: 3px solid rgb(0, 132, 255);
			color: black;
			font-size: 18px;
			padding-bottom: 22px;
		}
	}

	.singFlow-tabs {
		width: 370px;
		height: 60px;
		margin-left: 4%;
		display: flex;
		flex-wrap: nowrap;
	}

	.xx {
		margin-left: 28%;
		color: #175199;
	}

	.tab-login-tz {
		margin-left: 37%;
		width: 450px;
		height: 420px;
		background-color: #ffffff;
	}

	.login-bar {
		// background-image: url("../assets/image/bgzh.png");
		background-repeat: no-repeat;
		background-color: #b8e5f8;
		background-size: cover;
		width: 100%;
		height: 100vh;
		overflow: auto;

		.logo {
			width: 128px;
			height: 81px;
			margin-top: 40px;
			margin-bottom: 24px;
			margin-left: -40px;
		}
	}
</style>
