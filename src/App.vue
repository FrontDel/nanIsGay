<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html{
		font-size: 100px;
		background: #F8F8F8;
	}

	body{
		margin: 0;
		padding: 0;
		background: mintcream;

	}
	li,a{
		list-style: none;
		text-decoration: none;
	}
	ul{
		margin: 0;
		padding: 0;
	}
	@media screen and (max-width:500px) and (min-width:320px){
			html{
				font-size: 40px;
	
			}
		
	}
	@media screen and (max-width:500px) and (min-width:768px){
			html{
				font-size: 50px;
	
			}
		
	}
	@media screen and (max-width:1280px) and (min-width:768px){
			html{
				font-size: 60px;
	
			}
		
	}
	@media screen and (max-width:1360px) and (min-width:1280px){
			html{
				font-size: 70px;
	
			}
		
	}
	@media screen and (max-width:1440px) and (min-width:1360px){
			html{
				font-size: 80px;
	
			}
		
	}
		@media screen and (max-width:1688px) and (min-width:1440px){
			html{
				font-size: 90px;
	
			}
		
		}
</style>
