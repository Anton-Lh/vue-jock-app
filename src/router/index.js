import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

//按需加载,当渲染某页面时才加载其组件,并缓存,减少首屏加载时间,使用require.resolve函数查询模块文件名时并不会加载该模块。Node.js
const Index = resolve => require(['../pages/index.vue'], resolve)
const Detail = resolve => require(['../pages/detail.vue'], resolve)
const Cart = resolve => require(['../pages/cart.vue'], resolve)
const Classify = resolve => require(['../pages/classify.vue'], resolve)
const My = resolve => require(['../pages/my.vue'], resolve)
const Pay = resolve => require(['../pages/pay.vue'], resolve)
const PaySuccess = resolve => require(['../pages/paySuccess.vue'], resolve)
const ClassifyCon = resolve => require(['../components/classify/classifyCon.vue'], resolve)
const Login = resolve => require(['../pages/login.vue'], resolve)
const OrderDetail = resolve => require(['../pages/orderDetail.vue'], resolve)
const CouPon= resolve => require(['../pages/Coupon.vue'], resolve)
const SettIng= resolve => require(['../pages/Setting.vue'], resolve)
const AddRess= resolve => require(['../pages/address.vue'], resolve)
const routes = [
  { 
  	path: '/', 
  	name: '首页',
  	component: Index 
  },
  { 
  	path: '/detail',
  	name: '详情页',
  	component: Detail
  },
  { 
  	path: '/classify',
  	name: '分类',
  	redirect : '/classify/all',
  	component: Classify,
    // 二级子路由跳转根据数据名称跳转到子组件
  	children:[
	  	{
	  		path: '/classify/:title',
  			component: ClassifyCon,
	  	}
  	]
  },
  { 
  	path: '/cart',
  	name: '购物车',
  	component: Cart
  }
  ,
  { 
  	path: '/my',
  	name: '我的',
  	component: My,
  	meta:{ requiresAuth: true }
  },
  { 
  	path: '/login',
  	name: '登录',
  	component: Login
  },
  { 
  	path: '/pay',
  	name: '支付',
  	component: Pay
  },
  { 
  	path: '/paySuccess',
  	name: '支付成功',
  	component: PaySuccess
  },
  { 
  	path: '/orderDetail',
  	name: '订单详情',
  	component: OrderDetail
  },
  {
    path: '/Coupon',
    name: '我的卡券',
    component: CouPon
  },
   {
    path: '/setting',
    name: '设置中心',
    component: SettIng
  },
  {
    path: '/address',
    name: '收货地址',
    component: AddRess
  }
]

export default new VueRouter({
	// （缩写）相当于 routes: routes
	routes
})
