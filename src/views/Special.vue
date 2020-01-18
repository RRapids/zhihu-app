<template>
	<div class="banner">
		<img src="../assets/image/heart.png" alt="">
		<h3>全部专题</h3>
		<div class="container">
			<div class="row" v-for="(item,index) in specials" :key="index">
				<div class="col-4"><img :src="item.banner"></div>
				<div class="col-8">
					<h3>{{item.title}}</h3>
					<p class="meta">{{item.updated}}更新，{{item.viewCount}}次浏览</p>
					<p class="introduction">{{item.introduction}}</p>
					<span v-for="(section,index) in item,sections" :key="index" class="section">
						{{ section.sectionTitle }}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'special',
		data() {
			return {
				specials: []
			};
		},
		created() {
			this.axios.get('http://localhost:8080/api/special/all').then(res => {
				console.log(res.data.data.length);
				this.specials = res.data.data;
			});
		}
	};
</script>

<style lang="scss" scoped>
	.banner {
		margin-left: 10%;
		margin-right: 10%;
	}

	.container {
		.row {
			display: flex;
			margin-bottom: 10px;
			border: 1px solid #d6d6d6;
			border-radius: 4px;
			height: 180px;
			padding: 14px;
			box-shadow: 0 1px 3px 0 rgba(26, 26, 26, 0.1);

			.col-4 {
				flex: 0 0 33%;
				height: 100%;

				img {
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
			}

			.col-8 {
				flex: 0 0 66%;
				text-align: left;
				line-height: 28px;
				padding-left: 15px;

				h3 {
					font-weight: 700;
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
			}
		}
	}
</style>
