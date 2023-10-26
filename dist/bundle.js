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
  height: 100%;
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
  height: 100vh;
  overflow-y: scroll;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/_layout.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AAIA;;;EAGE,SAAA;EACA,UAAA;EACA,sBAAA;EAEA,oCAAA;ACHF;;ADMA;EACI,eAAA;ACHJ;;ADMA;EACI,YAAA;EACA,YAAA;EACA,wIAAA;EACA,sBAAA;EACA,2BAAA;EACA,iBAAA;EAEA,iBAAA;EACA,YAAA;ACJJ;;ADOA;EAEI,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,WAAA;EACA,aAAA;EACA,kBAAA;ACNJ;ADQI;EACI,UAAA;ACNR;;ADUA;EAII,aAAA;EACA,uBAAA;EACA,kBAAA;ACVJ;ADYI;EACI,YAAA;EACA,8BAAA;EACA,gBAAA;ACVR;ADaI;EACI,YAAA;EACA,YAAA;EACA,gBAAA;ACXR;ADaQ;EACI,iCAAA;EACA,eAAA;EACA,oBAAA;ACXZ;ADeI;EACI,YAAA;EACA,WAAA;EACA,yDAAA;EACA,2BAAA;EACA,4BAAA;EACA,sBAAA;ACbR;;ADkBA;EACI,uCAjFO;EAmFP,mBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;ACjBJ;ADmBI;EAEI,eAAA;EACA,kBAAA;AClBR;ADuBI;EACI,iBAAA;ACrBR;ADyBI;EACI,eAAA;ACvBR;AD0BI;EACI,iBAAA;EAEA,0BAAA;EACA,gBAAA;ACzBR;AD4BI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;AC1BR;AD4BQ;EACI,aAAA;AC1BZ;AD6BQ;EACI,kBAAA;EACA,eAAA;AC3BZ;ADmCI;EACI,aAAA;EACA,gBAAA;ACjCR;ADmCQ;EACI,iBAAA;EACA,UAAA;EAGA,kBAAA;ACnCZ;ADqCY;EACI,eAAA;EACA,kBAAA;ACnChB;ADsCY;EACI,WAAA;EACA,YAAA;ACpChB;;AD4CA;EACI,aAAA;EACA,8BAAA;ACzCJ;AD2CI;EACI,WAAA;EACA,YAAA;EACA,qBAAA;EAEA,WAAA;EACA,uCAzKG;EA0KH,YAAA;AC1CR;AD6CI;EACI,YAAA;EACA,gBAAA;AC3CR;;ADgDA;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;AC7CJ;;ADgDA;EACI,aAAA;EACA,uBAAA;AC7CJ;AD+CI;EACI,YAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,uCAnMG;EAoMH,gBAAA;AC7CR;AD+CQ;EACI,YAAA;EACA,gBAAA;AC7CZ;;ADoDA;;EAEI,aAAA;EACA,sBAAA;EACA,WAAA;ACjDJ;ADmDI;;EACI,aAAA;AChDR;ADmDI;;EACI,WAAA;EACA,YAAA;EAEA,aAAA;EACA,+CAAA;EACA,mBAAA;EACA,qBAAA;EACA,uCAjOG;ACgLX;ADmDQ;;EACI,WAAA;EACA,YAAA;AChDZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap');\n\n$bg-color: rgba(58, 53, 53, 0.5);\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n\n  font-family: 'Open Sans', sans-serif;\n}\n\nbutton{\n    cursor: pointer;\n}\n\nbody{\n    height: 100%;\n    width: 100vw;\n    background: linear-gradient(to right, #0000008a, #0000008a), url('../assets/peak-district.jpg');\n    background-size: cover;\n    background-position: center;\n    padding-top: 1rem;\n\n    font-size: 0.9rem;\n    color: white;\n}\n\n.container{\n    //backdrop-filter: blur(2px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    //gap: 1rem;\n    width: 100%;\n    height: 100vh;\n    overflow-y: scroll;\n\n    >div{\n        width: 80%;\n    }\n}\n\n.search-box{\n    //background-color: rgba(0, 128, 0, 0.5);\n    //padding: 1rem 1.5rem;\n\n    display: flex;\n    justify-content: center;\n    margin-block: 1rem;\n\n    *{\n        border: none;\n        border-bottom: 2px solid white;\n        background: none;\n    }\n    \n    input{\n        height: 2rem;\n        color: white;\n        font-size: large;\n        \n        &::placeholder{\n            color: rgba(255, 255, 255, 0.548);\n            font-size: 1rem;\n            padding-left: 0.2rem;\n        }\n    }\n\n    button{\n        height: 2rem;\n        width:  2rem;\n        background-image: url(../assets/search-icon.png);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n}\n\n.main-info{\n    background-color: $bg-color;\n    //flex-grow: 0.4;\n    padding-block: 1rem;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.2rem;\n\n    >div{\n        //border: 1px solid white;\n        min-width: 100%;\n        text-align: center;\n        //padding-block: 0.2rem;\n        \n    }\n\n    .city{\n        font-size: 1.5rem;\n        //font-weight: 600;\n    }\n    \n    .date{\n        font-size: 1rem;\n    }\n    \n    .status{\n        font-size: 1.5rem;\n        //font-weight: 600;\n        text-transform: capitalize;\n        margin-top: 1rem;\n    }\n\n    .img-and-temp{\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n\n        img{\n            width: 5.5rem;\n        }\n        \n        .temperature{\n            position: relative;\n            font-size: 2rem;\n        }\n\n        \n    }\n    \n\n    \n    .stats{\n        display: flex;\n        margin-top: 2rem;\n    \n        .stat-box{\n            min-height: 100px;\n            flex: 0.25;\n            //border: 1px solid red;\n    \n            text-align: center;\n    \n            p{\n                padding: 0.2rem;\n                min-height: 2.5rem;\n            }\n\n            img{\n                width: 30px;\n                height: 30px;\n            }\n\n        }\n    }\n}\n\n\n.options{\n    display: flex;\n    justify-content: space-between;\n\n    button{\n        width: 60px;\n        height: 100%;\n        padding-block: 0.2rem;\n        \n        color: grey;\n        background-color:  $bg-color;\n        border: none;\n    }\n\n    button.selected{\n        color: white;\n        font-weight: 600;\n    }\n}\n\n\n.forecast{\n    display: grid;\n    grid-template: auto /  1fr;\n    margin-top: 2rem;\n}\n\n.forecast-choice{\n    display: flex;\n    justify-content: center;\n\n    button {\n        height: 35px;\n        padding: 0.5rem;\n        border: none;\n        color: grey;\n        background-color:  $bg-color;\n        font-weight: 100;\n\n        &.selected{\n            color: white;\n            font-weight: 600;\n        }\n    }\n\n\n}\n\n.hourly-forecast,\n.daily-forecast{\n    display: none;\n    flex-direction: column;\n    gap: 0.2rem;\n\n    &.active{\n        display: flex;\n    }\n\n    >div{\n        width: 100%;\n        height: 50px;\n\n        display: grid;\n        grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;\n        align-items: center;\n        justify-items: center;\n        background-color:  $bg-color;;\n\n        img{\n            width: 35px;\n            height: 35px;\n        }   \n    }    \n}","@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Open Sans\", sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  height: 100%;\n  width: 100vw;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.5411764706), rgba(0, 0, 0, 0.5411764706)), url(\"../assets/peak-district.jpg\");\n  background-size: cover;\n  background-position: center;\n  padding-top: 1rem;\n  font-size: 0.9rem;\n  color: white;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100vh;\n  overflow-y: scroll;\n}\n.container > div {\n  width: 80%;\n}\n\n.search-box {\n  display: flex;\n  justify-content: center;\n  margin-block: 1rem;\n}\n.search-box * {\n  border: none;\n  border-bottom: 2px solid white;\n  background: none;\n}\n.search-box input {\n  height: 2rem;\n  color: white;\n  font-size: large;\n}\n.search-box input::placeholder {\n  color: rgba(255, 255, 255, 0.548);\n  font-size: 1rem;\n  padding-left: 0.2rem;\n}\n.search-box button {\n  height: 2rem;\n  width: 2rem;\n  background-image: url(../assets/search-icon.png);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.main-info {\n  background-color: rgba(58, 53, 53, 0.5);\n  padding-block: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n}\n.main-info > div {\n  min-width: 100%;\n  text-align: center;\n}\n.main-info .city {\n  font-size: 1.5rem;\n}\n.main-info .date {\n  font-size: 1rem;\n}\n.main-info .status {\n  font-size: 1.5rem;\n  text-transform: capitalize;\n  margin-top: 1rem;\n}\n.main-info .img-and-temp {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.main-info .img-and-temp img {\n  width: 5.5rem;\n}\n.main-info .img-and-temp .temperature {\n  position: relative;\n  font-size: 2rem;\n}\n.main-info .stats {\n  display: flex;\n  margin-top: 2rem;\n}\n.main-info .stats .stat-box {\n  min-height: 100px;\n  flex: 0.25;\n  text-align: center;\n}\n.main-info .stats .stat-box p {\n  padding: 0.2rem;\n  min-height: 2.5rem;\n}\n.main-info .stats .stat-box img {\n  width: 30px;\n  height: 30px;\n}\n\n.options {\n  display: flex;\n  justify-content: space-between;\n}\n.options button {\n  width: 60px;\n  height: 100%;\n  padding-block: 0.2rem;\n  color: grey;\n  background-color: rgba(58, 53, 53, 0.5);\n  border: none;\n}\n.options button.selected {\n  color: white;\n  font-weight: 600;\n}\n\n.forecast {\n  display: grid;\n  grid-template: auto/1fr;\n  margin-top: 2rem;\n}\n\n.forecast-choice {\n  display: flex;\n  justify-content: center;\n}\n.forecast-choice button {\n  height: 35px;\n  padding: 0.5rem;\n  border: none;\n  color: grey;\n  background-color: rgba(58, 53, 53, 0.5);\n  font-weight: 100;\n}\n.forecast-choice button.selected {\n  color: white;\n  font-weight: 600;\n}\n\n.hourly-forecast,\n.daily-forecast {\n  display: none;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.hourly-forecast.active,\n.daily-forecast.active {\n  display: flex;\n}\n.hourly-forecast > div,\n.daily-forecast > div {\n  width: 100%;\n  height: 50px;\n  display: grid;\n  grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;\n  align-items: center;\n  justify-items: center;\n  background-color: rgba(58, 53, 53, 0.5);\n}\n.hourly-forecast > div img,\n.daily-forecast > div img {\n  width: 35px;\n  height: 35px;\n}"],"sourceRoot":""}]);
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
const FORECAST_URL = 'https://api.weatherapi.com/v1/forecast.json?key=5b7362e8838e44bda91125324231710&days=6';

