/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/peak-district.jpg */ "./src/assets/peak-district.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/search-icon.png */ "./src/assets/search-icon.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: "Open Sans", sans-serif;
}

body {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5411764706), rgba(0, 0, 0, 0.5411764706)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  padding-top: 1rem;
  font-size: 1rem;
  color: white;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  min-height: 100%;
}
.container > div {
  width: 80%;
}

.search-box {
  display: flex;
  justify-content: center;
}
.search-box * {
  border: none;
  border-bottom: 2px solid white;
  background: none;
}
.search-box input {
  height: 2rem;
}
.search-box input::placeholder {
  color: rgba(255, 255, 255, 0.548);
  font-size: 1rem;
  padding-left: 0.2rem;
}
.search-box button {
  height: 2rem;
  width: 2rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.main-info {
  background-color: rgba(58, 53, 53, 0.5);
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}
.main-info > div {
  min-width: 100%;
  text-align: center;
}
.main-info .city {
  font-size: 1.5rem;
}
.main-info .date {
  font-size: 1rem;
}
.main-info .img-and-temp {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1.5rem;
}
.main-info .img-and-temp img {
  width: 5.5rem;
}
.main-info .img-and-temp .temperature {
  font-size: 2rem;
}
.main-info .status {
  font-size: 1.5rem;
  text-transform: capitalize;
}
.main-info .stats {
  display: flex;
  margin-top: 2rem;
}
.main-info .stats .stat-box {
  min-height: 100px;
  flex: 0.25;
  text-align: center;
}
.main-info .stats .stat-box p {
  padding: 0.2rem;
  margin-bottom: 1rem;
}
.main-info .stats .stat-box img {
  width: 35px;
  height: 35px;
}

.forecast {
  background-color: rgba(255, 0, 0, 0.5);
  display: grid;
  grid-template: auto/1fr;
  margin-top: 2rem;
}

.forecast-choice {
  display: flex;
  justify-content: center;
  height: max-content;
}
.forecast-choice button {
  height: 25px;
  padding: 0.5rem 0.5rem;
  background-color: green;
  border: none;
  color: white;
}

.hourly-forecast,
.daily-forecast {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.hourly-forecast > div,
.daily-forecast > div {
  width: 100%;
  height: 50px;
  border: 1px solid blue;
  background-color: #5c5050;
  display: flex;
  align-items: center;
}
.hourly-forecast > div img,
.daily-forecast > div img {
  width: 50px;
  height: 50px;
  margin-right: 1rem;
}

.hour__time {
  margin-right: auto;
}

.daily-forecast {
  display: none;
}`, "",{"version":3,"sources":["webpack://./src/styles/_layout.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AACA;;;EAGE,SAAA;EACA,UAAA;EACA,mBAAA;EAEA,oCAAA;ACAF;;ADGA;EACI,aAAA;EACA,YAAA;EACA,wIAAA;EACA,sBAAA;EACA,2BAAA;EACA,iBAAA;EAEA,eAAA;EACA,YAAA;ACDJ;;ADIA;EAEI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,WAAA;EACA,gBAAA;ACFJ;ADII;EACI,UAAA;ACFR;;ADMA;EAII,aAAA;EACA,uBAAA;ACNJ;ADQI;EACI,YAAA;EACA,8BAAA;EACA,gBAAA;ACNR;ADSI;EACI,YAAA;ACPR;ADSQ;EACI,iCAAA;EACA,eAAA;EACA,oBAAA;ACPZ;ADWI;EACI,YAAA;EACA,WAAA;EACA,yDAAA;EACA,2BAAA;EACA,4BAAA;EACA,sBAAA;ACTR;;ADcA;EACI,uCAAA;EAEA,mBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;ACbJ;ADeI;EAEI,eAAA;EACA,kBAAA;ACdR;ADmBI;EACI,iBAAA;ACjBR;ADqBI;EACI,eAAA;ACnBR;ADsBI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;EACA,kBAAA;ACpBR;ADsBQ;EACI,aAAA;ACpBZ;ADuBQ;EACI,eAAA;ACrBZ;AD0BI;EACI,iBAAA;EAEA,0BAAA;ACzBR;AD6BI;EACI,aAAA;EACA,gBAAA;AC3BR;AD6BQ;EACI,iBAAA;EACA,UAAA;EAGA,kBAAA;AC7BZ;AD+BY;EACI,eAAA;EACA,mBAAA;AC7BhB;ADgCY;EACI,WAAA;EACA,YAAA;AC9BhB;;ADqCA;EACI,sCAAA;EACA,aAAA;EACA,uBAAA;EAEA,gBAAA;ACnCJ;;ADsCA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;ACnCJ;ADqCI;EACI,YAAA;EACA,sBAAA;EACA,uBAAA;EACA,YAAA;EACA,YAAA;ACnCR;;ADuCA;;EAEI,aAAA;EACA,sBAAA;EACA,WAAA;ACpCJ;ADsCI;;EACI,WAAA;EACA,YAAA;EACA,sBAAA;EACA,yBAAA;EAEA,aAAA;EACA,mBAAA;ACpCR;ADsCQ;;EACI,WAAA;EACA,YAAA;EAEA,kBAAA;ACpCZ;;AD0CA;EACI,kBAAA;ACvCJ;;AD0CA;EACI,aAAA;ACvCJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n\n  font-family: 'Open Sans', sans-serif;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    background: linear-gradient(to right, #0000008a, #0000008a), url('../assets/peak-district.jpg');\n    background-size: cover;\n    background-position: center;\n    padding-top: 1rem;\n\n    font-size: 1rem;\n    color: white;\n}\n\n.container{\n    //backdrop-filter: blur(2px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    width: 100%;\n    min-height: 100%;\n\n    >div{\n        width: 80%;\n    }\n}\n\n.search-box{\n    //background-color: rgba(0, 128, 0, 0.5);\n    //padding: 1rem 1.5rem;\n\n    display: flex;\n    justify-content: center;\n\n    *{\n        border: none;\n        border-bottom: 2px solid white;\n        background: none;\n    }\n    \n    input{\n        height: 2rem;\n        \n        &::placeholder{\n            color: rgba(255, 255, 255, 0.548);\n            font-size: 1rem;\n            padding-left: 0.2rem;\n        }\n    }\n\n    button{\n        height: 2rem;\n        width:  2rem;\n        background-image: url(../assets/search-icon.png);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n}\n\n.main-info{\n    background-color: rgba(58, 53, 53, 0.5);\n    //flex-grow: 0.4;\n    padding-block: 1rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.2rem;\n\n    >div{\n        //border: 1px solid white;\n        min-width: 100%;\n        text-align: center;\n        //padding-block: 0.2rem;\n        \n    }\n\n    .city{\n        font-size: 1.5rem;\n        //font-weight: 600;\n    }\n    \n    .date{\n        font-size: 1rem;\n    }\n    \n    .img-and-temp{\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n        margin-top: 1.5rem;\n\n        img{\n            width: 5.5rem;\n        }\n        \n        .temperature{\n            font-size: 2rem;\n        }\n    }\n    \n\n    .status{\n        font-size: 1.5rem;\n        //font-weight: 600;\n        text-transform: capitalize;\n\n    }\n    \n    .stats{\n        display: flex;\n        margin-top: 2rem;\n    \n        .stat-box{\n            min-height: 100px;\n            flex: 0.25;\n            //border: 1px solid red;\n    \n            text-align: center;\n    \n            p{\n                padding: 0.2rem;\n                margin-bottom: 1rem;\n            }\n\n            img{\n                width: 35px;\n                height: 35px;\n            }\n        }\n    }\n}\n\n\n.forecast{\n    background-color: rgba(255, 0, 0, 0.5);\n    display: grid;\n    grid-template: auto /  1fr;\n\n    margin-top: 2rem;\n}\n\n.forecast-choice{\n    display: flex;\n    justify-content: center;\n    height: max-content;\n\n    button {\n        height: 25px;\n        padding: 0.5rem 0.5rem;\n        background-color: green;\n        border: none;\n        color: white;\n    }\n}\n\n.hourly-forecast,\n.daily-forecast{\n    display: flex;\n    flex-direction: column;\n    gap: 0.2rem;\n\n    >div{\n        width: 100%;\n        height: 50px;\n        border: 1px solid blue;\n        background-color: #5c5050;\n\n        display: flex;\n        align-items: center;\n\n        img{\n            width: 50px;\n            height: 50px;\n\n            margin-right: 1rem;\n        }\n    }\n\n}\n\n.hour__time{\n    margin-right: auto;\n}\n\n.daily-forecast{\n    display: none;\n}","@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n  font-family: \"Open Sans\", sans-serif;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.5411764706), rgba(0, 0, 0, 0.5411764706)), url(\"../assets/peak-district.jpg\");\n  background-size: cover;\n  background-position: center;\n  padding-top: 1rem;\n  font-size: 1rem;\n  color: white;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  width: 100%;\n  min-height: 100%;\n}\n.container > div {\n  width: 80%;\n}\n\n.search-box {\n  display: flex;\n  justify-content: center;\n}\n.search-box * {\n  border: none;\n  border-bottom: 2px solid white;\n  background: none;\n}\n.search-box input {\n  height: 2rem;\n}\n.search-box input::placeholder {\n  color: rgba(255, 255, 255, 0.548);\n  font-size: 1rem;\n  padding-left: 0.2rem;\n}\n.search-box button {\n  height: 2rem;\n  width: 2rem;\n  background-image: url(../assets/search-icon.png);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main-info {\n  background-color: rgba(58, 53, 53, 0.5);\n  padding-block: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n}\n.main-info > div {\n  min-width: 100%;\n  text-align: center;\n}\n.main-info .city {\n  font-size: 1.5rem;\n}\n.main-info .date {\n  font-size: 1rem;\n}\n.main-info .img-and-temp {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 1.5rem;\n}\n.main-info .img-and-temp img {\n  width: 5.5rem;\n}\n.main-info .img-and-temp .temperature {\n  font-size: 2rem;\n}\n.main-info .status {\n  font-size: 1.5rem;\n  text-transform: capitalize;\n}\n.main-info .stats {\n  display: flex;\n  margin-top: 2rem;\n}\n.main-info .stats .stat-box {\n  min-height: 100px;\n  flex: 0.25;\n  text-align: center;\n}\n.main-info .stats .stat-box p {\n  padding: 0.2rem;\n  margin-bottom: 1rem;\n}\n.main-info .stats .stat-box img {\n  width: 35px;\n  height: 35px;\n}\n\n.forecast {\n  background-color: rgba(255, 0, 0, 0.5);\n  display: grid;\n  grid-template: auto/1fr;\n  margin-top: 2rem;\n}\n\n.forecast-choice {\n  display: flex;\n  justify-content: center;\n  height: max-content;\n}\n.forecast-choice button {\n  height: 25px;\n  padding: 0.5rem 0.5rem;\n  background-color: green;\n  border: none;\n  color: white;\n}\n\n.hourly-forecast,\n.daily-forecast {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.hourly-forecast > div,\n.daily-forecast > div {\n  width: 100%;\n  height: 50px;\n  border: 1px solid blue;\n  background-color: #5c5050;\n  display: flex;\n  align-items: center;\n}\n.hourly-forecast > div img,\n.daily-forecast > div img {\n  width: 50px;\n  height: 50px;\n  margin-right: 1rem;\n}\n\n.hour__time {\n  margin-right: auto;\n}\n\n.daily-forecast {\n  display: none;\n}"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTodaysWeather: () => (/* binding */ getTodaysWeather)
/* harmony export */ });
const CURRENT_URL = 'http://api.weatherapi.com/v1/current.json?key=5b7362e8838e44bda91125324231710';
const FORECAST_URL = 'http://api.weatherapi.com/v1/forecast.json?key=5b7362e8838e44bda91125324231710&days=6';

async function getTodaysWeather(location='kilcormac'){
    let response = await fetch(`${CURRENT_URL}&q=${location}`);
    let todaysWeather = await response.json();

    return todaysWeather
}



/***/ }),

/***/ "./src/assets/peak-district.jpg":
/*!**************************************!*\
  !*** ./src/assets/peak-district.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27186a3b83146668ebae.jpg";

/***/ }),

/***/ "./src/assets/search-icon.png":
/*!************************************!*\
  !*** ./src/assets/search-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32eeb048363f0a8ffcc8.png";

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
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/api */ "./src/modules/api.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");




const weatherImg = document.querySelector('.weather-img>img');
const location = document.querySelector('.city');
const date = document.querySelector('.date');
const temp = document.querySelector('.temperature');
const status = document.querySelector('.status');

/* const feelsLikeImg = document.querySelector('#feels-like-img');
feelsLikeImg.src */

async function getCurrent(){
    let weather = await _modules_api__WEBPACK_IMPORTED_MODULE_0__.getTodaysWeather();

    console.log(weather);
    console.log(weather.current.cloud);

    location.textContent = weather.location.name;
    weatherImg.src = weather.current.condition.icon;
    date.textContent = weather.current.last_updated;
    temp.textContent = weather.current.temp_c;
    status.textContent = weather.current.condition.text;
}

getCurrent();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBcUM7QUFDVDs7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwREFBb0I7O0FBRTVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc2VhcmNoLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjU0MTE3NjQ3MDYpLCByZ2JhKDAsIDAsIDAsIDAuNTQxMTc2NDcwNikpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbi5jb250YWluZXIgPiBkaXYge1xuICB3aWR0aDogODAlO1xufVxuXG4uc2VhcmNoLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNlYXJjaC1ib3ggKiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnNlYXJjaC1ib3ggaW5wdXQge1xuICBoZWlnaHQ6IDJyZW07XG59XG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG59XG4uc2VhcmNoLWJveCBidXR0b24ge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1haW4taW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDUzLCA1MywgMC41KTtcbiAgcGFkZGluZy1ibG9jazogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjJyZW07XG59XG4ubWFpbi1pbmZvID4gZGl2IHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1pbmZvIC5jaXR5IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ubWFpbi1pbmZvIC5kYXRlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCBpbWcge1xuICB3aWR0aDogNS41cmVtO1xufVxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIC50ZW1wZXJhdHVyZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5tYWluLWluZm8gLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tYWluLWluZm8gLnN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBmbGV4OiAwLjI1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1pbmZvIC5zdGF0cyAuc3RhdC1ib3ggcCB7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uZm9yZWNhc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0by8xZnI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5mb3JlY2FzdC1jaG9pY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcbn1cbi5mb3JlY2FzdC1jaG9pY2UgYnV0dG9uIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5ob3VybHktZm9yZWNhc3QsXG4uZGFpbHktZm9yZWNhc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuMnJlbTtcbn1cbi5ob3VybHktZm9yZWNhc3QgPiBkaXYsXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1MDUwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvdXJseS1mb3JlY2FzdCA+IGRpdiBpbWcsXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYgaW1nIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uaG91cl9fdGltZSB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmRhaWx5LWZvcmVjYXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvX2xheW91dC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTs7O0VBR0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUVBLG9DQUFBO0FDQUY7O0FER0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHdJQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FESUk7RUFDSSxVQUFBO0FDRlI7O0FETUE7RUFJSSxhQUFBO0VBQ0EsdUJBQUE7QUNOSjtBRFFJO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFNJO0VBQ0ksWUFBQTtBQ1BSO0FEU1E7RUFDSSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ1BaO0FEV0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDVFI7O0FEY0E7RUFDSSx1Q0FBQTtFQUVBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDYko7QURlSTtFQUVJLGVBQUE7RUFDQSxrQkFBQTtBQ2RSO0FEbUJJO0VBQ0ksaUJBQUE7QUNqQlI7QURxQkk7RUFDSSxlQUFBO0FDbkJSO0FEc0JJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3BCUjtBRHNCUTtFQUNJLGFBQUE7QUNwQlo7QUR1QlE7RUFDSSxlQUFBO0FDckJaO0FEMEJJO0VBQ0ksaUJBQUE7RUFFQSwwQkFBQTtBQ3pCUjtBRDZCSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQzNCUjtBRDZCUTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUdBLGtCQUFBO0FDN0JaO0FEK0JZO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FDN0JoQjtBRGdDWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDOUJoQjs7QURxQ0E7RUFDSSxzQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUVBLGdCQUFBO0FDbkNKOztBRHNDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDbkNKO0FEcUNJO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ25DUjs7QUR1Q0E7O0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ3BDSjtBRHNDSTs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUNwQ1I7QURzQ1E7O0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxrQkFBQTtBQ3BDWjs7QUQwQ0E7RUFDSSxrQkFBQTtBQ3ZDSjs7QUQwQ0E7RUFDSSxhQUFBO0FDdkNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDA4YSwgIzAwMDAwMDhhKSwgdXJsKCcuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIC8vYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMXJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuXFxuICAgID5kaXZ7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxufVxcblxcbi5zZWFyY2gtYm94e1xcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xcbiAgICAvL3BhZGRpbmc6IDFyZW0gMS41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgKntcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgIGlucHV0e1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgXFxuICAgICAgICAmOjpwbGFjZWhvbGRlcntcXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OCk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIHdpZHRoOiAgMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvc2VhcmNoLWljb24ucG5nKTtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB9XFxuXFxufVxcblxcbi5tYWluLWluZm97XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDUzLCA1MywgMC41KTtcXG4gICAgLy9mbGV4LWdyb3c6IDAuNDtcXG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjJyZW07XFxuXFxuICAgID5kaXZ7XFxuICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLy9wYWRkaW5nLWJsb2NrOiAwLjJyZW07XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAuY2l0eXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgLy9mb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxuICAgIFxcbiAgICAuZGF0ZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmltZy1hbmQtdGVtcHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuXFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgd2lkdGg6IDUuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLnRlbXBlcmF0dXJle1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICBcXG5cXG4gICAgLnN0YXR1c3tcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgLy9mb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuXFxuICAgIH1cXG4gICAgXFxuICAgIC5zdGF0c3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBcXG4gICAgICAgIC5zdGF0LWJveHtcXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgICAgICAgICBmbGV4OiAwLjI1O1xcbiAgICAgICAgICAgIC8vYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgICBcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbiAgICAgICAgICAgIHB7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuMnJlbTtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG4uZm9yZWNhc3R7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gIDFmcjtcXG5cXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWNob2ljZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgIH1cXG59XFxuXFxuLmhvdXJseS1mb3JlY2FzdCxcXG4uZGFpbHktZm9yZWNhc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4ycmVtO1xcblxcbiAgICA+ZGl2e1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVjNTA1MDtcXG5cXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG59XFxuXFxuLmhvdXJfX3RpbWV7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmRhaWx5LWZvcmVjYXN0e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNTQxMTc2NDcwNiksIHJnYmEoMCwgMCwgMCwgMC41NDExNzY0NzA2KSksIHVybChcXFwiLi4vYXNzZXRzL3BlYWstZGlzdHJpY3QuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG4uY29udGFpbmVyID4gZGl2IHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnNlYXJjaC1ib3ggKiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4uc2VhcmNoLWJveCBpbnB1dCB7XFxuICBoZWlnaHQ6IDJyZW07XFxufVxcbi5zZWFyY2gtYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG59XFxuLnNlYXJjaC1ib3ggYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9zZWFyY2gtaWNvbi5wbmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5tYWluLWluZm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OCwgNTMsIDUzLCAwLjUpO1xcbiAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG4ubWFpbi1pbmZvID4gZGl2IHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4taW5mbyAuY2l0eSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLm1haW4taW5mbyAuZGF0ZSB7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAgaW1nIHtcXG4gIHdpZHRoOiA1LjVyZW07XFxufVxcbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCAudGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5zdGF0dXMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuLm1haW4taW5mbyAuc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCB7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGZsZXg6IDAuMjU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCBwIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCBpbWcge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvLzFmcjtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1jaG9pY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG59XFxuLmZvcmVjYXN0LWNob2ljZSBidXR0b24ge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0LFxcbi5kYWlseS1mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2LFxcbi5kYWlseS1mb3JlY2FzdCA+IGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1MDUwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ob3VybHktZm9yZWNhc3QgPiBkaXYgaW1nLFxcbi5kYWlseS1mb3JlY2FzdCA+IGRpdiBpbWcge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbi5ob3VyX190aW1lIHtcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmRhaWx5LWZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBDVVJSRU5UX1VSTCA9ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NWI3MzYyZTg4MzhlNDRiZGE5MTEyNTMyNDIzMTcxMCc7XG5jb25zdCBGT1JFQ0FTVF9VUkwgPSAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT01YjczNjJlODgzOGU0NGJkYTkxMTI1MzI0MjMxNzEwJmRheXM9Nic7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRvZGF5c1dlYXRoZXIobG9jYXRpb249J2tpbGNvcm1hYycpe1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0NVUlJFTlRfVVJMfSZxPSR7bG9jYXRpb259YCk7XG4gICAgbGV0IHRvZGF5c1dlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gdG9kYXlzV2VhdGhlclxufVxuXG5leHBvcnQge2dldFRvZGF5c1dlYXRoZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgQVBJIGZyb20gJy4vbW9kdWxlcy9hcGknO1xuaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuXG5cbmNvbnN0IHdlYXRoZXJJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbWc+aW1nJyk7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKTtcblxuLyogY29uc3QgZmVlbHNMaWtlSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UtaW1nJyk7XG5mZWVsc0xpa2VJbWcuc3JjICovXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnQoKXtcbiAgICBsZXQgd2VhdGhlciA9IGF3YWl0IEFQSS5nZXRUb2RheXNXZWF0aGVyKCk7XG5cbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyLmN1cnJlbnQuY2xvdWQpO1xuXG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyLmxvY2F0aW9uLm5hbWU7XG4gICAgd2VhdGhlckltZy5zcmMgPSB3ZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IHdlYXRoZXIuY3VycmVudC5sYXN0X3VwZGF0ZWQ7XG4gICAgdGVtcC50ZXh0Q29udGVudCA9IHdlYXRoZXIuY3VycmVudC50ZW1wX2M7XG4gICAgc3RhdHVzLnRleHRDb250ZW50ID0gd2VhdGhlci5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xufVxuXG5nZXRDdXJyZW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=