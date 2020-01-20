<template>
	<div>
		<!-- //专题部分 -->
		<h2 class="title">最新专题</h2>
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
		<h2 class="title">圆桌讨论</h2>
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
		<div>
			<h2 class="title">热门收藏夹</h2>
		</div>
		<div class="row">
			<div class="favorite_card" v-for="(item,index) in favorites" :key="index">
				<div class="card_top">
					<h3>{{item.title}}</h3>
					<ul>
						<li><img :src="item.creatorAvatar"></li>
						<li><p>{{item.creatorName}}</p></li>
						<li><p style="color: rgb(153,153,153);">创建 | {{item.followers}} 人关注</p></li>
					</ul>
					<button class="favorite_button">关注收藏夹</button>
				</div>
				<div class="card_bottom">
					<h4>{{item.questionTitle}}</h4>
					<p class="answer_content">{{item.answerAuthorName}}：{{item.answerContent}}</p>
					<p class="vote_style">{{item.voteupCount}} 赞同 · {{item.commentCount}} 评论</p>
					<p class="total">已收藏{{item.totalCount}}条内容  ></p>
				</div>
			</div>
		</div>
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
				favorites: []
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

	.column {
		.card {
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
		.card_bottom{
			height: 150px;
		}
		img {
			// float: left;
			margin-left: -40px;
		}
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
	.vote_style{
		font-size: 12px;
		color: #8d8d8d;
	}
	.favorite_button{
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
	
	.answer_content{
		white-space: nowrap;
		width: auto;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.total{
		font-size: 15px;
		font-weight: bold;
		color: rgb(133,144,166);
	}
	.footer {
		position: relative;
		background-color: white;
		width: 150px;
		text-align: center;
		margin-top: 20px;
		margin: 0 auto;
		border-radius: 30px;
		padding: 5px;
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
		margin-left: 15%;
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
