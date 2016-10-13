Page({
  data: {
      tabs: [
          {
              name: "douban",
              display_name: "豆瓣"
          },
          {
              name: "baidu",
              display_name: "百度"
          },
          {
              name: "taobao",
              display_name: "淘宝"
          }
      ],
      active_tab:"",
      pass_data: {}
  },
  doubanIndex: function(){
      var that = this;
      that.setData({
          pass_data: {title:"豆瓣网",description:"提供图书、电影、音乐唱片的推荐、评论和价格比较，以及城市独特的文化生活。"}
      })
  },
  baiduIndex: function(){
      var that = this;
      that.setData({
          pass_data: {title:"百度",description:"百度一下，你就知道",head_pic_url:"http://imgs.technews.cn/wp-content/uploads/2014/10/Baidu.jpg"}
      })
  },
  taobaoIndex: function(){
      var that = this;
      that.setData({
          pass_data: {title:"淘宝",description:"新品上市",products:[{name:"iPhone 7",price:"5999"},{name:"MacBook Pro",price:"15999"}]}
      })
  },
  switchTap: function(e){
      var that = this;
      that.setData({
          active_tab: e.target.id
      })
      switch(that.data.active_tab) {
        case "douban":
            that.doubanIndex();
            break;
        case "baidu":
            that.baiduIndex();
            break;
        case "taobao":
            that.taobaoIndex();
            break;
        default:
            break;
    }
  },
  onLoad: function(){
      var that = this;
      that.doubanIndex();
      that.setData({
          active_tab:"douban"
      })
  }
})