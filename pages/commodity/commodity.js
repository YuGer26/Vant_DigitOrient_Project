// pages/commodity/commodity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainActiveIndex: 0,
    activeId: [24,26,33],
    max: 5,
    items: [{
        // 导航名称
        text: '布电线',
        // 导航名称右上角徽标，1.5.0 版本开始支持
        // 是否在导航名称右上角显示小红点，1.5.0 版本开始支持
        dot: false,
        // 禁用选项
        disabled: false,
        // 该导航下所有的可选项
        children: [{
            // 名称
            text: 'BV',
            // id，作为匹配选中状态的标识
            id: 1,
          },
          {
            text: 'BVR',
            id: 2,
          },
          {
            text: 'BVV',
            id: 3,
            // 禁用选项
            disabled: true,
          },
          {
            text: 'BVVB',
            id: 4,
          },
          {
            text: 'NH-BV',
            id: 5,
          },
          {
            text: 'NH-BVR',
            id: 6,
          },
          {
            text: 'NH-RV',
            id: 7,
          },
          {
            text: 'NH-RVS',
            id: 8,
          },
          {
            text: 'NH-RVV',
            id: 9,
          },
          {
            text: 'RV',
            id: 10,
          },
          {
            text: 'RVS',
            id: 11,
          },
          {
            text: 'RVV',
            id: 12,
          },
          {
            text: 'ZA-AVVR',
            id: 13,
          },
          {
            text: 'ZA-BV',
            id: 14,
          },
          {
            text: 'ZA-BVR',
            id: 15,
          },
          {
            text: 'ZA-RVS',
            id: 16,
          },
          {
            text: 'ZA-RVV',
            id: 17,
          },
          {
            text: 'ZAN-BV',
            id: 18,
          },
          {
            text: 'ZAN-BVR',
            id: 19,
          },
          {
            text: 'ZAN-RV',
            id: 20,
          },
        ],
      },
      {
        text: '无卤低烟阻燃电线',
        badge: 3,
        dot: false,
        disabled: false,
        children: [{
            text: 'WDZ-BYJ',
            id: 21,
          },
          {
            text: 'WDZ-BYJR',
            id: 22,
          },
          {
            text: 'WDZ-RYJS',
            id: 23,
          },
          {
            text: 'WDZA-BYJ',
            id: 24,
          },
          {
            text: 'WDZA-BVJR',
            id: 25,
          },
          {
            text: 'WDZA-RYJS',
            id: 26,
          },
          {
            text: 'WDZAN-BYJ',
            id: 27,
          },
          {
            text: 'WDZAN-BYJR',
            id: 28,
          },
          {
            text: 'WDZAN-RYJS',
            id: 29,
            disabled: true,
          },
          {
            text: 'WDZAN-RYJY',
            id: 30,
            disabled: true,
          }, {
            text: 'WDZB-BYJ',
            id: 31,
          },
          {
            text: 'WDZB-BYJR',
            id: 32,
          },
          {
            text: 'WDZB-RYJS',
            id: 33,
          },
          {
            text: 'WDZBN-BYJ',
            id: 34,
          },
          {
            text: 'WDZBN-BVJR',
            id: 35,
          },
          {
            text: 'WDZBN-RYJS',
            id: 36,
          },
          {
            text: 'WDZC-BYJ',
            id: 37,
          },
          {
            text: 'WDZC-BYJR',
            id: 38,
          },
          {
            text: 'WDZC-RYJS',
            id: 39,
          },
          {
            text: 'WDZC-RYJY',
            id: 40,
          },
        ],
      },
      {
        text: '电力电缆',
        badge: 1,
        dot: true,
        disabled: false,
        children: [],
      },
      {
        text: '无卤低烟阻燃低压电线',
        dot: false,
        disabled: false,
        children: [],
      },
      {
        text: '中压电力电缆',
        dot: false,
        disabled: false,
        children: [],
      },
      {
        text: '控制电缆',
        dot: false,
        disabled: false,
        children: [],
      },
      {
        text: '无卤低烟阻燃控制电线',
        dot: false,
        disabled: false,
        children: [],
      },
      {
        text: '矿物绝缘电缆',
        dot: false,
        disabled: false,
        children: [],
      },
      {
        text: '计算机电缆',
        dot: false,
        disabled: false,
        children: [],
      },
      {
        text: '铝芯电力电缆',
        dot: false,
        disabled: false,
        children: [],
      },
      {
        text: '中压铝芯电缆',
        dot: false,
        disabled: false,
        children: [],
      },
      {
        text: '屏蔽电缆',
        dot: false,
        disabled: false,
        children: [],
      },
      {
        text: 'VV系列',
        dot: false,
        disabled: false,
        children: [],
      },
      {
        text: '数据线',
        dot: false,
        disabled: false,
        children: [],
      }
    ]
  },

  // 搜索输入框聚焦时触发
  onSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  onClickNav({
    detail = {}
  }) {
    this.setData({
      mainActiveIndex: detail.index || 0,
    });
  },

  onClickItem({
    detail = {}
  }) {
    const {
      activeId
    } = this.data;

    const index = activeId.indexOf(detail.id);
    if (index > -1) {
      activeId.splice(index, 1);
    } else {
      activeId.push(detail.id);
    }

    this.setData({
      activeId
    });

    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/itemCommodity/itemCommodity',
      })
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