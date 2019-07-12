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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _detail = __webpack_require__(38);

var _detail2 = _interopRequireDefault(_detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_detail2.default.el = '#root';
new Vue(_detail2.default);

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(39)
)

/* script */
__vue_exports__ = __webpack_require__(40)

/* template */
var __vue_template__ = __webpack_require__(41)
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
__vue_options__.__file = "/Users/zwj/Develop-Project/TownWeex/src/detail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c8f8462c"
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
/* 39 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "backgroundColor": "#FFFFFF",
    "paddingLeft": "30",
    "paddingRight": "30"
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
  "navbar-wrapper": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0
  },
  "slider": {
    "width": "750",
    "height": "260"
  },
  "sub-image": {
    "width": "750",
    "height": "260"
  },
  "indicator": {
    "position": "absolute",
    "bottom": 0,
    "right": 0,
    "width": "690",
    "height": "40",
    "itemColor": "#FFFFFF",
    "itemSelectedColor": "#FF0000",
    "itemSize": "12"
  },
  "sub-author": {
    "height": "80",
    "justifyContent": "center"
  },
  "author": {
    "textAlign": "right",
    "fontSize": "30",
    "color": "#000000"
  },
  "article": {
    "paddingTop": "20",
    "paddingBottom": "30"
  },
  "paragraph": {
    "lineHeight": "50",
    "color": "#000000",
    "fontSize": "30"
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
//
//
//
//
//
//
//
//

var stream = weex.requireModule('stream') || {};

exports.default = {
  components: {
    navbar: _navbar2.default
  },
  data: function data() {
    return {
      IPAddress: _cdnurl.IPAddress,
      navKind: _utils.navKind,
      articleId: _utils.urlParams.articleId,
      articleTitle: _utils.urlParams.articleTitle,
      article: {},
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
        url: _cdnurl.detailAPI + self.articleId,
        type: 'json'
      }, function (ret) {
        if (ret.data.resultCode == 200) {
          self.article = ret.data.data;
        } else {
          modal.toast({
            message: ret.data.message,
            duration: 3
          });
        }
      });
    },
    getPhotos: function getPhotos() {
      var self = this;
      stream.fetch({
        method: 'GET',
        url: _cdnurl.detailSliderAPI + self.articleId,
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
    }
  }
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    class: ['wrapper', 'wrapper-' + _vm.navKind()],
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('div', {
    staticClass: ["sub-author"]
  }, [_c('text', {
    staticClass: ["author"]
  }, [_vm._v("作者：" + _vm._s(_vm.article.articleAuthor))])]), _c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "false"
    }
  }, [_vm._l((_vm.photos), function(photo) {
    return _c('div', {
      key: photo.id
    }, [_c('image', {
      staticClass: ["sub-image"],
      attrs: {
        "src": photo.path,
        "resize": "stretch"
      }
    })])
  }), (_vm.photos.length > 1) ? [_c('indicator', {
    staticClass: ["indicator"]
  })] : _vm._e()], 2), _c('div', {
    staticClass: ["article"]
  }, [_c('div', {
    staticClass: ["main"]
  }, [_c('text', {
    staticClass: ["paragraph"]
  }, [_vm._v(_vm._s(_vm.article.content))])])]), _c('div', {
    staticClass: ["navbar-wrapper"]
  }, [_c('navbar', {
    attrs: {
      "showGoBack": "true",
      "pageTitle": _vm.articleTitle
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);