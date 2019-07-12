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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
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
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
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
__vue_options__.__file = "/Users/zwj/Develop-Project/TownWeex/src/components/town-list-item.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3527b812"
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
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "item": {
    "width": "750",
    "height": "200",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "sub-item": {
    "width": "50",
    "height": "180",
    "backgroundColor": "rgb(200,64,64)",
    "borderTopRightRadius": "12",
    "borderBottomRightRadius": "12",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "sub-title": {
    "color": "#FFFFFF",
    "fontSize": "26",
    "fontWeight": "bold",
    "textAlign": "center",
    "maxHeight": "160",
    "maxWidth": "40"
  },
  "sub-summary": {
    "position": "absolute",
    "left": "80",
    "right": "220"
  },
  "summary": {
    "color": "#000000",
    "fontSize": "28",
    "lines": 4,
    "maxHeight": "180"
  },
  "sub-image": {
    "position": "absolute",
    "right": "15",
    "width": "175",
    "height": "180"
  },
  "bottom-line": {
    "position": "absolute",
    "height": "1",
    "bottom": "1",
    "left": "13",
    "right": 0,
    "backgroundColor": "#000000"
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cdnurl = __webpack_require__(0);

exports.default = {
  props: ['article']
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

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["item"]
  }, [_c('div', {
    staticClass: ["sub-item"]
  }, [_c('text', {
    staticClass: ["sub-title"]
  }, [_vm._v(_vm._s(_vm.article.articleTitle))])]), _c('div', {
    staticClass: ["sub-summary"]
  }, [_c('text', {
    staticClass: ["summary"]
  }, [_vm._v(_vm._s(_vm.article.content))])]), _c('image', {
    staticClass: ["sub-image"],
    attrs: {
      "src": _vm.article.photo,
      "resize": "stretch"
    }
  }), _c('div', {
    staticClass: ["bottom-line"]
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
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
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _town = __webpack_require__(48);

var _town2 = _interopRequireDefault(_town);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_town2.default.el = '#root';
new Vue(_town2.default);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(49)
)

/* script */
__vue_exports__ = __webpack_require__(50)

/* template */
var __vue_template__ = __webpack_require__(51)
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
__vue_options__.__file = "/Users/zwj/Develop-Project/TownWeex/src/town.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0fc3d2eb"
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
/* 49 */
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexSlider = __webpack_require__(10);

var _indexSlider2 = _interopRequireDefault(_indexSlider);

var _townListItem = __webpack_require__(26);

var _townListItem2 = _interopRequireDefault(_townListItem);

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

var navigator = weex.requireModule('navigator');
var stream = weex.requireModule('stream') || {};

exports.default = {
  components: {
    indexSlider: _indexSlider2.default,
    townListItem: _townListItem2.default,
    navbar: _navbar2.default
  },
  data: function data() {
    return {
      navKind: _utils.navKind,
      columnId: _utils.urlParams.columnId,
      columnName: _utils.urlParams.columnName,
      articles: []
    };
  },

  created: function created() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var self = this;
      stream.fetch({
        method: 'GET',
        url: _cdnurl.articleListAPI + self.columnId,
        type: 'json'
      }, function (ret) {
        if (ret.data.resultCode == 200) {
          self.articles = ret.data.data;
          self.articles.forEach(function (element) {
            element.photo = _cdnurl.IPAddress + "/" + element.photo;
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
      var article = this.articles[i];
      var page = encodeURI(_cdnurl.detailPage + article.id + "&articleTitle=" + article.articleTitle);
      navigator.push({
        url: page,
        animated: "true"
      });
    }
  }
};

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wrapper', 'wrapper-' + _vm.navKind()]
  }, [_c('list', {
    staticClass: ["list"],
    attrs: {
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.articles), function(article, i) {
    return _c('cell', {
      key: article.id,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      },
      on: {
        "click": function($event) {
          _vm.jump(i)
        }
      }
    }, [_c('townListItem', {
      attrs: {
        "article": article
      }
    })], 1)
  })), _c('div', {
    staticClass: ["navbar-wrapper"]
  }, [_c('navbar', {
    attrs: {
      "showGoBack": "true",
      "pageTitle": _vm.columnName
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);