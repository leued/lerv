
<template>
<div>
  <div>{{page }}</div>
    <calendar   :initTime="initTime"></calendar>
    <div class="example" @click="reverseMessage">{{ msg }}111</div>
    <div><router-link to="app2">app2</router-link></div>
    <div><router-link to="form">form</router-link></div>
  </div>

</template>

<script>

export default {
  name : 'app1',
  data () {
    return {
      msg: '我是主页面',
      page : '日历是主页面的组件',
      initTime : '2018-01-30'
    }
  },
  beforeRouteEnter : function(to,from,next){
    bus.$emit('setInclude','app1');
    // console.log(window.index.include)
    // bus.$emit('setInclude',from.name)
    next()
  },
  methods : {
  	reverseMessage () {

  		this.initTime = "2018-2-2";
      // ddddd(this.$data.initTime)
  	}
  }
}
</script>

<style scoped>
.example{
  color :#000;
}
</style>

