<template>
        <div class="ui-calendar">
        	<div>
        		<input type="text" v-model="curTime">
        	</div>
        	<div class="ui-calendar-box">
        		<div>
        			{{showYear}}/{{showMonth}}
	        		<button v-on:click="nextMonth()">下月</button>
	        	</div>
	        	<div class="header">
	        		<span v-for="day in header" >{{day}}</span>
	        	</div>
	        	<div class="calendar">
	        		<div class="first-row">
	        			<div v-for="row in allData">
	        				<span v-for="item in row"  @click="clickCell(item)">{{item.date}}</span>
	        			</div>
	        		</div>
	        	</div>
        	</div>
          <test></test>
        </div>
</template>
<script>
import Vue from  'vue';
export default {
   props: ['initTime'],
   data () {
    	return {
     		curTime : null, //选中的日期	
     		showYear : null,
     		showMonth : null,
     		showDate : null,
     		showTime : null , //显示的日期
    	}
  },
  created (){
  	this.$set(this,'curTime',this.parseDate(this.initTime));
  	this.$set(this,'showTime',this.parseDate(this.initTime));
  },

  watch : {
  	initTime : function(){
  		this.curTime = this.initTime;
  	},
  	showTime (){
  		const _d = this.getShowTime();
	  	this.$set(this,'showYear',_d.year);
	  	this.$set(this,'showMonth',_d.month+1);
	  	this.$set(this,'showDate',_d.date);
  	}
  },
  methods : {
  	clickCell(data){
  		 this.curTime = this.showYear + '/' + this.showMonth + '/' + data.date

  	},
  	parseDate (aaa){
  		return aaa.replace(/-/g,'/')
  	},

  	nextMonth (){
  		let _time = this.showTime || this.curTime;
  		let time = new Date(_time);
  		time.setDate(1);
  		time.setMonth(time.getMonth()+1);
  		time= this.format(time);
  		this.showTime = time;

  	},
  	format (data){
  		return data.getFullYear() + '/' + (data.getMonth()+1) + '/' + data.getDate()
  	},
  	setCurTime (){

  	},
  	getShowTime : function(){
  		let _time = this.showTime || this.curTime;
  		const _date = new Date(_time);
        const year = _date.getFullYear(); //年     
        const month = _date.getMonth();    //月
        const date = _date.getDate();  //日
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
        	date,
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

  		const _d = this.getShowTime();
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
  				date : i
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
	.ui-calendar .on{
		color: #c00
	}
	.ui-calendar .header span,.ui-calendar .calendar span{
		display: inline-block;
		width: 30px;
		height: 30px;
		text-align: center;
		overflow: hidden;
	}
</style>