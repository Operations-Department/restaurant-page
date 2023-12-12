/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/milk-splash.jpg */ "./src/imgs/milk-splash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/title.ttf */ "./src/fonts/title.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/tab.ttf */ "./src/fonts/tab.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* css reset */
* {
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

html {
	/* height: 100vh; */
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	background-size: 100% 100%;
	background-attachment: fixed;
}

:root {
	--div-color: rgb(67 67 67 / 80%);
	--border-color: #ffd900;
	--border-radius: 25px;
	--image-border: 250px;
}

/* custom fonts */

@font-face {
	font-family: 'title';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
	font-weight: 600;
	font-style: normal;
}

@font-face {
	font-family: 'tabs';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
	font-weight: 600;
	font-style: normal;
}

.content {
	height: 100vh;
	display: grid;
	grid-template-rows: 1fr 3fr;
}

/* header */

.header {
	display: grid;
	grid-template-columns: 0.5fr 2fr 0.5fr 0.5fr 0.5fr;
    background: var(--div-color);
	border-bottom: 1px solid var(--border-color);
	height: 10rem;
    align-items: end;
    justify-items: center;
}

.header-milk {
	height: 9rem;
}

.title {
	height: 100%;
	width: 100%;
	font-family: title;
    color: white;
    text-shadow: 14px 12px 3px #ffd700a8;
	font-size: 10rem;
	display: flex;
	align-items: end;
	justify-content: flex-start;
	white-space: nowrap;
}

.header-buttons {
	font-family: tabs;
	color: white;
	font-size: 2.5rem;
	background: none;
	transition: ease-in-out 0.25s;
	padding: 1rem;
	justify-self: start;
}

.header-buttons:hover,
.header-buttons:focus {
	cursor: pointer;
    transform: translateY(-8px);
    background: none;
    color: var(--border-color);
    border-radius: var(--border-radius);
	box-shadow: 1px 1px 0px 0px var(--border-color);
}

.selected-tab {
	color: var(--border-color);
	border-radius: var(--border-radius);
	box-shadow: 1px 1px 0px 0px var(--border-color);
}

.selected-tab:hover {
	cursor: default;
    transform: none;
    background: none;
}

/* all 3 tabs */

.body-home,
.body-menu,
.body-contact {
	display: grid;
    background: var(--div-color);
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
	height: 90%;
	width: 55%;
	min-height: min-content;
	min-width: min-content;
	font-family: 'tabs';
	font-size: 32px;
	color: white;
	align-items: center;
    justify-items: center;
	text-align: center;
	padding: 20px;
}

/* Home */

.body-container {
	display: flex;
    justify-content: center;
	align-items: center;
}

.body-img-container {
	height: 20rem;
	width: 20rem; 
	border-radius: var(--image-border);
	border: 1px solid var(--border-color);
}

.body-home {
	grid-template-rows: 1fr 2fr 1fr;
}

/* Menu */

.body-menu {
	grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
}

.menu-item {
	display: grid;
	height: 21rem;
	width: 230px;
    grid-template-rows: 2fr 1fr 1fr;
    justify-items: center;
    align-items: center;
	background: black;
	border-radius: var(--border-radius);
	padding: 10px;
	box-sizing: border-box;
}

.menu-item > img {
	grid-row: 1 / 2;
    height: 15rem;
    width: 100%;
    border: 1px solid red;
    border-radius: var(--border-radius);
	box-sizing: border-box;
}

/* Contact */

.body-contact {
	grid-template-columns: 1fr 2fr;
}

.contact-left {
	grid-column: 1 / 2;
	display: grid;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	grid-template-columns:  1fr 8fr;
	height: 70%;
    width: 100%;
    align-items: center;
    justify-content: center;
	padding: 10px;
	justify-items: center;
    align-items: center;
	column-gap: 10px;
	font-size: 25px;
}

.contact-icons {
	height: 40px;
	filter: invert(1);
}

.contact-right {
	grid-column: 2 / 3;
	display: flex;
	align-items: center;
    justify-content: center;
	padding: 10px;
	height: 70%;
	width: 80%;
}

iframe {
	height: 100%;
	width: 100%;
	border-radius: var(--border-radius);
	border: 1px solid var(--border-color);
	transition: ease-in-out 0.3s;
	/* padding: 10px; */
}

iframe:hover {
	transform: scale(1.05);
	box-shadow: 20px 20px 40px black;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,cAAc;AACd;IACI,SAAS;CACZ,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA;CACC,mBAAmB;CACnB,yDAA6C;CAC7C,0BAA0B;CAC1B,4BAA4B;AAC7B;;AAEA;CACC,gCAAgC;CAChC,uBAAuB;CACvB,qBAAqB;CACrB,qBAAqB;AACtB;;AAEA,iBAAiB;;AAEjB;CACC,oBAAoB;CACpB,4CAA2B;CAC3B,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,4CAAyB;CACzB,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,aAAa;CACb,2BAA2B;AAC5B;;AAEA,WAAW;;AAEX;CACC,aAAa;CACb,kDAAkD;IAC/C,4BAA4B;CAC/B,4CAA4C;CAC5C,aAAa;IACV,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,kBAAkB;IACf,YAAY;IACZ,oCAAoC;CACvC,gBAAgB;CAChB,aAAa;CACb,gBAAgB;CAChB,2BAA2B;CAC3B,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,iBAAiB;CACjB,gBAAgB;CAChB,6BAA6B;CAC7B,aAAa;CACb,mBAAmB;AACpB;;AAEA;;CAEC,eAAe;IACZ,2BAA2B;IAC3B,gBAAgB;IAChB,0BAA0B;IAC1B,mCAAmC;CACtC,+CAA+C;AAChD;;AAEA;CACC,0BAA0B;CAC1B,mCAAmC;CACnC,+CAA+C;AAChD;;AAEA;CACC,eAAe;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA,eAAe;;AAEf;;;CAGC,aAAa;IACV,4BAA4B;CAC/B,qCAAqC;CACrC,mCAAmC;CACnC,WAAW;CACX,UAAU;CACV,uBAAuB;CACvB,sBAAsB;CACtB,mBAAmB;CACnB,eAAe;CACf,YAAY;CACZ,mBAAmB;IAChB,qBAAqB;CACxB,kBAAkB;CAClB,aAAa;AACd;;AAEA,SAAS;;AAET;CACC,aAAa;IACV,uBAAuB;CAC1B,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,kCAAkC;CAClC,qCAAqC;AACtC;;AAEA;CACC,+BAA+B;AAChC;;AAEA,SAAS;;AAET;CACC,2DAA2D;AAC5D;;AAEA;CACC,aAAa;CACb,aAAa;CACb,YAAY;IACT,+BAA+B;IAC/B,qBAAqB;IACrB,mBAAmB;CACtB,iBAAiB;CACjB,mCAAmC;CACnC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,eAAe;IACZ,aAAa;IACb,WAAW;IACX,qBAAqB;IACrB,mCAAmC;CACtC,sBAAsB;AACvB;;AAEA,YAAY;;AAEZ;CACC,8BAA8B;AAC/B;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,mCAAmC;CACnC,+BAA+B;CAC/B,WAAW;IACR,WAAW;IACX,mBAAmB;IACnB,uBAAuB;CAC1B,aAAa;CACb,qBAAqB;IAClB,mBAAmB;CACtB,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,mBAAmB;IAChB,uBAAuB;CAC1B,aAAa;CACb,WAAW;CACX,UAAU;AACX;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,mCAAmC;CACnC,qCAAqC;CACrC,4BAA4B;CAC5B,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,gCAAgC;AACjC","sourcesContent":["/* css reset */\n* {\n    margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\nhtml {\n\t/* height: 100vh; */\n\tbackground-image: url(./imgs/milk-splash.jpg);\n\tbackground-size: 100% 100%;\n\tbackground-attachment: fixed;\n}\n\n:root {\n\t--div-color: rgb(67 67 67 / 80%);\n\t--border-color: #ffd900;\n\t--border-radius: 25px;\n\t--image-border: 250px;\n}\n\n/* custom fonts */\n\n@font-face {\n\tfont-family: 'title';\n\tsrc: url(./fonts/title.ttf);\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'tabs';\n\tsrc: url(./fonts/tab.ttf);\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n.content {\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 3fr;\n}\n\n/* header */\n\n.header {\n\tdisplay: grid;\n\tgrid-template-columns: 0.5fr 2fr 0.5fr 0.5fr 0.5fr;\n    background: var(--div-color);\n\tborder-bottom: 1px solid var(--border-color);\n\theight: 10rem;\n    align-items: end;\n    justify-items: center;\n}\n\n.header-milk {\n\theight: 9rem;\n}\n\n.title {\n\theight: 100%;\n\twidth: 100%;\n\tfont-family: title;\n    color: white;\n    text-shadow: 14px 12px 3px #ffd700a8;\n\tfont-size: 10rem;\n\tdisplay: flex;\n\talign-items: end;\n\tjustify-content: flex-start;\n\twhite-space: nowrap;\n}\n\n.header-buttons {\n\tfont-family: tabs;\n\tcolor: white;\n\tfont-size: 2.5rem;\n\tbackground: none;\n\ttransition: ease-in-out 0.25s;\n\tpadding: 1rem;\n\tjustify-self: start;\n}\n\n.header-buttons:hover,\n.header-buttons:focus {\n\tcursor: pointer;\n    transform: translateY(-8px);\n    background: none;\n    color: var(--border-color);\n    border-radius: var(--border-radius);\n\tbox-shadow: 1px 1px 0px 0px var(--border-color);\n}\n\n.selected-tab {\n\tcolor: var(--border-color);\n\tborder-radius: var(--border-radius);\n\tbox-shadow: 1px 1px 0px 0px var(--border-color);\n}\n\n.selected-tab:hover {\n\tcursor: default;\n    transform: none;\n    background: none;\n}\n\n/* all 3 tabs */\n\n.body-home,\n.body-menu,\n.body-contact {\n\tdisplay: grid;\n    background: var(--div-color);\n\tborder: 1px solid var(--border-color);\n\tborder-radius: var(--border-radius);\n\theight: 90%;\n\twidth: 55%;\n\tmin-height: min-content;\n\tmin-width: min-content;\n\tfont-family: 'tabs';\n\tfont-size: 32px;\n\tcolor: white;\n\talign-items: center;\n    justify-items: center;\n\ttext-align: center;\n\tpadding: 20px;\n}\n\n/* Home */\n\n.body-container {\n\tdisplay: flex;\n    justify-content: center;\n\talign-items: center;\n}\n\n.body-img-container {\n\theight: 20rem;\n\twidth: 20rem; \n\tborder-radius: var(--image-border);\n\tborder: 1px solid var(--border-color);\n}\n\n.body-home {\n\tgrid-template-rows: 1fr 2fr 1fr;\n}\n\n/* Menu */\n\n.body-menu {\n\tgrid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n}\n\n.menu-item {\n\tdisplay: grid;\n\theight: 21rem;\n\twidth: 230px;\n    grid-template-rows: 2fr 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n\tbackground: black;\n\tborder-radius: var(--border-radius);\n\tpadding: 10px;\n\tbox-sizing: border-box;\n}\n\n.menu-item > img {\n\tgrid-row: 1 / 2;\n    height: 15rem;\n    width: 100%;\n    border: 1px solid red;\n    border-radius: var(--border-radius);\n\tbox-sizing: border-box;\n}\n\n/* Contact */\n\n.body-contact {\n\tgrid-template-columns: 1fr 2fr;\n}\n\n.contact-left {\n\tgrid-column: 1 / 2;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr 1fr 1fr;\n\tgrid-template-columns:  1fr 8fr;\n\theight: 70%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n\tpadding: 10px;\n\tjustify-items: center;\n    align-items: center;\n\tcolumn-gap: 10px;\n\tfont-size: 25px;\n}\n\n.contact-icons {\n\theight: 40px;\n\tfilter: invert(1);\n}\n\n.contact-right {\n\tgrid-column: 2 / 3;\n\tdisplay: flex;\n\talign-items: center;\n    justify-content: center;\n\tpadding: 10px;\n\theight: 70%;\n\twidth: 80%;\n}\n\niframe {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: var(--border-radius);\n\tborder: 1px solid var(--border-color);\n\ttransition: ease-in-out 0.3s;\n\t/* padding: 10px; */\n}\n\niframe:hover {\n\ttransform: scale(1.05);\n\tbox-shadow: 20px 20px 40px black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactPage)
/* harmony export */ });
/* harmony import */ var _imgs_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/location.png */ "./src/imgs/location.png");
/* harmony import */ var _imgs_clock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/clock.png */ "./src/imgs/clock.png");
/* harmony import */ var _imgs_iphone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/iphone.png */ "./src/imgs/iphone.png");
/* harmony import */ var _imgs_mail_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/mail.png */ "./src/imgs/mail.png");
//import imgs





