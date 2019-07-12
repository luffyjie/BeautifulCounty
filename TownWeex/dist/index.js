// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//API
var JSAddress = exports.JSAddress = 'http://62.234.160.65';
var IPAddress = exports.IPAddress = 'http://62.234.160.65';

var townPage = exports.townPage = JSAddress + '/dist/town.js?columnId=';
var detailPage = exports.detailPage = JSAddress + '/dist/detail.js?articleId=';

var columnListAPI = exports.columnListAPI = IPAddress + '/columns/listAll?countyId=';
var sliderAPI = exports.sliderAPI = IPAddress + '/pictures/slider?ids=1,2,3,4,43,53';

var articleListAPI = exports.articleListAPI = IPAddress + '/articles/listAll?columnId=';

var detailAPI = exports.detailAPI = IPAddress + '/articles/info/';
var detailSliderAPI = exports.detailSliderAPI = IPAddress + '/pictures/listAll?articleId=';

var NavBackIcon = exports.NavBackIcon = JSAddress + '/dist/icon/back.png';
var NavBackIcon2 = exports.NavBackIcon2 = JSAddress + '/dist/icon/nav_back_btn.png';
var NavBackIcon3 = exports.NavBackIcon3 = JSAddress + '/dist/icon/nav-back.png';

var deitalArrow = exports.deitalArrow = JSAddress + '/dist/icon/right-arrow.png';

var iLoadingBig$gif = exports.iLoadingBig$gif = "http://gw.alicdn.com/mt/TB1EFNfXMoQMeJjy1XaXXcSsFXa-160-160.gif";
var iEmpty$png = exports.iEmpty$png = "http://gw.alicdn.com/mt/TB1BpNfXMoQMeJjy1XaXXcSsFXa-320-320.png";
var iError$png = exports.iError$png = "http://gw.alicdn.com/mt/TB1uYNbXTZRMeJjSsplXXXeqXXa-320-320.png";

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEmptyObj = isEmptyObj;
exports.iphoneXCheck = iphoneXCheck;
exports.navKind = navKind;
exports.getUrlParam = getUrlParam;
var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');

// 一些公共常量
var _weex$config = weex.config,
    bundleUrl = _weex$config.bundleUrl,
    env = _weex$config.env;
var urlParams = exports.urlParams = getUrlParam();
var platform = exports.platform = env.platform.toLowerCase();
var isIphoneX = exports.isIphoneX = iphoneXCheck();
var isIphone = exports.isIphone = platform === 'ios';

/*顶部安全区域远离高度*/
var topBarSafeHeightIphone = exports.topBarSafeHeightIphone = isIphoneX ? 44 * 2 : 0;
/*底部安全区域远离高度*/
var bottomSafeHeightIphone = exports.bottomSafeHeightIphone = isIphoneX ? 34 * 2 : 0;
/*状态栏高度*/
var statusBarHeightIphone = exports.statusBarHeightIphone = isIphoneX ? 44 * 2 : 20 * 2;
/*状态栏和导航栏总高度*/
var navBarHeightIphone = exports.navBarHeightIphone = isIphoneX ? 88 * 2 : 64 * 2;
/*TabBar高度*/
var tabBarHeightIphone = exports.tabBarHeightIphone = isIphoneX ? 49 * 2 + 34 * 2 : 49 * 2;

// 空函数
var noop = exports.noop = function noop() {};

// 显示toast信息
var toast = exports.toast = function toast(message) {
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.8;

    modal.toast({ message: message, duration: duration });
};

// alert 主要用于调试
var alert = exports.alert = function alert(message) {
    modal.alert({ message: message });
};

function isEmptyObj(obj) {
    for (var v in obj) {
        return false;
    }
    return true;
}

function isX() {
    if (platform === 'ios' && env.deviceHeight == 812 * 2) {
        return true;
    }
    return false;
}

function isXR() {
    if (platform === 'ios' && env.deviceHeight == 896 * 2 && env.scale == 2) {
        return true;
    }
    return false;
}

function isXRMax() {
    if (platform === 'ios' && env.deviceHeight == 896 * 3 && env.scale == 3) {
        return true;
    }
    return false;
}

function iphoneXCheck() {
    return isX() || isXR() || isXRMax();
}

function navKind() {
    if (isIphoneX) {
        return "iphoneX";
    }
    if (isIphone) {
        return "iphone";
    }
    if (platform === 'web') {
        return "web";
    }

    return "android";
}

