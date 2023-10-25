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
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
}

button {
  cursor: pointer;
}

body {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5411764706), rgba(0, 0, 0, 0.5411764706)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  padding-top: 1rem;
  font-size: 0.9rem;
  color: white;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
}
.container > div {
  width: 80%;
}

.search-box {
  display: flex;
  justify-content: center;
  margin-block: 1rem;
}
.search-box * {
  border: none;
  border-bottom: 2px solid white;
  background: none;
}
.search-box input {
  height: 2rem;
  color: white;
  font-size: large;
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
.main-info .status {
  font-size: 1.5rem;
  text-transform: capitalize;
  margin-top: 1rem;
}
.main-info .img-and-temp {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.main-info .img-and-temp img {
  width: 5.5rem;
}
.main-info .img-and-temp .temperature {
  position: relative;
  font-size: 2rem;
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
  min-height: 2.5rem;
}
.main-info .stats .stat-box img {
  width: 30px;
  height: 30px;
}

.options {
  display: flex;
  justify-content: space-between;
}
.options button {
  width: 60px;
  height: 100%;
  padding-block: 0.2rem;
  color: grey;
  background-color: rgba(58, 53, 53, 0.5);
  border: none;
}
.options button.selected {
  color: white;
  font-weight: 600;
}

.forecast {
  display: grid;
  grid-template: auto/1fr;
  margin-top: 2rem;
}

.forecast-choice {
  display: flex;
  justify-content: center;
}
.forecast-choice button {
  height: 35px;
  padding: 0.5rem;
  border: none;
  color: grey;
  background-color: rgba(58, 53, 53, 0.5);
  font-weight: 100;
}
.forecast-choice button.selected {
  color: white;
  font-weight: 600;
}

.hourly-forecast,
.daily-forecast {
  display: none;
  flex-direction: column;
  gap: 0.2rem;
}
.hourly-forecast.active,
.daily-forecast.active {
  display: flex;
}
.hourly-forecast > div,
.daily-forecast > div {
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;
  align-items: center;
  justify-items: center;
  background-color: rgba(58, 53, 53, 0.5);
}
.hourly-forecast > div img,
.daily-forecast > div img {
  width: 35px;
  height: 35px;
}`, "",{"version":3,"sources":["webpack://./src/styles/_layout.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AAIA;;;EAGE,SAAA;EACA,UAAA;EACA,sBAAA;EAEA,oCAAA;ACHF;;ADMA;EACI,eAAA;ACHJ;;ADMA;EACI,aAAA;EACA,YAAA;EACA,wIAAA;EACA,sBAAA;EACA,2BAAA;EACA,iBAAA;EAEA,iBAAA;EACA,YAAA;ACJJ;;ADOA;EAEI,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,WAAA;EACA,gBAAA;ACNJ;ADQI;EACI,UAAA;ACNR;;ADUA;EAII,aAAA;EACA,uBAAA;EACA,kBAAA;ACVJ;ADYI;EACI,YAAA;EACA,8BAAA;EACA,gBAAA;ACVR;ADaI;EACI,YAAA;EACA,YAAA;EACA,gBAAA;ACXR;ADaQ;EACI,iCAAA;EACA,eAAA;EACA,oBAAA;ACXZ;ADeI;EACI,YAAA;EACA,WAAA;EACA,yDAAA;EACA,2BAAA;EACA,4BAAA;EACA,sBAAA;ACbR;;ADkBA;EACI,uCAhFO;EAkFP,mBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;ACjBJ;ADmBI;EAEI,eAAA;EACA,kBAAA;AClBR;ADuBI;EACI,iBAAA;ACrBR;ADyBI;EACI,eAAA;ACvBR;AD0BI;EACI,iBAAA;EAEA,0BAAA;EACA,gBAAA;ACzBR;AD4BI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;AC1BR;AD4BQ;EACI,aAAA;AC1BZ;AD6BQ;EACI,kBAAA;EACA,eAAA;AC3BZ;ADmCI;EACI,aAAA;EACA,gBAAA;ACjCR;ADmCQ;EACI,iBAAA;EACA,UAAA;EAGA,kBAAA;ACnCZ;ADqCY;EACI,eAAA;EACA,kBAAA;ACnChB;ADsCY;EACI,WAAA;EACA,YAAA;ACpChB;;AD4CA;EACI,aAAA;EACA,8BAAA;ACzCJ;AD2CI;EACI,WAAA;EACA,YAAA;EACA,qBAAA;EAEA,WAAA;EACA,uCAxKG;EAyKH,YAAA;AC1CR;AD6CI;EACI,YAAA;EACA,gBAAA;AC3CR;;ADgDA;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;AC7CJ;;ADgDA;EACI,aAAA;EACA,uBAAA;AC7CJ;AD+CI;EACI,YAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,uCAlMG;EAmMH,gBAAA;AC7CR;AD+CQ;EACI,YAAA;EACA,gBAAA;AC7CZ;;ADoDA;;EAEI,aAAA;EACA,sBAAA;EACA,WAAA;ACjDJ;ADmDI;;EACI,aAAA;AChDR;ADmDI;;EACI,WAAA;EACA,YAAA;EAEA,aAAA;EACA,+CAAA;EACA,mBAAA;EACA,qBAAA;EACA,uCAhOG;AC+KX;ADmDQ;;EACI,WAAA;EACA,YAAA;AChDZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');\n\n$bg-color: rgba(58, 53, 53, 0.5);\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n\n  font-family: 'Open Sans', sans-serif;\n}\n\nbutton{\n    cursor: pointer;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    background: linear-gradient(to right, #0000008a, #0000008a), url('../assets/peak-district.jpg');\n    background-size: cover;\n    background-position: center;\n    padding-top: 1rem;\n\n    font-size: 0.9rem;\n    color: white;\n}\n\n.container{\n    //backdrop-filter: blur(2px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    //gap: 1rem;\n    width: 100%;\n    min-height: 100%;\n\n    >div{\n        width: 80%;\n    }\n}\n\n.search-box{\n    //background-color: rgba(0, 128, 0, 0.5);\n    //padding: 1rem 1.5rem;\n\n    display: flex;\n    justify-content: center;\n    margin-block: 1rem;\n\n    *{\n        border: none;\n        border-bottom: 2px solid white;\n        background: none;\n    }\n    \n    input{\n        height: 2rem;\n        color: white;\n        font-size: large;\n        \n        &::placeholder{\n            color: rgba(255, 255, 255, 0.548);\n            font-size: 1rem;\n            padding-left: 0.2rem;\n        }\n    }\n\n    button{\n        height: 2rem;\n        width:  2rem;\n        background-image: url(../assets/search-icon.png);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n}\n\n.main-info{\n    background-color: $bg-color;\n    //flex-grow: 0.4;\n    padding-block: 1rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.2rem;\n\n    >div{\n        //border: 1px solid white;\n        min-width: 100%;\n        text-align: center;\n        //padding-block: 0.2rem;\n        \n    }\n\n    .city{\n        font-size: 1.5rem;\n        //font-weight: 600;\n    }\n    \n    .date{\n        font-size: 1rem;\n    }\n    \n    .status{\n        font-size: 1.5rem;\n        //font-weight: 600;\n        text-transform: capitalize;\n        margin-top: 1rem;\n    }\n\n    .img-and-temp{\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n\n        img{\n            width: 5.5rem;\n        }\n        \n        .temperature{\n            position: relative;\n            font-size: 2rem;\n        }\n\n        \n    }\n    \n\n    \n    .stats{\n        display: flex;\n        margin-top: 2rem;\n    \n        .stat-box{\n            min-height: 100px;\n            flex: 0.25;\n            //border: 1px solid red;\n    \n            text-align: center;\n    \n            p{\n                padding: 0.2rem;\n                min-height: 2.5rem;\n            }\n\n            img{\n                width: 30px;\n                height: 30px;\n            }\n\n        }\n    }\n}\n\n\n.options{\n    display: flex;\n    justify-content: space-between;\n\n    button{\n        width: 60px;\n        height: 100%;\n        padding-block: 0.2rem;\n        \n        color: grey;\n        background-color:  $bg-color;\n        border: none;\n    }\n\n    button.selected{\n        color: white;\n        font-weight: 600;\n    }\n}\n\n\n.forecast{\n    display: grid;\n    grid-template: auto /  1fr;\n    margin-top: 2rem;\n}\n\n.forecast-choice{\n    display: flex;\n    justify-content: center;\n\n    button {\n        height: 35px;\n        padding: 0.5rem;\n        border: none;\n        color: grey;\n        background-color:  $bg-color;\n        font-weight: 100;\n\n        &.selected{\n            color: white;\n            font-weight: 600;\n        }\n    }\n\n\n}\n\n.hourly-forecast,\n.daily-forecast{\n    display: none;\n    flex-direction: column;\n    gap: 0.2rem;\n\n    &.active{\n        display: flex;\n    }\n\n    >div{\n        width: 100%;\n        height: 50px;\n\n        display: grid;\n        grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;\n        align-items: center;\n        justify-items: center;\n        background-color:  $bg-color;;\n\n        img{\n            width: 35px;\n            height: 35px;\n        }   \n    }    \n}","@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\", sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.5411764706), rgba(0, 0, 0, 0.5411764706)), url(\"../assets/peak-district.jpg\");\n  background-size: cover;\n  background-position: center;\n  padding-top: 1rem;\n  font-size: 0.9rem;\n  color: white;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  min-height: 100%;\n}\n.container > div {\n  width: 80%;\n}\n\n.search-box {\n  display: flex;\n  justify-content: center;\n  margin-block: 1rem;\n}\n.search-box * {\n  border: none;\n  border-bottom: 2px solid white;\n  background: none;\n}\n.search-box input {\n  height: 2rem;\n  color: white;\n  font-size: large;\n}\n.search-box input::placeholder {\n  color: rgba(255, 255, 255, 0.548);\n  font-size: 1rem;\n  padding-left: 0.2rem;\n}\n.search-box button {\n  height: 2rem;\n  width: 2rem;\n  background-image: url(../assets/search-icon.png);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main-info {\n  background-color: rgba(58, 53, 53, 0.5);\n  padding-block: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n}\n.main-info > div {\n  min-width: 100%;\n  text-align: center;\n}\n.main-info .city {\n  font-size: 1.5rem;\n}\n.main-info .date {\n  font-size: 1rem;\n}\n.main-info .status {\n  font-size: 1.5rem;\n  text-transform: capitalize;\n  margin-top: 1rem;\n}\n.main-info .img-and-temp {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.main-info .img-and-temp img {\n  width: 5.5rem;\n}\n.main-info .img-and-temp .temperature {\n  position: relative;\n  font-size: 2rem;\n}\n.main-info .stats {\n  display: flex;\n  margin-top: 2rem;\n}\n.main-info .stats .stat-box {\n  min-height: 100px;\n  flex: 0.25;\n  text-align: center;\n}\n.main-info .stats .stat-box p {\n  padding: 0.2rem;\n  min-height: 2.5rem;\n}\n.main-info .stats .stat-box img {\n  width: 30px;\n  height: 30px;\n}\n\n.options {\n  display: flex;\n  justify-content: space-between;\n}\n.options button {\n  width: 60px;\n  height: 100%;\n  padding-block: 0.2rem;\n  color: grey;\n  background-color: rgba(58, 53, 53, 0.5);\n  border: none;\n}\n.options button.selected {\n  color: white;\n  font-weight: 600;\n}\n\n.forecast {\n  display: grid;\n  grid-template: auto/1fr;\n  margin-top: 2rem;\n}\n\n.forecast-choice {\n  display: flex;\n  justify-content: center;\n}\n.forecast-choice button {\n  height: 35px;\n  padding: 0.5rem;\n  border: none;\n  color: grey;\n  background-color: rgba(58, 53, 53, 0.5);\n  font-weight: 100;\n}\n.forecast-choice button.selected {\n  color: white;\n  font-weight: 600;\n}\n\n.hourly-forecast,\n.daily-forecast {\n  display: none;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.hourly-forecast.active,\n.daily-forecast.active {\n  display: flex;\n}\n.hourly-forecast > div,\n.daily-forecast > div {\n  width: 100%;\n  height: 50px;\n  display: grid;\n  grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;\n  align-items: center;\n  justify-items: center;\n  background-color: rgba(58, 53, 53, 0.5);\n}\n.hourly-forecast > div img,\n.daily-forecast > div img {\n  width: 35px;\n  height: 35px;\n}"],"sourceRoot":""}]);
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
/* harmony export */   getChanceOfRain: () => (/* binding */ getChanceOfRain),
/* harmony export */   getDailyStats: () => (/* binding */ getDailyStats),
/* harmony export */   getForecast: () => (/* binding */ getForecast),
/* harmony export */   getHourlyStats: () => (/* binding */ getHourlyStats),
/* harmony export */   getLatestWeatherObj: () => (/* binding */ getLatestWeatherObj)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/modules/helpers.js");




//const CURRENT_URL = 'http://api.weatherapi.com/v1/current.json?key=5b7362e8838e44bda91125324231710';
const FORECAST_URL = 'http://api.weatherapi.com/v1/forecast.json?key=5b7362e8838e44bda91125324231710&days=6';

// ^^ the forecast url call also includes the current weather
// so no need for two serperate calls

// this gets a weather object which we will use 
// to get all our other bits of info in our 
// functions below

// so we always know current searched location
let lastLocation;

// store the most recent weather call so we don't
// have to make unnecessary calls
let lastForecast;


async function getForecast(location='kilcormac'){
    try{
        let response = await fetch(`${FORECAST_URL}&q=${location}`);
        let forecast = await response.json();

        lastLocation = location;
        lastForecast = forecast;

        return forecast

    }catch(error){
        console.log('err ',error);
    }

}

/* async function getDate(){
    let weatherObj = await getForecast(lastLocation);

    let date = weatherObj.location.localtime;

    return format(new Date(date), "eeee dd MMM yy HH:mm");
} */

// for some reason, chance of rain is stored deep in
// forecast > forecastday > 0 > hour > ...hours > here
// but we need the current hour to match it up 
// so we make use of a helper function which returns 
// the current local hour
function getChanceOfRain(){
    let localHour =  _helpers__WEBPACK_IMPORTED_MODULE_0__.getLocalHour(lastForecast); //returns 11
    let chanceOfRain = lastForecast.forecast.forecastday[0].hour[localHour].chance_of_rain;

    return chanceOfRain;
}

// HOURLY STATS
// this is the trickiest & busiest one, I need to get hourly stats
// and display them in 3hr increments from the current hour...
// this takes in the hour and gets necessary stats as an object

function getHourlyStats(incrementMagnitude=0){

    let hour = Number(_helpers__WEBPACK_IMPORTED_MODULE_0__.getLocalHour(lastForecast));
    hour += (3*incrementMagnitude);
    let day = 0;

    // change to next day when we pass midnight
    // and fix the hour i.e. 26 will be 26-24 = 2am
    if(hour > 23){
        hour -= 24;
        day = 1;
    }

    let hourObj = lastForecast.forecast.forecastday[day].hour[hour];
    // testing

    let hourToDisplay = _helpers__WEBPACK_IMPORTED_MODULE_0__.getHourToDisplay(hourObj);
    let status = hourObj.condition.text;
    let icon = hourObj.condition.icon;
    let tempC = hourObj.temp_c;
    let tempF = hourObj.temp_f;

    return{
        hourToDisplay, 
        status,
        icon, 
        tempC, 
        tempF
    };
 
}

function getDailyStats(index){
    let dailyObj = lastForecast.forecast.forecastday[index];

    // helper to get nice date
    let dayToDisplay;
    if(index === 0){
        dayToDisplay = 'Today';
    }else{
        dayToDisplay = _helpers__WEBPACK_IMPORTED_MODULE_0__.formatDate(dailyObj.date, 'day', true);
    }
    let status = dailyObj.day.condition.text;
    let icon = dailyObj.day.condition.icon;
    let hiTempC = dailyObj.day.maxtemp_c;
    let lowTempC = dailyObj.day.lowtemp_c;
    let hiTempF = dailyObj.day.maxtemp_f;
    let lowTempF = dailyObj.day.lowtemp_f;

    return{
        dayToDisplay,
        status,
        icon,
        hiTempC,
        lowTempC,
        hiTempF,
        lowTempF,
    }
}

function getLatestWeatherObj(){
    return lastForecast;
}



/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   setAllValues: () => (/* binding */ setAllValues),
/* harmony export */   setIsCelsius: () => (/* binding */ setIsCelsius),
/* harmony export */   setIsMph: () => (/* binding */ setIsMph)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/modules/api.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/modules/helpers.js");
/* harmony import */ var _assets_feels_like_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/feels-like.png */ "./src/assets/feels-like.png");
/* harmony import */ var _assets_rain_drops_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/rain-drops.png */ "./src/assets/rain-drops.png");
/* harmony import */ var _assets_humidity_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/humidity.png */ "./src/assets/humidity.png");
/* harmony import */ var _assets_wind_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/wind.png */ "./src/assets/wind.png");
/* harmony import */ var _assets_cloud_icon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/cloud-icon.png */ "./src/assets/cloud-icon.png");








const favicon = document.querySelector('link');

const weatherImg = document.querySelector('.weather-img>img');
const location = document.querySelector('.city');
const date = document.querySelector('.date');
const temp = document.querySelector('.temperature');
const status = document.querySelector('.status');

const container = document.querySelector('.container');

const feelsLikeImgEl = document.querySelector('#feels-like-img');
const chanceOfRainImgEl = document.querySelector('#chance-of-rain-img');
const humidityImgEl = document.querySelector('#humidity-img');
const windImgEl = document.querySelector('#wind-img');
const feelsLike = document.querySelector('#feels-like');
const chanceOfRain = document.querySelector('#rain');
const humidity = document.querySelector('#humidity');
const wind = document.querySelector('#wind');

// hourly elements
const hourDivs = [...document.querySelectorAll('.hourly-forecast > div')];
// daily elements
const dayDivs = [...document.querySelectorAll('.daily-forecast > div')];

// default values are Celsius & Mph
container.classList.add('celsius');
container.classList.add('mph');

favicon.href = _assets_cloud_icon_png__WEBPACK_IMPORTED_MODULE_6__;

// set icons for the stat boxes 
feelsLikeImgEl.src = _assets_feels_like_png__WEBPACK_IMPORTED_MODULE_2__;
chanceOfRainImgEl.src = _assets_rain_drops_png__WEBPACK_IMPORTED_MODULE_3__;
humidityImgEl.src = _assets_humidity_png__WEBPACK_IMPORTED_MODULE_4__;
windImgEl.src = _assets_wind_png__WEBPACK_IMPORTED_MODULE_5__;

let isCelsius = true;
let isMph = true;


// initialize the page icons and default values
async function init(){
    // set favicon and some page icons 
    favicon.href = _assets_cloud_icon_png__WEBPACK_IMPORTED_MODULE_6__;
    feelsLikeImgEl.src = _assets_feels_like_png__WEBPACK_IMPORTED_MODULE_2__;
    chanceOfRainImgEl.src = _assets_rain_drops_png__WEBPACK_IMPORTED_MODULE_3__;
    humidityImgEl.src = _assets_humidity_png__WEBPACK_IMPORTED_MODULE_4__;
    windImgEl.src = _assets_wind_png__WEBPACK_IMPORTED_MODULE_5__;

    // load & set weather info from 'kilcormac'
    // as placeholder info
    let forecast = await _api__WEBPACK_IMPORTED_MODULE_0__.getForecast();
    console.log(forecast);
    setAllValues(forecast);

}

async function setAllValues(forecast){
    // main info
    location.textContent = forecast.location.name;
    weatherImg.src = forecast.current.condition.icon;
    date.textContent = _helpers__WEBPACK_IMPORTED_MODULE_1__.formatDate(forecast.location.localtime);
    temp.textContent = isCelsius ? 
        forecast.current.temp_c+'°C'
        :forecast.current.temp_f+'°F';

    status.textContent = forecast.current.condition.text;

    feelsLike.textContent = isCelsius ? 
        forecast.current.feelslike_c+'°C'
        :forecast.current.feelslike_f+'°F';

    chanceOfRain.textContent = _api__WEBPACK_IMPORTED_MODULE_0__.getChanceOfRain()+'%';
    humidity.textContent = forecast.current.temp_c+'%';
    wind.textContent = isMph ? 
        forecast.current.gust_mph+' mph'
        :forecast.current.gust_kph+' kph';

    // hourly
    setHourlyValues();
    
    // week
    setDailyValues();
}

function setHourlyValues(){
    hourDivs.forEach((div, i) =>{
        let {hourToDisplay, status, icon, tempC, tempF} = _api__WEBPACK_IMPORTED_MODULE_0__.getHourlyStats(i);

        div.children[0].textContent = hourToDisplay;
        div.children[1].src = icon;
        div.children[2].textContent = status;
        div.children[3].textContent = isCelsius ? 
            tempC+'°C' :
            tempF+'°F';
    })
}

function setDailyValues(){
    //create a method in API which returns the necessary data
    // for next 6 days
    // may need a date-to-day helper method
    // maybe use min/max temp
    // otherwise the same
    dayDivs.forEach((div, i)=>{
        let {
            dayToDisplay,
            status,
            icon,
            hiTempC, 
            lowTempC,
            hiTempF,
            lowTempF
            } = _api__WEBPACK_IMPORTED_MODULE_0__.getDailyStats(i);
        
        div.children[0].textContent = dayToDisplay;
        div.children[1].src = icon;
        div.children[2].textContent = status;
        div.children[3].textContent = isCelsius ? 
        hiTempC+'°C' :
        hiTempF+'°F';
    })

}

function setIsCelsius(value){
    isCelsius = value;
}

function setIsMph(value){
    isMph = value;
}




/***/ }),

/***/ "./src/modules/events.js":
/*!*******************************!*\
  !*** ./src/modules/events.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./src/modules/api.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");



const searchBtn = document.querySelector('.search-box > button')
const searchInput = document.querySelector('.search-box > input');
const celsiusBtn = document.getElementById('c-btn');
const fahrenheitBtn = document.getElementById('f-btn');
const mphBtn = document.getElementById('mph-btn');
const kmBtn = document.getElementById('km-btn');
const todayBtn = document.getElementById('today-btn');
const weekBtn = document.getElementById('week-btn');
const hourlyDisplay = document.querySelector('.hourly-forecast');
const dailyDisplay = document.querySelector('.daily-forecast');

async function handleSearchBtnClick(){
    let userInput = searchInput.value;
    if(userInput == '') return;

    console.log('input ', userInput);
    let result = await _api__WEBPACK_IMPORTED_MODULE_0__.getForecast(userInput);
    //need to check result for errors ^
    _dom__WEBPACK_IMPORTED_MODULE_1__.setAllValues(result);

    searchInput.value = '';
}

function changeToCelsius(){
    celsiusBtn.classList.add('selected');
    fahrenheitBtn.classList.remove('selected');
}

function changeToFahrenheit(){
    fahrenheitBtn.classList.add('selected');
    celsiusBtn.classList.remove('selected');
}

function handleCelsiusBtnClick(){
    if(celsiusBtn.classList.contains('selected')) return;
    changeToCelsius();
    // make a new call? No...
    const weatherObj = _api__WEBPACK_IMPORTED_MODULE_0__.getLatestWeatherObj();
    _dom__WEBPACK_IMPORTED_MODULE_1__.setIsCelsius(true);
    _dom__WEBPACK_IMPORTED_MODULE_1__.setAllValues(weatherObj);
}

function handleFahrenheitBtnClick(){
    if(fahrenheitBtn.classList.contains('selected')) return;
    changeToFahrenheit();
    // make a new call? No...
    const weatherObj = _api__WEBPACK_IMPORTED_MODULE_0__.getLatestWeatherObj();
    _dom__WEBPACK_IMPORTED_MODULE_1__.setIsCelsius(false);
    _dom__WEBPACK_IMPORTED_MODULE_1__.setAllValues(weatherObj);
}
function changeToMph(){
    mphBtn.classList.add('selected');
    kmBtn.classList.remove('selected');
}

function changeToKm(){
    kmBtn.classList.add('selected');
    mphBtn.classList.remove('selected');
}

function handleMphBtnClick(){
    if(mphBtn.classList.contains('selected')) return;
    changeToMph();
    // make a new call? No...
    const weatherObj = _api__WEBPACK_IMPORTED_MODULE_0__.getLatestWeatherObj();
    _dom__WEBPACK_IMPORTED_MODULE_1__.setIsMph(true);
    _dom__WEBPACK_IMPORTED_MODULE_1__.setAllValues(weatherObj);
}

function handleKmBtnClick(){
    if(kmBtn.classList.contains('selected')) return;
    changeToKm();
    // make a new call? No...
    const weatherObj = _api__WEBPACK_IMPORTED_MODULE_0__.getLatestWeatherObj();
    _dom__WEBPACK_IMPORTED_MODULE_1__.setIsMph(false);
    _dom__WEBPACK_IMPORTED_MODULE_1__.setAllValues(weatherObj);
}

function changeToHourlyForecast(){
    hourlyDisplay.classList.add('active');
    todayBtn.classList.add('selected');
    dailyDisplay.classList.remove('active');
    weekBtn.classList.remove('selected');

}

function changeToDailyForecast(){
    dailyDisplay.classList.add('active');
    weekBtn.classList.add('selected');
    hourlyDisplay.classList.remove('active');
    todayBtn.classList.remove('selected');

}

searchBtn.addEventListener('click', handleSearchBtnClick);
searchInput.addEventListener('keyup', (e)=>{
    if(e.key == 'Enter') handleSearchBtnClick();
})
celsiusBtn.addEventListener('click', handleCelsiusBtnClick);
fahrenheitBtn.addEventListener('click', handleFahrenheitBtnClick);
mphBtn.addEventListener('click', handleMphBtnClick);
kmBtn.addEventListener('click', handleKmBtnClick);
todayBtn.addEventListener('click', changeToHourlyForecast);
weekBtn.addEventListener('click', changeToDailyForecast);

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDate: () => (/* binding */ formatDate),
/* harmony export */   getHourToDisplay: () => (/* binding */ getHourToDisplay),
/* harmony export */   getLocalHour: () => (/* binding */ getLocalHour)
/* harmony export */ });
function getLocalHour(weatherObj){
    let hour = weatherObj.location.localtime.substring(11, 13);

    return hour;
}

function getHourToDisplay(hourObj){
    let time = hourObj.time;
    let hour = time.substring(time.length-5, time.length);

    return hour;
}

// excellent piece of helper code I borrowed from
// 'https://github.com/bscottnz/weather-app/blob/main/src/js/utils.js'
function formatDate(date, dateFormat = 'full', wantShortDay = false) {
    const dateString = new Date(date).toUTCString();
    let dayOfWeek = dateString.slice(0, 3);
    let dayOfMonth = dateString.slice(5, 7);
    const month = dateString.slice(8, 11);
    const year = dateString.slice(14, 16);
    let suffix;
  
    // change 01 to 1 etc
    if (dayOfMonth < 10) {
      dayOfMonth = dayOfMonth.slice(1);
    }
  
    // generate corect date suffix
    if (dayOfMonth.slice(-1) === '1') {
      suffix = 'st';
    } else if (dayOfMonth.slice(-1) === '2') {
      suffix = 'nd';
    } else if (dayOfMonth.slice(-1) === '3') {
      suffix = 'rd';
    } else {
      suffix = 'th';
    }
  
    // those pesky 11, 12, 13 ths
    if (dayOfMonth > 3 && dayOfMonth < 21) {
      suffix = 'th';
    }
  
    // convert short day name to full day name
    if(!wantShortDay){    
        if (dayOfWeek === 'Mon') {
        dayOfWeek = 'Monday';
        } else if (dayOfWeek === 'Tue') {
        dayOfWeek = 'Tuesday';
        } else if (dayOfWeek === 'Wed') {
        dayOfWeek = 'Wednesday';
        } else if (dayOfWeek === 'Thu') {
        dayOfWeek = 'Thursday';
        } else if (dayOfWeek === 'Fri') {
        dayOfWeek = 'Friday';
        } else if (dayOfWeek === 'Sat') {
        dayOfWeek = 'Saturday';
        } else if (dayOfWeek === 'Sun') {
        dayOfWeek = 'Sunday';
        }
    }
  
    // return only the day of week
    if (dateFormat === 'day') {
      return dayOfWeek;
    }
  
    // return full date string
    return `${dayOfWeek}, ${dayOfMonth}${suffix} ${month} '${year}`;
  }



/***/ }),

