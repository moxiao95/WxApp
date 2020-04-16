//index.js
// 引入文件
const urlList = require('../../utils/api.js');

//获取应用实例
const app = getApp();

Page({
	data: {
		inputShowed: false,
		inputVal: "",
		background: ['blue', 'red', 'green'],
		indicatorDots: true,
		circular: true,
		easingFunction: 'linear',
		vertical: false,
		autoplay: true,
		interval: 2000,
		duration: 500,
		classList: [
			{
				img: '../../img/indexPage/bingxiang.png',
				name: '冰箱',
			},
			{
				img: '../../img/indexPage/reshuiqi.png',
				name: '热水器',
			},
			{
				img: '../../img/indexPage/jiadian.png',
				name: '智能家电',
			},
			{
				img: '../../img/indexPage/zhongyang.png',
				name: '中央空调',
			},
			{
				img: '../../img/indexPage/kongtiao.png',
				name: '家用空调',
			},
			{
				img: '../../img/indexPage/xiyiji.png',
				name: '洗衣机',
			},
			{
				img: '../../img/indexPage/dadian.png',
				name: '厨卫大电',
			},
			{
				img: '../../img/indexPage/xiaodian.png',
				name: '厨房小电',
			},
			{
				img: '../../img/indexPage/huanjing.png',
				name: '环境电器',
			},
			{
				img: '../../img/indexPage/shangpin.png',
				name: '全部产品',
			},
		]
	},

    onLoad() {
		var _this = this;
        wx.request({
			url: urlList.userPath,
			method: 'GET',
			data: {
				userId: '00000001',
			},
			success: function({data}) {
				
			},
			fail: function(err) {
				console.log(err)
			},
		});
    },

	// 跳转搜索页面
	jumpToSearchPage() {
		wx.navigateTo({
			url: '../search/search',
		});
	},
	
	// 跳转消息页面
	jumpNewsPage() {
		wx.navigateTo({
			url: '../news/news',
		});
	},

	// 跳转商品列表页面
	jumpArticlePage() {
		wx.navigateTo({
			url: '../acticle/acticle',
		});
	},

	// 跳转头条页面
	jumpHeadlinesPage() {
		wx.navigateTo({
			url: '../headlines/headlines',
		});
	},
})