(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/card/list/index.ux?uxType=page");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/load-more/index.ux?uxType=comp":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/load-more/index.ux?uxType=comp ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".load-more": {
    "height": "60px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".load-more text": {
    "height": "30px",
    "fontSize": "25px",
    "lineHeight": "30px",
    "marginLeft": "8px",
    "color": "#495060",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".load-more .load-more-loading": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more-loading"
        }
      ]
    }
  },
  ".load-more .load-nomore": {
    "width": "80%",
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-nomore"
        }
      ]
    }
  },
  ".load-more .load-nomore .content": {
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-nomore"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        }
      ]
    }
  },
  ".load-more .load-nomore .content .image": {
    "height": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-nomore"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "image"
        }
      ]
    }
  },
  ".load-more .load-nomore .content .line": {
    "height": "1px",
    "backgroundColor": "#dddee1",
    "flex": 1,
    "marginTop": "0px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-more"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "load-nomore"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "line"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/loading/index.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/loading/index.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".wrap_loading": {
    "position": "fixed",
    "top": "0px",
    "bottom": "0px",
    "right": "0px",
    "left": "0px",
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".wrap_loading .content": {
    "flexDirection": "column",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_loading"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        }
      ]
    }
  },
  ".wrap_loading .content image": {
    "width": "250px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_loading"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "content"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/minplay/index.ux?uxType=comp":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/minplay/index.ux?uxType=comp ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page_container": {
    "flexDirection": "column",
    "height": "100%"
  },
  "@KEYFRAMES": {
    "rotate": [
      {
        "transform": "{\"rotate\":\"10deg\"}",
        "time": 0
      },
      {
        "transform": "{\"rotate\":\"360deg\"}",
        "time": 100
      }
    ],
    "bottomdrawerenter": [
      {
        "transform": "{\"translateY\":\"236px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateY\":\"0px\"}",
        "time": 100
      }
    ]
  },
  "text": {
    "color": "#000000"
  },
  ".minPlay_container": {
    "width": "76px",
    "height": "76px",
    "position": "fixed",
    "borderRadius": "38px",
    "bottom": "160px",
    "right": "25px",
    "zIndex": 1,
    "backgroundColor": "#ffffff",
    "transform": "{\"translateY\":\"236px\"}"
  },
  ".minPlay_container image": {
    "width": "100%",
    "height": "100%",
    "borderRadius": "38px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "minPlay_container"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".minPlay-show": {
    "animationName": "bottomdrawerenter",
    "animationFillMode": "forwards",
    "animationDuration": "300ms",
    "animationTimingFunction": "linear"
  },
  ".musicisplay": {
    "animationName": "rotate",
    "animationDuration": "3000ms",
    "animationTimingFunction": "linear",
    "animationIterationCount": -1
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/card/list/index.ux?uxType=page":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/card/list/index.ux?uxType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page_container": {
    "flexDirection": "column",
    "height": "100%"
  },
  "@KEYFRAMES": {
    "rotate": [
      {
        "transform": "{\"rotate\":\"10deg\"}",
        "time": 0
      },
      {
        "transform": "{\"rotate\":\"360deg\"}",
        "time": 100
      }
    ]
  },
  "text": {
    "color": "#000000"
  },
  ".list_page": {
    "backgroundColor": "#f4f4f4"
  },
  ".list_wrap .item_container": {
    "flex": 1,
    "height": "196px",
    "paddingTop": "4px",
    "paddingRight": "30px",
    "paddingBottom": "12px",
    "paddingLeft": "30px",
    "marginTop": "4px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "backgroundImage": "/common/image/list-item-bg.png",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item_container"
        }
      ]
    }
  },
  ".list_wrap .item": {
    "flex": 1,
    "backgroundColor": "#ffffff",
    "backgroundSize": "cover",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        }
      ]
    }
  },
  ".list_wrap .item .wrap_img": {
    "width": "140px",
    "height": "140px",
    "marginRight": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_img"
        }
      ]
    }
  },
  ".list_wrap .item .wrap_img .img": {
    "width": "100%",
    "height": "100%",
    "backgroundColor": "#f4f4f4",
    "backgroundSize": "cover",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "img"
        }
      ]
    }
  },
  ".list_wrap .item .wrap_img .count_box": {
    "height": "30px",
    "marginTop": "10px",
    "paddingTop": "0px",
    "paddingRight": "6px",
    "paddingBottom": "0px",
    "paddingLeft": "10px",
    "borderTopRightRadius": "15px",
    "borderBottomRightRadius": "15px",
    "backgroundColor": "rgba(0,0,0,0.5)",
    "fontSize": "20px",
    "justifyContent": "center",
    "alignItems": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "count_box"
        }
      ]
    }
  },
  ".list_wrap .item .wrap_img .count_box .icon": {
    "backgroundSize": "cover",
    "height": "20px",
    "width": "20px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "count_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "icon"
        }
      ]
    }
  },
  ".list_wrap .item .wrap_img .count_box .num": {
    "color": "#ffffff",
    "fontSize": "20px",
    "marginLeft": "8px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "wrap_img"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "count_box"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "num"
        }
      ]
    }
  },
  ".list_wrap .item .video_img": {
    "width": "210px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "video_img"
        }
      ]
    }
  },
  ".list_wrap .item .desc": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc"
        }
      ]
    }
  },
  ".list_wrap .item .desc .title": {
    "height": "40px",
    "lineHeight": "40px",
    "marginBottom": "10px",
    "fontSize": "28px",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "title"
        }
      ]
    }
  },
  ".list_wrap .item .desc .text": {
    "height": "40px",
    "lineHeight": "40px",
    "fontSize": "28px",
    "color": "#aaaaaa",
    "lines": 1,
    "textOverflow": "ellipsis",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "item"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text"
        }
      ]
    }
  },
  ".list_wrap .first_item": {
    "marginTop": "12px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list_wrap"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "first_item"
        }
      ]
    }
  }
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/load-more/index.ux?uxType=comp&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/load-more/index.ux?uxType=comp& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "block",
  "attr": {},
  "children": [
    {
      "type": "list-item",
      "attr": {
        "type": "loadMore"
      },
      "classList": [
        "load-more"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "load-more-loading"
          ],
          "shown": function () {return this.hasMore},
          "children": [
            {
              "type": "progress",
              "attr": {
                "type": "circular"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "玩命加载中..."
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "load-nomore"
          ],
          "shown": function () {return (!this.hasMore)&&!(this.hasMore)},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "line"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "content"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": "/common/image/nomore.png"
                  }
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "汪～木有了！"
                  }
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "line"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/loading/index.ux?uxType=comp&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/loading/index.ux?uxType=comp& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "wrap_loading"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "content"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "http://c2.h54hterh.top/manage/thumbnail/7d4d21c0f604ccc7f984c4950265cc03.gif"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/minplay/index.ux?uxType=comp&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/minplay/index.ux?uxType=comp& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "block",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "minPlay_container",
        "minPlay-show"
      ],
      "shown": function () {return this.visible},
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/common/image/music4.svg"
          },
          "classList": function () {return [this.isplaying?'musicisplay':'']},
          "events": {
            "click": "open"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/card/list/index.ux?uxType=page&importNames[]=loading-view,importNames[]=min-play,importNames[]=load-more":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/card/list/index.ux?uxType=page&importNames[]=loading-view,importNames[]=min-play,importNames[]=load-more ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "list_page",
    "page_container"
  ],
  "children": [
    {
      "type": "refresh",
      "attr": {
        "refreshing": function () {return this.isRefresh}
      },
      "events": {
        "refresh": "onPullDownRefresh"
      },
      "children": [
        {
          "type": "list",
          "attr": {},
          "shown": function () {return this.list.length},
          "classList": [
            "list_wrap"
          ],
          "events": {
            "scrollbottom": "loadMoreData"
          },
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": {
                "exp": function () {return this.list},
                "key": "index",
                "value": "item"
              },
              "children": [
                {
                  "type": "list-item",
                  "attr": {
                    "type": "product"
                  },
                  "classList": [
                    "content-item"
                  ],
                  "events": {
                    "click": function (evt) {this.bindViewTap(this.item.album,evt)}
                  },
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": function () {return ['item_container', this.index===0?'first_item':'']},
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "item"
                          ],
                          "children": [
                            {
                              "type": "stack",
                              "attr": {},
                              "classList": function () {return ['wrap_img', this.item.album.type==='video'?'video_img':'']},
                              "children": [
                                {
                                  "type": "image",
                                  "attr": {
                                    "src": function () {return this.item.album.thumbnail?this.item.album.thumbnail:this.item.album.image}
                                  },
                                  "classList": [
                                    "img"
                                  ]
                                },
                                {
                                  "type": "div",
                                  "attr": {},
                                  "classList": [
                                    "count_box"
                                  ],
                                  "children": [
                                    {
                                      "type": "image",
                                      "attr": {
                                        "src": function () {return this.item.album.type==='video'?'/common/image/video.svg':'/common/image/music.svg'}
                                      },
                                      "classList": [
                                        "icon"
                                      ]
                                    },
                                    {
                                      "type": "div",
                                      "attr": {},
                                      "classList": function () {return [this.item.album.type==='video'?'icon-play':'icon-music2']}
                                    },
                                    {
                                      "type": "text",
                                      "attr": {
                                        "value": function () {return '' + (this.item.album.item_count) + (this.item.album.type==='video'?'集':'首')}
                                      },
                                      "classList": [
                                        "num"
                                      ]
                                    }
                                  ]
                                }
                              ]
                            },
                            {
                              "type": "div",
                              "attr": {},
                              "classList": [
                                "desc"
                              ],
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.item.album.album_name}
                                  },
                                  "classList": [
                                    "title"
                                  ]
                                },
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.item.album.description}
                                  },
                                  "classList": [
                                    "text"
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "load-more",
              "attr": {
                "hasMore": function () {return this.hasMore}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "loading-view",
      "attr": {},
      "shown": function () {return !this.list.length}
    },
    {
      "type": "min-play",
      "attr": {
        "isplaying": function () {return this.isplaying}
      },
      "shown": function () {return this.minplayVisible}
    }
  ]
}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/card/list/index.ux?uxType=page":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/card/list/index.ux?uxType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _list = __webpack_require__(/*! ../../../api/list */ "./src/api/list.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  "protected": {
    title: '',
    label: ''
  },
  "private": {
    isplaying: true,
    minplayVisible: false,
    isLoading: false,
    hasMore: false,
    page_size: 15,
    page_no: 1,
    isRefresh: false,
    list: []
  },
  onInit: function onInit() {
    this.audio = this.$app.$def.audio;
    this.$page.setTitleBar({
      text: decodeURIComponent(this.title)
    });
    this.getList('down');
  },
  onShow: function onShow() {
    $umeng_stat.resume(this);
    this.$app.$def.audioShow.call(this);
  },
  onHide: function onHide() {
    this.$app.$def.audioHide.call(this);
    $umeng_stat.pause(this);
  },
  onDestroy: function onDestroy() {
    this.$app.$def.audioHide.call(this);
  },
  getList: function () {
    var _getList = _asyncToGenerator(regeneratorRuntime.mark(function _callee(type) {
      var _this = this;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (type === 'down') {
                this.page_no = 1;
              }

              this.isLoading = true;
              _context.next = 4;
              return (0, _list.getData)(this.label, this.page_no, this.page_size).then(function (res) {
                _this.isLoading = false;
                _this.page_no++;

                if (res.data.length) {
                  _this.hasMore = true;
                  type === 'down' ? _this.list = res.data : _this.list = _this.list.concat(res.data);
                } else {
                  _this.hasMore = false;
                }
              })["catch"](function (res) {
                _this.isLoading = false;
                _this.isRefresh = false;

                _this.$app.$def.prompt.showToast({
                  message: '服务器异常,一会再试试！'
                });
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function getList(_x) {
      return _getList.apply(this, arguments);
    }

    return getList;
  }(),
  bindViewTap: function bindViewTap(option) {
    var uri = '';

    if (option.type === 'video') {
      uri = "/pages/album/video";
    } else if (option.type === 'audio') {
      uri = "/pages/album/audio";
    }

    this.$app.$def.router.push({
      uri: uri,
      params: {
        album_id: option.album_id,
        title: option.album_name
      }
    });
  },
  onPullDownRefresh: function onPullDownRefresh(e) {
    var _this2 = this;

    this.isRefresh = true;
    this.getList('down').then(function () {
      _this2.isRefresh = false;

      _this2.$app.$def.prompt.showToast({
        message: '数据更新成功'
      });
    });
  },
  loadMoreData: function loadMoreData() {
    if (this.isLoading && !this.hasMore) {
      return;
    }

    this.getList('up');
  },
  onMenuPress: function onMenuPress() {
    this.$app.$def.showMenu();
  }
};
exports["default"] = _default;
var moduleOwn = exports["default"] || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/load-more/index.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/load-more/index.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    hasMore: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {};
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/loading/index.ux?uxType=comp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/loading/index.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {},
  data: function data() {
    return {};
  },
  onInit: function onInit() {}
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/minplay/index.ux?uxType=comp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/minplay/index.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  props: {
    isplaying: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      visible: false
    };
  },
  onInit: function onInit() {
    if (this.$app.$def.musicData.list.length) {
      this.visible = true;
    }
  },
  open: function open() {
    this.$app.$def.router.push({
      uri: '/pages/play'
    });
  }
};
exports["default"] = _default;}

/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/load-more/index.ux?uxType=comp&name=load-more":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/load-more/index.ux?uxType=comp&name=load-more ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/load-more/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/load-more/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/load-more/index.ux?uxType=comp")

