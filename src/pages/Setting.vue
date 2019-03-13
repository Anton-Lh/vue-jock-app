<template>
	<div>
		<Head-Back headName="设置中心"></Head-Back>
		 <div class="switch">
		  <mt-switch v-model="value" @change="turn" class="switch">{{userName}}</mt-switch>
		  <mt-switch v-model="valuee" @change="turnn" class="switch" >{{userlistn}}</mt-switch>
		  <mt-switch v-model="valueee" @change="turnnn" class="switch">{{userflow}}</mt-switch>
		


<!-- 进度条 -->
 <div class="page-progress-wrapper">
        <mt-button size="large" type="primary" @click="uploadFile">清除缓存</mt-button>
        <mt-progress :value="val" v-if="progressVisible"
          transition="progress-fade">
          <div slot="end">{{ val }}%</div>
         </mt-progress>
      </div>


		 </div>
	 </div>


</template>
<style scoped>
.switch{
margin-top:1.666667rem;	
border:1px solid  #00000;
margin-left:5%;
}
.page-progress-wrapper{
	margin-top:1.666667rem;
}
</style>

<script>
import HeadBack from '../components/headBack'

import { Switch } from 'mint-ui';
import { Progress } from 'mint-ui';
import { Toast } from 'mint-ui'
	export default{
		name:'SettIng',
		components:{
			HeadBack
		},
	data () {
      return {
//           value: false,
          valuee: false,
          valueee: false,
		 userName:'关闭消息提示',
		 userlistn:'关闭声音',
		 userflow:'节流模式',
		 // 判断进度条是否显示
		 progressVisible:false,
		 // 初始值
		 val:0,
		 // 是否加载
		 uploading:false,
		 // 时间
		 timer:null
         }
          },
  mounted:function(){
 
       },
// 监听
watch:{
val(val){
	// 如果值已触发大等于100 设置全部为false隐藏
	if(val>=100){
		this.uploading = false;
		this.progressVisible =false;
		// 插入模态框
		setTimeout(()=>{
			 Toast({ message: '清除缓存成功', position: 'bottom', duration:1000})
			},200);
		// 清除时间
		clearTimeout(this.timer)
	}
}
},
methods:{
      turn: function(){
	if (this.value) {
		// console.log('关闭消息提示')
		this.userName = '已关闭消息提示'
	}else {
		// console.log('开启消息提示')
		this.userName = '已开启消息提示'
	}
      },
 turnn: function(){
//           console.log(this.valuee)
 	if (this.valuee) {
		// console.log('关闭消息提示')
		this.userlistn = '已关闭声音提示'
	}else {
		// console.log('开启消息提示')
		this.userlistn = '已开启声音提示'
	}
      },
 turnnn: function(){
//           console.log(this.valueee)
	if (this.valueee) {
		// console.log('关闭消息提示')
		this.userflow = '已关闭节流'
	}else {
		// console.log('开启消息提示')
		this.userflow = '已开启节流'
	}      
},
// 清除缓存
uploadFile(){
	if(!this.uploading){
		this.val=0;
		this.progressVisible=true;
		this.uploading=true;
		this.timer = setInterval(()=>{
			this.val++;
		},100)
	}
}


  }

}

</script>
