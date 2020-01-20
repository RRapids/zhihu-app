<template>
	<div class="row">
		<div class="column side">
			<ul>
				<li class="home-item">
					<router-link to="/recommoned">推荐</router-link>
				</li>
				<li class="home-item">
					<router-link to="/follow">关注</router-link>
				</li>
				<li class="home-item">
					<router-link to="/hot">热榜</router-link>
				</li>
			</ul>
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
		margin-left: 15%;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
		background-color: #f6f6f6;
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
