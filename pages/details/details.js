const app = getApp();

Page({
	data: {
		info: {},
	},

	onLoad({id}) {
		this.loadDetails(id);
	},

	// 请求信息
	loadDetails(id) {
		wx.showLoading({
			title: '详情加载中……',
		});
		setInterval(() => {
			wx.hideLoading();
		}, 2000);
	},

	// 返回
	backLevel() {
		wx.navigateBack({
			delta: 1,
		});
	},
});
