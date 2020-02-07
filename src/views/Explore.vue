<template>
	<div>
		<!-- //专题部分 -->
		<div class="title">
			<svg class="Zi Zi--LabelSpecial" fill="#0084ff" viewBox="0 0 24 24" width="36" height="36">
				<path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
				 fill-rule="evenodd"></path>
			</svg>
			<span>最新专题</span>
		</div>
		<div class="row">
			<div class="column" v-for="(item,index) in specials" :key="index">
				<div class="card">
					<img :src="item.banner">
					<h3>{{item.title}}</h3>
					<p class="meta">{{item.updated}}更新，{{item.viewCount}}次浏览</p>
					<p class="introduction">{{item.introduction}}</p>
					<span v-for="(section,index) in item,sections" :key="index" class="section">
						{{ section.sectionTitle }}
					</span>
				</div>
			</div>
		</div>
		<!-- //“所有专题” -->
		<div class="footer">
			<router-link to="/special/all" class="item">查看更多专题 ></router-link>
		</div>
		<!-- //部分圆桌 -->
		<div class="row justify-content-center">
			<div class="col-6" v-for="(item, index) in roundTables" :key="index">
				<div class="roundtable-card m-3">
					<button class="btn-follow-table" ref="btn">关注圆桌</button>
					<div class="card-img-wrapper" ref="box">
						<img :src="item.logo" ref="bgImg" />
						<div class="mask" ref="mask1"></div>
						<div class="mask" ref="mask2"></div>
					</div>

					<div class="info">
						<h3 class="mb-4">{{ item.name }}</h3>
						<p>越是前景光明，越要居安思危。打败你的并不一定是你的敌人，而是自己的故步自封。 而是自己的故步自封.而是自己的故步自封</p>
					</div>
					<div class="content">
						<p>可以推荐几个值得长期投资的基金吗？</p>
						<p class="meta">456个回答</p>
						<p>可以推荐几个值得长期投资的基金吗？</p>
						<p class="meta">456个回答</p>
					</div>
				</div>
			</div>
			<router-link to="roundTable/all" class="all">查看更多圆桌</router-link>
		</div>
		<!-- 收藏页 -->
		<div class="title">
			<svg class="Zi--Star" fill="#0084ff" viewBox="0 0 24 24" width="32" height="32">
				<path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
				 fill-rule="evenodd"></path>
			</svg>
			<span class="top_content">热门收藏夹</span>
		</div>
		<div class="row">
			<div class="favorite_card" v-for="(item,index) in favorites" :key="index">
				<div class="card_top">
					<h3>{{item.title}}</h3>
					<ul>
						<li><img :src="item.creatorAvatar"></li>
						<li>
							<p>{{item.creatorName}}</p>
						</li>
						<li>
							<p style="color: rgb(153,153,153);">创建 | {{item.followers}} 人关注</p>
						</li>
					</ul>
					<button class="favorite_button">关注收藏夹</button>
				</div>
				<div class="card_bottom">
					<h4>{{item.questionTitle}}</h4>
					<p class="answer_content">{{item.answerAuthorName}}：{{item.answerContent}}</p>
					<p class="vote_style">{{item.voteupCount}} 赞同 · {{item.commentCount}} 评论</p>
					<h4>{{item.questionTitle}}</h4>
					<p class="answer_content">{{item.answerAuthorName}}：{{item.answerContent}}</p>
					<p class="vote_style">{{item.voteupCount}} 赞同 · {{item.commentCount}} 评论</p>
					<p class="total">已收藏{{item.totalCount}}条内容 ></p>
				</div>
			</div>
		</div>
		<!-- //“更多收藏夹” -->
		<div class="footer">
			<router-link to="/favorite/all" class="item">查看更多收藏夹 ></router-link>
		</div>
		<!-- //专栏部分 -->
		<div class="title">
			<svg class="Zi Zi--EditCircle" fill="#0084ff" viewBox="0 0 24 24" width="36" height="36">
				<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z"
				 fill-rule="evenodd"></path>
			</svg>
			<span>专栏</span>
		</div>
		<div class="column_row">
			<div class="column" v-for="(item,index) in columns" :key="index">
				<div class="column_card">
					<span class="column_img"><img :src="item.imageUrl" class="column_img"></span>
					<h4>{{item.title}}</h4>
					<p class="vote_style">{{item.follower}}关注 · {{item.articlesCount}}文章</p>
					<p class="answer_content">{{item.description}}</p>
					<button class="column_btn">进入专栏</button>
				</div>
			</div>
		</div>
		<!-- //“更多专栏” -->
		<div class="footer">
			<router-link to="ZhuanLan" class="item">查看更多专栏 ></router-link>
		</div>
		<footer class="page_footer"></footer>
	</div>
