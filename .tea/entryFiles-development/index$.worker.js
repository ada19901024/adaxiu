if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../page/component/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/action-sheet/action-sheet?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/button/button?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/canvas/canvas?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/checkbox/checkbox?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/form/form?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/icon/icon?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/image/image?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/input/input?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/label/label?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/loading/loading?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/modal/modal?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/navigator/navigate?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/navigator/redirect?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/navigator/reLaunch?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/navigator/navigator?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/picker/picker?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/picker-view/picker-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/progress/progress?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/radio/radio?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/scroll-view/scroll-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/slide-tab/slide-tab?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/slider/slider?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/swiper/swiper?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/switch/switch?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/text/text?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/textarea/textarea?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/toast/toast?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/view/view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/share/share?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/action-sheet/action-sheet?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/alert/alert?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/animation/animation?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/canvas/canvas?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/confirm/confirm?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/contact/contact?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/date-picker/date-picker?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/option-menu/option-menu?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/download-file/download-file?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-auth-code/get-auth-code?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-location/get-location?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-network-type/get-network-type?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-system-info/get-system-info?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-image-info/get-image-info?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/image/image?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/keyboard/keyboard?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/loading/loading?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/make-phone-call/make-phone-call?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/phone/phone?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/navigator/navigator?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/open-location/open-location?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/pull-down-refresh/pull-down-refresh?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/request/request?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/request-payment/request-payment?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/scan-code/scan-code?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/set-navigation-bar/set-navigation-bar?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/storage/storage?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/toast/toast?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/upload-file/upload-file?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/vibrate/vibrate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/clipboard/clipboard?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/bluetooth/bluetooth?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/page-scroll-to/page-scroll-to?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/websocket/websocket?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/create-selector-query/create-selector-query?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/sdk-version/sdk-version?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/compress-image/compress-image?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/biz/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/biz/pages/collapse/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/biz/pages/dropdown/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/biz/pages/error-view/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/biz/pages/grid/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/biz/pages/list/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/biz/pages/tag/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}