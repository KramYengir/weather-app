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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

button {
  cursor: pointer;
}

body {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5411764706), rgba(0, 0, 0, 0.5411764706)), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  padding-top: 1rem;
  font-size: calc(0.8rem + 0.2vw);
  color: white;
  /*     @media screen and (max-height: 800px) {
          background-size: cover;    
      } */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
  width: 100%;
  max-height: 100%;
}
@media screen and (max-width: 600px) {
  .container {
    overflow-y: scroll;
  }
}
.container > div {
  width: min(80%, 800px);
}
.container > div.main-info, .container > div.options {
  width: min(80%, 400px);
}

.search-box {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.search-box * {
  border: none;
  border-bottom: 2px solid white;
  background: none;
}
.search-box input {
  height: 2rem;
  color: white;
  font-size: calc(0.9rem + 0.2vw);
  padding: 0 0 0.1rem 0.8rem;
  text-transform: uppercase;
}
.search-box input::placeholder {
  color: rgba(255, 255, 255, 0.548);
  font-size: calc(0.9rem + 0.2vw);
  padding-left: 0.2rem;
}
.search-box input:focus {
  outline: none;
}
.search-box button {
  height: 2rem;
  width: 2rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.error-msg {
  display: flex;
  justify-content: center;
  min-height: 1rem;
  margin-block: 0.2rem 1rem;
  font-size: calc(0.8rem + 0.2vw);
  color: rgb(255, 255, 255);
}

.main-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  background-color: rgba(0, 0, 0, 0.151);
  padding-block: 1rem;
  border-radius: 10px 10px 0 0;
}
.main-info > div {
  min-width: 100%;
  text-align: center;
}
.main-info .city {
  font-size: calc(1.2rem + 0.3vw);
}
.main-info .date {
  font-size: calc(0.8rem + 0.2vw);
  color: whitesmoke;
}
.main-info .status {
  font-size: calc(1.2rem + 0.3vw);
  text-transform: capitalize;
  margin-top: 1.5rem;
}
.main-info .img-and-temp {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.main-info .img-and-temp img {
  width: 6.5rem;
}
.main-info .img-and-temp .temperature {
  position: relative;
  font-size: 2rem;
}
.main-info .stats {
  display: flex;
  margin: 1.5rem 0 0.2rem;
}
.main-info .stats .stat-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  line-height: 1rem;
  flex: 0.25;
}
.main-info .stats .stat-box img {
  width: 30px;
  height: 30px;
}

.wind-unit {
  font-size: calc(0.8rem + 0.2vw - 0.2vw);
}

.temp-unit {
  font-size: calc(0.8rem + 0.2vw - 0.2vw);
  vertical-align: super;
}

.feels-like-temp-unit {
  font-size: calc((0.8rem + 0.2vw - 0.2vw) * 0.9);
  vertical-align: top;
}

.options {
  display: flex;
  justify-content: space-between;
}
.options button {
  width: 60px;
  height: 100%;
  padding-block: 0.2rem;
  background-color: rgba(0, 0, 0, 0.151);
  color: rgb(145, 145, 145);
  border: none;
}
.options button.selected {
  color: white;
  background-color: rgba(0, 0, 0, 0.151);
  font-weight: 600;
}

.forecast {
  display: grid;
  grid-template: auto/1fr;
  margin-block: 2rem;
}

.forecast-choice {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
.forecast-choice button {
  height: 35px;
  padding: 0.5rem;
  border: none;
  color: grey;
  background-color: rgba(0, 0, 0, 0.151);
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
  background-color: rgba(0, 0, 0, 0.151);
}
.hourly-forecast > div img,
.daily-forecast > div img {
  width: 35px;
  height: 35px;
}
.hourly-forecast > div .day__temperature_min,
.daily-forecast > div .day__temperature_min {
  display: none;
}
.hourly-forecast > div .day__temperature_max::before,
.daily-forecast > div .day__temperature_max::before {
  content: "";
}

@media screen and (min-width: 700px) {
  .daily-forecast > div {
    grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr 0.3fr;
  }
  .daily-forecast > div .day__temperature_min {
    display: block;
  }
  .daily-forecast > div .day__temperature_min::before {
    content: "▼ ";
  }
  .daily-forecast > div .day__temperature_max::before {
    content: "▲ ";
  }
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/_layout.scss"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.5411764706), rgba(0, 0, 0, 0.5411764706)), url(\"../assets/peak-district.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  padding-top: 1rem;\n  font-size: calc(0.8rem + 0.2vw);\n  color: white;\n  /*     @media screen and (max-height: 800px) {\n          background-size: cover;    \n      } */\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-inline: auto;\n  width: 100%;\n  max-height: 100%;\n}\n@media screen and (max-width: 600px) {\n  .container {\n    overflow-y: scroll;\n  }\n}\n.container > div {\n  width: min(80%, 800px);\n}\n.container > div.main-info, .container > div.options {\n  width: min(80%, 400px);\n}\n\n.search-box {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n.search-box * {\n  border: none;\n  border-bottom: 2px solid white;\n  background: none;\n}\n.search-box input {\n  height: 2rem;\n  color: white;\n  font-size: calc(0.9rem + 0.2vw);\n  padding: 0 0 0.1rem 0.8rem;\n  text-transform: uppercase;\n}\n.search-box input::placeholder {\n  color: rgba(255, 255, 255, 0.548);\n  font-size: calc(0.9rem + 0.2vw);\n  padding-left: 0.2rem;\n}\n.search-box input:focus {\n  outline: none;\n}\n.search-box button {\n  height: 2rem;\n  width: 2rem;\n  background-image: url(../assets/search-icon.png);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.error-msg {\n  display: flex;\n  justify-content: center;\n  min-height: 1rem;\n  margin-block: 0.2rem 1rem;\n  font-size: calc(0.8rem + 0.2vw);\n  color: rgb(255, 255, 255);\n}\n\n.main-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.151);\n  padding-block: 1rem;\n  border-radius: 10px 10px 0 0;\n}\n.main-info > div {\n  min-width: 100%;\n  text-align: center;\n}\n.main-info .city {\n  font-size: calc(1.2rem + 0.3vw);\n}\n.main-info .date {\n  font-size: calc(0.8rem + 0.2vw);\n  color: whitesmoke;\n}\n.main-info .status {\n  font-size: calc(1.2rem + 0.3vw);\n  text-transform: capitalize;\n  margin-top: 1.5rem;\n}\n.main-info .img-and-temp {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.main-info .img-and-temp img {\n  width: 6.5rem;\n}\n.main-info .img-and-temp .temperature {\n  position: relative;\n  font-size: 2rem;\n}\n.main-info .stats {\n  display: flex;\n  margin: 1.5rem 0 0.2rem;\n}\n.main-info .stats .stat-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  line-height: 1rem;\n  flex: 0.25;\n}\n.main-info .stats .stat-box img {\n  width: 30px;\n  height: 30px;\n}\n\n.wind-unit {\n  font-size: calc(0.8rem + 0.2vw - 0.2vw);\n}\n\n.temp-unit {\n  font-size: calc(0.8rem + 0.2vw - 0.2vw);\n  vertical-align: super;\n}\n\n.feels-like-temp-unit {\n  font-size: calc((0.8rem + 0.2vw - 0.2vw) * 0.9);\n  vertical-align: top;\n}\n\n.options {\n  display: flex;\n  justify-content: space-between;\n}\n.options button {\n  width: 60px;\n  height: 100%;\n  padding-block: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.151);\n  color: rgb(145, 145, 145);\n  border: none;\n}\n.options button.selected {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.151);\n  font-weight: 600;\n}\n\n.forecast {\n  display: grid;\n  grid-template: auto/1fr;\n  margin-block: 2rem;\n}\n\n.forecast-choice {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.forecast-choice button {\n  height: 35px;\n  padding: 0.5rem;\n  border: none;\n  color: grey;\n  background-color: rgba(0, 0, 0, 0.151);\n  font-weight: 100;\n}\n.forecast-choice button.selected {\n  color: white;\n  font-weight: 600;\n}\n\n.hourly-forecast,\n.daily-forecast {\n  display: none;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.hourly-forecast.active,\n.daily-forecast.active {\n  display: flex;\n}\n.hourly-forecast > div,\n.daily-forecast > div {\n  width: 100%;\n  height: 50px;\n  display: grid;\n  grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;\n  align-items: center;\n  justify-items: center;\n  background-color: rgba(0, 0, 0, 0.151);\n}\n.hourly-forecast > div img,\n.daily-forecast > div img {\n  width: 35px;\n  height: 35px;\n}\n.hourly-forecast > div .day__temperature_min,\n.daily-forecast > div .day__temperature_min {\n  display: none;\n}\n.hourly-forecast > div .day__temperature_max::before,\n.daily-forecast > div .day__temperature_max::before {\n  content: \"\";\n}\n\n@media screen and (min-width: 700px) {\n  .daily-forecast > div {\n    grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr 0.3fr;\n  }\n  .daily-forecast > div .day__temperature_min {\n    display: block;\n  }\n  .daily-forecast > div .day__temperature_min::before {\n    content: \"▼ \";\n  }\n  .daily-forecast > div .day__temperature_max::before {\n    content: \"▲ \";\n  }\n}","@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap');\n\n$bg-color: rgba(0, 0, 0, 0.151);\n$bg-gradient: linear-gradient(to right, #0000008a, #0000008a);\n$bg-image: url('../assets/peak-district.jpg');\n\n// sizes\n$large-font: calc(1.2rem + 0.3vw);\n$med-font: calc(0.9rem + 0.2vw);\n$small-font: calc(0.8rem + 0.2vw);\n$unit-size: calc($small-font - 0.2vw);\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n\n  //font-family: 'Open Sans', sans-serif;\n  font-family: 'Roboto', sans-serif;\n}\n\nbutton{\n    cursor: pointer;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    background: $bg-gradient, $bg-image;\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n    padding-top: 1rem;\n\n    font-size: $small-font;\n    color: white;\n\n/*     @media screen and (max-height: 800px) {\n        background-size: cover;    \n    } */\n}\n\n.container{\n    //backdrop-filter: blur(2px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    //gap: 1rem;\n    margin-inline: auto;\n    width: 100%;\n    max-height: 100%;\n\n    @media screen and (max-width: 600px) {\n        overflow-y: scroll;\n\n    }\n    \n    \n    >div{\n        width: min(80%, 800px);\n\n        &.main-info,\n        &.options{\n            width: min(80%, 400px)\n        }\n    }\n}\n\n\n.search-box{\n    //background-color: rgba(0, 128, 0, 0.5);\n    //padding: 1rem 1.5rem;\n\n    display: flex;\n    justify-content: center;\n    margin-top: 1rem;\n\n    *{\n        border: none;\n        border-bottom: 2px solid white;\n        background: none;\n    }\n    \n    input{\n        height: 2rem;\n        color: white;\n        font-size: $med-font;\n        padding: 0 0 0.1rem 0.8rem;\n        text-transform: uppercase;\n        \n        &::placeholder{\n            color: rgba(255, 255, 255, 0.548);\n            font-size: $med-font;\n            padding-left: 0.2rem;\n        }\n\n        &:focus{\n            outline: none;\n        }\n    }\n\n    button{\n        height: 2rem;\n        width:  2rem;\n        background-image: url(../assets/search-icon.png);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n}\n\n.error-msg{\n    display: flex;\n    justify-content: center;\n    min-height: 1rem;\n    margin-block: 0.2rem 1rem;\n\n    font-size: $small-font;\n    color: rgb(255, 255, 255);\n}\n\n.main-info{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.2rem;\n\n    \n    background-color: $bg-color;\n    padding-block: 1rem;\n    border-radius: 10px 10px 0 0;\n\n    >div{\n        min-width: 100%;\n        text-align: center;\n        \n    }\n\n    .city{\n        font-size: $large-font;\n    }\n    \n    .date{\n        font-size: $small-font;\n        color: whitesmoke;\n    }\n    \n    .status{\n        font-size: $large-font;\n        text-transform: capitalize;\n        margin-top: 1.5rem;\n    }\n\n    .img-and-temp{\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n\n        img{\n            width: 6.5rem;\n        }\n        \n        .temperature{\n            position: relative;\n            font-size: 2rem;\n        }\n        \n    }\n    \n\n    \n    .stats{\n        display: flex;\n        margin: 1.5rem 0 0.2rem;\n    \n        .stat-box{\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 10px;\n            line-height: 1rem;\n            flex: 0.25;\n\n            img{\n                width: 30px;\n                height: 30px;\n            }            \n        }\n    }\n}\n\n.wind-unit{\n    font-size: $unit-size;\n}\n\n.temp-unit{\n    font-size: $unit-size;\n    vertical-align: super;\n}\n\n.feels-like-temp-unit{\n    font-size: calc($unit-size * 0.9);\n    vertical-align: top;\n}\n\n\n\n.options{\n    display: flex;\n    justify-content: space-between;\n\n    button{\n        width: 60px;\n        height: 100%;\n        padding-block: 0.2rem;\n        background-color: $bg-color;\n        \n        color: rgb(145, 145, 145);\n        border: none;\n    }\n    \n    button.selected{\n        color: white;\n        background-color:  $bg-color;\n        font-weight: 600;\n    }\n}\n\n\n.forecast{\n    display: grid;\n    grid-template: auto /  1fr;\n    margin-block: 2rem;\n}\n\n.forecast-choice{\n    display: flex;\n    justify-content: center;\n    gap: 0.5rem;\n\n    button {\n        height: 35px;\n        padding: 0.5rem;\n        border: none;\n        color: grey;\n        background-color:  $bg-color;\n        font-weight: 100;\n\n        &.selected{\n            color: white;\n            font-weight: 600;\n        }\n    }\n\n\n}\n\n.hourly-forecast,\n.daily-forecast{\n    display: none;\n    flex-direction: column;\n    gap: 0.2rem;\n\n    &.active{\n        display: flex;\n    }\n\n    >div{\n        width: 100%;\n        height: 50px;\n\n        display: grid;\n        grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;\n        align-items: center;\n        justify-items: center;\n        background-color:  $bg-color;;\n\n        img{\n            width: 35px;\n            height: 35px;\n        } \n        \n        .day__temperature_min{\n            display: none;\n        }\n\n        .day__temperature_max::before{\n            content: '';\n\n        }\n    }    \n}\n@media screen and (min-width: 700px) {\n    .daily-forecast{\n        >div{ \n             grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr 0.3fr;\n            .day__temperature_min{\n                    display: block;\n\n                    &::before{\n                        content: '▼ ';\n                    }\n            }\n\n            .day__temperature_max::before{\n                content: '▲ ';\n\n            }\n         }\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");





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
        // check that the response is fine
        if (response.status === 404) {
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayErrorMsg)("Sorry, we're having trouble...");
            throw new Error('Page not found');
          } else if (response.status === 500) {
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayErrorMsg)("Sorry, problems with the server...");
            throw new Error('Server error');
        } else if (response.status === 400) {
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayErrorMsg)("Sorry, can't find such a place...");
            throw new Error('Bad Request');
          } else if (!response.ok) {
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayErrorMsg)("Sorry, we're having trouble...");
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        let forecast = await response.json();

        lastLocation = location;
        lastForecast = forecast;

        console.log('forecast called ', forecast);

        return forecast

    }catch(error){
        console.error(error);
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
    let altText = hourObj.condition.text;
    let tempC = hourObj.temp_c;
    let tempF = hourObj.temp_f;

    // round-off temps
    tempC = Math.round(tempC);
    tempF = Math.round(tempF);

    return{
        hourToDisplay, 
        status,
        icon,
        altText, 
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
    let altText = dailyObj.day.condition.text;
    let hiTempC = dailyObj.day.maxtemp_c;
    let lowTempC = dailyObj.day.mintemp_c;
    let hiTempF = dailyObj.day.maxtemp_f;
    let lowTempF = dailyObj.day.mintemp_f;

    return{
        dayToDisplay,
        status,
        icon,
        altText,
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
/* harmony export */   displayErrorMsg: () => (/* binding */ displayErrorMsg),
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
const errorMsg = document.querySelector('.error-msg');
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
    weatherImg.alt = forecast.current.condition.text;
    date.textContent = _helpers__WEBPACK_IMPORTED_MODULE_1__.formatDate(forecast.location.localtime);
    temp.innerHTML = isCelsius ? 
        Math.round(forecast.current.temp_c)+`<span class='temp-unit'>°C</span>`
        :Math.round(forecast.current.temp_f)+`<span class='temp-unit'>°F</span>`;

    status.textContent = forecast.current.condition.text;

    feelsLike.innerHTML = isCelsius ? 
        Math.round(forecast.current.feelslike_c)+`<span class='feels-like-temp-unit'>°C</span>`
        :Math.round(forecast.current.feelslike_f)+`<span class='feels-like-temp-unit'>°F</span>`;

    chanceOfRain.textContent = _api__WEBPACK_IMPORTED_MODULE_0__.getChanceOfRain()+'%';
    humidity.textContent = forecast.current.temp_c+'%';
    wind.innerHTML = isMph ? 
        Math.round(forecast.current.gust_mph)+`<span class='wind-unit'>mph</span>`
        :Math.round(forecast.current.gust_kph)+`<span class='wind-unit'>km/h</span>`

    // hourly
    setHourlyValues();
    
    // week
    setDailyValues();
}

function setHourlyValues(){
    hourDivs.forEach((div, i) =>{
        let {hourToDisplay, status, icon, altText, tempC, tempF} = _api__WEBPACK_IMPORTED_MODULE_0__.getHourlyStats(i);

        div.children[0].textContent = hourToDisplay;
        div.children[1].src = icon;
        div.children[1].alt = altText;
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
            altText,
            hiTempC, 
            lowTempC,
            hiTempF,
            lowTempF
            } = _api__WEBPACK_IMPORTED_MODULE_0__.getDailyStats(i);
        
        div.children[0].textContent = dayToDisplay;
        div.children[1].src = icon;
        div.children[1].alt = altText;
        div.children[2].textContent = status;
        div.children[3].textContent = isCelsius ? 
        Math.round(lowTempC)+'°C' :
        Math.round(lowTempF)+'°F';
        div.children[4].textContent = isCelsius ? 
        Math.round(hiTempC)+'°C' :
        Math.round(hiTempF)+'°F';
    })

}

function setIsCelsius(value){
    isCelsius = value;
}

function setIsMph(value){
    isMph = value;
}

function displayErrorMsg(msg){
    errorMsg.textContent = msg;
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
    if(result === undefined){
        console.log('bllloooop');
    } else{
        _dom__WEBPACK_IMPORTED_MODULE_1__.setAllValues(result);
    }

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
searchInput.addEventListener('keydown', (e)=>{
    _dom__WEBPACK_IMPORTED_MODULE_1__.displayErrorMsg('');
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
    const month = dateString.slice(4, 8);
    const year = dateString.slice(13, 15);
    let hour = dateString.slice(16,18);
    let dayOfWeek = dateString.slice(0, 3);
    let dayOfMonth = dateString.slice(8, 10);
    let time = dateString.slice(16,21);
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

    // generate correct time suffix
    if(hour <= 12){
      timeSuffix = 'am';
    }else{
      timeSuffix = 'pm';
    }
    // and 12hr format
    if(hour > 12){
      hour -= 12;
      time = String(hour).slice(0,2)+':'+time.slice(3,5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsa0lBQThDO0FBQzFGLDRDQUE0Qyw4SEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4SUFBOEk7QUFDOUkseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5R0FBeUcsbUNBQW1DO0FBQzVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9JQUFvSSxRQUFRLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVB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O0FBRUE7QUFDQSx1QkFBdUIsNkNBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sUUFBUSw4Q0FBZ0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxREFBdUI7QUFDOUMsSUFBSSw4Q0FBZ0I7QUFDcEIsSUFBSSw4Q0FBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscURBQXVCO0FBQzlDLElBQUksOENBQWdCO0FBQ3BCLElBQUksOENBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscURBQXVCO0FBQzlDLElBQUksMENBQVk7QUFDaEIsSUFBSSw4Q0FBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscURBQXVCO0FBQzlDLElBQUksMENBQVk7QUFDaEIsSUFBSSw4Q0FBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLElBQUksaURBQW1CO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEtBQUssRUFBRSxXQUFXLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxHQUFHLEtBQUs7QUFDM0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ087QUFDUDtBQUNYOztBQUVFOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFRO0FBQ1o7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc2VhcmNoLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA1MDAmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41NDExNzY0NzA2KSwgcmdiYSgwLCAwLCAwLCAwLjU0MTE3NjQ3MDYpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncpO1xuICBjb2xvcjogd2hpdGU7XG4gIC8qICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgICBcbiAgICAgIH0gKi9cbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG59XG4uY29udGFpbmVyID4gZGl2IHtcbiAgd2lkdGg6IG1pbig4MCUsIDgwMHB4KTtcbn1cbi5jb250YWluZXIgPiBkaXYubWFpbi1pbmZvLCAuY29udGFpbmVyID4gZGl2Lm9wdGlvbnMge1xuICB3aWR0aDogbWluKDgwJSwgNDAwcHgpO1xufVxuXG4uc2VhcmNoLWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuLnNlYXJjaC1ib3ggKiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnNlYXJjaC1ib3ggaW5wdXQge1xuICBoZWlnaHQ6IDJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiBjYWxjKDAuOXJlbSArIDAuMnZ3KTtcbiAgcGFkZGluZzogMCAwIDAuMXJlbSAwLjhyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OCk7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjlyZW0gKyAwLjJ2dyk7XG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xufVxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNlYXJjaC1ib3ggYnV0dG9uIHtcbiAgaGVpZ2h0OiAycmVtO1xuICB3aWR0aDogMnJlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5lcnJvci1tc2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMXJlbTtcbiAgbWFyZ2luLWJsb2NrOiAwLjJyZW0gMXJlbTtcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3KTtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLm1haW4taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcbiAgcGFkZGluZy1ibG9jazogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbn1cbi5tYWluLWluZm8gPiBkaXYge1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYWluLWluZm8gLmNpdHkge1xuICBmb250LXNpemU6IGNhbGMoMS4ycmVtICsgMC4zdncpO1xufVxuLm1haW4taW5mbyAuZGF0ZSB7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyk7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuLm1haW4taW5mbyAuc3RhdHVzIHtcbiAgZm9udC1zaXplOiBjYWxjKDEuMnJlbSArIDAuM3Z3KTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbn1cbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIGltZyB7XG4gIHdpZHRoOiA2LjVyZW07XG59XG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAgLnRlbXBlcmF0dXJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDJyZW07XG59XG4ubWFpbi1pbmZvIC5zdGF0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMS41cmVtIDAgMC4ycmVtO1xufVxuLm1haW4taW5mbyAuc3RhdHMgLnN0YXQtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMXJlbTtcbiAgZmxleDogMC4yNTtcbn1cbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ud2luZC11bml0IHtcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3IC0gMC4ydncpO1xufVxuXG4udGVtcC11bml0IHtcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3IC0gMC4ydncpO1xuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XG59XG5cbi5mZWVscy1saWtlLXRlbXAtdW5pdCB7XG4gIGZvbnQtc2l6ZTogY2FsYygoMC44cmVtICsgMC4ydncgLSAwLjJ2dykgKiAwLjkpO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5vcHRpb25zIGJ1dHRvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctYmxvY2s6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XG4gIGNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5vcHRpb25zIGJ1dHRvbi5zZWxlY3RlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb3JlY2FzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8vMWZyO1xuICBtYXJnaW4tYmxvY2s6IDJyZW07XG59XG5cbi5mb3JlY2FzdC1jaG9pY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG4uZm9yZWNhc3QtY2hvaWNlIGJ1dHRvbiB7XG4gIGhlaWdodDogMzVweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiBncmV5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5mb3JlY2FzdC1jaG9pY2UgYnV0dG9uLnNlbGVjdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaG91cmx5LWZvcmVjYXN0LFxuLmRhaWx5LWZvcmVjYXN0IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjJyZW07XG59XG4uaG91cmx5LWZvcmVjYXN0LmFjdGl2ZSxcbi5kYWlseS1mb3JlY2FzdC5hY3RpdmUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmhvdXJseS1mb3JlY2FzdCA+IGRpdixcbi5kYWlseS1mb3JlY2FzdCA+IGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yNWZyIDAuNGZyIDAuOGZyIDAuM2ZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xufVxuLmhvdXJseS1mb3JlY2FzdCA+IGRpdiBpbWcsXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYgaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMzVweDtcbn1cbi5ob3VybHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWluLFxuLmRhaWx5LWZvcmVjYXN0ID4gZGl2IC5kYXlfX3RlbXBlcmF0dXJlX21pbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2IC5kYXlfX3RlbXBlcmF0dXJlX21heDo6YmVmb3JlLFxuLmRhaWx5LWZvcmVjYXN0ID4gZGl2IC5kYXlfX3RlbXBlcmF0dXJlX21heDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgLmRhaWx5LWZvcmVjYXN0ID4gZGl2IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAwLjRmciAwLjhmciAwLjNmciAwLjNmcjtcbiAgfVxuICAuZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWluOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi4pa8IFwiO1xuICB9XG4gIC5kYWlseS1mb3JlY2FzdCA+IGRpdiAuZGF5X190ZW1wZXJhdHVyZV9tYXg6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCLilrIgXCI7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19sYXlvdXQuc2Nzc1wiXSxcIm5hbWVz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QTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FwUkc7QUQ0Tlg7QUMwRFE7O0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUR2RFo7QUMwRFE7O0VBQ0ksYUFBQTtBRHZEWjtBQzBEUTs7RUFDSSxXQUFBO0FEdkRaOztBQzREQTtFQUVRO0lBQ0sscURBQUE7RUQxRFg7RUMyRFU7SUFDUSxjQUFBO0VEekRsQjtFQzJEa0I7SUFDSSxhQUFBO0VEekR0QjtFQzZEVTtJQUNJLGFBQUE7RUQzRGQ7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41NDExNzY0NzA2KSwgcmdiYSgwLCAwLCAwLCAwLjU0MTE3NjQ3MDYpKSwgdXJsKFxcXCIuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLyogICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgICBcXG4gICAgICB9ICovXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICB9XFxufVxcbi5jb250YWluZXIgPiBkaXYge1xcbiAgd2lkdGg6IG1pbig4MCUsIDgwMHB4KTtcXG59XFxuLmNvbnRhaW5lciA+IGRpdi5tYWluLWluZm8sIC5jb250YWluZXIgPiBkaXYub3B0aW9ucyB7XFxuICB3aWR0aDogbWluKDgwJSwgNDAwcHgpO1xcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4uc2VhcmNoLWJveCAqIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5zZWFyY2gtYm94IGlucHV0IHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjlyZW0gKyAwLjJ2dyk7XFxuICBwYWRkaW5nOiAwIDAgMC4xcmVtIDAuOHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5zZWFyY2gtYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OCk7XFxuICBmb250LXNpemU6IGNhbGMoMC45cmVtICsgMC4ydncpO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XFxufVxcbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zZWFyY2gtYm94IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvc2VhcmNoLWljb24ucG5nKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uZXJyb3ItbXNnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDFyZW07XFxuICBtYXJnaW4tYmxvY2s6IDAuMnJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3KTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5tYWluLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcXG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbn1cXG4ubWFpbi1pbmZvID4gZGl2IHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4taW5mbyAuY2l0eSB7XFxuICBmb250LXNpemU6IGNhbGMoMS4ycmVtICsgMC4zdncpO1xcbn1cXG4ubWFpbi1pbmZvIC5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuLm1haW4taW5mbyAuc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxLjJyZW0gKyAwLjN2dyk7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG59XFxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCBpbWcge1xcbiAgd2lkdGg6IDYuNXJlbTtcXG59XFxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIC50ZW1wZXJhdHVyZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5tYWluLWluZm8gLnN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDEuNXJlbSAwIDAuMnJlbTtcXG59XFxuLm1haW4taW5mbyAuc3RhdHMgLnN0YXQtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgZmxleDogMC4yNTtcXG59XFxuLm1haW4taW5mbyAuc3RhdHMgLnN0YXQtYm94IGltZyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLndpbmQtdW5pdCB7XFxuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncgLSAwLjJ2dyk7XFxufVxcblxcbi50ZW1wLXVuaXQge1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3IC0gMC4ydncpO1xcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xcbn1cXG5cXG4uZmVlbHMtbGlrZS10ZW1wLXVuaXQge1xcbiAgZm9udC1zaXplOiBjYWxjKCgwLjhyZW0gKyAwLjJ2dyAtIDAuMnZ3KSAqIDAuOSk7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ub3B0aW9ucyBidXR0b24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWJsb2NrOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcXG4gIGNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5vcHRpb25zIGJ1dHRvbi5zZWxlY3RlZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0by8xZnI7XFxuICBtYXJnaW4tYmxvY2s6IDJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1jaG9pY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5mb3JlY2FzdC1jaG9pY2UgYnV0dG9uIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4uZm9yZWNhc3QtY2hvaWNlIGJ1dHRvbi5zZWxlY3RlZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0LFxcbi5kYWlseS1mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG4uaG91cmx5LWZvcmVjYXN0LmFjdGl2ZSxcXG4uZGFpbHktZm9yZWNhc3QuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5ob3VybHktZm9yZWNhc3QgPiBkaXYsXFxuLmRhaWx5LWZvcmVjYXN0ID4gZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yNWZyIDAuNGZyIDAuOGZyIDAuM2ZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xcbn1cXG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2IGltZyxcXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYgaW1nIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2IC5kYXlfX3RlbXBlcmF0dXJlX21pbixcXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWluIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5ob3VybHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWF4OjpiZWZvcmUsXFxuLmRhaWx5LWZvcmVjYXN0ID4gZGl2IC5kYXlfX3RlbXBlcmF0dXJlX21heDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgLmRhaWx5LWZvcmVjYXN0ID4gZGl2IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjI1ZnIgMC40ZnIgMC44ZnIgMC4zZnIgMC4zZnI7XFxuICB9XFxuICAuZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWluOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4pa8IFxcXCI7XFxuICB9XFxuICAuZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWF4OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4payIFxcXCI7XFxuICB9XFxufVwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANTAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuJGJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcXG4kYmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDAwMDhhLCAjMDAwMDAwOGEpO1xcbiRiZy1pbWFnZTogdXJsKCcuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGcnKTtcXG5cXG4vLyBzaXplc1xcbiRsYXJnZS1mb250OiBjYWxjKDEuMnJlbSArIDAuM3Z3KTtcXG4kbWVkLWZvbnQ6IGNhbGMoMC45cmVtICsgMC4ydncpO1xcbiRzbWFsbC1mb250OiBjYWxjKDAuOHJlbSArIDAuMnZ3KTtcXG4kdW5pdC1zaXplOiBjYWxjKCRzbWFsbC1mb250IC0gMC4ydncpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgLy9mb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQ6ICRiZy1ncmFkaWVudCwgJGJnLWltYWdlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcblxcbiAgICBmb250LXNpemU6ICRzbWFsbC1mb250O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuLyogICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgXFxuICAgIH0gKi9cXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgLy9iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLy9nYXA6IDFyZW07XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbiAgICB9XFxuICAgIFxcbiAgICBcXG4gICAgPmRpdntcXG4gICAgICAgIHdpZHRoOiBtaW4oODAlLCA4MDBweCk7XFxuXFxuICAgICAgICAmLm1haW4taW5mbyxcXG4gICAgICAgICYub3B0aW9uc3tcXG4gICAgICAgICAgICB3aWR0aDogbWluKDgwJSwgNDAwcHgpXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuLnNlYXJjaC1ib3h7XFxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XFxuICAgIC8vcGFkZGluZzogMXJlbSAxLjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcblxcbiAgICAqe1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgaW5wdXR7XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6ICRtZWQtZm9udDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjFyZW0gMC44cmVtO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIFxcbiAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XFxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDgpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1lZC1mb250O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpmb2N1c3tcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIHdpZHRoOiAgMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvc2VhcmNoLWljb24ucG5nKTtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB9XFxuXFxufVxcblxcbi5lcnJvci1tc2d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tYmxvY2s6IDAuMnJlbSAxcmVtO1xcblxcbiAgICBmb250LXNpemU6ICRzbWFsbC1mb250O1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4ubWFpbi1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuMnJlbTtcXG5cXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG5cXG4gICAgPmRpdntcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5jaXR5e1xcbiAgICAgICAgZm9udC1zaXplOiAkbGFyZ2UtZm9udDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmRhdGV7XFxuICAgICAgICBmb250LXNpemU6ICRzbWFsbC1mb250O1xcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5zdGF0dXN7XFxuICAgICAgICBmb250LXNpemU6ICRsYXJnZS1mb250O1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmltZy1hbmQtdGVtcHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgd2lkdGg6IDYuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLnRlbXBlcmF0dXJle1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgfVxcbiAgICBcXG5cXG4gICAgXFxuICAgIC5zdGF0c3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBtYXJnaW46IDEuNXJlbSAwIDAuMnJlbTtcXG4gICAgXFxuICAgICAgICAuc3RhdC1ib3h7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgICAgIGZsZXg6IDAuMjU7XFxuXFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4ud2luZC11bml0e1xcbiAgICBmb250LXNpemU6ICR1bml0LXNpemU7XFxufVxcblxcbi50ZW1wLXVuaXR7XFxuICAgIGZvbnQtc2l6ZTogJHVuaXQtc2l6ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xcbn1cXG5cXG4uZmVlbHMtbGlrZS10ZW1wLXVuaXR7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygkdW5pdC1zaXplICogMC45KTtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuXFxuXFxuLm9wdGlvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nLWJsb2NrOiAwLjJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuICAgICAgICBcXG4gICAgICAgIGNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgIGJ1dHRvbi5zZWxlY3RlZHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkYmctY29sb3I7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxufVxcblxcblxcbi5mb3JlY2FzdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvICAxZnI7XFxuICAgIG1hcmdpbi1ibG9jazogMnJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWNob2ljZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcblxcbiAgICBidXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgY29sb3I6IGdyZXk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJGJnLWNvbG9yO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG5cXG4gICAgICAgICYuc2VsZWN0ZWR7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuLmhvdXJseS1mb3JlY2FzdCxcXG4uZGFpbHktZm9yZWNhc3R7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4ycmVtO1xcblxcbiAgICAmLmFjdGl2ZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgPmRpdntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yNWZyIDAuNGZyIDAuOGZyIDAuM2ZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkYmctY29sb3I7O1xcblxcbiAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIH0gXFxuICAgICAgICBcXG4gICAgICAgIC5kYXlfX3RlbXBlcmF0dXJlX21pbntcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRheV9fdGVtcGVyYXR1cmVfbWF4OjpiZWZvcmV7XFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxuXFxuICAgICAgICB9XFxuICAgIH0gICAgXFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAgIC5kYWlseS1mb3JlY2FzdHtcXG4gICAgICAgID5kaXZ7IFxcbiAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAwLjRmciAwLjhmciAwLjNmciAwLjNmcjtcXG4gICAgICAgICAgICAuZGF5X190ZW1wZXJhdHVyZV9taW57XFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG5cXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAn4pa8ICc7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5kYXlfX3RlbXBlcmF0dXJlX21heDo6YmVmb3Jle1xcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn4payICc7XFxuXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgIH1cXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XG5pbXBvcnQgKiBhcyBIZWxwZXJzIGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgeyBkaXNwbGF5RXJyb3JNc2cgfSBmcm9tIFwiLi9kb21cIjtcblxuXG4vL2NvbnN0IENVUlJFTlRfVVJMID0gJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT01YjczNjJlODgzOGU0NGJkYTkxMTI1MzI0MjMxNzEwJztcbmNvbnN0IEZPUkVDQVNUX1VSTCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT01YjczNjJlODgzOGU0NGJkYTkxMTI1MzI0MjMxNzEwJmRheXM9Nic7XG5cbi8vIF5eIHRoZSBmb3JlY2FzdCB1cmwgY2FsbCBhbHNvIGluY2x1ZGVzIHRoZSBjdXJyZW50IHdlYXRoZXJcbi8vIHNvIG5vIG5lZWQgZm9yIHR3byBzZXJwZXJhdGUgY2FsbHNcblxuLy8gc28gd2UgYWx3YXlzIGtub3cgY3VycmVudCBzZWFyY2hlZCBsb2NhdGlvblxubGV0IGxhc3RMb2NhdGlvbjtcblxuLy8gc3RvcmUgdGhlIG1vc3QgcmVjZW50IHdlYXRoZXIgY2FsbCBzbyB3ZSBkb24ndFxuLy8gaGF2ZSB0byBtYWtlIHVubmVjZXNzYXJ5IGNhbGxzXG5sZXQgbGFzdEZvcmVjYXN0O1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEZvcmVjYXN0KGxvY2F0aW9uPSdraWxjb3JtYWMnKXtcbiAgICB0cnl7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0ZPUkVDQVNUX1VSTH0mcT0ke2xvY2F0aW9ufWApO1xuICAgICAgICAvLyBjaGVjayB0aGF0IHRoZSByZXNwb25zZSBpcyBmaW5lXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yTXNnKFwiU29ycnksIHdlJ3JlIGhhdmluZyB0cm91YmxlLi4uXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYWdlIG5vdCBmb3VuZCcpO1xuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvck1zZyhcIlNvcnJ5LCBwcm9ibGVtcyB3aXRoIHRoZSBzZXJ2ZXIuLi5cIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlcnZlciBlcnJvcicpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3JNc2coXCJTb3JyeSwgY2FuJ3QgZmluZCBzdWNoIGEgcGxhY2UuLi5cIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCBSZXF1ZXN0Jyk7XG4gICAgICAgICAgfSBlbHNlIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvck1zZyhcIlNvcnJ5LCB3ZSdyZSBoYXZpbmcgdHJvdWJsZS4uLlwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgICAgICB9XG4gICAgICAgIGxldCBmb3JlY2FzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBsYXN0TG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgICAgICAgbGFzdEZvcmVjYXN0ID0gZm9yZWNhc3Q7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ2ZvcmVjYXN0IGNhbGxlZCAnLCBmb3JlY2FzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZvcmVjYXN0XG5cbiAgICB9Y2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG5cbn1cblxuLyogYXN5bmMgZnVuY3Rpb24gZ2V0RGF0ZSgpe1xuICAgIGxldCB3ZWF0aGVyT2JqID0gYXdhaXQgZ2V0Rm9yZWNhc3QobGFzdExvY2F0aW9uKTtcblxuICAgIGxldCBkYXRlID0gd2VhdGhlck9iai5sb2NhdGlvbi5sb2NhbHRpbWU7XG5cbiAgICByZXR1cm4gZm9ybWF0KG5ldyBEYXRlKGRhdGUpLCBcImVlZWUgZGQgTU1NIHl5IEhIOm1tXCIpO1xufSAqL1xuXG4vLyBmb3Igc29tZSByZWFzb24sIGNoYW5jZSBvZiByYWluIGlzIHN0b3JlZCBkZWVwIGluXG4vLyBmb3JlY2FzdCA+IGZvcmVjYXN0ZGF5ID4gMCA+IGhvdXIgPiAuLi5ob3VycyA+IGhlcmVcbi8vIGJ1dCB3ZSBuZWVkIHRoZSBjdXJyZW50IGhvdXIgdG8gbWF0Y2ggaXQgdXAgXG4vLyBzbyB3ZSBtYWtlIHVzZSBvZiBhIGhlbHBlciBmdW5jdGlvbiB3aGljaCByZXR1cm5zIFxuLy8gdGhlIGN1cnJlbnQgbG9jYWwgaG91clxuZnVuY3Rpb24gZ2V0Q2hhbmNlT2ZSYWluKCl7XG4gICAgbGV0IGxvY2FsSG91ciA9ICBOdW1iZXIoSGVscGVycy5nZXRMb2NhbEhvdXIobGFzdEZvcmVjYXN0KSk7IFxuICAgIGNvbnNvbGUubG9nKCdsb2NhbCBob3VyICcsIGxvY2FsSG91ci5sZW5ndGgsIGxvY2FsSG91cik7XG4gICAgY29uc29sZS5sb2coJ2xvY2FsIGhvdXIgY2l0eScsIGxhc3RGb3JlY2FzdCk7XG4gICAgbGV0IGNoYW5jZU9mUmFpbiA9IGxhc3RGb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2xvY2FsSG91cl0uY2hhbmNlX29mX3JhaW47XG5cbiAgICByZXR1cm4gY2hhbmNlT2ZSYWluO1xufVxuXG4vLyBIT1VSTFkgU1RBVFNcbi8vIHRoaXMgaXMgdGhlIHRyaWNraWVzdCAmIGJ1c2llc3Qgb25lLCBJIG5lZWQgdG8gZ2V0IGhvdXJseSBzdGF0c1xuLy8gYW5kIGRpc3BsYXkgdGhlbSBpbiAzaHIgaW5jcmVtZW50cyBmcm9tIHRoZSBjdXJyZW50IGhvdXIuLi5cbi8vIHRoaXMgdGFrZXMgaW4gdGhlIGhvdXIgYW5kIGdldHMgbmVjZXNzYXJ5IHN0YXRzIGFzIGFuIG9iamVjdFxuXG5mdW5jdGlvbiBnZXRIb3VybHlTdGF0cyhpbmNyZW1lbnRNYWduaXR1ZGU9MCl7XG5cbiAgICBsZXQgaG91ciA9IE51bWJlcihIZWxwZXJzLmdldExvY2FsSG91cihsYXN0Rm9yZWNhc3QpKTtcbiAgICBob3VyICs9ICgzKmluY3JlbWVudE1hZ25pdHVkZSk7XG4gICAgbGV0IGRheSA9IDA7XG5cbiAgICAvLyBjaGFuZ2UgdG8gbmV4dCBkYXkgd2hlbiB3ZSBwYXNzIG1pZG5pZ2h0XG4gICAgLy8gYW5kIGZpeCB0aGUgaG91ciBpLmUuIDI2IHdpbGwgYmUgMjYtMjQgPSAyYW1cbiAgICBpZihob3VyID4gMjMpe1xuICAgICAgICBob3VyIC09IDI0O1xuICAgICAgICBkYXkgPSAxO1xuICAgIH1cblxuICAgIGxldCBob3VyT2JqID0gbGFzdEZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uaG91cltob3VyXTtcbiAgICAvLyB0ZXN0aW5nXG5cbiAgICBsZXQgaG91clRvRGlzcGxheSA9IEhlbHBlcnMuZ2V0SG91clRvRGlzcGxheShob3VyT2JqKTtcbiAgICBsZXQgc3RhdHVzID0gaG91ck9iai5jb25kaXRpb24udGV4dDtcbiAgICBsZXQgaWNvbiA9IGhvdXJPYmouY29uZGl0aW9uLmljb247XG4gICAgbGV0IGFsdFRleHQgPSBob3VyT2JqLmNvbmRpdGlvbi50ZXh0O1xuICAgIGxldCB0ZW1wQyA9IGhvdXJPYmoudGVtcF9jO1xuICAgIGxldCB0ZW1wRiA9IGhvdXJPYmoudGVtcF9mO1xuXG4gICAgLy8gcm91bmQtb2ZmIHRlbXBzXG4gICAgdGVtcEMgPSBNYXRoLnJvdW5kKHRlbXBDKTtcbiAgICB0ZW1wRiA9IE1hdGgucm91bmQodGVtcEYpO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBob3VyVG9EaXNwbGF5LCBcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBpY29uLFxuICAgICAgICBhbHRUZXh0LCBcbiAgICAgICAgdGVtcEMsIFxuICAgICAgICB0ZW1wRlxuICAgIH07XG4gXG59XG5cbmZ1bmN0aW9uIGdldERhaWx5U3RhdHMoaW5kZXgpe1xuICAgIGxldCBkYWlseU9iaiA9IGxhc3RGb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVtpbmRleF07XG5cbiAgICAvLyBoZWxwZXIgdG8gZ2V0IG5pY2UgZGF0ZVxuICAgIGxldCBkYXlUb0Rpc3BsYXk7XG4gICAgaWYoaW5kZXggPT09IDApe1xuICAgICAgICBkYXlUb0Rpc3BsYXkgPSAnVG9kYXknO1xuICAgIH1lbHNle1xuICAgICAgICBkYXlUb0Rpc3BsYXkgPSBIZWxwZXJzLmZvcm1hdERhdGUoZGFpbHlPYmouZGF0ZSwgJ2RheScsIHRydWUpO1xuICAgIH1cbiAgICBsZXQgc3RhdHVzID0gZGFpbHlPYmouZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgIGxldCBpY29uID0gZGFpbHlPYmouZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIGxldCBhbHRUZXh0ID0gZGFpbHlPYmouZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgIGxldCBoaVRlbXBDID0gZGFpbHlPYmouZGF5Lm1heHRlbXBfYztcbiAgICBsZXQgbG93VGVtcEMgPSBkYWlseU9iai5kYXkubWludGVtcF9jO1xuICAgIGxldCBoaVRlbXBGID0gZGFpbHlPYmouZGF5Lm1heHRlbXBfZjtcbiAgICBsZXQgbG93VGVtcEYgPSBkYWlseU9iai5kYXkubWludGVtcF9mO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBkYXlUb0Rpc3BsYXksXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgaWNvbixcbiAgICAgICAgYWx0VGV4dCxcbiAgICAgICAgaGlUZW1wQyxcbiAgICAgICAgbG93VGVtcEMsXG4gICAgICAgIGhpVGVtcEYsXG4gICAgICAgIGxvd1RlbXBGLFxuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGF0ZXN0V2VhdGhlck9iaigpe1xuICAgIHJldHVybiBsYXN0Rm9yZWNhc3Q7XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0Rm9yZWNhc3QsXG4gICAgZ2V0Q2hhbmNlT2ZSYWluLCBcbiAgICBnZXRMYXRlc3RXZWF0aGVyT2JqLFxuICAgIGdldEhvdXJseVN0YXRzLFxuICAgIGdldERhaWx5U3RhdHMsXG59OyIsImltcG9ydCAqIGFzIEFQSSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgKiBhcyBIZWxwZXIgZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCBmZWVsc0xpa2VJbWcgZnJvbSAnLi4vYXNzZXRzL2ZlZWxzLWxpa2UucG5nJztcbmltcG9ydCByYWluSW1nIGZyb20gJy4uL2Fzc2V0cy9yYWluLWRyb3BzLnBuZyc7XG5pbXBvcnQgaHVtaWRpdHlJbWcgZnJvbSAnLi4vYXNzZXRzL2h1bWlkaXR5LnBuZyc7XG5pbXBvcnQgd2luZEltZyBmcm9tICcuLi9hc3NldHMvd2luZC5wbmcnO1xuaW1wb3J0IGNsb3VkSWNvbiBmcm9tICcuLi9hc3NldHMvY2xvdWQtaWNvbi5wbmcnO1xuXG5jb25zdCBmYXZpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGluaycpO1xuY29uc3QgZXJyb3JNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbXNnJyk7XG5jb25zdCB3ZWF0aGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW1nPmltZycpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XG5jb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuY29uc3QgZmVlbHNMaWtlSW1nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZS1pbWcnKTtcbmNvbnN0IGNoYW5jZU9mUmFpbkltZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW5jZS1vZi1yYWluLWltZycpO1xuY29uc3QgaHVtaWRpdHlJbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eS1pbWcnKTtcbmNvbnN0IHdpbmRJbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLWltZycpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UnKTtcbmNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYWluJyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kJyk7XG5cbi8vIGhvdXJseSBlbGVtZW50c1xuY29uc3QgaG91ckRpdnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJseS1mb3JlY2FzdCA+IGRpdicpXTtcbi8vIGRhaWx5IGVsZW1lbnRzXG5jb25zdCBkYXlEaXZzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kYWlseS1mb3JlY2FzdCA+IGRpdicpXTtcblxuLy8gZGVmYXVsdCB2YWx1ZXMgYXJlIENlbHNpdXMgJiBNcGhcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjZWxzaXVzJyk7XG5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbXBoJyk7XG5cbmZhdmljb24uaHJlZiA9IGNsb3VkSWNvbjtcblxuLy8gc2V0IGljb25zIGZvciB0aGUgc3RhdCBib3hlcyBcbmZlZWxzTGlrZUltZ0VsLnNyYyA9IGZlZWxzTGlrZUltZztcbmNoYW5jZU9mUmFpbkltZ0VsLnNyYyA9IHJhaW5JbWc7XG5odW1pZGl0eUltZ0VsLnNyYyA9IGh1bWlkaXR5SW1nO1xud2luZEltZ0VsLnNyYyA9IHdpbmRJbWc7XG5cbmxldCBpc0NlbHNpdXMgPSB0cnVlO1xubGV0IGlzTXBoID0gdHJ1ZTtcblxuXG4vLyBpbml0aWFsaXplIHRoZSBwYWdlIGljb25zIGFuZCBkZWZhdWx0IHZhbHVlc1xuYXN5bmMgZnVuY3Rpb24gaW5pdCgpe1xuICAgIC8vIHNldCBmYXZpY29uIGFuZCBzb21lIHBhZ2UgaWNvbnMgXG4gICAgZmF2aWNvbi5ocmVmID0gY2xvdWRJY29uO1xuICAgIGZlZWxzTGlrZUltZ0VsLnNyYyA9IGZlZWxzTGlrZUltZztcbiAgICBjaGFuY2VPZlJhaW5JbWdFbC5zcmMgPSByYWluSW1nO1xuICAgIGh1bWlkaXR5SW1nRWwuc3JjID0gaHVtaWRpdHlJbWc7XG4gICAgd2luZEltZ0VsLnNyYyA9IHdpbmRJbWc7XG5cbiAgICAvLyBsb2FkICYgc2V0IHdlYXRoZXIgaW5mbyBmcm9tICdraWxjb3JtYWMnXG4gICAgLy8gYXMgcGxhY2Vob2xkZXIgaW5mb1xuICAgIGxldCBmb3JlY2FzdCA9IGF3YWl0IEFQSS5nZXRGb3JlY2FzdCgpO1xuICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0KTtcbiAgICBzZXRBbGxWYWx1ZXMoZm9yZWNhc3QpO1xuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNldEFsbFZhbHVlcyhmb3JlY2FzdCl7XG4gICAgLy8gbWFpbiBpbmZvXG4gICAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBmb3JlY2FzdC5sb2NhdGlvbi5uYW1lO1xuICAgIHdlYXRoZXJJbWcuc3JjID0gZm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgICB3ZWF0aGVySW1nLmFsdCA9IGZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IEhlbHBlci5mb3JtYXREYXRlKGZvcmVjYXN0LmxvY2F0aW9uLmxvY2FsdGltZSk7XG4gICAgdGVtcC5pbm5lckhUTUwgPSBpc0NlbHNpdXMgPyBcbiAgICAgICAgTWF0aC5yb3VuZChmb3JlY2FzdC5jdXJyZW50LnRlbXBfYykrYDxzcGFuIGNsYXNzPSd0ZW1wLXVuaXQnPsKwQzwvc3Bhbj5gXG4gICAgICAgIDpNYXRoLnJvdW5kKGZvcmVjYXN0LmN1cnJlbnQudGVtcF9mKStgPHNwYW4gY2xhc3M9J3RlbXAtdW5pdCc+wrBGPC9zcGFuPmA7XG5cbiAgICBzdGF0dXMudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgZmVlbHNMaWtlLmlubmVySFRNTCA9IGlzQ2Vsc2l1cyA/IFxuICAgICAgICBNYXRoLnJvdW5kKGZvcmVjYXN0LmN1cnJlbnQuZmVlbHNsaWtlX2MpK2A8c3BhbiBjbGFzcz0nZmVlbHMtbGlrZS10ZW1wLXVuaXQnPsKwQzwvc3Bhbj5gXG4gICAgICAgIDpNYXRoLnJvdW5kKGZvcmVjYXN0LmN1cnJlbnQuZmVlbHNsaWtlX2YpK2A8c3BhbiBjbGFzcz0nZmVlbHMtbGlrZS10ZW1wLXVuaXQnPsKwRjwvc3Bhbj5gO1xuXG4gICAgY2hhbmNlT2ZSYWluLnRleHRDb250ZW50ID0gQVBJLmdldENoYW5jZU9mUmFpbigpKyclJztcbiAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmN1cnJlbnQudGVtcF9jKyclJztcbiAgICB3aW5kLmlubmVySFRNTCA9IGlzTXBoID8gXG4gICAgICAgIE1hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC5ndXN0X21waCkrYDxzcGFuIGNsYXNzPSd3aW5kLXVuaXQnPm1waDwvc3Bhbj5gXG4gICAgICAgIDpNYXRoLnJvdW5kKGZvcmVjYXN0LmN1cnJlbnQuZ3VzdF9rcGgpK2A8c3BhbiBjbGFzcz0nd2luZC11bml0Jz5rbS9oPC9zcGFuPmBcblxuICAgIC8vIGhvdXJseVxuICAgIHNldEhvdXJseVZhbHVlcygpO1xuICAgIFxuICAgIC8vIHdlZWtcbiAgICBzZXREYWlseVZhbHVlcygpO1xufVxuXG5mdW5jdGlvbiBzZXRIb3VybHlWYWx1ZXMoKXtcbiAgICBob3VyRGl2cy5mb3JFYWNoKChkaXYsIGkpID0+e1xuICAgICAgICBsZXQge2hvdXJUb0Rpc3BsYXksIHN0YXR1cywgaWNvbiwgYWx0VGV4dCwgdGVtcEMsIHRlbXBGfSA9IEFQSS5nZXRIb3VybHlTdGF0cyhpKTtcblxuICAgICAgICBkaXYuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBob3VyVG9EaXNwbGF5O1xuICAgICAgICBkaXYuY2hpbGRyZW5bMV0uc3JjID0gaWNvbjtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzFdLmFsdCA9IGFsdFRleHQ7XG4gICAgICAgIGRpdi5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IHN0YXR1cztcbiAgICAgICAgZGl2LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gaXNDZWxzaXVzID8gXG4gICAgICAgICAgICB0ZW1wQysnwrBDJyA6XG4gICAgICAgICAgICB0ZW1wRisnwrBGJztcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBzZXREYWlseVZhbHVlcygpe1xuICAgIC8vY3JlYXRlIGEgbWV0aG9kIGluIEFQSSB3aGljaCByZXR1cm5zIHRoZSBuZWNlc3NhcnkgZGF0YVxuICAgIC8vIGZvciBuZXh0IDYgZGF5c1xuICAgIC8vIG1heSBuZWVkIGEgZGF0ZS10by1kYXkgaGVscGVyIG1ldGhvZFxuICAgIC8vIG1heWJlIHVzZSBtaW4vbWF4IHRlbXBcbiAgICAvLyBvdGhlcndpc2UgdGhlIHNhbWVcbiAgICBkYXlEaXZzLmZvckVhY2goKGRpdiwgaSk9PntcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGRheVRvRGlzcGxheSxcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBhbHRUZXh0LFxuICAgICAgICAgICAgaGlUZW1wQywgXG4gICAgICAgICAgICBsb3dUZW1wQyxcbiAgICAgICAgICAgIGhpVGVtcEYsXG4gICAgICAgICAgICBsb3dUZW1wRlxuICAgICAgICAgICAgfSA9IEFQSS5nZXREYWlseVN0YXRzKGkpO1xuICAgICAgICBcbiAgICAgICAgZGl2LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gZGF5VG9EaXNwbGF5O1xuICAgICAgICBkaXYuY2hpbGRyZW5bMV0uc3JjID0gaWNvbjtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzFdLmFsdCA9IGFsdFRleHQ7XG4gICAgICAgIGRpdi5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IHN0YXR1cztcbiAgICAgICAgZGl2LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gaXNDZWxzaXVzID8gXG4gICAgICAgIE1hdGgucm91bmQobG93VGVtcEMpKyfCsEMnIDpcbiAgICAgICAgTWF0aC5yb3VuZChsb3dUZW1wRikrJ8KwRic7XG4gICAgICAgIGRpdi5jaGlsZHJlbls0XS50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1cyA/IFxuICAgICAgICBNYXRoLnJvdW5kKGhpVGVtcEMpKyfCsEMnIDpcbiAgICAgICAgTWF0aC5yb3VuZChoaVRlbXBGKSsnwrBGJztcbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIHNldElzQ2Vsc2l1cyh2YWx1ZSl7XG4gICAgaXNDZWxzaXVzID0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNldElzTXBoKHZhbHVlKXtcbiAgICBpc01waCA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3JNc2cobXNnKXtcbiAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9IG1zZztcbn1cblxuXG5leHBvcnQge1xuICAgIHNldEFsbFZhbHVlcywgXG4gICAgaW5pdCwgXG4gICAgc2V0SXNDZWxzaXVzLCBcbiAgICBzZXRJc01waCxcbiAgICBkaXNwbGF5RXJyb3JNc2csXG4gICAgfTsiLCJpbXBvcnQgKiBhcyBBUEkgZnJvbSAnLi9hcGknO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vZG9tJztcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ib3ggPiBidXR0b24nKVxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJveCA+IGlucHV0Jyk7XG5jb25zdCBjZWxzaXVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2MtYnRuJyk7XG5jb25zdCBmYWhyZW5oZWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2YtYnRuJyk7XG5jb25zdCBtcGhCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXBoLWJ0bicpO1xuY29uc3Qga21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna20tYnRuJyk7XG5jb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheS1idG4nKTtcbmNvbnN0IHdlZWtCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vlay1idG4nKTtcbmNvbnN0IGhvdXJseURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG91cmx5LWZvcmVjYXN0Jyk7XG5jb25zdCBkYWlseURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktZm9yZWNhc3QnKTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VhcmNoQnRuQ2xpY2soKXtcbiAgICBsZXQgdXNlcklucHV0ID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgaWYodXNlcklucHV0ID09ICcnKSByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZygnaW5wdXQgJywgdXNlcklucHV0KTtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgQVBJLmdldEZvcmVjYXN0KHVzZXJJbnB1dCk7XG4gICAgXG4gICAgLy9uZWVkIHRvIGNoZWNrIHJlc3VsdCBmb3IgZXJyb3JzIF5cbiAgICBpZihyZXN1bHQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdibGxsb29vb3AnKTtcbiAgICB9IGVsc2V7XG4gICAgICAgIERPTS5zZXRBbGxWYWx1ZXMocmVzdWx0KTtcbiAgICB9XG5cbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0NlbHNpdXMoKXtcbiAgICBjZWxzaXVzQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgZmFocmVuaGVpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0ZhaHJlbmhlaXQoKXtcbiAgICBmYWhyZW5oZWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgY2Vsc2l1c0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDZWxzaXVzQnRuQ2xpY2soKXtcbiAgICBpZihjZWxzaXVzQnRuLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuICAgIGNoYW5nZVRvQ2Vsc2l1cygpO1xuICAgIC8vIG1ha2UgYSBuZXcgY2FsbD8gTm8uLi5cbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gQVBJLmdldExhdGVzdFdlYXRoZXJPYmooKTtcbiAgICBET00uc2V0SXNDZWxzaXVzKHRydWUpO1xuICAgIERPTS5zZXRBbGxWYWx1ZXMod2VhdGhlck9iaik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZhaHJlbmhlaXRCdG5DbGljaygpe1xuICAgIGlmKGZhaHJlbmhlaXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSByZXR1cm47XG4gICAgY2hhbmdlVG9GYWhyZW5oZWl0KCk7XG4gICAgLy8gbWFrZSBhIG5ldyBjYWxsPyBOby4uLlxuICAgIGNvbnN0IHdlYXRoZXJPYmogPSBBUEkuZ2V0TGF0ZXN0V2VhdGhlck9iaigpO1xuICAgIERPTS5zZXRJc0NlbHNpdXMoZmFsc2UpO1xuICAgIERPTS5zZXRBbGxWYWx1ZXMod2VhdGhlck9iaik7XG59XG5mdW5jdGlvbiBjaGFuZ2VUb01waCgpe1xuICAgIG1waEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGttQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRvS20oKXtcbiAgICBrbUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIG1waEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNcGhCdG5DbGljaygpe1xuICAgIGlmKG1waEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHJldHVybjtcbiAgICBjaGFuZ2VUb01waCgpO1xuICAgIC8vIG1ha2UgYSBuZXcgY2FsbD8gTm8uLi5cbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gQVBJLmdldExhdGVzdFdlYXRoZXJPYmooKTtcbiAgICBET00uc2V0SXNNcGgodHJ1ZSk7XG4gICAgRE9NLnNldEFsbFZhbHVlcyh3ZWF0aGVyT2JqKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlS21CdG5DbGljaygpe1xuICAgIGlmKGttQnRuLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuICAgIGNoYW5nZVRvS20oKTtcbiAgICAvLyBtYWtlIGEgbmV3IGNhbGw/IE5vLi4uXG4gICAgY29uc3Qgd2VhdGhlck9iaiA9IEFQSS5nZXRMYXRlc3RXZWF0aGVyT2JqKCk7XG4gICAgRE9NLnNldElzTXBoKGZhbHNlKTtcbiAgICBET00uc2V0QWxsVmFsdWVzKHdlYXRoZXJPYmopO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0hvdXJseUZvcmVjYXN0KCl7XG4gICAgaG91cmx5RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB0b2RheUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGRhaWx5RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB3ZWVrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9EYWlseUZvcmVjYXN0KCl7XG4gICAgZGFpbHlEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHdlZWtCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBob3VybHlEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHRvZGF5QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cbn1cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2VhcmNoQnRuQ2xpY2spO1xuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSk9PntcbiAgICBpZihlLmtleSA9PSAnRW50ZXInKSBoYW5kbGVTZWFyY2hCdG5DbGljaygpO1xufSlcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PntcbiAgICBET00uZGlzcGxheUVycm9yTXNnKCcnKTtcbn0pXG5jZWxzaXVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2Vsc2l1c0J0bkNsaWNrKTtcbmZhaHJlbmhlaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVGYWhyZW5oZWl0QnRuQ2xpY2spO1xubXBoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTXBoQnRuQ2xpY2spO1xua21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVLbUJ0bkNsaWNrKTtcbnRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVG9Ib3VybHlGb3JlY2FzdCk7XG53ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVG9EYWlseUZvcmVjYXN0KTsiLCJmdW5jdGlvbiBnZXRMb2NhbEhvdXIod2VhdGhlck9iail7XG4gIC8vIGhvdyBJIGN1dCBvdXQgdGhlIGhvdXIgaXMgY2F1c2luZyBwcm9ibGVtc1xuICAvLyB3aGVuIGl0J3MgYSBzaW5nbGUtZGlnaXQgaG91clxuICAvLyBzbyBpIGRlZmF1bHQgaXQgdG8gYSBkYXRlIGZvcm1hdFxuICAvLyBhbmQgY3V0IHRoZSBob3VyIGZyb20gdGhhdFxuXG4gIGxldCBkYXRlID0gbmV3IERhdGUod2VhdGhlck9iai5sb2NhdGlvbi5sb2NhbHRpbWUpO1xuICBsZXQgaG91ciA9IFN0cmluZyhkYXRlKS5zdWJzdHJpbmcoMTYsIDE4KTtcblxuICByZXR1cm4gaG91cjtcbn1cblxuZnVuY3Rpb24gZ2V0SG91clRvRGlzcGxheShob3VyT2JqKXtcbiAgICBsZXQgdGltZSA9IGhvdXJPYmoudGltZTtcbiAgICBsZXQgaG91ciA9IHRpbWUuc3Vic3RyaW5nKHRpbWUubGVuZ3RoLTUsIHRpbWUubGVuZ3RoKTtcblxuICAgIHJldHVybiBob3VyO1xufVxuXG4vLyBoZWxwZnVsIGZvciBzbGljaW5nLi4uXG4vLzAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyM1xuLy9UaHUgT2N0IDI2IDIwMjMgMTM6MTY6MDAgR01UKzAxMDBcblxuLy8gZXhjZWxsZW50IHBpZWNlIG9mIGhlbHBlciBjb2RlIEkgYm9ycm93ZWQgJiBtb2RpZmllZCBmcm9tXG4vLyAnaHR0cHM6Ly9naXRodWIuY29tL2JzY290dG56L3dlYXRoZXItYXBwL2Jsb2IvbWFpbi9zcmMvanMvdXRpbHMuanMnXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsIGRhdGVGb3JtYXQgPSAnZnVsbCcsIHdhbnRTaG9ydERheSA9IGZhbHNlKSB7XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IG5ldyBEYXRlKGRhdGUpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlU3RyaW5nLnNsaWNlKDQsIDgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlU3RyaW5nLnNsaWNlKDEzLCAxNSk7XG4gICAgbGV0IGhvdXIgPSBkYXRlU3RyaW5nLnNsaWNlKDE2LDE4KTtcbiAgICBsZXQgZGF5T2ZXZWVrID0gZGF0ZVN0cmluZy5zbGljZSgwLCAzKTtcbiAgICBsZXQgZGF5T2ZNb250aCA9IGRhdGVTdHJpbmcuc2xpY2UoOCwgMTApO1xuICAgIGxldCB0aW1lID0gZGF0ZVN0cmluZy5zbGljZSgxNiwyMSk7XG4gICAgbGV0IGRheVN1ZmZpeDtcbiAgICBsZXQgdGltZVN1ZmZpeDtcblxuICAgIC8vY29uc29sZS5sb2coJ2RhdGUgc3RyaW5nICcsIGRhdGVTdHJpbmcpO1xuICBcbiAgICAvLyBjaGFuZ2UgMDEgdG8gMSBldGNcbiAgICBpZiAoZGF5T2ZNb250aCA8IDEwKSB7XG4gICAgICBkYXlPZk1vbnRoID0gZGF5T2ZNb250aC5zbGljZSgxKTtcbiAgICB9XG4gIFxuICAgIC8vIGdlbmVyYXRlIGNvcmVjdCBkYXRlIGRheVN1ZmZpeFxuICAgIGlmIChkYXlPZk1vbnRoLnNsaWNlKC0xKSA9PT0gJzEnKSB7XG4gICAgICBkYXlTdWZmaXggPSAnc3QnO1xuICAgIH0gZWxzZSBpZiAoZGF5T2ZNb250aC5zbGljZSgtMSkgPT09ICcyJykge1xuICAgICAgZGF5U3VmZml4ID0gJ25kJztcbiAgICB9IGVsc2UgaWYgKGRheU9mTW9udGguc2xpY2UoLTEpID09PSAnMycpIHtcbiAgICAgIGRheVN1ZmZpeCA9ICdyZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVN1ZmZpeCA9ICd0aCc7XG4gICAgfVxuXG4gICAgLy8gZ2VuZXJhdGUgY29ycmVjdCB0aW1lIHN1ZmZpeFxuICAgIGlmKGhvdXIgPD0gMTIpe1xuICAgICAgdGltZVN1ZmZpeCA9ICdhbSc7XG4gICAgfWVsc2V7XG4gICAgICB0aW1lU3VmZml4ID0gJ3BtJztcbiAgICB9XG4gICAgLy8gYW5kIDEyaHIgZm9ybWF0XG4gICAgaWYoaG91ciA+IDEyKXtcbiAgICAgIGhvdXIgLT0gMTI7XG4gICAgICB0aW1lID0gU3RyaW5nKGhvdXIpLnNsaWNlKDAsMikrJzonK3RpbWUuc2xpY2UoMyw1KTtcbiAgICB9XG4gIFxuICBcbiAgICAvLyB0aG9zZSBwZXNreSAxMSwgMTIsIDEzIHRoc1xuICAgIGlmIChkYXlPZk1vbnRoID4gMyAmJiBkYXlPZk1vbnRoIDwgMjEpIHtcbiAgICAgIGRheVN1ZmZpeCA9ICd0aCc7XG4gICAgfVxuICBcbiAgICAvLyBjb252ZXJ0IHNob3J0IGRheSBuYW1lIHRvIGZ1bGwgZGF5IG5hbWVcbiAgICBpZighd2FudFNob3J0RGF5KXsgICAgXG4gICAgICAgIGlmIChkYXlPZldlZWsgPT09ICdNb24nKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdNb25kYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1R1ZScpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1R1ZXNkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1dlZCcpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1dlZG5lc2RheSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF5T2ZXZWVrID09PSAnVGh1Jykge1xuICAgICAgICBkYXlPZldlZWsgPSAnVGh1cnNkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ0ZyaScpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ0ZyaWRheSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF5T2ZXZWVrID09PSAnU2F0Jykge1xuICAgICAgICBkYXlPZldlZWsgPSAnU2F0dXJkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1N1bicpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1N1bmRheSc7XG4gICAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIHJldHVybiBvbmx5IHRoZSBkYXkgb2Ygd2Vla1xuICAgIGlmIChkYXRlRm9ybWF0ID09PSAnZGF5Jykge1xuICAgICAgcmV0dXJuIGRheU9mV2VlaztcbiAgICB9XG4gIFxuICAgIC8vIHJldHVybiBmdWxsIGRhdGUgc3RyaW5nXG4gICAgcmV0dXJuIGAke3RpbWV9JHt0aW1lU3VmZml4fSwgJHtkYXlPZldlZWt9LCAke2RheU9mTW9udGh9JHtkYXlTdWZmaXh9ICR7bW9udGh9ICcke3llYXJ9YDtcbiAgfVxuXG5leHBvcnQge1xuICAgIGdldExvY2FsSG91cixcbiAgICBnZXRIb3VyVG9EaXNwbGF5LFxuICAgIGZvcm1hdERhdGUgICAgXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgQVBJIGZyb20gJy4vbW9kdWxlcy9hcGknO1xuaW1wb3J0ICogYXMgSGVscGVyIGZyb20gJy4vbW9kdWxlcy9oZWxwZXJzJztcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL21vZHVsZXMvZG9tJztcbmltcG9ydCAnLi9tb2R1bGVzL2V2ZW50cyc7XG5cbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuLy8gc2V0IHNvbWUgcGxhY2Vob2xkZXIgdmFsdWVzIGZvciB3aGVuIHRoZSBwYWdlXG4vLyBsb2FkcyBmb3IgdGhlIGZpcnN0IHRpbWVcbmZ1bmN0aW9uIGRvbUluaXQoKXtcbiAgICBET00uaW5pdCgpO1xufVxuXG5kb21Jbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=