// ^^ the forecast url call also includes the current weather
// so no need for two serperate calls

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

        console.log('forecast called ', forecast);

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
    let localHour =  Number(_helpers__WEBPACK_IMPORTED_MODULE_0__.getLocalHour(lastForecast)); 
    console.log('local hour ', localHour.length, localHour);
    console.log('local hour city', lastForecast);
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

    // round-off temps
    tempC = Math.round(tempC);
    tempF = Math.round(tempF);

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
        Math.round(forecast.current.temp_c)+'°C'
        :Math.round(forecast.current.temp_f)+'°F';

    status.textContent = forecast.current.condition.text;

    feelsLike.textContent = isCelsius ? 
        Math.round(forecast.current.feelslike_c)+'°C'
        :Math.round(forecast.current.feelslike_f)+'°F';

    chanceOfRain.textContent = _api__WEBPACK_IMPORTED_MODULE_0__.getChanceOfRain()+'%';
    humidity.textContent = forecast.current.temp_c+'%';
    wind.textContent = isMph ? 
        forecast.current.gust_mph+' mph'
        :forecast.current.gust_kph+' km/h';

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
  // how I cut out the hour is causing problems
  // when it's a single-digit hour
  // so i default it to a date format
  // and cut the hour from that

  let date = new Date(weatherObj.location.localtime);
  let hour = String(date).substring(16, 18);

  return hour;
}

function getHourToDisplay(hourObj){
    let time = hourObj.time;
    let hour = time.substring(time.length-5, time.length);

    return hour;
}

// helpful for slicing...
//012345678901234567890123
//Thu Oct 26 2023 13:16:00 GMT+0100

// excellent piece of helper code I borrowed & modified from
// 'https://github.com/bscottnz/weather-app/blob/main/src/js/utils.js'
function formatDate(date, dateFormat = 'full', wantShortDay = false) {
    const dateString = new Date(date).toString();
    let dayOfWeek = dateString.slice(0, 3);
    let dayOfMonth = dateString.slice(8, 10);
    const month = dateString.slice(4, 8);
    const year = dateString.slice(13, 15);
    const time = dateString.slice(16,21);
    const hour = dateString.slice(16,18);
    let daySuffix;
    let timeSuffix;

    //console.log('date string ', dateString);
  
    // change 01 to 1 etc
    if (dayOfMonth < 10) {
      dayOfMonth = dayOfMonth.slice(1);
    }
  
    // generate corect date daySuffix
    if (dayOfMonth.slice(-1) === '1') {
      daySuffix = 'st';
    } else if (dayOfMonth.slice(-1) === '2') {
      daySuffix = 'nd';
    } else if (dayOfMonth.slice(-1) === '3') {
      daySuffix = 'rd';
    } else {
      daySuffix = 'th';
    }

    // generate corrct time suffix
    if(hour <= 12){
      timeSuffix = 'am';
    }else{
      timeSuffix = 'pm';
    }
  
    // those pesky 11, 12, 13 ths
    if (dayOfMonth > 3 && dayOfMonth < 21) {
      daySuffix = 'th';
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
    return `${time}${timeSuffix}, ${dayOfWeek}, ${dayOfMonth}${daySuffix} ${month} '${year}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsa0lBQThDO0FBQzFGLDRDQUE0Qyw4SEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixnSUFBZ0k7QUFDaEkseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUdBQXlHLG1DQUFtQztBQUM1STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrSEFBK0gsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxZQUFZLFlBQVksVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsUUFBUSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVB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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUM7QUFDTztBQUNQO0FBQ1g7O0FBRUU7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQVE7QUFDWjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9wZWFrLWRpc3RyaWN0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9zZWFyY2gtaWNvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjU0MTE3NjQ3MDYpLCByZ2JhKDAsIDAsIDAsIDAuNTQxMTc2NDcwNikpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmNvbnRhaW5lciA+IGRpdiB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ibG9jazogMXJlbTtcbn1cbi5zZWFyY2gtYm94ICoge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgaGVpZ2h0OiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG59XG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG59XG4uc2VhcmNoLWJveCBidXR0b24ge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLm1haW4taW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTgsIDUzLCA1MywgMC41KTtcbiAgcGFkZGluZy1ibG9jazogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjJyZW07XG59XG4ubWFpbi1pbmZvID4gZGl2IHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1pbmZvIC5jaXR5IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4ubWFpbi1pbmZvIC5kYXRlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLm1haW4taW5mbyAuc3RhdHVzIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAgaW1nIHtcbiAgd2lkdGg6IDUuNXJlbTtcbn1cbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCAudGVtcGVyYXR1cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5tYWluLWluZm8gLnN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICBmbGV4OiAwLjI1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1pbmZvIC5zdGF0cyAuc3RhdC1ib3ggcCB7XG4gIHBhZGRpbmc6IDAuMnJlbTtcbiAgbWluLWhlaWdodDogMi41cmVtO1xufVxuLm1haW4taW5mbyAuc3RhdHMgLnN0YXQtYm94IGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm9wdGlvbnMgYnV0dG9uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1ibG9jazogMC4ycmVtO1xuICBjb2xvcjogZ3JleTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OCwgNTMsIDUzLCAwLjUpO1xuICBib3JkZXI6IG5vbmU7XG59XG4ub3B0aW9ucyBidXR0b24uc2VsZWN0ZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JlY2FzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8vMWZyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uZm9yZWNhc3QtY2hvaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9yZWNhc3QtY2hvaWNlIGJ1dHRvbiB7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MywgNTMsIDAuNSk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uZm9yZWNhc3QtY2hvaWNlIGJ1dHRvbi5zZWxlY3RlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhvdXJseS1mb3JlY2FzdCxcbi5kYWlseS1mb3JlY2FzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4ycmVtO1xufVxuLmhvdXJseS1mb3JlY2FzdC5hY3RpdmUsXG4uZGFpbHktZm9yZWNhc3QuYWN0aXZlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ob3VybHktZm9yZWNhc3QgPiBkaXYsXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAwLjRmciAwLjhmciAwLjNmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MywgNTMsIDAuNSk7XG59XG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2IGltZyxcbi5kYWlseS1mb3JlY2FzdCA+IGRpdiBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9fbGF5b3V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBOzs7RUFHRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBRUEsb0NBQUE7QUNIRjs7QURNQTtFQUNJLGVBQUE7QUNISjs7QURNQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esd0lBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFFQSxpQkFBQTtFQUNBLFlBQUE7QUNKSjs7QURPQTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05KO0FEUUk7RUFDSSxVQUFBO0FDTlI7O0FEVUE7RUFJSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ1ZKO0FEWUk7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQ1ZSO0FEYUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDWFI7QURhUTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDWFo7QURlSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseURBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNiUjs7QURrQkE7RUFDSSx1Q0FqRk87RUFtRlAsbUJBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNqQko7QURtQkk7RUFFSSxlQUFBO0VBQ0Esa0JBQUE7QUNsQlI7QUR1Qkk7RUFDSSxpQkFBQTtBQ3JCUjtBRHlCSTtFQUNJLGVBQUE7QUN2QlI7QUQwQkk7RUFDSSxpQkFBQTtFQUVBLDBCQUFBO0VBQ0EsZ0JBQUE7QUN6QlI7QUQ0Qkk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQzFCUjtBRDRCUTtFQUNJLGFBQUE7QUMxQlo7QUQ2QlE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUMzQlo7QURtQ0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNqQ1I7QURtQ1E7RUFDSSxpQkFBQTtFQUNBLFVBQUE7RUFHQSxrQkFBQTtBQ25DWjtBRHFDWTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ25DaEI7QURzQ1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ3BDaEI7O0FENENBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDekNKO0FEMkNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUVBLFdBQUE7RUFDQSx1Q0F6S0c7RUEwS0gsWUFBQTtBQzFDUjtBRDZDSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQzNDUjs7QURnREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQzdDSjs7QURnREE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUM3Q0o7QUQrQ0k7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUNBbk1HO0VBb01ILGdCQUFBO0FDN0NSO0FEK0NRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDN0NaOztBRG9EQTs7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDakRKO0FEbURJOztFQUNJLGFBQUE7QUNoRFI7QURtREk7O0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBak9HO0FDZ0xYO0FEbURROztFQUNJLFdBQUE7RUFDQSxZQUFBO0FDaERaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4kYmctY29sb3I6IHJnYmEoNTgsIDUzLCA1MywgMC41KTtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDA4YSwgIzAwMDAwMDhhKSwgdXJsKCcuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgLy9iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLy9nYXA6IDFyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFxuICAgID5kaXZ7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICB9XFxufVxcblxcbi5zZWFyY2gtYm94e1xcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xcbiAgICAvL3BhZGRpbmc6IDFyZW0gMS41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xcblxcbiAgICAqe1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgaW5wdXR7XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xcbiAgICAgICAgXFxuICAgICAgICAmOjpwbGFjZWhvbGRlcntcXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OCk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIHdpZHRoOiAgMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvc2VhcmNoLWljb24ucG5nKTtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB9XFxuXFxufVxcblxcbi5tYWluLWluZm97XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXG4gICAgLy9mbGV4LWdyb3c6IDAuNDtcXG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjJyZW07XFxuXFxuICAgID5kaXZ7XFxuICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgLy9wYWRkaW5nLWJsb2NrOiAwLjJyZW07XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAuY2l0eXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgLy9mb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxuICAgIFxcbiAgICAuZGF0ZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnN0YXR1c3tcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgLy9mb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5pbWctYW5kLXRlbXB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIHdpZHRoOiA1LjVyZW07XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC50ZW1wZXJhdHVyZXtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgXFxuICAgIH1cXG4gICAgXFxuXFxuICAgIFxcbiAgICAuc3RhdHN7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgXFxuICAgICAgICAuc3RhdC1ib3h7XFxuICAgICAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XFxuICAgICAgICAgICAgZmxleDogMC4yNTtcXG4gICAgICAgICAgICAvL2JvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gICAgXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG4gICAgICAgICAgICBwe1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjJyZW07XFxuICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIuNXJlbTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG4ub3B0aW9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBidXR0b257XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctYmxvY2s6IDAuMnJlbTtcXG4gICAgICAgIFxcbiAgICAgICAgY29sb3I6IGdyZXk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJGJnLWNvbG9yO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbi5zZWxlY3RlZHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIH1cXG59XFxuXFxuXFxuLmZvcmVjYXN0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gIDFmcjtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWNob2ljZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBjb2xvcjogZ3JleTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkYmctY29sb3I7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcblxcbiAgICAgICAgJi5zZWxlY3RlZHtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcblxcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0LFxcbi5kYWlseS1mb3JlY2FzdHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjJyZW07XFxuXFxuICAgICYuYWN0aXZle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICA+ZGl2e1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjI1ZnIgMC40ZnIgMC44ZnIgMC4zZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICRiZy1jb2xvcjs7XFxuXFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgfSAgIFxcbiAgICB9ICAgIFxcbn1cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41NDExNzY0NzA2KSwgcmdiYSgwLCAwLCAwLCAwLjU0MTE3NjQ3MDYpKSwgdXJsKFxcXCIuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLmNvbnRhaW5lciA+IGRpdiB7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYmxvY2s6IDFyZW07XFxufVxcbi5zZWFyY2gtYm94ICoge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuLnNlYXJjaC1ib3ggaW5wdXQge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBsYXJnZTtcXG59XFxuLnNlYXJjaC1ib3ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ4KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbn1cXG4uc2VhcmNoLWJveCBidXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3NlYXJjaC1pY29uLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLm1haW4taW5mbyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MywgNTMsIDAuNSk7XFxuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcbi5tYWluLWluZm8gPiBkaXYge1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWFpbi1pbmZvIC5jaXR5IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLm1haW4taW5mbyAuc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIGltZyB7XFxuICB3aWR0aDogNS41cmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAgLnRlbXBlcmF0dXJlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm1haW4taW5mbyAuc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCB7XFxuICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gIGZsZXg6IDAuMjU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCBwIHtcXG4gIHBhZGRpbmc6IDAuMnJlbTtcXG4gIG1pbi1oZWlnaHQ6IDIuNXJlbTtcXG59XFxuLm1haW4taW5mbyAuc3RhdHMgLnN0YXQtYm94IGltZyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm9wdGlvbnMgYnV0dG9uIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy1ibG9jazogMC4ycmVtO1xcbiAgY29sb3I6IGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MywgNTMsIDAuNSk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5vcHRpb25zIGJ1dHRvbi5zZWxlY3RlZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8vMWZyO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWNob2ljZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5mb3JlY2FzdC1jaG9pY2UgYnV0dG9uIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1OCwgNTMsIDUzLCAwLjUpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuLmZvcmVjYXN0LWNob2ljZSBidXR0b24uc2VsZWN0ZWQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmhvdXJseS1mb3JlY2FzdCxcXG4uZGFpbHktZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuLmhvdXJseS1mb3JlY2FzdC5hY3RpdmUsXFxuLmRhaWx5LWZvcmVjYXN0LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2LFxcbi5kYWlseS1mb3JlY2FzdCA+IGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAwLjRmciAwLjhmciAwLjNmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCA1MywgNTMsIDAuNSk7XFxufVxcbi5ob3VybHktZm9yZWNhc3QgPiBkaXYgaW1nLFxcbi5kYWlseS1mb3JlY2FzdCA+IGRpdiBpbWcge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcbmltcG9ydCAqIGFzIEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcblxuXG4vL2NvbnN0IENVUlJFTlRfVVJMID0gJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT01YjczNjJlODgzOGU0NGJkYTkxMTI1MzI0MjMxNzEwJztcbmNvbnN0IEZPUkVDQVNUX1VSTCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT01YjczNjJlODgzOGU0NGJkYTkxMTI1MzI0MjMxNzEwJmRheXM9Nic7XG5cbi8vIF5eIHRoZSBmb3JlY2FzdCB1cmwgY2FsbCBhbHNvIGluY2x1ZGVzIHRoZSBjdXJyZW50IHdlYXRoZXJcbi8vIHNvIG5vIG5lZWQgZm9yIHR3byBzZXJwZXJhdGUgY2FsbHNcblxuLy8gc28gd2UgYWx3YXlzIGtub3cgY3VycmVudCBzZWFyY2hlZCBsb2NhdGlvblxubGV0IGxhc3RMb2NhdGlvbjtcblxuLy8gc3RvcmUgdGhlIG1vc3QgcmVjZW50IHdlYXRoZXIgY2FsbCBzbyB3ZSBkb24ndFxuLy8gaGF2ZSB0byBtYWtlIHVubmVjZXNzYXJ5IGNhbGxzXG5sZXQgbGFzdEZvcmVjYXN0O1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxvY2F0aW9uPSdraWxjb3JtYWMnKXtcbiAgICB0cnl7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0ZPUkVDQVNUX1VSTH0mcT0ke2xvY2F0aW9ufWApO1xuICAgICAgICBsZXQgZm9yZWNhc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgbGFzdExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIGxhc3RGb3JlY2FzdCA9IGZvcmVjYXN0O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3JlY2FzdCBjYWxsZWQgJywgZm9yZWNhc3QpO1xuXG4gICAgICAgIHJldHVybiBmb3JlY2FzdFxuXG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2VyciAnLGVycm9yKTtcbiAgICB9XG5cbn1cblxuLyogYXN5bmMgZnVuY3Rpb24gZ2V0RGF0ZSgpe1xuICAgIGxldCB3ZWF0aGVyT2JqID0gYXdhaXQgZ2V0Rm9yZWNhc3QobGFzdExvY2F0aW9uKTtcblxuICAgIGxldCBkYXRlID0gd2VhdGhlck9iai5sb2NhdGlvbi5sb2NhbHRpbWU7XG5cbiAgICByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKGRhdGUpLCBcImVlZWUgZGQgTU1NIHl5IEhIOm1tXCIpO1xufSAqL1xuXG4vLyBmb3Igc29tZSByZWFzb24sIGNoYW5jZSBvZiByYWluIGlzIHN0b3JlZCBkZWVwIGluXG4vLyBmb3JlY2FzdCA+IGZvcmVjYXN0ZGF5ID4gMCA+IGhvdXIgPiAuLi5ob3VycyA+IGhlcmVcbi8vIGJ1dCB3ZSBuZWVkIHRoZSBjdXJyZW50IGhvdXIgdG8gbWF0Y2ggaXQgdXAgXG4vLyBzbyB3ZSBtYWtlIHVzZSBvZiBhIGhlbHBlciBmdW5jdGlvbiB3aGljaCByZXR1cm5zIFxuLy8gdGhlIGN1cnJlbnQgbG9jYWwgaG91clxuZnVuY3Rpb24gZ2V0Q2hhbmNlT2ZSYWluKCl7XG4gICAgbGV0IGxvY2FsSG91ciA9ICBOdW1iZXIoSGVscGVycy5nZXRMb2NhbEhvdXIobGFzdEZvcmVjYXN0KSk7IFxuICAgIGNvbnNvbGUubG9nKCdsb2NhbCBob3VyICcsIGxvY2FsSG91ci5sZW5ndGgsIGxvY2FsSG91cik7XG4gICAgY29uc29sZS5sb2coJ2xvY2FsIGhvdXIgY2l0eScsIGxhc3RGb3JlY2FzdCk7XG4gICAgbGV0IGNoYW5jZU9mUmFpbiA9IGxhc3RGb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2xvY2FsSG91cl0uY2hhbmNlX29mX3JhaW47XG5cbiAgICByZXR1cm4gY2hhbmNlT2ZSYWluO1xufVxuXG4vLyBIT1VSTFkgU1RBVFNcbi8vIHRoaXMgaXMgdGhlIHRyaWNraWVzdCAmIGJ1c2llc3Qgb25lLCBJIG5lZWQgdG8gZ2V0IGhvdXJseSBzdGF0c1xuLy8gYW5kIGRpc3BsYXkgdGhlbSBpbiAzaHIgaW5jcmVtZW50cyBmcm9tIHRoZSBjdXJyZW50IGhvdXIuLi5cbi8vIHRoaXMgdGFrZXMgaW4gdGhlIGhvdXIgYW5kIGdldHMgbmVjZXNzYXJ5IHN0YXRzIGFzIGFuIG9iamVjdFxuXG5mdW5jdGlvbiBnZXRIb3VybHlTdGF0cyhpbmNyZW1lbnRNYWduaXR1ZGU9MCl7XG5cbiAgICBsZXQgaG91ciA9IE51bWJlcihIZWxwZXJzLmdldExvY2FsSG91cihsYXN0Rm9yZWNhc3QpKTtcbiAgICBob3VyICs9ICgzKmluY3JlbWVudE1hZ25pdHVkZSk7XG4gICAgbGV0IGRheSA9IDA7XG5cbiAgICAvLyBjaGFuZ2UgdG8gbmV4dCBkYXkgd2hlbiB3ZSBwYXNzIG1pZG5pZ2h0XG4gICAgLy8gYW5kIGZpeCB0aGUgaG91ciBpLmUuIDI2IHdpbGwgYmUgMjYtMjQgPSAyYW1cbiAgICBpZihob3VyID4gMjMpe1xuICAgICAgICBob3VyIC09IDI0O1xuICAgICAgICBkYXkgPSAxO1xuICAgIH1cblxuICAgIGxldCBob3VyT2JqID0gbGFzdEZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uaG91cltob3VyXTtcbiAgICAvLyB0ZXN0aW5nXG5cbiAgICBsZXQgaG91clRvRGlzcGxheSA9IEhlbHBlcnMuZ2V0SG91clRvRGlzcGxheShob3VyT2JqKTtcbiAgICBsZXQgc3RhdHVzID0gaG91ck9iai5jb25kaXRpb24udGV4dDtcbiAgICBsZXQgaWNvbiA9IGhvdXJPYmouY29uZGl0aW9uLmljb247XG4gICAgbGV0IHRlbXBDID0gaG91ck9iai50ZW1wX2M7XG4gICAgbGV0IHRlbXBGID0gaG91ck9iai50ZW1wX2Y7XG5cbiAgICAvLyByb3VuZC1vZmYgdGVtcHNcbiAgICB0ZW1wQyA9IE1hdGgucm91bmQodGVtcEMpO1xuICAgIHRlbXBGID0gTWF0aC5yb3VuZCh0ZW1wRik7XG5cbiAgICByZXR1cm57XG4gICAgICAgIGhvdXJUb0Rpc3BsYXksIFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGljb24sIFxuICAgICAgICB0ZW1wQywgXG4gICAgICAgIHRlbXBGXG4gICAgfTtcbiBcbn1cblxuZnVuY3Rpb24gZ2V0RGFpbHlTdGF0cyhpbmRleCl7XG4gICAgbGV0IGRhaWx5T2JqID0gbGFzdEZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2luZGV4XTtcblxuICAgIC8vIGhlbHBlciB0byBnZXQgbmljZSBkYXRlXG4gICAgbGV0IGRheVRvRGlzcGxheTtcbiAgICBpZihpbmRleCA9PT0gMCl7XG4gICAgICAgIGRheVRvRGlzcGxheSA9ICdUb2RheSc7XG4gICAgfWVsc2V7XG4gICAgICAgIGRheVRvRGlzcGxheSA9IEhlbHBlcnMuZm9ybWF0RGF0ZShkYWlseU9iai5kYXRlLCAnZGF5JywgdHJ1ZSk7XG4gICAgfVxuICAgIGxldCBzdGF0dXMgPSBkYWlseU9iai5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgbGV0IGljb24gPSBkYWlseU9iai5kYXkuY29uZGl0aW9uLmljb247XG4gICAgbGV0IGhpVGVtcEMgPSBkYWlseU9iai5kYXkubWF4dGVtcF9jO1xuICAgIGxldCBsb3dUZW1wQyA9IGRhaWx5T2JqLmRheS5sb3d0ZW1wX2M7XG4gICAgbGV0IGhpVGVtcEYgPSBkYWlseU9iai5kYXkubWF4dGVtcF9mO1xuICAgIGxldCBsb3dUZW1wRiA9IGRhaWx5T2JqLmRheS5sb3d0ZW1wX2Y7XG5cbiAgICByZXR1cm57XG4gICAgICAgIGRheVRvRGlzcGxheSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBpY29uLFxuICAgICAgICBoaVRlbXBDLFxuICAgICAgICBsb3dUZW1wQyxcbiAgICAgICAgaGlUZW1wRixcbiAgICAgICAgbG93VGVtcEYsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRMYXRlc3RXZWF0aGVyT2JqKCl7XG4gICAgcmV0dXJuIGxhc3RGb3JlY2FzdDtcbn1cblxuZXhwb3J0IHtcbiAgICBnZXRGb3JlY2FzdCxcbiAgICBnZXRDaGFuY2VPZlJhaW4sIFxuICAgIGdldExhdGVzdFdlYXRoZXJPYmosXG4gICAgZ2V0SG91cmx5U3RhdHMsXG4gICAgZ2V0RGFpbHlTdGF0cyxcbn07IiwiaW1wb3J0ICogYXMgQVBJIGZyb20gJy4vYXBpJztcbmltcG9ydCAqIGFzIEhlbHBlciBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IGZlZWxzTGlrZUltZyBmcm9tICcuLi9hc3NldHMvZmVlbHMtbGlrZS5wbmcnO1xuaW1wb3J0IHJhaW5JbWcgZnJvbSAnLi4vYXNzZXRzL3JhaW4tZHJvcHMucG5nJztcbmltcG9ydCBodW1pZGl0eUltZyBmcm9tICcuLi9hc3NldHMvaHVtaWRpdHkucG5nJztcbmltcG9ydCB3aW5kSW1nIGZyb20gJy4uL2Fzc2V0cy93aW5kLnBuZyc7XG5pbXBvcnQgY2xvdWRJY29uIGZyb20gJy4uL2Fzc2V0cy9jbG91ZC1pY29uLnBuZyc7XG5cbmNvbnN0IGZhdmljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rJyk7XG5cbmNvbnN0IHdlYXRoZXJJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbWc+aW1nJyk7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5jb25zdCBmZWVsc0xpa2VJbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVscy1saWtlLWltZycpO1xuY29uc3QgY2hhbmNlT2ZSYWluSW1nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbmNlLW9mLXJhaW4taW1nJyk7XG5jb25zdCBodW1pZGl0eUltZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5LWltZycpO1xuY29uc3Qgd2luZEltZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtaW1nJyk7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZScpO1xuY29uc3QgY2hhbmNlT2ZSYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhaW4nKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQnKTtcblxuLy8gaG91cmx5IGVsZW1lbnRzXG5jb25zdCBob3VyRGl2cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cmx5LWZvcmVjYXN0ID4gZGl2JyldO1xuLy8gZGFpbHkgZWxlbWVudHNcbmNvbnN0IGRheURpdnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LWZvcmVjYXN0ID4gZGl2JyldO1xuXG4vLyBkZWZhdWx0IHZhbHVlcyBhcmUgQ2Vsc2l1cyAmIE1waFxuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NlbHNpdXMnKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtcGgnKTtcblxuZmF2aWNvbi5ocmVmID0gY2xvdWRJY29uO1xuXG4vLyBzZXQgaWNvbnMgZm9yIHRoZSBzdGF0IGJveGVzIFxuZmVlbHNMaWtlSW1nRWwuc3JjID0gZmVlbHNMaWtlSW1nO1xuY2hhbmNlT2ZSYWluSW1nRWwuc3JjID0gcmFpbkltZztcbmh1bWlkaXR5SW1nRWwuc3JjID0gaHVtaWRpdHlJbWc7XG53aW5kSW1nRWwuc3JjID0gd2luZEltZztcblxubGV0IGlzQ2Vsc2l1cyA9IHRydWU7XG5sZXQgaXNNcGggPSB0cnVlO1xuXG5cbi8vIGluaXRpYWxpemUgdGhlIHBhZ2UgaWNvbnMgYW5kIGRlZmF1bHQgdmFsdWVzXG5hc3luYyBmdW5jdGlvbiBpbml0KCl7XG4gICAgLy8gc2V0IGZhdmljb24gYW5kIHNvbWUgcGFnZSBpY29ucyBcbiAgICBmYXZpY29uLmhyZWYgPSBjbG91ZEljb247XG4gICAgZmVlbHNMaWtlSW1nRWwuc3JjID0gZmVlbHNMaWtlSW1nO1xuICAgIGNoYW5jZU9mUmFpbkltZ0VsLnNyYyA9IHJhaW5JbWc7XG4gICAgaHVtaWRpdHlJbWdFbC5zcmMgPSBodW1pZGl0eUltZztcbiAgICB3aW5kSW1nRWwuc3JjID0gd2luZEltZztcblxuICAgIC8vIGxvYWQgJiBzZXQgd2VhdGhlciBpbmZvIGZyb20gJ2tpbGNvcm1hYydcbiAgICAvLyBhcyBwbGFjZWhvbGRlciBpbmZvXG4gICAgbGV0IGZvcmVjYXN0ID0gYXdhaXQgQVBJLmdldEZvcmVjYXN0KCk7XG4gICAgY29uc29sZS5sb2coZm9yZWNhc3QpO1xuICAgIHNldEFsbFZhbHVlcyhmb3JlY2FzdCk7XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0QWxsVmFsdWVzKGZvcmVjYXN0KXtcbiAgICAvLyBtYWluIGluZm9cbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmxvY2F0aW9uLm5hbWU7XG4gICAgd2VhdGhlckltZy5zcmMgPSBmb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBIZWxwZXIuZm9ybWF0RGF0ZShmb3JlY2FzdC5sb2NhdGlvbi5sb2NhbHRpbWUpO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBpc0NlbHNpdXMgPyBcbiAgICAgICAgTWF0aC5yb3VuZChmb3JlY2FzdC5jdXJyZW50LnRlbXBfYykrJ8KwQydcbiAgICAgICAgOk1hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC50ZW1wX2YpKyfCsEYnO1xuXG4gICAgc3RhdHVzLnRleHRDb250ZW50ID0gZm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24udGV4dDtcblxuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1cyA/IFxuICAgICAgICBNYXRoLnJvdW5kKGZvcmVjYXN0LmN1cnJlbnQuZmVlbHNsaWtlX2MpKyfCsEMnXG4gICAgICAgIDpNYXRoLnJvdW5kKGZvcmVjYXN0LmN1cnJlbnQuZmVlbHNsaWtlX2YpKyfCsEYnO1xuXG4gICAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gQVBJLmdldENoYW5jZU9mUmFpbigpKyclJztcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmN1cnJlbnQudGVtcF9jKyclJztcbiAgICB3aW5kLnRleHRDb250ZW50ID0gaXNNcGggPyBcbiAgICAgICAgZm9yZWNhc3QuY3VycmVudC5ndXN0X21waCsnIG1waCdcbiAgICAgICAgOmZvcmVjYXN0LmN1cnJlbnQuZ3VzdF9rcGgrJyBrbS9oJztcblxuICAgIC8vIGhvdXJseVxuICAgIHNldEhvdXJseVZhbHVlcygpO1xuICAgIFxuICAgIC8vIHdlZWtcbiAgICBzZXREYWlseVZhbHVlcygpO1xufVxuXG5mdW5jdGlvbiBzZXRIb3VybHlWYWx1ZXMoKXtcbiAgICBob3VyRGl2cy5mb3JFYWNoKChkaXYsIGkpID0+e1xuICAgICAgICBsZXQge2hvdXJUb0Rpc3BsYXksIHN0YXR1cywgaWNvbiwgdGVtcEMsIHRlbXBGfSA9IEFQSS5nZXRIb3VybHlTdGF0cyhpKTtcblxuICAgICAgICBkaXYuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBob3VyVG9EaXNwbGF5O1xuICAgICAgICBkaXYuY2hpbGRyZW5bMV0uc3JjID0gaWNvbjtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gc3RhdHVzO1xuICAgICAgICBkaXYuY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSBpc0NlbHNpdXMgPyBcbiAgICAgICAgICAgIHRlbXBDKyfCsEMnIDpcbiAgICAgICAgICAgIHRlbXBGKyfCsEYnO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNldERhaWx5VmFsdWVzKCl7XG4gICAgLy9jcmVhdGUgYSBtZXRob2QgaW4gQVBJIHdoaWNoIHJldHVybnMgdGhlIG5lY2Vzc2FyeSBkYXRhXG4gICAgLy8gZm9yIG5leHQgNiBkYXlzXG4gICAgLy8gbWF5IG5lZWQgYSBkYXRlLXRvLWRheSBoZWxwZXIgbWV0aG9kXG4gICAgLy8gbWF5YmUgdXNlIG1pbi9tYXggdGVtcFxuICAgIC8vIG90aGVyd2lzZSB0aGUgc2FtZVxuICAgIGRheURpdnMuZm9yRWFjaCgoZGl2LCBpKT0+e1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZGF5VG9EaXNwbGF5LFxuICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGhpVGVtcEMsIFxuICAgICAgICAgICAgbG93VGVtcEMsXG4gICAgICAgICAgICBoaVRlbXBGLFxuICAgICAgICAgICAgbG93VGVtcEZcbiAgICAgICAgICAgIH0gPSBBUEkuZ2V0RGFpbHlTdGF0cyhpKTtcbiAgICAgICAgXG4gICAgICAgIGRpdi5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGRheVRvRGlzcGxheTtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzFdLnNyYyA9IGljb247XG4gICAgICAgIGRpdi5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IHN0YXR1cztcbiAgICAgICAgZGl2LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gaXNDZWxzaXVzID8gXG4gICAgICAgIGhpVGVtcEMrJ8KwQycgOlxuICAgICAgICBoaVRlbXBGKyfCsEYnO1xuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gc2V0SXNDZWxzaXVzKHZhbHVlKXtcbiAgICBpc0NlbHNpdXMgPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2V0SXNNcGgodmFsdWUpe1xuICAgIGlzTXBoID0gdmFsdWU7XG59XG5cblxuZXhwb3J0IHtcbiAgICBzZXRBbGxWYWx1ZXMsIFxuICAgIGluaXQsIFxuICAgIHNldElzQ2Vsc2l1cywgXG4gICAgc2V0SXNNcGgsXG4gICAgfTsiLCJpbXBvcnQgKiBhcyBBUEkgZnJvbSAnLi9hcGknO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vZG9tJztcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ib3ggPiBidXR0b24nKVxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJveCA+IGlucHV0Jyk7XG5jb25zdCBjZWxzaXVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2MtYnRuJyk7XG5jb25zdCBmYWhyZW5oZWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2YtYnRuJyk7XG5jb25zdCBtcGhCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXBoLWJ0bicpO1xuY29uc3Qga21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna20tYnRuJyk7XG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1idG4nKTtcbmNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vlay1idG4nKTtcbmNvbnN0IGhvdXJseURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWZvcmVjYXN0Jyk7XG5jb25zdCBkYWlseURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktZm9yZWNhc3QnKTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VhcmNoQnRuQ2xpY2soKXtcbiAgICBsZXQgdXNlcklucHV0ID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgaWYodXNlcklucHV0ID09ICcnKSByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZygnaW5wdXQgJywgdXNlcklucHV0KTtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgQVBJLmdldEZvcmVjYXN0KHVzZXJJbnB1dCk7XG4gICAgLy9uZWVkIHRvIGNoZWNrIHJlc3VsdCBmb3IgZXJyb3JzIF5cbiAgICBET00uc2V0QWxsVmFsdWVzKHJlc3VsdCk7XG5cbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0NlbHNpdXMoKXtcbiAgICBjZWxzaXVzQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgZmFocmVuaGVpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0ZhaHJlbmhlaXQoKXtcbiAgICBmYWhyZW5oZWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgY2Vsc2l1c0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDZWxzaXVzQnRuQ2xpY2soKXtcbiAgICBpZihjZWxzaXVzQnRuLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuICAgIGNoYW5nZVRvQ2Vsc2l1cygpO1xuICAgIC8vIG1ha2UgYSBuZXcgY2FsbD8gTm8uLi5cbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gQVBJLmdldExhdGVzdFdlYXRoZXJPYmooKTtcbiAgICBET00uc2V0SXNDZWxzaXVzKHRydWUpO1xuICAgIERPTS5zZXRBbGxWYWx1ZXMod2VhdGhlck9iaik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZhaHJlbmhlaXRCdG5DbGljaygpe1xuICAgIGlmKGZhaHJlbmhlaXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSByZXR1cm47XG4gICAgY2hhbmdlVG9GYWhyZW5oZWl0KCk7XG4gICAgLy8gbWFrZSBhIG5ldyBjYWxsPyBOby4uLlxuICAgIGNvbnN0IHdlYXRoZXJPYmogPSBBUEkuZ2V0TGF0ZXN0V2VhdGhlck9iaigpO1xuICAgIERPTS5zZXRJc0NlbHNpdXMoZmFsc2UpO1xuICAgIERPTS5zZXRBbGxWYWx1ZXMod2VhdGhlck9iaik7XG59XG5mdW5jdGlvbiBjaGFuZ2VUb01waCgpe1xuICAgIG1waEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGttQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRvS20oKXtcbiAgICBrbUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIG1waEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNcGhCdG5DbGljaygpe1xuICAgIGlmKG1waEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHJldHVybjtcbiAgICBjaGFuZ2VUb01waCgpO1xuICAgIC8vIG1ha2UgYSBuZXcgY2FsbD8gTm8uLi5cbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gQVBJLmdldExhdGVzdFdlYXRoZXJPYmooKTtcbiAgICBET00uc2V0SXNNcGgodHJ1ZSk7XG4gICAgRE9NLnNldEFsbFZhbHVlcyh3ZWF0aGVyT2JqKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlS21CdG5DbGljaygpe1xuICAgIGlmKGttQnRuLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuICAgIGNoYW5nZVRvS20oKTtcbiAgICAvLyBtYWtlIGEgbmV3IGNhbGw/IE5vLi4uXG4gICAgY29uc3Qgd2VhdGhlck9iaiA9IEFQSS5nZXRMYXRlc3RXZWF0aGVyT2JqKCk7XG4gICAgRE9NLnNldElzTXBoKGZhbHNlKTtcbiAgICBET00uc2V0QWxsVmFsdWVzKHdlYXRoZXJPYmopO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0hvdXJseUZvcmVjYXN0KCl7XG4gICAgaG91cmx5RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB0b2RheUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGRhaWx5RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB3ZWVrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9EYWlseUZvcmVjYXN0KCl7XG4gICAgZGFpbHlEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHdlZWtCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBob3VybHlEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHRvZGF5QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cbn1cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2VhcmNoQnRuQ2xpY2spO1xuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSk9PntcbiAgICBpZihlLmtleSA9PSAnRW50ZXInKSBoYW5kbGVTZWFyY2hCdG5DbGljaygpO1xufSlcbmNlbHNpdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxzaXVzQnRuQ2xpY2spO1xuZmFocmVuaGVpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUZhaHJlbmhlaXRCdG5DbGljayk7XG5tcGhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNcGhCdG5DbGljayk7XG5rbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUttQnRuQ2xpY2spO1xudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUb0hvdXJseUZvcmVjYXN0KTtcbndlZWtCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUb0RhaWx5Rm9yZWNhc3QpOyIsImZ1bmN0aW9uIGdldExvY2FsSG91cih3ZWF0aGVyT2JqKXtcbiAgLy8gaG93IEkgY3V0IG91dCB0aGUgaG91ciBpcyBjYXVzaW5nIHByb2JsZW1zXG4gIC8vIHdoZW4gaXQncyBhIHNpbmdsZS1kaWdpdCBob3VyXG4gIC8vIHNvIGkgZGVmYXVsdCBpdCB0byBhIGRhdGUgZm9ybWF0XG4gIC8vIGFuZCBjdXQgdGhlIGhvdXIgZnJvbSB0aGF0XG5cbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh3ZWF0aGVyT2JqLmxvY2F0aW9uLmxvY2FsdGltZSk7XG4gIGxldCBob3VyID0gU3RyaW5nKGRhdGUpLnN1YnN0cmluZygxNiwgMTgpO1xuXG4gIHJldHVybiBob3VyO1xufVxuXG5mdW5jdGlvbiBnZXRIb3VyVG9EaXNwbGF5KGhvdXJPYmope1xuICAgIGxldCB0aW1lID0gaG91ck9iai50aW1lO1xuICAgIGxldCBob3VyID0gdGltZS5zdWJzdHJpbmcodGltZS5sZW5ndGgtNSwgdGltZS5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIGhvdXI7XG59XG5cbi8vIGhlbHBmdWwgZm9yIHNsaWNpbmcuLi5cbi8vMDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzXG4vL1RodSBPY3QgMjYgMjAyMyAxMzoxNjowMCBHTVQrMDEwMFxuXG4vLyBleGNlbGxlbnQgcGllY2Ugb2YgaGVscGVyIGNvZGUgSSBib3Jyb3dlZCAmIG1vZGlmaWVkIGZyb21cbi8vICdodHRwczovL2dpdGh1Yi5jb20vYnNjb3R0bnovd2VhdGhlci1hcHAvYmxvYi9tYWluL3NyYy9qcy91dGlscy5qcydcbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSwgZGF0ZUZvcm1hdCA9ICdmdWxsJywgd2FudFNob3J0RGF5ID0gZmFsc2UpIHtcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gbmV3IERhdGUoZGF0ZSkudG9TdHJpbmcoKTtcbiAgICBsZXQgZGF5T2ZXZWVrID0gZGF0ZVN0cmluZy5zbGljZSgwLCAzKTtcbiAgICBsZXQgZGF5T2ZNb250aCA9IGRhdGVTdHJpbmcuc2xpY2UoOCwgMTApO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZVN0cmluZy5zbGljZSg0LCA4KTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZVN0cmluZy5zbGljZSgxMywgMTUpO1xuICAgIGNvbnN0IHRpbWUgPSBkYXRlU3RyaW5nLnNsaWNlKDE2LDIxKTtcbiAgICBjb25zdCBob3VyID0gZGF0ZVN0cmluZy5zbGljZSgxNiwxOCk7XG4gICAgbGV0IGRheVN1ZmZpeDtcbiAgICBsZXQgdGltZVN1ZmZpeDtcblxuICAgIC8vY29uc29sZS5sb2coJ2RhdGUgc3RyaW5nICcsIGRhdGVTdHJpbmcpO1xuICBcbiAgICAvLyBjaGFuZ2UgMDEgdG8gMSBldGNcbiAgICBpZiAoZGF5T2ZNb250aCA8IDEwKSB7XG4gICAgICBkYXlPZk1vbnRoID0gZGF5T2ZNb250aC5zbGljZSgxKTtcbiAgICB9XG4gIFxuICAgIC8vIGdlbmVyYXRlIGNvcmVjdCBkYXRlIGRheVN1ZmZpeFxuICAgIGlmIChkYXlPZk1vbnRoLnNsaWNlKC0xKSA9PT0gJzEnKSB7XG4gICAgICBkYXlTdWZmaXggPSAnc3QnO1xuICAgIH0gZWxzZSBpZiAoZGF5T2ZNb250aC5zbGljZSgtMSkgPT09ICcyJykge1xuICAgICAgZGF5U3VmZml4ID0gJ25kJztcbiAgICB9IGVsc2UgaWYgKGRheU9mTW9udGguc2xpY2UoLTEpID09PSAnMycpIHtcbiAgICAgIGRheVN1ZmZpeCA9ICdyZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVN1ZmZpeCA9ICd0aCc7XG4gICAgfVxuXG4gICAgLy8gZ2VuZXJhdGUgY29ycmN0IHRpbWUgc3VmZml4XG4gICAgaWYoaG91ciA8PSAxMil7XG4gICAgICB0aW1lU3VmZml4ID0gJ2FtJztcbiAgICB9ZWxzZXtcbiAgICAgIHRpbWVTdWZmaXggPSAncG0nO1xuICAgIH1cbiAgXG4gICAgLy8gdGhvc2UgcGVza3kgMTEsIDEyLCAxMyB0aHNcbiAgICBpZiAoZGF5T2ZNb250aCA+IDMgJiYgZGF5T2ZNb250aCA8IDIxKSB7XG4gICAgICBkYXlTdWZmaXggPSAndGgnO1xuICAgIH1cbiAgXG4gICAgLy8gY29udmVydCBzaG9ydCBkYXkgbmFtZSB0byBmdWxsIGRheSBuYW1lXG4gICAgaWYoIXdhbnRTaG9ydERheSl7ICAgIFxuICAgICAgICBpZiAoZGF5T2ZXZWVrID09PSAnTW9uJykge1xuICAgICAgICBkYXlPZldlZWsgPSAnTW9uZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdUdWUnKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdUdWVzZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdXZWQnKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdXZWRuZXNkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1RodScpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1RodXJzZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdGcmknKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdGcmlkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1NhdCcpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1NhdHVyZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdTdW4nKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdTdW5kYXknO1xuICAgICAgICB9XG4gICAgfVxuICBcbiAgICAvLyByZXR1cm4gb25seSB0aGUgZGF5IG9mIHdlZWtcbiAgICBpZiAoZGF0ZUZvcm1hdCA9PT0gJ2RheScpIHtcbiAgICAgIHJldHVybiBkYXlPZldlZWs7XG4gICAgfVxuICBcbiAgICAvLyByZXR1cm4gZnVsbCBkYXRlIHN0cmluZ1xuICAgIHJldHVybiBgJHt0aW1lfSR7dGltZVN1ZmZpeH0sICR7ZGF5T2ZXZWVrfSwgJHtkYXlPZk1vbnRofSR7ZGF5U3VmZml4fSAke21vbnRofSAnJHt5ZWFyfWA7XG4gIH1cblxuZXhwb3J0IHtcbiAgICBnZXRMb2NhbEhvdXIsXG4gICAgZ2V0SG91clRvRGlzcGxheSxcbiAgICBmb3JtYXREYXRlICAgIFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIEFQSSBmcm9tICcuL21vZHVsZXMvYXBpJztcbmltcG9ydCAqIGFzIEhlbHBlciBmcm9tICcuL21vZHVsZXMvaGVscGVycyc7XG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9tb2R1bGVzL2RvbSc7XG5pbXBvcnQgJy4vbW9kdWxlcy9ldmVudHMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbi8vIHNldCBzb21lIHBsYWNlaG9sZGVyIHZhbHVlcyBmb3Igd2hlbiB0aGUgcGFnZVxuLy8gbG9hZHMgZm9yIHRoZSBmaXJzdCB0aW1lXG5mdW5jdGlvbiBkb21Jbml0KCl7XG4gICAgRE9NLmluaXQoKTtcbn1cblxuZG9tSW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9