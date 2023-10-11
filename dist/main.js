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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addUser */ \"./src/modules/addUser.js\");\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n/* harmony import */ var _modules_deleteUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/deleteUser */ \"./src/modules/deleteUser.js\");\n/* harmony import */ var _modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePermissions */ \"./src/modules/changePermissions.js\");\n/* harmony import */ var _modules_editUsers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editUsers */ \"./src/modules/editUsers.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_2__.UserService;\r\n\r\nuserService.getUsers().then(data => {\r\n    (0,_modules_render__WEBPACK_IMPORTED_MODULE_1__.render)(data)\r\n})\r\n\r\n;(0,_modules_addUser__WEBPACK_IMPORTED_MODULE_0__.addUsers)()\r\n;(0,_modules_deleteUser__WEBPACK_IMPORTED_MODULE_3__.removeUsers)()\r\n;(0,_modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__.changePermissions)()\r\n;(0,_modules_editUsers__WEBPACK_IMPORTED_MODULE_5__.editUsers)()\r\n\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUser.js":
/*!********************************!*\
  !*** ./src/modules/addUser.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUsers: () => (/* binding */ addUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\nconst addUsers = () =>{\r\n    const form = document.querySelector('form');\r\n    const nameInput = form.querySelector('input#form-name')\r\n    const emailInput = form.querySelector('input#form-email')\r\n    const childrenInput = form.querySelector('input#form-children')\r\n\r\n    form.addEventListener('submit', e => {\r\n        e.preventDefault();\r\n\r\n        form.addEventListener('submit', e => {\r\n            e.preventDefault()\r\n\r\n            \r\n            if (!form.dataset.method) {\r\n                const user = {\r\n                    name: nameInput.value,\r\n                    email: emailInput.value,\r\n                    chidren: childrenInput.checked,\r\n                    permissions: false\r\n                }\r\n            }\r\n            userService.addUser(user).then(res => {\r\n                userService.getUsers().then(users=> {\r\n                    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n                    form.reset();\r\n                })\r\n            })\r\n        })\r\n\r\n        const user = {\r\n            name: nameInput.value,\r\n            email: emailInput.value,\r\n            children: childrenInput.checked,\r\n            permissions: false\r\n        }\r\n        \r\n        \r\n    })\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUser.js?");

/***/ }),

/***/ "./src/modules/changePermissions.js":
/*!******************************************!*\
  !*** ./src/modules/changePermissions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePermissions: () => (/* binding */ changePermissions)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n;\r\n\r\nconst changePermissions = () => {\r\n    const tbody = document.querySelector('#table-body');\r\n    \r\n    tbody.addEventListener('click', (event) => {\r\n       if (event.target.closest('input[type=checkbox]')) {\r\n            const tr = event.target.closest('tr');\r\n            const input = tr.querySelector('input[type=checkbox]');\r\n            const id = tr.dataset.key;\r\n\r\n            console.log(id);\r\n            console.log(input.checked);\r\n            userService.changeUser(id, {permissions: input.checked}).then(res => {\r\n                userService.getUsers().then(users => {\r\n                    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\r\n                })\r\n            })\r\n            console.log(tr)\r\n       }\r\n    })\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/changePermissions.js?");

/***/ }),

/***/ "./src/modules/deleteUser.js":
/*!***********************************!*\
  !*** ./src/modules/deleteUser.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeUsers: () => (/* binding */ removeUsers)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n;\r\nconst removeUsers = () => {\r\n\r\n    const tbody = document.querySelector('#table-body');\r\n    \r\n    tbody.addEventListener('click', (event) => {\r\n       if (event.target.closest('.btn-remove')) {\r\n            const tr = event.target.closest('tr');\r\n            const id = tr.dataset.key;\r\n\r\n            userService.removeUser(id).then(res => {\r\n                userService.getUsers().then(users => {\r\n                    (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users)\r\n                })\r\n            })\r\n            console.log(tr)\r\n       }\r\n    })\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/deleteUser.js?");

/***/ }),

