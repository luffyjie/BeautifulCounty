const modal = weex.requireModule('modal');
const navigator = weex.requireModule('navigator');

// 一些公共常量
const { bundleUrl, env } = weex.config;
export const urlParams = getUrlParam();
export const platform = env.platform.toLowerCase();
export const isIphoneX = iphoneXCheck();
export const isIphone = (platform === 'ios');

/*顶部安全区域远离高度*/
export const topBarSafeHeightIphone = isIphoneX ? 44*2: 0;
/*底部安全区域远离高度*/
export const bottomSafeHeightIphone = isIphoneX ? 34*2 : 0;
/*状态栏高度*/
export const statusBarHeightIphone = isIphoneX ? 44*2 : 20*2;
/*状态栏和导航栏总高度*/
export const navBarHeightIphone = isIphoneX ? 88*2 : 64*2;
/*TabBar高度*/
export const tabBarHeightIphone = isIphoneX ? 49*2 + 34*2 : 49*2;

// 空函数
export const noop = () => {}

// 显示toast信息
export const toast = (message, duration = 0.8) => {
    modal.toast({ message, duration });
}

// alert 主要用于调试
export const alert = (message) => {
    modal.alert({ message });
}
  
export function isEmptyObj(obj) {
    for (const v in obj) {
      return false;
    }
    return true;
  }

function isX() {
    if (platform === 'ios' && env.deviceHeight == 812*2) {
        return true
    }
    return false
}

function isXR() {
    if (platform === 'ios' && env.deviceHeight == 896*2 && env.scale == 2) {
        return true
    }
    return false
}

function isXRMax() {
    if (platform === 'ios' && env.deviceHeight == 896*3  && env.scale == 3) {
        return true
    }
    return false
}

export function iphoneXCheck() {
  return (isX() || isXR() || isXRMax())
}

export function navKind() {
   if (isIphoneX) {
     return "iphoneX"
   }
   if (isIphone) {
     return "iphone"
   }
   if (platform === 'web') {
     return "web"
   }

   return "android"
}

export function getUrlParam() {
  var name,value;
  var dic = {};
  var str= decodeURI(bundleUrl); //取得整个地址栏
  var num=str.indexOf("?");
  str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
  var arr=str.split("&"); //各个参数放到数组里
  for(var i=0;i < arr.length;i++){
      num=arr[i].indexOf("=");
      if(num>0){
          name=arr[i].substring(0,num);
          value=arr[i].substr(num+1);
          dic[name]=value;
      }
  }
  return dic;
}