<template>


        <div class="ui-calendar">
        	<div>
        		<button v-on:click="nextMonth()">下月</button>
        	</div>
        	<div class="header">
        		<span v-for="day in header" :key="day">{{day}}</span>
        	</div>
        	<div class="calendar">
        		<div class="first-row">
        			<div v-for="row in allData">
        				<span v-for="item in row">{{item.day}}</span>
        			</div>
        		</div>
        	</div>
        </div>

</template>
<script>
import Vue from  'vue';
export default {
   props: ['initTime'],
   data () {
    	return {
     		curTime : null
    	}
  },
  created (){
  	this.$set(this,'curTime',this.parseDate(this.initTime));
  },
  
  methods : {
  	parseDate (aaa){
  		
  	
  		return aaa.replace(/-/g,'/')
  	},
  	nextMonth (){
  		let time = new Date(this.curTime);
  		time.setMonth(time.getMonth()+1);
  		time= this.format(time);
  		this.curTime= time;

  	},
  	format (data){
  		
  		return data.getFullYear() + '/' + (data.getMonth()+1) + '/' + data.getDate()
  	},
  	getCurTime : function(){
  		
  		const data = new Date(this.curTime);
        const year = data.getFullYear(); //年     
        const month = data.getMonth();    //月
        const day = data.getDate();  //日
        // 月的第一天
        const startDay = new Date(year,month,1);
        //第一天是星期几 推算出第一行前面有几天
        const sdday = startDay.getDay();
        //月的最后一天
        const lastDay = new Date(year,month+1,(1-1));
        return {
        	startDay ,
        	year,
        	month,
        	day,
        	sdday,
        	lastDay
        }
  	}
  },
  computed : {
  	header(){
  		const data = ['日','一','二','三','四','五','六'];
  		return data;
  	},
  	allData(){

  		const _d = this.getCurTime();
  		const lastDday  = _d.lastDay.getDate();
  		let num = _d.sdday;
  		let _allData =[]
  		let _data = [];
  		for(let i = 0 ; i < _d.sdday ; i++){
  			_data.push({
  			})
  		}
  		for(let i = 1 ; i <= lastDday ; i++){
  			_data.push({
  				day : i
  			})
  			if(_data.length == 7){
  				_allData.push(_data);
  				_data = []
  			}
  		}
  		if(_data.length < 7){
  			for(let i = _data.length ; i < 7 ; i++){
	  			_data.push({
	  			})
	  		}
	  		_allData.push(_data);
  		}
  		return _allData;
  	}
  }
}
</script>

<style scoped>
	.ui-calendar {
		background: #6699cc;
		color: #fff;
		width: 210px
	}
	.ui-calendar .header span,.ui-calendar .calendar span{
		display: inline-block;
		width: 30px;
		height: 30px;
		text-align: center;
		overflow: hidden;
	}
</style>