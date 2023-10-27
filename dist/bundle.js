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
}`, "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/_layout.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACYhB;;;EAGE,SAAA;EACA,UAAA;EACA,sBAAA;EAGA,iCAAA;ADXF;;ACcA;EACI,eAAA;ADXJ;;ACcA;EACI,aAAA;EACA,YAAA;EACA,wIAAA;EACA,sBAAA;EACA,2BAAA;EACA,iBAAA;EAEA,+BA1BS;EA2BT,YAAA;EAEJ;;SAAA;ADXA;;ACgBA;EAEI,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,mBAAA;EACA,WAAA;EACA,gBAAA;ADfJ;ACiBI;EAVJ;IAWQ,kBAAA;EDdN;AACF;ACkBI;EACI,sBAAA;ADhBR;ACkBQ;EAEI,sBAAA;ADjBZ;;ACuBA;EAII,aAAA;EACA,uBAAA;EACA,gBAAA;ADvBJ;ACyBI;EACI,YAAA;EACA,8BAAA;EACA,gBAAA;ADvBR;AC0BI;EACI,YAAA;EACA,YAAA;EACA,+BA/EG;EAgFH,0BAAA;EACA,yBAAA;ADxBR;AC0BQ;EACI,iCAAA;EACA,+BArFD;EAsFC,oBAAA;ADxBZ;AC2BQ;EACI,aAAA;ADzBZ;AC6BI;EACI,YAAA;EACA,WAAA;EACA,yDAAA;EACA,2BAAA;EACA,4BAAA;EACA,sBAAA;AD3BR;;ACgCA;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,yBAAA;EAEA,+BA9GS;EA+GT,yBAAA;AD9BJ;;ACiCA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EAGA,sCAhIO;EAiIP,mBAAA;EACA,4BAAA;ADhCJ;ACkCI;EACI,eAAA;EACA,kBAAA;ADhCR;ACoCI;EACI,+BAtIK;ADoGb;ACqCI;EACI,+BAxIK;EAyIL,iBAAA;ADnCR;ACsCI;EACI,+BA/IK;EAgJL,0BAAA;EACA,kBAAA;ADpCR;ACuCI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;ADrCR;ACuCQ;EACI,aAAA;ADrCZ;ACwCQ;EACI,kBAAA;EACA,eAAA;ADtCZ;AC6CI;EACI,aAAA;EACA,uBAAA;AD3CR;AC6CQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,iBAAA;EACA,UAAA;AD3CZ;AC6CY;EACI,WAAA;EACA,YAAA;AD3ChB;;ACiDA;EACI,uCAxLQ;AD0IZ;;ACiDA;EACI,uCA5LQ;EA6LR,qBAAA;AD9CJ;;ACiDA;EACI,+CAAA;EACA,mBAAA;AD9CJ;;ACmDA;EACI,aAAA;EACA,8BAAA;ADhDJ;ACkDI;EACI,WAAA;EACA,YAAA;EACA,qBAAA;EACA,sCAvNG;EAyNH,yBAAA;EACA,YAAA;ADjDR;ACoDI;EACI,YAAA;EACA,sCA/NG;EAgOH,gBAAA;ADlDR;;ACuDA;EACI,aAAA;EACA,uBAAA;EACA,kBAAA;ADpDJ;;ACuDA;EACI,aAAA;EACA,uBAAA;EACA,WAAA;ADpDJ;ACsDI;EACI,YAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,sCArPG;EAsPH,gBAAA;ADpDR;ACsDQ;EACI,YAAA;EACA,gBAAA;ADpDZ;;AC2DA;;EAEI,aAAA;EACA,sBAAA;EACA,WAAA;ADxDJ;AC0DI;;EACI,aAAA;ADvDR;AC0DI;;EACI,WAAA;EACA,YAAA;EAEA,aAAA;EACA,+CAAA;EACA,mBAAA;EACA,qBAAA;EACA,sCAnRG;AD2NX;AC0DQ;;EACI,WAAA;EACA,YAAA;ADvDZ;AC0DQ;;EACI,aAAA;ADvDZ;;AC2DA;EAEQ;IACK,qDAAA;EDzDX;EC0DU;IACQ,cAAA;EDxDlB;EC0DkB;IACI,aAAA;EDxDtB;EC4DU;IACI,aAAA;ED1Dd;AACF","sourcesContent":["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.5411764706), rgba(0, 0, 0, 0.5411764706)), url(\"../assets/peak-district.jpg\");\n  background-size: cover;\n  background-position: center;\n  padding-top: 1rem;\n  font-size: calc(0.8rem + 0.2vw);\n  color: white;\n  /*     @media screen and (max-height: 800px) {\n          background-size: cover;    \n      } */\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-inline: auto;\n  width: 100%;\n  max-height: 100%;\n}\n@media screen and (max-width: 600px) {\n  .container {\n    overflow-y: scroll;\n  }\n}\n.container > div {\n  width: min(80%, 800px);\n}\n.container > div.main-info, .container > div.options {\n  width: min(80%, 400px);\n}\n\n.search-box {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n.search-box * {\n  border: none;\n  border-bottom: 2px solid white;\n  background: none;\n}\n.search-box input {\n  height: 2rem;\n  color: white;\n  font-size: calc(0.9rem + 0.2vw);\n  padding: 0 0 0.1rem 0.8rem;\n  text-transform: uppercase;\n}\n.search-box input::placeholder {\n  color: rgba(255, 255, 255, 0.548);\n  font-size: calc(0.9rem + 0.2vw);\n  padding-left: 0.2rem;\n}\n.search-box input:focus {\n  outline: none;\n}\n.search-box button {\n  height: 2rem;\n  width: 2rem;\n  background-image: url(../assets/search-icon.png);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.error-msg {\n  display: flex;\n  justify-content: center;\n  min-height: 1rem;\n  margin-block: 0.2rem 1rem;\n  font-size: calc(0.8rem + 0.2vw);\n  color: rgb(255, 255, 255);\n}\n\n.main-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.151);\n  padding-block: 1rem;\n  border-radius: 10px 10px 0 0;\n}\n.main-info > div {\n  min-width: 100%;\n  text-align: center;\n}\n.main-info .city {\n  font-size: calc(1.2rem + 0.3vw);\n}\n.main-info .date {\n  font-size: calc(0.8rem + 0.2vw);\n  color: whitesmoke;\n}\n.main-info .status {\n  font-size: calc(1.2rem + 0.3vw);\n  text-transform: capitalize;\n  margin-top: 1.5rem;\n}\n.main-info .img-and-temp {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.main-info .img-and-temp img {\n  width: 6.5rem;\n}\n.main-info .img-and-temp .temperature {\n  position: relative;\n  font-size: 2rem;\n}\n.main-info .stats {\n  display: flex;\n  margin: 1.5rem 0 0.2rem;\n}\n.main-info .stats .stat-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  line-height: 1rem;\n  flex: 0.25;\n}\n.main-info .stats .stat-box img {\n  width: 30px;\n  height: 30px;\n}\n\n.wind-unit {\n  font-size: calc(0.8rem + 0.2vw - 0.2vw);\n}\n\n.temp-unit {\n  font-size: calc(0.8rem + 0.2vw - 0.2vw);\n  vertical-align: super;\n}\n\n.feels-like-temp-unit {\n  font-size: calc((0.8rem + 0.2vw - 0.2vw) * 0.9);\n  vertical-align: top;\n}\n\n.options {\n  display: flex;\n  justify-content: space-between;\n}\n.options button {\n  width: 60px;\n  height: 100%;\n  padding-block: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.151);\n  color: rgb(145, 145, 145);\n  border: none;\n}\n.options button.selected {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.151);\n  font-weight: 600;\n}\n\n.forecast {\n  display: grid;\n  grid-template: auto/1fr;\n  margin-block: 2rem;\n}\n\n.forecast-choice {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.forecast-choice button {\n  height: 35px;\n  padding: 0.5rem;\n  border: none;\n  color: grey;\n  background-color: rgba(0, 0, 0, 0.151);\n  font-weight: 100;\n}\n.forecast-choice button.selected {\n  color: white;\n  font-weight: 600;\n}\n\n.hourly-forecast,\n.daily-forecast {\n  display: none;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.hourly-forecast.active,\n.daily-forecast.active {\n  display: flex;\n}\n.hourly-forecast > div,\n.daily-forecast > div {\n  width: 100%;\n  height: 50px;\n  display: grid;\n  grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;\n  align-items: center;\n  justify-items: center;\n  background-color: rgba(0, 0, 0, 0.151);\n}\n.hourly-forecast > div img,\n.daily-forecast > div img {\n  width: 35px;\n  height: 35px;\n}\n.hourly-forecast > div .day__temperature_min,\n.daily-forecast > div .day__temperature_min {\n  display: none;\n}\n\n@media screen and (min-width: 700px) {\n  .daily-forecast > div {\n    grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr 0.3fr;\n  }\n  .daily-forecast > div .day__temperature_min {\n    display: block;\n  }\n  .daily-forecast > div .day__temperature_min::before {\n    content: \"▼ \";\n  }\n  .daily-forecast > div .day__temperature_max::before {\n    content: \"▲ \";\n  }\n}","@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap');\n\n$bg-color: rgba(0, 0, 0, 0.151);\n$bg-gradient: linear-gradient(to right, #0000008a, #0000008a);\n$bg-image: url('../assets/peak-district.jpg');\n\n// sizes\n$large-font: calc(1.2rem + 0.3vw);\n$med-font: calc(0.9rem + 0.2vw);\n$small-font: calc(0.8rem + 0.2vw);\n$unit-size: calc($small-font - 0.2vw);\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n\n  //font-family: 'Open Sans', sans-serif;\n  font-family: 'Roboto', sans-serif;\n}\n\nbutton{\n    cursor: pointer;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    background: $bg-gradient, $bg-image;\n    background-size: cover;\n    background-position: center;\n    padding-top: 1rem;\n\n    font-size: $small-font;\n    color: white;\n\n/*     @media screen and (max-height: 800px) {\n        background-size: cover;    \n    } */\n}\n\n.container{\n    //backdrop-filter: blur(2px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    //gap: 1rem;\n    margin-inline: auto;\n    width: 100%;\n    max-height: 100%;\n\n    @media screen and (max-width: 600px) {\n        overflow-y: scroll;\n\n    }\n    \n    \n    >div{\n        width: min(80%, 800px);\n\n        &.main-info,\n        &.options{\n            width: min(80%, 400px)\n        }\n    }\n}\n\n\n.search-box{\n    //background-color: rgba(0, 128, 0, 0.5);\n    //padding: 1rem 1.5rem;\n\n    display: flex;\n    justify-content: center;\n    margin-top: 1rem;\n\n    *{\n        border: none;\n        border-bottom: 2px solid white;\n        background: none;\n    }\n    \n    input{\n        height: 2rem;\n        color: white;\n        font-size: $med-font;\n        padding: 0 0 0.1rem 0.8rem;\n        text-transform: uppercase;\n        \n        &::placeholder{\n            color: rgba(255, 255, 255, 0.548);\n            font-size: $med-font;\n            padding-left: 0.2rem;\n        }\n\n        &:focus{\n            outline: none;\n        }\n    }\n\n    button{\n        height: 2rem;\n        width:  2rem;\n        background-image: url(../assets/search-icon.png);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n}\n\n.error-msg{\n    display: flex;\n    justify-content: center;\n    min-height: 1rem;\n    margin-block: 0.2rem 1rem;\n\n    font-size: $small-font;\n    color: rgb(255, 255, 255);\n}\n\n.main-info{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.2rem;\n\n    \n    background-color: $bg-color;\n    padding-block: 1rem;\n    border-radius: 10px 10px 0 0;\n\n    >div{\n        min-width: 100%;\n        text-align: center;\n        \n    }\n\n    .city{\n        font-size: $large-font;\n    }\n    \n    .date{\n        font-size: $small-font;\n        color: whitesmoke;\n    }\n    \n    .status{\n        font-size: $large-font;\n        text-transform: capitalize;\n        margin-top: 1.5rem;\n    }\n\n    .img-and-temp{\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n\n        img{\n            width: 6.5rem;\n        }\n        \n        .temperature{\n            position: relative;\n            font-size: 2rem;\n        }\n        \n    }\n    \n\n    \n    .stats{\n        display: flex;\n        margin: 1.5rem 0 0.2rem;\n    \n        .stat-box{\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 10px;\n            line-height: 1rem;\n            flex: 0.25;\n\n            img{\n                width: 30px;\n                height: 30px;\n            }            \n        }\n    }\n}\n\n.wind-unit{\n    font-size: $unit-size;\n}\n\n.temp-unit{\n    font-size: $unit-size;\n    vertical-align: super;\n}\n\n.feels-like-temp-unit{\n    font-size: calc($unit-size * 0.9);\n    vertical-align: top;\n}\n\n\n\n.options{\n    display: flex;\n    justify-content: space-between;\n\n    button{\n        width: 60px;\n        height: 100%;\n        padding-block: 0.2rem;\n        background-color: $bg-color;\n        \n        color: rgb(145, 145, 145);\n        border: none;\n    }\n    \n    button.selected{\n        color: white;\n        background-color:  $bg-color;\n        font-weight: 600;\n    }\n}\n\n\n.forecast{\n    display: grid;\n    grid-template: auto /  1fr;\n    margin-block: 2rem;\n}\n\n.forecast-choice{\n    display: flex;\n    justify-content: center;\n    gap: 0.5rem;\n\n    button {\n        height: 35px;\n        padding: 0.5rem;\n        border: none;\n        color: grey;\n        background-color:  $bg-color;\n        font-weight: 100;\n\n        &.selected{\n            color: white;\n            font-weight: 600;\n        }\n    }\n\n\n}\n\n.hourly-forecast,\n.daily-forecast{\n    display: none;\n    flex-direction: column;\n    gap: 0.2rem;\n\n    &.active{\n        display: flex;\n    }\n\n    >div{\n        width: 100%;\n        height: 50px;\n\n        display: grid;\n        grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;\n        align-items: center;\n        justify-items: center;\n        background-color:  $bg-color;;\n\n        img{\n            width: 35px;\n            height: 35px;\n        } \n        \n        .day__temperature_min{\n            display: none;\n        }\n    }    \n}\n@media screen and (min-width: 700px) {\n    .daily-forecast{\n        >div{ \n             grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr 0.3fr;\n            .day__temperature_min{\n                    display: block;\n\n                    &::before{\n                        content: '▼ ';\n                    }\n            }\n\n            .day__temperature_max::before{\n                content: '▲ ';\n\n            }\n         }\n    }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsa0lBQThDO0FBQzFGLDRDQUE0Qyw4SEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4SUFBOEk7QUFDOUkseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5R0FBeUcsbUNBQW1DO0FBQzVJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb0lBQW9JLFFBQVEsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9B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QUNBcUM7QUFDTztBQUNQO0FBQ1g7O0FBRUU7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQVE7QUFDWjs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy9tYWluLnNjc3M/NjljNyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZXZlbnRzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9wZWFrLWRpc3RyaWN0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9zZWFyY2gtaWNvbi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjU0MTE3NjQ3MDYpLCByZ2JhKDAsIDAsIDAsIDAuNTQxMTc2NDcwNikpLCB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLyogICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgIFxuICAgICAgfSAqL1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWlubGluZTogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cbi5jb250YWluZXIgPiBkaXYge1xuICB3aWR0aDogbWluKDgwJSwgODAwcHgpO1xufVxuLmNvbnRhaW5lciA+IGRpdi5tYWluLWluZm8sIC5jb250YWluZXIgPiBkaXYub3B0aW9ucyB7XG4gIHdpZHRoOiBtaW4oODAlLCA0MDBweCk7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4uc2VhcmNoLWJveCAqIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIGhlaWdodDogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IGNhbGMoMC45cmVtICsgMC4ydncpO1xuICBwYWRkaW5nOiAwIDAgMC4xcmVtIDAuOHJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zZWFyY2gtYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ4KTtcbiAgZm9udC1zaXplOiBjYWxjKDAuOXJlbSArIDAuMnZ3KTtcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG59XG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2VhcmNoLWJveCBidXR0b24ge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmVycm9yLW1zZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxcmVtO1xuICBtYXJnaW4tYmxvY2s6IDAuMnJlbSAxcmVtO1xuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncpO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4ubWFpbi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xufVxuLm1haW4taW5mbyA+IGRpdiB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4taW5mbyAuY2l0eSB7XG4gIGZvbnQtc2l6ZTogY2FsYygxLjJyZW0gKyAwLjN2dyk7XG59XG4ubWFpbi1pbmZvIC5kYXRlIHtcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3KTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG4ubWFpbi1pbmZvIC5zdGF0dXMge1xuICBmb250LXNpemU6IGNhbGMoMS4ycmVtICsgMC4zdncpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAgaW1nIHtcbiAgd2lkdGg6IDYuNXJlbTtcbn1cbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCAudGVtcGVyYXR1cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5tYWluLWluZm8gLnN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxLjVyZW0gMCAwLjJyZW07XG59XG4ubWFpbi1pbmZvIC5zdGF0cyAuc3RhdC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBmbGV4OiAwLjI1O1xufVxuLm1haW4taW5mbyAuc3RhdHMgLnN0YXQtYm94IGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi53aW5kLXVuaXQge1xuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncgLSAwLjJ2dyk7XG59XG5cbi50ZW1wLXVuaXQge1xuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncgLSAwLjJ2dyk7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn1cblxuLmZlZWxzLWxpa2UtdGVtcC11bml0IHtcbiAgZm9udC1zaXplOiBjYWxjKCgwLjhyZW0gKyAwLjJ2dyAtIDAuMnZ3KSAqIDAuOSk7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm9wdGlvbnMgYnV0dG9uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1ibG9jazogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcbiAgY29sb3I6IHJnYigxNDUsIDE0NSwgMTQ1KTtcbiAgYm9yZGVyOiBub25lO1xufVxuLm9wdGlvbnMgYnV0dG9uLnNlbGVjdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZvcmVjYXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0by8xZnI7XG4gIG1hcmdpbi1ibG9jazogMnJlbTtcbn1cblxuLmZvcmVjYXN0LWNob2ljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5mb3JlY2FzdC1jaG9pY2UgYnV0dG9uIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IGdyZXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLmZvcmVjYXN0LWNob2ljZSBidXR0b24uc2VsZWN0ZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5ob3VybHktZm9yZWNhc3QsXG4uZGFpbHktZm9yZWNhc3Qge1xuICBkaXNwbGF5OiBub25lO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuMnJlbTtcbn1cbi5ob3VybHktZm9yZWNhc3QuYWN0aXZlLFxuLmRhaWx5LWZvcmVjYXN0LmFjdGl2ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2LFxuLmRhaWx5LWZvcmVjYXN0ID4gZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjI1ZnIgMC40ZnIgMC44ZnIgMC4zZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XG59XG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2IGltZyxcbi5kYWlseS1mb3JlY2FzdCA+IGRpdiBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmhvdXJseS1mb3JlY2FzdCA+IGRpdiAuZGF5X190ZW1wZXJhdHVyZV9taW4sXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWluIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgLmRhaWx5LWZvcmVjYXN0ID4gZGl2IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAwLjRmciAwLjhmciAwLjNmciAwLjNmcjtcbiAgfVxuICAuZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWluOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi4pa8IFwiO1xuICB9XG4gIC5kYWlseS1mb3JlY2FzdCA+IGRpdiAuZGF5X190ZW1wZXJhdHVyZV9tYXg6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCLilrIgXCI7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19sYXlvdXQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNZaEI7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFHQSxpQ0FBQTtBRFhGOztBQ2NBO0VBQ0ksZUFBQTtBRFhKOztBQ2NBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx3SUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUVBLCtCQTFCUztFQTJCVCxZQUFBO0VBRUo7O1NBQUE7QURYQTs7QUNnQkE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FEZko7QUNpQkk7RUFWSjtJQVdRLGtCQUFBO0VEZE47QUFDRjtBQ2tCSTtFQUNJLHNCQUFBO0FEaEJSO0FDa0JRO0VBRUksc0JBQUE7QURqQlo7O0FDdUJBO0VBSUksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUR2Qko7QUN5Qkk7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBRHZCUjtBQzBCSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBL0VHO0VBZ0ZILDBCQUFBO0VBQ0EseUJBQUE7QUR4QlI7QUMwQlE7RUFDSSxpQ0FBQTtFQUNBLCtCQXJGRDtFQXNGQyxvQkFBQTtBRHhCWjtBQzJCUTtFQUNJLGFBQUE7QUR6Qlo7QUM2Qkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FEM0JSOztBQ2dDQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFFQSwrQkE5R1M7RUErR1QseUJBQUE7QUQ5Qko7O0FDaUNBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBR0Esc0NBaElPO0VBaUlQLG1CQUFBO0VBQ0EsNEJBQUE7QURoQ0o7QUNrQ0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QURoQ1I7QUNvQ0k7RUFDSSwrQkF0SUs7QURvR2I7QUNxQ0k7RUFDSSwrQkF4SUs7RUF5SUwsaUJBQUE7QURuQ1I7QUNzQ0k7RUFDSSwrQkEvSUs7RUFnSkwsMEJBQUE7RUFDQSxrQkFBQTtBRHBDUjtBQ3VDSTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FEckNSO0FDdUNRO0VBQ0ksYUFBQTtBRHJDWjtBQ3dDUTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBRHRDWjtBQzZDSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBRDNDUjtBQzZDUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBRDNDWjtBQzZDWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FEM0NoQjs7QUNpREE7RUFDSSx1Q0F4TFE7QUQwSVo7O0FDaURBO0VBQ0ksdUNBNUxRO0VBNkxSLHFCQUFBO0FEOUNKOztBQ2lEQTtFQUNJLCtDQUFBO0VBQ0EsbUJBQUE7QUQ5Q0o7O0FDbURBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FEaERKO0FDa0RJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQXZORztFQXlOSCx5QkFBQTtFQUNBLFlBQUE7QURqRFI7QUNvREk7RUFDSSxZQUFBO0VBQ0Esc0NBL05HO0VBZ09ILGdCQUFBO0FEbERSOztBQ3VEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FEcERKOztBQ3VEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QURwREo7QUNzREk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBclBHO0VBc1BILGdCQUFBO0FEcERSO0FDc0RRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FEcERaOztBQzJEQTs7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FEeERKO0FDMERJOztFQUNJLGFBQUE7QUR2RFI7QUMwREk7O0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBblJHO0FEMk5YO0FDMERROztFQUNJLFdBQUE7RUFDQSxZQUFBO0FEdkRaO0FDMERROztFQUNJLGFBQUE7QUR2RFo7O0FDMkRBO0VBRVE7SUFDSyxxREFBQTtFRHpEWDtFQzBEVTtJQUNRLGNBQUE7RUR4RGxCO0VDMERrQjtJQUNJLGFBQUE7RUR4RHRCO0VDNERVO0lBQ0ksYUFBQTtFRDFEZDtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANTAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXFxcIik7XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjU0MTE3NjQ3MDYpLCByZ2JhKDAsIDAsIDAsIDAuNTQxMTc2NDcwNikpLCB1cmwoXFxcIi4uL2Fzc2V0cy9wZWFrLWRpc3RyaWN0LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIC8qICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgXFxuICAgICAgfSAqL1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgfVxcbn1cXG4uY29udGFpbmVyID4gZGl2IHtcXG4gIHdpZHRoOiBtaW4oODAlLCA4MDBweCk7XFxufVxcbi5jb250YWluZXIgPiBkaXYubWFpbi1pbmZvLCAuY29udGFpbmVyID4gZGl2Lm9wdGlvbnMge1xcbiAgd2lkdGg6IG1pbig4MCUsIDQwMHB4KTtcXG59XFxuXFxuLnNlYXJjaC1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLnNlYXJjaC1ib3ggKiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4uc2VhcmNoLWJveCBpbnB1dCB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IGNhbGMoMC45cmVtICsgMC4ydncpO1xcbiAgcGFkZGluZzogMCAwIDAuMXJlbSAwLjhyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDgpO1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOXJlbSArIDAuMnZ3KTtcXG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbn1cXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc2VhcmNoLWJveCBidXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3NlYXJjaC1pY29uLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmVycm9yLW1zZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgbWFyZ2luLWJsb2NrOiAwLjJyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyk7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4ubWFpbi1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XFxuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG59XFxuLm1haW4taW5mbyA+IGRpdiB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLWluZm8gLmNpdHkge1xcbiAgZm9udC1zaXplOiBjYWxjKDEuMnJlbSArIDAuM3Z3KTtcXG59XFxuLm1haW4taW5mbyAuZGF0ZSB7XFxuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcbi5tYWluLWluZm8gLnN0YXR1cyB7XFxuICBmb250LXNpemU6IGNhbGMoMS4ycmVtICsgMC4zdncpO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxufVxcbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAgaW1nIHtcXG4gIHdpZHRoOiA2LjVyZW07XFxufVxcbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCAudGVtcGVyYXR1cmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAwLjJyZW07XFxufVxcbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIGZsZXg6IDAuMjU7XFxufVxcbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCBpbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi53aW5kLXVuaXQge1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3IC0gMC4ydncpO1xcbn1cXG5cXG4udGVtcC11bml0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyAtIDAuMnZ3KTtcXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXG59XFxuXFxuLmZlZWxzLWxpa2UtdGVtcC11bml0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygoMC44cmVtICsgMC4ydncgLSAwLjJ2dykgKiAwLjkpO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm9wdGlvbnMgYnV0dG9uIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy1ibG9jazogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XFxuICBjb2xvcjogcmdiKDE0NSwgMTQ1LCAxNDUpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4ub3B0aW9ucyBidXR0b24uc2VsZWN0ZWQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6IGF1dG8vMWZyO1xcbiAgbWFyZ2luLWJsb2NrOiAycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtY2hvaWNlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG4uZm9yZWNhc3QtY2hvaWNlIGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogZ3JleTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xcbiAgZm9udC13ZWlnaHQ6IDEwMDtcXG59XFxuLmZvcmVjYXN0LWNob2ljZSBidXR0b24uc2VsZWN0ZWQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmhvdXJseS1mb3JlY2FzdCxcXG4uZGFpbHktZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuMnJlbTtcXG59XFxuLmhvdXJseS1mb3JlY2FzdC5hY3RpdmUsXFxuLmRhaWx5LWZvcmVjYXN0LmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2LFxcbi5kYWlseS1mb3JlY2FzdCA+IGRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAwLjRmciAwLjhmciAwLjNmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcXG59XFxuLmhvdXJseS1mb3JlY2FzdCA+IGRpdiBpbWcsXFxuLmRhaWx5LWZvcmVjYXN0ID4gZGl2IGltZyB7XFxuICB3aWR0aDogMzVweDtcXG4gIGhlaWdodDogMzVweDtcXG59XFxuLmhvdXJseS1mb3JlY2FzdCA+IGRpdiAuZGF5X190ZW1wZXJhdHVyZV9taW4sXFxuLmRhaWx5LWZvcmVjYXN0ID4gZGl2IC5kYXlfX3RlbXBlcmF0dXJlX21pbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgLmRhaWx5LWZvcmVjYXN0ID4gZGl2IHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjI1ZnIgMC40ZnIgMC44ZnIgMC4zZnIgMC4zZnI7XFxuICB9XFxuICAuZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWluIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICAuZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWluOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4pa8IFxcXCI7XFxuICB9XFxuICAuZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWF4OjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi4payIFxcXCI7XFxuICB9XFxufVwiLFwiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANTAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuXFxuJGJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcXG4kYmctZ3JhZGllbnQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDAwMDhhLCAjMDAwMDAwOGEpO1xcbiRiZy1pbWFnZTogdXJsKCcuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGcnKTtcXG5cXG4vLyBzaXplc1xcbiRsYXJnZS1mb250OiBjYWxjKDEuMnJlbSArIDAuM3Z3KTtcXG4kbWVkLWZvbnQ6IGNhbGMoMC45cmVtICsgMC4ydncpO1xcbiRzbWFsbC1mb250OiBjYWxjKDAuOHJlbSArIDAuMnZ3KTtcXG4kdW5pdC1zaXplOiBjYWxjKCRzbWFsbC1mb250IC0gMC4ydncpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgLy9mb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQ6ICRiZy1ncmFkaWVudCwgJGJnLWltYWdlO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcblxcbiAgICBmb250LXNpemU6ICRzbWFsbC1mb250O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuLyogICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgXFxuICAgIH0gKi9cXG59XFxuXFxuLmNvbnRhaW5lcntcXG4gICAgLy9iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLy9nYXA6IDFyZW07XFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcblxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcblxcbiAgICB9XFxuICAgIFxcbiAgICBcXG4gICAgPmRpdntcXG4gICAgICAgIHdpZHRoOiBtaW4oODAlLCA4MDBweCk7XFxuXFxuICAgICAgICAmLm1haW4taW5mbyxcXG4gICAgICAgICYub3B0aW9uc3tcXG4gICAgICAgICAgICB3aWR0aDogbWluKDgwJSwgNDAwcHgpXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuLnNlYXJjaC1ib3h7XFxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XFxuICAgIC8vcGFkZGluZzogMXJlbSAxLjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcblxcbiAgICAqe1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgaW5wdXR7XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6ICRtZWQtZm9udDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjFyZW0gMC44cmVtO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIFxcbiAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XFxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDgpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1lZC1mb250O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpmb2N1c3tcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIHdpZHRoOiAgMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvc2VhcmNoLWljb24ucG5nKTtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB9XFxuXFxufVxcblxcbi5lcnJvci1tc2d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tYmxvY2s6IDAuMnJlbSAxcmVtO1xcblxcbiAgICBmb250LXNpemU6ICRzbWFsbC1mb250O1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4ubWFpbi1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuMnJlbTtcXG5cXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG5cXG4gICAgPmRpdntcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5jaXR5e1xcbiAgICAgICAgZm9udC1zaXplOiAkbGFyZ2UtZm9udDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmRhdGV7XFxuICAgICAgICBmb250LXNpemU6ICRzbWFsbC1mb250O1xcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5zdGF0dXN7XFxuICAgICAgICBmb250LXNpemU6ICRsYXJnZS1mb250O1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmltZy1hbmQtdGVtcHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgd2lkdGg6IDYuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLnRlbXBlcmF0dXJle1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgfVxcbiAgICBcXG5cXG4gICAgXFxuICAgIC5zdGF0c3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBtYXJnaW46IDEuNXJlbSAwIDAuMnJlbTtcXG4gICAgXFxuICAgICAgICAuc3RhdC1ib3h7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgICAgIGZsZXg6IDAuMjU7XFxuXFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4ud2luZC11bml0e1xcbiAgICBmb250LXNpemU6ICR1bml0LXNpemU7XFxufVxcblxcbi50ZW1wLXVuaXR7XFxuICAgIGZvbnQtc2l6ZTogJHVuaXQtc2l6ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xcbn1cXG5cXG4uZmVlbHMtbGlrZS10ZW1wLXVuaXR7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygkdW5pdC1zaXplICogMC45KTtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuXFxuXFxuLm9wdGlvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nLWJsb2NrOiAwLjJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuICAgICAgICBcXG4gICAgICAgIGNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgIGJ1dHRvbi5zZWxlY3RlZHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkYmctY29sb3I7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxufVxcblxcblxcbi5mb3JlY2FzdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogYXV0byAvICAxZnI7XFxuICAgIG1hcmdpbi1ibG9jazogMnJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWNob2ljZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMC41cmVtO1xcblxcbiAgICBidXR0b24ge1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgY29sb3I6IGdyZXk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJGJnLWNvbG9yO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG5cXG4gICAgICAgICYuc2VsZWN0ZWR7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG5cXG59XFxuXFxuLmhvdXJseS1mb3JlY2FzdCxcXG4uZGFpbHktZm9yZWNhc3R7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMC4ycmVtO1xcblxcbiAgICAmLmFjdGl2ZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG5cXG4gICAgPmRpdntcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcblxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yNWZyIDAuNGZyIDAuOGZyIDAuM2ZyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkYmctY29sb3I7O1xcblxcbiAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIH0gXFxuICAgICAgICBcXG4gICAgICAgIC5kYXlfX3RlbXBlcmF0dXJlX21pbntcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9ICAgIFxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xcbiAgICAuZGFpbHktZm9yZWNhc3R7XFxuICAgICAgICA+ZGl2eyBcXG4gICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjI1ZnIgMC40ZnIgMC44ZnIgMC4zZnIgMC4zZnI7XFxuICAgICAgICAgICAgLmRheV9fdGVtcGVyYXR1cmVfbWlue1xcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuXFxuICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmV7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ+KWvCAnO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuZGF5X190ZW1wZXJhdHVyZV9tYXg6OmJlZm9yZXtcXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+KWsiAnO1xcblxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICB9XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuaW1wb3J0ICogYXMgSGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgZGlzcGxheUVycm9yTXNnIH0gZnJvbSBcIi4vZG9tXCI7XG5cblxuLy9jb25zdCBDVVJSRU5UX1VSTCA9ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NWI3MzYyZTg4MzhlNDRiZGE5MTEyNTMyNDIzMTcxMCc7XG5jb25zdCBGT1JFQ0FTVF9VUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NWI3MzYyZTg4MzhlNDRiZGE5MTEyNTMyNDIzMTcxMCZkYXlzPTYnO1xuXG4vLyBeXiB0aGUgZm9yZWNhc3QgdXJsIGNhbGwgYWxzbyBpbmNsdWRlcyB0aGUgY3VycmVudCB3ZWF0aGVyXG4vLyBzbyBubyBuZWVkIGZvciB0d28gc2VycGVyYXRlIGNhbGxzXG5cbi8vIHNvIHdlIGFsd2F5cyBrbm93IGN1cnJlbnQgc2VhcmNoZWQgbG9jYXRpb25cbmxldCBsYXN0TG9jYXRpb247XG5cbi8vIHN0b3JlIHRoZSBtb3N0IHJlY2VudCB3ZWF0aGVyIGNhbGwgc28gd2UgZG9uJ3Rcbi8vIGhhdmUgdG8gbWFrZSB1bm5lY2Vzc2FyeSBjYWxsc1xubGV0IGxhc3RGb3JlY2FzdDtcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChsb2NhdGlvbj0na2lsY29ybWFjJyl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtGT1JFQ0FTVF9VUkx9JnE9JHtsb2NhdGlvbn1gKTtcbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgcmVzcG9uc2UgaXMgZmluZVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvck1zZyhcIlNvcnJ5LCB3ZSdyZSBoYXZpbmcgdHJvdWJsZS4uLlwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFnZSBub3QgZm91bmQnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3JNc2coXCJTb3JyeSwgcHJvYmxlbXMgd2l0aCB0aGUgc2VydmVyLi4uXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJ2ZXIgZXJyb3InKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yTXNnKFwiU29ycnksIGNhbid0IGZpbmQgc3VjaCBhIHBsYWNlLi4uXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgUmVxdWVzdCcpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3JNc2coXCJTb3JyeSwgd2UncmUgaGF2aW5nIHRyb3VibGUuLi5cIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgfVxuICAgICAgICBsZXQgZm9yZWNhc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgbGFzdExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIGxhc3RGb3JlY2FzdCA9IGZvcmVjYXN0O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3JlY2FzdCBjYWxsZWQgJywgZm9yZWNhc3QpO1xuXG4gICAgICAgIHJldHVybiBmb3JlY2FzdFxuXG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuXG59XG5cbi8qIGFzeW5jIGZ1bmN0aW9uIGdldERhdGUoKXtcbiAgICBsZXQgd2VhdGhlck9iaiA9IGF3YWl0IGdldEZvcmVjYXN0KGxhc3RMb2NhdGlvbik7XG5cbiAgICBsZXQgZGF0ZSA9IHdlYXRoZXJPYmoubG9jYXRpb24ubG9jYWx0aW1lO1xuXG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgXCJlZWVlIGRkIE1NTSB5eSBISDptbVwiKTtcbn0gKi9cblxuLy8gZm9yIHNvbWUgcmVhc29uLCBjaGFuY2Ugb2YgcmFpbiBpcyBzdG9yZWQgZGVlcCBpblxuLy8gZm9yZWNhc3QgPiBmb3JlY2FzdGRheSA+IDAgPiBob3VyID4gLi4uaG91cnMgPiBoZXJlXG4vLyBidXQgd2UgbmVlZCB0aGUgY3VycmVudCBob3VyIHRvIG1hdGNoIGl0IHVwIFxuLy8gc28gd2UgbWFrZSB1c2Ugb2YgYSBoZWxwZXIgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBcbi8vIHRoZSBjdXJyZW50IGxvY2FsIGhvdXJcbmZ1bmN0aW9uIGdldENoYW5jZU9mUmFpbigpe1xuICAgIGxldCBsb2NhbEhvdXIgPSAgTnVtYmVyKEhlbHBlcnMuZ2V0TG9jYWxIb3VyKGxhc3RGb3JlY2FzdCkpOyBcbiAgICBjb25zb2xlLmxvZygnbG9jYWwgaG91ciAnLCBsb2NhbEhvdXIubGVuZ3RoLCBsb2NhbEhvdXIpO1xuICAgIGNvbnNvbGUubG9nKCdsb2NhbCBob3VyIGNpdHknLCBsYXN0Rm9yZWNhc3QpO1xuICAgIGxldCBjaGFuY2VPZlJhaW4gPSBsYXN0Rm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltsb2NhbEhvdXJdLmNoYW5jZV9vZl9yYWluO1xuXG4gICAgcmV0dXJuIGNoYW5jZU9mUmFpbjtcbn1cblxuLy8gSE9VUkxZIFNUQVRTXG4vLyB0aGlzIGlzIHRoZSB0cmlja2llc3QgJiBidXNpZXN0IG9uZSwgSSBuZWVkIHRvIGdldCBob3VybHkgc3RhdHNcbi8vIGFuZCBkaXNwbGF5IHRoZW0gaW4gM2hyIGluY3JlbWVudHMgZnJvbSB0aGUgY3VycmVudCBob3VyLi4uXG4vLyB0aGlzIHRha2VzIGluIHRoZSBob3VyIGFuZCBnZXRzIG5lY2Vzc2FyeSBzdGF0cyBhcyBhbiBvYmplY3RcblxuZnVuY3Rpb24gZ2V0SG91cmx5U3RhdHMoaW5jcmVtZW50TWFnbml0dWRlPTApe1xuXG4gICAgbGV0IGhvdXIgPSBOdW1iZXIoSGVscGVycy5nZXRMb2NhbEhvdXIobGFzdEZvcmVjYXN0KSk7XG4gICAgaG91ciArPSAoMyppbmNyZW1lbnRNYWduaXR1ZGUpO1xuICAgIGxldCBkYXkgPSAwO1xuXG4gICAgLy8gY2hhbmdlIHRvIG5leHQgZGF5IHdoZW4gd2UgcGFzcyBtaWRuaWdodFxuICAgIC8vIGFuZCBmaXggdGhlIGhvdXIgaS5lLiAyNiB3aWxsIGJlIDI2LTI0ID0gMmFtXG4gICAgaWYoaG91ciA+IDIzKXtcbiAgICAgICAgaG91ciAtPSAyNDtcbiAgICAgICAgZGF5ID0gMTtcbiAgICB9XG5cbiAgICBsZXQgaG91ck9iaiA9IGxhc3RGb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmhvdXJbaG91cl07XG4gICAgLy8gdGVzdGluZ1xuXG4gICAgbGV0IGhvdXJUb0Rpc3BsYXkgPSBIZWxwZXJzLmdldEhvdXJUb0Rpc3BsYXkoaG91ck9iaik7XG4gICAgbGV0IHN0YXR1cyA9IGhvdXJPYmouY29uZGl0aW9uLnRleHQ7XG4gICAgbGV0IGljb24gPSBob3VyT2JqLmNvbmRpdGlvbi5pY29uO1xuICAgIGxldCBhbHRUZXh0ID0gaG91ck9iai5jb25kaXRpb24udGV4dDtcbiAgICBsZXQgdGVtcEMgPSBob3VyT2JqLnRlbXBfYztcbiAgICBsZXQgdGVtcEYgPSBob3VyT2JqLnRlbXBfZjtcblxuICAgIC8vIHJvdW5kLW9mZiB0ZW1wc1xuICAgIHRlbXBDID0gTWF0aC5yb3VuZCh0ZW1wQyk7XG4gICAgdGVtcEYgPSBNYXRoLnJvdW5kKHRlbXBGKTtcblxuICAgIHJldHVybntcbiAgICAgICAgaG91clRvRGlzcGxheSwgXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgaWNvbixcbiAgICAgICAgYWx0VGV4dCwgXG4gICAgICAgIHRlbXBDLCBcbiAgICAgICAgdGVtcEZcbiAgICB9O1xuIFxufVxuXG5mdW5jdGlvbiBnZXREYWlseVN0YXRzKGluZGV4KXtcbiAgICBsZXQgZGFpbHlPYmogPSBsYXN0Rm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaW5kZXhdO1xuXG4gICAgLy8gaGVscGVyIHRvIGdldCBuaWNlIGRhdGVcbiAgICBsZXQgZGF5VG9EaXNwbGF5O1xuICAgIGlmKGluZGV4ID09PSAwKXtcbiAgICAgICAgZGF5VG9EaXNwbGF5ID0gJ1RvZGF5JztcbiAgICB9ZWxzZXtcbiAgICAgICAgZGF5VG9EaXNwbGF5ID0gSGVscGVycy5mb3JtYXREYXRlKGRhaWx5T2JqLmRhdGUsICdkYXknLCB0cnVlKTtcbiAgICB9XG4gICAgbGV0IHN0YXR1cyA9IGRhaWx5T2JqLmRheS5jb25kaXRpb24udGV4dDtcbiAgICBsZXQgaWNvbiA9IGRhaWx5T2JqLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICBsZXQgYWx0VGV4dCA9IGRhaWx5T2JqLmRheS5jb25kaXRpb24udGV4dDtcbiAgICBsZXQgaGlUZW1wQyA9IGRhaWx5T2JqLmRheS5tYXh0ZW1wX2M7XG4gICAgbGV0IGxvd1RlbXBDID0gZGFpbHlPYmouZGF5Lm1pbnRlbXBfYztcbiAgICBsZXQgaGlUZW1wRiA9IGRhaWx5T2JqLmRheS5tYXh0ZW1wX2Y7XG4gICAgbGV0IGxvd1RlbXBGID0gZGFpbHlPYmouZGF5Lm1pbnRlbXBfZjtcblxuICAgIHJldHVybntcbiAgICAgICAgZGF5VG9EaXNwbGF5LFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGljb24sXG4gICAgICAgIGFsdFRleHQsXG4gICAgICAgIGhpVGVtcEMsXG4gICAgICAgIGxvd1RlbXBDLFxuICAgICAgICBoaVRlbXBGLFxuICAgICAgICBsb3dUZW1wRixcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldExhdGVzdFdlYXRoZXJPYmooKXtcbiAgICByZXR1cm4gbGFzdEZvcmVjYXN0O1xufVxuXG5leHBvcnQge1xuICAgIGdldEZvcmVjYXN0LFxuICAgIGdldENoYW5jZU9mUmFpbiwgXG4gICAgZ2V0TGF0ZXN0V2VhdGhlck9iaixcbiAgICBnZXRIb3VybHlTdGF0cyxcbiAgICBnZXREYWlseVN0YXRzLFxufTsiLCJpbXBvcnQgKiBhcyBBUEkgZnJvbSAnLi9hcGknO1xuaW1wb3J0ICogYXMgSGVscGVyIGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgZmVlbHNMaWtlSW1nIGZyb20gJy4uL2Fzc2V0cy9mZWVscy1saWtlLnBuZyc7XG5pbXBvcnQgcmFpbkltZyBmcm9tICcuLi9hc3NldHMvcmFpbi1kcm9wcy5wbmcnO1xuaW1wb3J0IGh1bWlkaXR5SW1nIGZyb20gJy4uL2Fzc2V0cy9odW1pZGl0eS5wbmcnO1xuaW1wb3J0IHdpbmRJbWcgZnJvbSAnLi4vYXNzZXRzL3dpbmQucG5nJztcbmltcG9ydCBjbG91ZEljb24gZnJvbSAnLi4vYXNzZXRzL2Nsb3VkLWljb24ucG5nJztcblxuY29uc3QgZmF2aWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmsnKTtcbmNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1zZycpO1xuY29uc3Qgd2VhdGhlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWltZz5pbWcnKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpO1xuY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cycpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbmNvbnN0IGZlZWxzTGlrZUltZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UtaW1nJyk7XG5jb25zdCBjaGFuY2VPZlJhaW5JbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFuY2Utb2YtcmFpbi1pbWcnKTtcbmNvbnN0IGh1bWlkaXR5SW1nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHktaW1nJyk7XG5jb25zdCB3aW5kSW1nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1pbWcnKTtcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVscy1saWtlJyk7XG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFpbicpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZCcpO1xuXG4vLyBob3VybHkgZWxlbWVudHNcbmNvbnN0IGhvdXJEaXZzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VybHktZm9yZWNhc3QgPiBkaXYnKV07XG4vLyBkYWlseSBlbGVtZW50c1xuY29uc3QgZGF5RGl2cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktZm9yZWNhc3QgPiBkaXYnKV07XG5cbi8vIGRlZmF1bHQgdmFsdWVzIGFyZSBDZWxzaXVzICYgTXBoXG5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2Vsc2l1cycpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21waCcpO1xuXG5mYXZpY29uLmhyZWYgPSBjbG91ZEljb247XG5cbi8vIHNldCBpY29ucyBmb3IgdGhlIHN0YXQgYm94ZXMgXG5mZWVsc0xpa2VJbWdFbC5zcmMgPSBmZWVsc0xpa2VJbWc7XG5jaGFuY2VPZlJhaW5JbWdFbC5zcmMgPSByYWluSW1nO1xuaHVtaWRpdHlJbWdFbC5zcmMgPSBodW1pZGl0eUltZztcbndpbmRJbWdFbC5zcmMgPSB3aW5kSW1nO1xuXG5sZXQgaXNDZWxzaXVzID0gdHJ1ZTtcbmxldCBpc01waCA9IHRydWU7XG5cblxuLy8gaW5pdGlhbGl6ZSB0aGUgcGFnZSBpY29ucyBhbmQgZGVmYXVsdCB2YWx1ZXNcbmFzeW5jIGZ1bmN0aW9uIGluaXQoKXtcbiAgICAvLyBzZXQgZmF2aWNvbiBhbmQgc29tZSBwYWdlIGljb25zIFxuICAgIGZhdmljb24uaHJlZiA9IGNsb3VkSWNvbjtcbiAgICBmZWVsc0xpa2VJbWdFbC5zcmMgPSBmZWVsc0xpa2VJbWc7XG4gICAgY2hhbmNlT2ZSYWluSW1nRWwuc3JjID0gcmFpbkltZztcbiAgICBodW1pZGl0eUltZ0VsLnNyYyA9IGh1bWlkaXR5SW1nO1xuICAgIHdpbmRJbWdFbC5zcmMgPSB3aW5kSW1nO1xuXG4gICAgLy8gbG9hZCAmIHNldCB3ZWF0aGVyIGluZm8gZnJvbSAna2lsY29ybWFjJ1xuICAgIC8vIGFzIHBsYWNlaG9sZGVyIGluZm9cbiAgICBsZXQgZm9yZWNhc3QgPSBhd2FpdCBBUEkuZ2V0Rm9yZWNhc3QoKTtcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdCk7XG4gICAgc2V0QWxsVmFsdWVzKGZvcmVjYXN0KTtcblxufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRBbGxWYWx1ZXMoZm9yZWNhc3Qpe1xuICAgIC8vIG1haW4gaW5mb1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gZm9yZWNhc3QubG9jYXRpb24ubmFtZTtcbiAgICB3ZWF0aGVySW1nLnNyYyA9IGZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgd2VhdGhlckltZy5hbHQgPSBmb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBIZWxwZXIuZm9ybWF0RGF0ZShmb3JlY2FzdC5sb2NhdGlvbi5sb2NhbHRpbWUpO1xuICAgIHRlbXAuaW5uZXJIVE1MID0gaXNDZWxzaXVzID8gXG4gICAgICAgIE1hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC50ZW1wX2MpK2A8c3BhbiBjbGFzcz0ndGVtcC11bml0Jz7CsEM8L3NwYW4+YFxuICAgICAgICA6TWF0aC5yb3VuZChmb3JlY2FzdC5jdXJyZW50LnRlbXBfZikrYDxzcGFuIGNsYXNzPSd0ZW1wLXVuaXQnPsKwRjwvc3Bhbj5gO1xuXG4gICAgc3RhdHVzLnRleHRDb250ZW50ID0gZm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24udGV4dDtcblxuICAgIGZlZWxzTGlrZS5pbm5lckhUTUwgPSBpc0NlbHNpdXMgPyBcbiAgICAgICAgTWF0aC5yb3VuZChmb3JlY2FzdC5jdXJyZW50LmZlZWxzbGlrZV9jKStgPHNwYW4gY2xhc3M9J2ZlZWxzLWxpa2UtdGVtcC11bml0Jz7CsEM8L3NwYW4+YFxuICAgICAgICA6TWF0aC5yb3VuZChmb3JlY2FzdC5jdXJyZW50LmZlZWxzbGlrZV9mKStgPHNwYW4gY2xhc3M9J2ZlZWxzLWxpa2UtdGVtcC11bml0Jz7CsEY8L3NwYW4+YDtcblxuICAgIGNoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IEFQSS5nZXRDaGFuY2VPZlJhaW4oKSsnJSc7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5jdXJyZW50LnRlbXBfYysnJSc7XG4gICAgd2luZC5pbm5lckhUTUwgPSBpc01waCA/IFxuICAgICAgICBNYXRoLnJvdW5kKGZvcmVjYXN0LmN1cnJlbnQuZ3VzdF9tcGgpK2A8c3BhbiBjbGFzcz0nd2luZC11bml0Jz5tcGg8L3NwYW4+YFxuICAgICAgICA6TWF0aC5yb3VuZChmb3JlY2FzdC5jdXJyZW50Lmd1c3Rfa3BoKStgPHNwYW4gY2xhc3M9J3dpbmQtdW5pdCc+a20vaDwvc3Bhbj5gXG5cbiAgICAvLyBob3VybHlcbiAgICBzZXRIb3VybHlWYWx1ZXMoKTtcbiAgICBcbiAgICAvLyB3ZWVrXG4gICAgc2V0RGFpbHlWYWx1ZXMoKTtcbn1cblxuZnVuY3Rpb24gc2V0SG91cmx5VmFsdWVzKCl7XG4gICAgaG91ckRpdnMuZm9yRWFjaCgoZGl2LCBpKSA9PntcbiAgICAgICAgbGV0IHtob3VyVG9EaXNwbGF5LCBzdGF0dXMsIGljb24sIGFsdFRleHQsIHRlbXBDLCB0ZW1wRn0gPSBBUEkuZ2V0SG91cmx5U3RhdHMoaSk7XG5cbiAgICAgICAgZGl2LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gaG91clRvRGlzcGxheTtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzFdLnNyYyA9IGljb247XG4gICAgICAgIGRpdi5jaGlsZHJlblsxXS5hbHQgPSBhbHRUZXh0O1xuICAgICAgICBkaXYuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBzdGF0dXM7XG4gICAgICAgIGRpdi5jaGlsZHJlblszXS50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1cyA/IFxuICAgICAgICAgICAgdGVtcEMrJ8KwQycgOlxuICAgICAgICAgICAgdGVtcEYrJ8KwRic7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc2V0RGFpbHlWYWx1ZXMoKXtcbiAgICAvL2NyZWF0ZSBhIG1ldGhvZCBpbiBBUEkgd2hpY2ggcmV0dXJucyB0aGUgbmVjZXNzYXJ5IGRhdGFcbiAgICAvLyBmb3IgbmV4dCA2IGRheXNcbiAgICAvLyBtYXkgbmVlZCBhIGRhdGUtdG8tZGF5IGhlbHBlciBtZXRob2RcbiAgICAvLyBtYXliZSB1c2UgbWluL21heCB0ZW1wXG4gICAgLy8gb3RoZXJ3aXNlIHRoZSBzYW1lXG4gICAgZGF5RGl2cy5mb3JFYWNoKChkaXYsIGkpPT57XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBkYXlUb0Rpc3BsYXksXG4gICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgYWx0VGV4dCxcbiAgICAgICAgICAgIGhpVGVtcEMsIFxuICAgICAgICAgICAgbG93VGVtcEMsXG4gICAgICAgICAgICBoaVRlbXBGLFxuICAgICAgICAgICAgbG93VGVtcEZcbiAgICAgICAgICAgIH0gPSBBUEkuZ2V0RGFpbHlTdGF0cyhpKTtcbiAgICAgICAgXG4gICAgICAgIGRpdi5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGRheVRvRGlzcGxheTtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzFdLnNyYyA9IGljb247XG4gICAgICAgIGRpdi5jaGlsZHJlblsxXS5hbHQgPSBhbHRUZXh0O1xuICAgICAgICBkaXYuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBzdGF0dXM7XG4gICAgICAgIGRpdi5jaGlsZHJlblszXS50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1cyA/IFxuICAgICAgICBNYXRoLnJvdW5kKGxvd1RlbXBDKSsnwrBDJyA6XG4gICAgICAgIE1hdGgucm91bmQobG93VGVtcEYpKyfCsEYnO1xuICAgICAgICBkaXYuY2hpbGRyZW5bNF0udGV4dENvbnRlbnQgPSBpc0NlbHNpdXMgPyBcbiAgICAgICAgTWF0aC5yb3VuZChoaVRlbXBDKSsnwrBDJyA6XG4gICAgICAgIE1hdGgucm91bmQoaGlUZW1wRikrJ8KwRic7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBzZXRJc0NlbHNpdXModmFsdWUpe1xuICAgIGlzQ2Vsc2l1cyA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBzZXRJc01waCh2YWx1ZSl7XG4gICAgaXNNcGggPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVycm9yTXNnKG1zZyl7XG4gICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBtc2c7XG59XG5cblxuZXhwb3J0IHtcbiAgICBzZXRBbGxWYWx1ZXMsIFxuICAgIGluaXQsIFxuICAgIHNldElzQ2Vsc2l1cywgXG4gICAgc2V0SXNNcGgsXG4gICAgZGlzcGxheUVycm9yTXNnLFxuICAgIH07IiwiaW1wb3J0ICogYXMgQVBJIGZyb20gJy4vYXBpJztcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL2RvbSc7XG5cbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYm94ID4gYnV0dG9uJylcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ib3ggPiBpbnB1dCcpO1xuY29uc3QgY2Vsc2l1c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjLWJ0bicpO1xuY29uc3QgZmFocmVuaGVpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmLWJ0bicpO1xuY29uc3QgbXBoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21waC1idG4nKTtcbmNvbnN0IGttQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ttLWJ0bicpO1xuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktYnRuJyk7XG5jb25zdCB3ZWVrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWstYnRuJyk7XG5jb25zdCBob3VybHlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1mb3JlY2FzdCcpO1xuY29uc3QgZGFpbHlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LWZvcmVjYXN0Jyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaEJ0bkNsaWNrKCl7XG4gICAgbGV0IHVzZXJJbnB1dCA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGlmKHVzZXJJbnB1dCA9PSAnJykgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coJ2lucHV0ICcsIHVzZXJJbnB1dCk7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IEFQSS5nZXRGb3JlY2FzdCh1c2VySW5wdXQpO1xuICAgIFxuICAgIC8vbmVlZCB0byBjaGVjayByZXN1bHQgZm9yIGVycm9ycyBeXG4gICAgaWYocmVzdWx0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICBjb25zb2xlLmxvZygnYmxsbG9vb29wJyk7XG4gICAgfSBlbHNle1xuICAgICAgICBET00uc2V0QWxsVmFsdWVzKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9DZWxzaXVzKCl7XG4gICAgY2Vsc2l1c0J0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGZhaHJlbmhlaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9GYWhyZW5oZWl0KCl7XG4gICAgZmFocmVuaGVpdEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGNlbHNpdXNCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2Vsc2l1c0J0bkNsaWNrKCl7XG4gICAgaWYoY2Vsc2l1c0J0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHJldHVybjtcbiAgICBjaGFuZ2VUb0NlbHNpdXMoKTtcbiAgICAvLyBtYWtlIGEgbmV3IGNhbGw/IE5vLi4uXG4gICAgY29uc3Qgd2VhdGhlck9iaiA9IEFQSS5nZXRMYXRlc3RXZWF0aGVyT2JqKCk7XG4gICAgRE9NLnNldElzQ2Vsc2l1cyh0cnVlKTtcbiAgICBET00uc2V0QWxsVmFsdWVzKHdlYXRoZXJPYmopO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGYWhyZW5oZWl0QnRuQ2xpY2soKXtcbiAgICBpZihmYWhyZW5oZWl0QnRuLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuICAgIGNoYW5nZVRvRmFocmVuaGVpdCgpO1xuICAgIC8vIG1ha2UgYSBuZXcgY2FsbD8gTm8uLi5cbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gQVBJLmdldExhdGVzdFdlYXRoZXJPYmooKTtcbiAgICBET00uc2V0SXNDZWxzaXVzKGZhbHNlKTtcbiAgICBET00uc2V0QWxsVmFsdWVzKHdlYXRoZXJPYmopO1xufVxuZnVuY3Rpb24gY2hhbmdlVG9NcGgoKXtcbiAgICBtcGhCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBrbUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0ttKCl7XG4gICAga21CdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBtcGhCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTXBoQnRuQ2xpY2soKXtcbiAgICBpZihtcGhCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSByZXR1cm47XG4gICAgY2hhbmdlVG9NcGgoKTtcbiAgICAvLyBtYWtlIGEgbmV3IGNhbGw/IE5vLi4uXG4gICAgY29uc3Qgd2VhdGhlck9iaiA9IEFQSS5nZXRMYXRlc3RXZWF0aGVyT2JqKCk7XG4gICAgRE9NLnNldElzTXBoKHRydWUpO1xuICAgIERPTS5zZXRBbGxWYWx1ZXMod2VhdGhlck9iaik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUttQnRuQ2xpY2soKXtcbiAgICBpZihrbUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHJldHVybjtcbiAgICBjaGFuZ2VUb0ttKCk7XG4gICAgLy8gbWFrZSBhIG5ldyBjYWxsPyBOby4uLlxuICAgIGNvbnN0IHdlYXRoZXJPYmogPSBBUEkuZ2V0TGF0ZXN0V2VhdGhlck9iaigpO1xuICAgIERPTS5zZXRJc01waChmYWxzZSk7XG4gICAgRE9NLnNldEFsbFZhbHVlcyh3ZWF0aGVyT2JqKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9Ib3VybHlGb3JlY2FzdCgpe1xuICAgIGhvdXJseURpc3BsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgdG9kYXlCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBkYWlseURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgd2Vla0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRvRGFpbHlGb3JlY2FzdCgpe1xuICAgIGRhaWx5RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB3ZWVrQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgaG91cmx5RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB0b2RheUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXG59XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNlYXJjaEJ0bkNsaWNrKTtcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpPT57XG4gICAgaWYoZS5rZXkgPT0gJ0VudGVyJykgaGFuZGxlU2VhcmNoQnRuQ2xpY2soKTtcbn0pXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XG4gICAgRE9NLmRpc3BsYXlFcnJvck1zZygnJyk7XG59KVxuY2Vsc2l1c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNlbHNpdXNCdG5DbGljayk7XG5mYWhyZW5oZWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRmFocmVuaGVpdEJ0bkNsaWNrKTtcbm1waEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1waEJ0bkNsaWNrKTtcbmttQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlS21CdG5DbGljayk7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRvSG91cmx5Rm9yZWNhc3QpO1xud2Vla0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRvRGFpbHlGb3JlY2FzdCk7IiwiZnVuY3Rpb24gZ2V0TG9jYWxIb3VyKHdlYXRoZXJPYmope1xuICAvLyBob3cgSSBjdXQgb3V0IHRoZSBob3VyIGlzIGNhdXNpbmcgcHJvYmxlbXNcbiAgLy8gd2hlbiBpdCdzIGEgc2luZ2xlLWRpZ2l0IGhvdXJcbiAgLy8gc28gaSBkZWZhdWx0IGl0IHRvIGEgZGF0ZSBmb3JtYXRcbiAgLy8gYW5kIGN1dCB0aGUgaG91ciBmcm9tIHRoYXRcblxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHdlYXRoZXJPYmoubG9jYXRpb24ubG9jYWx0aW1lKTtcbiAgbGV0IGhvdXIgPSBTdHJpbmcoZGF0ZSkuc3Vic3RyaW5nKDE2LCAxOCk7XG5cbiAgcmV0dXJuIGhvdXI7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJUb0Rpc3BsYXkoaG91ck9iail7XG4gICAgbGV0IHRpbWUgPSBob3VyT2JqLnRpbWU7XG4gICAgbGV0IGhvdXIgPSB0aW1lLnN1YnN0cmluZyh0aW1lLmxlbmd0aC01LCB0aW1lLmxlbmd0aCk7XG5cbiAgICByZXR1cm4gaG91cjtcbn1cblxuLy8gaGVscGZ1bCBmb3Igc2xpY2luZy4uLlxuLy8wMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjNcbi8vVGh1IE9jdCAyNiAyMDIzIDEzOjE2OjAwIEdNVCswMTAwXG5cbi8vIGV4Y2VsbGVudCBwaWVjZSBvZiBoZWxwZXIgY29kZSBJIGJvcnJvd2VkICYgbW9kaWZpZWQgZnJvbVxuLy8gJ2h0dHBzOi8vZ2l0aHViLmNvbS9ic2NvdHRuei93ZWF0aGVyLWFwcC9ibG9iL21haW4vc3JjL2pzL3V0aWxzLmpzJ1xuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlLCBkYXRlRm9ybWF0ID0gJ2Z1bGwnLCB3YW50U2hvcnREYXkgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBuZXcgRGF0ZShkYXRlKS50b1N0cmluZygpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZVN0cmluZy5zbGljZSg0LCA4KTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZVN0cmluZy5zbGljZSgxMywgMTUpO1xuICAgIGxldCBob3VyID0gZGF0ZVN0cmluZy5zbGljZSgxNiwxOCk7XG4gICAgbGV0IGRheU9mV2VlayA9IGRhdGVTdHJpbmcuc2xpY2UoMCwgMyk7XG4gICAgbGV0IGRheU9mTW9udGggPSBkYXRlU3RyaW5nLnNsaWNlKDgsIDEwKTtcbiAgICBsZXQgdGltZSA9IGRhdGVTdHJpbmcuc2xpY2UoMTYsMjEpO1xuICAgIGxldCBkYXlTdWZmaXg7XG4gICAgbGV0IHRpbWVTdWZmaXg7XG5cbiAgICAvL2NvbnNvbGUubG9nKCdkYXRlIHN0cmluZyAnLCBkYXRlU3RyaW5nKTtcbiAgXG4gICAgLy8gY2hhbmdlIDAxIHRvIDEgZXRjXG4gICAgaWYgKGRheU9mTW9udGggPCAxMCkge1xuICAgICAgZGF5T2ZNb250aCA9IGRheU9mTW9udGguc2xpY2UoMSk7XG4gICAgfVxuICBcbiAgICAvLyBnZW5lcmF0ZSBjb3JlY3QgZGF0ZSBkYXlTdWZmaXhcbiAgICBpZiAoZGF5T2ZNb250aC5zbGljZSgtMSkgPT09ICcxJykge1xuICAgICAgZGF5U3VmZml4ID0gJ3N0JztcbiAgICB9IGVsc2UgaWYgKGRheU9mTW9udGguc2xpY2UoLTEpID09PSAnMicpIHtcbiAgICAgIGRheVN1ZmZpeCA9ICduZCc7XG4gICAgfSBlbHNlIGlmIChkYXlPZk1vbnRoLnNsaWNlKC0xKSA9PT0gJzMnKSB7XG4gICAgICBkYXlTdWZmaXggPSAncmQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlTdWZmaXggPSAndGgnO1xuICAgIH1cblxuICAgIC8vIGdlbmVyYXRlIGNvcnJlY3QgdGltZSBzdWZmaXhcbiAgICBpZihob3VyIDw9IDEyKXtcbiAgICAgIHRpbWVTdWZmaXggPSAnYW0nO1xuICAgIH1lbHNle1xuICAgICAgdGltZVN1ZmZpeCA9ICdwbSc7XG4gICAgfVxuICAgIC8vIGFuZCAxMmhyIGZvcm1hdFxuICAgIGlmKGhvdXIgPiAxMil7XG4gICAgICBob3VyIC09IDEyO1xuICAgICAgdGltZSA9IFN0cmluZyhob3VyKS5zbGljZSgwLDIpKyc6Jyt0aW1lLnNsaWNlKDMsNSk7XG4gICAgfVxuICBcbiAgXG4gICAgLy8gdGhvc2UgcGVza3kgMTEsIDEyLCAxMyB0aHNcbiAgICBpZiAoZGF5T2ZNb250aCA+IDMgJiYgZGF5T2ZNb250aCA8IDIxKSB7XG4gICAgICBkYXlTdWZmaXggPSAndGgnO1xuICAgIH1cbiAgXG4gICAgLy8gY29udmVydCBzaG9ydCBkYXkgbmFtZSB0byBmdWxsIGRheSBuYW1lXG4gICAgaWYoIXdhbnRTaG9ydERheSl7ICAgIFxuICAgICAgICBpZiAoZGF5T2ZXZWVrID09PSAnTW9uJykge1xuICAgICAgICBkYXlPZldlZWsgPSAnTW9uZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdUdWUnKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdUdWVzZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdXZWQnKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdXZWRuZXNkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1RodScpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1RodXJzZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdGcmknKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdGcmlkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1NhdCcpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1NhdHVyZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdTdW4nKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdTdW5kYXknO1xuICAgICAgICB9XG4gICAgfVxuICBcbiAgICAvLyByZXR1cm4gb25seSB0aGUgZGF5IG9mIHdlZWtcbiAgICBpZiAoZGF0ZUZvcm1hdCA9PT0gJ2RheScpIHtcbiAgICAgIHJldHVybiBkYXlPZldlZWs7XG4gICAgfVxuICBcbiAgICAvLyByZXR1cm4gZnVsbCBkYXRlIHN0cmluZ1xuICAgIHJldHVybiBgJHt0aW1lfSR7dGltZVN1ZmZpeH0sICR7ZGF5T2ZXZWVrfSwgJHtkYXlPZk1vbnRofSR7ZGF5U3VmZml4fSAke21vbnRofSAnJHt5ZWFyfWA7XG4gIH1cblxuZXhwb3J0IHtcbiAgICBnZXRMb2NhbEhvdXIsXG4gICAgZ2V0SG91clRvRGlzcGxheSxcbiAgICBmb3JtYXREYXRlICAgIFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIEFQSSBmcm9tICcuL21vZHVsZXMvYXBpJztcbmltcG9ydCAqIGFzIEhlbHBlciBmcm9tICcuL21vZHVsZXMvaGVscGVycyc7XG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9tb2R1bGVzL2RvbSc7XG5pbXBvcnQgJy4vbW9kdWxlcy9ldmVudHMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbi8vIHNldCBzb21lIHBsYWNlaG9sZGVyIHZhbHVlcyBmb3Igd2hlbiB0aGUgcGFnZVxuLy8gbG9hZHMgZm9yIHRoZSBmaXJzdCB0aW1lXG5mdW5jdGlvbiBkb21Jbml0KCl7XG4gICAgRE9NLmluaXQoKTtcbn1cblxuZG9tSW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9