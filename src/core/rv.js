// var a1 = require('vue');
// console.log(a1)

 import Vue from  'vue';

 document.body.innerHTML = '<div id="app">{{message}}</div>'
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})


