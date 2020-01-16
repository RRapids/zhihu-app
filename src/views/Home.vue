<template>
	<div class="row">
		<div class="column side">
			<div class="bar">
					<ul>
						<li class="home-item"><router-link to="/recommoned">推荐</router-link></li>
						<li class="home-item"><router-link to="/follow">关注</router-link></li>
						<li class="home-item"><router-link to="/hot">热榜</router-link></li>
					</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home',
		data() {
			return {};
		},
		created() {}
	}
</script>

<style lang="scss" scoped>
	.column {
		float: left;
		padding: 20px;
	}

	.column.side {
		width: 50%;
		margin-left: 10%;
	}

	.bar {
		background-color: #f6f6f6;
		margin-top: 10px;
	}
	
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	.home-item {
		float: left;
	}

	.home-item a {
		display: block;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}
</style>
