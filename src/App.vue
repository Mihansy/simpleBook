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
		<div v-show="hasTopBtn" class="to-top-btn" @click="toTop">👆</div>
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
				hasSetting: false,
				hasTopBtn: false
			}
		},
		mounted() {
			//console.log(this.$route.path)
			this.path = this.$route.path  //this.path = 当前页面路由
			
			//监听滚动条
			window.addEventListener('scroll', this.handleScroll, true) 
		},
		watch: { //监测路由变化
			$route(to, from) {
				this.path = to.path //打开新页面路由
			}
		},
		methods: {
			handleScroll() {
				var scroll = document.documentElement.scrollTop || document.body.scrollTop
				//console.log(scroll)
				if(scroll > 3000) {
					this.hasTopBtn = true
				}else{
					this.hasTopBtn = false
				}
			},
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
			},
			toTop() {
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
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
		.to-top-btn {
			position: fixed;
			right: 30px;
			bottom: 40px;
			cursor: pointer;
			color: red;
			font-size: 30px;
		}
	}
</style>