/***/ "./src/assets/cloud-icon.png":
/*!***********************************!*\
  !*** ./src/assets/cloud-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f8d4530299776977a662.png";

/***/ }),

/***/ "./src/assets/feels-like.png":
/*!***********************************!*\
  !*** ./src/assets/feels-like.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f837fb188fef74cead78.png";

/***/ }),

/***/ "./src/assets/humidity.png":
/*!*********************************!*\
  !*** ./src/assets/humidity.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8949499f6666d2a23646.png";

/***/ }),

/***/ "./src/assets/peak-district.jpg":
/*!**************************************!*\
  !*** ./src/assets/peak-district.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27186a3b83146668ebae.jpg";

/***/ }),

/***/ "./src/assets/rain-drops.png":
/*!***********************************!*\
  !*** ./src/assets/rain-drops.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "93c3187ec643121662bc.png";

/***/ }),

/***/ "./src/assets/search-icon.png":
/*!************************************!*\
  !*** ./src/assets/search-icon.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "32eeb048363f0a8ffcc8.png";

/***/ }),

/***/ "./src/assets/wind.png":
/*!*****************************!*\
  !*** ./src/assets/wind.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "37a95801fe2dbe2aa594.png";

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
/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/helpers */ "./src/modules/helpers.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");
/* harmony import */ var _modules_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/events */ "./src/modules/events.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");







