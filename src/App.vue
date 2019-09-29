<template>
	<div id="app">
		<Header></Header>
		<router-view></router-view>
	</div>
</template>

<script>
	import Header from './components/Header.vue'

	export default {
		name: 'app',
		components: {
			Header
		}
	}
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

	<style>
