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
	font-size: 8.5rem;
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
	height: 300px;
	width: 230px;
    grid-template-rows: 2fr 1fr 1fr;
    justify-items: center;
    align-items: center;
	background: black;
	border-radius: var(--border-radius);
	padding: 10px;
}

.menu-item > img {
	grid-row: 1 / 2;
    height: 100%;
    width: 100%;
    border: 1px solid red;
    border-radius: var(--border-radius);
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,cAAc;AACd;IACI,SAAS;CACZ,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA;CACC,mBAAmB;CACnB,yDAA6C;CAC7C,0BAA0B;CAC1B,4BAA4B;AAC7B;;AAEA;CACC,gCAAgC;CAChC,uBAAuB;CACvB,qBAAqB;CACrB,qBAAqB;AACtB;;AAEA,iBAAiB;;AAEjB;CACC,oBAAoB;CACpB,4CAA2B;CAC3B,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,4CAAyB;CACzB,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,aAAa;CACb,2BAA2B;AAC5B;;AAEA,WAAW;;AAEX;CACC,aAAa;CACb,kDAAkD;IAC/C,4BAA4B;CAC/B,4CAA4C;CAC5C,aAAa;IACV,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,kBAAkB;IACf,YAAY;IACZ,oCAAoC;CACvC,iBAAiB;CACjB,aAAa;CACb,gBAAgB;CAChB,2BAA2B;CAC3B,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,iBAAiB;CACjB,gBAAgB;CAChB,6BAA6B;CAC7B,aAAa;AACd;;AAEA;;CAEC,eAAe;IACZ,2BAA2B;IAC3B,gBAAgB;IAChB,0BAA0B;IAC1B,mCAAmC;CACtC,+CAA+C;AAChD;;AAEA;CACC,0BAA0B;CAC1B,mCAAmC;CACnC,+CAA+C;AAChD;;AAEA;CACC,eAAe;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA,eAAe;;AAEf;;;CAGC,aAAa;IACV,4BAA4B;CAC/B,qCAAqC;CACrC,mCAAmC;CACnC,WAAW;CACX,UAAU;CACV,uBAAuB;CACvB,sBAAsB;CACtB,mBAAmB;CACnB,eAAe;CACf,YAAY;CACZ,mBAAmB;IAChB,qBAAqB;CACxB,kBAAkB;CAClB,aAAa;AACd;;AAEA,SAAS;;AAET;CACC,aAAa;IACV,uBAAuB;AAC3B;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,kCAAkC;CAClC,qCAAqC;AACtC;;AAEA;CACC,+BAA+B;AAChC;;AAEA,SAAS;;AAET;CACC,2DAA2D;AAC5D;;AAEA;CACC,aAAa;CACb,aAAa;CACb,YAAY;IACT,+BAA+B;IAC/B,qBAAqB;IACrB,mBAAmB;CACtB,iBAAiB;CACjB,mCAAmC;CACnC,aAAa;AACd;;AAEA;CACC,eAAe;IACZ,YAAY;IACZ,WAAW;IACX,qBAAqB;IACrB,mCAAmC;AACvC;;AAEA,YAAY;;AAEZ;CACC,8BAA8B;AAC/B;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,mCAAmC;CACnC,+BAA+B;CAC/B,WAAW;IACR,WAAW;IACX,mBAAmB;IACnB,uBAAuB;CAC1B,aAAa;CACb,qBAAqB;IAClB,mBAAmB;CACtB,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,mBAAmB;IAChB,uBAAuB;CAC1B,aAAa;CACb,WAAW;CACX,UAAU;AACX;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,mCAAmC;CACnC,qCAAqC;CACrC,4BAA4B;CAC5B,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,gCAAgC;AACjC","sourcesContent":["/* css reset */\n* {\n    margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\nhtml {\n\t/* height: 100vh; */\n\tbackground-image: url(./imgs/milk-splash.jpg);\n\tbackground-size: 100% 100%;\n\tbackground-attachment: fixed;\n}\n\n:root {\n\t--div-color: rgb(67 67 67 / 80%);\n\t--border-color: #ffd900;\n\t--border-radius: 25px;\n\t--image-border: 250px;\n}\n\n/* custom fonts */\n\n@font-face {\n\tfont-family: 'title';\n\tsrc: url(./fonts/title.ttf);\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'tabs';\n\tsrc: url(./fonts/tab.ttf);\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n.content {\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 3fr;\n}\n\n/* header */\n\n.header {\n\tdisplay: grid;\n\tgrid-template-columns: 0.5fr 2fr 0.5fr 0.5fr 0.5fr;\n    background: var(--div-color);\n\tborder-bottom: 1px solid var(--border-color);\n\theight: 10rem;\n    align-items: end;\n    justify-items: center;\n}\n\n.header-milk {\n\theight: 9rem;\n}\n\n.title {\n\theight: 100%;\n\twidth: 100%;\n\tfont-family: title;\n    color: white;\n    text-shadow: 14px 12px 3px #ffd700a8;\n\tfont-size: 8.5rem;\n\tdisplay: flex;\n\talign-items: end;\n\tjustify-content: flex-start;\n\twhite-space: nowrap;\n}\n\n.header-buttons {\n\tfont-family: tabs;\n\tcolor: white;\n\tfont-size: 2.5rem;\n\tbackground: none;\n\ttransition: ease-in-out 0.25s;\n\tpadding: 1rem;\n}\n\n.header-buttons:hover,\n.header-buttons:focus {\n\tcursor: pointer;\n    transform: translateY(-8px);\n    background: none;\n    color: var(--border-color);\n    border-radius: var(--border-radius);\n\tbox-shadow: 1px 1px 0px 0px var(--border-color);\n}\n\n.selected-tab {\n\tcolor: var(--border-color);\n\tborder-radius: var(--border-radius);\n\tbox-shadow: 1px 1px 0px 0px var(--border-color);\n}\n\n.selected-tab:hover {\n\tcursor: default;\n    transform: none;\n    background: none;\n}\n\n/* all 3 tabs */\n\n.body-home,\n.body-menu,\n.body-contact {\n\tdisplay: grid;\n    background: var(--div-color);\n\tborder: 1px solid var(--border-color);\n\tborder-radius: var(--border-radius);\n\theight: 90%;\n\twidth: 55%;\n\tmin-height: min-content;\n\tmin-width: min-content;\n\tfont-family: 'tabs';\n\tfont-size: 32px;\n\tcolor: white;\n\talign-items: center;\n    justify-items: center;\n\ttext-align: center;\n\tpadding: 20px;\n}\n\n/* Home */\n\n.body-container {\n\tdisplay: flex;\n    justify-content: center;\n}\n\n.body-img-container {\n\theight: 20rem;\n\twidth: 20rem; \n\tborder-radius: var(--image-border);\n\tborder: 1px solid var(--border-color);\n}\n\n.body-home {\n\tgrid-template-rows: 1fr 2fr 1fr;\n}\n\n/* Menu */\n\n.body-menu {\n\tgrid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n}\n\n.menu-item {\n\tdisplay: grid;\n\theight: 300px;\n\twidth: 230px;\n    grid-template-rows: 2fr 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n\tbackground: black;\n\tborder-radius: var(--border-radius);\n\tpadding: 10px;\n}\n\n.menu-item > img {\n\tgrid-row: 1 / 2;\n    height: 100%;\n    width: 100%;\n    border: 1px solid red;\n    border-radius: var(--border-radius);\n}\n\n/* Contact */\n\n.body-contact {\n\tgrid-template-columns: 1fr 2fr;\n}\n\n.contact-left {\n\tgrid-column: 1 / 2;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr 1fr 1fr;\n\tgrid-template-columns:  1fr 8fr;\n\theight: 70%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n\tpadding: 10px;\n\tjustify-items: center;\n    align-items: center;\n\tcolumn-gap: 10px;\n\tfont-size: 25px;\n}\n\n.contact-icons {\n\theight: 40px;\n\tfilter: invert(1);\n}\n\n.contact-right {\n\tgrid-column: 2 / 3;\n\tdisplay: flex;\n\talign-items: center;\n    justify-content: center;\n\tpadding: 10px;\n\theight: 70%;\n\twidth: 80%;\n}\n\niframe {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: var(--border-radius);\n\tborder: 1px solid var(--border-color);\n\ttransition: ease-in-out 0.3s;\n\t/* padding: 10px; */\n}\n\niframe:hover {\n\ttransform: scale(1.05);\n\tbox-shadow: 20px 20px 40px black;\n}"],"sourceRoot":""}]);
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
//images


function menuPage() {

    const content = document.getElementById('content');
    
    //body - menu page
    const bodyContainer = document.createElement('div');
    const menuContainer = document.createElement('div');
    const menuItem1 = document.createElement('div');

    //set imported images
    const regMilk = new Image();
    regMilk.src = _imgs_reg_milk_jpg__WEBPACK_IMPORTED_MODULE_0__;
    regMilk.alt = 'regular glass of milk';
    

    //add classes
    bodyContainer.classList.add('body-container');
    menuContainer.classList.add('body-menu');
    menuItem1.classList.add('menu-item');

    //add inner HTML
    menuItem1.innerHTML = `<strong>Milk</strong>20`;

    //append to page
    content.appendChild(bodyContainer);
    bodyContainer.appendChild(menuContainer);

    menuItem1.appendChild(regMilk);
    menuContainer.appendChild(menuItem1);

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

module.exports = __webpack_require__.p + "72420d27c4a190097a01.jpg";

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










    //event listeners - set content between tabs
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZ3MvbWlsay1zcGxhc2guanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy90aXRsZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3RhYi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogY3NzIHJlc2V0ICovXG4qIHtcbiAgICBtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmh0bWwge1xuXHQvKiBoZWlnaHQ6IDEwMHZoOyAqL1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG46cm9vdCB7XG5cdC0tZGl2LWNvbG9yOiByZ2IoNjcgNjcgNjcgLyA4MCUpO1xuXHQtLWJvcmRlci1jb2xvcjogI2ZmZDkwMDtcblx0LS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuXHQtLWltYWdlLWJvcmRlcjogMjUwcHg7XG59XG5cbi8qIGN1c3RvbSBmb250cyAqL1xuXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6ICd0aXRsZSc7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ3RhYnMnO1xuXHRzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY29udGVudCB7XG5cdGhlaWdodDogMTAwdmg7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmcjtcbn1cblxuLyogaGVhZGVyICovXG5cbi5oZWFkZXIge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmciAwLjVmciAwLjVmciAwLjVmcjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXYtY29sb3IpO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblx0aGVpZ2h0OiAxMHJlbTtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1taWxrIHtcblx0aGVpZ2h0OiA5cmVtO1xufVxuXG4udGl0bGUge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LWZhbWlseTogdGl0bGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxNHB4IDEycHggM3B4ICNmZmQ3MDBhODtcblx0Zm9udC1zaXplOiA4LjVyZW07XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBlbmQ7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmhlYWRlci1idXR0b25zIHtcblx0Zm9udC1mYW1pbHk6IHRhYnM7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAyLjVyZW07XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMjVzO1xuXHRwYWRkaW5nOiAxcmVtO1xufVxuXG4uaGVhZGVyLWJ1dHRvbnM6aG92ZXIsXG4uaGVhZGVyLWJ1dHRvbnM6Zm9jdXMge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG5cdGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDBweCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG4uc2VsZWN0ZWQtdGFiIHtcblx0Y29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG5cdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuXHRib3gtc2hhZG93OiAxcHggMXB4IDBweCAwcHggdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuLnNlbGVjdGVkLXRhYjpob3ZlciB7XG5cdGN1cnNvcjogZGVmYXVsdDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLyogYWxsIDMgdGFicyAqL1xuXG4uYm9keS1ob21lLFxuLmJvZHktbWVudSxcbi5ib2R5LWNvbnRhY3Qge1xuXHRkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdi1jb2xvcik7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuXHRoZWlnaHQ6IDkwJTtcblx0d2lkdGg6IDU1JTtcblx0bWluLWhlaWdodDogbWluLWNvbnRlbnQ7XG5cdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XG5cdGZvbnQtZmFtaWx5OiAndGFicyc7XG5cdGZvbnQtc2l6ZTogMzJweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiBIb21lICovXG5cbi5ib2R5LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib2R5LWltZy1jb250YWluZXIge1xuXHRoZWlnaHQ6IDIwcmVtO1xuXHR3aWR0aDogMjByZW07IFxuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1ib3JkZXIpO1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG4uYm9keS1ob21lIHtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcbn1cblxuLyogTWVudSAqL1xuXG4uYm9keS1tZW51IHtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzODBweCwgMWZyKSk7XG59XG5cbi5tZW51LWl0ZW0ge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRoZWlnaHQ6IDMwMHB4O1xuXHR3aWR0aDogMjMwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0YmFja2dyb3VuZDogYmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuXHRwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWVudS1pdGVtID4gaW1nIHtcblx0Z3JpZC1yb3c6IDEgLyAyO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi8qIENvbnRhY3QgKi9cblxuLmJvZHktY29udGFjdCB7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcbn1cblxuLmNvbnRhY3QtbGVmdCB7XG5cdGdyaWQtY29sdW1uOiAxIC8gMjtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogIDFmciA4ZnI7XG5cdGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXHRjb2x1bW4tZ2FwOiAxMHB4O1xuXHRmb250LXNpemU6IDI1cHg7XG59XG5cbi5jb250YWN0LWljb25zIHtcblx0aGVpZ2h0OiA0MHB4O1xuXHRmaWx0ZXI6IGludmVydCgxKTtcbn1cblxuLmNvbnRhY3QtcmlnaHQge1xuXHRncmlkLWNvbHVtbjogMiAvIDM7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGhlaWdodDogNzAlO1xuXHR3aWR0aDogODAlO1xufVxuXG5pZnJhbWUge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblx0dHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcblx0LyogcGFkZGluZzogMTBweDsgKi9cbn1cblxuaWZyYW1lOmhvdmVyIHtcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcblx0Ym94LXNoYWRvdzogMjBweCAyMHB4IDQwcHggYmxhY2s7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZDtJQUNJLFNBQVM7Q0FDWixVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHlEQUE2QztDQUM3QywwQkFBMEI7Q0FDMUIsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0MsZ0NBQWdDO0NBQ2hDLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIscUJBQXFCO0FBQ3RCOztBQUVBLGlCQUFpQjs7QUFFakI7Q0FDQyxvQkFBb0I7Q0FDcEIsNENBQTJCO0NBQzNCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsNENBQXlCO0NBQ3pCLGdCQUFnQjtDQUNoQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLDJCQUEyQjtBQUM1Qjs7QUFFQSxXQUFXOztBQUVYO0NBQ0MsYUFBYTtDQUNiLGtEQUFrRDtJQUMvQyw0QkFBNEI7Q0FDL0IsNENBQTRDO0NBQzVDLGFBQWE7SUFDVixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxrQkFBa0I7SUFDZixZQUFZO0lBQ1osb0NBQW9DO0NBQ3ZDLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLDJCQUEyQjtDQUMzQixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIsNkJBQTZCO0NBQzdCLGFBQWE7QUFDZDs7QUFFQTs7Q0FFQyxlQUFlO0lBQ1osMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsbUNBQW1DO0NBQ3RDLCtDQUErQztBQUNoRDs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixtQ0FBbUM7Q0FDbkMsK0NBQStDO0FBQ2hEOztBQUVBO0NBQ0MsZUFBZTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUEsZUFBZTs7QUFFZjs7O0NBR0MsYUFBYTtJQUNWLDRCQUE0QjtDQUMvQixxQ0FBcUM7Q0FDckMsbUNBQW1DO0NBQ25DLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7SUFDaEIscUJBQXFCO0NBQ3hCLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7O0FBRUEsU0FBUzs7QUFFVDtDQUNDLGFBQWE7SUFDVix1QkFBdUI7QUFDM0I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLGtDQUFrQztDQUNsQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQywrQkFBK0I7QUFDaEM7O0FBRUEsU0FBUzs7QUFFVDtDQUNDLDJEQUEyRDtBQUM1RDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IsWUFBWTtJQUNULCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsbUJBQW1CO0NBQ3RCLGlCQUFpQjtDQUNqQixtQ0FBbUM7Q0FDbkMsYUFBYTtBQUNkOztBQUVBO0NBQ0MsZUFBZTtJQUNaLFlBQVk7SUFDWixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLG1DQUFtQztBQUN2Qzs7QUFFQSxZQUFZOztBQUVaO0NBQ0MsOEJBQThCO0FBQy9COztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixtQ0FBbUM7Q0FDbkMsK0JBQStCO0NBQy9CLFdBQVc7SUFDUixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHVCQUF1QjtDQUMxQixhQUFhO0NBQ2IscUJBQXFCO0lBQ2xCLG1CQUFtQjtDQUN0QixnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLG1CQUFtQjtJQUNoQix1QkFBdUI7Q0FDMUIsYUFBYTtDQUNiLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLG1DQUFtQztDQUNuQyxxQ0FBcUM7Q0FDckMsNEJBQTRCO0NBQzVCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixnQ0FBZ0M7QUFDakNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY3NzIHJlc2V0ICovXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbmh0bWwge1xcblxcdC8qIGhlaWdodDogMTAwdmg7ICovXFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1ncy9taWxrLXNwbGFzaC5qcGcpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcblxcdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbjpyb290IHtcXG5cXHQtLWRpdi1jb2xvcjogcmdiKDY3IDY3IDY3IC8gODAlKTtcXG5cXHQtLWJvcmRlci1jb2xvcjogI2ZmZDkwMDtcXG5cXHQtLWJvcmRlci1yYWRpdXM6IDI1cHg7XFxuXFx0LS1pbWFnZS1ib3JkZXI6IDI1MHB4O1xcbn1cXG5cXG4vKiBjdXN0b20gZm9udHMgKi9cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ3RpdGxlJztcXG5cXHRzcmM6IHVybCguL2ZvbnRzL3RpdGxlLnR0Zik7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAndGFicyc7XFxuXFx0c3JjOiB1cmwoLi9mb250cy90YWIudHRmKTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLmNvbnRlbnQge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAyZnIgMC41ZnIgMC41ZnIgMC41ZnI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdi1jb2xvcik7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuXFx0aGVpZ2h0OiAxMHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGVuZDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLW1pbGsge1xcblxcdGhlaWdodDogOXJlbTtcXG59XFxuXFxuLnRpdGxlIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Zm9udC1mYW1pbHk6IHRpdGxlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiAxNHB4IDEycHggM3B4ICNmZmQ3MDBhODtcXG5cXHRmb250LXNpemU6IDguNXJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5oZWFkZXItYnV0dG9ucyB7XFxuXFx0Zm9udC1mYW1pbHk6IHRhYnM7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0dHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4yNXM7XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmhlYWRlci1idXR0b25zOmhvdmVyLFxcbi5oZWFkZXItYnV0dG9uczpmb2N1cyB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDBweCAwcHggdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLnNlbGVjdGVkLXRhYiB7XFxuXFx0Y29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFx0Ym94LXNoYWRvdzogMXB4IDFweCAwcHggMHB4IHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5zZWxlY3RlZC10YWI6aG92ZXIge1xcblxcdGN1cnNvcjogZGVmYXVsdDtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG4vKiBhbGwgMyB0YWJzICovXFxuXFxuLmJvZHktaG9tZSxcXG4uYm9keS1tZW51LFxcbi5ib2R5LWNvbnRhY3Qge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdi1jb2xvcik7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXHRoZWlnaHQ6IDkwJTtcXG5cXHR3aWR0aDogNTUlO1xcblxcdG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuXFx0Zm9udC1mYW1pbHk6ICd0YWJzJztcXG5cXHRmb250LXNpemU6IDMycHg7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMjBweDtcXG59XFxuXFxuLyogSG9tZSAqL1xcblxcbi5ib2R5LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ib2R5LWltZy1jb250YWluZXIge1xcblxcdGhlaWdodDogMjByZW07XFxuXFx0d2lkdGg6IDIwcmVtOyBcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1ib3JkZXIpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5ib2R5LWhvbWUge1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XFxufVxcblxcbi8qIE1lbnUgKi9cXG5cXG4uYm9keS1tZW51IHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM4MHB4LCAxZnIpKTtcXG59XFxuXFxuLm1lbnUtaXRlbSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRoZWlnaHQ6IDMwMHB4O1xcblxcdHdpZHRoOiAyMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyIDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJhY2tncm91bmQ6IGJsYWNrO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tZW51LWl0ZW0gPiBpbWcge1xcblxcdGdyaWQtcm93OiAxIC8gMjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLyogQ29udGFjdCAqL1xcblxcbi5ib2R5LWNvbnRhY3Qge1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG59XFxuXFxuLmNvbnRhY3QtbGVmdCB7XFxuXFx0Z3JpZC1jb2x1bW46IDEgLyAyO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyIDhmcjtcXG5cXHRoZWlnaHQ6IDcwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0anVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGNvbHVtbi1nYXA6IDEwcHg7XFxuXFx0Zm9udC1zaXplOiAyNXB4O1xcbn1cXG5cXG4uY29udGFjdC1pY29ucyB7XFxuXFx0aGVpZ2h0OiA0MHB4O1xcblxcdGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4uY29udGFjdC1yaWdodCB7XFxuXFx0Z3JpZC1jb2x1bW46IDIgLyAzO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRoZWlnaHQ6IDcwJTtcXG5cXHR3aWR0aDogODAlO1xcbn1cXG5cXG5pZnJhbWUge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcblxcdHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XFxuXFx0LyogcGFkZGluZzogMTBweDsgKi9cXG59XFxuXFxuaWZyYW1lOmhvdmVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcblxcdGJveC1zaGFkb3c6IDIwcHggMjBweCA0MHB4IGJsYWNrO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vaW1wb3J0IGltZ3NcbmltcG9ydCBMb2NhdGlvblBpbiBmcm9tICcuL2ltZ3MvbG9jYXRpb24ucG5nJztcbmltcG9ydCBDbG9jayBmcm9tICcuL2ltZ3MvY2xvY2sucG5nJztcbmltcG9ydCBQaG9uZSBmcm9tICcuL2ltZ3MvaXBob25lLnBuZyc7XG5pbXBvcnQgRW1haWwgZnJvbSAnLi9pbWdzL21haWwucG5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdFBhZ2UoKSB7XG4gICAgXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgXG4gICAgLy9ib2R5IC0gbWVudSBwYWdlXG4gICAgY29uc3QgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb2NhdGlvbkluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgb3BlcmF0aW9uSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29uc3QgbWFwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFwVmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuXG4gICAgbWFwVmlldy5zcmMgPSBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDE1NzYuMTQ4MDY0MTM0MDIwNiEyZDEyNy41MjQ3NDkyMTk5MTUwMSEzZDM3LjgwNjUzMjIxODQ3MTk4NiEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MzU2MzI3YjM2N2IwMGU2NyUzQTB4YTVhMjI5YWZkMjRjMzg5OSEyc1N0YXJidWNrcyE1ZTAhM20yITFzZW4hMnNhdSE0djE3MDIxMTQ4ODQ2NDkhNW0yITFzZW4hMnNhdVwiO1xuICAgIG1hcFZpZXcuYWxsb3dGdWxsc2NyZWVuID0gdHJ1ZTtcblxuXG4gICAgLy9hZGQgaWNvbnMgKyBhY2Nlc3NpYmlsaXR5ICsgY3JlZGl0IGxpbmtzXG4gICAgY29uc3QgbG9jYXRpb25MaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxvY2F0aW9uTGluay5ocmVmID0gJ2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2xvY2F0aW9uJztcbiAgICBsb2NhdGlvbkxpbmsudGl0bGUgPSAnTG9jYXRpb24gaWNvbnMgY3JlYXRlZCBieSBGcmVlcGlrIC0gRmxhdGljb24nO1xuICAgIFxuICAgIGNvbnN0IGxvY2F0aW9uSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGxvY2F0aW9uSWNvbi5zcmMgPSBMb2NhdGlvblBpbjtcbiAgICBsb2NhdGlvbkljb24uYWx0ID0gJ2xvY2F0aW9uIHBpbiArIGFkZHJlc3MnO1xuICAgIFxuICAgIGNvbnN0IGNsb2NrTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBjbG9ja0xpbmsuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9jbG9jayc7XG4gICAgY2xvY2tMaW5rLnRpdGxlID0gJ0Nsb2NrIGljb25zIGNyZWF0ZWQgYnkgZG1pdHJpMTMgLSBGbGF0aWNvbic7XG5cbiAgICBjb25zdCBjbG9ja0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBjbG9ja0ljb24uc3JjID0gQ2xvY2s7XG4gICAgY2xvY2tJY29uLmFsdCA9IFwiY2xvY2sgKyBvcGVuIGhvdXJzXCI7XG4gICAgXG4gICAgY29uc3QgcGhvbmVMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIHBob25lTGluay5ocmVmID0gJ2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2lwaG9uZSc7XG4gICAgcGhvbmVMaW5rLnRpdGxlID0gJ0lwaG9uZSBpY29ucyBjcmVhdGVkIGJ5IGRlZW1ha2Rha3NpbmEgLSBGbGF0aWNvbic7XG5cbiAgICBjb25zdCBwaG9uZUljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBwaG9uZUljb24uc3JjID0gUGhvbmU7XG4gICAgcGhvbmVJY29uLmFsdCA9ICdwaG9uZSArIHBob25lIG51bWJlcic7XG5cbiAgICBjb25zdCBlbWFpbExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZW1haWxMaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvZW1haWwnO1xuICAgIGVtYWlsTGluay50aXRsZSA9ICdFbWFpbCBpY29ucyBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvbic7XG5cbiAgICBjb25zdCBlbWFpbEljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBlbWFpbEljb24uc3JjID0gRW1haWw7XG4gICAgZW1haWxJY29uLmFsdCA9ICdlbWFpbCArIGVtYWlsIGFkZHJlc3MnO1xuXG4gICAgLy9hZGQgY2xhc3Nlc1xuICAgIGJvZHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9keS1jb250YWluZXInKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHktY29udGFjdCcpO1xuICAgIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWxlZnQnKTtcbiAgICBtYXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1yaWdodCcpO1xuICAgIGxvY2F0aW9uSWNvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWljb25zJyk7XG4gICAgY2xvY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaWNvbnMnKTtcbiAgICBwaG9uZUljb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pY29ucycpO1xuICAgIGVtYWlsSWNvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWljb25zJyk7XG5cbiAgICAvL2FkZCBpbm5lciBIVE1MIFxuICAgIGFkZHJlc3MuaW5uZXJIVE1MID0gJzExMy00IERhbGplb24gcm9hZCwgR2FweWVvbmcsIEd5ZW9uZ2dpLCBTSyc7XG4gICAgb3BlcmF0aW9uSG91cnMuaW5uZXJIVE1MID0gJ01vbi1Gcmk6IDlwbX4yYW08YnI+U2F0LVN1bjogOXBtfjZhbSc7XG4gICAgcGhvbmVOdW1iZXIuaW5uZXJIVE1MID0gJys4MiAwMTAtTUlMSy05MjEwJztcbiAgICBlbWFpbC5pbm5lckhUTUwgPSAnZ2l2ZW1lbWlsa0BtaWxrLmNvbSc7XG5cbiAgICAvL2FwcGVuZCB0byBwYWdlXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5Q29udGFpbmVyKTtcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobG9jYXRpb25JbmZvQ29udGFpbmVyKTtcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25MaW5rKTsgLy9oZXJlXG4gICAgbG9jYXRpb25MaW5rLmFwcGVuZENoaWxkKGxvY2F0aW9uSWNvbik7ICAgICAgICAgLy9oZXJlXG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9ja0xpbmspO1xuICAgIGNsb2NrTGluay5hcHBlbmRDaGlsZChjbG9ja0ljb24pXG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKG9wZXJhdGlvbkhvdXJzKTtcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVMaW5rKTtcbiAgICBwaG9uZUxpbmsuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuICAgIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbExpbmspO1xuICAgIGVtYWlsTGluay5hcHBlbmRDaGlsZChlbWFpbEljb24pO1xuICAgIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbCk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChtYXBDb250YWluZXIpO1xuICAgIG1hcENvbnRhaW5lci5hcHBlbmRDaGlsZChtYXBWaWV3KTtcblxuICAgIHJldHVybiBjb250ZW50O1xufTsiLCIvL2ltcG9ydCBpbWdzXG5pbXBvcnQgbWlsa1Njb29wSW1nIGZyb20gJy4vaW1ncy9taWxrLXNjb29wLmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVQYWdlKCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgXG4gICAgLy9ib2R5IC0gaG9tZSBwYWdlXG4gICAgY29uc3QgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib2R5VG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm9keU1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvZHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIC8vYWRkIGltYWdlICsgYWNjZXNzaWJpbGl0eVxuICAgIGNvbnN0IG1pbGtTY29vcCA9IG5ldyBJbWFnZSgpO1xuICAgIG1pbGtTY29vcC5zcmMgPSBtaWxrU2Nvb3BJbWc7XG4gICAgbWlsa1Njb29wLmFsdCA9ICdIYW5kcyBzY29vcGluZyBkZWxpY2lvdXMgbWlsayc7XG5cbiAgICAvL2FkZCBjbGFzc2VzXG4gICAgYm9keUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2R5LWNvbnRhaW5lcicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keS1ob21lJyk7XG4gICAgbWlsa1Njb29wLmNsYXNzTGlzdC5hZGQoJ2JvZHktaW1nLWNvbnRhaW5lcicpO1xuXG4gICAgLy9hZGQgaW5uZXIgSFRNTFxuICAgIGJvZHlUb3AuaW5uZXJIVE1MID0gYFRoZSBiZXN0IG1pbGsgaGFuZHMgZG93biEgXG4gICAgSSd2ZSBrbm93biBtaWxrIGZvciBtYW55IHllYXJzLCB3ZSBnbyB3YXkgYmFjay4gXG4gICAgSSBrbm93IGFsbCB0aGUgYmVzdCBjb3dzIHdpdGggYWxsIHRoZSBiZXN0IG1pbGssIFxuICAgIGJlbGlldmUgbWVgO1xuICAgIGJvZHlMb3cuaW5uZXJIVE1MID0gYE91ciBmYW1pbHkgd2FzIHRoZSBmaXJzdCBcbiAgICB0byBkaXNjb3ZlciBtaWxrIGZyb20gY293cy4uIFxuICAgIGRvbid0IGFzayB1cyBob3dgO1xuXG4gICAgLy9hcHBlbmQgdG8gcGFnZVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keUNvbnRhaW5lcik7XG4gICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJvZHlUb3ApO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYm9keU1pZCk7XG4gICAgYm9keU1pZC5hcHBlbmRDaGlsZChtaWxrU2Nvb3ApO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQoYm9keUxvdyk7ICAgIFxuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59OyIsIi8vaW1hZ2VzXG5pbXBvcnQgR2xhc3NNaWxrIGZyb20gJy4vaW1ncy9yZWctbWlsay5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51UGFnZSgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIFxuICAgIC8vYm9keSAtIG1lbnUgcGFnZVxuICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvL3NldCBpbXBvcnRlZCBpbWFnZXNcbiAgICBjb25zdCByZWdNaWxrID0gbmV3IEltYWdlKCk7XG4gICAgcmVnTWlsay5zcmMgPSBHbGFzc01pbGs7XG4gICAgcmVnTWlsay5hbHQgPSAncmVndWxhciBnbGFzcyBvZiBtaWxrJztcbiAgICBcblxuICAgIC8vYWRkIGNsYXNzZXNcbiAgICBib2R5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvZHktY29udGFpbmVyJyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2R5LW1lbnUnKTtcbiAgICBtZW51SXRlbTEuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICAvL2FkZCBpbm5lciBIVE1MXG4gICAgbWVudUl0ZW0xLmlubmVySFRNTCA9IGA8c3Ryb25nPk1pbGs8L3N0cm9uZz4yMGA7XG5cbiAgICAvL2FwcGVuZCB0byBwYWdlXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5Q29udGFpbmVyKTtcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG4gICAgbWVudUl0ZW0xLmFwcGVuZENoaWxkKHJlZ01pbGspO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0xKTtcblxuICAgIHJldHVybiBjb250ZW50O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vY3NzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy9pbWFnZXNcbmltcG9ydCBNaWxrIGZyb20gJy4vaW1ncy9taWxrLXBhbGUuZ2lmJztcblxuLy9tb2R1bGVzXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBtZW51UGFnZSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdC5qcyc7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gICAgLy9zZXQgaGVhZGVyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgICAgICAgICAgLy9oZWFkZXJcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgICAgICAgICAgLy90aXRsZVxuICAgIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgICAgICAgLy9hcHBlbmQgdG8gaGVhZGVyXG4gICAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAgICAgICAvL2FwcGVuZCB0byBoZWFkZXJcbiAgICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7ICAgIC8vYXBwZW5kIHRvIGhlYWRlclxuXG4gICAgLy9hZGQgaGVhZGVyIGljb25cbiAgICBjb25zdCBtaWxrSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbWlsa0ltYWdlLmhyZWYgPSAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtYW5pbWF0ZWQtaWNvbnMvZGFpcnktcHJvZHVjdHMnO1xuICAgIG1pbGtJbWFnZS50aXRsZSA9ICdEYWlyeSBwcm9kdWN0cyBhbmltYXRlZCBpY29ucyBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvbic7XG5cbiAgICBjb25zdCBtaWxrSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG1pbGtJY29uLnNyYyA9IE1pbGs7XG4gICAgbWlsa0ljb24uYWx0ID0gJ21pbGsgaGVhZGVyIGljb24nO1xuXG4gICAgLy9hc3NpZ24gY3NzXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcblxuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJ1dHRvbnMnKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b25zJyk7XG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucycpO1xuXG4gICAgbWlsa0ljb24uY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1pbGsnKTtcblxuICAgIC8vc2V0IGlubmVySFRNTFxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdMYXR0ZSBhIGxhIExlY2hlJztcbiAgICBob21lVGFiLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBtZW51VGFiLmlubmVySFRNTCA9ICdNZW51JztcbiAgICBjb250YWN0VGFiLmlubmVySFRNTCA9ICdDb250YWN0JztcblxuICAgIC8vYXBwZW5kIHRvIHBhZ2VcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWlsa0ltYWdlKTtcbiAgICBtaWxrSW1hZ2UuYXBwZW5kQ2hpbGQobWlsa0ljb24pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvL2V2ZW50IGxpc3RlbmVycyAtIHNldCBjb250ZW50IGJldHdlZW4gdGFic1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51UGFnZSgpKTtcbiAgICAgICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10YWInKTtcbiAgICAgICAgbWVudVRhYi5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWxsVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXG4gICAgICAgIGFsbFRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRhYicpO1xuICAgICAgICAgICAgdGFiLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgICAgIGhvbWVUYWIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBib2R5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhvbWVQYWdlKCkpOyBcbiAgICB9KTtcblxuICAgIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhbGxUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5cbiAgICAgICAgYWxsVGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgICAgICAgICB0YWIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10YWInKTtcbiAgICAgICAgbWVudVRhYi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGJvZHlDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudVBhZ2UoKSk7XG4gICAgfSk7XG5cbiAgICBjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWxsVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXG4gICAgICAgIGFsbFRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRhYicpO1xuICAgICAgICAgICAgdGFiLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgICAgIGNvbnRhY3RUYWIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBib2R5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlKCkpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5jb21wb25lbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=