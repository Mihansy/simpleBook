<template>
	<div id="app" 
	  class="app theme-day theme-heiti" 
	  :class="[{'theme-night': isNight===true},{'theme-songti': isSong===true}]">
		<HeadMenu 
		  v-show="!(path === '/login')"
		  :isFocus="hasTip" 
			:isSetting="hasSetting" 
			@hasMask="handleMask" 
			@changeTheme="handleChangeTheme"/>
		<router-view></router-view>
		<div class="mask" v-show="isShow" @click="hideMask"></div>
	</div>
</template>

<script>
	import HeadMenu from './components/HeadMenu.vue'

	export default {
		name: 'app',
		components: {
			HeadMenu
		},
		data() {
			return {
				path: '',
				isNight: false,
				isSong: false,
				isShow: false,
				hasTip: false,
				hasSetting: false
			}
		},
		mounted() {
			//console.log(this.$route.path)
			this.path = this.$route.path  //this.path = 当前页面路由
		},
		watch: { //监测路由变化
			$route(to, from) {
				this.path = to.path //打开新页面路由
			}
		},
		methods: {
			handleMask(mask) {
				this.isShow = mask.isMask
				if(mask.which == '1') {
					this.hasTip = mask.isMask
				}else{
					this.hasSetting = mask.isMask
				}	
			},
			hideMask() {
				this.isShow = false,
				this.hasTip = false,
				this.hasSetting = false
			},
			handleChangeTheme(theme) {
				this.isNight = theme.isNight
				this.isSong = theme.isSong
			}
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
		&.theme-heiti {
			font-family: '微软雅黑'
		}
		&.theme-songti {
			font-family: '宋体'
		}
		.mask {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 8;
			width: 100%;
			height: 100%;
			background-color: rgba($color: #000000, $alpha: 0);
		}
	}
</style>
