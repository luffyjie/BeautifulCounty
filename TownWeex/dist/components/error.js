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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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

/***/ 14:
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

/***/ 15:
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

/***/ 16:
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

/***/ 17:
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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _error = __webpack_require__(14);

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_error2.default.el = '#root';
new Vue(_error2.default);

/***/ })

/******/ });