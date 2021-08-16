// pages/itemCommodity/itemCommodity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    tagColors_item: 0,
    tagsColor:['红色','蓝色','黑色']
  },
  
  onShoppingTags(e){
    var that= this;
    console.log(e)
    let Index=e.currentTarget.dataset.index;//获取index值
    console.log(Index);
    that.setData({
      tagColors_item: Index
    })
  },

  onClose(){
    this.setData({ show: false });
  },

  onShopingNum(event){
    console.log(event.detail);
  },

  onStockList(){
    wx.navigateTo({
      url: '/pages/stockList/stockList',
    })
  },

  onShopping(){
      this.setData({
        show: true
      });
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