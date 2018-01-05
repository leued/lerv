// import index from '../pages/app1/app.vue'
// import app2 from '../pages/app2/app.vue'

const index = () => import('../pages/app1/app.vue');
const app2 = () => import('../pages/app2/app.vue')
// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/app2',
    component: app2
  }
]