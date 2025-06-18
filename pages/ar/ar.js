Page({
  data: {
    arUrl: 'https://cdn.jsdelivr.net/gh/bwsss1/ARchemistry_tiaozhuan@main/index.html'
  },
  onLoad: function() {
    // URL已经在data中设置好了
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
