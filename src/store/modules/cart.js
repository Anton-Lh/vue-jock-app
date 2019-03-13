import Vue from 'vue'
import * as types from '../mutation-type'
// main.js中将store注入到整个App应用中：
const state = {
	activePro : {},//当前的商品
	oldProList : [],//购物车已存在的商品列表
	productsNum : 0,//支付商品数量
	productsPay : 0,//支付商品总价
	payList : [],//需要支付的商品列表
	oldOrderData : {},//购买过的订单
	oldOrderId : 0,  //购买过的数量ID
	classifyIndex : 0,//当前所选商品分类
	classifyList:{}//当前所选商品分类对应的商品列表
}

// vuex修改状态
const mutations = {
	// 修改
[types.SET_PRODUCT]:(state,data) => {
	// 访问对象当前的商品状态为data
state.activePro=data;
},
[types.ADD_PRODUCT]:(state)=>{
	//  JSON.stringify将一个JS值(对象或者数组)转换为一个jSON
	let newData = JSON.stringify(state.activePro)
	// JSON.parse返回之前对所得到的对象执行
	state.oldProList.push(JSON.parse(newData))
},
[types.DEL_PRODUCT]:(state,data)=>{
		//遍历购物车数据，符合删除条件的删除
		for(var i=0; i<state.oldProList.length; i++){
			//当前的购物车存在的商品ID以及价格等于data的id价格，
			if(state.oldProList[i].info.id==data.id&&state.oldProList[i].info.price==data.price){
				// 购物车的数据删除一条 截止
				state.oldProList.splice(i,1);
				break;
			}
		}
	},
	// 增加的价格变化
	[types.ADD_PAY]:(state,price)=>{
		state.productsNum++;
		// 支付商品总价+=商品价格 
		state.productsPay +=price;
	},
	// 删除的价格变化
	[types.DEL_PAY]:(state,price)=>{
		// 如果商品数量为0或者空时不可操作 否则继续--
		state.productsNum ==0?'':state.productsNum--;
		//如果商品数量大于0则商品支付价格 -=当前支付价格
		state.productsPay>0?state.productsPay -=price:'';
	},
	// 增加商品列表
	[types.ADD_PAYLIST]:(state,data)=>{
		state.payList = data
	},
	//存放支付成功后的所有订单信息
	[types.ADD_ORDERLIST]:(state) => {
		// 购买过的数量ID
		state.oldOrderId++;
		//  JSON.stringify将一个JS值(对象或者数组)转换为一个jSON
		let newData = JSON.stringify(state.payList)
		// JSON.parse返回之前对所得到的对象执行
		state.oldOrderData[state.oldOrderId] = JSON.parse(newData)
	},
	// 支付成功后清空购物车数据
	[types.DEL_CART]:(state)=>{
		state.oldProList=[];
		state.productsNum=0;
		state.productsPay=0;
		state.payList=[]
	},
//修改当前商品分类
	[types.CHANGE_CLASSIFY_index]:(state,index) => {
		state.classifyIndex = index
	},
	//修改当前商品分类
	[types.CHANGE_CLASSIFY_LIST]:(state,item) => {
		state.classifyList = item
	}
}






// 导出 state访问状态对象  mutations修改状态
export default {
  state,
  mutations
}