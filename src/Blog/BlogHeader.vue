<template>
	<div class="Blog">
		<div class="Blog-logo">
			<div class="Blog-logo-title">
				<h1>WEB技术研究群博客</h1>
				<p>Add "scoped" attribute to limit CSS to this component only</p>
			</div>
		</div>
		<div class="Blog-container">
			<div class="Blog-container-nav">
				<div class="Blog-container-nav-list">
					<ul>
						<li>全部</li>
						<li>vue</li>
						<li>React</li>
						<li>Angular</li>
						<li>mui</li>
						<li>javascript</li>
						<li>jquery</li>
					</ul>
					<div class="Blog-container-nav-selects"><input type="text" value="" placeholder="十大程序员" /><img src="../assets/select.png"
						 alt=""></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'blog-header',
		data() {
			return {

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	input,textarea,select,a:focus {
     outline: none;
	}

	/* logo */
	.Blog-logo {
		font-size: 0.20rem;
		color: #33333;
		height: 3rem;
		text-align: center;
		position: relative;
		background: url(../assets/0.jpg);
		background-repeat: no-repeat;
		background-size: cover;

	}
	.Blog-logo-title{
		position: absolute;
		left: 50%;
		top: 50%;
		-webkit-transform: translate(-50%,-50%);
		-moz-transform: translate(-50%,-50%);
		-ms-transform: translate(-50%,-50%);
		transform: translate(-50%,-50%);
	}

	.Blog-logo h1 {
		font-family: 'Montserrat';
		font-size: 0.6rem;
		font-weight: bold;
		color: #333;
		letter-spacing: -0.5px;
		margin: 0;
		    font-family: cursive;
	}

	.Blog-logo p {
		font-family: 'Montserrat';
		font-size: 0.14rem;
		padding: 0;
		margin: 0;
		color: whitesmoke;
	}

	/* 导航 */
	.Blog-container {
		width: 100%;
		height: 0.79rem;
		background: aliceblue;
		border: 1px solid #eee;
		box-shadow: 0.02rem 0.02rem 0.02rem 0 #eee;
	}

	.Blog-container-nav {
		width: 60%;
		margin: 0 auto;
		height: 100%;
	}

	.Blog-container-nav-list {
		width: 100%;
		height: 100%;
		font-size: 0.14rem;
		position: relative;

	}

	.Blog-container-nav-list ul {
		float: left;
		height: 100%;
	}

	.Blog-container-nav-list ul li {
		    height: 100%;
			display: inline-block;
			line-height: 0.79rem;
			margin-left: 0.4rem;
			color: black;
			text-transform: uppercase;
			font-family: -webkit-pictograph;
			cursor: pointer;
	}
	.Blog-container-nav-list ul li:nth-child(1){
		margin: 0;
	}

	.Blog-container-nav-list ul li:hover {
		color: #FFB661;
	}

	.Blog-container-nav-selects {
		float: right;
		width: 1.5rem;
		border: 1px solid #e2e2e2;
		padding: 0.1rem;
		position: absolute;
		right: 0;
		top: 50%;
		-webkit-transform: translate(0,-50%);
		-moz-transform: translate(0,-50%);
		-ms-transform: translate(0,-50%);
		transform: translate(0,-50%);
	}

	.Blog-container-nav-selects img {
		width: 0.2rem;
		height: 0.2rem;
		vertical-align: text-top;
	}
	
	.Blog-container-nav-selects input {
		width: 85%;
		height: 100%;
		display: inline-block;
		vertical-align: middle;
		border: none;
		color: #444444;
		    background: none;
	}

</style>
