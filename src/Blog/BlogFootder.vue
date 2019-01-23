<template>
	<div class="Blog">
		<div class="Blog-footer">
			<div class="Blog-footer-container">
				<div class="Blog-footer-top">
					<span><img src="../assets/6.jpg" alt=""></span>
					<div class="Blog-footer-top-right">
						<h4>GLory丶御邪</h4>
						<p>性别：男 年龄：23岁</p>
					</div>
				</div>
				<div class="Blog-footer-content">
					<h4>最近访客</h4>
					<div class="Blog-footer-visitor">
						<span><img src="../assets/0.jpg" alt=""></span>
						<span><img src="../assets/1.jpg" alt=""></span>
						<span><img src="../assets/4.jpg" alt=""></span>
						<span><img src="../assets/7.jpg" alt=""></span>
						<span><img src="../assets/p01.jpg" alt=""></span>
					</div>
				</div>
				<div class="Blog-footer-left">©2019WEB技术研究群博客版权所有</div>
				<div class="Blog-footer-right">
					<a href="">加入我们</a>
					<a href="">官网历史</a>
					<a href="">客服中心</a>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	export default {
		name: 'blog-footer',
		data() {
			return {

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	input,
	textarea,
	select,
	a:focus {
		outline: none;
	}

	.Blog-footer {
		width: 100%;
		height: 3.5rem;
		margin-top: 0.1rem;
		background: #242221;
		font-size: 0.16rem;
		border-top: 0.1rem solid #2E8B57;
		clear: both;
	}

	.Blog-footer-container {
		width: 60%;
		margin: 0 auto;
	}

	.Blog-footer-top {
		width: 100%;
		border-bottom: 1px solid;
		padding-bottom: 0.4rem;

	}

	.Blog-footer-top span {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		border: 4px solid #2E8B57;
		margin-top: -0.5rem;
		vertical-align: top;
	}

	.Blog-footer-top span img {
		width: 100%;
		height: 100%
	}

	.Blog-footer-top-right {
		display: inline-block;
		line-height: 0.23rem;
		color: white;
		vertical-align: top;
		font-family: cursive;
	}

	.Blog-footer-top-right h4 {
		margin-top: 0.1rem;
		margin-bottom: 0rem;
	}

	.Blog-footer-top-right p {
		margin-top: 0rem;
		margin-bottom: 0rem;
	}

	.Blog-footer-content h4 {
		line-height: 0.2rem;
		color: white;
	}

	.Blog-footer-visitor span {
		display: inline-block;
		width: 1rem;
		height: 1rem;
		margin-left: 0.1rem;
		border: 4px solid white;
	}

	.Blog-footer-visitor span:nth-child(1) {
		margin-left: 0;
	}

	.Blog-footer-visitor span img {
		width: 100%;
		height: 100%
	}

	.Blog-footer-left {
		float: left;
		float: left;
		letter-spacing: 5px;
		font-family: cursive;
		margin-top: 0.5rem;
		color: white;
	}

	.Blog-footer-right {
		float: right;
		margin-top: 0.5rem;
		font-family: cursive;
	}

	.Blog-footer-right a {
		color: white;
	}
</style>
