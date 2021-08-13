Component({
  data: {
    active: 0,
    list: [{
        "url": "/pages/index/index",
        "icon": "wap-home-o",
        "info": "",
        "text": "首页"
      },
      {
        "url": "/pages/commodity/commodity",
        "icon": "apps-o",
        "info": "",
        "text": "商品"
      },
      {
        "url": "/pages/offer/offer",
        "icon": "shopping-cart-o",
        "info": "",
        "text": "生成报价"
      },
      {
        "url": "/pages/stock/stock",
        "icon": "records",
        "info": "",
        "text": "库存"
      },
      {
        "url": "/pages/myself/myself",
        "icon": "user-circle-o",
        "info": "3",
        "text": "我的"
      }
    ]
  },
  methods: {
    onChange(e) {
      console.log(e, 'e')
      wx.switchTab({
        url: this.data.list[e.detail].url
      });
      this.setData({
        active: e.detail
      });
    },
    init() {
      const page = getCurrentPages().pop();
      this.setData({
        active: this.data.list.findIndex(item => item.url === `/${page.route}`)
      });
    }
  }
});