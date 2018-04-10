module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/render.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/post.md":
/*!**********************!*\
  !*** ./data/post.md ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\"title\":\"Our first Post\",\"author\":\"Link\",\"__content\":\"<h1 id=\\\"long-ago-in-the-kingdom-of-hyrule\\\">long ago in the Kingdom of Hyrule</h1>\\n<p>Our hero wakes up.</p>\\n\"}\n\n//# sourceURL=webpack:///./data/post.md?");

/***/ }),

/***/ "./src/components/AppRoot.js":
/*!***********************************!*\
  !*** ./src/components/AppRoot.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ \"babel-runtime/core-js/object/get-prototype-of\");\n\nvar _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\nvar _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ \"babel-runtime/helpers/possibleConstructorReturn\");\n\nvar _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);\n\nvar _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ \"babel-runtime/helpers/inherits\");\n\nvar _inherits3 = _interopRequireDefault(_inherits2);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _post = __webpack_require__(/*! ../../data/post.md */ \"./data/post.md\");\n\nvar _post2 = _interopRequireDefault(_post);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar imagePath = __webpack_require__(/*! ../images/1100px-Ser-wiki.png */ \"./src/images/1100px-Ser-wiki.png\");\n\nvar AppRoot = function (_React$Component) {\n    (0, _inherits3.default)(AppRoot, _React$Component);\n\n    function AppRoot(props) {\n        (0, _classCallCheck3.default)(this, AppRoot);\n\n        var _this = (0, _possibleConstructorReturn3.default)(this, (AppRoot.__proto__ || (0, _getPrototypeOf2.default)(AppRoot)).call(this, props));\n\n        _this.state = {};\n        return _this;\n    }\n\n    (0, _createClass3.default)(AppRoot, [{\n        key: \"render\",\n        value: function render() {\n            return _react2.default.createElement(\n                \"div\",\n                { className: \"profile\" },\n                _react2.default.createElement(\"img\", { src: imagePath }),\n                _react2.default.createElement(\n                    \"h1\",\n                    null,\n                    _post2.default.title\n                ),\n                _react2.default.createElement(\"div\", {\n                    className: \"content\",\n                    dangerouslySetInnerHTML: { __html: _post2.default.__content } })\n            );\n        }\n    }]);\n    return AppRoot;\n}(_react2.default.Component);\n\nexports.default = AppRoot;\n\n//# sourceURL=webpack:///./src/components/AppRoot.js?");

/***/ }),

/***/ "./src/images/1100px-Ser-wiki.png":
/*!****************************************!*\
  !*** ./src/images/1100px-Ser-wiki.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"/images/1100px-Ser-wiki-8024394a.png\";\n\n//# sourceURL=webpack:///./src/images/1100px-Ser-wiki.png?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _AppRoot = __webpack_require__(/*! ../components/AppRoot */ \"./src/components/AppRoot.js\");\n\nvar _AppRoot2 = _interopRequireDefault(_AppRoot);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n    return function (req, res) {\n        res.send('\\n        <html>\\n            <head>\\n                <link href=\"main.css\" rel=\"stylesheet\" />\\n            </head>\\n            <body>\\n                <div id=\"react-root\">' + (0, _server.renderToString)(_react2.default.createElement(_AppRoot2.default, null)) + '</div>\\n                <script src=\"vendors-bundle.js\"></script>\\n                <script src=\"main-bundle.js\"></script>\\n            </body>\\n        </html>\\n    ');\n    };\n};\n\n//# sourceURL=webpack:///./src/server/render.js?");

/***/ }),

/***/ "babel-runtime/core-js/object/get-prototype-of":
/*!****************************************************************!*\
  !*** external "babel-runtime/core-js/object/get-prototype-of" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/object/get-prototype-of\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/object/get-prototype-of%22?");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/createClass%22?");

/***/ }),

/***/ "babel-runtime/helpers/inherits":
/*!*************************************************!*\
  !*** external "babel-runtime/helpers/inherits" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/inherits\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/inherits%22?");

/***/ }),

/***/ "babel-runtime/helpers/possibleConstructorReturn":
/*!******************************************************************!*\
  !*** external "babel-runtime/helpers/possibleConstructorReturn" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/possibleConstructorReturn\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/possibleConstructorReturn%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });