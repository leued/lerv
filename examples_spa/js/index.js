
import Vue from  'vue';
import VueRouter from 'vue-router';
import routes from './router.js';
import components from '../../components/index.js';
// import VueDND from 'awe-dnd';

Vue.use(VueRouter);
Vue.use(components);
// Vue.use(VueDND);

window.bus = new Vue();

const router = new VueRouter({
  routes 
})


window.index = new Vue({
  el:'#app',
  router,
  data : {
  	include : 'app1'
  },
  mounted(){
  	var that = this;
  	bus.$on('setInclude', function (m) {
  		// console.log('setInclude')
  		that.include = m
	})
  }
})