$app_define$('@app-component/load-more', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/loading/index.ux?uxType=comp&name=loading-view":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/loading/index.ux?uxType=comp&name=loading-view ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/loading/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/loading/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/loading/index.ux?uxType=comp")

$app_define$('@app-component/loading-view', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/minplay/index.ux?uxType=comp&name=min-play":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/minplay/index.ux?uxType=comp&name=min-play ***!
  \*************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/components/minplay/index.ux?uxType=comp&")
var $app_style$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/components/minplay/index.ux?uxType=comp")
var $app_script$ = __webpack_require__(/*! !../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/components/minplay/index.ux?uxType=comp")

$app_define$('@app-component/min-play', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ "./src/api/list.js":
/*!*************************!*\
  !*** ./src/api/list.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = getData;

function getData(label) {
  var page_no = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var page_size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var params = {
    page_no: page_no,
    page_size: page_size,
    label: label
  };
  return $http.get('/v1/card_list', params);
}

/***/ }),

/***/ "./src/pages/card/list/index.ux?uxType=page":
/*!**************************************************!*\
  !*** ./src/pages/card/list/index.ux?uxType=page ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../../components/loading/index.ux?uxType=comp&name=loading-view */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/loading/index.ux?uxType=comp&name=loading-view")
__webpack_require__(/*! !../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../../components/minplay/index.ux?uxType=comp&name=min-play */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/minplay/index.ux?uxType=comp&name=min-play")
__webpack_require__(/*! !../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!../../../components/load-more/index.ux?uxType=comp&name=load-more */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/ux-loader.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&type=import!./src/components/load-more/index.ux?uxType=comp&name=load-more")
var $app_template$ = __webpack_require__(/*! !../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=loading-view,importNames[]=min-play,importNames[]=load-more */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/template-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=template!./src/pages/card/list/index.ux?uxType=page&importNames[]=loading-view,importNames[]=min-play,importNames[]=load-more")
var $app_style$ = __webpack_require__(/*! !../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!less-loader!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/json-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=style!./src/pages/card/list/index.ux?uxType=page")
var $app_script$ = __webpack_require__(/*! !../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!../../../../node_modules/babel-loader?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!../../../../node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "./node_modules/@hap-toolkit/dsl-xvm/lib/loader/script-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/module-loader.js!./node_modules/babel-loader/lib/index.js?cwd=/Users/lijun/Downloads/complaint/babySongQuickapp&plugins[]=/Users/lijun/Downloads/complaint/babySongQuickapp/node_modules/@hap-toolkit/dsl-xvm/lib/loader/babel-plugin-jsx.js&comments=false!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/access-loader.js!./node_modules/@hap-toolkit/dsl-xvm/lib/loader/fragment-loader.js?index=0&type=script!./src/pages/card/list/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.4.3'})


/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map