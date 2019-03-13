<template>
	<div>
		  <div class="home" >
  	<header class="homeHead">
  		<h2>鳄鱼恤爵邦商城</h2>
  		<span class="search_btn_box"><img width="20" src="../assets/img/search.png" /></span>
  	</header>
  	<div>
  		<home-swiper :swiperArr="datas.swiperimg"></home-swiper>


  		<ul class="homeService">
  			<li>
  				<span></span>
  				<span>自营品牌</span>
  			</li>
  			<li>
  				<span></span>
  				<span>快速发货</span>
  			</li>
  			<li>
  				<span></span>
  				<span>质量保证</span>
  			</li>
  		</ul>

  		<!--  -->
		<section  class="section1">
			<section-title sectionNumber="Jock-shoes" ></section-title>
			<ul>
				<li v-for="(item,index) in datas.section1.listImg">
					<router-link :to="{name:'详情页'}">
						<img width="100%" v-lazy= "item.imgPath" />
					</router-link>					
				</li>
			</ul>
			<homeBanners :sectionData="datas.section1"></homeBanners>
		</section>


		<!-- 鞋类 -->
		<section  class="section2">
			<div class="section2Pro">
				<ul>
					<li v-for="(item,index) in datas.section2.listImg">
					<router-link :to="{name:'详情页'}">
						<img v-lazy= "item.imgPath" />
						<h6 class="textCenter">{{item.title}}</h6>
						<p class="oneLine font12">产品描述描述描述描述</p>
						<p class="price">&yen;{{item.price}}</p>
					</router-link>					
				</li>
				</ul>
			</div>
			<homeBanners :sectionData="datas.section2"></homeBanners>
		</section>

		<!-- 定时抢 -->
		<section class="section3">
			<ul>
				<li v-for="(item,index) in datas.section3.listImg">
					<router-link :to="{name:'详情页'}">
						<div class="proDetail">
							<h6>{{item.title}}</h6>
						<!-- 	<p class="time"><span>24</span> : <span>60</span> : <span>60</span></p> -->
						<Coun-Down  :current-time="1481450106" :start-time="1481450116" :end-time="1481450126" ></Coun-Down>
						</div>
						<div class="proImg">
							<img v-lazy= "item.imgPath"/>
							<span class="price">&yen;{{item.price}}</span>
						</div>
					</router-link>	
				</li>
			</ul>
			<homeBanners :sectionData="datas.section3"></homeBanners>
		</section>



		<!-- 宣传banner及详情-->
		<section class="section4">
			<section-title sectionNumber="section4"></section-title>
			<ul>
				<li v-for="(item,index) in datas.section4.listImg">
					<router-link :to="{name:'详情页'}">
						<div class="proImg">
							<img v-lazy= "item.imgPath"/>
							<span class="oneLine">{{item.detail}}</span>
						</div>
						<div class="proDetail">
							<h6 class="oneLine">{{item.title}}</h6>
							<p>&yen;{{item.price}}</p>
						</div>
					</router-link>	
				</li>
			</ul>
			<homeBanners :sectionData="datas.section4"></homeBanners>
		</section>

		<!-- 底部加载完毕文字 -->
		<base-line></base-line>
		<!-- 底部标签 -->
  	</div>
 		<myfooter pageName="首页"></myfooter>
  </div>
	</div>
