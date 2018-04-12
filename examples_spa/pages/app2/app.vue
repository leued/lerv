<template>
  <div>
      <section :is="com.component" :initTime="com.initTime" ></section>

      
      <button @click="add1">add</button>
  </div>
</template>

<script>
import Vue from  'vue';
import app1 from '../app1/app.vue';
export default {
  name : 'app2',

  beforeRouteLeave(to, from, next) {
        // 设置下一个路由的 meta

        // if(to.name == 'form'){
        //   // console.log('if')
        //     bus.$emit('setInclude','app2');

        // }else{
        //   // console.log('else')
        //   bus.$emit('setInclude','app1')
        // }
        
        
        next();
    },
  data () {
    return {
      com: {

      },
      
      initTime : '2018-01-30'
    }
  },
  methods : {
        add1(){
          const Instance = new Vue({
              render: function (createElement) {
                return createElement(app1);
              }
          });

          const component = Instance.$mount();
          document.body.appendChild(component.$el);
        },
        add(){
            this.com = {
                component : 'calendar',
                initTime : '2018-01-30'
            }
            
        }
    }
}
</script>

<style scoped>
.example{
  color :#6699cc;
  background: #000
}
</style>

