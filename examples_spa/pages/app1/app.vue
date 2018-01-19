
<template>
<div>
  <div>{{page }}</div>
  <calendar :initTime="initTime"></calendar>
  <div class="example" v-on:click="reverseMessage">{{ msg }}</div>
  </div>
</template>

<script>

export default {
  
  data () {
    return {
      msg: '我是主页面',
      page : '日历是主页面的组件',
      initTime : '2018-04-01'
    }
  },
  methods : {
  	reverseMessage () {

  		this.initTime = "2018-2-2"
  	}
  }
}
</script>

<style>
.example{
  color :#6699cc;
}
</style>