function getUrlParam() {
    var name, value;
    var dic = {};
    var str = decodeURI(bundleUrl); //取得整个地址栏
    var num = str.indexOf("?");
    str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
    var arr = str.split("&"); //各个参数放到数组里
    for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
            name = arr[i].substring(0, num);
            value = arr[i].substr(num + 1);
            dic[name] = value;
        }
    }
    return dic;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zwj/Develop-Project/TownWeex/src/components/go-back.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d67b8268"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "go-back": {
    "position": "relative",
    "flexDirection": "row",
    "height": "64",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "i-back": {
    "width": "48",
    "height": "48"
  },
  "i-title": {
    "color": "#FFFFFF",
    "fontSize": "36"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(1);

var _cdnurl = __webpack_require__(0);

//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');

exports.default = {
  props: [],
  data: function data() {
    return {
      NavBackIcon: _cdnurl.NavBackIcon
    };
  },

  methods: {
    onGoBack: function onGoBack(event) {
      var options = {
        animated: true // 关闭页面时使用动画效果
      };
      navigator.pop(options, function (result) {});
    }
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["go-back"],
    on: {
      "click": _vm.onGoBack
    }
  }, [_c('image', {
    staticClass: ["i-back"],
    attrs: {
      "src": _vm.NavBackIcon
    }
  }), _c('text', {
    staticClass: ["i-title"]
  }, [_vm._v("返回")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zwj/Develop-Project/TownWeex/src/components/navbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-688b5e20"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {
  "navbar": {
    "width": "750",
    "backgroundColor": "#305E8B",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "rgba(0,0,0,0.1)"
  },
  "navbar-iphone": {
    "height": "128"
  },
  "navbar-iphoneX": {
    "height": "176"
  },
  "navbar-android": {
    "height": "128"
  },
  "navbar-web": {
    "height": "98"
  },
  "navItem": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "navItem-iphone": {
    "marginTop": "40",
    "height": "88"
  },
  "navItem-iphoneX": {
    "marginTop": "88",
    "height": "88"
  },
  "navItem-android": {
    "marginTop": "40",
    "height": "88"
  },
  "navItem-web": {
    "height": "98"
  },
  "left-content": {
    "position": "absolute",
    "left": "20"
  },
  "sub-title": {
    "color": "#FFFFFF",
    "fontSize": "36",
    "fontWeight": "bold",
    "maxWidth": "400",
    "maxHeight": "64",
    "lines": 1
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _goBack = __webpack_require__(2);

var _goBack2 = _interopRequireDefault(_goBack);

var _utils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//

exports.default = {
  components: {
    GoBack: _goBack2.default
  },
  props: ['pageTitle', 'pageFrom', // 页面来源
  'showGoBack', // 显示返回按钮
  'showAbout'],
  data: function data() {
    return {
      navKind: _utils.navKind,
      title: this.pageTitle
    };
  },

  methods: {
    goBack: function goBack(e) {
      _goBack2.default.methods.goBack(e);
    }
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['navbar-' + _vm.navKind(), 'navbar']
  }, [_c('div', {
    class: ['navItem', 'navItem-' + _vm.navKind()]
  }, [(_vm.showGoBack === 'true') ? [_c('go-back', {
    staticClass: ["left-content"]
  })] : _vm._e(), _c('text', {
    staticClass: ["sub-title"]
  }, [_vm._v(_vm._s(_vm.title))])], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(13)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zwj/Develop-Project/TownWeex/src/components/index-slider.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-08c35c4c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  "size": {
    "width": "750",
    "height": "300"
  },
  "indicator-size": {
    "width": "750",
    "height": "42"
  },
  "indicator": {
    "position": "absolute",
    "bottom": 0,
    "right": 0,
    "left": 0,
    "itemColor": "#DDDDDD",
    "itemSelectedColor": "#FF0000",
    "itemSize": "14",
    "backgroundColor": "rgba(0,0,0,0.5)"
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  props: ['photos'],
  data: function data() {
    return {};
  }
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('slider', {
    staticClass: ["size"]
  }, [_vm._l((_vm.photos), function(photo) {
    return _c('div', {
      key: photo.id
    }, [_c('image', {
      staticClass: ["size"],
      attrs: {
        "src": photo.path
      }
    })])
  }), _c('indicator', {
    staticClass: ["indicator", "indicator-size"]
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zwj/Develop-Project/TownWeex/src/components/error.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ea0f4bb0"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "error": {
    "alignItems": "center",
    "backgroundColor": "#FFFFFF"
  },
  "error-pic": {
    "width": "320",
    "height": "320",
    "marginTop": "287",
    "backgroundColor": "#FFFFFF"
  },
  "error-tip": {
    "marginTop": "30",
    "marginBottom": "70",
    "color": "#333333",
    "fontSize": "28",
    "marginLeft": "24",
    "marginRight": "24"
  },
  "error-button": {
    "justifyContent": "center",
    "alignItems": "center",
    "height": "54",
    "borderWidth": "1",
    "borderColor": "#fd3000",
    "borderRadius": "27",
    "backgroundColor": "#FFFFFF",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10"
  },
  "error-button-big": {
    "paddingLeft": "24",
    "paddingRight": "24"
  },
  "error-button-text": {
    "color": "#fd3000",
    "fontSize": "28",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "marginLeft": "24",
    "marginRight": "24"
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cdnurl = __webpack_require__(0);

//   const location = weex.requireModule('location');

exports.default = {
  props: {
    icon: {
      type: String,
      default: _cdnurl.iError$png
    },
    tip: {
      type: String,
      default: ''
    },
    hasButton: {
      type: Boolean,
      default: true
    },
    buttonText: {
      type: String,
      default: '刷新一下'
    },
    buttonAction: {
      type: Function,
      default: function _default() {
        //   location.reload();
      }
    },
    isBigButton: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      // windowHeight,
      iErrorImgUrl: _cdnurl.iError$png
    };
  },


  methods: {
    onClick: function onClick() {
      if (this.buttonAction) {
        this.buttonAction();
      } else {
        //   location.reload();
      }
    }
  }
}; //
//
//
//
//
//
//
//
//
//
//

// import { windowHeight } from '@/common/utils.js';

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["error"]
  }, [_c('image', {
    staticClass: ["error-pic"],
    attrs: {
      "src": _vm.icon || _vm.iErrorImgUrl
    }
  }), _c('text', {
    staticClass: ["error-tip"]
  }, [_vm._v(_vm._s(_vm.tip || '网络开小差啦，刷新试试'))]), (_vm.hasButton) ? _c('div', {
    class: ['error-button', _vm.isBigButton ? 'error-button-big' : 'error-button-common'],
    on: {
      "click": _vm.onClick
    }
  }, [_c('text', {
    staticClass: ["error-button-text"]
  }, [_vm._v(_vm._s(_vm.buttonText || '刷新一下'))])]) : _vm._e(), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(19)
)

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(21)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zwj/Develop-Project/TownWeex/src/components/index-list-item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-fa96bb72"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {
  "item": {
    "alignItems": "center",
    "width": "750",
    "height": "120",
    "borderBottomColor": "#000000",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "marginLeft": "15"
  },
  "link": {
    "flexDirection": "row",
    "alignItems": "center",
    "width": "750",
    "height": "120"
  },
  "town-image": {
    "marginLeft": "5",
    "width": "140",
    "height": "100"
  },
  "town-title": {
    "color": "#000000",
    "fontSize": "28",
    "fontWeight": "bold",
    "marginLeft": "30"
  },
  "sub-info": {
    "position": "absolute",
    "right": "80"
  },
  "sub-title": {
    "color": "#000000",
    "fontSize": "24",
    "textAlign": "right"
  },
  "sub-distance": {
    "color": "#000000",
    "fontSize": "24",
    "textAlign": "right",
    "marginTop": "4"
  },
  "arrow": {
    "position": "absolute",
    "right": "35",
    "width": "30",
    "height": "30"
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cdnurl = __webpack_require__(0);

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');

exports.default = {
  props: ['column'],
  data: function data() {
    return {
      deitalArrow: _cdnurl.deitalArrow
    };
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('div', {
    staticClass: ["link"]
  }, [_c('image', {
    staticClass: ["town-image"],
    attrs: {
      "src": _vm.column.photo
    }
  }), _c('text', {
    staticClass: ["town-title"]
  }, [_vm._v(_vm._s(_vm.column.columnName))]), _c('div', {
    staticClass: ["sub-info"]
  }, [_c('text', {
    staticClass: ["sub-title"]
  }, [_vm._v(_vm._s(_vm.column.subTitle))]), _c('text', {
    staticClass: ["sub-distance"]
  }, [_vm._v(_vm._s(_vm.column.subDesc))])]), _c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": _vm.deitalArrow
    }
  })])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(23)
)

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(25)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zwj/Develop-Project/TownWeex/src/components/loadingx.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-737e54cc"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {
  "loading": {
    "alignItems": "center",
    "backgroundColor": "#FFFFFF"
  },
  "loading-pic": {
    "width": "160",
    "height": "160",
    "marginTop": "367",
    "marginBottom": "40"
  },
  "loading-tip": {
    "color": "#ff814b",
    "fontSize": "28"
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cdnurl = __webpack_require__(0);

exports.default = {
  props: {
    tip: {
      type: String,
      default: '加载中...'
    }
  },

  data: function data() {
    return {
      // windowHeight,
      loadingIcon: _cdnurl.iLoadingBig$gif
    };
  }
}; //
//
//
//
//
//
//

// import { windowHeight } from '@/common/utils.js';

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["loading"]
  }, [_c('image', {
    staticClass: ["loading-pic"],
    attrs: {
      "src": _vm.loadingIcon,
      "quality": "original"
    }
  }), _c('text', {
    staticClass: ["loading-tip"]
  }, [_vm._v(_vm._s(_vm.tip))])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(43);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(44)
)

/* script */
__vue_exports__ = __webpack_require__(45)

/* template */
var __vue_template__ = __webpack_require__(46)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/zwj/Develop-Project/TownWeex/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "backgroundColor": "#FFFFFF"
  },
  "wrapper-iphone": {
    "paddingTop": "128"
  },
  "wrapper-iphoneX": {
    "paddingTop": "176",
    "paddingBottom": "68"
  },
  "wrapper-android": {
    "paddingTop": "128"
  },
  "wrapper-web": {
    "paddingTop": "98"
  },
  "list": {
    "backgroundColor": "#FFFFFF"
  },
  "navbar-wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadingx = __webpack_require__(22);

var _loadingx2 = _interopRequireDefault(_loadingx);

var _error = __webpack_require__(14);

var _error2 = _interopRequireDefault(_error);

var _indexSlider = __webpack_require__(10);

var _indexSlider2 = _interopRequireDefault(_indexSlider);

var _indexListItem = __webpack_require__(18);

var _indexListItem2 = _interopRequireDefault(_indexListItem);

var _navbar = __webpack_require__(6);

var _navbar2 = _interopRequireDefault(_navbar);

var _utils = __webpack_require__(1);

var _cdnurl = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var navigator = weex.requireModule('navigator');
var stream = weex.requireModule('stream') || {};

exports.default = {
  name: 'app',
  components: {
    loadingx: _loadingx2.default,
    error: _error2.default,
    indexSlider: _indexSlider2.default,
    indexListItem: _indexListItem2.default,
    navbar: _navbar2.default
  },
  data: function data() {
    return {
      preLoading: true,
      hasError: false,
      navKind: _utils.navKind,
      items: [],
      photos: []
    };
  },

  created: function created() {
    this.getData();
    this.getPhotos();
  },
  methods: {
    getData: function getData() {
      var self = this;
      stream.fetch({
        method: 'GET',
        url: _cdnurl.columnListAPI + "1",
        type: 'json'
      }, function (ret) {
        self.preLoading = false;
        if (ret.data.resultCode == 200) {
          self.items = ret.data.data;
          self.items.forEach(function (element) {
            element.photo = _cdnurl.IPAddress + "/" + element.photo;
          });
        } else {
          modal.toast({
            message: ret.data.message,
            duration: 3
          });
          self.hasError = true;
        }
      });
    },
    getPhotos: function getPhotos() {
      var self = this;
      stream.fetch({
        method: 'GET',
        url: _cdnurl.sliderAPI,
        type: 'json'
      }, function (ret) {
        if (ret.data.resultCode == 200) {
          self.photos = ret.data.data;
          self.photos.forEach(function (element) {
            element.path = _cdnurl.IPAddress + "/" + element.path;
          });
        } else {
          modal.toast({
            message: ret.data.message,
            duration: 3
          });
        }
      });
    },
    jump: function jump(i) {
      var column = this.items[i];
      var page = encodeURI(_cdnurl.townPage + column.id + "&columnName=" + column.columnName);
      navigator.push({
        url: page,
        animated: "true"
      });
    }
  }
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', 'wrapper-' + _vm.navKind()]
  }, [(!_vm.preLoading && !_vm.hasError) ? _c('scroller', {
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('indexSlider', {
    attrs: {
      "photos": _vm.photos
    }
  }), _vm._l((_vm.items), function(column, i) {
    return _c('div', {
      key: column.id,
      staticClass: ["list"],
      on: {
        "click": function($event) {
          _vm.jump(i)
        }
      }
    }, [_c('indexListItem', {
      attrs: {
        "column": column
      }
    })], 1)
  }), _c('div', {
    staticClass: ["navbar-wrapper"]
  }, [_c('navbar', {
    attrs: {
      "pageTitle": "凤凰民俗"
    }
  })], 1)], 2) : _vm._e(), (_vm.preLoading) ? _c('loadingx') : _vm._e(), (_vm.hasError) ? _c('error', {
    attrs: {
      "tip": _vm.tip,
      "hasButton": _vm.hasButton,
      "icon": _vm.icon
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);