function contactPage() {
    
    const content = document.getElementById('content');
    
    //body - menu page
    const bodyContainer = document.createElement('div');
    const body = document.createElement('div');
    const locationInfoContainer = document.createElement('div');
    const address = document.createElement('div');
    const operationHours = document.createElement('div');
    const phoneNumber = document.createElement('div');
    const email = document.createElement('div');
    
    const mapContainer = document.createElement('div');
    const mapView = document.createElement('iframe');

    mapView.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.1480641340206!2d127.52474921991501!3d37.806532218471986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356327b367b00e67%3A0xa5a229afd24c3899!2sStarbucks!5e0!3m2!1sen!2sau!4v1702114884649!5m2!1sen!2sau";
    mapView.allowFullscreen = true;


    //add icons + accessibility + credit links
    const locationLink = document.createElement('a');
    locationLink.href = 'https://www.flaticon.com/free-icons/location';
    locationLink.title = 'Location icons created by Freepik - Flaticon';
    
    const locationIcon = new Image();
    locationIcon.src = _imgs_location_png__WEBPACK_IMPORTED_MODULE_0__;
    locationIcon.alt = 'location pin + address';
    
    const clockLink = document.createElement('a');
    clockLink.href = 'https://www.flaticon.com/free-icons/clock';
    clockLink.title = 'Clock icons created by dmitri13 - Flaticon';

    const clockIcon = new Image();
    clockIcon.src = _imgs_clock_png__WEBPACK_IMPORTED_MODULE_1__;
    clockIcon.alt = "clock + open hours";
    
    const phoneLink = document.createElement('a');
    phoneLink.href = 'https://www.flaticon.com/free-icons/iphone';
    phoneLink.title = 'Iphone icons created by deemakdaksina - Flaticon';

    const phoneIcon = new Image();
    phoneIcon.src = _imgs_iphone_png__WEBPACK_IMPORTED_MODULE_2__;
    phoneIcon.alt = 'phone + phone number';

    const emailLink = document.createElement('a');
    emailLink.href = 'https://www.flaticon.com/free-icons/email';
    emailLink.title = 'Email icons created by Freepik - Flaticon';

    const emailIcon = new Image();
    emailIcon.src = _imgs_mail_png__WEBPACK_IMPORTED_MODULE_3__;
    emailIcon.alt = 'email + email address';

    //add classes
    bodyContainer.classList.add('body-container');
    body.classList.add('body-contact');
    locationInfoContainer.classList.add('contact-left');
    mapContainer.classList.add('contact-right');
    locationIcon.classList.add('contact-icons');
    clockIcon.classList.add('contact-icons');
    phoneIcon.classList.add('contact-icons');
    emailIcon.classList.add('contact-icons');

    //add inner HTML 
    address.innerHTML = '113-4 Daljeon road, Gapyeong, Gyeonggi, SK';
    operationHours.innerHTML = 'Mon-Fri: 9pm~2am<br>Sat-Sun: 9pm~6am';
    phoneNumber.innerHTML = '+82 010-MILK-9210';
    email.innerHTML = 'givememilk@milk.com';

    //append to page
    content.appendChild(bodyContainer);
    bodyContainer.appendChild(body);
    body.appendChild(locationInfoContainer);
    locationInfoContainer.appendChild(locationLink); //here
    locationLink.appendChild(locationIcon);         //here
    locationInfoContainer.appendChild(address);
    locationInfoContainer.appendChild(clockLink);
    clockLink.appendChild(clockIcon)
    locationInfoContainer.appendChild(operationHours);
    locationInfoContainer.appendChild(phoneLink);
    phoneLink.appendChild(phoneIcon);
    locationInfoContainer.appendChild(phoneNumber);
    locationInfoContainer.appendChild(emailLink);
    emailLink.appendChild(emailIcon);
    locationInfoContainer.appendChild(email);
    body.appendChild(mapContainer);
    mapContainer.appendChild(mapView);

    return content;
};

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _imgs_milk_scoop_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/milk-scoop.jpg */ "./src/imgs/milk-scoop.jpg");
//import imgs


