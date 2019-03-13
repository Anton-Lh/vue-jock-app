# vue-jock

 Vue.js project vue2 + vuex + vue-router + webpack + http+ sass + mock + mint-ui
说明
项目商城产品图使用mock.js技术来模拟数据请求效果。
项目的轮播图、lazy-load使用的是mint-ui插件；scroll滚动使用的是better-scroll插件。
数据状态的处理使用了vuex，比如支付页与我的订单页面之间的数据通信， 页面刷新会清空。
登录账号信息使用本地存储，全局守卫判断是否登录成功。
项目参照饿了么全家桶框架仿照该项目的页面效果来制作
VUEX部分仍有不足，增加地址模块只制作删除 未做保存增加， 
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
