<template>
	<div id="app" class="app theme-day theme-heiti">
		<HeadMenu/>
		<router-view></router-view>
	</div>
</template>

<script>
	import HeadMenu from './components/HeadMenu.vue'

	export default {
		name: 'app',
		components: {
			HeadMenu
		}
	}
</script>

<style lang="scss">
	@import  '@/assets/scss/themeDay.scss';
	@import  '@/assets/scss/themeNight.scss';
	.app {
		font-family: Arial, Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
		font-size: 14px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
