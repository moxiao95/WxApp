const app = getApp();

Page({
	data: {

	},

	onLoad() {

	},

	backLevel() {
		wx.navigateBack({
			delta: 1,
		});
	},
})