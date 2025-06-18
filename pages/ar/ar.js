Page({
  data: {
    arUrl: '' // 这里填入你的GitHub Pages URL
  },
  onLoad: function() {
    // 设置AR页面的URL
    this.setData({
      arUrl: 'https://你的用户名.github.io/仓库名/' // 替换为你的GitHub Pages URL
    });
  },
  // WebView加载成功
  onWebViewLoad: function(e) {
    console.log('WebView加载成功');
  },
  // WebView加载失败
  onWebViewError: function(e) {
    console.error('WebView加载失败', e);
    wx.showToast({
      title: 'AR加载失败',
      icon: 'none'
    });
  }
}); 