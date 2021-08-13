// pages/stock/stock.js
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexList: ["A", "B", "C", "D", "E", "F", "G", "H"],
    anchorList: [{
      anchor: "A",
      title: "布电线",
      text: ["BV", "BVR", "BVV", "BVVB", "NH-BV", "NH-BVR", "NH-RV", "NH-RVS", "NH-RVV", "RV"]
    }, {
      anchor: "B",
      title: "无卤低烟阻燃电线",
      text: ["WDZ-BYJ", "WDZ-BYJR", "WDZ-RYJS", "WDZA-BYJ", "WDZA-BYJR", "WDZA-RYJS", "WDZA-RYJY", "WDZAN-BYJ", "WDZAN-BYJR", "WDZAN-RYJS"]
    }, {
      anchor: "C",
      title: "电缆电缆",
      text: ["NH-YJV", "NH-YJV22", "NH-YJV62", "YJV", "YJV22", "YJV32", "YJV62", "YJVR", "ZA-YJV", "ZA-YJV22"]
    }, {
      anchor: "D",
      title: "无卤低烟阻燃低压电线",
      text: ["WDZ-YJY", "WDZ-YJY23", "WDZA-YJY", "WDZA-YJY23", "WDZA-YJY63", "WDZA-YJYR", "WDZAN-YJY", "WDZAN-YJY23", "WDZAN-YJY63", "WDZB-YJY"]
    }, {
      anchor: "E",
      title: "中压电力电缆",
      text: ["WDZA-YJY", "WDZA-YJY23", "WDZA-YJY63", "WDZB-YJY", "WDZB-YJY23", "WDZC-YJY", "WDZC-YJY23", "YJV", "YJV22", "YJV32"]
    }]
  },

  onCheck(event) {
    Dialog.alert({
      title: '操作提示',
      message: '库存查询需要授权使用，\n请联系东方电缆客服。',
      theme: 'round-button',
    }).then(() => {
      // on close
    });
  },

  onSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
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