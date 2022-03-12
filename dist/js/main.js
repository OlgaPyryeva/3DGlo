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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/calc */ \"./modules/calc.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"28 february 2022\");\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(100);\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n  formID: \"form1\",\r\n  someElem: [\r\n    {\r\n      type: \"block\",\r\n      id: \"total\",\r\n    },\r\n  ],\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n  formID: \"form2\",\r\n});\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\r\n  formID: \"form3\",\r\n});\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calc.js":
/*!*************************!*\
  !*** ./modules/calc.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst calc = (price = 100) => {\r\n  let calcInput = document.querySelectorAll(\"input.calc-item\");\r\n  const form1Start = document.querySelector(\"#form1\");\r\n  const form2End = document.querySelector(\"#form2\");\r\n  const formModal = document.querySelector(\".popup-content\");\r\n  const userName = document.querySelectorAll(\"input[name='user_name']\");\r\n  const userMessage = document.querySelector(\"input[name='user_message']\");\r\n  const userEmail = document.querySelectorAll(\"input[name='user_email']\");\r\n  const userPhone = document.querySelectorAll(\"input[name='user_phone']\");\r\n\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n  const forms = document.querySelectorAll(\"form\");\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let countCalcValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      countCalcValue += +calcCount.value / 10;\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue =\r\n        price * calcTypeValue * calcSquareValue * countCalcValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n    //total.textContent = totalValue;\r\n    (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n      duration: 500,\r\n      timing(timeFraction) {\r\n        return timeFraction;\r\n      },\r\n      draw(progress) {\r\n        total.textContent = Math.floor(totalValue * progress);\r\n      },\r\n    });\r\n    console.log(totalValue);\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n\r\n  //   валидация ввода в калькуляторе только цифровых значений в поля input\r\n  calcInput.forEach((calcItem) => {\r\n    calcItem.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/, \"\");\r\n    });\r\n  });\r\n\r\n  //В поля ввода type=text и placeholder=\"Ваше сообщение\" позволить\r\n  //ввод только кириллицы в любом регистре, дефиса и пробела.\r\n  forms.forEach((form) => {\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      const userNameInput = form.querySelector(\"input[name='user_name']\");\r\n\r\n      if (/[^а-яА-Я\\-\\s]+/g.test(userNameInput.value)) {\r\n        alert(\r\n          \"ошибка, разрешен ввод только кириллицы в любом регистре, дефиса и пробела.\"\r\n        );\r\n      }\r\n    });\r\n  });\r\n\r\n  userName.forEach((name) => {\r\n    name.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^а-яА-Я\\-\\s]+/, \"\");\r\n    });\r\n  });\r\n\r\n  userMessage.addEventListener(\"input\", (e) => {\r\n    e.target.value = e.target.value.replace(/[^а-яА-Я\\-\\s]+/, \"\");\r\n  });\r\n\r\n  //В поля ввода type=email позволить ввод только латиницы в любом регистре, цифры и\r\n  //спецсимволы:  @  -  _  . ! ~ * '\r\n  //(Собака , Дефис , Подчеркивание , Точка , Восклицательный знак , Тильда , Звездочка , Одинарная кавычка)\r\n  userEmail.forEach((email) => {\r\n    email.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\w\\@\\-\\.\\!\\~\\*\\']+/, \"\");\r\n    });\r\n  });\r\n  // В поля ввода type=tel позволить ввод только цифр, круглых скобок и дефис\r\n  userPhone.forEach((phone) => {\r\n    phone.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\d\\(\\)\\-]+/, \"\");\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\r\n\n\n//# sourceURL=webpack:///./modules/calc.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n  let start = performance.now();\r\n\r\n  requestAnimationFrame(function animate(time) {\r\n    // timeFraction изменяется от 0 до 1\r\n    let timeFraction = (time - start) / duration;\r\n    if (timeFraction > 1) {\r\n      timeFraction = 1;\r\n    }\r\n\r\n    // вычисление текущего состояния анимации\r\n    let progress = timing(timeFraction);\r\n\r\n    draw(progress); // отрисовать её\r\n\r\n    if (timeFraction < 1) {\r\n      requestAnimationFrame(animate);\r\n    }\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const menuItems = document.querySelectorAll(\"menu>ul>li>a\");\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  menu.addEventListener(\"click\", (e) => {\r\n    if (\r\n      e.target.closest(\".active-menu\") ||\r\n      e.target.classList.contains(\"close-btn\")\r\n    ) {\r\n      handleMenu();\r\n    }\r\n  });\r\n\r\n  menuItems.forEach((menuItem) => {\r\n    const hrefElem = menuItem.getAttribute(\"href\");\r\n    const blockMenu = document.querySelector(`${hrefElem}`);\r\n\r\n    menuItem.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n      blockMenu.scrollIntoView({ alignToTop: true, behavior: \"smooth\" });\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n/* harmony import */ var _sendForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sendForm */ \"./modules/sendForm.js\");\n\r\n\r\n\r\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const modalForm = modal.querySelector(\".popup-content\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n\r\n  let width = document.documentElement.clientWidth;\r\n\r\n  window.addEventListener(\"resize\", () => {\r\n    width = document.documentElement.clientWidth;\r\n  });\r\n\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      if (width >= 768) {\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 500,\r\n          timing(timeFraction) {\r\n            return timeFraction;\r\n          },\r\n          draw(progress) {\r\n            modalForm.style.opacity = 1 - progress;\r\n            modalForm.style.top = 10 - progress * 10 + \"%\";\r\n            if (modalForm.style.opacity < 0.1) {\r\n              modal.style.display = \"none\";\r\n            }\r\n          },\r\n        });\r\n      } else {\r\n        modal.style.display = \"none\";\r\n      }\r\n    }\r\n  });\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      if (width >= 768) {\r\n        modal.style.display = \"block\";\r\n\r\n        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n          duration: 500,\r\n          timing(timeFraction) {\r\n            return timeFraction;\r\n          },\r\n          draw(progress) {\r\n            modalForm.style.top = progress * 10 + \"%\";\r\n            modalForm.style.opacity = progress;\r\n          },\r\n        });\r\n      } else {\r\n        modal.style.display = \"block\";\r\n        modalForm.style.top = 10 + \"%\";\r\n        modalForm.style.opacity = 1;\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollBtn = () => {\r\n  const scrollBtn = document.querySelector('a[href=\"#service-block\"]');\r\n  const serviceBlock = document.getElementById(\"service-block\");\r\n\r\n  scrollBtn.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n    serviceBlock.scrollIntoView({ alignToTop: true, behavior: \"smooth\" });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollBtn);\r\n\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({ formID, someElem = [] }) => {\r\n  const form = document.getElementById(formID);\r\n  const statusBlock = document.createElement(\"div\");\r\n  const loadText = \"Зарузка...\";\r\n  const errorText = \"Ошибка ...\";\r\n  const successText = \"Спасибо! Наш менеджер с вами свяжется.\";\r\n  const errorValidation = \"Данные не валидны...\";\r\n\r\n  const validate = () => {\r\n    let success = true;\r\n    const userPhone = form.querySelector(\"[name=user_phone]\");\r\n    const userName = form.querySelector(\"[name=user_name]\");\r\n    const userMessage = form.querySelector(\"[name=user_message]\");\r\n\r\n    // Сделать валидацию данных при отправке:\r\n\r\n    //В поля name=\"user_phone\" разрешить ввод только цифр, знака “+”, круглых скобок и дефис\r\n    //В поля name=\"user_name\" разрешить ввод только кириллицы и пробелов\r\n    //В поля name=\"user_message\" разрешить только кириллицу, пробелы, цифры и знаки препинания.\r\n    if (userMessage) {\r\n      if (/[а-яА-Я\\d\\s\\.\\,\\!\\?\\;\\:\\-]+/g.test(userMessage.value)) {\r\n        console.log(\"userMessage.value\" + userMessage.value);\r\n        success = true;\r\n      } else {\r\n        success = false;\r\n      }\r\n    }\r\n\r\n    if (/[а-яА-Я\\s]+/g.test(userName.value)) {\r\n      console.log(\"userName.value\" + userName.value);\r\n      success = true;\r\n    } else {\r\n      success = false;\r\n    }\r\n\r\n    if (/[\\d\\+\\(\\)\\-]+/g.test(userPhone.value)) {\r\n      console.log(\"userPhone.value\" + userPhone.value);\r\n      success = true;\r\n    } else {\r\n      success = false;\r\n    }\r\n\r\n    // загрузка innerHtml\r\n    return success;\r\n  };\r\n\r\n  const sendData = (data) => {\r\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    }).then((response) => response.json());\r\n  };\r\n\r\n  const submitForm = () => {\r\n    const formElements = document.querySelectorAll(\"input\");\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    statusBlock.textContent = loadText;\r\n    form.append(statusBlock);\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n\r\n    someElem.forEach((elem) => {\r\n      const element = document.getElementById(elem.id);\r\n\r\n      if (elem.type === \"block\") {\r\n        formBody[elem.id] = element.textContent;\r\n      } else if (elem.type === \"input\") {\r\n        formBody[elem.id] = element.value;\r\n      }\r\n    });\r\n\r\n    if (validate()) {\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          statusBlock.textContent = successText;\r\n          formElements.forEach((input) => {\r\n            input.value = \"\";\r\n          });\r\n        })\r\n        .catch((error) => {\r\n          statusBlock.textContent = errorText;\r\n        });\r\n    } else {\r\n      alert(\"не правильно заполнены данные\");\r\n    }\r\n  };\r\n\r\n  try {\r\n    if (!form) {\r\n      throw new Error(\"верните форму на место\");\r\n    }\r\n\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      if (validate()) {\r\n        submitForm();\r\n      } else {\r\n        statusBlock.textContent = errorValidation;\r\n      }\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const sliderBlock = document.querySelector(\".portfolio-content\");\r\n  const slides = document.querySelectorAll(\".portfolio-item\");\r\n  const dotsBlock = document.querySelector(\".portfolio-dots\");\r\n  const timeInterval = 2000;\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  for (let i = 0; i <= slides.length - 1; i++) {\r\n    let dot = document.createElement(\"li\");\r\n    dot.className = \"dot\";\r\n    dotsBlock.append(dot);\r\n  }\r\n  const dots = document.querySelectorAll(\".dot\");\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  };\r\n\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n\r\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(\"dot\")) {\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (e.target.matches(\".portfolio-dots, .portfolio-btn\")) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (e.target.matches(\".portfolio-dots, .portfolio-btn\")) {\r\n        startSlide(timeInterval);\r\n      }\r\n    },\r\n    true\r\n  );\r\n\r\n  startSlide(timeInterval);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\r\n\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\r\n  const tabPanel = document.querySelector(\".service-header\");\r\n  const tabs = document.querySelectorAll(\".service-header-tab\");\r\n  const tabContent = document.querySelectorAll(\".service-tab\");\r\n\r\n  tabPanel.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".service-header-tab\")) {\r\n      const tabBtn = e.target.closest(\".service-header-tab\");\r\n      tabs.forEach((tab, index) => {\r\n        if (tab === tabBtn) {\r\n          tab.classList.add(\"active\");\r\n          tabContent[index].classList.remove(\"d-none\");\r\n        } else {\r\n          tab.classList.remove(\"active\");\r\n          tabContent[index].classList.add(\"d-none\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\r\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

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