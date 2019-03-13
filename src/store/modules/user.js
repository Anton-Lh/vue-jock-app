import Vue from 'vue'
import * as types from '../mutation-type'

const state = {
	orderName : '安東生',//收货人
	orderPhone : '17666141150',//收货电话
	orderAddress : '深圳市南山区龙珠四路',//收货人
}

const mutations = {
	[types.SET_PRODUCT]:(state,data) => {
		state.activePro=data;
	},
	[types.DEL_ADDRESS]:(state)=>{
		// state.orderName ={};
		// state.orderPhone ={};
		// state.orderAddress =[];
		state.orderName=[];
		// state.orderPhone="";
		// state.orderAddress="";
	}
}



export default {
  state,
  mutations
}