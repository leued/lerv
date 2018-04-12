<template>
        <div class="color-list">
		      <div 
		          class="color-item" 
		          v-for="color in colors" 
		          v-dragging="{ item: color, list: colors, group: 'color' }"
		          :key="color.text"
		      >{{color.text}}</div>
		  </div>
</template>
<script>
import Vue from 'vue';
import VueDND from 'awe-dnd'
Vue.use(VueDND);
export default {
   props: ['colors'],
   data () {
    	return {
     		
    	}
  }
}
</script>
