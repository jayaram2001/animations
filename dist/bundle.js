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

/***/ "./src/bounce.js":
/*!***********************!*\
  !*** ./src/bounce.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bounceinbottom: () => (/* binding */ bounceinbottom),\n/* harmony export */   bounceinleft: () => (/* binding */ bounceinleft),\n/* harmony export */   bounceinright: () => (/* binding */ bounceinright),\n/* harmony export */   bounceintop: () => (/* binding */ bounceintop)\n/* harmony export */ });\n/* harmony import */ var _utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubic-bizer */ \"./utils/cubic-bizer.js\");\n\n\n// Function to create and run the animation\nfunction bounceinright(element, duration, classNameList)  {\n\n    const keyframes = [\n      { opacity: 0, transform: 'translateX(100%)', offset: 0 },\n      { opacity: 1, transform: 'translateX(-10%)', offset: 0.6 },\n      { transform: 'translateX(10%)', offset: 0.8 },\n      { transform: 'translateX(0)', offset: 1 }\n    ];\n  \n    const options = {\n      duration: parseFloat(duration), // Animation duration in milliseconds\n      easing: (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.findAnimationTimingFunction)(classNameList).replaceAll( '/' , ',' ), // Easing function\n      fill: 'forwards' // Keeps the final state of the animation\n    };\n    return element.animate(keyframes, options);\n  }\n  \nfunction bounceintop(element, duration, classNameList)  {\n    const keyframes = [\n        { opacity: 0, transform: 'translateY(100%)', offset: 0 },\n        { opacity: 1, transform: 'translateY(-10%)', offset: 0.6 },\n        { transform: 'translateY(10%)', offset: 0.8 },\n        { transform: '(0)', offset: 1 }\n    ];\n  \n    const options = {\n      duration: parseFloat(duration), // Animation duration in milliseconds\n      easing: (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.findAnimationTimingFunction)(classNameList).replaceAll( '/' , ',' ), // Easing function\n      fill: 'forwards' // Keeps the final state of the animation\n    };\n    return element.animate(keyframes, options);\n  }\n\n// Function to create and run the animation\nfunction bounceinleft(element, duration, classNameList)  {\n    const keyframes = [\n      { opacity: 0, transform: 'translateX(-100%)', offset: 0 },\n      { opacity: 1, transform: 'translateX(10%)', offset: 0.6 },\n      { transform: 'translateX(-10%)', offset: 0.8 },\n      { transform: 'translateX(0)', offset: 1 }\n    ];\n  \n    const options = {\n      duration: parseFloat(duration), // Animation duration in milliseconds\n      easing: (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.findAnimationTimingFunction)(classNameList).replaceAll( '/' , ',' ), // Easing function\n      fill: 'forwards' // Keeps the final state of the animation\n    };\n  \n    return element.animate(keyframes, options);\n  }\n  \nfunction bounceinbottom(element, duration, classNameList)  {\n    const keyframes = [\n        { opacity: 0, transform: 'translateY(-100%)', offset: 0 },\n        { opacity: 1, transform: 'translateY(10%)', offset: 0.6 },\n        { transform: 'translateY(-10%)', offset: 0.8 },\n        { transform: '(0)', offset: 1 }\n    ];\n  \n    const options = {\n      duration: parseFloat(duration), // Animation duration in milliseconds\n      easing: (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.findAnimationTimingFunction)(classNameList).replaceAll( '/' , ',' ), // Easing function\n      fill: 'forwards' // Keeps the final state of the animation\n    };\n    return element.animate(keyframes, options);\n  }\n\n//# sourceURL=webpack://YourPackageName/./src/bounce.js?");

/***/ }),

/***/ "./src/fade.js":
/*!*********************!*\
  !*** ./src/fade.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fadein: () => (/* binding */ fadein),\n/* harmony export */   fadeout: () => (/* binding */ fadeout)\n/* harmony export */ });\n/* harmony import */ var _utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubic-bizer */ \"./utils/cubic-bizer.js\");\n/* harmony import */ var _utils_animation_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/animation-constant */ \"./utils/animation-constant.js\");\n// Import necessary functions from the cubic-bizer module\n\n\n\n\n\n/**\n * Executes a smooth fade-out animation on a given DOM element.\n *\n * @param {HTMLElement} element - The target element to apply the fade-out animation.\n * @param {number} duration - Duration of the fade-out animation in milliseconds.\n * @param {Array<string>} classNameList - List of class names that may contain animation timing functions.\n */\nfunction fadeout(element, duration, classNameList) {\n    // Determine the appropriate animation timing function from the provided class names.\n    let animationTimingFunction = (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.findAnimationTimingFunction)(classNameList);\n    \n    // Extract cubic-bezier control points, either from the class or a default configuration.\n    let cubicBeizerTiming = animationTimingFunction.includes('cubic-bezier') \n        ? (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.extractCubicBezier)(animationTimingFunction) \n        : (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.extractCubicBezier)(_utils_animation_constant__WEBPACK_IMPORTED_MODULE_1__.defaultAnimationTiming[animationTimingFunction]);\n    // Compute the interval duration by dividing the animation duration by the number of opacity steps (100).\n    let interval = duration / 100;\n    let index = 0;\n\n    // Generate a sequence of opacity values based on the cubic-bezier control points over a standard duration (1000ms).\n    var timing = (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.generateOpacityValues)(...cubicBeizerTiming, 1000);\n    \n    // Set the element's initial opacity to fully visible.\n    element.style.opacity = 1;\n\n    // Establish an interval that will gradually reduce the element's opacity.\n    const intervalID = setInterval(() => {\n        // Decrease the opacity based on the timing array value corresponding to the current index.\n        element.style.opacity = parseFloat(element.style.opacity) - (timing[index] / 1);\n        index += 1;\n        \n        // Terminate the interval if the opacity reaches or falls below a minimal threshold.\n        if (element.style.opacity <= 0 || element.style.opacity <= 0.001) {\n            clearInterval(intervalID);\n        }\n    }, interval);\n};\n\n/**\n * Executes a smooth fade-in animation on a given DOM element.\n *\n * @param {HTMLElement} element - The target element to apply the fade-in animation.\n * @param {number} duration - Duration of the fade-in animation in milliseconds.\n * @param {Array<string>} classNameList - List of class names that may contain animation timing functions.\n */\nfunction fadein(element, duration, classNameList) {\n    // Determine the appropriate animation timing function from the provided class names.\n    let animationTimingFunction = (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.findAnimationTimingFunction)(classNameList);\n    \n    // Extract cubic-bezier control points, either from the class or a default configuration.\n    let cubicBeizerTiming = animationTimingFunction.includes('cubic-bezier') \n        ? (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.extractCubicBezier)(animationTimingFunction) \n        : (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.extractCubicBezier)(_utils_animation_constant__WEBPACK_IMPORTED_MODULE_1__.defaultAnimationTiming[animationTimingFunction]);\n\n    // Compute the interval duration by dividing the animation duration by the number of steps (100).\n    let interval = duration / 100;\n    let index = 0;\n\n    // Generate a sequence of opacity values based on the cubic-bezier control points over a standard duration (1000ms).\n    var timing = (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.generateOpacityValues)(...cubicBeizerTiming, 1000);\n    \n    // Set the element's initial opacity to fully transparent.\n    element.style.opacity = 0;\n\n    // Establish an interval that will gradually increase the element's opacity.\n    const intervalID = setInterval(() => {\n        // Increase the opacity based on the timing array value corresponding to the current index.\n        element.style.opacity = parseFloat(element.style.opacity) + (timing[index] / 1);\n        index += 1;\n        \n        // Terminate the interval when the opacity reaches or exceeds 1.\n        if (index >= timing.length || element.style.opacity >= 1) {\n            element.style.opacity = 1; // Ensure final opacity is exactly 1.\n            clearInterval(intervalID);\n        }\n    }, interval);\n};\n\n//# sourceURL=webpack://YourPackageName/./src/fade.js?");

