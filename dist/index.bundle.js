"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
 //for watching the html file 

__webpack_require__(/*! ./home.html */ "./src/home.html");

function component() {
  const element = document.createElement('div'); // Lodash, currently included via a script, is required for this line to work

  element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'workweek'], ' ');
  return element;
}

document.body.appendChild(component());

/***/ }),

/***/ "./src/home.html":
/*!***********************!*\
  !*** ./src/home.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>New Project</title>\r\n</head>\r\n<body>\r\n    <p>Turk</p>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBQyxtQkFBTyxDQUFDLG9DQUFELENBQVA7O0FBRUEsU0FBU0MsU0FBVCxHQUFxQjtBQUNwQixRQUFNQyxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFoQixDQURvQixDQUdwQjs7QUFDQUYsRUFBQUEsT0FBTyxDQUFDRyxTQUFSLEdBQW9CTixrREFBQSxDQUFPLENBQUMsT0FBRCxFQUFVLFVBQVYsQ0FBUCxFQUE4QixHQUE5QixDQUFwQjtBQUVBLFNBQU9HLE9BQVA7QUFDQTs7QUFFREMsUUFBUSxDQUFDSSxJQUFULENBQWNDLFdBQWQsQ0FBMEJQLFNBQVMsRUFBbkM7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9ob21lLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbi8vZm9yIHdhdGNoaW5nIHRoZSBodG1sIGZpbGUgXHJcbnJlcXVpcmUoJy4vaG9tZS5odG1sJylcclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcclxuXHRjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdC8vIExvZGFzaCwgY3VycmVudGx5IGluY2x1ZGVkIHZpYSBhIHNjcmlwdCwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgbGluZSB0byB3b3JrXHJcblx0ZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oWydIZWxsbycsICd3b3Jrd2VlayddLCAnICcpO1xyXG5cclxuXHRyZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XHJcbiIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sPlxcclxcbjxoZWFkPlxcclxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJ1dGYtOFxcXCIgLz5cXHJcXG4gICAgPHRpdGxlPk5ldyBQcm9qZWN0PC90aXRsZT5cXHJcXG48L2hlYWQ+XFxyXFxuPGJvZHk+XFxyXFxuICAgIDxwPlR1cms8L3A+XFxyXFxuPC9ib2R5PlxcclxcbjwvaHRtbD5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7Il0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwiY29tcG9uZW50IiwiZWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImpvaW4iLCJib2R5IiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9