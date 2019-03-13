<template>
	<div>
		<Head-Back headName="我的卡券"></Head-Back>
	<!-- 	<div class="my-Coupon">
			<div class="Coupon-name">
				<h5 v-for="item in datas.info">{{item.title}}</h5>
				<span class="price"></span>
				<p class="price-time">2019-01至2019-02</p>
			</div>
			<button class="btn">点击使用</button>
		</div> -->
		<ul class="my-Coupon" >
			<li class="Coupon-name" v-for="(item,index) in datas.info">
				<h5>{{item.title}}</h5>
				<span class="price">{{item.natura}}元优惠券</span>
				<p class="price-time">{{item.date}}</p>
				<img :src="item.imgPath" class="couponimg" />
			<!-- <img v-lazy= "item.imgPath" class="couponimg" /> -->
			<mt-button type="danger" size="small"  plain>使用</mt-button>
			</li>
		</ul>
	</div>
</template>
<style scoped>
	.my-Coupon{
	/*	width: 31.25rem;*/
		margin:0 auto;
		margin-top: 0.833333rem;
	}
	.Coupon-name{
		border: 1px solid #ccc;
		margin-top: 0.833333rem;
		text-align: center;
		background:rgba(152,251,152,0.2);
	}
	.couponimg{
		float:left;
		margin-top:-50px;
	}
</style>

<script>
import HeadBack from '../components/headBack'
	//引入mock模拟数据
import CouPon from '../http/mock.js'
import { Button } from 'mint-ui';

	export default{
		name:'CouPon',
		components:{
			HeadBack
		},
		data(){
			// vue 报错 data functions should return an object 是因为没有return
			return{
			datas:{
				info:{},
				detail:[]
			}
			}
		},
		beforeCreate(){
			this.$http({
				method:'post',
				url:'/CouPon'
			}).then((response) => {
				this.datas = response.data;
				console.log(this.datas)
			}).catch(function(error){
				console.log(error)
			})
		}

	}


</script>
