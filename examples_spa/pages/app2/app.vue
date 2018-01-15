
<template>
  <div class="example" v-on:click="reverseMessage">{{ msg }}</div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Hello world!3333333'
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
  color :#fff;
}
</style>

