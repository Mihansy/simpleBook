<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">发现</router-link> |
      <router-link to="/attention">关注</router-link>
			<router-link to="/message">消息</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
	
</script>

<style lang="scss">
	@import '@/assets/scss/variable.scss';
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: $text-night;
		background-color: $bodyBgc-night;
	}
	#nav {
		padding: 30px;
		a {
			font-weight: bold;
			color: $text-night;
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