</template>

<script>
	export default {
		name: 'explore',
		data() {
			return {
				//专题
				specials: [],
				//圆桌
				roundTables: [],
				//收藏
				favorites: [],
				//专栏
				columns: []
			};
		},
		mounted() {},
		created() {
			//获取最近专题
			this.axios.get('http://localhost:8080/api/special').then(res => {
				console.log(res.data.data.length);
				this.specials = res.data.data;
			});
			//获取四个圆桌
			this.axios.get('http://localhost:8080/api/roundTable').then(res => {
				console.log(res.data.data.length);
				this.roundTables = res.data.data;
			});
			//收藏
			this.axios.get('http://localhost:8080/api/favorite').then(res => {
				console.log(res.data.data.length);
				this.favorites = res.data.data;
			});
			//专栏
			this.axios.get('http://localhost:8080/api/columns').then(res => {
				console.log(res.data.data.length);
				this.columns = res.data.data;
			});
		}
		// created() {
		// 	this.axios.get(this.$store.state.baseUrl + '/explore').then(res => {
		// 		console.log(res);
		// 		//将接口数组解析后分别存入四个数组
		// 		this.specials = res.data.data.specials;
		// 		this.roundTables = res.data.data.roundTables;
		// 		this.favorites = res.data.data.favorites;
		// 		this.columns = res.data.data.columns;
		// 		this.$nextTick(() => {
		// 			//获得循环中的引用对象，都将会是数组的形式
		// 			let boxArr = this.$refs.box;
		// 			let imgArry = this.$refs.bgImg;
		// 			let btnArr = this.$refs.btn;
		// 			let mask1Arr = this.$refs.mask1;
		// 			let mask2Arr = this.$refs.mask2;
		// 			//遍历，对每个对象进行处理
		// 			for (var i = 0, len = boxArr.length; i < len; i++) {
		// 				let box = boxArr[i];
		// 				let img = imgArry[i];
		// 				let btn = btnArr[i];
		// 				let mask1 = mask1Arr[i];
		// 				let mask2 = mask2Arr[i];
		// 				//第三方库，可以获取图片的主色、次色等
		// 				RGBaster.colors(img, {
		// 					success: function(payload) {
		// 						// payload.dominant是主色，payload.secondary是次色, payload.palette是调色板，含多个主要颜色数组,RGB形式表示
		// 						this.dominant = payload.dominant;
		// 						this.secondary = payload.secondary;
		// 						// console.log('主色：' + payload.dominant);
		// 						//去掉rgb的外层rgb字母和括号，得到112,34,56这样的值
		// 						let str = payload.dominant.substring(4, payload.dominant.length - 1);
		// 						//按逗号分割，得到字符串数组
		// 						let strArr = str.split(',');
		// 						//分别获得r,g,b的值，并转为整型
		// 						let r = parseInt(strArr[0]);
		// 						let g = parseInt(strArr[1]);
		// 						let b = parseInt(strArr[2]);
		// 						// console.log(r + '=>' + g + '=>' + b);
		// 						//定义两个透明度的值
		// 						let a1 = 0;
		// 						let a2 = 0.5;
		// 						//创建两个rgba颜色，用来生成遮罩层的渐变色
		// 						let color1 = `rgba(${r},${g},${b},${a1})`;
		// 						let color2 = `rgba(${r},${g},${b},${a2})`;
		// 						// console.log('颜色1：' + color1);
		// 						// console.log('颜色2：' + color2);
		// 						//圆桌卡片顶部整宽部分背景色设置为图片主色
		// 						box.style.backgroundColor = this.dominant;
		// 						//右侧logo图覆盖两层蒙版，使用以下渐变色规则
		// 						mask1.style.background = 'linear-gradient(to right,' + this.dominant + ' 0%,' + color1 + ' 100%)';
		// 						mask2.style.background = 'linear-gradient(to right,' + color2 + ' 0%,' + color1 + ' 100%)';
		// 						//关注按钮的文字颜色，使用图片主色
		// 						btn.style.color = this.dominant;
		// 					} 
		// 				});
		// 			}
		// 		});
		// 	});
		// },
		// methods: {}
	};
