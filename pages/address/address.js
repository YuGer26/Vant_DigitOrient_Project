// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:[{
      iconText:"张",
      name:"张三",
      phone:13800000000,
      tag:"默认",
      province:"浙江省",
      city:"宁波市",
      district:"北仑区",
      addressContent:"小港街道江南东路968号"
    },{
      iconText:"李",
      name:"李四",
      phone:17700000000,
      tag:"",
      province:"江苏省",
      city:"南京市",
      district:"玄武区",
      addressContent:"龙蟠路173号"
    }]
  },

  onClickLeft() {
    wx.switchTab({
      url: '/pages/myself/myself',
    })
  },

  onAddressButton(){
    wx.navigateTo({
      url: '/pages/editAddress/editAddress',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})