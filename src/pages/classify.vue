<template>
	<div class="classify">
		<head-back headName="商品分类">	</head-back>
		<section class="content">
			<!--分类列表-->
			<div class="classifyTitle"  ref="wrapper">
				<ul>
					<li v-for="(item,index) in classifyData.products" :class="{'active':index==nowIndex}" @click="classifyCon(item,index)">					
						<router-link :to="{path:'/classify/'+item.title}" >{{item.title}}</router-link>
					</li>
				</ul>				
			</div>
			<!--分类列表对应该主题下的分类, index设置跳转的子路由classfyCon，classifyConList为状态修改后的详情数据 -->
			<div class="classifyConBox">
				<router-view :classifyData="classifyConList"></router-view>
			</div>
		</section>
	</div>
</template>
<script>
	//引入mock模拟数据
	import detail from '../http/mock.js'
	//引入better-scroll插件
	import BScroll from 'better-scroll'
	//商品分类箭头直接返回首页
	import headBack from '../components/classify/headBack'
	export default{
		data(){
			return {
				// 商品分类总表
				classifyData:{},
				// 所选商品分类
				nowIndex:this.$store.state.cart.classifyIndex,
				// 右边分类详细列表
				classifyConList:this.$store.state.cart.classifyList
			}
		},
		beforeCreate() {
			this.$http({
				method:'post',
				url:'/classifyPage'
			}).then((response)=>{
				this.classifyData = response.data;
				// 每次请求数据，将商品分类列表对应到当前的商品分类的index
				this.$store.commit('CHANGE_CLASSIFY_LIST',response.data.products[this.nowIndex]);
				//请求后重新得到商品分类
				this.classifyConList =this.$store.state.cart.classifyList;
				// better-scroll惯性滚动
				this.$nextTick(()=>{
					if(!this.scroll){
						this.scroll = new BScroll(this.$refs.wrapper,{click:true})
					}
				})

			})
		},
		methods:{
			//点击事件
			classifyCon:function(item,index){
				// 点击商品分类获取cart里的mutations状态监听后更改当前的item跟index
				// 修改当前分类对应的商品分类列表
				this.$store.commit('CHANGE_CLASSIFY_LIST',item);
				this.$store.commit('CHANGE_CLASSIFY_index',index)
				//重置获得mutations里的nowindex 跟 classifyConList
				this.nowIndex = this.$store.state.cart.classifyIndex;
				this.classifyConList = this.$store.state.cart.classifyList;

			}
		},
		components:{
			headBack
		}
	}
</script>
<style lang="scss" scoped="scoped">
/*分类列表样式*/
.classify{
		height: 100%;
		background: #fff;
	}

	.content{
		position: relative;
		//设置高度度比100%的高度少51px 
		height: calc(100% - 51px);
	}
	.classifyTitle{
		float:left;
		width: 25%;
		position: absolute;
		left: 0;
		top:0;
		overflow:hidden;
		height:100%;
		li{
			position: relative;
			padding-left: 20px;
			height: 50px;
			line-height:50px;
			overflow: hidden;
			color:#000000;
		}
		li.active{
			background:#f2f2f2;
		}
		//下划线动画
		li:before{
			content: "";
			position: absolute;
			left: 0;
			top:0;
			width: 2px;
			height: 100%;
			background: #fa2;
			-webkit-transform: translate3d(0,-100%,0);
			transform: translate3d(0,-100%,0);
			-webkit-transition: all .3s;
			transition: all .3s;
		}
			li.active:before{
			-webkit-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
		}
	}
		.classifyConBox{
		margin-left: 25%;
		background: #f2f2f2;
		height: 100%;
	}
</style>