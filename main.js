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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  -webkit-box-sizing: inherit;\\n  -moz-box-sizing: inherit;\\n  box-sizing: inherit;\\n}\\n\\nbody {\\n  font-size: 10px;\\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\n  text-align: center;\\n}\\n\\nheader {\\n  border-top: 0.5em solid black;\\n  border-left: 0.5em solid black;\\n  border-right: 0.5em solid black;\\n  border-bottom: none;\\n  max-width: 500px;\\n  margin: 5% auto 0 auto;\\n  padding: 1em;\\n  font-size: 2em;\\n}\\n\\nmain {\\n  border: 0.5em solid black;\\n  max-width: 500px;\\n  margin: 0 auto 0 auto;\\n  padding: 1em;\\n  font-size: 2em;\\n}\\n\\nh1 {\\n  margin: 0;\\n}\\n\\np {\\n  padding: 0.5em;\\n}\\n\\n.search {\\n  border: 0.5em solid black;\\n  padding: 1em;\\n  display: flex;\\n}\\n\\ninput {\\n  width: 100%;\\n  border: 0.5em solid black;\\n}\\n\\nselect {\\n  border: 0.5em solid black;\\n}\\n\\n.option-none {\\n  display: none;\\n}\\n\\n.main-weather {\\n  border: 0.5em solid black;\\n  margin-top: 0.5em;\\n  padding: 1em;\\n}\\n\\n.description {\\n  border: 0.5em solid black;\\n}\\n\\nsection {\\n  border: 0.5em solid black;\\n  padding: 1em;\\n  display: flex;\\n}\\n\\n.icon {\\n  border: 0.5em solid black;\\n  flex: 1;\\n  height: 5em;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\nimg {\\n  width: 4em;\\n  margin: auto;\\n}\\n\\n.temperature {\\n  border: 0.5em solid black;\\n  flex: 1;\\n  height: 5em;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.location {\\n  border: 0.5em solid black;\\n}\\n\\n.date {\\n  border: 0.5em solid black;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/icons/a_01d.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_01d.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_01d.e802a9f70d731d2fd2f448c5d035bb9b.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_01d.png?");

/***/ }),

/***/ "./src/assets/icons/a_01n.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_01n.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_01n.cdbce7e3996f9609219f42a084ac233a.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_01n.png?");

/***/ }),

/***/ "./src/assets/icons/a_02d.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_02d.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_02d.18dc023e509e4727794ea1ef8193dcf9.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_02d.png?");

/***/ }),

/***/ "./src/assets/icons/a_02n.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_02n.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_02n.956d99d7047f2c061bf03c7de1d26e24.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_02n.png?");

/***/ }),

/***/ "./src/assets/icons/a_03d.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_03d.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_03d.9ce18f766ecb176097b800d2d4c36f4c.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_03d.png?");

/***/ }),

/***/ "./src/assets/icons/a_03n.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_03n.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_03n.cc81a50e8e6604dfe000f49dc98e5c8b.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_03n.png?");

/***/ }),

/***/ "./src/assets/icons/a_04d.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_04d.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_04d.d69fd8c352955f7d7ea3c2b4740b42cb.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_04d.png?");

/***/ }),

/***/ "./src/assets/icons/a_04n.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_04n.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_04n.d69fd8c352955f7d7ea3c2b4740b42cb.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_04n.png?");

/***/ }),

/***/ "./src/assets/icons/a_09d.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_09d.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_09d.651e07809f6d252af7c49cafa2e69b9d.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_09d.png?");

/***/ }),

/***/ "./src/assets/icons/a_09n.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_09n.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_09n.651e07809f6d252af7c49cafa2e69b9d.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_09n.png?");

/***/ }),

/***/ "./src/assets/icons/a_10d.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_10d.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_10d.4f8d3bcc2812c7b5d9c98e512afcc977.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_10d.png?");

/***/ }),

/***/ "./src/assets/icons/a_10n.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_10n.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_10n.4f8d3bcc2812c7b5d9c98e512afcc977.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_10n.png?");

/***/ }),

/***/ "./src/assets/icons/a_11d.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_11d.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_11d.9500f729939001d86d1166f435e5fd86.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_11d.png?");

/***/ }),

/***/ "./src/assets/icons/a_11n.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_11n.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_11n.9500f729939001d86d1166f435e5fd86.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_11n.png?");

/***/ }),

/***/ "./src/assets/icons/a_13d.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_13d.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_13d.939dc1c78a3e515af5bc8521599e16b3.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_13d.png?");

/***/ }),

/***/ "./src/assets/icons/a_13n.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_13n.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_13n.939dc1c78a3e515af5bc8521599e16b3.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_13n.png?");

/***/ }),

