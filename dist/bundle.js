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

/***/ "./src/cubic-bizer.js":
/*!****************************!*\
  !*** ./src/cubic-bizer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateOpacityValues: () => (/* binding */ generateOpacityValues)\n/* harmony export */ });\nfunction cubicBezier(t, p1x, p1y, p2x, p2y) {\n    const cX = 3 * p1x;\n    const bX = 3 * (p2x - p1x) - cX;\n    const aX = 1 - cX - bX;\n\n    const cY = 3 * p1y;\n    const bY = 3 * (p2y - p1y) - cY;\n    const aY = 1 - cY - bY;\n\n    const x = ((aX * t + bX) * t + cX) * t;\n    const y = ((aY * t + bY) * t + cY) * t;\n\n    return y;\n}\n\nfunction generateOpacityValues(p1x, p1y, p2x, p2y) {\n    const values = [];\n    const steps = 100; // Number of values\n\n    for (let i = 0; i < steps; i++) {\n        const t = i / (steps - 1); // Progress from 0 to 1\n        const easedValue = cubicBezier(t, p1x, p1y, p2x, p2y);\n        values.push(easedValue);\n    }\n\n    return values;\n}\n\n\n//# sourceURL=webpack://YourPackageName/./src/cubic-bizer.js?");

/***/ }),

/***/ "./src/fade.js":
/*!*********************!*\
  !*** ./src/fade.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fadeout: () => (/* binding */ fadeout)\n/* harmony export */ });\n/* harmony import */ var _cubic_bizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cubic-bizer */ \"./src/cubic-bizer.js\");\n\n\nfunction fadeout(element , duration) {\n    let timing  = (0,_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.generateOpacityValues)(0.000, 1.330, 1.000, 0.025);\n    console.log(timing[90])\n    element.style.opacity = 1;\n    let intervel = duration/100;    \n    const intervalID =  setInterval(() => {\n        element.style.opacity = parseFloat(element.style.opacity) - timing[intervel];\n        if(element.style.opacity <= 0){\n            clearInterval(intervalID)\n        }    \n    },intervel)\n};\n\n\nconst element = document.querySelector('.box');\nconst ease = (t) => t < 0.5 ? (4 * t * t * t) : ((t - 1) * (2 * t - 2) * (2 * t - 2) + 1); // ease\nconst easeInQuad = (t) => t * t; // ease-in\nconst easeOutQuad = (t) => t * (2 - t); // ease-out\nconst easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // ease-in-out\nvar duration = 3000;\nfadeIn(element, duration, easeInOutQuad);\n\nfunction fadeIn(element, duration, timingFunction) {\n    if(timingFunction) {\n        let startTime = null;\n        function animate(currentTime) {\n            if (!startTime) startTime = currentTime;\n            const elapsed = currentTime - startTime;\n            const progress = Math.min(elapsed / duration, 1); // Ensure progress doesn't exceed 1\n            const easedProgress = timingFunction(progress); // Apply easing to the progress\n            element.style.opacity = easedProgress;\n            if (progress < 1) {\n                requestAnimationFrame(animate); // Continue animating\n            } else {\n                element.style.opacity = 1; // Ensure it ends fully visible\n            }\n        }\n        requestAnimationFrame(animate); // Start the animation\n    }\n    else {\n        //fade In linear timing function when timing function is not given\n        let opacity = 0;\n        const increment = 1 / (duration / 16.66); // 16.66ms per frame for 60fps\n        function animate() {\n            opacity += increment;\n            element.style.opacity = opacity;\n    \n            if (opacity < 1) {\n                requestAnimationFrame(animate);\n            } else {\n                element.style.opacity = 1;\n            }\n        }\n        animate();\n    }\n}\n\n\n\n\n//# sourceURL=webpack://YourPackageName/./src/fade.js?");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_fade_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/fade.js */ \"./src/fade.js\");\n\n\nvar animationDetails = []\nconst animations = {\n  'fadein' : _src_fade_js__WEBPACK_IMPORTED_MODULE_0__.fadein,\n  'fadeout' : _src_fade_js__WEBPACK_IMPORTED_MODULE_0__.fadeout\n}\ndocument.addEventListener('DOMContentLoaded', () => {\n  const elements = document.querySelectorAll('[class*=\"oands\"]');\n  findAnimationDetails(elements);\n});\n\nfunction findAnimationDetails(DOMelements) {\n  DOMelements.forEach((currentElement) => {\n    const classNameList = [];\n    for (let className of currentElement.classList) {\n      if (className.startsWith('oands')) {\n        classNameList.push(className);\n      }\n    }\n    animationDetails.push({'classNameList' : classNameList});\n    routeAnimation(currentElement , classNameList);\n  });\n}\n\nfunction routeAnimation(currentDOMelement , classNameList){\n  classNameList.forEach((className) => {\n    try{\n      animations[className.split('-')[1].toLowerCase()](currentDOMelement, 3000);\n    }\n    catch{\n      console.log(`no animations found for class name \"${className.split('-')[1]}\"` )\n    }\n  })\n}\n\n// function fadein(){\n//   console.log('redirected succewsfully')\n// }\n\n//# sourceURL=webpack://YourPackageName/./utils/index.js?");

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