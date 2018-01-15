// import index from '../pages/app1/app.vue'
// import app2 from '../pages/app2/app.vue'

const app1 = () => import(
	/* webpackChunkName: "app1" */ 
	'../pages/app1/app.vue');
const app2 = () => import(
	/* webpackChunkName: "app2" */ 
	'../pages/app2/app.vue'
)
// 配置路由
export default [
  {
    path: '/',
    component: app1
  },
  {
    path: '/app2',
    component: app2
  }
]

