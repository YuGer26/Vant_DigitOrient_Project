// pages/offer/offer.js
import Toast from '@vant/weapp/toast/toast';
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkeds: false,
    delButtonColor:'transparent',
    result: ['0', '3'],
    offerArray: [{
      id: 0,
      title: "VV系列",
      checked: false,
      desc: "ZC-VV22 0.6/1kV 282.1.5",
      price: 6.77,
      origin_price: 9.80,
      unit: "元/米",
      colorTag: "黑",
      num: 2,
      imageURL: 'https://iph.href.lu/512x512?text=%E5%8D%A0%E4%BD%8D%E5%9B%BE&fg=666666&bg=cccccc'
    }, {
      id: 1,
      title: "控制电缆",
      checked: true,
      desc: "KVV22 450/750V 2*1.5",
      price: 5.07,
      unit: "元/米",
      colorTag: "黑",
      num: 1,
      imageURL: 'https://iph.href.lu/512x512?text=%E5%8D%A0%E4%BD%8D%E5%9B%BE&fg=666666&bg=cccccc'
    }, {
      id: 2,
      title: "电力电缆",
      checked: true,
      desc: "YJV32 0.6/1kV 2*2.5",
      price: 9.59,
      origin_price: 12.13,
      unit: "元/米",
      colorTag: "黑",
      num: 2,
      imageURL: 'https://iph.href.lu/512x512?text=%E5%8D%A0%E4%BD%8D%E5%9B%BE&fg=666666&bg=cccccc'
    }, {
      id: 3,
      title: "无卤低烟阻燃电线",
      checked: true,
      desc: "WDZ-BYJ 450/750V 0.5",
      price: 59.71,
      origin_price: 62.12,
      unit: "元/米",
      colorTag: "黄/绿",
      num: 1,
      imageURL: ''
    }, {
      id: 4,
      title: "布电线",
      checked: true,
      desc: "BV 300/500V 0.5",
      price: 54.42,
      origin_price: 59.77,
      unit: "元/米",
      colorTag: "红",
      num: 4,
      imageURL: 'https://iph.href.lu/512x512?text=%E5%8D%A0%E4%BD%8D%E5%9B%BE&fg=666666&bg=cccccc'
    }],
  },

  onCheckbox(event) {
    // console.log(this.data.offerArray.checked)
    // console.log(this.data.offerArray[0].id)
    // console.log(event.currentTarget)
    // setTimeout(() => {
    //   console.log(this.data.offerArray.id)
    //   // this.setData({ value });
    // }, 1000);
    this.setData({
      result: event.detail,
    });
  },

  pushOffer(){
    wx.navigateTo({
      url: '/pages/pushOffer/pushOffer',
    })
  },

  onCheckboxTwo(event){
    let on = "linear-gradient(to right, #a2d2f9, #69a1f5)"
    let off = "transparent"
    this.setData({
      checkeds: event.detail,
    });
    if (event.detail === true) {
      this.setData({
        delButtonColor:on
      });
    }else{
      this.setData({
        delButtonColor:off
      });
    }
  },

  onChange(value) {
    Toast.loading({
      message: '传输中...',
      forbidClick: true,
    });
    console.log(value.detail);
    setTimeout(() => {
      Toast.clear();
      // this.setData({ value });
    }, 500);
  },

  onClose(event) {
    console.log("success");
    const {
      position,
      instance
    } = event.detail;
    switch (position) {
      case 'left':
      case 'cell':
        instance.close();
        break;
      case 'right':
        Dialog.confirm({
            message: '确定删除吗？',
          })
          .then(() => {
            // on confirm
          })
          .catch(() => {
            // on cancel
          });
        break;
    }
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