function homePage() {

    const content = document.getElementById('content');
    
    //body - home page
    const bodyContainer = document.createElement('div');
    const body = document.createElement('div');
    const bodyTop = document.createElement('div');
    const bodyMid = document.createElement('div');
    const bodyLow = document.createElement('div');

    //add image + accessibility
    const milkScoop = new Image();
    milkScoop.src = _imgs_milk_scoop_jpg__WEBPACK_IMPORTED_MODULE_0__;
    milkScoop.alt = 'Hands scooping delicious milk';

    //add classes
    bodyContainer.classList.add('body-container');
    body.classList.add('body-home');
    milkScoop.classList.add('body-img-container');

    //add inner HTML
    bodyTop.innerHTML = `The best milk hands down! 
    I've known milk for many years, we go way back. 
    I know all the best cows with all the best milk, 
    believe me`;
    bodyLow.innerHTML = `Our family was the first 
    to discover milk from cows.. 
    don't ask us how`;

    //append to page
    content.appendChild(bodyContainer);
    bodyContainer.appendChild(body);
    body.appendChild(bodyTop);
    body.appendChild(bodyMid);
    bodyMid.appendChild(milkScoop);
    body.appendChild(bodyLow);    

    return content;
};

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _imgs_reg_milk_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgs/reg-milk.jpg */ "./src/imgs/reg-milk.jpg");
/* harmony import */ var _imgs_big_milk_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/big-milk.jpg */ "./src/imgs/big-milk.jpg");
//images



