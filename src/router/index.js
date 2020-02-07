import Vue from 'vue'
import VueRouter from 'vue-router'
import Nav from '../views/Nav.vue'
import Home from '../views/Home.vue'
import Explore from '../views/Explore.vue'
import Special from '../views/Special.vue'
import RoundTable from '../views/RoundTabel.vue'
import Favorite from '../views/Favorite.vue'
import Columns from '../views/Columns.vue'
import Recommoned from '../views/Recommoned.vue'
import Follow from '../views/Follow.vue'
import Hot from '../views/Hot.vue'
import QuestionWaiting from '../views/QuestionWaiting.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		component: Nav,
		children: [{
				path: '/',
				redirect: 'home'
			},
			{
				path: 'home',
				component: () => import('../views/Home.vue'),
				children: [
					{
						path: '/',
						redirect: 'recommoned',
					},
					{
						path: 'recommoned',
						component: () => import('../views/Recommoned.vue'),
					},
					{
						path: 'follow',
						component: () => import('../views/Follow.vue'),
					},
					{
						path: 'hot',
						component: () => import('../views/Hot.vue'),
					}
				]
			},
			{
				path: 'explore',
				component: () => import('../views/Explore.vue'),
			},
			{
				path: 'special/all',
				component: () => import('../views/Special.vue'),
			},
			{
				path: 'roundTable/all',
				component: () => import('../views/RoundTabel.vue'),
			},
			{
				path: 'favorite/all',
				component: () => import('../views/Favorite.vue'),
			},
			{
				path: 'question/waiting',
				component: () => import('../views/QuestionWaiting.vue'),

			},
			{
				path: 'people/:url',
				component: () => import('../views/People.vue'),
			}
		]
	},
	{
		path: '/login',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/ZhuanLan',
		component: () => import('../views/Columns.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