</script>

<style lang="scss" scoped>
	.row {
		top: 20px;
		width: 70%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;
	}

	.column_row {
		top: 20px;
		width: 70%;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 250px 250px 250px 250px;
		grid-template-rows: auto;
	}

	.column {
		.card {
			display: inline-block;
			background-color: white;
			margin-left: 15px;
			margin-bottom: 20px;
			padding: 10px 10px 10px 10px;
			overflow: auto;
			border-radius: 10px;
			break-inside: avoid;

			img {
				width: 100%;
				height: 200px;
				border-radius: 10px;
			}
		}
	}

	.column_card {
		background-color: white;
		padding: 30px 20px 20px 20px;
		overflow: auto;
		margin-left: 20px;
		margin-bottom: 20px;
		border-radius: 10px;
		break-inside: avoid;
		text-align: center;
	}

	.column_btn {
		ursor: pointer;
		background: none;
		border: none;
		outline: none;
		-webkit-appearance: none;
		font: inherit;
		cursor: pointer;
		padding: 0 16px;
		height: 34px;
		font-size: 14px;
		color: #0084ff;
		background-color: rgba(0, 132, 255, .08);
		border-radius: 3px;
		font-weight: 600;
	}

	.column_img {
		height: 100px;
		width: 100px;
		border-radius: 100%;

	}

	.favorite_card {
		background-color: white;
		margin-left: 15px;
		margin-bottom: 20px;
		padding: 10px 10px 10px 10px;
		overflow: auto;
		border-radius: 10px;
		break-inside: avoid;

		.card_top {
			height: 90px;
			border-bottom: 1px solid #d6d6d6;
		}

		.card_bottom {
			height: auto;
		}

		img {
			// float: left;
			margin-left: -40px;
		}
	}

	.page_footer {
		margin-top: 64px;
		display: flex;
		-webkit-box-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		align-items: center;
		height: 24px;
		font-size: 13px;
		color: #8590a6;
	}

	li {
		float: left;
		display: inline;
	}

	.img_name {
		// position: relative;
		padding-left: 20px;
		// top: -170px;
		left: 0;
	}

	.vote_style {
		font-size: 12px;
		color: #8d8d8d;
	}

	.favorite_button {
		height: 30px;
		width: 100px;
		padding: 3px;
		font-weight: bold;
		border: none;
		background-color: rgb(235, 245, 255);
		color: rgb(0, 132, 255);
		text-decoration: none;
		display: inline-block;
		cursor: pointer;
		//位置
		position: relative;
		top: -45px;
		right: -150px;
	}

	.answer_content {
		margin-top: 20px;
		height: 40px;
		line-height: 20px;
		font-size: 14px;
		color: #444;
		text-align: center;
		display: -webkit-box;
		text-overflow: ellipsis;
		overflow: hidden;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.total {
		font-size: 15px;
		font-weight: bold;
		color: rgb(133, 144, 166);
	}

	.footer {
		// position: relative;
		background-color: white;
		width: 11%;
		text-align: center;
		// margin-top: 20px;
		margin: 0 auto;
		border-radius: 30px;
		// padding: 5px;
	}

	.item {
		display: block;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-weight: bold;
		color: rgb(26, 218, 207);
	}

	.title {
		margin-top: 50px;
		margin-left: 15%;
		margin-bottom: 20px;

		span {
			margin-left: 12px;
			font-size: 25px;
			font-weight: 600;
		}
	}

	.meta {
		font-size: 13px;
		color: #99a4c4;
	}

	.introduction {
		font-size: 15px;
	}

	.section {
		background-color: #eee;
		padding: 3px;
		margin: 5px;
	}
</style>