/***/ }),

/***/ "./src/rotate.js":
/*!***********************!*\
  !*** ./src/rotate.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   rotateleft: () => (/* binding */ rotateleft),\n/* harmony export */   rotateright: () => (/* binding */ rotateright)\n/* harmony export */ });\n/* harmony import */ var _utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubic-bizer */ \"./utils/cubic-bizer.js\");\n\n\n// Function to create and run an infinite rotation animation\nfunction rotateright(element, duration, classNameList) {\n\n  const keyframes = [\n    { transform: 'rotate(0deg)', offset: 0 },        // Initial state, no rotation\n    { transform: 'rotate(360deg)', offset: 1 }       // Final state, full 360-degree rotation\n  ];\n\n  const options = {\n    duration: parseFloat(duration), // Animation duration in milliseconds\n    easing: (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.findAnimationTimingFunction)(classNameList).replaceAll('/', ','), // Easing function\n    fill: 'forwards', // Keeps the final state of the animation\n    iterations: Infinity // Infinite looping of the animation\n  };\n\n  return element.animate(keyframes, options);\n}\n\nfunction rotateleft(element, duration, classNameList) {\n\n    const keyframes = [\n      { transform: 'rotate(0deg)', offset: 0 },        // Initial state, no rotation\n      { transform: 'rotate(-360deg)', offset: 1 }       // Final state, full 360-degree rotation\n    ];\n  \n    const options = {\n      duration: parseFloat(duration), // Animation duration in milliseconds\n      easing: (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.findAnimationTimingFunction)(classNameList).replaceAll('/', ','), // Easing function\n      fill: 'forwards', // Keeps the final state of the animation\n      iterations: Infinity // Infinite looping of the animation\n    };\n  \n    return element.animate(keyframes, options);\n  }\n  \n\n//# sourceURL=webpack://YourPackageName/./src/rotate.js?");

/***/ }),

