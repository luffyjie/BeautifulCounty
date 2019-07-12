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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 1:
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

/***/ 2:
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

/***/ 3:
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _goBack = __webpack_require__(2);

var _goBack2 = _interopRequireDefault(_goBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_goBack2.default.el = '#root';
new Vue(_goBack2.default);

/***/ }),

/***/ 4:
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

/***/ 5:
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

/***/ })

/******/ });