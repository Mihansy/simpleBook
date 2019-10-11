import Vue from 'vue'
import Router from 'vue-router'
import Find from './views/Find.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'find',
      component: Find
    },
    {
      path: '/attention',
      name: 'attention',
      component: () => import(/* webpackChunkName: "Attention" */ './views/Attention.vue')
    },
		{
		  path: '/message',
		  name: 'message',
		  component: () => import(/* webpackChunkName: "Message" */ './views/Message.vue')
		},
		{
		  path: '/attention/specialSubject',
		  name: 'specialSubject',
		  component: () => import(/* webpackChunkName: "SpecialSubject" */ './views/SpecialSubject.vue')
		},
		{
		  path: '/personalHome',
		  name: 'personalHome',
		  component: () => import(/* webpackChunkName: "SpecialSubject" */ './views/PersonalHome.vue')
		},
		{
		  path: '/articleDetail',
		  name: 'articleDetail',
		  component: () => import(/* webpackChunkName: "ArticleDetail" */ './views/ArticleDetail.vue')
		},
		{
		  path: '/login',
		  name: 'login',
		  component: () => import(/* webpackChunkName: "Login" */ './views/Login.vue')
		}
  ]
})
