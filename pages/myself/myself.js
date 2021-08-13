// pages/myself/myself.js
import Toast from '@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLogin(){
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },

  onOut(){
    Toast({
      type: 'success',
      message: '退出成功',
    });
  },

  onAll(){
    wx.navigateTo({
      url: '/pages/order/order?id=0'
    })
  },

  onWait(){
    wx.navigateTo({
      url: '/pages/order/order?id=1'
    })
  },

  onEnd(){
    wx.navigateTo({
      url: '/pages/order/order?id=2'
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
    this.getTabBar().init();
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