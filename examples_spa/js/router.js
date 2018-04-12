// import index from '../pages/app1/app.vue'
// import app2 from '../pages/app2/app.vue'

const app1 = () => import(
	/* webpackChunkName: "app1" */ 
	'../pages/app1/app.vue');
const app2 = () => import(
	/* webpackChunkName: "app2" */ 
	'../pages/app2/app.vue'
)
const form = () => import(
  /* webpackChunkName: "form" */ 
  '../pages/com/form.vue'
)
// 配置路由
export default [
  {
    name : 'app1',
    path: '/app1',
    component: app1
  },
  {
    name : 'app2',
    path: '/app2',
    component: app2,
    beforeEnter : function(to,from,next){
      console.log(to,from)

      if(from.name === 'form'){
        bus.$emit('setInclude','app2')
      }else{
        bus.$emit('setInclude','app1')
      }
      
      next()
    }
  },
  {
    name : 'form',
    path: '/form',
    component: form
  }
]

