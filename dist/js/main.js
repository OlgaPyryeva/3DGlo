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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"28 february 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\r\n  let calcInput = document.querySelectorAll(\"input.calc-item\");\r\n  const form1Start = document.querySelector(\"#form1\");\r\n  const form2End = document.querySelector(\"#form2\");\r\n  const formModal = document.querySelector(\".popup-content\");\r\n  const formInputType = document.querySelectorAll(\"input[type='text']\");\r\n  const formInput = document.querySelector(\r\n    \"input[placeholder = 'Ваше сообщение']\"\r\n  );\r\n  const emailInput = document.querySelectorAll(\"input[type='email']\");\r\n  const telInput = document.querySelectorAll(\"input[type='tel']\");\r\n\r\n  //   валидация ввода в калькуляторе только цифровых значений в поля input\r\n  calcInput.forEach((calcItem) => {\r\n    calcItem.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n    });\r\n  });\r\n\r\n  //В поля ввода type=text и placeholder=\"Ваше сообщение\" позволить\r\n  //ввод только кириллицы в любом регистре, дефиса и пробела.\r\n  formInputType.forEach((formItem) => {\r\n    formItem.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^а-яА-Я\\-\\s]+/, \"\");\r\n    });\r\n  });\r\n  formInput.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^а-яА-Я\\-\\s]+/, \"\");\r\n  });\r\n\r\n  //В поля ввода type=email позволить ввод только латиницы в любом регистре, цифры и\r\n  //спецсимволы:  @  -  _  . ! ~ * '\r\n  //(Собака , Дефис , Подчеркивание , Точка , Восклицательный знак , Тильда , Звездочка , Одинарная кавычка)\r\n  emailInput.forEach((emailItem) => {\r\n    emailItem.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\w\\@\\-\\.\\!\\~\\*\\']+/, \"\");\r\n    });\r\n  });\r\n  //В поля ввода type=tel позволить ввод только цифр, круглых скобок и дефис\r\n  telInput.forEach((telItem) => {\r\n    telItem.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\d\\(\\)\\-]+/, \"\");\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = menu.querySelector(\".close-btn\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handleMenu);\r\n  closeBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  menuItems.forEach((menuItem) =>\r\n    menuItem.addEventListener(\"click\", handleMenu)\r\n  );\r\n\r\n  //попытка выйти на блок сайта, по ссылке и сделать плавный скролл\r\n  // menuItems.forEach((menuItem) => {\r\n  //   let hrefElem = menuItem.getAttribute(\"href\");\r\n  //   let blockMenu = document.getElementById(`${hrefElem}`);\r\n  //   blockMenu.scrollIntoView({ alignToTop: true, behavior: \"smooth\" });\r\n  //   console.log(blockMenu);\r\n  // });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const modalForm = modal.querySelector(\".popup-content\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const closeBtn = modal.querySelector(\".popup-close\");\r\n  let width = document.documentElement.clientWidth;\r\n\r\n  window.addEventListener(\"resize\", () => {\r\n    width = document.documentElement.clientWidth;\r\n  });\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      modal.style.display = \"block\";\r\n      if (width >= 768) {\r\n        animationModal();\r\n        modalForm.style.top = \"\";\r\n      }\r\n    });\r\n  });\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    modal.style.display = \"none\";\r\n  });\r\n\r\n  let animationModal = () => {\r\n    let start = Date.now(); // запомнить время начала\r\n    let timer = setInterval(function () {\r\n      let timePassed = Date.now() - start;\r\n\r\n      if (timePassed >= 500) {\r\n        clearInterval(timer);\r\n        return;\r\n      }\r\n      showAnimation(timePassed);\r\n      showModal(timePassed);\r\n    }, 20);\r\n\r\n    // уменьшение опасити от 1 до 0\r\n    // let animationModalReturn = () => {\r\n    //   let start = Date.now(); // запомнить время начала\r\n    //   let timer = setInterval(function () {\r\n    //     let timePassed = Date.now() - start;\r\n\r\n    //     if (timePassed >= 500) {\r\n    //       clearInterval(timer);\r\n    //       return;\r\n    //     }\r\n    //     showAnimation(timePassed);\r\n    //     showModal(timePassed);\r\n    //   }, -20);\r\n\r\n    function showAnimation(timePassed) {\r\n      modalForm.style.top = timePassed / 50 + \"%\";\r\n    }\r\n    function showModal(timePassed) {\r\n      modalForm.style.opacity = timePassed / 500;\r\n    }\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet timeRemaining;\r\nlet getTime;\r\n\r\nconst timer = (deadline) => {\r\n  const timerDays = document.getElementById(\"timer-days\");\r\n  const timerHours = document.getElementById(\"timer-hours\");\r\n  const timerMinutes = document.getElementById(\"timer-minutes\");\r\n  const timerSeconds = document.getElementById(\"timer-seconds\");\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    timeRemaining = (dateStop - dateNow) / 1000;\r\n    let days = Math.floor(timeRemaining / 60 / 60 / 24);\r\n\r\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n    if (hours >= 0 && hours < 10) {\r\n      hours = \"0\" + hours;\r\n    }\r\n    let minutes = Math.floor((timeRemaining / 60) % 60);\r\n    if (minutes >= 0 && minutes < 10) {\r\n      minutes = \"0\" + minutes;\r\n    }\r\n    let seconds = Math.floor(timeRemaining % 60);\r\n    if (seconds >= 0 && seconds < 10) {\r\n      seconds = \"0\" + seconds;\r\n    }\r\n\r\n    return { timeRemaining, days, hours, minutes, seconds };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    getTime = getTimeRemaining();\r\n\r\n    timerDays.textContent = getTime.days + \" days\";\r\n    timerHours.textContent = getTime.hours + \" h\";\r\n    timerMinutes.textContent = getTime.minutes + \" min\";\r\n    timerSeconds.textContent = getTime.seconds + \" sec\";\r\n  };\r\n\r\n  updateClock();\r\n\r\n  if (getTime.timeRemaining > 0) {\r\n    setInterval(updateClock, 1000);\r\n  } else if (getTime.timeRemaining <= 0) {\r\n    timerDays.textContent = \"00\";\r\n    timerHours.textContent = \"00\";\r\n    timerMinutes.textContent = \"00\";\r\n    timerSeconds.textContent = \"00\";\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;