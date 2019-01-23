<template>
	<div class="Blog">
		<blog-header></blog-header>
		<div class="Blog-main">
			<!-- 主题内容 -->
			<!-- 左侧 -->
			<div class="Blog-main-left">
				<div class="Blog-main-left-content">
					<ul>
						<li>
							<div class="Blog-main-left-content-img"><img src="../assets/p01.jpg" alt=""></div>
							<div class="Blog-main-left-content-user">
								<span>FEB 17,2019</span>
								<span>GLory丶御邪</span>
								<span><img src="../assets/p01.jpg" alt=""></span>
							</div>
							<div class="Blog-main-left-content-title">
								<h4>花开花落，转眼已世过百年</h4>
							</div>
							<div class="Blog-main-left-content-text">花开花落，转眼已世过百年</div>
						</li>
						<li>
							<div class="Blog-main-left-content-img"><img src="../assets/1.jpg" alt=""></div>
							<div class="Blog-main-left-content-user">
								<span>FEB 17,2019</span>
								<span>GLory丶御邪</span>
								<span><img src="../assets/1.jpg" alt=""></span>
							</div>
							<div class="Blog-main-left-content-title">
								<h4>花开花落，转眼已世过百年</h4>
							</div>
							<div class="Blog-main-left-content-text">花开花落，转眼已世过百年</div>
						</li>
						<li>
							<div class="Blog-main-left-content-img"><img src="../assets/2.jpg" alt=""></div>
							<div class="Blog-main-left-content-user">
								<span>FEB 17,2019</span>
								<span>GLory丶御邪</span>
								<span><img src="../assets/2.jpg" alt=""></span>
							</div>
							<div class="Blog-main-left-content-title">
								<h4>花开花落，转眼已世过百年</h4>
							</div>
							<div class="Blog-main-left-content-text">花开花落，转眼已世过百年</div>
						</li>
					</ul>
				</div>
				<div class="Blog-main-left-content">
					<ul>
						<li>
							<div class="Blog-main-left-content-img"><img src="../assets/3.jpg" alt=""></div>
							<div class="Blog-main-left-content-user">
								<span>FEB 17,2019</span>
								<span>GLory丶御邪</span>
								<span><img src="../assets/3.jpg" alt=""></span>
							</div>
							<div class="Blog-main-left-content-title">
								<h4>花开花落，转眼已世过百年</h4>
							</div>
							<div class="Blog-main-left-content-text">花开花落，转眼已世过百年</div>
						</li>
						<li>
							<div class="Blog-main-left-content-img"><img src="../assets/4.jpg" alt=""></div>
							<div class="Blog-main-left-content-user">
								<span>FEB 17,2019</span>
								<span>GLory丶御邪</span>
								<span><img src="../assets/4.jpg" alt=""></span>
							</div>
							<div class="Blog-main-left-content-title">
								<h4>花开花落，转眼已世过百年</h4>
							</div>
							<div class="Blog-main-left-content-text">花开花落，转眼已世过百年</div>
						</li>
						<li>
							<div class="Blog-main-left-content-img"><img src="../assets/5.jpg" alt=""></div>
							<div class="Blog-main-left-content-user">
								<span>FEB 17,2019</span>
								<span>GLory丶御邪</span>
								<span><img src="../assets/5.jpg" alt=""></span>
							</div>
							<div class="Blog-main-left-content-title">
								<h4>花开花落，转眼已世过百年</h4>
							</div>
							<div class="Blog-main-left-content-text">花开花落，转眼已世过百年</div>
						</li>
					</ul>
				</div>
				<div class="Blog-main-left-content">
					<ul>
						<li>
							<div class="Blog-main-left-content-img"><img src="../assets/6.jpg" alt=""></div>
							<div class="Blog-main-left-content-user">
								<span>FEB 17,2019</span>
								<span>GLory丶御邪</span>
								<span><img src="../assets/6.jpg" alt=""></span>
							</div>
							<div class="Blog-main-left-content-title">
								<h4>花开花落，转眼已世过百年</h4>
							</div>
							<div class="Blog-main-left-content-text">花开花落，转眼已世过百年</div>
						</li>
						<li>
							<div class="Blog-main-left-content-img"><img src="../assets/7.jpg" alt=""></div>
							<div class="Blog-main-left-content-user">
								<span>FEB 17,2019</span>
								<span>GLory丶御邪</span>
								<span><img src="../assets/7.jpg" alt=""></span>
							</div>
							<div class="Blog-main-left-content-title">
								<h4>花开花落，转眼已世过百年</h4>
							</div>
							<div class="Blog-main-left-content-text">花开花落，转眼已世过百年</div>
						</li>
						<li>
							<div class="Blog-main-left-content-img"><img src="../assets/p01.jpg" alt=""></div>
							<div class="Blog-main-left-content-user">
								<span>FEB 17,2019</span>
								<span>GLory丶御邪</span>
								<span><img src="../assets/p01.jpg" alt=""></span>
							</div>
							<div class="Blog-main-left-content-title">
								<h4>花开花落，转眼已世过百年</h4>
							</div>
							<div class="Blog-main-left-content-text">花开花落，转眼已世过百年</div>
						</li>
					</ul>
				</div>
			</div>
			<blog-person></blog-person>
		</div>
		<blog-footer></blog-footer>
	</div>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.Blog-main {
		width: 60%;
		/* height: 100rem; */
		margin: 0 auto;
		margin-top: 0.2rem;
		margin-bottom: 0.2rem;
	}

	/* 左侧 */
	.Blog-main-left {
		width: 83%;
		height: 100%;
		float: left;
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.2rem;
	}

	.Blog-main-left-content {
		width: 30%;
		height: 100%;
		display: inline-block;
	}

	.Blog-main-left-content ul li {
		display: block;
		font-size: 0.16rem;
		border: 1px solid #eee;
		background: aliceblue;
		box-shadow: 0.01rem 0.01rem 0.01rem 0rem darkgrey;
		margin-top: 0.1rem;
		border-radius: 0.05rem 0.05rem;
	}
	.Blog-main-left-content ul li:nth-child(1){
		margin: 0;
	}
	.Blog-main-left-content .Blog-main-left-content-img {
		width: 100%;
	}

	.Blog-main-left-content .Blog-main-left-content-img img {
		width: 100%;
	}

	.Blog-main-left-content .Blog-main-left-content-user {
		width: 100%;
		padding: 0.12rem;
		box-sizing: border-box;
		font-family: fantasy;
	}

	.Blog-main-left-content .Blog-main-left-content-user span:nth-child(1) {
		float: left;
		color: #444;
		font-size: 0.12rem;
	}

	.Blog-main-left-content .Blog-main-left-content-user span:nth-child(3) {
		float: right;
		width: 0.2rem;
		height: 0.2rem;
		border-radius: 60%;
	}

	.Blog-main-left-content .Blog-main-left-content-user span:nth-child(3) img {
		width: 100%;
		height: 100%;
		border-radius: 60%;
		margin-top: -0.03rem;
	}

	.Blog-main-left-content .Blog-main-left-content-user span:nth-child(2) {
		float: right;
		font-size: 0.12rem;
		margin-left: 0.05rem;

	}

	.Blog-main-left-content .Blog-main-left-content-title {
		width: 100%;
		padding: 0.12rem;
		padding-bottom: 0;
		box-sizing: border-box;
	}

	.Blog-main-left-content .Blog-main-left-content-title h4 {
		margin: 0;
		font-family: cursive;
	}

	.Blog-main-left-content .Blog-main-left-content-text {
		width: 100%;
		padding: 0.12rem;
		box-sizing: border-box;
		font-size: 0.14rem;
		font-family: cursive;
	}
</style>
