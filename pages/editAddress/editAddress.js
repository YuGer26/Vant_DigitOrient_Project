// pages/editAddress/editAddress.js
import Toast from '@vant/weapp/toast/toast';
import Dialog from '@vant/weapp/dialog/dialog';
import {
  areaList
} from '@vant/area-data';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    show: false,
    areaList,
    placeholder:'点击选择地区'
  },

  onClickLeft() {
    wx.navigateBack({
      delta: 1,
    })
  },

  onNameHelp(event) {
    Dialog.alert({
      title: '提示',
      message: '请务必填写真实的收货人姓名',
      theme: 'round-button',
    }).then(() => {
      // on close
    });
  },

  onSms() {
    Toast.fail('短信发送失败');
    setTimeout(() => {
      Toast.clear();
    }, 1000);
  },

  showPopup() {
    this.setData({
      show: true
    });
  },

  //选好地址后点击确定
  getArea: function (val) {
    //选中地址成功后回显
    const citys = val.detail.values
    // this.showAddr = this.resAddr[0].name + '-' + this.resAddr[1].name + '-' + this.resAddr[2].name
    const contentArea = val.detail.values[0].name + ' ' + val.detail.values[1].name + ' ' + val.detail.values[2].name
    console.log(contentArea)
    this.setData({
      show: false,
      placeholder:contentArea
    });
  },
  changeArea: function (val) {
    console.log('content-- ',val.detail.values)
  },
  colseArea: function () {
    console.log('colseArea-- ',val)
    this.popupShow = false
  },

  onSwitch({
    detail
  }) {
    Dialog.confirm({
        title: '提示',
        message: '是否切换开关？',
      })
      .then(() => {
        this.setData({
          checked: detail
        });
      })
      .catch(() => {
        this.setData({
          checked: !detail
        });
      });
  },

  onSaveButton() {
    Toast.fail('保存失败');
    setTimeout(() => {
      Toast.clear();
    }, 1000);
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