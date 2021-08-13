// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*轮播图 配置*/
    imgUrls: [
      'http://lorempixel.com/400/200/sports',
      'http://lorempixel.com/400/200/food',
      'http://lorempixel.com/400/200/city'
    ],
    indicatorDots: true, // 是否显示面板指示点
    autoplay: true, // 是否自动切换
    interval: 5000, // 自动切换时间间隔
    duration: 500, // 滑动动画时长
    circular: true, // 是否采用衔接滑动
    content: "宁波东方电缆股份有限公司（股票简称：东方电缆，股票代码：603606）是中国海陆缆核心供应商，多年来一直在科技新、质量管理、核心技术突破等方面处于行业领先地位，位列全球海缆最具竞争力企业10强、中国上市公司价值评选主板价值100强。目前公司已形成陆缆系统、海缆系统和海洋工程三大产业板块。公司拥有500 kV及以下交流（光电复合）海缆、陆缆，±535 kV及以下直流（光电复合）海缆、陆缆系统产品的设计研发、生产制造、安装和运维服务能力，并涉及海底光缆、智能电网用电线电缆、核电缆、通信电缆、控制电缆、电线、综合布线、架空导线等一系列产品，广泛应用于电力、建筑、通信、石化、轨道交通、风力发电、核能、海洋油气勘采、海洋军事等多个领域。", // 完整的内容
    contentShow: '宁波东方电缆股份有限公司（股票简称：东方电缆，股票代码：603606）是中国海陆缆核心供应商，多年来一直在科技新、质量管理、核心技术突破等方面处于行业领先地位，位列全球海缆最具竞争力企业10强、中国上市公司价值评选主板价值100强。目前公司已形成陆缆系统、海缆系统和海洋工程三大产业板块。公司拥有500 kV及以下交流（光电复合）海缆、陆缆，±535 kV及以下直流（光电复合）海缆、陆缆系统产品的设计研发、生产制造、安装和运维服务能力，并涉及海底光缆、智能电网用电线电缆、核',// 真实显示的内容
    maxLength: 200, // 收起时最大显示文字长度
    ellipsis: true, // 是否收缩
  },

  // 收起/展开按钮点击事件
  ellipsis: function () {
    var ellipsis = !this.data.ellipsis;
    var contentShow = this.data.content;  
    var maxLength = this.data.maxLength;
    // 如果内容长度少于10，则不截取;否则当处于收起状态，截取7个文字并加上省略号
    contentShow = (contentShow.length > maxLength && ellipsis) ? contentShow.substring(0, maxLength - 3) + "..." : contentShow;
    this.setData({
      contentShow: contentShow,
      ellipsis: ellipsis
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