
import Vue from 'vue';
import test from './test';
// import calendar from './calendar/index.js';



var components = {
    test
    // calendar
}

var install = function(Vue, opts = {}) {
    Vue.component('test', components['test']);

    Vue.component('calendar', ()=>import(
		/* webpackChunkName: "calendar" */ 
		'./calendar'));
    
};
var API = {
    install
    // ...components
}

export default API;