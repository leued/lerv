
<template>
<div>
  <test></test>
  <div class="example" v-on:click="reverseMessage">{{ msg }}</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  },
  methods : {
  	reverseMessage () {
  		alert(123123)
  	}
  }
}
</script>

<style>
.example{
  color :#6699cc;
}
</style>

