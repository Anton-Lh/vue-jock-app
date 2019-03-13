<template>
	<div class="orderDetail">
		<head-back headName="收货地址"></head-back>
		<section class="orderDetail">		
			<div class="orderBox">
				<h6>收货地址</h6>
				<ul>
					<li >
					{{orderName}}
					<span>{{orderPhone}}</span>				
						<p>{{orderAddress}}</p>
					</li>
				</ul>
			</div>
		</section>
		<button @click="deladdress">删除</button>
	</div>
</template>
<script>
	import headBack from '../components/headBack'
		import { MessageBox } from 'mint-ui';

	export default{
		data(){
			return {
			orderName:this.$store.state.user.orderName,
			orderPhone:this.$store.state.user.orderPhone,
			orderAddress:this.$store.state.user.orderAddress
			}
		},
		created(){
			
		},
			methods:{
		deladdress:function(item){
				MessageBox.confirm('确认删除该地址？').then(action =>{
		 this.orderName ='';
		 this.orderPhone="";
		 this.orderAddress="";
				}).catch(function(err){
					//console.log(err)
				});
		}
	},
		components:{
			headBack
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.orderDetail{
		.orderBox{
			margin-top: 20px;
			h6{
				padding: 10px 20px;
				background: #fff;
				font-size: 14px;
			}
			ul{
				border-top: 1px solid #eee;
			}
			li{
				padding: 10px 20px;
				line-height: 24px;
				border-bottom: 1px solid #eee;
				p{
					color: #f63;
					font-size: 14px;
				}
			}
		}
	}
</style>