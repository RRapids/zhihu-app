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
		<div class="title">
			<svg class="Zi Zi--LabelRoundtable" fill="#0084ff" viewBox="0 0 24 24" width="36" height="36">
				<path d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z"
				 fill-rule="evenodd"></path>
			</svg>
			<span>圆桌讨论</span>
		</div>
		<div class="row">
			<div class="column" v-for="(item,index) in roundTables" :key="index">
				<div class="card">
					<img :src="item.banner">
					<h3 class="img_name">{{item.name}}</h3>
					<p class="meta">{{item.includeCount}}位嘉宾参与</p>
				</div>
			</div>
		</div>
		<!-- //“所有圆桌” -->
		<div class="footer">
			<router-link to="/roundTable/all" class="item">查看更多圆桌 ></router-link>
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
					<span class="column_img"><img :src="item.imageUrl" class="column_img" ></span>
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
	.page_footer{
		margin-top:64px;
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
