<template>
  <Form>
      <FormItem label="邮箱" ><Input></Input></FormItem>
      <FormItem label="电话"><Input></Input></FormItem>
      <FormItem><Input></Input></FormItem>
      <div><router-link to="app2">app2</router-link></div>
  </Form>
</template>

<script>

export default {
  name : 'form',
  data () {	
    return {
       
    }
  },
  beforeRouteEnter : function(to,from,next){
    bus.$emit('setInclude','app2');
    // console.log(window.index.include)
    // bus.$emit('setInclude',from.name)
    next()
  },
  beforeRouteLeave(to, from, next) {
        // 设置下一个路由的 meta
        // bus.$emit('setInclude','app2')
        
        next();
    }
}
</script>


