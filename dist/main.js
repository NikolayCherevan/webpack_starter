/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://projectnew/./src/scss/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n\nconst mockIt = '/src/mock.json';\n\"use strict\";\nconst cardsWrapper = document.querySelector('.cards-wrapper')\nconst itCards = document.querySelector('.it-cards')\n\n\nclass initProject {\n\tconstructor() {\n\n\t}\n\taddBtnEventListeners() {\n\n\t\tvar selectedBtn = new Promise((resolve, reject) => {\n\t\t\titCards.addEventListener('click', () => resolve(1))\n\t\t});\n\t\treturn selectedBtn\n\t}\n\tchoseCardsScope(some) {\n\t\tvar mockUrl = new Promise((resolve, reject) => {\n\t\t\tswitch (some) {\n\t\t\t\tcase 1:\n\t\t\t\t\tresolve(mockIt)\n\t\t\t}\n\t\t});\n\t\treturn mockUrl\n\t}\n\tasync renderMockElements(mock) {\n\t\ttry {\n\t\t\tlet result = await fetch(mock);\n\t\t\tlet data = await result.json();\n\t\t\treturn data.cards;\n\t\t}\n\t\tcatch (error) {\n\t\t\tconsole.log(error)\n\t\t}\n\t}\n\trenderCardsList(cardsScope) {\n\n\t\tcardsScope.forEach((item, index) => {\n\t\t\tcardsWrapper.innerHTML += `<div><div class=\"uk-card uk-card-default uk-card-body\">\n\t\t\t\t<h3 class=\"uk-card-title\"> ${item.name}</h3>\n\t\t\t\t</div></div>`\n\t\t})\n\t}\n\taddFlipListeners() {\n\t\tlet count = 0;\n\t\tdocument.querySelectorAll('.uk-card').forEach((item,index) => {\n\t\t\tif (localStorage.getItem('activeCard')==index) {\n\t\t\t\titem.classList.add('flipped')\n\t\t\t\n\t\t\t}\n\t\t\titem.addEventListener('click', event => {\n\t\t\t\tif (localStorage.getItem('openedState') < 1) {\n\t\t\t\t\tcount++;\n\t\t\t\t\tevent.currentTarget.classList.toggle('flipped');\n\t\t\t\t\tlocalStorage.setItem('activeCard',index);\n\t\t\t\t\tlocalStorage.setItem('openedState',count);\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tif (event.currentTarget.classList.contains('flipped')) {\n\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\talert('Ты уже выбрал предсказание, на сегодня достаточно')\n\t\t\t\t\t}\n\n\t\t\t\t}\n\t\t\t})\n\t\t})\n\t}\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n\tconst startApp = new initProject();\n\tstartApp.addBtnEventListeners()\n\t\t.then((data) => startApp.choseCardsScope(data))\n\t\t.then((data) => startApp.renderMockElements(data))\n\t\t.then((data) => startApp.renderCardsList(data))\n\t\t.then(() => startApp.addFlipListeners())\n});\n\n\n//# sourceURL=webpack://projectnew/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;