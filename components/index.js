
import Vue from 'vue';
import test from './test';
import Form from './form';
import Input from './input';
// import calendar from './calendar/index.js';
import drag from './drag/index.js';



var components = {
    test,
    Form,
    Input,
    // calendar,
    FormItem: Form.Item,
    drag
}

var install = function(Vue, opts = {}) {
 //    Vue.component('test', components['test']);
 //    // Vue.component('calendar', components['calendar']);
	// Vue.component('drag', components['drag']);
	Object.keys(components).forEach(key => {
        Vue.component(key, components[key]);
    });

    Vue.component('calendar', ()=>import(
    /* webpackChunkName: "calendar"  */
    './calendar'));
    
};
var API = {
    install
    // ...components
}

export default API;