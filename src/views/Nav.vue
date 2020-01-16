<template>
	<div>
		<div class="nav gutter">
			<div class="nav-bar">
				<ul>
					<li class="nav-item">
						<router-link to="/home">首页</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/explore">发现</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/question/waiting">等你来答</router-link>
					</li>
					<li class="nav-item abs-center-right">
						<router-link to="/login">登录</router-link>
					</li>
				</ul>
			</div>
		</div>
		<!-- 二级路由入口 -->
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'Nav',
		data() {
			return {};
		},
		created() {}

	}
</script>

<style lang="scss" scoped>
	.router-link-active {
		border-bottom: 2px solid #fff;
	}

	.gutter {
		position: relative;
		margin-bottom: 10px;
		background-color: blue;
	}

	.nav-bar {
		margin-left: 10%;
		margin-right: 10%;
	}

	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}

	.nav-item {
		float: left;
	}

	.nav-item a {
		display: block;
		color: white;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
	}

	.abs-center-right {
		float: right;
	}
</style>
