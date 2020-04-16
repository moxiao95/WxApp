const app = getApp();

Page({
	data: {

	},

	onLoad() {
		console.log('news');
	},

	backLevel() {
		wx.navigateBack({
			deita: 1,
		})
	}
})