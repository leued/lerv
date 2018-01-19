import Vue from  'vue';
import test from './test';
import calendar from './calendar';



var  components = {
	test,
	calendar
}

var  install = function(Vue, opts = {}) {
    Vue.component('test', components['test']);
    Vue.component('calendar', components['calendar'])
};
var API = {
	install,
	// ...components
}

export default  API;