/***/ "./src/slide.js":
/*!**********************!*\
  !*** ./src/slide.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   slidein: () => (/* binding */ slidein),\n/* harmony export */   slideout: () => (/* binding */ slideout)\n/* harmony export */ });\n/* harmony import */ var _utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubic-bizer */ \"./utils/cubic-bizer.js\");\n/* harmony import */ var _utils_animation_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/animation-constant */ \"./utils/animation-constant.js\");\n// Import necessary functions from the cubic-bezier module\n\n\n\n\n\n/**\n * Executes a smooth slide-in animation on a given DOM element from the left.\n *\n * @param {HTMLElement} element - The target element to apply the slide-in animation.\n * @param {number} duration - Duration of the slide-in animation in milliseconds.\n * @param {Array<string>} classNameList - List of class names that may contain animation timing functions.\n */\nfunction slidein(element, duration, classNameList) {\n    // Determine the appropriate animation timing function from the provided class names.\n    let animationTimingFunction = (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.findAnimationTimingFunction)(classNameList);\n    \n    // Extract cubic-bezier control points, either from the class or a default configuration.\n    let cubicBezierTiming = animationTimingFunction.includes('cubic-bezier') \n        ? (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.extractCubicBezier)(animationTimingFunction) \n        : (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.extractCubicBezier)(_utils_animation_constant__WEBPACK_IMPORTED_MODULE_1__.defaultAnimationTiming[animationTimingFunction]);\n\n    // Compute the interval duration by dividing the animation duration by the number of steps (100).\n    let interval = duration / 100;\n\n    //Initialize set interal index. \n    let index = 0;\n    \n    // Set the initial opacity of the element to 0.\n    element.style.opacity = 0;\n\n    // Generate a sequence of opacity values for the slide effect based on the cubic-bezier control points.\n    let timing = (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.generateOpacityValues)(...cubicBezierTiming, 1000);\n\n    // Set the element's initial position off-screen to the left.\n    element.style.transform = \"translateX(-100%)\";\n\n    //Initialize temprory value used to add and hold all previous values\n    let oldValue = 0;\n\n    // Establish an interval that will gradually change the element's position and opacity.\n    const intervalID = setInterval(() => {\n        // Compute the new position based on the timing array value corresponding to the current index.\n        oldValue += timing[index];\n\n        // Incrementally increase the opacity of the element.\n        element.style.opacity = parseFloat(element.style.opacity) + (timing[index] / 1);\n\n        // Move the element closer to its final position.\n        element.style.transform = `translateX(${(oldValue * 100) - 100}%)`;\n\n        // Move to the next timing value , Increment index value.\n        index += 1;\n\n        // Terminate the interval if the element reaches the end position.\n        if (index >= 100) {\n            clearInterval(intervalID);\n        }\n    }, interval);\n}\n\n/**\n * Executes a smooth slide-in animation on a given DOM element from the left.\n *\n * @param {HTMLElement} element - The target element to apply the slide-in animation.\n * @param {number} duration - Duration of the slide-in animation in milliseconds.\n * @param {Array<string>} classNameList - List of class names that may contain animation timing functions.\n */\nfunction slideout(element, duration, classNameList) {\n    // Determine the appropriate animation timing function from the provided class names.\n    let animationTimingFunction = (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.findAnimationTimingFunction)(classNameList);\n    \n    // Extract cubic-bezier control points, either from the class or a default configuration.\n    let cubicBezierTiming = animationTimingFunction.includes('cubic-bezier') \n        ? (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.extractCubicBezier)(animationTimingFunction) \n        : (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.extractCubicBezier)(_utils_animation_constant__WEBPACK_IMPORTED_MODULE_1__.defaultAnimationTiming[animationTimingFunction]);\n\n    // Compute the interval duration by dividing the animation duration by the number of steps (100).\n    let interval = duration / 100;\n\n    //Initialize set interal index. \n    let index = 0;\n    \n    // Set the initial opacity of the element to 0.\n    element.style.opacity = 1;\n\n    // Generate a sequence of opacity values for the slide effect based on the cubic-bezier control points.\n    let timing = (0,_utils_cubic_bizer__WEBPACK_IMPORTED_MODULE_0__.generateOpacityValues)(...cubicBezierTiming, 1000);\n\n    // Set the element's initial position off-screen to the left.\n    element.style.transform = \"translateX(0%)\";\n    \n    //Initialize temprory value used to add and hold all previous values\n    let oldValue = 0;\n\n    // Establish an interval that will gradually change the element's position and opacity.\n    const intervalID = setInterval(() => {\n        // Compute the new position based on the timing array value corresponding to the current index.\n        oldValue += timing[index];\n\n        // Incrementally increase the opacity of the element.\n        element.style.opacity = parseFloat(element.style.opacity) - (timing[index] / 1);\n\n        // Move the element closer to its final position.\n        element.style.transform = `translateX(${(oldValue * 100) }%)`;\n\n        // Move to the next timing value , Increment index value.\n        index += 1;\n\n        // Terminate the interval if the element reaches the end position.\n        if (index >= 100) {\n            clearInterval(intervalID);\n        }\n    }, interval);\n}\n\n\n//# sourceURL=webpack://YourPackageName/./src/slide.js?");

/***/ }),

/***/ "./utils/animation-constant.js":
/*!*************************************!*\
  !*** ./utils/animation-constant.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultAnimationTiming: () => (/* binding */ defaultAnimationTiming)\n/* harmony export */ });\n// Define default animation timing functions as an array of objects\n// Each object represents a different timing function for CSS animations\nlet defaultAnimationTiming = {\n    'ease-in': 'cubic-bezier(0.42, 0, 1, 1)' ,\n    'ease-out': 'cubic-bezier(0, 0, 0.58, 1)' ,\n    'ease-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',\n    'linear': 'cubic-bezier(0, 0, 1, 1)',\n    'step-start': 'steps(1, start)',\n    'cubic-bezier' : ''\n};\n\n\n//# sourceURL=webpack://YourPackageName/./utils/animation-constant.js?");

