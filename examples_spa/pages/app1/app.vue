
<template>
  <div class="example" v-on:click="reverseMessage">{{ msg }}</div>
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

<style scoped>
.example {
  color: #6699cc;
}
</style>

