import wx from 'wx';

interface Config {
  appId: string;
  timestamp: string;
  nonceStr: string;
  signature: string;
}
interface Share {
  wstitle: string;
  wsdesc: string;
  wslink: string;
  wsimg: string;
}
function configShare(config: Config, share: Share) {
  const configObject = {
    debug: false,
    jsApiList: [
      'checkJsApi',
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone',
    ],
    ...config,
  };
  wx.config(configObject);

  const {
    wstitle, wsdesc, wslink, wsimg,
  } = share;
  wx.ready(() => {
    // 分享到朋友圈
    wx.onMenuShareTimeline({
      title: wstitle,
      link: wslink,
      imgUrl: wsimg,
    });

    // 分享给朋友
    wx.onMenuShareAppMessage({
      title: wstitle,
      desc: wsdesc,
      link: wslink,
      imgUrl: wsimg,
    });

    // 分享到QQ
    wx.onMenuShareQQ({
      title: wstitle,
      desc: wsdesc,
      link: wslink,
      imgUrl: wsimg,
    });

    // 微信到腾讯微博
    wx.onMenuShareWeibo({
      title: wstitle,
      desc: wsdesc,
      link: wslink,
      imgUrl: wsimg,
    });

    // 分享到QQ空间
    wx.onMenuShareQZone({
      title: wstitle,
      desc: wsdesc,
      link: wslink,
      imgUrl: wsimg,
    });
  });
}

export default configShare;
