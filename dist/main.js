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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/title.ttf */ "./src/fonts/title.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/tab.ttf */ "./src/fonts/tab.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/milk-splash.jpg */ "./src/imgs/milk-splash.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* css reset */
*,
html {
    margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

:root {
	--div-color: rgb(67 67 67 / 80%);
	--border-color: #ffd900;
	--border-radius: 25px;
	--image-border: 250px;
}

@font-face {
	font-family: 'title';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
	font-weight: 600;
	font-style: normal;
}

@font-face {
	font-family: 'tabs';
	src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
	font-weight: 600;
	font-style: normal;
}

.content {
    height: 100vh;
	width: 100%;
	display: grid;
	grid-template-rows: 1fr 3fr;
	background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
	background-size: 100% 100%;
	background-attachment: fixed;
}

.header {
	min-height: min-content;
	min-width: min-content;
	display: grid;
	grid-template-columns: 1fr 1fr;
    background: var(--div-color);
	border-bottom: 1px solid var(--border-color);
	height: 10rem;
    align-items: center;
    justify-items: center;
}

.header-milk {
	height: 100px;
}

.title {
	min-height: min-content;
	min-width: min-content;
	white-space: nowrap;
	display: flex;
    color: white;
    text-shadow: 14px 12px 3px #ffd700a8;
	font-family: title;
	font-size: 140px;
	padding-top: 40px;
}

.tabs {
	min-height: min-content;
	min-width: min-content;
	font-family: tabs;
    display: flex;
    gap: 50px;
}

.header-buttons {
	background: none;
	font-size: 40px;
    color: white;
	transition: ease-in-out 0.25s;
	padding: 12px;
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

.body-container {
	display: flex;
	align-items: center;
    justify-content: center;
}

.body-home,
.body-menu,
.body-contact {
	display: grid;
    background: var(--div-color);
	border: 1px solid var(--border-color);
	border-radius: var(--border-radius);
	height: 85%;
	width: 50%;
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

.body-home {
	grid-template-rows: 1fr 2fr 1fr;
}

.body-menu {
	grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
}

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

}

.body-img-container {
	height: 20rem;
	width: 20rem; 
	border-radius: var(--image-border);
	border: 1px solid var(--border-color);
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,cAAc;AACd;;IAEI,SAAS;CACZ,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;;AAEA;CACC,gCAAgC;CAChC,uBAAuB;CACvB,qBAAqB;CACrB,qBAAqB;AACtB;;AAEA;CACC,oBAAoB;CACpB,4CAA2B;CAC3B,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,4CAAyB;CACzB,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;IACI,aAAa;CAChB,WAAW;CACX,aAAa;CACb,2BAA2B;CAC3B,yDAA6C;CAC7C,0BAA0B;CAC1B,4BAA4B;AAC7B;;AAEA;CACC,uBAAuB;CACvB,sBAAsB;CACtB,aAAa;CACb,8BAA8B;IAC3B,4BAA4B;CAC/B,4CAA4C;CAC5C,aAAa;IACV,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,uBAAuB;CACvB,sBAAsB;CACtB,mBAAmB;CACnB,aAAa;IACV,YAAY;IACZ,oCAAoC;CACvC,kBAAkB;CAClB,gBAAgB;CAChB,iBAAiB;AAClB;;AAEA;CACC,uBAAuB;CACvB,sBAAsB;CACtB,iBAAiB;IACd,aAAa;IACb,SAAS;AACb;;AAEA;CACC,gBAAgB;CAChB,eAAe;IACZ,YAAY;CACf,6BAA6B;CAC7B,aAAa;AACd;;AAEA;;CAEC,eAAe;IACZ,2BAA2B;IAC3B,gBAAgB;IAChB,0BAA0B;IAC1B,mCAAmC;CACtC,+CAA+C;AAChD;;AAEA;CACC,aAAa;CACb,mBAAmB;IAChB,uBAAuB;AAC3B;;AAEA;;;CAGC,aAAa;IACV,4BAA4B;CAC/B,qCAAqC;CACrC,mCAAmC;CACnC,WAAW;CACX,UAAU;CACV,uBAAuB;CACvB,sBAAsB;CACtB,mBAAmB;CACnB,eAAe;CACf,YAAY;CACZ,mBAAmB;IAChB,qBAAqB;CACxB,kBAAkB;CAClB,aAAa;AACd;;AAEA;CACC,+BAA+B;AAChC;;AAEA;CACC,2DAA2D;AAC5D;;AAEA;CACC,8BAA8B;AAC/B;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,mCAAmC;CACnC,+BAA+B;CAC/B,WAAW;IACR,WAAW;IACX,mBAAmB;IACnB,uBAAuB;CAC1B,aAAa;CACb,qBAAqB;IAClB,mBAAmB;CACtB,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,iBAAiB;AAClB;;AAEA;CACC,kBAAkB;CAClB,aAAa;CACb,mBAAmB;IAChB,uBAAuB;CAC1B,aAAa;CACb,WAAW;CACX,UAAU;AACX;;AAEA;CACC,YAAY;CACZ,WAAW;CACX,mCAAmC;CACnC,qCAAqC;CACrC,4BAA4B;CAC5B,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,gCAAgC;;AAEjC;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,kCAAkC;CAClC,qCAAqC;AACtC;;AAEA;CACC,0BAA0B;CAC1B,mCAAmC;CACnC,+CAA+C;AAChD;;AAEA;CACC,eAAe;IACZ,eAAe;IACf,gBAAgB;AACpB","sourcesContent":["/* css reset */\n*,\nhtml {\n    margin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n\n:root {\n\t--div-color: rgb(67 67 67 / 80%);\n\t--border-color: #ffd900;\n\t--border-radius: 25px;\n\t--image-border: 250px;\n}\n\n@font-face {\n\tfont-family: 'title';\n\tsrc: url(./fonts/title.ttf);\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n@font-face {\n\tfont-family: 'tabs';\n\tsrc: url(./fonts/tab.ttf);\n\tfont-weight: 600;\n\tfont-style: normal;\n}\n\n.content {\n    height: 100vh;\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 3fr;\n\tbackground-image: url(./imgs/milk-splash.jpg);\n\tbackground-size: 100% 100%;\n\tbackground-attachment: fixed;\n}\n\n.header {\n\tmin-height: min-content;\n\tmin-width: min-content;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n    background: var(--div-color);\n\tborder-bottom: 1px solid var(--border-color);\n\theight: 10rem;\n    align-items: center;\n    justify-items: center;\n}\n\n.header-milk {\n\theight: 100px;\n}\n\n.title {\n\tmin-height: min-content;\n\tmin-width: min-content;\n\twhite-space: nowrap;\n\tdisplay: flex;\n    color: white;\n    text-shadow: 14px 12px 3px #ffd700a8;\n\tfont-family: title;\n\tfont-size: 140px;\n\tpadding-top: 40px;\n}\n\n.tabs {\n\tmin-height: min-content;\n\tmin-width: min-content;\n\tfont-family: tabs;\n    display: flex;\n    gap: 50px;\n}\n\n.header-buttons {\n\tbackground: none;\n\tfont-size: 40px;\n    color: white;\n\ttransition: ease-in-out 0.25s;\n\tpadding: 12px;\n}\n\n.header-buttons:hover,\n.header-buttons:focus {\n\tcursor: pointer;\n    transform: translateY(-8px);\n    background: none;\n    color: var(--border-color);\n    border-radius: var(--border-radius);\n\tbox-shadow: 1px 1px 0px 0px var(--border-color);\n}\n\n.body-container {\n\tdisplay: flex;\n\talign-items: center;\n    justify-content: center;\n}\n\n.body-home,\n.body-menu,\n.body-contact {\n\tdisplay: grid;\n    background: var(--div-color);\n\tborder: 1px solid var(--border-color);\n\tborder-radius: var(--border-radius);\n\theight: 85%;\n\twidth: 50%;\n\tmin-height: min-content;\n\tmin-width: min-content;\n\tfont-family: 'tabs';\n\tfont-size: 32px;\n\tcolor: white;\n\talign-items: center;\n    justify-items: center;\n\ttext-align: center;\n\tpadding: 20px;\n}\n\n.body-home {\n\tgrid-template-rows: 1fr 2fr 1fr;\n}\n\n.body-menu {\n\tgrid-template-columns: repeat(auto-fit, minmax(380px, 1fr));\n}\n\n.body-contact {\n\tgrid-template-columns: 1fr 2fr;\n}\n\n.contact-left {\n\tgrid-column: 1 / 2;\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr 1fr 1fr;\n\tgrid-template-columns:  1fr 8fr;\n\theight: 70%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n\tpadding: 10px;\n\tjustify-items: center;\n    align-items: center;\n\tcolumn-gap: 10px;\n\tfont-size: 25px;\n}\n\n.contact-icons {\n\theight: 40px;\n\tfilter: invert(1);\n}\n\n.contact-right {\n\tgrid-column: 2 / 3;\n\tdisplay: flex;\n\talign-items: center;\n    justify-content: center;\n\tpadding: 10px;\n\theight: 70%;\n\twidth: 80%;\n}\n\niframe {\n\theight: 100%;\n\twidth: 100%;\n\tborder-radius: var(--border-radius);\n\tborder: 1px solid var(--border-color);\n\ttransition: ease-in-out 0.3s;\n\t/* padding: 10px; */\n}\n\niframe:hover {\n\ttransform: scale(1.05);\n\tbox-shadow: 20px 20px 40px black;\n\n}\n\n.body-img-container {\n\theight: 20rem;\n\twidth: 20rem; \n\tborder-radius: var(--image-border);\n\tborder: 1px solid var(--border-color);\n}\n\n.selected-tab {\n\tcolor: var(--border-color);\n\tborder-radius: var(--border-radius);\n\tbox-shadow: 1px 1px 0px 0px var(--border-color);\n}\n\n.selected-tab:hover {\n\tcursor: default;\n    transform: none;\n    background: none;\n}"],"sourceRoot":""}]);
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
function menuPage() {

    const content = document.getElementById('content');
    
    //body - menu page
    const bodyContainer = document.createElement('div');
    const body = document.createElement('div');
    

    //add classes
    bodyContainer.classList.add('body-container');
    body.classList.add('body-menu');

    //add inner HTML

    //append to page
    content.appendChild(bodyContainer);
    bodyContainer.appendChild(body);

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
    const header = document.createElement('div');
    const titleContainer = document.createElement('div');
    const title = document.createElement('div');
    const tabContainer = document.createElement('div');
    const homeTab = document.createElement('button');
    const menuTab = document.createElement('button');
    const contactTab = document.createElement('button');


    const milk = document.createElement('a');
    milk.href = 'https://www.flaticon.com/free-animated-icons/dairy-products';
    milk.title = 'Dairy products animated icons created by Freepik - Flaticon';

    const milkPour = new Image();
    milkPour.src = _imgs_milk_pale_gif__WEBPACK_IMPORTED_MODULE_1__;
    milkPour.alt = 'pouring milk header icon';

    //assign css
    content.classList.add('content');
    header.classList.add('header');
    titleContainer.classList.add('title');
    tabContainer.classList.add('tabs');
    homeTab.classList.add('header-buttons');
    menuTab.classList.add('header-buttons');
    contactTab.classList.add('header-buttons');
    milkPour.classList.add('header-milk');

    //set innerHTML
    title.innerHTML = 'Latte a la Lac';
    homeTab.innerHTML = 'Home';
    menuTab.innerHTML = 'Menu';
    contactTab.innerHTML = 'Contact';

    //append to page
    content.appendChild(header);
    header.appendChild(titleContainer);
    titleContainer.appendChild(milk);
    milk.appendChild(milkPour);
    titleContainer.appendChild(title);
    header.appendChild(tabContainer);
    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtHQUFvQztBQUNoRiw0Q0FBNEMsMkdBQWtDO0FBQzlFLDRDQUE0Qyx5SEFBeUM7QUFDckYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSxtQ0FBbUM7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLG1DQUFtQztBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFGQUFxRixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFB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QTtBQUNBLG1CQUFtQixnREFBSTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDLG9EQUFRO0FBQzFDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvREFBUTtBQUMxQyxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxvREFBUTtBQUMxQyxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1REFBVztBQUM3QyxLQUFLOztBQUVMO0FBQ0E7O0FBRUEsWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL3RpdGxlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZm9udHMvdGFiLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1ncy9taWxrLXNwbGFzaC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogY3NzIHJlc2V0ICovXG4qLFxuaHRtbCB7XG4gICAgbWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG46cm9vdCB7XG5cdC0tZGl2LWNvbG9yOiByZ2IoNjcgNjcgNjcgLyA4MCUpO1xuXHQtLWJvcmRlci1jb2xvcjogI2ZmZDkwMDtcblx0LS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuXHQtLWltYWdlLWJvcmRlcjogMjUwcHg7XG59XG5cbkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ3RpdGxlJztcblx0c3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAndGFicyc7XG5cdHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyO1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG5cdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuXHRiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuXG4uaGVhZGVyIHtcblx0bWluLWhlaWdodDogbWluLWNvbnRlbnQ7XG5cdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXYtY29sb3IpO1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcblx0aGVpZ2h0OiAxMHJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlci1taWxrIHtcblx0aGVpZ2h0OiAxMDBweDtcbn1cblxuLnRpdGxlIHtcblx0bWluLWhlaWdodDogbWluLWNvbnRlbnQ7XG5cdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAxNHB4IDEycHggM3B4ICNmZmQ3MDBhODtcblx0Zm9udC1mYW1pbHk6IHRpdGxlO1xuXHRmb250LXNpemU6IDE0MHB4O1xuXHRwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLnRhYnMge1xuXHRtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcblx0bWluLXdpZHRoOiBtaW4tY29udGVudDtcblx0Zm9udC1mYW1pbHk6IHRhYnM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDUwcHg7XG59XG5cbi5oZWFkZXItYnV0dG9ucyB7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdGZvbnQtc2l6ZTogNDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG5cdHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDAuMjVzO1xuXHRwYWRkaW5nOiAxMnB4O1xufVxuXG4uaGVhZGVyLWJ1dHRvbnM6aG92ZXIsXG4uaGVhZGVyLWJ1dHRvbnM6Zm9jdXMge1xuXHRjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG5cdGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDBweCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG4uYm9keS1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm9keS1ob21lLFxuLmJvZHktbWVudSxcbi5ib2R5LWNvbnRhY3Qge1xuXHRkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdi1jb2xvcik7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG5cdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuXHRoZWlnaHQ6IDg1JTtcblx0d2lkdGg6IDUwJTtcblx0bWluLWhlaWdodDogbWluLWNvbnRlbnQ7XG5cdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XG5cdGZvbnQtZmFtaWx5OiAndGFicyc7XG5cdGZvbnQtc2l6ZTogMzJweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwYWRkaW5nOiAyMHB4O1xufVxuXG4uYm9keS1ob21lIHtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcbn1cblxuLmJvZHktbWVudSB7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzgwcHgsIDFmcikpO1xufVxuXG4uYm9keS1jb250YWN0IHtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xufVxuXG4uY29udGFjdC1sZWZ0IHtcblx0Z3JpZC1jb2x1bW46IDEgLyAyO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAgMWZyIDhmcjtcblx0aGVpZ2h0OiA3MCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZzogMTBweDtcblx0anVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGNvbHVtbi1nYXA6IDEwcHg7XG5cdGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmNvbnRhY3QtaWNvbnMge1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuXG4uY29udGFjdC1yaWdodCB7XG5cdGdyaWQtY29sdW1uOiAyIC8gMztcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZzogMTBweDtcblx0aGVpZ2h0OiA3MCU7XG5cdHdpZHRoOiA4MCU7XG59XG5cbmlmcmFtZSB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuXHR0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAwLjNzO1xuXHQvKiBwYWRkaW5nOiAxMHB4OyAqL1xufVxuXG5pZnJhbWU6aG92ZXIge1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuXHRib3gtc2hhZG93OiAyMHB4IDIwcHggNDBweCBibGFjaztcblxufVxuXG4uYm9keS1pbWctY29udGFpbmVyIHtcblx0aGVpZ2h0OiAyMHJlbTtcblx0d2lkdGg6IDIwcmVtOyBcblx0Ym9yZGVyLXJhZGl1czogdmFyKC0taW1hZ2UtYm9yZGVyKTtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuLnNlbGVjdGVkLXRhYiB7XG5cdGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcblx0Ym94LXNoYWRvdzogMXB4IDFweCAwcHggMHB4IHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbi5zZWxlY3RlZC10YWI6aG92ZXIge1xuXHRjdXJzb3I6IGRlZmF1bHQ7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGNBQWM7QUFDZDs7SUFFSSxTQUFTO0NBQ1osVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLGdDQUFnQztDQUNoQyx1QkFBdUI7Q0FDdkIscUJBQXFCO0NBQ3JCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQiw0Q0FBMkI7Q0FDM0IsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQiw0Q0FBeUI7Q0FDekIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7Q0FDaEIsV0FBVztDQUNYLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IseURBQTZDO0NBQzdDLDBCQUEwQjtDQUMxQiw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYiw4QkFBOEI7SUFDM0IsNEJBQTRCO0NBQy9CLDRDQUE0QztDQUM1QyxhQUFhO0lBQ1YsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLGFBQWE7SUFDVixZQUFZO0lBQ1osb0NBQW9DO0NBQ3ZDLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixpQkFBaUI7SUFDZCxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7SUFDWixZQUFZO0NBQ2YsNkJBQTZCO0NBQzdCLGFBQWE7QUFDZDs7QUFFQTs7Q0FFQyxlQUFlO0lBQ1osMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsbUNBQW1DO0NBQ3RDLCtDQUErQztBQUNoRDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBOzs7Q0FHQyxhQUFhO0lBQ1YsNEJBQTRCO0NBQy9CLHFDQUFxQztDQUNyQyxtQ0FBbUM7Q0FDbkMsV0FBVztDQUNYLFVBQVU7Q0FDVix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsWUFBWTtDQUNaLG1CQUFtQjtJQUNoQixxQkFBcUI7Q0FDeEIsa0JBQWtCO0NBQ2xCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLDJEQUEyRDtBQUM1RDs7QUFFQTtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2IsbUNBQW1DO0NBQ25DLCtCQUErQjtDQUMvQixXQUFXO0lBQ1IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQix1QkFBdUI7Q0FDMUIsYUFBYTtDQUNiLHFCQUFxQjtJQUNsQixtQkFBbUI7Q0FDdEIsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixtQkFBbUI7SUFDaEIsdUJBQXVCO0NBQzFCLGFBQWE7Q0FDYixXQUFXO0NBQ1gsVUFBVTtBQUNYOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxtQ0FBbUM7Q0FDbkMscUNBQXFDO0NBQ3JDLDRCQUE0QjtDQUM1QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsZ0NBQWdDOztBQUVqQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osa0NBQWtDO0NBQ2xDLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQixtQ0FBbUM7Q0FDbkMsK0NBQStDO0FBQ2hEOztBQUVBO0NBQ0MsZUFBZTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogY3NzIHJlc2V0ICovXFxuKixcXG5odG1sIHtcXG4gICAgbWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuOnJvb3Qge1xcblxcdC0tZGl2LWNvbG9yOiByZ2IoNjcgNjcgNjcgLyA4MCUpO1xcblxcdC0tYm9yZGVyLWNvbG9yOiAjZmZkOTAwO1xcblxcdC0tYm9yZGVyLXJhZGl1czogMjVweDtcXG5cXHQtLWltYWdlLWJvcmRlcjogMjUwcHg7XFxufVxcblxcbkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiAndGl0bGUnO1xcblxcdHNyYzogdXJsKC4vZm9udHMvdGl0bGUudHRmKTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICd0YWJzJztcXG5cXHRzcmM6IHVybCguL2ZvbnRzL3RhYi50dGYpO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnI7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKC4vaW1ncy9taWxrLXNwbGFzaC5qcGcpO1xcblxcdGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcblxcdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxufVxcblxcbi5oZWFkZXIge1xcblxcdG1pbi1oZWlnaHQ6IG1pbi1jb250ZW50O1xcblxcdG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdi1jb2xvcik7XFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuXFx0aGVpZ2h0OiAxMHJlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGVhZGVyLW1pbGsge1xcblxcdGhlaWdodDogMTAwcHg7XFxufVxcblxcbi50aXRsZSB7XFxuXFx0bWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0bWluLXdpZHRoOiBtaW4tY29udGVudDtcXG5cXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1zaGFkb3c6IDE0cHggMTJweCAzcHggI2ZmZDcwMGE4O1xcblxcdGZvbnQtZmFtaWx5OiB0aXRsZTtcXG5cXHRmb250LXNpemU6IDE0MHB4O1xcblxcdHBhZGRpbmctdG9wOiA0MHB4O1xcbn1cXG5cXG4udGFicyB7XFxuXFx0bWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0bWluLXdpZHRoOiBtaW4tY29udGVudDtcXG5cXHRmb250LWZhbWlseTogdGFicztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1MHB4O1xcbn1cXG5cXG4uaGVhZGVyLWJ1dHRvbnMge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFx0dHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4yNXM7XFxuXFx0cGFkZGluZzogMTJweDtcXG59XFxuXFxuLmhlYWRlci1idXR0b25zOmhvdmVyLFxcbi5oZWFkZXItYnV0dG9uczpmb2N1cyB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG5cXHRib3gtc2hhZG93OiAxcHggMXB4IDBweCAwcHggdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmJvZHktY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm9keS1ob21lLFxcbi5ib2R5LW1lbnUsXFxuLmJvZHktY29udGFjdCB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGl2LWNvbG9yKTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcdGhlaWdodDogODUlO1xcblxcdHdpZHRoOiA1MCU7XFxuXFx0bWluLWhlaWdodDogbWluLWNvbnRlbnQ7XFxuXFx0bWluLXdpZHRoOiBtaW4tY29udGVudDtcXG5cXHRmb250LWZhbWlseTogJ3RhYnMnO1xcblxcdGZvbnQtc2l6ZTogMzJweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uYm9keS1ob21lIHtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbn1cXG5cXG4uYm9keS1tZW51IHtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM4MHB4LCAxZnIpKTtcXG59XFxuXFxuLmJvZHktY29udGFjdCB7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4uY29udGFjdC1sZWZ0IHtcXG5cXHRncmlkLWNvbHVtbjogMSAvIDI7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAxZnIgOGZyO1xcblxcdGhlaWdodDogNzAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Y29sdW1uLWdhcDogMTBweDtcXG5cXHRmb250LXNpemU6IDI1cHg7XFxufVxcblxcbi5jb250YWN0LWljb25zIHtcXG5cXHRoZWlnaHQ6IDQwcHg7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi5jb250YWN0LXJpZ2h0IHtcXG5cXHRncmlkLWNvbHVtbjogMiAvIDM7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGhlaWdodDogNzAlO1xcblxcdHdpZHRoOiA4MCU7XFxufVxcblxcbmlmcmFtZSB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuXFx0dHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMC4zcztcXG5cXHQvKiBwYWRkaW5nOiAxMHB4OyAqL1xcbn1cXG5cXG5pZnJhbWU6aG92ZXIge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuXFx0Ym94LXNoYWRvdzogMjBweCAyMHB4IDQwcHggYmxhY2s7XFxuXFxufVxcblxcbi5ib2R5LWltZy1jb250YWluZXIge1xcblxcdGhlaWdodDogMjByZW07XFxuXFx0d2lkdGg6IDIwcmVtOyBcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1pbWFnZS1ib3JkZXIpO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbi5zZWxlY3RlZC10YWIge1xcblxcdGNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcblxcdGJveC1zaGFkb3c6IDFweCAxcHggMHB4IDBweCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4uc2VsZWN0ZWQtdGFiOmhvdmVyIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL2ltcG9ydCBpbWdzXG5pbXBvcnQgTG9jYXRpb25QaW4gZnJvbSAnLi9pbWdzL2xvY2F0aW9uLnBuZyc7XG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi9pbWdzL2Nsb2NrLnBuZyc7XG5pbXBvcnQgUGhvbmUgZnJvbSAnLi9pbWdzL2lwaG9uZS5wbmcnO1xuaW1wb3J0IEVtYWlsIGZyb20gJy4vaW1ncy9tYWlsLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RQYWdlKCkge1xuICAgIFxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIFxuICAgIC8vYm9keSAtIG1lbnUgcGFnZVxuICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG9jYXRpb25JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG9wZXJhdGlvbkhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIFxuICAgIGNvbnN0IG1hcENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1hcFZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuICAgIG1hcFZpZXcuc3JjID0gXCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQxNTc2LjE0ODA2NDEzNDAyMDYhMmQxMjcuNTI0NzQ5MjE5OTE1MDEhM2QzNy44MDY1MzIyMTg0NzE5ODYhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDM1NjMyN2IzNjdiMDBlNjclM0EweGE1YTIyOWFmZDI0YzM4OTkhMnNTdGFyYnVja3MhNWUwITNtMiExc2VuITJzYXUhNHYxNzAyMTE0ODg0NjQ5ITVtMiExc2VuITJzYXVcIjtcbiAgICBtYXBWaWV3LmFsbG93RnVsbHNjcmVlbiA9IHRydWU7XG5cblxuICAgIC8vYWRkIGljb25zICsgYWNjZXNzaWJpbGl0eSArIGNyZWRpdCBsaW5rc1xuICAgIGNvbnN0IGxvY2F0aW9uTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsb2NhdGlvbkxpbmsuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9sb2NhdGlvbic7XG4gICAgbG9jYXRpb25MaW5rLnRpdGxlID0gJ0xvY2F0aW9uIGljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uJztcbiAgICBcbiAgICBjb25zdCBsb2NhdGlvbkljb24gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2NhdGlvbkljb24uc3JjID0gTG9jYXRpb25QaW47XG4gICAgbG9jYXRpb25JY29uLmFsdCA9ICdsb2NhdGlvbiBwaW4gKyBhZGRyZXNzJztcbiAgICBcbiAgICBjb25zdCBjbG9ja0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgY2xvY2tMaW5rLmhyZWYgPSAnaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvY2xvY2snO1xuICAgIGNsb2NrTGluay50aXRsZSA9ICdDbG9jayBpY29ucyBjcmVhdGVkIGJ5IGRtaXRyaTEzIC0gRmxhdGljb24nO1xuXG4gICAgY29uc3QgY2xvY2tJY29uID0gbmV3IEltYWdlKCk7XG4gICAgY2xvY2tJY29uLnNyYyA9IENsb2NrO1xuICAgIGNsb2NrSWNvbi5hbHQgPSBcImNsb2NrICsgb3BlbiBob3Vyc1wiO1xuICAgIFxuICAgIGNvbnN0IHBob25lTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBwaG9uZUxpbmsuaHJlZiA9ICdodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9pcGhvbmUnO1xuICAgIHBob25lTGluay50aXRsZSA9ICdJcGhvbmUgaWNvbnMgY3JlYXRlZCBieSBkZWVtYWtkYWtzaW5hIC0gRmxhdGljb24nO1xuXG4gICAgY29uc3QgcGhvbmVJY29uID0gbmV3IEltYWdlKCk7XG4gICAgcGhvbmVJY29uLnNyYyA9IFBob25lO1xuICAgIHBob25lSWNvbi5hbHQgPSAncGhvbmUgKyBwaG9uZSBudW1iZXInO1xuXG4gICAgY29uc3QgZW1haWxMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGVtYWlsTGluay5ocmVmID0gJ2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWljb25zL2VtYWlsJztcbiAgICBlbWFpbExpbmsudGl0bGUgPSAnRW1haWwgaWNvbnMgY3JlYXRlZCBieSBGcmVlcGlrIC0gRmxhdGljb24nO1xuXG4gICAgY29uc3QgZW1haWxJY29uID0gbmV3IEltYWdlKCk7XG4gICAgZW1haWxJY29uLnNyYyA9IEVtYWlsO1xuICAgIGVtYWlsSWNvbi5hbHQgPSAnZW1haWwgKyBlbWFpbCBhZGRyZXNzJztcblxuICAgIC8vYWRkIGNsYXNzZXNcbiAgICBib2R5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvZHktY29udGFpbmVyJyk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKCdib2R5LWNvbnRhY3QnKTtcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1sZWZ0Jyk7XG4gICAgbWFwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtcmlnaHQnKTtcbiAgICBsb2NhdGlvbkljb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pY29ucycpO1xuICAgIGNsb2NrSWNvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0LWljb25zJyk7XG4gICAgcGhvbmVJY29uLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaWNvbnMnKTtcbiAgICBlbWFpbEljb24uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pY29ucycpO1xuXG4gICAgLy9hZGQgaW5uZXIgSFRNTCBcbiAgICBhZGRyZXNzLmlubmVySFRNTCA9ICcxMTMtNCBEYWxqZW9uIHJvYWQsIEdhcHllb25nLCBHeWVvbmdnaSwgU0snO1xuICAgIG9wZXJhdGlvbkhvdXJzLmlubmVySFRNTCA9ICdNb24tRnJpOiA5cG1+MmFtPGJyPlNhdC1TdW46IDlwbX42YW0nO1xuICAgIHBob25lTnVtYmVyLmlubmVySFRNTCA9ICcrODIgMDEwLU1JTEstOTIxMCc7XG4gICAgZW1haWwuaW5uZXJIVE1MID0gJ2dpdmVtZW1pbGtAbWlsay5jb20nO1xuXG4gICAgLy9hcHBlbmQgdG8gcGFnZVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keUNvbnRhaW5lcik7XG4gICAgYm9keUNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5KTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGxvY2F0aW9uSW5mb0NvbnRhaW5lcik7XG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uTGluayk7IC8vaGVyZVxuICAgIGxvY2F0aW9uTGluay5hcHBlbmRDaGlsZChsb2NhdGlvbkljb24pOyAgICAgICAgIC8vaGVyZVxuICAgIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoY2xvY2tMaW5rKTtcbiAgICBjbG9ja0xpbmsuYXBwZW5kQ2hpbGQoY2xvY2tJY29uKVxuICAgIGxvY2F0aW9uSW5mb0NvbnRhaW5lci5hcHBlbmRDaGlsZChvcGVyYXRpb25Ib3Vycyk7XG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTGluayk7XG4gICAgcGhvbmVMaW5rLmFwcGVuZENoaWxkKHBob25lSWNvbik7XG4gICAgbG9jYXRpb25JbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWxMaW5rKTtcbiAgICBlbWFpbExpbmsuYXBwZW5kQ2hpbGQoZW1haWxJY29uKTtcbiAgICBsb2NhdGlvbkluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICAgIGJvZHkuYXBwZW5kQ2hpbGQobWFwQ29udGFpbmVyKTtcbiAgICBtYXBDb250YWluZXIuYXBwZW5kQ2hpbGQobWFwVmlldyk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn07IiwiLy9pbXBvcnQgaW1nc1xuaW1wb3J0IG1pbGtTY29vcEltZyBmcm9tICcuL2ltZ3MvbWlsay1zY29vcC5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lUGFnZSgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIFxuICAgIC8vYm9keSAtIGhvbWUgcGFnZVxuICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYm9keVRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJvZHlNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib2R5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAvL2FkZCBpbWFnZSArIGFjY2Vzc2liaWxpdHlcbiAgICBjb25zdCBtaWxrU2Nvb3AgPSBuZXcgSW1hZ2UoKTtcbiAgICBtaWxrU2Nvb3Auc3JjID0gbWlsa1Njb29wSW1nO1xuICAgIG1pbGtTY29vcC5hbHQgPSAnSGFuZHMgc2Nvb3BpbmcgZGVsaWNpb3VzIG1pbGsnO1xuXG4gICAgLy9hZGQgY2xhc3Nlc1xuICAgIGJvZHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYm9keS1jb250YWluZXInKTtcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2JvZHktaG9tZScpO1xuICAgIG1pbGtTY29vcC5jbGFzc0xpc3QuYWRkKCdib2R5LWltZy1jb250YWluZXInKTtcblxuICAgIC8vYWRkIGlubmVyIEhUTUxcbiAgICBib2R5VG9wLmlubmVySFRNTCA9IGBUaGUgYmVzdCBtaWxrIGhhbmRzIGRvd24hIFxuICAgIEkndmUga25vd24gbWlsayBmb3IgbWFueSB5ZWFycywgd2UgZ28gd2F5IGJhY2suIFxuICAgIEkga25vdyBhbGwgdGhlIGJlc3QgY293cyB3aXRoIGFsbCB0aGUgYmVzdCBtaWxrLCBcbiAgICBiZWxpZXZlIG1lYDtcbiAgICBib2R5TG93LmlubmVySFRNTCA9IGBPdXIgZmFtaWx5IHdhcyB0aGUgZmlyc3QgXG4gICAgdG8gZGlzY292ZXIgbWlsayBmcm9tIGNvd3MuLiBcbiAgICBkb24ndCBhc2sgdXMgaG93YDtcblxuICAgIC8vYXBwZW5kIHRvIHBhZ2VcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHlDb250YWluZXIpO1xuICAgIGJvZHlDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keSk7XG4gICAgYm9keS5hcHBlbmRDaGlsZChib2R5VG9wKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJvZHlNaWQpO1xuICAgIGJvZHlNaWQuYXBwZW5kQ2hpbGQobWlsa1Njb29wKTtcbiAgICBib2R5LmFwcGVuZENoaWxkKGJvZHlMb3cpOyAgICBcblxuICAgIHJldHVybiBjb250ZW50O1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51UGFnZSgpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIFxuICAgIC8vYm9keSAtIG1lbnUgcGFnZVxuICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG5cbiAgICAvL2FkZCBjbGFzc2VzXG4gICAgYm9keUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdib2R5LWNvbnRhaW5lcicpO1xuICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnYm9keS1tZW51Jyk7XG5cbiAgICAvL2FkZCBpbm5lciBIVE1MXG5cbiAgICAvL2FwcGVuZCB0byBwYWdlXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5Q29udGFpbmVyKTtcbiAgICBib2R5Q29udGFpbmVyLmFwcGVuZENoaWxkKGJvZHkpO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQ7XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy9jc3NcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vL2ltYWdlc1xuaW1wb3J0IE1pbGsgZnJvbSAnLi9pbWdzL21pbGstcGFsZS5naWYnO1xuXG4vL21vZHVsZXNcbmltcG9ydCBob21lUGFnZSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0LmpzJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgICAvL3NldCBoZWFkZXJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cblxuICAgIGNvbnN0IG1pbGsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbWlsay5ocmVmID0gJ2h0dHBzOi8vd3d3LmZsYXRpY29uLmNvbS9mcmVlLWFuaW1hdGVkLWljb25zL2RhaXJ5LXByb2R1Y3RzJztcbiAgICBtaWxrLnRpdGxlID0gJ0RhaXJ5IHByb2R1Y3RzIGFuaW1hdGVkIGljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uJztcblxuICAgIGNvbnN0IG1pbGtQb3VyID0gbmV3IEltYWdlKCk7XG4gICAgbWlsa1BvdXIuc3JjID0gTWlsaztcbiAgICBtaWxrUG91ci5hbHQgPSAncG91cmluZyBtaWxrIGhlYWRlciBpY29uJztcblxuICAgIC8vYXNzaWduIGNzc1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYnV0dG9ucycpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWJ1dHRvbnMnKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ2hlYWRlci1idXR0b25zJyk7XG4gICAgbWlsa1BvdXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW1pbGsnKTtcblxuICAgIC8vc2V0IGlubmVySFRNTFxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdMYXR0ZSBhIGxhIExhYyc7XG4gICAgaG9tZVRhYi5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgbWVudVRhYi5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgY29udGFjdFRhYi5pbm5lckhUTUwgPSAnQ29udGFjdCc7XG5cbiAgICAvL2FwcGVuZCB0byBwYWdlXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobWlsayk7XG4gICAgbWlsay5hcHBlbmRDaGlsZChtaWxrUG91cik7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0YWJDb250YWluZXIpO1xuICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuXG4gICAgLy9ldmVudCBsaXN0ZW5lcnMgLSBzZXQgY29udGVudCBiZXR3ZWVuIHRhYnNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWVudVBhZ2UoKSk7XG4gICAgICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgICAgIG1lbnVUYWIuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gICAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHktY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFsbFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblxuICAgICAgICBhbGxUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10YWInKTtcbiAgICAgICAgICAgIHRhYi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBob21lVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRhYicpO1xuICAgICAgICBob21lVGFiLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYm9keUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob21lUGFnZSgpKTsgXG4gICAgfSk7XG5cbiAgICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGJvZHlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9keS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgYWxsVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXG4gICAgICAgIGFsbFRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLXRhYicpO1xuICAgICAgICAgICAgdGFiLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtdGFiJyk7XG4gICAgICAgIG1lbnVUYWIuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBib2R5Q29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1lbnVQYWdlKCkpO1xuICAgIH0pO1xuXG4gICAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBib2R5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvZHktY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFsbFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblxuICAgICAgICBhbGxUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC10YWInKTtcbiAgICAgICAgICAgIHRhYi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLXRhYicpO1xuICAgICAgICBjb250YWN0VGFiLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgYm9keUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWN0UGFnZSgpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb250ZW50O1xufTtcblxuY29tcG9uZW50KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9