// set some placeholder values for when the page
// loads for the first time
function domInit(){
    _modules_dom__WEBPACK_IMPORTED_MODULE_2__.init();
}

domInit();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsa0lBQThDO0FBQzFGLDRDQUE0Qyw4SEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixnSUFBZ0k7QUFDaEkseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUdBQXlHLG1DQUFtQztBQUM1STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK0hBQStILFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxRQUFRLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE1B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RUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ087QUFDUDtBQUNYOztBQUVFOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFRO0FBQ1o7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc2VhcmNoLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNTQxMTc2NDcwNiksIHJnYmEoMCwgMCwgMCwgMC41NDExNzY0NzA2KSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuLmNvbnRhaW5lciA+IGRpdiB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ibG9jazogMXJlbTtcbn1cbi5zZWFyY2gtYm94ICoge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgaGVpZ2h0OiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG59XG4uc2VhcmNoLWJveCBidXR0b24ge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1haW4taW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDUzLCA1MywgMC41KTtcbiAgcGFkZGluZy1ibG9jazogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjJyZW07XG59XG4ubWFpbi1pbmZvID4gZGl2IHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1pbmZvIC5jaXR5IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ubWFpbi1pbmZvIC5kYXRlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm1haW4taW5mbyAuc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAgaW1nIHtcbiAgd2lkdGg6IDUuNXJlbTtcbn1cbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCAudGVtcGVyYXR1cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5tYWluLWluZm8gLnN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBmbGV4OiAwLjI1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1pbmZvIC5zdGF0cyAuc3RhdC1ib3ggcCB7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgbWluLWhlaWdodDogMi41cmVtO1xufVxuLm1haW4taW5mbyAuc3RhdHMgLnN0YXQtYm94IGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm9wdGlvbnMgYnV0dG9uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1ibG9jazogMC4ycmVtO1xuICBjb2xvcjogZ3JleTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OCwgNTMsIDUzLCAwLjUpO1xuICBib3JkZXI6IG5vbmU7XG59XG4ub3B0aW9ucyBidXR0b24uc2VsZWN0ZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JlY2FzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8vMWZyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uZm9yZWNhc3QtY2hvaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9yZWNhc3QtY2hvaWNlIGJ1dHRvbiB7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MywgNTMsIDAuNSk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uZm9yZWNhc3QtY2hvaWNlIGJ1dHRvbi5zZWxlY3RlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhvdXJseS1mb3JlY2FzdCxcbi5kYWlseS1mb3JlY2FzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4ycmVtO1xufVxuLmhvdXJseS1mb3JlY2FzdC5hY3RpdmUsXG4uZGFpbHktZm9yZWNhc3QuYWN0aXZlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ob3VybHktZm9yZWNhc3QgPiBkaXYsXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAwLjRmciAwLjhmciAwLjNmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MywgNTMsIDAuNSk7XG59XG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2IGltZyxcbi5kYWlseS1mb3JlY2FzdCA+IGRpdiBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9fbGF5b3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBRUEsb0NBQUE7QUNIRjs7QURNQTtFQUNJLGVBQUE7QUNISjs7QURNQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0lBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0FDTko7QURRSTtFQUNJLFVBQUE7QUNOUjs7QURVQTtFQUlJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDVko7QURZSTtFQUNJLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDVlI7QURhSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNYUjtBRGFRO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNYWjtBRGVJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5REFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ2JSOztBRGtCQTtFQUNJLHVDQWhGTztFQWtGUCxtQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ2pCSjtBRG1CSTtFQUVJLGVBQUE7RUFDQSxrQkFBQTtBQ2xCUjtBRHVCSTtFQUNJLGlCQUFBO0FDckJSO0FEeUJJO0VBQ0ksZUFBQTtBQ3ZCUjtBRDBCSTtFQUNJLGlCQUFBO0VBRUEsMEJBQUE7RUFDQSxnQkFBQTtBQ3pCUjtBRDRCSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDMUJSO0FENEJRO0VBQ0ksYUFBQTtBQzFCWjtBRDZCUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQzNCWjtBRG1DSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ2pDUjtBRG1DUTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtFQUdBLGtCQUFBO0FDbkNaO0FEcUNZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDbkNoQjtBRHNDWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDcENoQjs7QUQ0Q0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUN6Q0o7QUQyQ0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBRUEsV0FBQTtFQUNBLHVDQXhLRztFQXlLSCxZQUFBO0FDMUNSO0FENkNJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDM0NSOztBRGdEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDN0NKOztBRGdEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQzdDSjtBRCtDSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx1Q0FsTUc7RUFtTUgsZ0JBQUE7QUM3Q1I7QUQrQ1E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUM3Q1o7O0FEb0RBOztFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNqREo7QURtREk7O0VBQ0ksYUFBQTtBQ2hEUjtBRG1ESTs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FoT0c7QUMrS1g7QURtRFE7O0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNoRFpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbiRiZy1jb2xvcjogcmdiYSg1OCwgNTMsIDUzLCAwLjUpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDA4YSwgIzAwMDAwMDhhKSwgdXJsKCcuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgLy9iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLy9nYXA6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcblxcbiAgICA+ZGl2e1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgfVxcbn1cXG5cXG4uc2VhcmNoLWJveHtcXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcXG4gICAgLy9wYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ibG9jazogMXJlbTtcXG5cXG4gICAgKntcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgIGlucHV0e1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgICAgIFxcbiAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XFxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDgpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBidXR0b257XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICB3aWR0aDogIDJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3NlYXJjaC1pY29uLnBuZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgfVxcblxcbn1cXG5cXG4ubWFpbi1pbmZve1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuICAgIC8vZmxleC1ncm93OiAwLjQ7XFxuICAgIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC4ycmVtO1xcblxcbiAgICA+ZGl2e1xcbiAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIC8vcGFkZGluZy1ibG9jazogMC4ycmVtO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLmNpdHl7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIC8vZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmRhdGV7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5zdGF0dXN7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIC8vZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgfVxcblxcbiAgICAuaW1nLWFuZC10ZW1we1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICB3aWR0aDogNS41cmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAudGVtcGVyYXR1cmV7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIFxcbiAgICB9XFxuICAgIFxcblxcbiAgICBcXG4gICAgLnN0YXRze1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIFxcbiAgICAgICAgLnN0YXQtYm94e1xcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgICAgIGZsZXg6IDAuMjU7XFxuICAgICAgICAgICAgLy9ib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICAgIFxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxuICAgICAgICAgICAgcHtcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC4ycmVtO1xcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAyLjVyZW07XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuLm9wdGlvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nLWJsb2NrOiAwLjJyZW07XFxuICAgICAgICBcXG4gICAgICAgIGNvbG9yOiBncmV5O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICRiZy1jb2xvcjtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcblxcbiAgICBidXR0b24uc2VsZWN0ZWR7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxufVxcblxcblxcbi5mb3JlY2FzdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvICAxZnI7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1jaG9pY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBidXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgY29sb3I6IGdyZXk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJGJnLWNvbG9yO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG5cXG4gICAgICAgICYuc2VsZWN0ZWR7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuLmhvdXJseS1mb3JlY2FzdCxcXG4uZGFpbHktZm9yZWNhc3R7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4ycmVtO1xcblxcbiAgICAmLmFjdGl2ZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgPmRpdntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yNWZyIDAuNGZyIDAuOGZyIDAuM2ZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkYmctY29sb3I7O1xcblxcbiAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIH0gICBcXG4gICAgfSAgICBcXG59XCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA1MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjU0MTE3NjQ3MDYpLCByZ2JhKDAsIDAsIDAsIDAuNTQxMTc2NDcwNikpLCB1cmwoXFxcIi4uL2Fzc2V0cy9wZWFrLWRpc3RyaWN0LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG4uY29udGFpbmVyID4gZGl2IHtcXG4gIHdpZHRoOiA4MCU7XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ibG9jazogMXJlbTtcXG59XFxuLnNlYXJjaC1ib3ggKiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4uc2VhcmNoLWJveCBpbnB1dCB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDgpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XFxufVxcbi5zZWFyY2gtYm94IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvc2VhcmNoLWljb24ucG5nKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ubWFpbi1pbmZvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDUzLCA1MywgMC41KTtcXG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuLm1haW4taW5mbyA+IGRpdiB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLWluZm8gLmNpdHkge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcbi5tYWluLWluZm8gLmRhdGUge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5zdGF0dXMge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAgaW1nIHtcXG4gIHdpZHRoOiA1LjVyZW07XFxufVxcbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCAudGVtcGVyYXR1cmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuLm1haW4taW5mbyAuc3RhdHMgLnN0YXQtYm94IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgZmxleDogMC4yNTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4taW5mbyAuc3RhdHMgLnN0YXQtYm94IHAge1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbiAgbWluLWhlaWdodDogMi41cmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5zdGF0cyAuc3RhdC1ib3ggaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ub3B0aW9ucyBidXR0b24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWJsb2NrOiAwLjJyZW07XFxuICBjb2xvcjogZ3JleTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDUzLCA1MywgMC41KTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLm9wdGlvbnMgYnV0dG9uLnNlbGVjdGVkIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0by8xZnI7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtY2hvaWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmZvcmVjYXN0LWNob2ljZSBidXR0b24ge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MywgNTMsIDAuNSk7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4uZm9yZWNhc3QtY2hvaWNlIGJ1dHRvbi5zZWxlY3RlZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0LFxcbi5kYWlseS1mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG4uaG91cmx5LWZvcmVjYXN0LmFjdGl2ZSxcXG4uZGFpbHktZm9yZWNhc3QuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5ob3VybHktZm9yZWNhc3QgPiBkaXYsXFxuLmRhaWx5LWZvcmVjYXN0ID4gZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yNWZyIDAuNGZyIDAuOGZyIDAuM2ZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDUzLCA1MywgMC41KTtcXG59XFxuLmhvdXJseS1mb3JlY2FzdCA+IGRpdiBpbWcsXFxuLmRhaWx5LWZvcmVjYXN0ID4gZGl2IGltZyB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuaW1wb3J0ICogYXMgSGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xuXG5cbi8vY29uc3QgQ1VSUkVOVF9VUkwgPSAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTViNzM2MmU4ODM4ZTQ0YmRhOTExMjUzMjQyMzE3MTAnO1xuY29uc3QgRk9SRUNBU1RfVVJMID0gJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NWI3MzYyZTg4MzhlNDRiZGE5MTEyNTMyNDIzMTcxMCZkYXlzPTYnO1xuXG4vLyBeXiB0aGUgZm9yZWNhc3QgdXJsIGNhbGwgYWxzbyBpbmNsdWRlcyB0aGUgY3VycmVudCB3ZWF0aGVyXG4vLyBzbyBubyBuZWVkIGZvciB0d28gc2VycGVyYXRlIGNhbGxzXG5cbi8vIHRoaXMgZ2V0cyBhIHdlYXRoZXIgb2JqZWN0IHdoaWNoIHdlIHdpbGwgdXNlIFxuLy8gdG8gZ2V0IGFsbCBvdXIgb3RoZXIgYml0cyBvZiBpbmZvIGluIG91ciBcbi8vIGZ1bmN0aW9ucyBiZWxvd1xuXG4vLyBzbyB3ZSBhbHdheXMga25vdyBjdXJyZW50IHNlYXJjaGVkIGxvY2F0aW9uXG5sZXQgbGFzdExvY2F0aW9uO1xuXG4vLyBzdG9yZSB0aGUgbW9zdCByZWNlbnQgd2VhdGhlciBjYWxsIHNvIHdlIGRvbid0XG4vLyBoYXZlIHRvIG1ha2UgdW5uZWNlc3NhcnkgY2FsbHNcbmxldCBsYXN0Rm9yZWNhc3Q7XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QobG9jYXRpb249J2tpbGNvcm1hYycpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Rk9SRUNBU1RfVVJMfSZxPSR7bG9jYXRpb259YCk7XG4gICAgICAgIGxldCBmb3JlY2FzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBsYXN0TG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgbGFzdEZvcmVjYXN0ID0gZm9yZWNhc3Q7XG5cbiAgICAgICAgcmV0dXJuIGZvcmVjYXN0XG5cbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmxvZygnZXJyICcsZXJyb3IpO1xuICAgIH1cblxufVxuXG4vKiBhc3luYyBmdW5jdGlvbiBnZXREYXRlKCl7XG4gICAgbGV0IHdlYXRoZXJPYmogPSBhd2FpdCBnZXRGb3JlY2FzdChsYXN0TG9jYXRpb24pO1xuXG4gICAgbGV0IGRhdGUgPSB3ZWF0aGVyT2JqLmxvY2F0aW9uLmxvY2FsdGltZTtcblxuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUoZGF0ZSksIFwiZWVlZSBkZCBNTU0geXkgSEg6bW1cIik7XG59ICovXG5cbi8vIGZvciBzb21lIHJlYXNvbiwgY2hhbmNlIG9mIHJhaW4gaXMgc3RvcmVkIGRlZXAgaW5cbi8vIGZvcmVjYXN0ID4gZm9yZWNhc3RkYXkgPiAwID4gaG91ciA+IC4uLmhvdXJzID4gaGVyZVxuLy8gYnV0IHdlIG5lZWQgdGhlIGN1cnJlbnQgaG91ciB0byBtYXRjaCBpdCB1cCBcbi8vIHNvIHdlIG1ha2UgdXNlIG9mIGEgaGVscGVyIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgXG4vLyB0aGUgY3VycmVudCBsb2NhbCBob3VyXG5mdW5jdGlvbiBnZXRDaGFuY2VPZlJhaW4oKXtcbiAgICBsZXQgbG9jYWxIb3VyID0gIEhlbHBlcnMuZ2V0TG9jYWxIb3VyKGxhc3RGb3JlY2FzdCk7IC8vcmV0dXJucyAxMVxuICAgIGxldCBjaGFuY2VPZlJhaW4gPSBsYXN0Rm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltsb2NhbEhvdXJdLmNoYW5jZV9vZl9yYWluO1xuXG4gICAgcmV0dXJuIGNoYW5jZU9mUmFpbjtcbn1cblxuLy8gSE9VUkxZIFNUQVRTXG4vLyB0aGlzIGlzIHRoZSB0cmlja2llc3QgJiBidXNpZXN0IG9uZSwgSSBuZWVkIHRvIGdldCBob3VybHkgc3RhdHNcbi8vIGFuZCBkaXNwbGF5IHRoZW0gaW4gM2hyIGluY3JlbWVudHMgZnJvbSB0aGUgY3VycmVudCBob3VyLi4uXG4vLyB0aGlzIHRha2VzIGluIHRoZSBob3VyIGFuZCBnZXRzIG5lY2Vzc2FyeSBzdGF0cyBhcyBhbiBvYmplY3RcblxuZnVuY3Rpb24gZ2V0SG91cmx5U3RhdHMoaW5jcmVtZW50TWFnbml0dWRlPTApe1xuXG4gICAgbGV0IGhvdXIgPSBOdW1iZXIoSGVscGVycy5nZXRMb2NhbEhvdXIobGFzdEZvcmVjYXN0KSk7XG4gICAgaG91ciArPSAoMyppbmNyZW1lbnRNYWduaXR1ZGUpO1xuICAgIGxldCBkYXkgPSAwO1xuXG4gICAgLy8gY2hhbmdlIHRvIG5leHQgZGF5IHdoZW4gd2UgcGFzcyBtaWRuaWdodFxuICAgIC8vIGFuZCBmaXggdGhlIGhvdXIgaS5lLiAyNiB3aWxsIGJlIDI2LTI0ID0gMmFtXG4gICAgaWYoaG91ciA+IDIzKXtcbiAgICAgICAgaG91ciAtPSAyNDtcbiAgICAgICAgZGF5ID0gMTtcbiAgICB9XG5cbiAgICBsZXQgaG91ck9iaiA9IGxhc3RGb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmhvdXJbaG91cl07XG4gICAgLy8gdGVzdGluZ1xuXG4gICAgbGV0IGhvdXJUb0Rpc3BsYXkgPSBIZWxwZXJzLmdldEhvdXJUb0Rpc3BsYXkoaG91ck9iaik7XG4gICAgbGV0IHN0YXR1cyA9IGhvdXJPYmouY29uZGl0aW9uLnRleHQ7XG4gICAgbGV0IGljb24gPSBob3VyT2JqLmNvbmRpdGlvbi5pY29uO1xuICAgIGxldCB0ZW1wQyA9IGhvdXJPYmoudGVtcF9jO1xuICAgIGxldCB0ZW1wRiA9IGhvdXJPYmoudGVtcF9mO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBob3VyVG9EaXNwbGF5LCBcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBpY29uLCBcbiAgICAgICAgdGVtcEMsIFxuICAgICAgICB0ZW1wRlxuICAgIH07XG4gXG59XG5cbmZ1bmN0aW9uIGdldERhaWx5U3RhdHMoaW5kZXgpe1xuICAgIGxldCBkYWlseU9iaiA9IGxhc3RGb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVtpbmRleF07XG5cbiAgICAvLyBoZWxwZXIgdG8gZ2V0IG5pY2UgZGF0ZVxuICAgIGxldCBkYXlUb0Rpc3BsYXk7XG4gICAgaWYoaW5kZXggPT09IDApe1xuICAgICAgICBkYXlUb0Rpc3BsYXkgPSAnVG9kYXknO1xuICAgIH1lbHNle1xuICAgICAgICBkYXlUb0Rpc3BsYXkgPSBIZWxwZXJzLmZvcm1hdERhdGUoZGFpbHlPYmouZGF0ZSwgJ2RheScsIHRydWUpO1xuICAgIH1cbiAgICBsZXQgc3RhdHVzID0gZGFpbHlPYmouZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgIGxldCBpY29uID0gZGFpbHlPYmouZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIGxldCBoaVRlbXBDID0gZGFpbHlPYmouZGF5Lm1heHRlbXBfYztcbiAgICBsZXQgbG93VGVtcEMgPSBkYWlseU9iai5kYXkubG93dGVtcF9jO1xuICAgIGxldCBoaVRlbXBGID0gZGFpbHlPYmouZGF5Lm1heHRlbXBfZjtcbiAgICBsZXQgbG93VGVtcEYgPSBkYWlseU9iai5kYXkubG93dGVtcF9mO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBkYXlUb0Rpc3BsYXksXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgaWNvbixcbiAgICAgICAgaGlUZW1wQyxcbiAgICAgICAgbG93VGVtcEMsXG4gICAgICAgIGhpVGVtcEYsXG4gICAgICAgIGxvd1RlbXBGLFxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGF0ZXN0V2VhdGhlck9iaigpe1xuICAgIHJldHVybiBsYXN0Rm9yZWNhc3Q7XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0Rm9yZWNhc3QsXG4gICAgZ2V0Q2hhbmNlT2ZSYWluLCBcbiAgICBnZXRMYXRlc3RXZWF0aGVyT2JqLFxuICAgIGdldEhvdXJseVN0YXRzLFxuICAgIGdldERhaWx5U3RhdHMsXG59OyIsImltcG9ydCAqIGFzIEFQSSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgKiBhcyBIZWxwZXIgZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCBmZWVsc0xpa2VJbWcgZnJvbSAnLi4vYXNzZXRzL2ZlZWxzLWxpa2UucG5nJztcbmltcG9ydCByYWluSW1nIGZyb20gJy4uL2Fzc2V0cy9yYWluLWRyb3BzLnBuZyc7XG5pbXBvcnQgaHVtaWRpdHlJbWcgZnJvbSAnLi4vYXNzZXRzL2h1bWlkaXR5LnBuZyc7XG5pbXBvcnQgd2luZEltZyBmcm9tICcuLi9hc3NldHMvd2luZC5wbmcnO1xuaW1wb3J0IGNsb3VkSWNvbiBmcm9tICcuLi9hc3NldHMvY2xvdWQtaWNvbi5wbmcnO1xuXG5jb25zdCBmYXZpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGluaycpO1xuXG5jb25zdCB3ZWF0aGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW1nPmltZycpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XG5jb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuY29uc3QgZmVlbHNMaWtlSW1nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZS1pbWcnKTtcbmNvbnN0IGNoYW5jZU9mUmFpbkltZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW5jZS1vZi1yYWluLWltZycpO1xuY29uc3QgaHVtaWRpdHlJbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eS1pbWcnKTtcbmNvbnN0IHdpbmRJbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLWltZycpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UnKTtcbmNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYWluJyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kJyk7XG5cbi8vIGhvdXJseSBlbGVtZW50c1xuY29uc3QgaG91ckRpdnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJseS1mb3JlY2FzdCA+IGRpdicpXTtcbi8vIGRhaWx5IGVsZW1lbnRzXG5jb25zdCBkYXlEaXZzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1mb3JlY2FzdCA+IGRpdicpXTtcblxuLy8gZGVmYXVsdCB2YWx1ZXMgYXJlIENlbHNpdXMgJiBNcGhcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjZWxzaXVzJyk7XG5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbXBoJyk7XG5cbmZhdmljb24uaHJlZiA9IGNsb3VkSWNvbjtcblxuLy8gc2V0IGljb25zIGZvciB0aGUgc3RhdCBib3hlcyBcbmZlZWxzTGlrZUltZ0VsLnNyYyA9IGZlZWxzTGlrZUltZztcbmNoYW5jZU9mUmFpbkltZ0VsLnNyYyA9IHJhaW5JbWc7XG5odW1pZGl0eUltZ0VsLnNyYyA9IGh1bWlkaXR5SW1nO1xud2luZEltZ0VsLnNyYyA9IHdpbmRJbWc7XG5cbmxldCBpc0NlbHNpdXMgPSB0cnVlO1xubGV0IGlzTXBoID0gdHJ1ZTtcblxuXG4vLyBpbml0aWFsaXplIHRoZSBwYWdlIGljb25zIGFuZCBkZWZhdWx0IHZhbHVlc1xuYXN5bmMgZnVuY3Rpb24gaW5pdCgpe1xuICAgIC8vIHNldCBmYXZpY29uIGFuZCBzb21lIHBhZ2UgaWNvbnMgXG4gICAgZmF2aWNvbi5ocmVmID0gY2xvdWRJY29uO1xuICAgIGZlZWxzTGlrZUltZ0VsLnNyYyA9IGZlZWxzTGlrZUltZztcbiAgICBjaGFuY2VPZlJhaW5JbWdFbC5zcmMgPSByYWluSW1nO1xuICAgIGh1bWlkaXR5SW1nRWwuc3JjID0gaHVtaWRpdHlJbWc7XG4gICAgd2luZEltZ0VsLnNyYyA9IHdpbmRJbWc7XG5cbiAgICAvLyBsb2FkICYgc2V0IHdlYXRoZXIgaW5mbyBmcm9tICdraWxjb3JtYWMnXG4gICAgLy8gYXMgcGxhY2Vob2xkZXIgaW5mb1xuICAgIGxldCBmb3JlY2FzdCA9IGF3YWl0IEFQSS5nZXRGb3JlY2FzdCgpO1xuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0KTtcbiAgICBzZXRBbGxWYWx1ZXMoZm9yZWNhc3QpO1xuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEFsbFZhbHVlcyhmb3JlY2FzdCl7XG4gICAgLy8gbWFpbiBpbmZvXG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBmb3JlY2FzdC5sb2NhdGlvbi5uYW1lO1xuICAgIHdlYXRoZXJJbWcuc3JjID0gZm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gSGVscGVyLmZvcm1hdERhdGUoZm9yZWNhc3QubG9jYXRpb24ubG9jYWx0aW1lKTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gaXNDZWxzaXVzID8gXG4gICAgICAgIGZvcmVjYXN0LmN1cnJlbnQudGVtcF9jKyfCsEMnXG4gICAgICAgIDpmb3JlY2FzdC5jdXJyZW50LnRlbXBfZisnwrBGJztcblxuICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG5cbiAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSBpc0NlbHNpdXMgPyBcbiAgICAgICAgZm9yZWNhc3QuY3VycmVudC5mZWVsc2xpa2VfYysnwrBDJ1xuICAgICAgICA6Zm9yZWNhc3QuY3VycmVudC5mZWVsc2xpa2VfZisnwrBGJztcblxuICAgIGNoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IEFQSS5nZXRDaGFuY2VPZlJhaW4oKSsnJSc7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5jdXJyZW50LnRlbXBfYysnJSc7XG4gICAgd2luZC50ZXh0Q29udGVudCA9IGlzTXBoID8gXG4gICAgICAgIGZvcmVjYXN0LmN1cnJlbnQuZ3VzdF9tcGgrJyBtcGgnXG4gICAgICAgIDpmb3JlY2FzdC5jdXJyZW50Lmd1c3Rfa3BoKycga3BoJztcblxuICAgIC8vIGhvdXJseVxuICAgIHNldEhvdXJseVZhbHVlcygpO1xuICAgIFxuICAgIC8vIHdlZWtcbiAgICBzZXREYWlseVZhbHVlcygpO1xufVxuXG5mdW5jdGlvbiBzZXRIb3VybHlWYWx1ZXMoKXtcbiAgICBob3VyRGl2cy5mb3JFYWNoKChkaXYsIGkpID0+e1xuICAgICAgICBsZXQge2hvdXJUb0Rpc3BsYXksIHN0YXR1cywgaWNvbiwgdGVtcEMsIHRlbXBGfSA9IEFQSS5nZXRIb3VybHlTdGF0cyhpKTtcblxuICAgICAgICBkaXYuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBob3VyVG9EaXNwbGF5O1xuICAgICAgICBkaXYuY2hpbGRyZW5bMV0uc3JjID0gaWNvbjtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gc3RhdHVzO1xuICAgICAgICBkaXYuY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSBpc0NlbHNpdXMgPyBcbiAgICAgICAgICAgIHRlbXBDKyfCsEMnIDpcbiAgICAgICAgICAgIHRlbXBGKyfCsEYnO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNldERhaWx5VmFsdWVzKCl7XG4gICAgLy9jcmVhdGUgYSBtZXRob2QgaW4gQVBJIHdoaWNoIHJldHVybnMgdGhlIG5lY2Vzc2FyeSBkYXRhXG4gICAgLy8gZm9yIG5leHQgNiBkYXlzXG4gICAgLy8gbWF5IG5lZWQgYSBkYXRlLXRvLWRheSBoZWxwZXIgbWV0aG9kXG4gICAgLy8gbWF5YmUgdXNlIG1pbi9tYXggdGVtcFxuICAgIC8vIG90aGVyd2lzZSB0aGUgc2FtZVxuICAgIGRheURpdnMuZm9yRWFjaCgoZGl2LCBpKT0+e1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZGF5VG9EaXNwbGF5LFxuICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGhpVGVtcEMsIFxuICAgICAgICAgICAgbG93VGVtcEMsXG4gICAgICAgICAgICBoaVRlbXBGLFxuICAgICAgICAgICAgbG93VGVtcEZcbiAgICAgICAgICAgIH0gPSBBUEkuZ2V0RGFpbHlTdGF0cyhpKTtcbiAgICAgICAgXG4gICAgICAgIGRpdi5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGRheVRvRGlzcGxheTtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzFdLnNyYyA9IGljb247XG4gICAgICAgIGRpdi5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IHN0YXR1cztcbiAgICAgICAgZGl2LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gaXNDZWxzaXVzID8gXG4gICAgICAgIGhpVGVtcEMrJ8KwQycgOlxuICAgICAgICBoaVRlbXBGKyfCsEYnO1xuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gc2V0SXNDZWxzaXVzKHZhbHVlKXtcbiAgICBpc0NlbHNpdXMgPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2V0SXNNcGgodmFsdWUpe1xuICAgIGlzTXBoID0gdmFsdWU7XG59XG5cblxuZXhwb3J0IHtcbiAgICBzZXRBbGxWYWx1ZXMsIFxuICAgIGluaXQsIFxuICAgIHNldElzQ2Vsc2l1cywgXG4gICAgc2V0SXNNcGgsXG4gICAgfTsiLCJpbXBvcnQgKiBhcyBBUEkgZnJvbSAnLi9hcGknO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vZG9tJztcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ib3ggPiBidXR0b24nKVxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJveCA+IGlucHV0Jyk7XG5jb25zdCBjZWxzaXVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2MtYnRuJyk7XG5jb25zdCBmYWhyZW5oZWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2YtYnRuJyk7XG5jb25zdCBtcGhCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXBoLWJ0bicpO1xuY29uc3Qga21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna20tYnRuJyk7XG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1idG4nKTtcbmNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vlay1idG4nKTtcbmNvbnN0IGhvdXJseURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWZvcmVjYXN0Jyk7XG5jb25zdCBkYWlseURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktZm9yZWNhc3QnKTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VhcmNoQnRuQ2xpY2soKXtcbiAgICBsZXQgdXNlcklucHV0ID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgaWYodXNlcklucHV0ID09ICcnKSByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZygnaW5wdXQgJywgdXNlcklucHV0KTtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgQVBJLmdldEZvcmVjYXN0KHVzZXJJbnB1dCk7XG4gICAgLy9uZWVkIHRvIGNoZWNrIHJlc3VsdCBmb3IgZXJyb3JzIF5cbiAgICBET00uc2V0QWxsVmFsdWVzKHJlc3VsdCk7XG5cbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0NlbHNpdXMoKXtcbiAgICBjZWxzaXVzQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgZmFocmVuaGVpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0ZhaHJlbmhlaXQoKXtcbiAgICBmYWhyZW5oZWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgY2Vsc2l1c0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDZWxzaXVzQnRuQ2xpY2soKXtcbiAgICBpZihjZWxzaXVzQnRuLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuICAgIGNoYW5nZVRvQ2Vsc2l1cygpO1xuICAgIC8vIG1ha2UgYSBuZXcgY2FsbD8gTm8uLi5cbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gQVBJLmdldExhdGVzdFdlYXRoZXJPYmooKTtcbiAgICBET00uc2V0SXNDZWxzaXVzKHRydWUpO1xuICAgIERPTS5zZXRBbGxWYWx1ZXMod2VhdGhlck9iaik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZhaHJlbmhlaXRCdG5DbGljaygpe1xuICAgIGlmKGZhaHJlbmhlaXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSByZXR1cm47XG4gICAgY2hhbmdlVG9GYWhyZW5oZWl0KCk7XG4gICAgLy8gbWFrZSBhIG5ldyBjYWxsPyBOby4uLlxuICAgIGNvbnN0IHdlYXRoZXJPYmogPSBBUEkuZ2V0TGF0ZXN0V2VhdGhlck9iaigpO1xuICAgIERPTS5zZXRJc0NlbHNpdXMoZmFsc2UpO1xuICAgIERPTS5zZXRBbGxWYWx1ZXMod2VhdGhlck9iaik7XG59XG5mdW5jdGlvbiBjaGFuZ2VUb01waCgpe1xuICAgIG1waEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGttQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRvS20oKXtcbiAgICBrbUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIG1waEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNcGhCdG5DbGljaygpe1xuICAgIGlmKG1waEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHJldHVybjtcbiAgICBjaGFuZ2VUb01waCgpO1xuICAgIC8vIG1ha2UgYSBuZXcgY2FsbD8gTm8uLi5cbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gQVBJLmdldExhdGVzdFdlYXRoZXJPYmooKTtcbiAgICBET00uc2V0SXNNcGgodHJ1ZSk7XG4gICAgRE9NLnNldEFsbFZhbHVlcyh3ZWF0aGVyT2JqKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlS21CdG5DbGljaygpe1xuICAgIGlmKGttQnRuLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuICAgIGNoYW5nZVRvS20oKTtcbiAgICAvLyBtYWtlIGEgbmV3IGNhbGw/IE5vLi4uXG4gICAgY29uc3Qgd2VhdGhlck9iaiA9IEFQSS5nZXRMYXRlc3RXZWF0aGVyT2JqKCk7XG4gICAgRE9NLnNldElzTXBoKGZhbHNlKTtcbiAgICBET00uc2V0QWxsVmFsdWVzKHdlYXRoZXJPYmopO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0hvdXJseUZvcmVjYXN0KCl7XG4gICAgaG91cmx5RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB0b2RheUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGRhaWx5RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB3ZWVrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9EYWlseUZvcmVjYXN0KCl7XG4gICAgZGFpbHlEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHdlZWtCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBob3VybHlEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHRvZGF5QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cbn1cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2VhcmNoQnRuQ2xpY2spO1xuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSk9PntcbiAgICBpZihlLmtleSA9PSAnRW50ZXInKSBoYW5kbGVTZWFyY2hCdG5DbGljaygpO1xufSlcbmNlbHNpdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxzaXVzQnRuQ2xpY2spO1xuZmFocmVuaGVpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUZhaHJlbmhlaXRCdG5DbGljayk7XG5tcGhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNcGhCdG5DbGljayk7XG5rbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUttQnRuQ2xpY2spO1xudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUb0hvdXJseUZvcmVjYXN0KTtcbndlZWtCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUb0RhaWx5Rm9yZWNhc3QpOyIsImZ1bmN0aW9uIGdldExvY2FsSG91cih3ZWF0aGVyT2JqKXtcbiAgICBsZXQgaG91ciA9IHdlYXRoZXJPYmoubG9jYXRpb24ubG9jYWx0aW1lLnN1YnN0cmluZygxMSwgMTMpO1xuXG4gICAgcmV0dXJuIGhvdXI7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJUb0Rpc3BsYXkoaG91ck9iail7XG4gICAgbGV0IHRpbWUgPSBob3VyT2JqLnRpbWU7XG4gICAgbGV0IGhvdXIgPSB0aW1lLnN1YnN0cmluZyh0aW1lLmxlbmd0aC01LCB0aW1lLmxlbmd0aCk7XG5cbiAgICByZXR1cm4gaG91cjtcbn1cblxuLy8gZXhjZWxsZW50IHBpZWNlIG9mIGhlbHBlciBjb2RlIEkgYm9ycm93ZWQgZnJvbVxuLy8gJ2h0dHBzOi8vZ2l0aHViLmNvbS9ic2NvdHRuei93ZWF0aGVyLWFwcC9ibG9iL21haW4vc3JjL2pzL3V0aWxzLmpzJ1xuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlLCBkYXRlRm9ybWF0ID0gJ2Z1bGwnLCB3YW50U2hvcnREYXkgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBuZXcgRGF0ZShkYXRlKS50b1VUQ1N0cmluZygpO1xuICAgIGxldCBkYXlPZldlZWsgPSBkYXRlU3RyaW5nLnNsaWNlKDAsIDMpO1xuICAgIGxldCBkYXlPZk1vbnRoID0gZGF0ZVN0cmluZy5zbGljZSg1LCA3KTtcbiAgICBjb25zdCBtb250aCA9IGRhdGVTdHJpbmcuc2xpY2UoOCwgMTEpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlU3RyaW5nLnNsaWNlKDE0LCAxNik7XG4gICAgbGV0IHN1ZmZpeDtcbiAgXG4gICAgLy8gY2hhbmdlIDAxIHRvIDEgZXRjXG4gICAgaWYgKGRheU9mTW9udGggPCAxMCkge1xuICAgICAgZGF5T2ZNb250aCA9IGRheU9mTW9udGguc2xpY2UoMSk7XG4gICAgfVxuICBcbiAgICAvLyBnZW5lcmF0ZSBjb3JlY3QgZGF0ZSBzdWZmaXhcbiAgICBpZiAoZGF5T2ZNb250aC5zbGljZSgtMSkgPT09ICcxJykge1xuICAgICAgc3VmZml4ID0gJ3N0JztcbiAgICB9IGVsc2UgaWYgKGRheU9mTW9udGguc2xpY2UoLTEpID09PSAnMicpIHtcbiAgICAgIHN1ZmZpeCA9ICduZCc7XG4gICAgfSBlbHNlIGlmIChkYXlPZk1vbnRoLnNsaWNlKC0xKSA9PT0gJzMnKSB7XG4gICAgICBzdWZmaXggPSAncmQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWZmaXggPSAndGgnO1xuICAgIH1cbiAgXG4gICAgLy8gdGhvc2UgcGVza3kgMTEsIDEyLCAxMyB0aHNcbiAgICBpZiAoZGF5T2ZNb250aCA+IDMgJiYgZGF5T2ZNb250aCA8IDIxKSB7XG4gICAgICBzdWZmaXggPSAndGgnO1xuICAgIH1cbiAgXG4gICAgLy8gY29udmVydCBzaG9ydCBkYXkgbmFtZSB0byBmdWxsIGRheSBuYW1lXG4gICAgaWYoIXdhbnRTaG9ydERheSl7ICAgIFxuICAgICAgICBpZiAoZGF5T2ZXZWVrID09PSAnTW9uJykge1xuICAgICAgICBkYXlPZldlZWsgPSAnTW9uZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdUdWUnKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdUdWVzZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdXZWQnKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdXZWRuZXNkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1RodScpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1RodXJzZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdGcmknKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdGcmlkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1NhdCcpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1NhdHVyZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdTdW4nKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdTdW5kYXknO1xuICAgICAgICB9XG4gICAgfVxuICBcbiAgICAvLyByZXR1cm4gb25seSB0aGUgZGF5IG9mIHdlZWtcbiAgICBpZiAoZGF0ZUZvcm1hdCA9PT0gJ2RheScpIHtcbiAgICAgIHJldHVybiBkYXlPZldlZWs7XG4gICAgfVxuICBcbiAgICAvLyByZXR1cm4gZnVsbCBkYXRlIHN0cmluZ1xuICAgIHJldHVybiBgJHtkYXlPZldlZWt9LCAke2RheU9mTW9udGh9JHtzdWZmaXh9ICR7bW9udGh9ICcke3llYXJ9YDtcbiAgfVxuXG5leHBvcnQge1xuICAgIGdldExvY2FsSG91cixcbiAgICBnZXRIb3VyVG9EaXNwbGF5LFxuICAgIGZvcm1hdERhdGUgICAgXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgQVBJIGZyb20gJy4vbW9kdWxlcy9hcGknO1xuaW1wb3J0ICogYXMgSGVscGVyIGZyb20gJy4vbW9kdWxlcy9oZWxwZXJzJztcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL21vZHVsZXMvZG9tJztcbmltcG9ydCAnLi9tb2R1bGVzL2V2ZW50cyc7XG5cbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuLy8gc2V0IHNvbWUgcGxhY2Vob2xkZXIgdmFsdWVzIGZvciB3aGVuIHRoZSBwYWdlXG4vLyBsb2FkcyBmb3IgdGhlIGZpcnN0IHRpbWVcbmZ1bmN0aW9uIGRvbUluaXQoKXtcbiAgICBET00uaW5pdCgpO1xufVxuXG5kb21Jbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=