/***/ "./src/assets/icons/a_50d.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_50d.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_50d.66cd0f5e79266310836aa06bcf164535.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_50d.png?");

/***/ }),

/***/ "./src/assets/icons/a_50n.png":
/*!************************************!*\
  !*** ./src/assets/icons/a_50n.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/icons/a_50n.66cd0f5e79266310836aa06bcf164535.png\");\n\n//# sourceURL=webpack:///./src/assets/icons/a_50n.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/date */ \"./src/modules/date.js\");\n/* harmony import */ var _modules_setter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/setter */ \"./src/modules/setter.js\");\n/* harmony import */ var _assets_icons_a_01d_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/a_01d.png */ \"./src/assets/icons/a_01d.png\");\n/* harmony import */ var _assets_icons_a_01n_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/icons/a_01n.png */ \"./src/assets/icons/a_01n.png\");\n/* harmony import */ var _assets_icons_a_02d_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/icons/a_02d.png */ \"./src/assets/icons/a_02d.png\");\n/* harmony import */ var _assets_icons_a_02n_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/a_02n.png */ \"./src/assets/icons/a_02n.png\");\n/* harmony import */ var _assets_icons_a_03d_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/a_03d.png */ \"./src/assets/icons/a_03d.png\");\n/* harmony import */ var _assets_icons_a_03n_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/icons/a_03n.png */ \"./src/assets/icons/a_03n.png\");\n/* harmony import */ var _assets_icons_a_04d_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/icons/a_04d.png */ \"./src/assets/icons/a_04d.png\");\n/* harmony import */ var _assets_icons_a_04n_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/icons/a_04n.png */ \"./src/assets/icons/a_04n.png\");\n/* harmony import */ var _assets_icons_a_09d_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/icons/a_09d.png */ \"./src/assets/icons/a_09d.png\");\n/* harmony import */ var _assets_icons_a_09n_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/icons/a_09n.png */ \"./src/assets/icons/a_09n.png\");\n/* harmony import */ var _assets_icons_a_10d_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/icons/a_10d.png */ \"./src/assets/icons/a_10d.png\");\n/* harmony import */ var _assets_icons_a_10n_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/icons/a_10n.png */ \"./src/assets/icons/a_10n.png\");\n/* harmony import */ var _assets_icons_a_11d_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/icons/a_11d.png */ \"./src/assets/icons/a_11d.png\");\n/* harmony import */ var _assets_icons_a_11n_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/icons/a_11n.png */ \"./src/assets/icons/a_11n.png\");\n/* harmony import */ var _assets_icons_a_13d_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/icons/a_13d.png */ \"./src/assets/icons/a_13d.png\");\n/* harmony import */ var _assets_icons_a_13n_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/icons/a_13n.png */ \"./src/assets/icons/a_13n.png\");\n/* harmony import */ var _assets_icons_a_50d_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/icons/a_50d.png */ \"./src/assets/icons/a_50d.png\");\n/* harmony import */ var _assets_icons_a_50n_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/icons/a_50n.png */ \"./src/assets/icons/a_50n.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst weatherIcon = document.querySelector('.weather-icon');\nconst weatherDescription = document.querySelector('.description');\nconst temperatureBox = document.querySelector('.temperature');\nconst weatherLocation = document.querySelector('.location');\n\nconst setLocation = document.querySelector('.search');\nsetLocation.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const form = e.target;\n  const place = form.querySelector('input[name=\"place\"]').value;\n  const unit = form.querySelector('#unit option:checked').value;\n\n  Object(_modules_setter__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(place, unit).then(data => {\n    if (data.cod === '404') {\n      alert('no data for input location'); // eslint-disable-line no-alert\n    } else {\n      weatherIcon.src = `a_${data.weather[0].icon}`;\n      weatherDescription.innerHTML = data.weather[0].description;\n      temperatureBox.innerHTML = `${data.main.temp}&#xb0`;\n      weatherLocation.innerHTML = Object(_modules_date__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data.name, data.timezone);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/date.js":
/*!*****************************!*\
  !*** ./src/modules/date.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return getDate; });\nfunction getDate(city, offset) {\n  const date = new Date();\n  const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 1000);\n  const nd = new Date(utc + (1000 * offset));\n  return `${city}'s date is ${nd.toLocaleString()}`;\n}\n\n//# sourceURL=webpack:///./src/modules/date.js?");

/***/ }),

/***/ "./src/modules/setter.js":
/*!*******************************!*\
  !*** ./src/modules/setter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return setter; });\nasync function setter(city, unit) {\n  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=886700da32110e4284daaccee7bdf897`, { mode: 'cors' });\n  const json = await response.json();\n  return json;\n}\n\n//# sourceURL=webpack:///./src/modules/setter.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });