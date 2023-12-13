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
	/* height: 90%; */
	width: 55%;
	/* min-height: min-content;
	min-width: min-content; */
	font-family: 'tabs';
	font-size: 2rem;
	color: white;
	align-items: center;
    justify-items: center;
	text-align: center;
	padding: 1rem;
	margin-top: 3rem;
    grid-gap: 1rem;
}

/* Home */

.body-container {
	display: flex;
    justify-content: center;
	/* align-items: center; */
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
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}

.menu-item {
	display: grid;
	height: 21rem;
	width: 14rem;
    grid-template-rows: 2fr 1fr 1fr;
    justify-items: center;
    align-items: center;
	background: black;
	border-radius: var(--border-radius);
	border: 1px solid var(--border-color);
	padding: 1rem;
	box-sizing: border-box;
}

.menu-item > img {
	grid-row: 1 / 2;
    height: 15rem;
    width: 100%;
    border: 1px solid white;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,cAAc;AACd;IACI,SAAS;CACZ,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA;CACC,mBAAmB;CACnB,yDAA6C;CAC7C,0BAA0B;CAC1B,4BAA4B;AAC7B;;AAEA;CACC,gCAAgC;CAChC,uBAAuB;CACvB,qBAAqB;CACrB,qBAAqB;AACtB;;AAEA,iBAAiB;;AAEjB;CACC,oBAAoB;CACpB,4CAA2B;CAC3B,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,4CAAyB;CACzB,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,aAAa;CACb,aAAa;CACb,2BAA2B;AAC5B;;AAEA,WAAW;;AAEX;CACC,aAAa;CACb,kDAAkD;IAC/C,4BAA4B;CAC/B,4CAA4C;CAC5C,aAAa;IACV,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,kBAAkB;IACf,YAAY;IACZ,oCAAoC;CACvC,gBAAgB;CAChB,aAAa;CACb,gBAAgB;CAChB,2BAA2B;CAC3B,mBAAmB;AACpB;;AAEA;CACC,iBAAiB;CACjB,YAAY;CACZ,iBAAiB;CACjB,gBAAgB;CAChB,6BAA6B;CAC7B,aAAa;CACb,mBAAmB;AACpB;;AAEA;;CAEC,eAAe;IACZ,2BAA2B;IAC3B,gBAAgB;IAChB,0BAA0B;IAC1B,mCAAmC;CACtC,+CAA+C;AAChD;;AAEA;CACC,0BAA0B;CAC1B,mCAAmC;CACnC,+CAA+C;AAChD;;AAEA;CACC,eAAe;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA,eAAe;;AAEf;;;CAGC,aAAa;IACV,4BAA4B;CAC/B,qCAAqC;CACrC,mCAAmC;CACnC,iBAAiB;CACjB,UAAU;CACV;0BACyB;CACzB,mBAAmB;CACnB,eAAe;CACf,YAAY;CACZ,mBAAmB;IAChB,qBAAqB;CACxB,kBAAkB;CAClB,aAAa;CACb,gBAAgB;IACb,cAAc;AAClB;;AAEA,SAAS;;AAET;CACC,aAAa;IACV,uBAAuB;CAC1B,yBAAyB;AAC1B;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,kCAAkC;CAClC,qCAAqC;AACtC;;AAEA;CACC,+BAA+B;AAChC;;AAEA,SAAS;;AAET;CACC,2DAA2D;AAC5D;;AAEA;CACC,aAAa;CACb,aAAa;CACb,YAAY;IACT,+BAA+B;IAC/B,qBAAqB;IACrB,mBAAmB;CACtB,iBAAiB;CACjB,mCAAmC;CACnC,qCAAqC;CACrC,aAAa;CACb,sBAAsB;AACvB;;AAEA;CACC,eAAe;IACZ,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,mCAAmC;CACtC,sBAAsB;AACvB;;AAEA,YAAY;;AAEZ;CACC,8BAA8B;AAC/B;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,mCAAmC;CACnC,+BAA+B;CAC/B,WAAW;IACR,WAAW;IACX,mBAAmB;IACnB,uBAAuB;CAC1B,aAAa;CACb,qBAAqB;IAClB,mBAAmB;CACtB,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,mBAAmB;IAChB,uBAAuB;CAC1B,aAAa;CACb,WAAW;CACX,UAAU;AACX;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,mCAAmC;CACnC,qCAAqC;CACrC,4BAA4B;CAC5B,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,gCAAgC;AACjC","sourcesContent":["/* css reset */\n* {\n    margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\nhtml {\n\t/* height: 100vh; */\n\tbackground-image: url(./imgs/milk-splash.jpg);\n\tbackground-size: 100% 100%;\n\tbackground-attachment: fixed;\n}\n\n:root {\n\t--div-color: rgb(67 67 67 / 80%);\n\t--border-color: #ffd900;\n\t--border-radius: 25px;\n\t--image-border: 250px;\n}\n\n/* custom fonts */\n\n@font-face {\n\tfont-family: 'title';\n\tsrc: url(./fonts/title.ttf);\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'tabs';\n\tsrc: url(./fonts/tab.ttf);\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n.content {\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 3fr;\n}\n\n/* header */\n\n.header {\n\tdisplay: grid;\n\tgrid-template-columns: 0.5fr 2fr 0.5fr 0.5fr 0.5fr;\n    background: var(--div-color);\n\tborder-bottom: 1px solid var(--border-color);\n\theight: 10rem;\n    align-items: end;\n    justify-items: center;\n}\n\n.header-milk {\n\theight: 9rem;\n}\n\n.title {\n\theight: 100%;\n\twidth: 100%;\n\tfont-family: title;\n    color: white;\n    text-shadow: 14px 12px 3px #ffd700a8;\n\tfont-size: 10rem;\n\tdisplay: flex;\n\talign-items: end;\n\tjustify-content: flex-start;\n\twhite-space: nowrap;\n}\n\n.header-buttons {\n\tfont-family: tabs;\n\tcolor: white;\n\tfont-size: 2.5rem;\n\tbackground: none;\n\ttransition: ease-in-out 0.25s;\n\tpadding: 1rem;\n\tjustify-self: start;\n}\n\n.header-buttons:hover,\n.header-buttons:focus {\n\tcursor: pointer;\n    transform: translateY(-8px);\n    background: none;\n    color: var(--border-color);\n    border-radius: var(--border-radius);\n\tbox-shadow: 1px 1px 0px 0px var(--border-color);\n}\n\n.selected-tab {\n\tcolor: var(--border-color);\n\tborder-radius: var(--border-radius);\n\tbox-shadow: 1px 1px 0px 0px var(--border-color);\n}\n\n.selected-tab:hover {\n\tcursor: default;\n    transform: none;\n    background: none;\n}\n\n/* all 3 tabs */\n\n.body-home,\n.body-menu,\n.body-contact {\n\tdisplay: grid;\n    background: var(--div-color);\n\tborder: 1px solid var(--border-color);\n\tborder-radius: var(--border-radius);\n\t/* height: 90%; */\n\twidth: 55%;\n\t/* min-height: min-content;\n\tmin-width: min-content; */\n\tfont-family: 'tabs';\n\tfont-size: 2rem;\n\tcolor: white;\n\talign-items: center;\n    justify-items: center;\n\ttext-align: center;\n\tpadding: 1rem;\n\tmargin-top: 3rem;\n    grid-gap: 1rem;\n}\n\n/* Home */\n\n.body-container {\n\tdisplay: flex;\n    justify-content: center;\n\t/* align-items: center; */\n}\n\n.body-img-container {\n\theight: 20rem;\n\twidth: 20rem; \n\tborder-radius: var(--image-border);\n\tborder: 1px solid var(--border-color);\n}\n\n.body-home {\n\tgrid-template-rows: 1fr 2fr 1fr;\n}\n\n/* Menu */\n\n.body-menu {\n\tgrid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n}\n\n.menu-item {\n\tdisplay: grid;\n\theight: 21rem;\n\twidth: 14rem;\n    grid-template-rows: 2fr 1fr 1fr;\n    justify-items: center;\n    align-items: center;\n\tbackground: black;\n\tborder-radius: var(--border-radius);\n\tborder: 1px solid var(--border-color);\n\tpadding: 1rem;\n\tbox-sizing: border-box;\n}\n\n.menu-item > img {\n\tgrid-row: 1 / 2;\n    height: 15rem;\n    width: 100%;\n    border: 1px solid white;\n    border-radius: var(--border-radius);\n\tbox-sizing: border-box;\n}\n\n/* Contact */\n\n.body-contact {\n\tgrid-template-columns: 1fr 2fr;\n}\n\n.contact-left {\n\tgrid-column: 1 / 2;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr 1fr 1fr;\n\tgrid-template-columns:  1fr 8fr;\n\theight: 70%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n\tpadding: 10px;\n\tjustify-items: center;\n    align-items: center;\n\tcolumn-gap: 10px;\n\tfont-size: 25px;\n}\n\n.contact-icons {\n\theight: 40px;\n\tfilter: invert(1);\n}\n\n.contact-right {\n\tgrid-column: 2 / 3;\n\tdisplay: flex;\n\talign-items: center;\n    justify-content: center;\n\tpadding: 10px;\n\theight: 70%;\n\twidth: 80%;\n}\n\niframe {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: var(--border-radius);\n\tborder: 1px solid var(--border-color);\n\ttransition: ease-in-out 0.3s;\n\t/* padding: 10px; */\n}\n\niframe:hover {\n\ttransform: scale(1.05);\n\tbox-shadow: 20px 20px 40px black;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _imgs_raw_milk_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/raw-milk.jpg */ "./src/imgs/raw-milk.jpg");
/* harmony import */ var _imgs_spoon_milk_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/spoon-milk.jpg */ "./src/imgs/spoon-milk.jpg");
/* harmony import */ var _imgs_orange_milk_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/orange-milk.jpg */ "./src/imgs/orange-milk.jpg");
/* harmony import */ var _imgs_mug_milk_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/mug-milk.jpg */ "./src/imgs/mug-milk.jpg");
/* harmony import */ var _imgs_milk_coffee_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/milk-coffee.jpg */ "./src/imgs/milk-coffee.jpg");
/* harmony import */ var _imgs_chocy_milk_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgs/chocy-milk.jpg */ "./src/imgs/chocy-milk.jpg");
/* harmony import */ var _imgs_straw_milk_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imgs/straw-milk.jpg */ "./src/imgs/straw-milk.jpg");
//images










