webpackJsonp([11],{"/mMG":function(e,t){},sy9f:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("HiZK"),o=r("Au9i"),d={data:function(){return{orderName:this.$store.state.user.orderName,orderPhone:this.$store.state.user.orderPhone,orderAddress:this.$store.state.user.orderAddress}},created:function(){},methods:{deladdress:function(e){var t=this;o.MessageBox.confirm("确认删除该地址？").then(function(e){t.orderName="",t.orderPhone="",t.orderAddress=""}).catch(function(e){})}},components:{headBack:s.a}},a={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"orderDetail"},[r("head-back",{attrs:{headName:"收货地址"}}),e._v(" "),r("section",{staticClass:"orderDetail"},[r("div",{staticClass:"orderBox"},[r("h6",[e._v("收货地址")]),e._v(" "),r("ul",[r("li",[e._v("\n\t\t\t\t"+e._s(e.orderName)+"\n\t\t\t\t"),r("span",[e._v(e._s(e.orderPhone))]),e._v(" "),r("p",[e._v(e._s(e.orderAddress))])])])])]),e._v(" "),r("button",{on:{click:e.deladdress}},[e._v("删除")])],1)},staticRenderFns:[]};var n=r("VU/8")(d,a,!1,function(e){r("/mMG")},"data-v-3f063465",null);t.default=n.exports}});
//# sourceMappingURL=11.3fd5c8cb338dd0753e21.js.map