
import Vue from  'vue';
import VueRouter from 'vue-router';
import routes from './router.js';
import com from '../../components/index.js';


Vue.use(VueRouter);
Vue.use(com);



const router = new VueRouter({
  routes 
})


const index = new Vue({
  el:'#app',
  router
})



