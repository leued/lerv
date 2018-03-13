
<template>
<div>
  <div>{{page }}</div>
  <calendar   :initTime="initTime"></calendar>
  <div class="example" @click="reverseMessage">{{ msg }}111</div>
  </div>
</template>

<script>

export default {
  
  data () {
    return {
      msg: '我是主页面',
      page : '日历是主页面的组件',
      initTime : '2018-01-30'
    }
  },
  methods : {
  	reverseMessage () {

  		this.initTime = "2018-2-2";
      // console.log(this.$data.initTime)
  	}
  }
}
</script>

<style scoped>
.example{
  color :#000;
}
</style>

