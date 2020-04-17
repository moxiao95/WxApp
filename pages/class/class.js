//class.js
//获取应用实例
const app = getApp()

Page({
	data: {
		list: [
			{
				name: '冰箱',
				chilren: [
					{
						name: '格力冰箱',
						chilren: [
							{
								name: '三门冰箱',
							},
						],
					},
				],
			},
		],
	},
	onLoad: function () {

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
});
