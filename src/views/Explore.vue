<template>
	<div>
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
		<div class="footer">
			<h3>
				<router-link to="/special/all" style="color: white;">所有专题--></router-link>
			</h3>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'explore',
		data() {
			return {
				specials: []
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/special').then(res => {
				console.log(res.data.data.length);
				this.specials = res.data.data;
			});
		}
	};
</script>

<style lang="scss" scoped>
	.row {
		column-count: 2;
		margin-left: 10%;
		margin-right: 10%;

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
				width: 100%;
				height: 50%;
				border-radius: 10px;
			}
		}
	}

	.footer {
		background-color: blue;
		padding: 10px;
		width: 50%;
		text-align: center;
		margin-top: 20px;
		margin: 0 auto;
		border-radius: 10px;
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
