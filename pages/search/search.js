const app = getApp();

Page({
	data: {

	},

	onLoad() {
		console.log('search');
	},

	backOldLevel() {
		wx.navigateBack({
			delta: 1,
		});
	}
})