function menuPage() {

    const content = document.getElementById('content');
    
    //body - menu page
    const bodyContainer = document.createElement('div');
    const menuContainer = document.createElement('div');

    const menuItem1 = document.createElement('div');
    const menuItem2 = document.createElement('div');

    //set imported images
    const regMilk = new Image();
    regMilk.src = _imgs_reg_milk_jpg__WEBPACK_IMPORTED_MODULE_0__;
    regMilk.alt = 'regular glass of milk';

    const bigMilk = new Image();
    bigMilk.src = _imgs_big_milk_jpg__WEBPACK_IMPORTED_MODULE_1__;
    bigMilk.alt = 'a very big glass of milk';

    //add classes
    bodyContainer.classList.add('body-container');
    menuContainer.classList.add('body-menu');

    menuItem1.classList.add('menu-item');
    menuItem2.classList.add('menu-item');

    //add inner HTML
    menuItem1.innerHTML = `<strong>Milk</strong>20`;
    menuItem2.innerHTML = `<strong>Big Milk</strong>19`;

    //append to page
    content.appendChild(bodyContainer);
    bodyContainer.appendChild(menuContainer);

    menuItem1.appendChild(regMilk);
    menuContainer.appendChild(menuItem1);

    menuItem2.appendChild(bigMilk);
    menuContainer.appendChild(menuItem2);

    return content;
};

/***/ }),

/***/ "./src/fonts/tab.ttf":
/*!***************************!*\
  !*** ./src/fonts/tab.ttf ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c1515e9117855869d650.ttf";

/***/ }),

/***/ "./src/fonts/title.ttf":
/*!*****************************!*\
  !*** ./src/fonts/title.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a63c0b18eb2956f830bd.ttf";

/***/ }),

/***/ "./src/imgs/big-milk.jpg":
/*!*******************************!*\
  !*** ./src/imgs/big-milk.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d5c452f072c9e1710db7.jpg";

/***/ }),

/***/ "./src/imgs/clock.png":
/*!****************************!*\
  !*** ./src/imgs/clock.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0571246c20e889d51546.png";

/***/ }),

/***/ "./src/imgs/iphone.png":
/*!*****************************!*\
  !*** ./src/imgs/iphone.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ebdb7db0936d101650a5.png";

/***/ }),

/***/ "./src/imgs/location.png":
/*!*******************************!*\
  !*** ./src/imgs/location.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7459c0f1b422be3bcaad.png";

/***/ }),

/***/ "./src/imgs/mail.png":
/*!***************************!*\
  !*** ./src/imgs/mail.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e7f43f512e1a7664969b.png";

/***/ }),

/***/ "./src/imgs/milk-pale.gif":
/*!********************************!*\
  !*** ./src/imgs/milk-pale.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17dd4de166f618288c4c.gif";

/***/ }),

/***/ "./src/imgs/milk-scoop.jpg":
/*!*********************************!*\
  !*** ./src/imgs/milk-scoop.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "39f1b83387734650cc6c.jpg";

/***/ }),

/***/ "./src/imgs/milk-splash.jpg":
/*!**********************************!*\
  !*** ./src/imgs/milk-splash.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51464e03d8afc8956caf.jpg";

/***/ }),

/***/ "./src/imgs/reg-milk.jpg":
/*!*******************************!*\
  !*** ./src/imgs/reg-milk.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03e74c9b77a0853aedba.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _imgs_milk_pale_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/milk-pale.gif */ "./src/imgs/milk-pale.gif");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
//css


//images


//modules




function component() {

    const content = document.getElementById('content');

    //set header
    const header = document.createElement('div');            //header

    const title = document.createElement('div');            //title
    const homeTab = document.createElement('button');       //append to header
    const menuTab = document.createElement('button');       //append to header
    const contactTab = document.createElement('button');    //append to header

    //add header icon
    const milkImage = document.createElement('a');
    milkImage.href = 'https://www.flaticon.com/free-animated-icons/dairy-products';
    milkImage.title = 'Dairy products animated icons created by Freepik - Flaticon';

    const milkIcon = new Image();
    milkIcon.src = _imgs_milk_pale_gif__WEBPACK_IMPORTED_MODULE_1__;
    milkIcon.alt = 'milk header icon';

    //assign css
    content.classList.add('content');
    header.classList.add('header');

    title.classList.add('title');

    homeTab.classList.add('header-buttons');
    menuTab.classList.add('header-buttons');
    contactTab.classList.add('header-buttons');

    milkIcon.classList.add('header-milk');

    //set innerHTML
    title.innerHTML = 'Latte a la Leche';
    homeTab.innerHTML = 'Home';
    menuTab.innerHTML = 'Menu';
    contactTab.innerHTML = 'Contact';

    //append to page
    content.appendChild(header);

    header.appendChild(milkImage);
    milkImage.appendChild(milkIcon);
    header.appendChild(title);
    header.appendChild(homeTab);
    header.appendChild(menuTab);
    header.appendChild(contactTab);

    //event listeners - call imported modules when clicked
    document.addEventListener('DOMContentLoaded', function() {
        document.body.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
        menuTab.classList.add('selected-tab');
        menuTab.disabled = true;
    });

    homeTab.addEventListener('click', function() {
        const bodyContainer = document.querySelector('.body-container');
        const allTabs = document.querySelectorAll('button');

        allTabs.forEach(tab => {
            tab.classList.remove('selected-tab');
            tab.disabled = false;
        });

        homeTab.classList.add('selected-tab');
        homeTab.disabled = true;
        bodyContainer.remove();
        document.body.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])()); 
    });

    menuTab.addEventListener('click', function() {
        const bodyContainer = document.querySelector('.body-container');
        const allTabs = document.querySelectorAll('button');

        allTabs.forEach(tab => {
            tab.classList.remove('selected-tab');
            tab.disabled = false;
        });

        menuTab.classList.add('selected-tab');
        menuTab.disabled = true;
        bodyContainer.remove();
        document.body.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
    });

    contactTab.addEventListener('click', function() {
        const bodyContainer = document.querySelector('.body-container');
        const allTabs = document.querySelectorAll('button');

        allTabs.forEach(tab => {
            tab.classList.remove('selected-tab');
            tab.disabled = false;
        });

        contactTab.classList.add('selected-tab');
        contactTab.disabled = true;
        bodyContainer.remove();
        document.body.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
    });

    return content;
};