/***/ "./src/modules/editUsers.js":
/*!**********************************!*\
  !*** ./src/modules/editUsers.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editUsers: () => (/* binding */ editUsers)\n/* harmony export */ });\nconst editUsers = () =>{\r\n    const tbody = document.querySelector('#table-body');\r\n    const form = document.querySelector('form');\r\n    const nameInput = form.querySelector('input#form-name')\r\n    const emailInput = form.querySelector('input#form-email')\r\n    const childrenInput = form.querySelector('input#form-children')\r\n    \r\n    tbody.addEventListener('click', (event) => {\r\n       if (event.target.closest('.btn-edit')) {\r\n            const tr = event.target.closest('tr');\r\n            const id = tr.dataset.key;\r\n            userService.getUser(id).then(user => {\r\n                console.log(user);\r\n                nameInput.value = user.name;\r\n                emailInput.value = user.email;\r\n                childrenInput.value = user.children;\r\n\r\n                form.dataset.method = id;\r\n            })\r\n       }\r\n       form.addEventListener('submit', e => {\r\n            e.preventDefault()\r\n\r\n            \r\n            if (form.dataset.method) {\r\n                const id = form.dataset.method\r\n                const user = {\r\n                    name: nameInput.value,\r\n                    email: emailInput.value,\r\n                    chidren: childrenInput.checked,\r\n                    permissions: false\r\n                }\r\n                userService.editUser(id,user).then(() => {\r\n                    userService.getUsers().then(users => {\r\n                        render(users)\r\n                        form.reset()\r\n                        form.removeAttribute('data-method')\r\n                    })\r\n                })\r\n            }\r\n            \r\n        })\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/editUsers.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\nconst render = (users) => {\r\n    // console.log('first');\r\n    const tbody = document.querySelector('#table-body');\r\n    tbody.innerHTML = ''\r\n\r\n    users.forEach(user => {\r\n        tbody.insertAdjacentHTML('beforeend',\r\n        `\r\n        <tr data-key=\"${user.id}\">\r\n                                <th scope=\"row\">${user.id}</th>\r\n                                <td>${user.name}</td>\r\n                                <td>${user.email}</td>\r\n                                <td>${user.children ? 'Есть' : 'Нет'}</td>\r\n                                <td>\r\n                                    <div class=\"form-check form-switch\">\r\n                                        <input class=\"form-check-input\" type=\"checkbox\" role=\"switch\"\r\n                                            id=\"form-children\" ${user.permissions ?'checked':''}>\r\n                                    </div>\r\n                                </td>\r\n                                \r\n                                <td>\r\n                                    <div class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\r\n                                        <button type=\"button\" class=\"btn btn-warning btn-edit\">\r\n                                            <i class=\"bi-pencil-square\"></i>\r\n                                        </button>\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n                                            <i class=\"bi-person-x\"></i>\r\n                                        </button>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n        `\r\n        )\r\n    })\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/userService.js":
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\nclass UserService {\r\n    url = 'http://localhost:1337/users'\r\n\r\n    getUsers(url){\r\n        return fetch(this.url).then(response => response.json())\r\n    }\r\n\r\n    addUser(user, url) {\r\n        return fetch(this.url, {\r\n            method: 'POST',\r\n            headers: {\r\n                \"Content-Type\":\"application/json\"\r\n            },\r\n            body: JSON.stringify(user)\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    removeUser(id) {\r\n        return fetch(this.url + `/${id}`, {\r\n            method: 'DELETE'\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    changeUser(id, data){\r\n        return fetch(this.url + `/${id}`, {\r\n            method: 'PATCH',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\":\"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n\r\n    getUser(id){\r\n        return fetch(this.url + `/${id}`).then(res => res.json())\r\n\r\n    }\r\n\r\n    editUser(id, user){\r\n        return fetch(this.url + `/${id}`, {\r\n            method: 'PUT',\r\n            body: JSON.stringify(user),\r\n            headers: {\r\n                \"Content-Type\":\"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n}\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;