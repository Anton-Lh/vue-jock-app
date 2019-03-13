import Mock from 'mockjs';

const Random = Mock.Random
// 主页
const index = Mock.mock('http://mockapi.com/indexPage',{//方法二
	'swiper|4':[
	    {
	      'imgPath':Random.image('800x400', '#88a1f7', '#FFF', 'banner'),
	      'id':'@id'
	    }
	],
	'swiperimg':[
	/*webpack中会将图片图片来当做模块来用，因为是动态加载的，所以url-loader将无法解析图片地址，然后npm run dev 或者npm run build之后导致路径没有被加工
解决办法是加一个动态引入require()*/
		   {
	      'imgPath':require('../assets/img/bann.jpg'),
	      'id':1
	  },{
	  	'imgPath':require('../assets/img/banner2.jpg'),
	     'id':2
	  },{
	  	'imgPath':require('../assets/img/banner3.jpg'),
	     'id':3
	  }
	],
	'section1':{	
	 // XXXXXX |6 为数据数组    
	    'listImg': [
	    {
	  	'imgPath':require('../assets/img/section (4).jpg'),
	     'id':1
	  },{
	  	'imgPath':require('../assets/img/section (6).jpg'),
	     'id':2
	  },
	  {
	  	'imgPath':require('../assets/img/section (7).jpg'),
	     'id':3
	  },
	  {
	  	'imgPath':require('../assets/img/section (8).jpg'),
	     'id':4
	  }
	  ],
	    'banner':Random.image('400x100', '#ffcc33', '#333', 'Crocosport-section1')
	},
	'section2':{	    
	    'listImg|4': [{
	      'imgPath': Random.image('400x400', '#2ca1f7', '#fff', 'product'),
	      'price|99-1000':100,
	      'title|1':['运动鞋','运动裤','休闲鞋','休闲装'],
	      'id':'@id'
	    }],
	    'banner':Random.image('400x100', '#22a1f7', '#fff', 'Crocosport-section2')
	},
	'section3':{	    
	    'listImg|4': [{
	     'imgPath': require('../assets/img/section(5).jpg'),
	      'price|99-1000':100,
	     'title|1':['连帽衫','长袖','短裤','羽绒服'],
	      'time|1':['2019/02/07 02:16:32','2019/03/20 08:20:00','2019/03/23 17:45:19','2019/09/23 12:00:50'],
	      'id':'@id'
	    }],
	    'banner':Random.image('400x100', '#f5f2a5', '#333', 'Crocosport-section3')
	},
	'section4':{	    
	    'listImg|4': [{
	      'imgPath': Random.image('400x400', '#05f2a5', '#fff', 'product'),
	      'price|99-1000':100,
	     'title|1':['修身卫裤','T恤上衣','短袖POLO衫','跑步运动T'],
	      'detail|1':['运动健身','夏季清凉','时尚潮流','ins百搭'],
	      'id':'@id'
	    }],
	    'banner':Random.image('400x100', '#05f2a5', '#fff', 'product-detail')
	}
})
// 详情
const detail = Mock.mock('http://mockapi.com/detailPage',{
	'swiper|3':[
	    {
	      'imgPath':Random.image('400x400', '#f5a2a5', '#FFF', 'product-detail'),	      
	    }
	],
	'info':{
		'title|1':['鳄鱼恤秋冬运动卫衣外套连帽','秋冬运动卫衣外套','帽棉加厚保暖上衣','加厚保暖开衫夹克'],
		'price':388,
		'intro':Random.cparagraph(2),
		'types':['5ml','30ml','50ml','100ml'],
		'chooseType':'5ml',
		'id':'@id'
	},
	'detail|3':[
		{
	      'imgPath':Random.image('400x400', '#d5d2f5', '#000', 'detail 600x600'),
	    }
	]
})
// 分类
const classify = Mock.mock('http://mockapi.com/classifyPage',{
	'products|15':[
		{
			'title':'@ctitle(2,3)',//(min,max)
			'list|40':[
				{
					'title':'@cword(2,3)',
					'imgPath':Random.image('200x200', '#f5a2a5', '#FFF', 'product')
				}
			]
		}
	]
})
const coupon = Mock.mock('http://mockapi.com/CouPon',{
		'info|5':[{
		'title|1':['鳄鱼恤爵邦商城'],
		'natura|1':['@natural(10, 40)'],
		'imgPath':Random.image('100x50', '#2ca1f7', '#fff', 'product'),
		'id':'@id'
	}]

})
export {index,detail,classify,coupon}
