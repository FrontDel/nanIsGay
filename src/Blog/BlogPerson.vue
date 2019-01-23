<template>
	<div class="Blog">
		<!-- 右侧 -->
		<div class="Blog-main-right">
			<div class="Blog-main-right-photo">
				<span><img src="../assets/p01.jpg" alt=""></img></span>
				<span><img src="../assets/t02.jpg" alt=""></span>
			</div>
			<div class="Blog-main-right-name">
				<h4>GLory丶御邪</h4>
				<div class="Blog-main-right-text">花开花落，转眼已世过百年</div>
			</div>
			<div class="Blog-main-right-tag" style="margin-top: 0.5rem;">
				<span class="Blog-main-right-tag-title">最新推荐</span>
				<div class="Blog-main-right-tag-list">
					<div class="Blog-main-right-tag-list-group">
						<p>花开花落，转眼已世过百年</p>
						<span class="badge">1</span>
					</div>
					<div class="Blog-main-right-tag-list-group">
						<p>花开花落，转眼已世过百年</p>
						<span class="badge">2</span>
					</div>
					<div class="Blog-main-right-tag-list-group">
						<p>花开花落，转眼已世过百年</p>
						<span class="badge">3</span>
					</div>
				</div>
			</div>
			<div class="Blog-main-right-tag">
				<span class="Blog-main-right-tag-title Blog-main-right-tag-type-title">个人分类</span>
				<div class="Blog-main-right-tag-list">
					<div class="Blog-main-right-tag-list-group">
						<p>VUE</p>
						<span class="badge ">22篇</span>
					</div>
					<div class="Blog-main-right-tag-list-group">
						<p>REACT</p>
						<span class="badge ">12篇</span>
					</div>
					<div class="Blog-main-right-tag-list-group">
						<p>ANGULAR</p>
						<span class="badge ">20篇</span>
					</div>
					<div class="Blog-main-right-tag-list-group">
						<p>MUI</p>
						<span class="badge ">20篇</span>
					</div>
					<div class="Blog-main-right-tag-list-group">
						<p>JAVASCRIPT</p>
						<span class="badge ">20篇</span>
					</div>
					<div class="Blog-main-right-tag-list-group">
						<p>JQUERY</p>
						<span class="badge ">20篇</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'blog-person',
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

	.Blog-main-right {
		width: 15%;
		height: 100%;
		background: seagreen;
		float: right;
		padding-bottom: 0.2rem;
		border-radius: 0.05rem 0.05rem;
	}

	.Blog-main-right-photo {
		width: 100%;
		height: 1rem;
		border: 1px solid white;
		position: relative;

	}

	.Blog-main-right-photo span:nth-child(1) {
		display: block;
		width: 100%;
		height: 100%;
	}

	.Blog-main-right-photo span:nth-child(1) img {
		display: block;
		width: 100%;
		height: 100%;
	}

	.Blog-main-right-photo span:nth-child(2) {
		display: block;
		width: 0.5rem;
		height: 0.5rem;
		border: 1px solid white;
		box-shadow: 0.02rem 0.02rem 1rem 0.05rem #eee;
		;
		position: absolute;
		left: 50%;
		bottom: -0.25rem;
		transform: translate(-50%, 0);
	}

	.Blog-main-right-photo span:nth-child(2) img {
		display: block;
		width: 100%;
		height: 100%;
	}

	.Blog-main-right-tag {
		width: 100%;
		margin-top: 0.2rem;
	}

	.Blog-main-right .Blog-main-right-tag:nth-child(1) {}

	.Blog-main-right-tag .Blog-main-right-tag-title {
		display: block;
		width: 50%;
		height: 0.3rem;
		border-radius: 0 0.15rem 0.15rem 0;
		background: #2FCFAD;
		font-size: 0.12rem;
		color: white;
		line-height: 0.3rem;
		text-indent: 0.1rem;
	}

	.Blog-main-right-name h4 {
		font-size: 0.18rem;
		color: white;
		width: 100%;
		text-align: center;
	}

	.Blog-main-right-name .Blog-main-right-text {
		width: 80%;
		background: rgba(255, 255, 255, 0.1);
		color: #E2E2E2;
		font-size: 0.14rem;
		margin: 0 auto;
		margin-top: 0.1rem;
		padding: 0.1rem;
		border-radius: 0.05rem 0.05rem;
	}

	.Blog-main-right-tag-list {
		clear: both;
	}

	.Blog-main-right-tag-list-group {
		width: 89%;
		margin: 0 auto;
		background: rgba(255, 255, 255, 0.1);
		height: 0.3rem;
		line-height: 0.3rem;
		font-size: 0.12rem;
		color: white;
		border-radius: 0.05rem 0.05rem;
		padding-right: 0.05rem;
		margin-top: 0.1rem;

	}

	.Blog-main-right-tag-list-group p {
		float: left;
		margin: 0;
		padding-left: 0.05rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 60%;

	}

	.Blog-main-right-tag-list-group span {
		display: inline-block;
		float: right;
		min-width: 10px;
		padding: 3px 7px;
		font-size: 12px;
		font-weight: 700;
		line-height: 1;
		color: #fff;
		text-align: center;
		white-space: nowrap;
		vertical-align: middle;
		background-color: #777;
		border-radius: 10px;
		margin-top: 0.05rem;
	}
</style>