</template>
<script>
	//引入mock模拟数据
	import index from '../http/mock.js'
	//引入组件
	import homeSwiper from './../components/home/swiper'
	import homeBanners from '../components/home/homeBanners'
	import sectionTitle from '../components/home/sectionTitle'
	import baseLine from '../components/baseLine'
	import myfooter from '../components/footer'
	import CounDown from './../components/home/CounDown'
	import { Lazyload } from 'mint-ui';
	export default {
		data(){
			return {
				datas:{
					swiperimg:[],
					section1:{},
					section2:{},
					section3:{},
					section4:{}
				}
	
			}
		
		},
	beforeCreate() {
			//请求mock模拟数据，这边的$http是在main.js中定义好的axios异步请求
			this.$http({
		      method: 'post',
		      // 请求mock.js后续的请求头
		      url: '/indexPage'
		   }).then((response) => {
		   	// 得到请求数据
		      this.datas = response.data;
		     //计算倒计时，调用计算方法setTime，通过改变data中的dom值，改变页面中的时间
		      // for(var i=0;i<response.data.section3.listImg.length;i++){
		      // 	this.setTime(response.data.section3.listImg[i].time,this.dom[i])
		      	// 输出查看
		      	 console.log(this.datas)
		// }	      
	    }).catch(function(error) {
	      alert(error)
	    })

		},
		methods: {

        
		},
		components:{
			homeSwiper,
			homeBanners,
			sectionTitle,
			baseLine,
			myfooter,
			CounDown
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.home{
		padding-bottom: 56px;
	}
	.homeHead{
		position:relative;
		height: 50px;
		background: #fff;
		line-height: 50px;
		h2{
			text-align: center;
			font-size: 20px;
			color:#333;
		}
		.search_btn_box{
			position:absolute;
			right:10px;
			top:0;
			z-index:20;
			width:40px;
			height:100%;
			text-align: center;
		}
		}
	.homeService{
		padding: 10px;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #eee;
		font-size: 14px;
	}
	.section1{
		margin-top: 20px;
		overflow:hidden;
		background: #fff;
		border-top: 1px solid #eee;
		ul{
			padding:7px 10px 17px;
			overflow:hidden;
		}
		li{
			float:left;
			width:50%;
			padding:3px;
			box-sizing:border-box;
			a{
				display:block;
			}
		}
	}
	.section2{		
		margin-top: 20px;
		padding-top: 20px;
		border-top: 1px solid #eee;
		background: #fff;
		.section2Pro{
			overflow-x: auto;
			/*原生滑动,创建了带有硬件加速的系统级控件，所以效率很高。但是这相对是耗更多内存的，最好在产生了非常大面积的overflow时才应用*/
    			-webkit-overflow-scrolling: touch;
			ul{
				overflow: hidden;
				padding-left: 10px;
				width: 140vw;
			}
			li{
				margin-right: 20px;
				padding: 20px 0;
				float: left;
				width: 25vw;
				img{
					width: 100%;
					background: #666;
					vertical-align: middle;
				}
				h6{
					padding: 6px 0;
					font-weight: bold;
				}
				.price{
					padding: 5px 0;
					text-align: center;
					color: #f63;
					font-size: 16px;
					font-weight: bold;
				}
			}
		}
	}
	.section3{
		margin-top:1.666667rem;
		padding-top:0.416667rem;
		border-top:1px solid #eee;

		li{
			a{
				-webkit-display:flex;
				display:flex;
				padding:20px;
				box-sizing:border-box;
					// 左边价格
				.proDetail{
					width:50%;
					h6{
						padding:10px 0;
						font-size:18px;
						font-weight:bold;
					}
					p{
						padding-bottom:6px;
					}
					// 倒计时时间框
					.time{
						font-weight:bold;
						span{
							width:26px;
							height:26px;
							display:inline-block;
							background:#555;
							text-align:center;
							line-height:26px;
							color:#fff;
							border-radius:2px;
							font-size:14px;
						}
					}
				}
				// 右边详情页
				.proImg{
					position:relative;
					width:50%;
					vertical-align:middle;
					img{
						width: 100%;
						background: #666;
						vertical-align: middle;
					}
				}
				.price{
					position:absolute;
					bottom:0;
					right:0;
					padding:2px 4px;
					background:#fa0;
					font-size:12px;
					color:#fff;
				}
			}
		}
	}
	// 相关section4
	.section4{
		margin-top: 20px;
		padding-top: 10px;
		border-top: 1px solid #eee;
		background: #fff;
		ul{
			overflow: hidden;
		}
		li{
			float: left;
			padding: 10px 10px;
			width: 50%;
			overflow: hidden;
			box-sizing: border-box;
			// 图片宽高
			.proImg{
				position: relative;
				img{ 
					width: 100%;
					background: #666;
				}
				// 文字标签
				span{
					position: absolute;
					left: 0;
					bottom: 0;
					padding: 0 10px;
					width: 100%;
					height: 24px;
					line-height: 24px;
					background: rgba(0,0,0,0.3);
					box-sizing: border-box;
					color: #fff;
					font-size: 12px;
				}
			}
				// 价格
			.proDetail{
				h6{
					padding: 5px 0;
					height: 28px;
					line-height: 28px;
					font-size: 18px; 
				}
				p{
					color: #f36;
				}
			}
		}
	}
</style>