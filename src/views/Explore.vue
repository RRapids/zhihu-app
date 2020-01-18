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
		<!-- //圆桌部分 -->
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
	</div>
</template>

<script>
	export default {
		name: 'explore',
		data() {
			return {
				specials: [],
				roundTables: []
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
		}
	};
</script>

<style lang="scss" scoped>
	.row {
		column-count: 2;
		margin-left: 15%;
		margin-right: 15%;
		background-color: white;
	}

	.column {
		.card {
			display: inline-block;
			background-color: white;
			padding: 20px;
			margin-top: 20px;
			overflow: auto;
			border-radius: 10px;
			break-inside: avoid;

			img {
				width: 450px;
				height: 200px;
				border-radius: 10px;
			}
		}
	}

	.img_name {
		position: relative;
		padding-left: 20px;
		top: -170px;
		left: 0;
	}

	.footer {
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