function menuPage() {

    const content = document.getElementById('content');
    
    //body - menu page
    const bodyContainer = document.createElement('div');
    const menuContainer = document.createElement('div');

    const menuItem1 = document.createElement('div');
    const menuItem2 = document.createElement('div');
    const menuItem3 = document.createElement('div');
    const menuItem4 = document.createElement('div');
    const menuItem5 = document.createElement('div');
    const menuItem6 = document.createElement('div');
    const menuItem7 = document.createElement('div');
    const menuItem8 = document.createElement('div');
    const menuItem9 = document.createElement('div');
    
    //set imported images
    const regMilk = new Image();
    regMilk.src = _imgs_reg_milk_jpg__WEBPACK_IMPORTED_MODULE_0__;
    regMilk.alt = 'regular-sized glass of milk';

    const bigMilk = new Image();
    bigMilk.src = _imgs_big_milk_jpg__WEBPACK_IMPORTED_MODULE_1__;
    bigMilk.alt = 'a very big glass of milk';

    const rawMilk = new Image();
    rawMilk.src = _imgs_raw_milk_jpg__WEBPACK_IMPORTED_MODULE_2__;
    rawMilk.alt = 'milk from a cow'

    const spoonMilk = new Image();
    spoonMilk.src = _imgs_spoon_milk_jpg__WEBPACK_IMPORTED_MODULE_3__;
    spoonMilk.alt = 'milk splashing onto a spoon';

    const orangeMilk = new Image();
    orangeMilk.src = _imgs_orange_milk_jpg__WEBPACK_IMPORTED_MODULE_4__;
    orangeMilk.alt = 'a glass of orange milk';

    const mugMilk = new Image();
    mugMilk.src = _imgs_mug_milk_jpg__WEBPACK_IMPORTED_MODULE_5__;
    mugMilk.alt = 'a mug of milk'; 

    const coffeeMilk = new Image();
    coffeeMilk.src = _imgs_milk_coffee_jpg__WEBPACK_IMPORTED_MODULE_6__;
    coffeeMilk.alt = 'a cup of coffee and milk';

    const chocyMilk = new Image();
    chocyMilk.src = _imgs_chocy_milk_jpg__WEBPACK_IMPORTED_MODULE_7__;
    chocyMilk.alt = 'a glass of chocolate milk';

    const strawMilk = new Image();
    strawMilk.src = _imgs_straw_milk_jpg__WEBPACK_IMPORTED_MODULE_8__;
    strawMilk.alt = 'a glass of strawberry milk';

    //add classes
    bodyContainer.classList.add('body-container');
    menuContainer.classList.add('body-menu');

    menuItem1.classList.add('menu-item');
    menuItem2.classList.add('menu-item');
    menuItem3.classList.add('menu-item');
    menuItem4.classList.add('menu-item');
    menuItem5.classList.add('menu-item');
    menuItem6.classList.add('menu-item');
    menuItem7.classList.add('menu-item');
    menuItem8.classList.add('menu-item');
    menuItem9.classList.add('menu-item');

    //add inner HTML
    menuItem1.innerHTML = `<strong>Regular Milk</strong>$20`;
    menuItem2.innerHTML = `<strong>Big Milk</strong>$15`;
    menuItem3.innerHTML = `<strong>Raw Milk</strong>$30`;
    menuItem4.innerHTML = `<strong>Spoon Milk</strong>$25`;
    menuItem5.innerHTML = `<strong>Orange Milk</strong>$40`;
    menuItem6.innerHTML = `<strong>Mug Milk</strong>$25`;
    menuItem7.innerHTML = `<strong>Covfefe Milk</strong>$30`;
    menuItem8.innerHTML = `<strong>Brown Milk</strong>$35`;
    menuItem9.innerHTML = `<strong>Berry Milk</strong>$30`;

    //append to page
    content.appendChild(bodyContainer);
    bodyContainer.appendChild(menuContainer);

    menuItem1.appendChild(regMilk);
    menuContainer.appendChild(menuItem1);

    menuItem2.appendChild(bigMilk);
    menuContainer.appendChild(menuItem2);

    menuItem3.appendChild(rawMilk);
    menuContainer.appendChild(menuItem3);

    menuItem4.appendChild(spoonMilk);
    menuContainer.appendChild(menuItem4)

    menuItem5.appendChild(orangeMilk);
    menuContainer.appendChild(menuItem5)

    menuItem6.appendChild(mugMilk);
    menuContainer.appendChild(menuItem6)

    menuItem7.appendChild(coffeeMilk);
    menuContainer.appendChild(menuItem7);

    menuItem8.appendChild(chocyMilk);
    menuContainer.appendChild(menuItem8);

    menuItem9.appendChild(strawMilk);
    menuContainer.appendChild(menuItem9);

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

/***/ "./src/imgs/chocy-milk.jpg":
/*!*********************************!*\
  !*** ./src/imgs/chocy-milk.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16d29b533ead9e62241f.jpg";

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

/***/ "./src/imgs/milk-coffee.jpg":
/*!**********************************!*\
  !*** ./src/imgs/milk-coffee.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf2d12455aa6c31e5b7c.jpg";

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

/***/ "./src/imgs/mug-milk.jpg":
/*!*******************************!*\
  !*** ./src/imgs/mug-milk.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5cdde1c447b2be603d7c.jpg";

/***/ }),

/***/ "./src/imgs/orange-milk.jpg":
/*!**********************************!*\
  !*** ./src/imgs/orange-milk.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5fe216bc6c3ac1340158.jpg";

/***/ }),

/***/ "./src/imgs/raw-milk.jpg":
/*!*******************************!*\
  !*** ./src/imgs/raw-milk.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edc95a9b20be3de797bc.jpg";

/***/ }),

/***/ "./src/imgs/reg-milk.jpg":
/*!*******************************!*\
  !*** ./src/imgs/reg-milk.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03e74c9b77a0853aedba.jpg";

/***/ }),

/***/ "./src/imgs/spoon-milk.jpg":
/*!*********************************!*\
  !*** ./src/imgs/spoon-milk.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fa083e00ebe5733b9ba.jpg";

/***/ }),

/***/ "./src/imgs/straw-milk.jpg":
/*!*********************************!*\
  !*** ./src/imgs/straw-milk.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bc616eb814242d09160.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHlIQUF5QztBQUNyRiw0Q0FBNEMsK0dBQW9DO0FBQ2hGLDRDQUE0QywyR0FBa0M7QUFDOUUsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQix5QkFBeUIsbUNBQW1DO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksbUNBQW1DO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFGQUFxRixLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFV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QTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNxQjs7QUFFckI7QUFDd0M7O0FBRXhDO0FBQ2lDO0FBQ0E7QUFDTTs7QUFFdkM7O0FBRUE7O0FBRUE7QUFDQSw2REFBNkQ7O0FBRTdELDREQUE0RDtBQUM1RCw0REFBNEQ7QUFDNUQsNERBQTREO0FBQzVELDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsZ0RBQUk7QUFDdkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0Msb0RBQVE7QUFDMUM7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9EQUFRO0FBQzFDLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG9EQUFRO0FBQzFDLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHVEQUFXO0FBQzdDLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1ncy9taWxrLXNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3RpdGxlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvdGFiLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBjc3MgcmVzZXQgKi9cbioge1xuICAgIG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuaHRtbCB7XG5cdC8qIGhlaWdodDogMTAwdmg7ICovXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbjpyb290IHtcblx0LS1kaXYtY29sb3I6IHJnYig2NyA2NyA2NyAvIDgwJSk7XG5cdC0tYm9yZGVyLWNvbG9yOiAjZmZkOTAwO1xuXHQtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG5cdC0taW1hZ2UtYm9yZGVyOiAyNTBweDtcbn1cblxuLyogY3VzdG9tIGZvbnRzICovXG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ3RpdGxlJztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAndGFicyc7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb250ZW50IHtcblx0aGVpZ2h0OiAxMDB2aDtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xufVxuXG4vKiBoZWFkZXIgKi9cblxuLmhlYWRlciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMmZyIDAuNWZyIDAuNWZyIDAuNWZyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdi1jb2xvcik7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXHRoZWlnaHQ6IDEwcmVtO1xuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyLW1pbGsge1xuXHRoZWlnaHQ6IDlyZW07XG59XG5cbi50aXRsZSB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGZvbnQtZmFtaWx5OiB0aXRsZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDE0cHggMTJweCAzcHggI2ZmZDcwMGE4O1xuXHRmb250LXNpemU6IDEwcmVtO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogZW5kO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5oZWFkZXItYnV0dG9ucyB7XG5cdGZvbnQtZmFtaWx5OiB0YWJzO1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMi41cmVtO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHR0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjI1cztcblx0cGFkZGluZzogMXJlbTtcblx0anVzdGlmeS1zZWxmOiBzdGFydDtcbn1cblxuLmhlYWRlci1idXR0b25zOmhvdmVyLFxuLmhlYWRlci1idXR0b25zOmZvY3VzIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuXHRib3gtc2hhZG93OiAxcHggMXB4IDBweCAwcHggdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuLnNlbGVjdGVkLXRhYiB7XG5cdGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcblx0Ym94LXNoYWRvdzogMXB4IDFweCAwcHggMHB4IHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbi5zZWxlY3RlZC10YWI6aG92ZXIge1xuXHRjdXJzb3I6IGRlZmF1bHQ7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi8qIGFsbCAzIHRhYnMgKi9cblxuLmJvZHktaG9tZSxcbi5ib2R5LW1lbnUsXG4uYm9keS1jb250YWN0IHtcblx0ZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXYtY29sb3IpO1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcblx0LyogaGVpZ2h0OiA5MCU7ICovXG5cdHdpZHRoOiA1NSU7XG5cdC8qIG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xuXHRtaW4td2lkdGg6IG1pbi1jb250ZW50OyAqL1xuXHRmb250LWZhbWlseTogJ3RhYnMnO1xuXHRmb250LXNpemU6IDJyZW07XG5cdGNvbG9yOiB3aGl0ZTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZzogMXJlbTtcblx0bWFyZ2luLXRvcDogM3JlbTtcbiAgICBncmlkLWdhcDogMXJlbTtcbn1cblxuLyogSG9tZSAqL1xuXG4uYm9keS1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xufVxuXG4uYm9keS1pbWctY29udGFpbmVyIHtcblx0aGVpZ2h0OiAyMHJlbTtcblx0d2lkdGg6IDIwcmVtOyBcblx0Ym9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2UtYm9yZGVyKTtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuLmJvZHktaG9tZSB7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XG59XG5cbi8qIE1lbnUgKi9cblxuLmJvZHktbWVudSB7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjByZW0sIDFmcikpO1xufVxuXG4ubWVudS1pdGVtIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0aGVpZ2h0OiAyMXJlbTtcblx0d2lkdGg6IDE0cmVtO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJhY2tncm91bmQ6IGJsYWNrO1xuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblx0cGFkZGluZzogMXJlbTtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1lbnUtaXRlbSA+IGltZyB7XG5cdGdyaWQtcm93OiAxIC8gMjtcbiAgICBoZWlnaHQ6IDE1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBDb250YWN0ICovXG5cbi5ib2R5LWNvbnRhY3Qge1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XG59XG5cbi5jb250YWN0LWxlZnQge1xuXHRncmlkLWNvbHVtbjogMSAvIDI7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAxZnIgOGZyO1xuXHRoZWlnaHQ6IDcwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Y29sdW1uLWdhcDogMTBweDtcblx0Zm9udC1zaXplOiAyNXB4O1xufVxuXG4uY29udGFjdC1pY29ucyB7XG5cdGhlaWdodDogNDBweDtcblx0ZmlsdGVyOiBpbnZlcnQoMSk7XG59XG5cbi5jb250YWN0LXJpZ2h0IHtcblx0Z3JpZC1jb2x1bW46IDIgLyAzO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRoZWlnaHQ6IDcwJTtcblx0d2lkdGg6IDgwJTtcbn1cblxuaWZyYW1lIHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cdHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuM3M7XG5cdC8qIHBhZGRpbmc6IDEwcHg7ICovXG59XG5cbmlmcmFtZTpob3ZlciB7XG5cdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG5cdGJveC1zaGFkb3c6IDIwcHggMjBweCA0MHB4IGJsYWNrO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxjQUFjO0FBQ2Q7SUFDSSxTQUFTO0NBQ1osVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQix5REFBNkM7Q0FDN0MsMEJBQTBCO0NBQzFCLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLGdDQUFnQztDQUNoQyx1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLHFCQUFxQjtBQUN0Qjs7QUFFQSxpQkFBaUI7O0FBRWpCO0NBQ0Msb0JBQW9CO0NBQ3BCLDRDQUEyQjtDQUMzQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLDRDQUF5QjtDQUN6QixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYiwyQkFBMkI7QUFDNUI7O0FBRUEsV0FBVzs7QUFFWDtDQUNDLGFBQWE7Q0FDYixrREFBa0Q7SUFDL0MsNEJBQTRCO0NBQy9CLDRDQUE0QztDQUM1QyxhQUFhO0lBQ1YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0JBQWtCO0lBQ2YsWUFBWTtJQUNaLG9DQUFvQztDQUN2QyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQiwyQkFBMkI7Q0FDM0IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLDZCQUE2QjtDQUM3QixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBOztDQUVDLGVBQWU7SUFDWiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixtQ0FBbUM7Q0FDdEMsK0NBQStDO0FBQ2hEOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLG1DQUFtQztDQUNuQywrQ0FBK0M7QUFDaEQ7O0FBRUE7Q0FDQyxlQUFlO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQSxlQUFlOztBQUVmOzs7Q0FHQyxhQUFhO0lBQ1YsNEJBQTRCO0NBQy9CLHFDQUFxQztDQUNyQyxtQ0FBbUM7Q0FDbkMsaUJBQWlCO0NBQ2pCLFVBQVU7Q0FDVjswQkFDeUI7Q0FDekIsbUJBQW1CO0NBQ25CLGVBQWU7Q0FDZixZQUFZO0NBQ1osbUJBQW1CO0lBQ2hCLHFCQUFxQjtDQUN4QixrQkFBa0I7Q0FDbEIsYUFBYTtDQUNiLGdCQUFnQjtJQUNiLGNBQWM7QUFDbEI7O0FBRUEsU0FBUzs7QUFFVDtDQUNDLGFBQWE7SUFDVix1QkFBdUI7Q0FDMUIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixrQ0FBa0M7Q0FDbEMscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsK0JBQStCO0FBQ2hDOztBQUVBLFNBQVM7O0FBRVQ7Q0FDQywyREFBMkQ7QUFDNUQ7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsYUFBYTtDQUNiLFlBQVk7SUFDVCwrQkFBK0I7SUFDL0IscUJBQXFCO0lBQ3JCLG1CQUFtQjtDQUN0QixpQkFBaUI7Q0FDakIsbUNBQW1DO0NBQ25DLHFDQUFxQztDQUNyQyxhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZUFBZTtJQUNaLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLG1DQUFtQztDQUN0QyxzQkFBc0I7QUFDdkI7O0FBRUEsWUFBWTs7QUFFWjtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsbUNBQW1DO0NBQ25DLCtCQUErQjtDQUMvQixXQUFXO0lBQ1IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7Q0FDMUIsYUFBYTtDQUNiLHFCQUFxQjtJQUNsQixtQkFBbUI7Q0FDdEIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixtQkFBbUI7SUFDaEIsdUJBQXVCO0NBQzFCLGFBQWE7Q0FDYixXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxtQ0FBbUM7Q0FDbkMscUNBQXFDO0NBQ3JDLDRCQUE0QjtDQUM1QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsZ0NBQWdDO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGNzcyByZXNldCAqL1xcbioge1xcbiAgICBtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5odG1sIHtcXG5cXHQvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZ3MvbWlsay1zcGxhc2guanBnKTtcXG5cXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG5cXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG46cm9vdCB7XFxuXFx0LS1kaXYtY29sb3I6IHJnYig2NyA2NyA2NyAvIDgwJSk7XFxuXFx0LS1ib3JkZXItY29sb3I6ICNmZmQ5MDA7XFxuXFx0LS1ib3JkZXItcmFkaXVzOiAyNXB4O1xcblxcdC0taW1hZ2UtYm9yZGVyOiAyNTBweDtcXG59XFxuXFxuLyogY3VzdG9tIGZvbnRzICovXFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICd0aXRsZSc7XFxuXFx0c3JjOiB1cmwoLi9mb250cy90aXRsZS50dGYpO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG5cXHRmb250LWZhbWlseTogJ3RhYnMnO1xcblxcdHNyYzogdXJsKC4vZm9udHMvdGFiLnR0Zik7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbi5jb250ZW50IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xcbn1cXG5cXG4vKiBoZWFkZXIgKi9cXG5cXG4uaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC41ZnIgMmZyIDAuNWZyIDAuNWZyIDAuNWZyO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXYtY29sb3IpO1xcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcblxcdGhlaWdodDogMTByZW07XFxuICAgIGFsaWduLWl0ZW1zOiBlbmQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlci1taWxrIHtcXG5cXHRoZWlnaHQ6IDlyZW07XFxufVxcblxcbi50aXRsZSB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGZvbnQtZmFtaWx5OiB0aXRsZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LXNoYWRvdzogMTRweCAxMnB4IDNweCAjZmZkNzAwYTg7XFxuXFx0Zm9udC1zaXplOiAxMHJlbTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBlbmQ7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5oZWFkZXItYnV0dG9ucyB7XFxuXFx0Zm9udC1mYW1pbHk6IHRhYnM7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtc2l6ZTogMi41cmVtO1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0dHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4yNXM7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbnM6aG92ZXIsXFxuLmhlYWRlci1idXR0b25zOmZvY3VzIHtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDBweCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uc2VsZWN0ZWQtdGFiIHtcXG5cXHRjb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDBweCAwcHggdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLnNlbGVjdGVkLXRhYjpob3ZlciB7XFxuXFx0Y3Vyc29yOiBkZWZhdWx0O1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcbi8qIGFsbCAzIHRhYnMgKi9cXG5cXG4uYm9keS1ob21lLFxcbi5ib2R5LW1lbnUsXFxuLmJvZHktY29udGFjdCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGl2LWNvbG9yKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcdC8qIGhlaWdodDogOTAlOyAqL1xcblxcdHdpZHRoOiA1NSU7XFxuXFx0LyogbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0bWluLXdpZHRoOiBtaW4tY29udGVudDsgKi9cXG5cXHRmb250LWZhbWlseTogJ3RhYnMnO1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdG1hcmdpbi10b3A6IDNyZW07XFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcbn1cXG5cXG4vKiBIb21lICovXFxuXFxuLmJvZHktY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHQvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG4uYm9keS1pbWctY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6IDIwcmVtO1xcblxcdHdpZHRoOiAyMHJlbTsgXFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2UtYm9yZGVyKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uYm9keS1ob21lIHtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbn1cXG5cXG4vKiBNZW51ICovXFxuXFxuLmJvZHktbWVudSB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMHJlbSwgMWZyKSk7XFxufVxcblxcbi5tZW51LWl0ZW0ge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0aGVpZ2h0OiAyMXJlbTtcXG5cXHR3aWR0aDogMTRyZW07XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kOiBibGFjaztcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLm1lbnUtaXRlbSA+IGltZyB7XFxuXFx0Z3JpZC1yb3c6IDEgLyAyO1xcbiAgICBoZWlnaHQ6IDE1cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qIENvbnRhY3QgKi9cXG5cXG4uYm9keS1jb250YWN0IHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XFxufVxcblxcbi5jb250YWN0LWxlZnQge1xcblxcdGdyaWQtY29sdW1uOiAxIC8gMjtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogIDFmciA4ZnI7XFxuXFx0aGVpZ2h0OiA3MCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRjb2x1bW4tZ2FwOiAxMHB4O1xcblxcdGZvbnQtc2l6ZTogMjVweDtcXG59XFxuXFxuLmNvbnRhY3QtaWNvbnMge1xcblxcdGhlaWdodDogNDBweDtcXG5cXHRmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLmNvbnRhY3QtcmlnaHQge1xcblxcdGdyaWQtY29sdW1uOiAyIC8gMztcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0aGVpZ2h0OiA3MCU7XFxuXFx0d2lkdGg6IDgwJTtcXG59XFxuXFxuaWZyYW1lIHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG5cXHR0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xcblxcdC8qIHBhZGRpbmc6IDEwcHg7ICovXFxufVxcblxcbmlmcmFtZTpob3ZlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG5cXHRib3gtc2hhZG93OiAyMHB4IDIwcHggNDBweCBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL2ltcG9ydCBpbWdzXG5pbXBvcnQgTG9jYXRpb25QaW4gZnJvbSAnLi9pbWdzL2xvY2F0aW9uLnBuZyc7XG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi9pbWdzL2Nsb2NrLnBuZyc7XG5pbXBvcnQgUGhvbmUgZnJvbSAnLi9pbWdzL2lwaG9uZS5wbmcnO1xuaW1wb3J0IEVtYWlsIGZyb20gJy4vaW1ncy9tYWlsLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIFxuICAgIC8vYm9keSAtIG1lbnUgcGFnZVxuICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9jYXRpb25JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG9wZXJhdGlvbkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnN0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1hcFZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuICAgIG1hcFZpZXcuc3JjID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxNTc2LjE0ODA2NDEzNDAyMDYhMmQxMjcuNTI0NzQ5MjE5OTE1MDEhM2QzNy44MDY1MzIyMTg0NzE5ODYhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDM1NjMyN2IzNjdiMDBlNjclM0EweGE1YTIyOWFmZDI0YzM4OTkhMnNTdGFyYnVja3MhNWUwITNtMiExc2VuITJzYXUhNHYxNzAyMTE0ODg0NjQ5ITVtMiExc2VuITJzYXVcIjtcbiAgICBtYXBWaWV3LmFsbG93RnVsbHNjcmVlbiA9IHRydWU7XG5cblxuICAgIC8vYWRkIGljb25zICsgYWNjZXNzaWJpbGl0eSArIGNyZWRpdCBsaW5rc1xuICAgIGNvbnN0IGxvY2F0aW9uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsb2NhdGlvbkxpbmsuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9sb2NhdGlvbic7XG4gICAgbG9jYXRpb25MaW5rLnRpdGxlID0gJ0xvY2F0aW9uIGljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uJztcbiAgICBcbiAgICBjb25zdCBsb2NhdGlvbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2NhdGlvbkljb24uc3JjID0gTG9jYXRpb25QaW47XG4gICAgbG9jYXRpb25JY29uLmFsdCA9ICdsb2NhdGlvbiBwaW4gKyBhZGRyZXNzJztcbiAgICBcbiAgICBjb25zdCBjbG9ja0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY2xvY2tMaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvY2xvY2snO1xuICAgIGNsb2NrTGluay50aXRsZSA9ICdDbG9jayBpY29ucyBjcmVhdGVkIGJ5IGRtaXRyaTEzIC0gRmxhdGljb24nO1xuXG4gICAgY29uc3QgY2xvY2tJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY2xvY2tJY29uLnNyYyA9IENsb2NrO1xuICAgIGNsb2NrSWNvbi5hbHQgPSBcImNsb2NrICsgb3BlbiBob3Vyc1wiO1xuICAgIFxuICAgIGNvbnN0IHBob25lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBwaG9uZUxpbmsuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9pcGhvbmUnO1xuICAgIHBob25lTGluay50aXRsZSA9ICdJcGhvbmUgaWNvbnMgY3JlYXRlZCBieSBkZWVtYWtkYWtzaW5hIC0gRmxhdGljb24nO1xuXG4gICAgY29uc3QgcGhvbmVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgcGhvbmVJY29uLnNyYyA9IFBob25lO1xuICAgIHBob25lSWNvbi5hbHQgPSAncGhvbmUgKyBwaG9uZSBudW1iZXInO1xuXG4gICAgY29uc3QgZW1haWxMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGVtYWlsTGluay5ocmVmID0gJ2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2VtYWlsJztcbiAgICBlbWFpbExpbmsudGl0bGUgPSAnRW1haWwgaWNvbnMgY3JlYXRlZCBieSBGcmVlcGlrIC0gRmxhdGljb24nO1xuXG4gICAgY29uc3QgZW1haWxJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZW1haWxJY29uLnNyYyA9IEVtYWlsO1xuICAgIGVtYWlsSWNvbi5hbHQgPSAnZW1haWwgKyBlbWFpbCBhZGRyZXNzJztcblxuICAgIC8vYWRkIGNsYXNzZXNcbiAgICBib2R5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvZHktY29udGFpbmVyJyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5LWNvbnRhY3QnKTtcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1sZWZ0Jyk7XG4gICAgbWFwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtcmlnaHQnKTtcbiAgICBsb2NhdGlvbkljb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pY29ucycpO1xuICAgIGNsb2NrSWNvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWljb25zJyk7XG4gICAgcGhvbmVJY29uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaWNvbnMnKTtcbiAgICBlbWFpbEljb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pY29ucycpO1xuXG4gICAgLy9hZGQgaW5uZXIgSFRNTCBcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9ICcxMTMtNCBEYWxqZW9uIHJvYWQsIEdhcHllb25nLCBHeWVvbmdnaSwgU0snO1xuICAgIG9wZXJhdGlvbkhvdXJzLmlubmVySFRNTCA9ICdNb24tRnJpOiA5cG1+MmFtPGJyPlNhdC1TdW46IDlwbX42YW0nO1xuICAgIHBob25lTnVtYmVyLmlubmVySFRNTCA9ICcrODIgMDEwLU1JTEstOTIxMCc7XG4gICAgZW1haWwuaW5uZXJIVE1MID0gJ2dpdmVtZW1pbGtAbWlsay5jb20nO1xuXG4gICAgLy9hcHBlbmQgdG8gcGFnZVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keUNvbnRhaW5lcik7XG4gICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5mb0NvbnRhaW5lcik7XG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uTGluayk7IC8vaGVyZVxuICAgIGxvY2F0aW9uTGluay5hcHBlbmRDaGlsZChsb2NhdGlvbkljb24pOyAgICAgICAgIC8vaGVyZVxuICAgIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvY2tMaW5rKTtcbiAgICBjbG9ja0xpbmsuYXBwZW5kQ2hpbGQoY2xvY2tJY29uKVxuICAgIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVyYXRpb25Ib3Vycyk7XG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTGluayk7XG4gICAgcGhvbmVMaW5rLmFwcGVuZENoaWxkKHBob25lSWNvbik7XG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxMaW5rKTtcbiAgICBlbWFpbExpbmsuYXBwZW5kQ2hpbGQoZW1haWxJY29uKTtcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFwQ29udGFpbmVyKTtcbiAgICBtYXBDb250YWluZXIuYXBwZW5kQ2hpbGQobWFwVmlldyk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn07IiwiLy9pbXBvcnQgaW1nc1xuaW1wb3J0IG1pbGtTY29vcEltZyBmcm9tICcuL2ltZ3MvbWlsay1zY29vcC5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZSgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIFxuICAgIC8vYm9keSAtIGhvbWUgcGFnZVxuICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm9keVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvZHlNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib2R5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvL2FkZCBpbWFnZSArIGFjY2Vzc2liaWxpdHlcbiAgICBjb25zdCBtaWxrU2Nvb3AgPSBuZXcgSW1hZ2UoKTtcbiAgICBtaWxrU2Nvb3Auc3JjID0gbWlsa1Njb29wSW1nO1xuICAgIG1pbGtTY29vcC5hbHQgPSAnSGFuZHMgc2Nvb3BpbmcgZGVsaWNpb3VzIG1pbGsnO1xuXG4gICAgLy9hZGQgY2xhc3Nlc1xuICAgIGJvZHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9keS1jb250YWluZXInKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHktaG9tZScpO1xuICAgIG1pbGtTY29vcC5jbGFzc0xpc3QuYWRkKCdib2R5LWltZy1jb250YWluZXInKTtcblxuICAgIC8vYWRkIGlubmVyIEhUTUxcbiAgICBib2R5VG9wLmlubmVySFRNTCA9IGBUaGUgYmVzdCBtaWxrIGhhbmRzIGRvd24hIFxuICAgIEkndmUga25vd24gbWlsayBmb3IgbWFueSB5ZWFycywgd2UgZ28gd2F5IGJhY2suIFxuICAgIEkga25vdyBhbGwgdGhlIGJlc3QgY293cyB3aXRoIGFsbCB0aGUgYmVzdCBtaWxrLCBcbiAgICBiZWxpZXZlIG1lYDtcbiAgICBib2R5TG93LmlubmVySFRNTCA9IGBPdXIgZmFtaWx5IHdhcyB0aGUgZmlyc3QgXG4gICAgdG8gZGlzY292ZXIgbWlsayBmcm9tIGNvd3MuLiBcbiAgICBkb24ndCBhc2sgdXMgaG93YDtcblxuICAgIC8vYXBwZW5kIHRvIHBhZ2VcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHlDb250YWluZXIpO1xuICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChib2R5VG9wKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJvZHlNaWQpO1xuICAgIGJvZHlNaWQuYXBwZW5kQ2hpbGQobWlsa1Njb29wKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJvZHlMb3cpOyAgICBcblxuICAgIHJldHVybiBjb250ZW50O1xufTsiLCIvL2ltYWdlc1xuaW1wb3J0IEdsYXNzTWlsayBmcm9tICcuL2ltZ3MvcmVnLW1pbGsuanBnJztcbmltcG9ydCBCaWdHbGFzc01pbGsgZnJvbSAnLi9pbWdzL2JpZy1taWxrLmpwZyc7XG5pbXBvcnQgUmF3TWlsayBmcm9tICcuL2ltZ3MvcmF3LW1pbGsuanBnJztcbmltcG9ydCBTcG9vbk1pbGsgZnJvbSAnLi9pbWdzL3Nwb29uLW1pbGsuanBnJztcbmltcG9ydCBPcmFuZ2VNaWxrIGZyb20gJy4vaW1ncy9vcmFuZ2UtbWlsay5qcGcnO1xuaW1wb3J0IE11Z01pbGsgZnJvbSAnLi9pbWdzL211Zy1taWxrLmpwZyc7XG5pbXBvcnQgQ29mZmVlTWlsayBmcm9tICcuL2ltZ3MvbWlsay1jb2ZmZWUuanBnJztcbmltcG9ydCBDaG9jeU1pbGsgZnJvbSAnLi9pbWdzL2Nob2N5LW1pbGsuanBnJztcbmltcG9ydCBTdHJhd01pbGsgZnJvbSAnLi9pbWdzL3N0cmF3LW1pbGsuanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBcbiAgICAvL2JvZHkgLSBtZW51IHBhZ2VcbiAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbWVudUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW01ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW02ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW03ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW04ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWVudUl0ZW05ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgLy9zZXQgaW1wb3J0ZWQgaW1hZ2VzXG4gICAgY29uc3QgcmVnTWlsayA9IG5ldyBJbWFnZSgpO1xuICAgIHJlZ01pbGsuc3JjID0gR2xhc3NNaWxrO1xuICAgIHJlZ01pbGsuYWx0ID0gJ3JlZ3VsYXItc2l6ZWQgZ2xhc3Mgb2YgbWlsayc7XG5cbiAgICBjb25zdCBiaWdNaWxrID0gbmV3IEltYWdlKCk7XG4gICAgYmlnTWlsay5zcmMgPSBCaWdHbGFzc01pbGs7XG4gICAgYmlnTWlsay5hbHQgPSAnYSB2ZXJ5IGJpZyBnbGFzcyBvZiBtaWxrJztcblxuICAgIGNvbnN0IHJhd01pbGsgPSBuZXcgSW1hZ2UoKTtcbiAgICByYXdNaWxrLnNyYyA9IFJhd01pbGs7XG4gICAgcmF3TWlsay5hbHQgPSAnbWlsayBmcm9tIGEgY293J1xuXG4gICAgY29uc3Qgc3Bvb25NaWxrID0gbmV3IEltYWdlKCk7XG4gICAgc3Bvb25NaWxrLnNyYyA9IFNwb29uTWlsaztcbiAgICBzcG9vbk1pbGsuYWx0ID0gJ21pbGsgc3BsYXNoaW5nIG9udG8gYSBzcG9vbic7XG5cbiAgICBjb25zdCBvcmFuZ2VNaWxrID0gbmV3IEltYWdlKCk7XG4gICAgb3JhbmdlTWlsay5zcmMgPSBPcmFuZ2VNaWxrO1xuICAgIG9yYW5nZU1pbGsuYWx0ID0gJ2EgZ2xhc3Mgb2Ygb3JhbmdlIG1pbGsnO1xuXG4gICAgY29uc3QgbXVnTWlsayA9IG5ldyBJbWFnZSgpO1xuICAgIG11Z01pbGsuc3JjID0gTXVnTWlsaztcbiAgICBtdWdNaWxrLmFsdCA9ICdhIG11ZyBvZiBtaWxrJzsgXG5cbiAgICBjb25zdCBjb2ZmZWVNaWxrID0gbmV3IEltYWdlKCk7XG4gICAgY29mZmVlTWlsay5zcmMgPSBDb2ZmZWVNaWxrO1xuICAgIGNvZmZlZU1pbGsuYWx0ID0gJ2EgY3VwIG9mIGNvZmZlZSBhbmQgbWlsayc7XG5cbiAgICBjb25zdCBjaG9jeU1pbGsgPSBuZXcgSW1hZ2UoKTtcbiAgICBjaG9jeU1pbGsuc3JjID0gQ2hvY3lNaWxrO1xuICAgIGNob2N5TWlsay5hbHQgPSAnYSBnbGFzcyBvZiBjaG9jb2xhdGUgbWlsayc7XG5cbiAgICBjb25zdCBzdHJhd01pbGsgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdHJhd01pbGsuc3JjID0gU3RyYXdNaWxrO1xuICAgIHN0cmF3TWlsay5hbHQgPSAnYSBnbGFzcyBvZiBzdHJhd2JlcnJ5IG1pbGsnO1xuXG4gICAgLy9hZGQgY2xhc3Nlc1xuICAgIGJvZHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9keS1jb250YWluZXInKTtcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvZHktbWVudScpO1xuXG4gICAgbWVudUl0ZW0xLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbTMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbWVudUl0ZW00LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtNS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbTYuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbWVudUl0ZW03LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIG1lbnVJdGVtOC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBtZW51SXRlbTkuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICAvL2FkZCBpbm5lciBIVE1MXG4gICAgbWVudUl0ZW0xLmlubmVySFRNTCA9IGA8c3Ryb25nPlJlZ3VsYXIgTWlsazwvc3Ryb25nPiQyMGA7XG4gICAgbWVudUl0ZW0yLmlubmVySFRNTCA9IGA8c3Ryb25nPkJpZyBNaWxrPC9zdHJvbmc+JDE1YDtcbiAgICBtZW51SXRlbTMuaW5uZXJIVE1MID0gYDxzdHJvbmc+UmF3IE1pbGs8L3N0cm9uZz4kMzBgO1xuICAgIG1lbnVJdGVtNC5pbm5lckhUTUwgPSBgPHN0cm9uZz5TcG9vbiBNaWxrPC9zdHJvbmc+JDI1YDtcbiAgICBtZW51SXRlbTUuaW5uZXJIVE1MID0gYDxzdHJvbmc+T3JhbmdlIE1pbGs8L3N0cm9uZz4kNDBgO1xuICAgIG1lbnVJdGVtNi5pbm5lckhUTUwgPSBgPHN0cm9uZz5NdWcgTWlsazwvc3Ryb25nPiQyNWA7XG4gICAgbWVudUl0ZW03LmlubmVySFRNTCA9IGA8c3Ryb25nPkNvdmZlZmUgTWlsazwvc3Ryb25nPiQzMGA7XG4gICAgbWVudUl0ZW04LmlubmVySFRNTCA9IGA8c3Ryb25nPkJyb3duIE1pbGs8L3N0cm9uZz4kMzVgO1xuICAgIG1lbnVJdGVtOS5pbm5lckhUTUwgPSBgPHN0cm9uZz5CZXJyeSBNaWxrPC9zdHJvbmc+JDMwYDtcblxuICAgIC8vYXBwZW5kIHRvIHBhZ2VcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHlDb250YWluZXIpO1xuICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG5cbiAgICBtZW51SXRlbTEuYXBwZW5kQ2hpbGQocmVnTWlsayk7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbTEpO1xuXG4gICAgbWVudUl0ZW0yLmFwcGVuZENoaWxkKGJpZ01pbGspO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0yKTtcblxuICAgIG1lbnVJdGVtMy5hcHBlbmRDaGlsZChyYXdNaWxrKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtMyk7XG5cbiAgICBtZW51SXRlbTQuYXBwZW5kQ2hpbGQoc3Bvb25NaWxrKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtNClcblxuICAgIG1lbnVJdGVtNS5hcHBlbmRDaGlsZChvcmFuZ2VNaWxrKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtNSlcblxuICAgIG1lbnVJdGVtNi5hcHBlbmRDaGlsZChtdWdNaWxrKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtNilcblxuICAgIG1lbnVJdGVtNy5hcHBlbmRDaGlsZChjb2ZmZWVNaWxrKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtNyk7XG5cbiAgICBtZW51SXRlbTguYXBwZW5kQ2hpbGQoY2hvY3lNaWxrKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtOCk7XG5cbiAgICBtZW51SXRlbTkuYXBwZW5kQ2hpbGQoc3RyYXdNaWxrKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtOSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvL2Nzc1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vaW1hZ2VzXG5pbXBvcnQgTWlsayBmcm9tICcuL2ltZ3MvbWlsay1wYWxlLmdpZic7XG5cbi8vbW9kdWxlc1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICAgIC8vc2V0IGhlYWRlclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICAgICAgICAgIC8vaGVhZGVyXG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICAgICAgICAgIC8vdGl0bGVcbiAgICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7ICAgICAgIC8vYXBwZW5kIHRvIGhlYWRlclxuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgICAgICAgLy9hcHBlbmQgdG8gaGVhZGVyXG4gICAgY29uc3QgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyAgICAvL2FwcGVuZCB0byBoZWFkZXJcblxuICAgIC8vYWRkIGhlYWRlciBpY29uXG4gICAgY29uc3QgbWlsa0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIG1pbGtJbWFnZS5ocmVmID0gJ2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWFuaW1hdGVkLWljb25zL2RhaXJ5LXByb2R1Y3RzJztcbiAgICBtaWxrSW1hZ2UudGl0bGUgPSAnRGFpcnkgcHJvZHVjdHMgYW5pbWF0ZWQgaWNvbnMgY3JlYXRlZCBieSBGcmVlcGlrIC0gRmxhdGljb24nO1xuXG4gICAgY29uc3QgbWlsa0ljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBtaWxrSWNvbi5zcmMgPSBNaWxrO1xuICAgIG1pbGtJY29uLmFsdCA9ICdtaWxrIGhlYWRlciBpY29uJztcblxuICAgIC8vYXNzaWduIGNzc1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG5cbiAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b25zJyk7XG4gICAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucycpO1xuICAgIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJ1dHRvbnMnKTtcblxuICAgIG1pbGtJY29uLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1taWxrJyk7XG5cbiAgICAvL3NldCBpbm5lckhUTUxcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnTGF0dGUgYSBsYSBMZWNoZSc7XG4gICAgaG9tZVRhYi5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgbWVudVRhYi5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgY29udGFjdFRhYi5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG5cbiAgICAvL2FwcGVuZCB0byBwYWdlXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG1pbGtJbWFnZSk7XG4gICAgbWlsa0ltYWdlLmFwcGVuZENoaWxkKG1pbGtJY29uKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lcnMgLSBjYWxsIGltcG9ydGVkIG1vZHVsZXMgd2hlbiBjbGlja2VkXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVQYWdlKCkpO1xuICAgICAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRhYicpO1xuICAgICAgICBtZW51VGFiLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9KTtcblxuICAgIGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhbGxUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5cbiAgICAgICAgYWxsVGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgICAgICAgICB0YWIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10YWInKTtcbiAgICAgICAgaG9tZVRhYi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGJvZHlDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSk7IFxuICAgIH0pO1xuXG4gICAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHktY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFsbFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblxuICAgICAgICBhbGxUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10YWInKTtcbiAgICAgICAgICAgIHRhYi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRhYicpO1xuICAgICAgICBtZW51VGFiLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYm9keUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtZW51UGFnZSgpKTtcbiAgICB9KTtcblxuICAgIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgYm9keUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2R5LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBhbGxUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJyk7XG5cbiAgICAgICAgYWxsVGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgICAgICAgICB0YWIuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC10YWInKTtcbiAgICAgICAgY29udGFjdFRhYi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGJvZHlDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2UoKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn07XG5cbmNvbXBvbmVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==