component();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDRDQUE0QywyR0FBa0M7QUFDOUUsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQix5QkFBeUIsbUNBQW1DO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFGQUFxRixLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVEQUFXO0FBQzdDLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy9taWxrLXNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3RpdGxlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvdGFiLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBjc3MgcmVzZXQgKi9cbioge1xuICAgIG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuaHRtbCB7XG5cdC8qIGhlaWdodDogMTAwdmg7ICovXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbjpyb290IHtcblx0LS1kaXYtY29sb3I6IHJnYig2NyA2NyA2NyAvIDgwJSk7XG5cdC0tYm9yZGVyLWNvbG9yOiAjZmZkOTAwO1xuXHQtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG5cdC0taW1hZ2UtYm9yZGVyOiAyNTBweDtcbn1cblxuLyogY3VzdG9tIGZvbnRzICovXG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ3RpdGxlJztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAndGFicyc7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb250ZW50IHtcblx0aGVpZ2h0OiAxMDB2aDtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xufVxuXG4vKiBoZWFkZXIgKi9cblxuLmhlYWRlciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMmZyIDAuNWZyIDAuNWZyIDAuNWZyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdi1jb2xvcik7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXHRoZWlnaHQ6IDEwcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLW1pbGsge1xuXHRoZWlnaHQ6IDlyZW07XG59XG5cbi50aXRsZSB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGZvbnQtZmFtaWx5OiB0aXRsZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDE0cHggMTJweCAzcHggI2ZmZDcwMGE4O1xuXHRmb250LXNpemU6IDEwcmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogZW5kO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5oZWFkZXItYnV0dG9ucyB7XG5cdGZvbnQtZmFtaWx5OiB0YWJzO1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMi41cmVtO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHR0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjI1cztcblx0cGFkZGluZzogMXJlbTtcblx0anVzdGlmeS1zZWxmOiBzdGFydDtcbn1cblxuLmhlYWRlci1idXR0b25zOmhvdmVyLFxuLmhlYWRlci1idXR0b25zOmZvY3VzIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuXHRib3gtc2hhZG93OiAxcHggMXB4IDBweCAwcHggdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuLnNlbGVjdGVkLXRhYiB7XG5cdGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcblx0Ym94LXNoYWRvdzogMXB4IDFweCAwcHggMHB4IHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbi5zZWxlY3RlZC10YWI6aG92ZXIge1xuXHRjdXJzb3I6IGRlZmF1bHQ7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi8qIGFsbCAzIHRhYnMgKi9cblxuLmJvZHktaG9tZSxcbi5ib2R5LW1lbnUsXG4uYm9keS1jb250YWN0IHtcblx0ZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXYtY29sb3IpO1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcblx0aGVpZ2h0OiA5MCU7XG5cdHdpZHRoOiA1NSU7XG5cdG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xuXHRtaW4td2lkdGg6IG1pbi1jb250ZW50O1xuXHRmb250LWZhbWlseTogJ3RhYnMnO1xuXHRmb250LXNpemU6IDMycHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZzogMjBweDtcbn1cblxuLyogSG9tZSAqL1xuXG4uYm9keS1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYm9keS1pbWctY29udGFpbmVyIHtcblx0aGVpZ2h0OiAyMHJlbTtcblx0d2lkdGg6IDIwcmVtOyBcblx0Ym9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2UtYm9yZGVyKTtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuLmJvZHktaG9tZSB7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XG59XG5cbi8qIE1lbnUgKi9cblxuLmJvZHktbWVudSB7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzgwcHgsIDFmcikpO1xufVxuXG4ubWVudS1pdGVtIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0aGVpZ2h0OiAyMXJlbTtcblx0d2lkdGg6IDIzMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJhY2tncm91bmQ6IGJsYWNrO1xuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcblx0cGFkZGluZzogMTBweDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1lbnUtaXRlbSA+IGltZyB7XG5cdGdyaWQtcm93OiAxIC8gMjtcbiAgICBoZWlnaHQ6IDE1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogQ29udGFjdCAqL1xuXG4uYm9keS1jb250YWN0IHtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xufVxuXG4uY29udGFjdC1sZWZ0IHtcblx0Z3JpZC1jb2x1bW46IDEgLyAyO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyIDhmcjtcblx0aGVpZ2h0OiA3MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZzogMTBweDtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGNvbHVtbi1nYXA6IDEwcHg7XG5cdGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmNvbnRhY3QtaWNvbnMge1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuXG4uY29udGFjdC1yaWdodCB7XG5cdGdyaWQtY29sdW1uOiAyIC8gMztcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZzogMTBweDtcblx0aGVpZ2h0OiA3MCU7XG5cdHdpZHRoOiA4MCU7XG59XG5cbmlmcmFtZSB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXHR0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xuXHQvKiBwYWRkaW5nOiAxMHB4OyAqL1xufVxuXG5pZnJhbWU6aG92ZXIge1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuXHRib3gtc2hhZG93OiAyMHB4IDIwcHggNDBweCBibGFjaztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkO0lBQ0ksU0FBUztDQUNaLFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7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cUM7Q0FDckMsNEJBQTRCO0NBQzVCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixnQ0FBZ0M7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY3NzIHJlc2V0ICovXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmh0bWwge1xcblxcdC8qIGhlaWdodDogMTAwdmg7ICovXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1ncy9taWxrLXNwbGFzaC5qcGcpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcblxcdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbjpyb290IHtcXG5cXHQtLWRpdi1jb2xvcjogcmdiKDY3IDY3IDY3IC8gODAlKTtcXG5cXHQtLWJvcmRlci1jb2xvcjogI2ZmZDkwMDtcXG5cXHQtLWJvcmRlci1yYWRpdXM6IDI1cHg7XFxuXFx0LS1pbWFnZS1ib3JkZXI6IDI1MHB4O1xcbn1cXG5cXG4vKiBjdXN0b20gZm9udHMgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ3RpdGxlJztcXG5cXHRzcmM6IHVybCguL2ZvbnRzL3RpdGxlLnR0Zik7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAndGFicyc7XFxuXFx0c3JjOiB1cmwoLi9mb250cy90YWIudHRmKTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLmNvbnRlbnQge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAyZnIgMC41ZnIgMC41ZnIgMC41ZnI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdi1jb2xvcik7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuXFx0aGVpZ2h0OiAxMHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLW1pbGsge1xcblxcdGhlaWdodDogOXJlbTtcXG59XFxuXFxuLnRpdGxlIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1mYW1pbHk6IHRpdGxlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiAxNHB4IDEycHggM3B4ICNmZmQ3MDBhODtcXG5cXHRmb250LXNpemU6IDEwcmVtO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGVuZDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmhlYWRlci1idXR0b25zIHtcXG5cXHRmb250LWZhbWlseTogdGFicztcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAyLjVyZW07XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHR0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjI1cztcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi5oZWFkZXItYnV0dG9uczpob3ZlcixcXG4uaGVhZGVyLWJ1dHRvbnM6Zm9jdXMge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAwcHggMHB4IHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5zZWxlY3RlZC10YWIge1xcblxcdGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDBweCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uc2VsZWN0ZWQtdGFiOmhvdmVyIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuXFxuLyogYWxsIDMgdGFicyAqL1xcblxcbi5ib2R5LWhvbWUsXFxuLmJvZHktbWVudSxcXG4uYm9keS1jb250YWN0IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXYtY29sb3IpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFx0aGVpZ2h0OiA5MCU7XFxuXFx0d2lkdGg6IDU1JTtcXG5cXHRtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcXG5cXHRtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcblxcdGZvbnQtZmFtaWx5OiAndGFicyc7XFxuXFx0Zm9udC1zaXplOiAzMnB4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIEhvbWUgKi9cXG5cXG4uYm9keS1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2R5LWltZy1jb250YWluZXIge1xcblxcdGhlaWdodDogMjByZW07XFxuXFx0d2lkdGg6IDIwcmVtOyBcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1ib3JkZXIpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5ib2R5LWhvbWUge1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XFxufVxcblxcbi8qIE1lbnUgKi9cXG5cXG4uYm9keS1tZW51IHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM4MHB4LCAxZnIpKTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRoZWlnaHQ6IDIxcmVtO1xcblxcdHdpZHRoOiAyMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1lbnUtaXRlbSA+IGltZyB7XFxuXFx0Z3JpZC1yb3c6IDEgLyAyO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKiBDb250YWN0ICovXFxuXFxuLmJvZHktY29udGFjdCB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4uY29udGFjdC1sZWZ0IHtcXG5cXHRncmlkLWNvbHVtbjogMSAvIDI7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAxZnIgOGZyO1xcblxcdGhlaWdodDogNzAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Y29sdW1uLWdhcDogMTBweDtcXG5cXHRmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5jb250YWN0LWljb25zIHtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi5jb250YWN0LXJpZ2h0IHtcXG5cXHRncmlkLWNvbHVtbjogMiAvIDM7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGhlaWdodDogNzAlO1xcblxcdHdpZHRoOiA4MCU7XFxufVxcblxcbmlmcmFtZSB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuXFx0dHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXG5cXHQvKiBwYWRkaW5nOiAxMHB4OyAqL1xcbn1cXG5cXG5pZnJhbWU6aG92ZXIge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0Ym94LXNoYWRvdzogMjBweCAyMHB4IDQwcHggYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9pbXBvcnQgaW1nc1xuaW1wb3J0IExvY2F0aW9uUGluIGZyb20gJy4vaW1ncy9sb2NhdGlvbi5wbmcnO1xuaW1wb3J0IENsb2NrIGZyb20gJy4vaW1ncy9jbG9jay5wbmcnO1xuaW1wb3J0IFBob25lIGZyb20gJy4vaW1ncy9pcGhvbmUucG5nJztcbmltcG9ydCBFbWFpbCBmcm9tICcuL2ltZ3MvbWFpbC5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0UGFnZSgpIHtcbiAgICBcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICAvL2JvZHkgLSBtZW51IHBhZ2VcbiAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvY2F0aW9uSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBvcGVyYXRpb25Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBjb25zdCBtYXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtYXBWaWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG5cbiAgICBtYXBWaWV3LnNyYyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMTU3Ni4xNDgwNjQxMzQwMjA2ITJkMTI3LjUyNDc0OTIxOTkxNTAxITNkMzcuODA2NTMyMjE4NDcxOTg2ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgzNTYzMjdiMzY3YjAwZTY3JTNBMHhhNWEyMjlhZmQyNGMzODk5ITJzU3RhcmJ1Y2tzITVlMCEzbTIhMXNlbiEyc2F1ITR2MTcwMjExNDg4NDY0OSE1bTIhMXNlbiEyc2F1XCI7XG4gICAgbWFwVmlldy5hbGxvd0Z1bGxzY3JlZW4gPSB0cnVlO1xuXG5cbiAgICAvL2FkZCBpY29ucyArIGFjY2Vzc2liaWxpdHkgKyBjcmVkaXQgbGlua3NcbiAgICBjb25zdCBsb2NhdGlvbkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbG9jYXRpb25MaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvbG9jYXRpb24nO1xuICAgIGxvY2F0aW9uTGluay50aXRsZSA9ICdMb2NhdGlvbiBpY29ucyBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvbic7XG4gICAgXG4gICAgY29uc3QgbG9jYXRpb25JY29uID0gbmV3IEltYWdlKCk7XG4gICAgbG9jYXRpb25JY29uLnNyYyA9IExvY2F0aW9uUGluO1xuICAgIGxvY2F0aW9uSWNvbi5hbHQgPSAnbG9jYXRpb24gcGluICsgYWRkcmVzcyc7XG4gICAgXG4gICAgY29uc3QgY2xvY2tMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGNsb2NrTGluay5ocmVmID0gJ2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2Nsb2NrJztcbiAgICBjbG9ja0xpbmsudGl0bGUgPSAnQ2xvY2sgaWNvbnMgY3JlYXRlZCBieSBkbWl0cmkxMyAtIEZsYXRpY29uJztcblxuICAgIGNvbnN0IGNsb2NrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGNsb2NrSWNvbi5zcmMgPSBDbG9jaztcbiAgICBjbG9ja0ljb24uYWx0ID0gXCJjbG9jayArIG9wZW4gaG91cnNcIjtcbiAgICBcbiAgICBjb25zdCBwaG9uZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgcGhvbmVMaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvaXBob25lJztcbiAgICBwaG9uZUxpbmsudGl0bGUgPSAnSXBob25lIGljb25zIGNyZWF0ZWQgYnkgZGVlbWFrZGFrc2luYSAtIEZsYXRpY29uJztcblxuICAgIGNvbnN0IHBob25lSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIHBob25lSWNvbi5zcmMgPSBQaG9uZTtcbiAgICBwaG9uZUljb24uYWx0ID0gJ3Bob25lICsgcGhvbmUgbnVtYmVyJztcblxuICAgIGNvbnN0IGVtYWlsTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBlbWFpbExpbmsuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9lbWFpbCc7XG4gICAgZW1haWxMaW5rLnRpdGxlID0gJ0VtYWlsIGljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uJztcblxuICAgIGNvbnN0IGVtYWlsSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGVtYWlsSWNvbi5zcmMgPSBFbWFpbDtcbiAgICBlbWFpbEljb24uYWx0ID0gJ2VtYWlsICsgZW1haWwgYWRkcmVzcyc7XG5cbiAgICAvL2FkZCBjbGFzc2VzXG4gICAgYm9keUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2R5LWNvbnRhaW5lcicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keS1jb250YWN0Jyk7XG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtbGVmdCcpO1xuICAgIG1hcENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXJpZ2h0Jyk7XG4gICAgbG9jYXRpb25JY29uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaWNvbnMnKTtcbiAgICBjbG9ja0ljb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pY29ucycpO1xuICAgIHBob25lSWNvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWljb25zJyk7XG4gICAgZW1haWxJY29uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaWNvbnMnKTtcblxuICAgIC8vYWRkIGlubmVyIEhUTUwgXG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPSAnMTEzLTQgRGFsamVvbiByb2FkLCBHYXB5ZW9uZywgR3llb25nZ2ksIFNLJztcbiAgICBvcGVyYXRpb25Ib3Vycy5pbm5lckhUTUwgPSAnTW9uLUZyaTogOXBtfjJhbTxicj5TYXQtU3VuOiA5cG1+NmFtJztcbiAgICBwaG9uZU51bWJlci5pbm5lckhUTUwgPSAnKzgyIDAxMC1NSUxLLTkyMTAnO1xuICAgIGVtYWlsLmlubmVySFRNTCA9ICdnaXZlbWVtaWxrQG1pbGsuY29tJztcblxuICAgIC8vYXBwZW5kIHRvIHBhZ2VcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHlDb250YWluZXIpO1xuICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChsb2NhdGlvbkluZm9Db250YWluZXIpO1xuICAgIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkxpbmspOyAvL2hlcmVcbiAgICBsb2NhdGlvbkxpbmsuYXBwZW5kQ2hpbGQobG9jYXRpb25JY29uKTsgICAgICAgICAvL2hlcmVcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb2NrTGluayk7XG4gICAgY2xvY2tMaW5rLmFwcGVuZENoaWxkKGNsb2NrSWNvbilcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQob3BlcmF0aW9uSG91cnMpO1xuICAgIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZUxpbmspO1xuICAgIHBob25lTGluay5hcHBlbmRDaGlsZChwaG9uZUljb24pO1xuICAgIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChwaG9uZU51bWJlcik7XG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsTGluayk7XG4gICAgZW1haWxMaW5rLmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKG1hcENvbnRhaW5lcik7XG4gICAgbWFwQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hcFZpZXcpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59OyIsIi8vaW1wb3J0IGltZ3NcbmltcG9ydCBtaWxrU2Nvb3BJbWcgZnJvbSAnLi9pbWdzL21pbGstc2Nvb3AuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICAvL2JvZHkgLSBob21lIHBhZ2VcbiAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvZHlUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib2R5TWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm9keUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgLy9hZGQgaW1hZ2UgKyBhY2Nlc3NpYmlsaXR5XG4gICAgY29uc3QgbWlsa1Njb29wID0gbmV3IEltYWdlKCk7XG4gICAgbWlsa1Njb29wLnNyYyA9IG1pbGtTY29vcEltZztcbiAgICBtaWxrU2Nvb3AuYWx0ID0gJ0hhbmRzIHNjb29waW5nIGRlbGljaW91cyBtaWxrJztcblxuICAgIC8vYWRkIGNsYXNzZXNcbiAgICBib2R5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvZHktY29udGFpbmVyJyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5LWhvbWUnKTtcbiAgICBtaWxrU2Nvb3AuY2xhc3NMaXN0LmFkZCgnYm9keS1pbWctY29udGFpbmVyJyk7XG5cbiAgICAvL2FkZCBpbm5lciBIVE1MXG4gICAgYm9keVRvcC5pbm5lckhUTUwgPSBgVGhlIGJlc3QgbWlsayBoYW5kcyBkb3duISBcbiAgICBJJ3ZlIGtub3duIG1pbGsgZm9yIG1hbnkgeWVhcnMsIHdlIGdvIHdheSBiYWNrLiBcbiAgICBJIGtub3cgYWxsIHRoZSBiZXN0IGNvd3Mgd2l0aCBhbGwgdGhlIGJlc3QgbWlsaywgXG4gICAgYmVsaWV2ZSBtZWA7XG4gICAgYm9keUxvdy5pbm5lckhUTUwgPSBgT3VyIGZhbWlseSB3YXMgdGhlIGZpcnN0IFxuICAgIHRvIGRpc2NvdmVyIG1pbGsgZnJvbSBjb3dzLi4gXG4gICAgZG9uJ3QgYXNrIHVzIGhvd2A7XG5cbiAgICAvL2FwcGVuZCB0byBwYWdlXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5Q29udGFpbmVyKTtcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYm9keVRvcCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChib2R5TWlkKTtcbiAgICBib2R5TWlkLmFwcGVuZENoaWxkKG1pbGtTY29vcCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChib2R5TG93KTsgICAgXG5cbiAgICByZXR1cm4gY29udGVudDtcbn07IiwiLy9pbWFnZXNcbmltcG9ydCBHbGFzc01pbGsgZnJvbSAnLi9pbWdzL3JlZy1taWxrLmpwZyc7XG5pbXBvcnQgQmlnR2xhc3NNaWxrIGZyb20gJy4vaW1ncy9iaWctbWlsay5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51UGFnZSgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIFxuICAgIC8vYm9keSAtIG1lbnUgcGFnZVxuICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vc2V0IGltcG9ydGVkIGltYWdlc1xuICAgIGNvbnN0IHJlZ01pbGsgPSBuZXcgSW1hZ2UoKTtcbiAgICByZWdNaWxrLnNyYyA9IEdsYXNzTWlsaztcbiAgICByZWdNaWxrLmFsdCA9ICdyZWd1bGFyIGdsYXNzIG9mIG1pbGsnO1xuXG4gICAgY29uc3QgYmlnTWlsayA9IG5ldyBJbWFnZSgpO1xuICAgIGJpZ01pbGsuc3JjID0gQmlnR2xhc3NNaWxrO1xuICAgIGJpZ01pbGsuYWx0ID0gJ2EgdmVyeSBiaWcgZ2xhc3Mgb2YgbWlsayc7XG5cbiAgICAvL2FkZCBjbGFzc2VzXG4gICAgYm9keUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2R5LWNvbnRhaW5lcicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9keS1tZW51Jyk7XG5cbiAgICBtZW51SXRlbTEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbWVudUl0ZW0yLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgLy9hZGQgaW5uZXIgSFRNTFxuICAgIG1lbnVJdGVtMS5pbm5lckhUTUwgPSBgPHN0cm9uZz5NaWxrPC9zdHJvbmc+MjBgO1xuICAgIG1lbnVJdGVtMi5pbm5lckhUTUwgPSBgPHN0cm9uZz5CaWcgTWlsazwvc3Ryb25nPjE5YDtcblxuICAgIC8vYXBwZW5kIHRvIHBhZ2VcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHlDb250YWluZXIpO1xuICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgICBtZW51SXRlbTEuYXBwZW5kQ2hpbGQocmVnTWlsayk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbTEpO1xuXG4gICAgbWVudUl0ZW0yLmFwcGVuZENoaWxkKGJpZ01pbGspO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vY3NzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy9pbWFnZXNcbmltcG9ydCBNaWxrIGZyb20gJy4vaW1ncy9taWxrLXBhbGUuZ2lmJztcblxuLy9tb2R1bGVzXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBtZW51UGFnZSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgLy9zZXQgaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgICAgICAgICAgLy9oZWFkZXJcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgICAgICAgICAgLy90aXRsZVxuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgICAgICAgLy9hcHBlbmQgdG8gaGVhZGVyXG4gICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAgICAgICAvL2FwcGVuZCB0byBoZWFkZXJcbiAgICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7ICAgIC8vYXBwZW5kIHRvIGhlYWRlclxuXG4gICAgLy9hZGQgaGVhZGVyIGljb25cbiAgICBjb25zdCBtaWxrSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbWlsa0ltYWdlLmhyZWYgPSAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtYW5pbWF0ZWQtaWNvbnMvZGFpcnktcHJvZHVjdHMnO1xuICAgIG1pbGtJbWFnZS50aXRsZSA9ICdEYWlyeSBwcm9kdWN0cyBhbmltYXRlZCBpY29ucyBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvbic7XG5cbiAgICBjb25zdCBtaWxrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG1pbGtJY29uLnNyYyA9IE1pbGs7XG4gICAgbWlsa0ljb24uYWx0ID0gJ21pbGsgaGVhZGVyIGljb24nO1xuXG4gICAgLy9hc3NpZ24gY3NzXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJ1dHRvbnMnKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b25zJyk7XG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucycpO1xuXG4gICAgbWlsa0ljb24uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1pbGsnKTtcblxuICAgIC8vc2V0IGlubmVySFRNTFxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdMYXR0ZSBhIGxhIExlY2hlJztcbiAgICBob21lVGFiLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBtZW51VGFiLmlubmVySFRNTCA9ICdNZW51JztcbiAgICBjb250YWN0VGFiLmlubmVySFRNTCA9ICdDb250YWN0JztcblxuICAgIC8vYXBwZW5kIHRvIHBhZ2VcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWlsa0ltYWdlKTtcbiAgICBtaWxrSW1hZ2UuYXBwZW5kQ2hpbGQobWlsa0ljb24pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cbiAgICAvL2V2ZW50IGxpc3RlbmVycyAtIGNhbGwgaW1wb3J0ZWQgbW9kdWxlcyB3aGVuIGNsaWNrZWRcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudVBhZ2UoKSk7XG4gICAgICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgICAgIG1lbnVUYWIuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHktY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFsbFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblxuICAgICAgICBhbGxUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10YWInKTtcbiAgICAgICAgICAgIHRhYi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRhYicpO1xuICAgICAgICBob21lVGFiLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYm9keUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob21lUGFnZSgpKTsgXG4gICAgfSk7XG5cbiAgICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWxsVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXG4gICAgICAgIGFsbFRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRhYicpO1xuICAgICAgICAgICAgdGFiLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgICAgIG1lbnVUYWIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBib2R5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVQYWdlKCkpO1xuICAgIH0pO1xuXG4gICAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHktY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFsbFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblxuICAgICAgICBhbGxUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10YWInKTtcbiAgICAgICAgICAgIHRhYi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRhYicpO1xuICAgICAgICBjb250YWN0VGFiLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYm9keUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWN0UGFnZSgpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZW50O1xufTtcblxuY29tcG9uZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9