/***/ }),

/***/ "./utils/cubic-bizer.js":
/*!******************************!*\
  !*** ./utils/cubic-bizer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   extractCubicBezier: () => (/* binding */ extractCubicBezier),\n/* harmony export */   findAnimationTimingFunction: () => (/* binding */ findAnimationTimingFunction),\n/* harmony export */   generateOpacityValues: () => (/* binding */ generateOpacityValues)\n/* harmony export */ });\n/* harmony import */ var _utils_animation_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/animation-constant */ \"./utils/animation-constant.js\");\n\n\n/**\n * Computes the y-coordinate of a cubic-bezier curve at a given t value.\n *\n * @param {number} t - The time value, typically between 0 and 1.\n * @param {number} p1x - The x-coordinate of the first control point.\n * @param {number} p1y - The y-coordinate of the first control point.\n * @param {number} p2x - The x-coordinate of the second control point.\n * @param {number} p2y - The y-coordinate of the second control point.\n * @returns {number} - The y-coordinate of the curve at time t.\n */\nfunction cubicBezier(t, p1x, p1y, p2x, p2y) {\n    const cX = 3 * p1x;\n    const bX = 3 * (p2x - p1x) - cX;\n    const aX = 1 - cX - bX;\n\n    const cY = 3 * p1y;\n    const bY = 3 * (p2y - p1y) - cY;\n    const aY = 1 - cY - bY;\n\n    // Compute the x and y coordinates for the given t\n    const x = ((aX * t + bX) * t + cX) * t;\n    const y = ((aY * t + bY) * t + cY) * t;\n\n    return y;\n}\n\n/**\n * Generates an array of opacity values based on cubic-bezier control points.\n *\n * @param {number} p1x - The x-coordinate of the first control point.\n * @param {number} p1y - The y-coordinate of the first control point.\n * @param {number} p2x - The x-coordinate of the second control point.\n * @param {number} p2y - The y-coordinate of the second control point.\n * @returns {number[]} - An array of normalized opacity values.\n */\nfunction generateOpacityValues(p1x, p1y, p2x, p2y) {\n    const values = [];\n    const steps = 100;\n\n    // Generate opacity values for each step\n    for (let i = 0; i < steps; i++) {\n        const t = i / (steps - 1);\n        const easedValue = cubicBezier(t, p1x, p1y, p2x, p2y);\n        values.push(easedValue);\n    }\n\n    // Normalize the values so that their sum equals 1\n    const sum = values.reduce((acc, value) => acc + value, 0);\n    const normalizedValues = values.map(value => value / sum);\n    return normalizedValues;\n}\n\n/**\n * Extracts cubic-bezier control points from a class name string.\n *\n * @param {string} className - The class name containing cubic-bezier timing function.\n * @returns {number[]} - An array of cubic-bezier control points [p1x, p1y, p2x, p2y].\n */\nfunction extractCubicBezier(className) {\n    // Remove 'cubic-bezier' and parentheses, then split by comma to extract values\n    const cubicBeizerTiming = className\n        .replace('cubic-bezier', '')\n        .replace('(', '')\n        .replace(')', '')\n        .split('/')\n        .map(value => parseFloat(value.trim()));\n\n    return cubicBeizerTiming;\n}\n\n/**\n * Finds the appropriate animation timing function from a list of class names.\n *\n * @param {string[]} classNameList - A list of class names that may contain animation timing functions.\n * @returns {string} - The found animation timing function or 'linear' if none is found.\n */\nfunction findAnimationTimingFunction(classNameList) {\n    const timingClass = classNameList.find(className => {\n        console.log(className)\n        // Find if any key in defaultAnimationTiming matches part of the class name\n        return Object.keys(_utils_animation_constant__WEBPACK_IMPORTED_MODULE_0__.defaultAnimationTiming).find(timing => {\n            return className.includes(timing);\n        });\n    });\n\n    return timingClass ? timingClass : 'linear';\n}\n\n\n//# sourceURL=webpack://YourPackageName/./utils/cubic-bizer.js?");

/***/ }),

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_fade_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/fade.js */ \"./src/fade.js\");\n/* harmony import */ var _src_slide_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/slide.js */ \"./src/slide.js\");\n/* harmony import */ var _src_bounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/bounce.js */ \"./src/bounce.js\");\n/* harmony import */ var _src_rotate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/rotate.js */ \"./src/rotate.js\");\n\n\n\n\n\n\n\n\n\n\n// Array to hold animation details extracted from elements\nvar animationDetails = [];\n\n// Map of available animations by their names\nconst animations = {\n  'fadein'         : _src_fade_js__WEBPACK_IMPORTED_MODULE_0__.fadein,\n  'fadeout'        : _src_fade_js__WEBPACK_IMPORTED_MODULE_0__.fadeout,\n  'slidein'        : _src_slide_js__WEBPACK_IMPORTED_MODULE_1__.slidein,\n  'slideout'       : _src_slide_js__WEBPACK_IMPORTED_MODULE_1__.slideout,\n  'bounceinright'  : _src_bounce_js__WEBPACK_IMPORTED_MODULE_2__.bounceinright,\n  'bounceintop'    : _src_bounce_js__WEBPACK_IMPORTED_MODULE_2__.bounceintop,\n  'bounceinleft'   : _src_bounce_js__WEBPACK_IMPORTED_MODULE_2__.bounceinleft,\n  'bounceinbottom' : _src_bounce_js__WEBPACK_IMPORTED_MODULE_2__.bounceinbottom,\n  'rotateright'    : _src_rotate_js__WEBPACK_IMPORTED_MODULE_3__.rotateright,\n  'rotateleft'     : _src_rotate_js__WEBPACK_IMPORTED_MODULE_3__.rotateleft\n};\n\n// Event listener for DOMContentLoaded to initialize animation processing\ndocument.addEventListener('DOMContentLoaded', () => {\n  // Select all elements with class names containing \"oands\"\n  const elements = document.querySelectorAll('[class*=\"oands\"]');\n  // Process the selected elements to find and apply animations\n  findAnimationDetails(elements);\n});\n\n/**\n * Extracts animation details from the given DOM elements and routes the animations.\n *\n * @param {NodeList} DOMelements - A NodeList of DOM elements to process.\n */\nfunction findAnimationDetails(DOMelements) {\n  DOMelements.forEach((currentElement) => {\n    const classNameList = [];\n    \n    // Collect class names starting with 'oands'\n    for (let className of currentElement.classList) {\n      if (className.startsWith('oands')) {\n        classNameList.push(className);\n      }\n    }\n    \n    // Store the class name list for the current element\n    animationDetails.push({ 'classNameList': classNameList });\n    \n    // Route animations based on class names\n    routeAnimation(currentElement, classNameList);\n  });\n}\n\n/**\n * Routes the appropriate animation to be applied on the given element based on class names.\n *\n * @param {HTMLElement} currentDOMelement - The DOM element to which the animation will be applied.\n * @param {string[]} classNameList - A list of class names associated with animations.\n */\nfunction routeAnimation(currentDOMelement, classNameList) {\n  classNameList.forEach((className) => {\n    try {\n      // Extract the animation name from the class name and apply it\n      const animationName = className.split('_')[1].toLowerCase();\n      const animationDuration = className.split('_')[2].toLowerCase() || 1000; \n      if (animations[animationName]) {\n        animations[animationName](currentDOMelement, animationDuration, className.split('_'));\n      } else {\n        throw new Error(`Animation \"${animationName}\" not found`);\n      }\n    } catch (error) {\n      // Log an error if the animation is not found or any issue occurs\n    }\n  });\n}\n\n// Uncomment the function below to test redirection or other functionality\n// function fadein() {\n//   console.log('Redirected successfully');\n// }\n\n\n//# sourceURL=webpack://YourPackageName/./utils/index.js?");

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