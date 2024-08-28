/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["YourPackageName"] = factory();
	else
		root["YourPackageName"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/animations.js":
/*!***************************!*\
  !*** ./src/animations.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fadeout: () => (/* binding */ fadeout)\n/* harmony export */ });\n\nfunction fadeout(element , duration) {\n    element.style.opacity = 1;\n    let intervel = duration/100;    \n    const intervalID =  setInterval(() => {\n        console.log(element.style.opacity)\n        element.style.opacity = parseFloat(element.style.opacity) - 0.01;\n        if(element.style.opacity <= 0){\n            clearInterval(intervalID)\n        }    \n        console.log(intervel);\n    },intervel)\n}\n\n//# sourceURL=webpack://YourPackageName/./src/animations.js?");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_animations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/animations.js */ \"./src/animations.js\");\n\n\nvar animationDetails = []\nconst animations = {\n  'fadein' : _src_animations_js__WEBPACK_IMPORTED_MODULE_0__.fadein,\n  'fadeout' : _src_animations_js__WEBPACK_IMPORTED_MODULE_0__.fadeout\n}\ndocument.addEventListener('DOMContentLoaded', () => {\n  const elements = document.querySelectorAll('[class*=\"oands\"]');\n  findAnimationDetails(elements);\n});\n\nfunction findAnimationDetails(DOMelements) {\n  DOMelements.forEach((currentElement) => {\n    const classNameList = [];\n    for (let className of currentElement.classList) {\n      if (className.startsWith('oands')) {\n        classNameList.push(className);\n      }\n    }\n    animationDetails.push({'classNameList' : classNameList});\n    routeAnimation(currentElement , classNameList);\n  });\n}\n\nfunction routeAnimation(currentDOMelement , classNameList){\n  classNameList.forEach((className) => {\n    try{\n      animations[className.split('-')[1].toLowerCase()](currentDOMelement, 3000);\n    }\n    catch{\n      console.log(`no animations found for class name \"${className.split('-')[1]}\"` )\n    }\n  })\n}\n\n// function fadein(){\n//   console.log('redirected succewsfully')\n// }\n\n//# sourceURL=webpack://YourPackageName/./utils/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./utils/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});