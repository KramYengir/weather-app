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
___CSS_LOADER_EXPORT___.push([module.id, `*,
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
}
@media screen and (max-height: 800px) {
  body {
    background-size: auto;
  }
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
  width: min(80%, 600px);
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
}`, "",{"version":3,"sources":["webpack://./src/styles/_layout.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AASA;;;EAGE,SAAA;EACA,UAAA;EACA,sBAAA;EAGA,iCAAA;ACTF;;ADYA;EACI,eAAA;ACTJ;;ADYA;EACI,aAAA;EACA,YAAA;EACA,wIAAA;EACA,sBAAA;EACA,2BAAA;EACA,iBAAA;EAEA,+BA1BS;EA2BT,YAAA;ACVJ;ADYI;EAXJ;IAYQ,qBAAA;ECTN;AACF;;ADYA;EAEI,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,mBAAA;EACA,WAAA;EACA,gBAAA;ACXJ;ADaI;EAVJ;IAWQ,kBAAA;ECVN;AACF;ADcI;EACI,sBAAA;ACZR;ADcQ;EAEI,sBAAA;ACbZ;;ADmBA;EAII,aAAA;EACA,uBAAA;EACA,gBAAA;ACnBJ;ADqBI;EACI,YAAA;EACA,8BAAA;EACA,gBAAA;ACnBR;ADsBI;EACI,YAAA;EACA,YAAA;EACA,+BA/EG;EAgFH,0BAAA;EACA,yBAAA;ACpBR;ADsBQ;EACI,iCAAA;EACA,+BArFD;EAsFC,oBAAA;ACpBZ;ADuBQ;EACI,aAAA;ACrBZ;ADyBI;EACI,YAAA;EACA,WAAA;EACA,yDAAA;EACA,2BAAA;EACA,4BAAA;EACA,sBAAA;ACvBR;;AD4BA;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,yBAAA;EAEA,+BA9GS;EA+GT,yBAAA;AC1BJ;;AD6BA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EAGA,sCA9HO;EA+HP,mBAAA;EACA,4BAAA;AC5BJ;AD8BI;EACI,eAAA;EACA,kBAAA;AC5BR;ADgCI;EACI,+BAtIK;ACwGb;ADiCI;EACI,+BAxIK;EAyIL,iBAAA;AC/BR;ADkCI;EACI,+BA/IK;EAgJL,0BAAA;EACA,kBAAA;AChCR;ADmCI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;ACjCR;ADmCQ;EACI,aAAA;ACjCZ;ADoCQ;EACI,kBAAA;EACA,eAAA;AClCZ;ADyCI;EACI,aAAA;EACA,uBAAA;ACvCR;ADyCQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,iBAAA;EACA,UAAA;ACvCZ;ADyCY;EACI,WAAA;EACA,YAAA;ACvChB;;AD6CA;EACI,uCAxLQ;AC8IZ;;AD6CA;EACI,uCA5LQ;EA6LR,qBAAA;AC1CJ;;AD6CA;EACI,+CAAA;EACA,mBAAA;AC1CJ;;AD+CA;EACI,aAAA;EACA,8BAAA;AC5CJ;AD8CI;EACI,WAAA;EACA,YAAA;EACA,qBAAA;EACA,sCArNG;EAuNH,yBAAA;EACA,YAAA;AC7CR;ADgDI;EACI,YAAA;EACA,sCA7NG;EA8NH,gBAAA;AC9CR;;ADmDA;EACI,aAAA;EACA,uBAAA;EACA,kBAAA;AChDJ;;ADmDA;EACI,aAAA;EACA,uBAAA;EACA,WAAA;AChDJ;ADkDI;EACI,YAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,sCAnPG;EAoPH,gBAAA;AChDR;ADkDQ;EACI,YAAA;EACA,gBAAA;AChDZ;;ADuDA;;EAEI,aAAA;EACA,sBAAA;EACA,WAAA;ACpDJ;ADsDI;;EACI,aAAA;ACnDR;ADsDI;;EACI,WAAA;EACA,YAAA;EAEA,aAAA;EACA,+CAAA;EACA,mBAAA;EACA,qBAAA;EACA,sCAjRG;AC6NX;ADsDQ;;EACI,WAAA;EACA,YAAA;ACnDZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap');\n$bg-color: rgba(0, 0, 0, 0.151);\n\n// sizes\n$large-font: calc(1.2rem + 0.3vw);\n$med-font: calc(0.9rem + 0.2vw);\n$small-font: calc(0.8rem + 0.2vw);\n$unit-size: calc($small-font - 0.2vw);\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n\n  //font-family: 'Open Sans', sans-serif;\n  font-family: 'Roboto', sans-serif;\n}\n\nbutton{\n    cursor: pointer;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    background: linear-gradient(to right, #0000008a, #0000008a), url('../assets/peak-district.jpg');\n    background-size: cover;\n    background-position: center;\n    padding-top: 1rem;\n\n    font-size: $small-font;\n    color: white;\n\n    @media screen and (max-height: 800px) {\n        background-size: auto;    \n    }\n}\n\n.container{\n    //backdrop-filter: blur(2px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    //gap: 1rem;\n    margin-inline: auto;\n    width: 100%;\n    max-height: 100%;\n\n    @media screen and (max-width: 600px) {\n        overflow-y: scroll;\n\n    }\n    \n    \n    >div{\n        width: min(80%, 600px);\n\n        &.main-info,\n        &.options{\n            width: min(80%, 400px)\n        }\n    }\n}\n\n\n.search-box{\n    //background-color: rgba(0, 128, 0, 0.5);\n    //padding: 1rem 1.5rem;\n\n    display: flex;\n    justify-content: center;\n    margin-top: 1rem;\n\n    *{\n        border: none;\n        border-bottom: 2px solid white;\n        background: none;\n    }\n    \n    input{\n        height: 2rem;\n        color: white;\n        font-size: $med-font;\n        padding: 0 0 0.1rem 0.8rem;\n        text-transform: uppercase;\n        \n        &::placeholder{\n            color: rgba(255, 255, 255, 0.548);\n            font-size: $med-font;\n            padding-left: 0.2rem;\n        }\n\n        &:focus{\n            outline: none;\n        }\n    }\n\n    button{\n        height: 2rem;\n        width:  2rem;\n        background-image: url(../assets/search-icon.png);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n}\n\n.error-msg{\n    display: flex;\n    justify-content: center;\n    min-height: 1rem;\n    margin-block: 0.2rem 1rem;\n\n    font-size: $small-font;\n    color: rgb(255, 255, 255);\n}\n\n.main-info{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.2rem;\n\n    \n    background-color: $bg-color;\n    padding-block: 1rem;\n    border-radius: 10px 10px 0 0;\n\n    >div{\n        min-width: 100%;\n        text-align: center;\n        \n    }\n\n    .city{\n        font-size: $large-font;\n    }\n    \n    .date{\n        font-size: $small-font;\n        color: whitesmoke;\n    }\n    \n    .status{\n        font-size: $large-font;\n        text-transform: capitalize;\n        margin-top: 1.5rem;\n    }\n\n    .img-and-temp{\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n\n        img{\n            width: 6.5rem;\n        }\n        \n        .temperature{\n            position: relative;\n            font-size: 2rem;\n        }\n        \n    }\n    \n\n    \n    .stats{\n        display: flex;\n        margin: 1.5rem 0 0.2rem;\n    \n        .stat-box{\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 10px;\n            line-height: 1rem;\n            flex: 0.25;\n\n            img{\n                width: 30px;\n                height: 30px;\n            }            \n        }\n    }\n}\n\n.wind-unit{\n    font-size: $unit-size;\n}\n\n.temp-unit{\n    font-size: $unit-size;\n    vertical-align: super;\n}\n\n.feels-like-temp-unit{\n    font-size: calc($unit-size * 0.9);\n    vertical-align: top;\n}\n\n\n\n.options{\n    display: flex;\n    justify-content: space-between;\n\n    button{\n        width: 60px;\n        height: 100%;\n        padding-block: 0.2rem;\n        background-color: $bg-color;\n        \n        color: rgb(145, 145, 145);\n        border: none;\n    }\n    \n    button.selected{\n        color: white;\n        background-color:  $bg-color;\n        font-weight: 600;\n    }\n}\n\n\n.forecast{\n    display: grid;\n    grid-template: auto /  1fr;\n    margin-block: 2rem;\n}\n\n.forecast-choice{\n    display: flex;\n    justify-content: center;\n    gap: 0.5rem;\n\n    button {\n        height: 35px;\n        padding: 0.5rem;\n        border: none;\n        color: grey;\n        background-color:  $bg-color;\n        font-weight: 100;\n\n        &.selected{\n            color: white;\n            font-weight: 600;\n        }\n    }\n\n\n}\n\n.hourly-forecast,\n.daily-forecast{\n    display: none;\n    flex-direction: column;\n    gap: 0.2rem;\n\n    &.active{\n        display: flex;\n    }\n\n    >div{\n        width: 100%;\n        height: 50px;\n\n        display: grid;\n        grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;\n        align-items: center;\n        justify-items: center;\n        background-color:  $bg-color;;\n\n        img{\n            width: 35px;\n            height: 35px;\n        }   \n    }    \n}","@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.5411764706), rgba(0, 0, 0, 0.5411764706)), url(\"../assets/peak-district.jpg\");\n  background-size: cover;\n  background-position: center;\n  padding-top: 1rem;\n  font-size: calc(0.8rem + 0.2vw);\n  color: white;\n}\n@media screen and (max-height: 800px) {\n  body {\n    background-size: auto;\n  }\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-inline: auto;\n  width: 100%;\n  max-height: 100%;\n}\n@media screen and (max-width: 600px) {\n  .container {\n    overflow-y: scroll;\n  }\n}\n.container > div {\n  width: min(80%, 600px);\n}\n.container > div.main-info, .container > div.options {\n  width: min(80%, 400px);\n}\n\n.search-box {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n.search-box * {\n  border: none;\n  border-bottom: 2px solid white;\n  background: none;\n}\n.search-box input {\n  height: 2rem;\n  color: white;\n  font-size: calc(0.9rem + 0.2vw);\n  padding: 0 0 0.1rem 0.8rem;\n  text-transform: uppercase;\n}\n.search-box input::placeholder {\n  color: rgba(255, 255, 255, 0.548);\n  font-size: calc(0.9rem + 0.2vw);\n  padding-left: 0.2rem;\n}\n.search-box input:focus {\n  outline: none;\n}\n.search-box button {\n  height: 2rem;\n  width: 2rem;\n  background-image: url(../assets/search-icon.png);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.error-msg {\n  display: flex;\n  justify-content: center;\n  min-height: 1rem;\n  margin-block: 0.2rem 1rem;\n  font-size: calc(0.8rem + 0.2vw);\n  color: rgb(255, 255, 255);\n}\n\n.main-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.151);\n  padding-block: 1rem;\n  border-radius: 10px 10px 0 0;\n}\n.main-info > div {\n  min-width: 100%;\n  text-align: center;\n}\n.main-info .city {\n  font-size: calc(1.2rem + 0.3vw);\n}\n.main-info .date {\n  font-size: calc(0.8rem + 0.2vw);\n  color: whitesmoke;\n}\n.main-info .status {\n  font-size: calc(1.2rem + 0.3vw);\n  text-transform: capitalize;\n  margin-top: 1.5rem;\n}\n.main-info .img-and-temp {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.main-info .img-and-temp img {\n  width: 6.5rem;\n}\n.main-info .img-and-temp .temperature {\n  position: relative;\n  font-size: 2rem;\n}\n.main-info .stats {\n  display: flex;\n  margin: 1.5rem 0 0.2rem;\n}\n.main-info .stats .stat-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  line-height: 1rem;\n  flex: 0.25;\n}\n.main-info .stats .stat-box img {\n  width: 30px;\n  height: 30px;\n}\n\n.wind-unit {\n  font-size: calc(0.8rem + 0.2vw - 0.2vw);\n}\n\n.temp-unit {\n  font-size: calc(0.8rem + 0.2vw - 0.2vw);\n  vertical-align: super;\n}\n\n.feels-like-temp-unit {\n  font-size: calc((0.8rem + 0.2vw - 0.2vw) * 0.9);\n  vertical-align: top;\n}\n\n.options {\n  display: flex;\n  justify-content: space-between;\n}\n.options button {\n  width: 60px;\n  height: 100%;\n  padding-block: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.151);\n  color: rgb(145, 145, 145);\n  border: none;\n}\n.options button.selected {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.151);\n  font-weight: 600;\n}\n\n.forecast {\n  display: grid;\n  grid-template: auto/1fr;\n  margin-block: 2rem;\n}\n\n.forecast-choice {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.forecast-choice button {\n  height: 35px;\n  padding: 0.5rem;\n  border: none;\n  color: grey;\n  background-color: rgba(0, 0, 0, 0.151);\n  font-weight: 100;\n}\n.forecast-choice button.selected {\n  color: white;\n  font-weight: 600;\n}\n\n.hourly-forecast,\n.daily-forecast {\n  display: none;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.hourly-forecast.active,\n.daily-forecast.active {\n  display: flex;\n}\n.hourly-forecast > div,\n.daily-forecast > div {\n  width: 100%;\n  height: 50px;\n  display: grid;\n  grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;\n  align-items: center;\n  justify-items: center;\n  background-color: rgba(0, 0, 0, 0.151);\n}\n.hourly-forecast > div img,\n.daily-forecast > div img {\n  width: 35px;\n  height: 35px;\n}"],"sourceRoot":""}]);
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
    let lowTempC = dailyObj.day.lowtemp_c;
    let hiTempF = dailyObj.day.maxtemp_f;
    let lowTempF = dailyObj.day.lowtemp_f;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsa0lBQThDO0FBQzFGLDRDQUE0Qyw4SEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4SUFBOEk7QUFDOUkseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUdBQXlHLG1DQUFtQztBQUM1STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywrSEFBK0gsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLFlBQVksTUFBTSxNQUFNLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsUUFBUSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFlBQVksWUFBWSxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxNQUFNLE9BQU8sVUFBVSxVQUFVLGdJQUFnSSxrQ0FBa0MsZ0RBQWdELGtDQUFrQyxvQ0FBb0Msd0NBQXdDLDhCQUE4QixjQUFjLGVBQWUsMkJBQTJCLDZDQUE2QyxzQ0FBc0MsR0FBRyxXQUFXLHNCQUFzQixHQUFHLFNBQVMsb0JBQW9CLG1CQUFtQixzR0FBc0csNkJBQTZCLGtDQUFrQyx3QkFBd0IsK0JBQStCLG1CQUFtQiwrQ0FBK0Msb0NBQW9DLE9BQU8sR0FBRyxlQUFlLG1DQUFtQyxvQkFBb0IsNkJBQTZCLDBCQUEwQixrQkFBa0IsMEJBQTBCLGtCQUFrQix1QkFBdUIsOENBQThDLDZCQUE2QixTQUFTLHVCQUF1QixpQ0FBaUMsNENBQTRDLCtDQUErQyxPQUFPLEdBQUcsa0JBQWtCLCtDQUErQyw2QkFBNkIsc0JBQXNCLDhCQUE4Qix1QkFBdUIsVUFBVSx1QkFBdUIseUNBQXlDLDJCQUEyQixPQUFPLGtCQUFrQix1QkFBdUIsdUJBQXVCLCtCQUErQixxQ0FBcUMsb0NBQW9DLG1DQUFtQyxnREFBZ0QsbUNBQW1DLG1DQUFtQyxXQUFXLG9CQUFvQiw0QkFBNEIsV0FBVyxPQUFPLGVBQWUsdUJBQXVCLHVCQUF1QiwyREFBMkQsc0NBQXNDLHVDQUF1QyxpQ0FBaUMsT0FBTyxLQUFLLGVBQWUsb0JBQW9CLDhCQUE4Qix1QkFBdUIsZ0NBQWdDLCtCQUErQixnQ0FBZ0MsR0FBRyxlQUFlLG9CQUFvQiw2QkFBNkIsMEJBQTBCLGtCQUFrQiwwQ0FBMEMsMEJBQTBCLG1DQUFtQyxhQUFhLDBCQUEwQiw2QkFBNkIsaUJBQWlCLGNBQWMsaUNBQWlDLE9BQU8sa0JBQWtCLGlDQUFpQyw0QkFBNEIsT0FBTyxvQkFBb0IsaUNBQWlDLHFDQUFxQyw2QkFBNkIsT0FBTyxzQkFBc0Isd0JBQXdCLHdDQUF3Qyw4QkFBOEIsZ0JBQWdCLDRCQUE0QixXQUFXLGlDQUFpQyxpQ0FBaUMsOEJBQThCLFdBQVcsaUJBQWlCLDJCQUEyQix3QkFBd0Isa0NBQWtDLDBCQUEwQiw0QkFBNEIscUNBQXFDLGtDQUFrQyx3QkFBd0IsZ0NBQWdDLHlCQUF5QixvQkFBb0IsOEJBQThCLCtCQUErQiwyQkFBMkIsV0FBVyxPQUFPLEdBQUcsZUFBZSw0QkFBNEIsR0FBRyxlQUFlLDRCQUE0Qiw0QkFBNEIsR0FBRywwQkFBMEIsd0NBQXdDLDBCQUEwQixHQUFHLGlCQUFpQixvQkFBb0IscUNBQXFDLGVBQWUsc0JBQXNCLHVCQUF1QixnQ0FBZ0Msc0NBQXNDLDhDQUE4Qyx1QkFBdUIsT0FBTyw0QkFBNEIsdUJBQXVCLHVDQUF1QywyQkFBMkIsT0FBTyxHQUFHLGdCQUFnQixvQkFBb0IsaUNBQWlDLHlCQUF5QixHQUFHLHFCQUFxQixvQkFBb0IsOEJBQThCLGtCQUFrQixnQkFBZ0IsdUJBQXVCLDBCQUEwQix1QkFBdUIsc0JBQXNCLHVDQUF1QywyQkFBMkIsdUJBQXVCLDJCQUEyQiwrQkFBK0IsV0FBVyxPQUFPLE9BQU8sdUNBQXVDLG9CQUFvQiw2QkFBNkIsa0JBQWtCLGlCQUFpQix3QkFBd0IsT0FBTyxhQUFhLHNCQUFzQix1QkFBdUIsMEJBQTBCLDBEQUEwRCw4QkFBOEIsZ0NBQWdDLHdDQUF3QyxnQkFBZ0IsMEJBQTBCLDJCQUEyQixjQUFjLFdBQVcsR0FBRywyR0FBMkcsNEJBQTRCLGNBQWMsZUFBZSwyQkFBMkIsd0NBQXdDLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyxVQUFVLGtCQUFrQixpQkFBaUIsMElBQTBJLDJCQUEyQixnQ0FBZ0Msc0JBQXNCLG9DQUFvQyxpQkFBaUIsR0FBRyx5Q0FBeUMsVUFBVSw0QkFBNEIsS0FBSyxHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3Qix3QkFBd0IsZ0JBQWdCLHFCQUFxQixHQUFHLHdDQUF3QyxnQkFBZ0IseUJBQXlCLEtBQUssR0FBRyxvQkFBb0IsMkJBQTJCLEdBQUcsd0RBQXdELDJCQUEyQixHQUFHLGlCQUFpQixrQkFBa0IsNEJBQTRCLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsbUNBQW1DLHFCQUFxQixHQUFHLHFCQUFxQixpQkFBaUIsaUJBQWlCLG9DQUFvQywrQkFBK0IsOEJBQThCLEdBQUcsa0NBQWtDLHNDQUFzQyxvQ0FBb0MseUJBQXlCLEdBQUcsMkJBQTJCLGtCQUFrQixHQUFHLHNCQUFzQixpQkFBaUIsZ0JBQWdCLHFEQUFxRCxnQ0FBZ0MsaUNBQWlDLDJCQUEyQixHQUFHLGdCQUFnQixrQkFBa0IsNEJBQTRCLHFCQUFxQiw4QkFBOEIsb0NBQW9DLDhCQUE4QixHQUFHLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3QixnQkFBZ0IsMkNBQTJDLHdCQUF3QixpQ0FBaUMsR0FBRyxvQkFBb0Isb0JBQW9CLHVCQUF1QixHQUFHLG9CQUFvQixvQ0FBb0MsR0FBRyxvQkFBb0Isb0NBQW9DLHNCQUFzQixHQUFHLHNCQUFzQixvQ0FBb0MsK0JBQStCLHVCQUF1QixHQUFHLDRCQUE0QixrQkFBa0Isa0NBQWtDLHdCQUF3QixHQUFHLGdDQUFnQyxrQkFBa0IsR0FBRyx5Q0FBeUMsdUJBQXVCLG9CQUFvQixHQUFHLHFCQUFxQixrQkFBa0IsNEJBQTRCLEdBQUcsK0JBQStCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGNBQWMsc0JBQXNCLGVBQWUsR0FBRyxtQ0FBbUMsZ0JBQWdCLGlCQUFpQixHQUFHLGdCQUFnQiw0Q0FBNEMsR0FBRyxnQkFBZ0IsNENBQTRDLDBCQUEwQixHQUFHLDJCQUEyQixvREFBb0Qsd0JBQXdCLEdBQUcsY0FBYyxrQkFBa0IsbUNBQW1DLEdBQUcsbUJBQW1CLGdCQUFnQixpQkFBaUIsMEJBQTBCLDJDQUEyQyw4QkFBOEIsaUJBQWlCLEdBQUcsNEJBQTRCLGlCQUFpQiwyQ0FBMkMscUJBQXFCLEdBQUcsZUFBZSxrQkFBa0IsNEJBQTRCLHVCQUF1QixHQUFHLHNCQUFzQixrQkFBa0IsNEJBQTRCLGdCQUFnQixHQUFHLDJCQUEyQixpQkFBaUIsb0JBQW9CLGlCQUFpQixnQkFBZ0IsMkNBQTJDLHFCQUFxQixHQUFHLG9DQUFvQyxpQkFBaUIscUJBQXFCLEdBQUcsd0NBQXdDLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLEdBQUcsb0RBQW9ELGtCQUFrQixHQUFHLGtEQUFrRCxnQkFBZ0IsaUJBQWlCLGtCQUFrQixvREFBb0Qsd0JBQXdCLDBCQUEwQiwyQ0FBMkMsR0FBRywwREFBMEQsZ0JBQWdCLGlCQUFpQixHQUFHLG1CQUFtQjtBQUNwbVg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMvTzFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQWlKO0FBQ2pKO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMkhBQU87Ozs7QUFJMkY7QUFDbkgsT0FBTyxpRUFBZSwySEFBTyxJQUFJLDJIQUFPLFVBQVUsMkhBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnFDO0FBQ0E7QUFDRzs7O0FBR3hDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHNDQUFzQyxhQUFhLEtBQUssU0FBUztBQUNqRTtBQUNBO0FBQ0EsWUFBWSxxREFBZTtBQUMzQjtBQUNBLFlBQVk7QUFDWixZQUFZLHFEQUFlO0FBQzNCO0FBQ0EsVUFBVTtBQUNWLFlBQVkscURBQWU7QUFDM0I7QUFDQSxZQUFZO0FBQ1osWUFBWSxxREFBZTtBQUMzQixtREFBbUQsZ0JBQWdCO0FBQ25FO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0RBQW9CO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHNCQUFzQixrREFBb0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0Isc0RBQXdCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsdUJBQXVCLGdEQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSjZCO0FBQ087QUFDZ0I7QUFDTDtBQUNFO0FBQ1I7QUFDUTs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxtREFBUzs7QUFFeEI7QUFDQSxxQkFBcUIsbURBQVk7QUFDakMsd0JBQXdCLG1EQUFPO0FBQy9CLG9CQUFvQixpREFBVztBQUMvQixnQkFBZ0IsNkNBQU87O0FBRXZCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtREFBUztBQUM1Qix5QkFBeUIsbURBQVk7QUFDckMsNEJBQTRCLG1EQUFPO0FBQ25DLHdCQUF3QixpREFBVztBQUNuQyxvQkFBb0IsNkNBQU87O0FBRTNCO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQWU7QUFDeEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGdEQUFpQjtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtCQUErQixpREFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG9EQUFvRCxFQUFFLGdEQUFrQjs7QUFFckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEVBQUUsK0NBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbko2QjtBQUNBOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsNkNBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sUUFBUSw4Q0FBZ0I7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxREFBdUI7QUFDOUMsSUFBSSw4Q0FBZ0I7QUFDcEIsSUFBSSw4Q0FBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscURBQXVCO0FBQzlDLElBQUksOENBQWdCO0FBQ3BCLElBQUksOENBQWdCO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscURBQXVCO0FBQzlDLElBQUksMENBQVk7QUFDaEIsSUFBSSw4Q0FBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIscURBQXVCO0FBQzlDLElBQUksMENBQVk7QUFDaEIsSUFBSSw4Q0FBZ0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLElBQUksaURBQW1CO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLEtBQUssRUFBRSxXQUFXLElBQUksVUFBVSxJQUFJLFdBQVcsRUFBRSxXQUFXLEVBQUUsT0FBTyxHQUFHLEtBQUs7QUFDM0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2xHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ087QUFDUDtBQUNYOztBQUVFOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFRO0FBQ1o7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc2VhcmNoLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA1MDAmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41NDExNzY0NzA2KSwgcmdiYSgwLCAwLCAwLCAwLjU0MTE3NjQ3MDYpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncpO1xuICBjb2xvcjogd2hpdGU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcbiAgYm9keSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuLmNvbnRhaW5lciA+IGRpdiB7XG4gIHdpZHRoOiBtaW4oODAlLCA2MDBweCk7XG59XG4uY29udGFpbmVyID4gZGl2Lm1haW4taW5mbywgLmNvbnRhaW5lciA+IGRpdi5vcHRpb25zIHtcbiAgd2lkdGg6IG1pbig4MCUsIDQwMHB4KTtcbn1cblxuLnNlYXJjaC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5zZWFyY2gtYm94ICoge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgaGVpZ2h0OiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjlyZW0gKyAwLjJ2dyk7XG4gIHBhZGRpbmc6IDAgMCAwLjFyZW0gMC44cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnNlYXJjaC1ib3ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDgpO1xuICBmb250LXNpemU6IGNhbGMoMC45cmVtICsgMC4ydncpO1xuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbn1cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZXJyb3ItbXNnIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDFyZW07XG4gIG1hcmdpbi1ibG9jazogMC4ycmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyk7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5tYWluLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG59XG4ubWFpbi1pbmZvID4gZGl2IHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1pbmZvIC5jaXR5IHtcbiAgZm9udC1zaXplOiBjYWxjKDEuMnJlbSArIDAuM3Z3KTtcbn1cbi5tYWluLWluZm8gLmRhdGUge1xuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5tYWluLWluZm8gLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogY2FsYygxLjJyZW0gKyAwLjN2dyk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCBpbWcge1xuICB3aWR0aDogNi41cmVtO1xufVxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIC50ZW1wZXJhdHVyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLm1haW4taW5mbyAuc3RhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEuNXJlbSAwIDAuMnJlbTtcbn1cbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIGZsZXg6IDAuMjU7XG59XG4ubWFpbi1pbmZvIC5zdGF0cyAuc3RhdC1ib3ggaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLndpbmQtdW5pdCB7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyAtIDAuMnZ3KTtcbn1cblxuLnRlbXAtdW5pdCB7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyAtIDAuMnZ3KTtcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xufVxuXG4uZmVlbHMtbGlrZS10ZW1wLXVuaXQge1xuICBmb250LXNpemU6IGNhbGMoKDAuOHJlbSArIDAuMnZ3IC0gMC4ydncpICogMC45KTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ub3B0aW9ucyBidXR0b24ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJsb2NrOiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xuICBjb2xvcjogcmdiKDE0NSwgMTQ1LCAxNDUpO1xuICBib3JkZXI6IG5vbmU7XG59XG4ub3B0aW9ucyBidXR0b24uc2VsZWN0ZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9yZWNhc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiBhdXRvLzFmcjtcbiAgbWFyZ2luLWJsb2NrOiAycmVtO1xufVxuXG4uZm9yZWNhc3QtY2hvaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuLmZvcmVjYXN0LWNob2ljZSBidXR0b24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogZ3JleTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uZm9yZWNhc3QtY2hvaWNlIGJ1dHRvbi5zZWxlY3RlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhvdXJseS1mb3JlY2FzdCxcbi5kYWlseS1mb3JlY2FzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4ycmVtO1xufVxuLmhvdXJseS1mb3JlY2FzdC5hY3RpdmUsXG4uZGFpbHktZm9yZWNhc3QuYWN0aXZlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ob3VybHktZm9yZWNhc3QgPiBkaXYsXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAwLjRmciAwLjhmciAwLjNmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcbn1cbi5ob3VybHktZm9yZWNhc3QgPiBkaXYgaW1nLFxuLmRhaWx5LWZvcmVjYXN0ID4gZGl2IGltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBU0E7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFHQSxpQ0FBQTtBQ1RGOztBRFlBO0VBQ0ksZUFBQTtBQ1RKOztBRFlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx3SUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUVBLCtCQTFCUztFQTJCVCxZQUFBO0FDVko7QURZSTtFQVhKO0lBWVEscUJBQUE7RUNUTjtBQUNGOztBRFlBO0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ1hKO0FEYUk7RUFWSjtJQVdRLGtCQUFBO0VDVk47QUFDRjtBRGNJO0VBQ0ksc0JBQUE7QUNaUjtBRGNRO0VBRUksc0JBQUE7QUNiWjs7QURtQkE7RUFJSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ25CSjtBRHFCSTtFQUNJLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDbkJSO0FEc0JJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSwrQkEvRUc7RUFnRkgsMEJBQUE7RUFDQSx5QkFBQTtBQ3BCUjtBRHNCUTtFQUNJLGlDQUFBO0VBQ0EsK0JBckZEO0VBc0ZDLG9CQUFBO0FDcEJaO0FEdUJRO0VBQ0ksYUFBQTtBQ3JCWjtBRHlCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseURBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUN2QlI7O0FENEJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUVBLCtCQTlHUztFQStHVCx5QkFBQTtBQzFCSjs7QUQ2QkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFHQSxzQ0E5SE87RUErSFAsbUJBQUE7RUFDQSw0QkFBQTtBQzVCSjtBRDhCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQzVCUjtBRGdDSTtFQUNJLCtCQXRJSztBQ3dHYjtBRGlDSTtFQUNJLCtCQXhJSztFQXlJTCxpQkFBQTtBQy9CUjtBRGtDSTtFQUNJLCtCQS9JSztFQWdKTCwwQkFBQTtFQUNBLGtCQUFBO0FDaENSO0FEbUNJO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNqQ1I7QURtQ1E7RUFDSSxhQUFBO0FDakNaO0FEb0NRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FDbENaO0FEeUNJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FDdkNSO0FEeUNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDdkNaO0FEeUNZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUN2Q2hCOztBRDZDQTtFQUNJLHVDQXhMUTtBQzhJWjs7QUQ2Q0E7RUFDSSx1Q0E1TFE7RUE2TFIscUJBQUE7QUMxQ0o7O0FENkNBO0VBQ0ksK0NBQUE7RUFDQSxtQkFBQTtBQzFDSjs7QUQrQ0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUM1Q0o7QUQ4Q0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBck5HO0VBdU5ILHlCQUFBO0VBQ0EsWUFBQTtBQzdDUjtBRGdESTtFQUNJLFlBQUE7RUFDQSxzQ0E3Tkc7RUE4TkgsZ0JBQUE7QUM5Q1I7O0FEbURBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNoREo7O0FEbURBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ2hESjtBRGtESTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FuUEc7RUFvUEgsZ0JBQUE7QUNoRFI7QURrRFE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNoRFo7O0FEdURBOztFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNwREo7QURzREk7O0VBQ0ksYUFBQTtBQ25EUjtBRHNESTs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSwrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FqUkc7QUM2Tlg7QURzRFE7O0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNuRFpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANTAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxuJGJnLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcXG5cXG4vLyBzaXplc1xcbiRsYXJnZS1mb250OiBjYWxjKDEuMnJlbSArIDAuM3Z3KTtcXG4kbWVkLWZvbnQ6IGNhbGMoMC45cmVtICsgMC4ydncpO1xcbiRzbWFsbC1mb250OiBjYWxjKDAuOHJlbSArIDAuMnZ3KTtcXG4kdW5pdC1zaXplOiBjYWxjKCRzbWFsbC1mb250IC0gMC4ydncpO1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgLy9mb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwMDAwMDhhLCAjMDAwMDAwOGEpLCB1cmwoJy4uL2Fzc2V0cy9wZWFrLWRpc3RyaWN0LmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcblxcbiAgICBmb250LXNpemU6ICRzbWFsbC1mb250O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvOyAgICBcXG4gICAgfVxcbn1cXG5cXG4uY29udGFpbmVye1xcbiAgICAvL2JhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvL2dhcDogMXJlbTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFxuICAgIH1cXG4gICAgXFxuICAgIFxcbiAgICA+ZGl2e1xcbiAgICAgICAgd2lkdGg6IG1pbig4MCUsIDYwMHB4KTtcXG5cXG4gICAgICAgICYubWFpbi1pbmZvLFxcbiAgICAgICAgJi5vcHRpb25ze1xcbiAgICAgICAgICAgIHdpZHRoOiBtaW4oODAlLCA0MDBweClcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5cXG4uc2VhcmNoLWJveHtcXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDEyOCwgMCwgMC41KTtcXG4gICAgLy9wYWRkaW5nOiAxcmVtIDEuNXJlbTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuXFxuICAgICp7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB9XFxuICAgIFxcbiAgICBpbnB1dHtcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogJG1lZC1mb250O1xcbiAgICAgICAgcGFkZGluZzogMCAwIDAuMXJlbSAwLjhyZW07XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgICAgICAgXFxuICAgICAgICAmOjpwbGFjZWhvbGRlcntcXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OCk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAkbWVkLWZvbnQ7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmOmZvY3Vze1xcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgd2lkdGg6ICAycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9zZWFyY2gtaWNvbi5wbmcpO1xcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIH1cXG5cXG59XFxuXFxuLmVycm9yLW1zZ3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDFyZW07XFxuICAgIG1hcmdpbi1ibG9jazogMC4ycmVtIDFyZW07XFxuXFxuICAgIGZvbnQtc2l6ZTogJHNtYWxsLWZvbnQ7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5tYWluLWluZm97XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC4ycmVtO1xcblxcbiAgICBcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xcbiAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcblxcbiAgICA+ZGl2e1xcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLmNpdHl7XFxuICAgICAgICBmb250LXNpemU6ICRsYXJnZS1mb250O1xcbiAgICB9XFxuICAgIFxcbiAgICAuZGF0ZXtcXG4gICAgICAgIGZvbnQtc2l6ZTogJHNtYWxsLWZvbnQ7XFxuICAgICAgICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnN0YXR1c3tcXG4gICAgICAgIGZvbnQtc2l6ZTogJGxhcmdlLWZvbnQ7XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuaW1nLWFuZC10ZW1we1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICB3aWR0aDogNi41cmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAudGVtcGVyYXR1cmV7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICB9XFxuICAgIFxcblxcbiAgICBcXG4gICAgLnN0YXRze1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIG1hcmdpbjogMS41cmVtIDAgMC4ycmVtO1xcbiAgICBcXG4gICAgICAgIC5zdGF0LWJveHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICAgICAgICAgICAgZmxleDogMC4yNTtcXG5cXG4gICAgICAgICAgICBpbWd7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbi53aW5kLXVuaXR7XFxuICAgIGZvbnQtc2l6ZTogJHVuaXQtc2l6ZTtcXG59XFxuXFxuLnRlbXAtdW5pdHtcXG4gICAgZm9udC1zaXplOiAkdW5pdC1zaXplO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XFxufVxcblxcbi5mZWVscy1saWtlLXRlbXAtdW5pdHtcXG4gICAgZm9udC1zaXplOiBjYWxjKCR1bml0LXNpemUgKiAwLjkpO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG5cXG5cXG4ub3B0aW9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcbiAgICBidXR0b257XFxuICAgICAgICB3aWR0aDogNjBweDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHBhZGRpbmctYmxvY2s6IDAuMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXG4gICAgICAgIFxcbiAgICAgICAgY29sb3I6IHJnYigxNDUsIDE0NSwgMTQ1KTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgYnV0dG9uLnNlbGVjdGVke1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICRiZy1jb2xvcjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIH1cXG59XFxuXFxuXFxuLmZvcmVjYXN0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiBhdXRvIC8gIDFmcjtcXG4gICAgbWFyZ2luLWJsb2NrOiAycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtY2hvaWNle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjVyZW07XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBjb2xvcjogZ3JleTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkYmctY29sb3I7XFxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xcblxcbiAgICAgICAgJi5zZWxlY3RlZHtcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcblxcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0LFxcbi5kYWlseS1mb3JlY2FzdHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAwLjJyZW07XFxuXFxuICAgICYuYWN0aXZle1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICA+ZGl2e1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjI1ZnIgMC40ZnIgMC44ZnIgMC4zZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICRiZy1jb2xvcjs7XFxuXFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgfSAgIFxcbiAgICB9ICAgIFxcbn1cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcFxcXCIpO1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41NDExNzY0NzA2KSwgcmdiYSgwLCAwLCAwLCAwLjU0MTE3NjQ3MDYpKSwgdXJsKFxcXCIuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcXG4gIH1cXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmNvbnRhaW5lciB7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIH1cXG59XFxuLmNvbnRhaW5lciA+IGRpdiB7XFxuICB3aWR0aDogbWluKDgwJSwgNjAwcHgpO1xcbn1cXG4uY29udGFpbmVyID4gZGl2Lm1haW4taW5mbywgLmNvbnRhaW5lciA+IGRpdi5vcHRpb25zIHtcXG4gIHdpZHRoOiBtaW4oODAlLCA0MDBweCk7XFxufVxcblxcbi5zZWFyY2gtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi5zZWFyY2gtYm94ICoge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG59XFxuLnNlYXJjaC1ib3ggaW5wdXQge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOXJlbSArIDAuMnZ3KTtcXG4gIHBhZGRpbmc6IDAgMCAwLjFyZW0gMC44cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLnNlYXJjaC1ib3ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ4KTtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjlyZW0gKyAwLjJ2dyk7XFxuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG59XFxuLnNlYXJjaC1ib3ggaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuLnNlYXJjaC1ib3ggYnV0dG9uIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9zZWFyY2gtaWNvbi5wbmcpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5lcnJvci1tc2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMXJlbTtcXG4gIG1hcmdpbi1ibG9jazogMC4ycmVtIDFyZW07XFxuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncpO1xcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLm1haW4taW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xcbiAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxufVxcbi5tYWluLWluZm8gPiBkaXYge1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ubWFpbi1pbmZvIC5jaXR5IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxLjJyZW0gKyAwLjN2dyk7XFxufVxcbi5tYWluLWluZm8gLmRhdGUge1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3KTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG4ubWFpbi1pbmZvIC5zdGF0dXMge1xcbiAgZm9udC1zaXplOiBjYWxjKDEuMnJlbSArIDAuM3Z3KTtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIGltZyB7XFxuICB3aWR0aDogNi41cmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAgLnRlbXBlcmF0dXJlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuLm1haW4taW5mbyAuc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMS41cmVtIDAgMC4ycmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5zdGF0cyAuc3RhdC1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDFyZW07XFxuICBmbGV4OiAwLjI1O1xcbn1cXG4ubWFpbi1pbmZvIC5zdGF0cyAuc3RhdC1ib3ggaW1nIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ud2luZC11bml0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyAtIDAuMnZ3KTtcXG59XFxuXFxuLnRlbXAtdW5pdCB7XFxuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncgLSAwLjJ2dyk7XFxuICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XFxufVxcblxcbi5mZWVscy1saWtlLXRlbXAtdW5pdCB7XFxuICBmb250LXNpemU6IGNhbGMoKDAuOHJlbSArIDAuMnZ3IC0gMC4ydncpICogMC45KTtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcbi5vcHRpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5vcHRpb25zIGJ1dHRvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctYmxvY2s6IDAuMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xcbiAgY29sb3I6IHJnYigxNDUsIDE0NSwgMTQ1KTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuLm9wdGlvbnMgYnV0dG9uLnNlbGVjdGVkIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiBhdXRvLzFmcjtcXG4gIG1hcmdpbi1ibG9jazogMnJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWNob2ljZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuLmZvcmVjYXN0LWNob2ljZSBidXR0b24ge1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IGdyZXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxufVxcbi5mb3JlY2FzdC1jaG9pY2UgYnV0dG9uLnNlbGVjdGVkIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5ob3VybHktZm9yZWNhc3QsXFxuLmRhaWx5LWZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjJyZW07XFxufVxcbi5ob3VybHktZm9yZWNhc3QuYWN0aXZlLFxcbi5kYWlseS1mb3JlY2FzdC5hY3RpdmUge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmhvdXJseS1mb3JlY2FzdCA+IGRpdixcXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjI1ZnIgMC40ZnIgMC44ZnIgMC4zZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XFxufVxcbi5ob3VybHktZm9yZWNhc3QgPiBkaXYgaW1nLFxcbi5kYWlseS1mb3JlY2FzdCA+IGRpdiBpbWcge1xcbiAgd2lkdGg6IDM1cHg7XFxuICBoZWlnaHQ6IDM1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZm9ybWF0IGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIjtcbmltcG9ydCAqIGFzIEhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCB7IGRpc3BsYXlFcnJvck1zZyB9IGZyb20gXCIuL2RvbVwiO1xuXG5cbi8vY29uc3QgQ1VSUkVOVF9VUkwgPSAnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTViNzM2MmU4ODM4ZTQ0YmRhOTExMjUzMjQyMzE3MTAnO1xuY29uc3QgRk9SRUNBU1RfVVJMID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTViNzM2MmU4ODM4ZTQ0YmRhOTExMjUzMjQyMzE3MTAmZGF5cz02JztcblxuLy8gXl4gdGhlIGZvcmVjYXN0IHVybCBjYWxsIGFsc28gaW5jbHVkZXMgdGhlIGN1cnJlbnQgd2VhdGhlclxuLy8gc28gbm8gbmVlZCBmb3IgdHdvIHNlcnBlcmF0ZSBjYWxsc1xuXG4vLyBzbyB3ZSBhbHdheXMga25vdyBjdXJyZW50IHNlYXJjaGVkIGxvY2F0aW9uXG5sZXQgbGFzdExvY2F0aW9uO1xuXG4vLyBzdG9yZSB0aGUgbW9zdCByZWNlbnQgd2VhdGhlciBjYWxsIHNvIHdlIGRvbid0XG4vLyBoYXZlIHRvIG1ha2UgdW5uZWNlc3NhcnkgY2FsbHNcbmxldCBsYXN0Rm9yZWNhc3Q7XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0Rm9yZWNhc3QobG9jYXRpb249J2tpbGNvcm1hYycpe1xuICAgIHRyeXtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Rk9SRUNBU1RfVVJMfSZxPSR7bG9jYXRpb259YCk7XG4gICAgICAgIC8vIGNoZWNrIHRoYXQgdGhlIHJlc3BvbnNlIGlzIGZpbmVcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3JNc2coXCJTb3JyeSwgd2UncmUgaGF2aW5nIHRyb3VibGUuLi5cIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BhZ2Ugbm90IGZvdW5kJyk7XG4gICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yTXNnKFwiU29ycnksIHByb2JsZW1zIHdpdGggdGhlIHNlcnZlci4uLlwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU2VydmVyIGVycm9yJyk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvck1zZyhcIlNvcnJ5LCBjYW4ndCBmaW5kIHN1Y2ggYSBwbGFjZS4uLlwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmFkIFJlcXVlc3QnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yTXNnKFwiU29ycnksIHdlJ3JlIGhhdmluZyB0cm91YmxlLi4uXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgbGV0IGZvcmVjYXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGxhc3RMb2NhdGlvbiA9IGxvY2F0aW9uO1xuICAgICAgICBsYXN0Rm9yZWNhc3QgPSBmb3JlY2FzdDtcblxuICAgICAgICBjb25zb2xlLmxvZygnZm9yZWNhc3QgY2FsbGVkICcsIGZvcmVjYXN0KTtcblxuICAgICAgICByZXR1cm4gZm9yZWNhc3RcblxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cblxufVxuXG4vKiBhc3luYyBmdW5jdGlvbiBnZXREYXRlKCl7XG4gICAgbGV0IHdlYXRoZXJPYmogPSBhd2FpdCBnZXRGb3JlY2FzdChsYXN0TG9jYXRpb24pO1xuXG4gICAgbGV0IGRhdGUgPSB3ZWF0aGVyT2JqLmxvY2F0aW9uLmxvY2FsdGltZTtcblxuICAgIHJldHVybiBmb3JtYXQobmV3IERhdGUoZGF0ZSksIFwiZWVlZSBkZCBNTU0geXkgSEg6bW1cIik7XG59ICovXG5cbi8vIGZvciBzb21lIHJlYXNvbiwgY2hhbmNlIG9mIHJhaW4gaXMgc3RvcmVkIGRlZXAgaW5cbi8vIGZvcmVjYXN0ID4gZm9yZWNhc3RkYXkgPiAwID4gaG91ciA+IC4uLmhvdXJzID4gaGVyZVxuLy8gYnV0IHdlIG5lZWQgdGhlIGN1cnJlbnQgaG91ciB0byBtYXRjaCBpdCB1cCBcbi8vIHNvIHdlIG1ha2UgdXNlIG9mIGEgaGVscGVyIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgXG4vLyB0aGUgY3VycmVudCBsb2NhbCBob3VyXG5mdW5jdGlvbiBnZXRDaGFuY2VPZlJhaW4oKXtcbiAgICBsZXQgbG9jYWxIb3VyID0gIE51bWJlcihIZWxwZXJzLmdldExvY2FsSG91cihsYXN0Rm9yZWNhc3QpKTsgXG4gICAgY29uc29sZS5sb2coJ2xvY2FsIGhvdXIgJywgbG9jYWxIb3VyLmxlbmd0aCwgbG9jYWxIb3VyKTtcbiAgICBjb25zb2xlLmxvZygnbG9jYWwgaG91ciBjaXR5JywgbGFzdEZvcmVjYXN0KTtcbiAgICBsZXQgY2hhbmNlT2ZSYWluID0gbGFzdEZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbbG9jYWxIb3VyXS5jaGFuY2Vfb2ZfcmFpbjtcblxuICAgIHJldHVybiBjaGFuY2VPZlJhaW47XG59XG5cbi8vIEhPVVJMWSBTVEFUU1xuLy8gdGhpcyBpcyB0aGUgdHJpY2tpZXN0ICYgYnVzaWVzdCBvbmUsIEkgbmVlZCB0byBnZXQgaG91cmx5IHN0YXRzXG4vLyBhbmQgZGlzcGxheSB0aGVtIGluIDNociBpbmNyZW1lbnRzIGZyb20gdGhlIGN1cnJlbnQgaG91ci4uLlxuLy8gdGhpcyB0YWtlcyBpbiB0aGUgaG91ciBhbmQgZ2V0cyBuZWNlc3Nhcnkgc3RhdHMgYXMgYW4gb2JqZWN0XG5cbmZ1bmN0aW9uIGdldEhvdXJseVN0YXRzKGluY3JlbWVudE1hZ25pdHVkZT0wKXtcblxuICAgIGxldCBob3VyID0gTnVtYmVyKEhlbHBlcnMuZ2V0TG9jYWxIb3VyKGxhc3RGb3JlY2FzdCkpO1xuICAgIGhvdXIgKz0gKDMqaW5jcmVtZW50TWFnbml0dWRlKTtcbiAgICBsZXQgZGF5ID0gMDtcblxuICAgIC8vIGNoYW5nZSB0byBuZXh0IGRheSB3aGVuIHdlIHBhc3MgbWlkbmlnaHRcbiAgICAvLyBhbmQgZml4IHRoZSBob3VyIGkuZS4gMjYgd2lsbCBiZSAyNi0yNCA9IDJhbVxuICAgIGlmKGhvdXIgPiAyMyl7XG4gICAgICAgIGhvdXIgLT0gMjQ7XG4gICAgICAgIGRheSA9IDE7XG4gICAgfVxuXG4gICAgbGV0IGhvdXJPYmogPSBsYXN0Rm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5ob3VyW2hvdXJdO1xuICAgIC8vIHRlc3RpbmdcblxuICAgIGxldCBob3VyVG9EaXNwbGF5ID0gSGVscGVycy5nZXRIb3VyVG9EaXNwbGF5KGhvdXJPYmopO1xuICAgIGxldCBzdGF0dXMgPSBob3VyT2JqLmNvbmRpdGlvbi50ZXh0O1xuICAgIGxldCBpY29uID0gaG91ck9iai5jb25kaXRpb24uaWNvbjtcbiAgICBsZXQgYWx0VGV4dCA9IGhvdXJPYmouY29uZGl0aW9uLnRleHQ7XG4gICAgbGV0IHRlbXBDID0gaG91ck9iai50ZW1wX2M7XG4gICAgbGV0IHRlbXBGID0gaG91ck9iai50ZW1wX2Y7XG5cbiAgICAvLyByb3VuZC1vZmYgdGVtcHNcbiAgICB0ZW1wQyA9IE1hdGgucm91bmQodGVtcEMpO1xuICAgIHRlbXBGID0gTWF0aC5yb3VuZCh0ZW1wRik7XG5cbiAgICByZXR1cm57XG4gICAgICAgIGhvdXJUb0Rpc3BsYXksIFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGljb24sXG4gICAgICAgIGFsdFRleHQsIFxuICAgICAgICB0ZW1wQywgXG4gICAgICAgIHRlbXBGXG4gICAgfTtcbiBcbn1cblxuZnVuY3Rpb24gZ2V0RGFpbHlTdGF0cyhpbmRleCl7XG4gICAgbGV0IGRhaWx5T2JqID0gbGFzdEZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2luZGV4XTtcblxuICAgIC8vIGhlbHBlciB0byBnZXQgbmljZSBkYXRlXG4gICAgbGV0IGRheVRvRGlzcGxheTtcbiAgICBpZihpbmRleCA9PT0gMCl7XG4gICAgICAgIGRheVRvRGlzcGxheSA9ICdUb2RheSc7XG4gICAgfWVsc2V7XG4gICAgICAgIGRheVRvRGlzcGxheSA9IEhlbHBlcnMuZm9ybWF0RGF0ZShkYWlseU9iai5kYXRlLCAnZGF5JywgdHJ1ZSk7XG4gICAgfVxuICAgIGxldCBzdGF0dXMgPSBkYWlseU9iai5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgbGV0IGljb24gPSBkYWlseU9iai5kYXkuY29uZGl0aW9uLmljb247XG4gICAgbGV0IGFsdFRleHQgPSBkYWlseU9iai5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgbGV0IGhpVGVtcEMgPSBkYWlseU9iai5kYXkubWF4dGVtcF9jO1xuICAgIGxldCBsb3dUZW1wQyA9IGRhaWx5T2JqLmRheS5sb3d0ZW1wX2M7XG4gICAgbGV0IGhpVGVtcEYgPSBkYWlseU9iai5kYXkubWF4dGVtcF9mO1xuICAgIGxldCBsb3dUZW1wRiA9IGRhaWx5T2JqLmRheS5sb3d0ZW1wX2Y7XG5cbiAgICByZXR1cm57XG4gICAgICAgIGRheVRvRGlzcGxheSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBpY29uLFxuICAgICAgICBhbHRUZXh0LFxuICAgICAgICBoaVRlbXBDLFxuICAgICAgICBsb3dUZW1wQyxcbiAgICAgICAgaGlUZW1wRixcbiAgICAgICAgbG93VGVtcEYsXG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRMYXRlc3RXZWF0aGVyT2JqKCl7XG4gICAgcmV0dXJuIGxhc3RGb3JlY2FzdDtcbn1cblxuZXhwb3J0IHtcbiAgICBnZXRGb3JlY2FzdCxcbiAgICBnZXRDaGFuY2VPZlJhaW4sIFxuICAgIGdldExhdGVzdFdlYXRoZXJPYmosXG4gICAgZ2V0SG91cmx5U3RhdHMsXG4gICAgZ2V0RGFpbHlTdGF0cyxcbn07IiwiaW1wb3J0ICogYXMgQVBJIGZyb20gJy4vYXBpJztcbmltcG9ydCAqIGFzIEhlbHBlciBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IGZlZWxzTGlrZUltZyBmcm9tICcuLi9hc3NldHMvZmVlbHMtbGlrZS5wbmcnO1xuaW1wb3J0IHJhaW5JbWcgZnJvbSAnLi4vYXNzZXRzL3JhaW4tZHJvcHMucG5nJztcbmltcG9ydCBodW1pZGl0eUltZyBmcm9tICcuLi9hc3NldHMvaHVtaWRpdHkucG5nJztcbmltcG9ydCB3aW5kSW1nIGZyb20gJy4uL2Fzc2V0cy93aW5kLnBuZyc7XG5pbXBvcnQgY2xvdWRJY29uIGZyb20gJy4uL2Fzc2V0cy9jbG91ZC1pY29uLnBuZyc7XG5cbmNvbnN0IGZhdmljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaW5rJyk7XG5jb25zdCBlcnJvck1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvci1tc2cnKTtcbmNvbnN0IHdlYXRoZXJJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbWc+aW1nJyk7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbmNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXMnKTtcblxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xuXG5jb25zdCBmZWVsc0xpa2VJbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVscy1saWtlLWltZycpO1xuY29uc3QgY2hhbmNlT2ZSYWluSW1nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hhbmNlLW9mLXJhaW4taW1nJyk7XG5jb25zdCBodW1pZGl0eUltZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5LWltZycpO1xuY29uc3Qgd2luZEltZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQtaW1nJyk7XG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZScpO1xuY29uc3QgY2hhbmNlT2ZSYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JhaW4nKTtcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h1bWlkaXR5Jyk7XG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dpbmQnKTtcblxuLy8gaG91cmx5IGVsZW1lbnRzXG5jb25zdCBob3VyRGl2cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaG91cmx5LWZvcmVjYXN0ID4gZGl2JyldO1xuLy8gZGFpbHkgZWxlbWVudHNcbmNvbnN0IGRheURpdnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LWZvcmVjYXN0ID4gZGl2JyldO1xuXG4vLyBkZWZhdWx0IHZhbHVlcyBhcmUgQ2Vsc2l1cyAmIE1waFxuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NlbHNpdXMnKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtcGgnKTtcblxuZmF2aWNvbi5ocmVmID0gY2xvdWRJY29uO1xuXG4vLyBzZXQgaWNvbnMgZm9yIHRoZSBzdGF0IGJveGVzIFxuZmVlbHNMaWtlSW1nRWwuc3JjID0gZmVlbHNMaWtlSW1nO1xuY2hhbmNlT2ZSYWluSW1nRWwuc3JjID0gcmFpbkltZztcbmh1bWlkaXR5SW1nRWwuc3JjID0gaHVtaWRpdHlJbWc7XG53aW5kSW1nRWwuc3JjID0gd2luZEltZztcblxubGV0IGlzQ2Vsc2l1cyA9IHRydWU7XG5sZXQgaXNNcGggPSB0cnVlO1xuXG5cbi8vIGluaXRpYWxpemUgdGhlIHBhZ2UgaWNvbnMgYW5kIGRlZmF1bHQgdmFsdWVzXG5hc3luYyBmdW5jdGlvbiBpbml0KCl7XG4gICAgLy8gc2V0IGZhdmljb24gYW5kIHNvbWUgcGFnZSBpY29ucyBcbiAgICBmYXZpY29uLmhyZWYgPSBjbG91ZEljb247XG4gICAgZmVlbHNMaWtlSW1nRWwuc3JjID0gZmVlbHNMaWtlSW1nO1xuICAgIGNoYW5jZU9mUmFpbkltZ0VsLnNyYyA9IHJhaW5JbWc7XG4gICAgaHVtaWRpdHlJbWdFbC5zcmMgPSBodW1pZGl0eUltZztcbiAgICB3aW5kSW1nRWwuc3JjID0gd2luZEltZztcblxuICAgIC8vIGxvYWQgJiBzZXQgd2VhdGhlciBpbmZvIGZyb20gJ2tpbGNvcm1hYydcbiAgICAvLyBhcyBwbGFjZWhvbGRlciBpbmZvXG4gICAgbGV0IGZvcmVjYXN0ID0gYXdhaXQgQVBJLmdldEZvcmVjYXN0KCk7XG4gICAgY29uc29sZS5sb2coZm9yZWNhc3QpO1xuICAgIHNldEFsbFZhbHVlcyhmb3JlY2FzdCk7XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0QWxsVmFsdWVzKGZvcmVjYXN0KXtcbiAgICAvLyBtYWluIGluZm9cbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmxvY2F0aW9uLm5hbWU7XG4gICAgd2VhdGhlckltZy5zcmMgPSBmb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgIHdlYXRoZXJJbWcuYWx0ID0gZm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gSGVscGVyLmZvcm1hdERhdGUoZm9yZWNhc3QubG9jYXRpb24ubG9jYWx0aW1lKTtcbiAgICB0ZW1wLmlubmVySFRNTCA9IGlzQ2Vsc2l1cyA/IFxuICAgICAgICBNYXRoLnJvdW5kKGZvcmVjYXN0LmN1cnJlbnQudGVtcF9jKStgPHNwYW4gY2xhc3M9J3RlbXAtdW5pdCc+wrBDPC9zcGFuPmBcbiAgICAgICAgOk1hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC50ZW1wX2YpK2A8c3BhbiBjbGFzcz0ndGVtcC11bml0Jz7CsEY8L3NwYW4+YDtcblxuICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG5cbiAgICBmZWVsc0xpa2UuaW5uZXJIVE1MID0gaXNDZWxzaXVzID8gXG4gICAgICAgIE1hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC5mZWVsc2xpa2VfYykrYDxzcGFuIGNsYXNzPSdmZWVscy1saWtlLXRlbXAtdW5pdCc+wrBDPC9zcGFuPmBcbiAgICAgICAgOk1hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC5mZWVsc2xpa2VfZikrYDxzcGFuIGNsYXNzPSdmZWVscy1saWtlLXRlbXAtdW5pdCc+wrBGPC9zcGFuPmA7XG5cbiAgICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBBUEkuZ2V0Q2hhbmNlT2ZSYWluKCkrJyUnO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gZm9yZWNhc3QuY3VycmVudC50ZW1wX2MrJyUnO1xuICAgIHdpbmQuaW5uZXJIVE1MID0gaXNNcGggPyBcbiAgICAgICAgTWF0aC5yb3VuZChmb3JlY2FzdC5jdXJyZW50Lmd1c3RfbXBoKStgPHNwYW4gY2xhc3M9J3dpbmQtdW5pdCc+bXBoPC9zcGFuPmBcbiAgICAgICAgOk1hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC5ndXN0X2twaCkrYDxzcGFuIGNsYXNzPSd3aW5kLXVuaXQnPmttL2g8L3NwYW4+YFxuXG4gICAgLy8gaG91cmx5XG4gICAgc2V0SG91cmx5VmFsdWVzKCk7XG4gICAgXG4gICAgLy8gd2Vla1xuICAgIHNldERhaWx5VmFsdWVzKCk7XG59XG5cbmZ1bmN0aW9uIHNldEhvdXJseVZhbHVlcygpe1xuICAgIGhvdXJEaXZzLmZvckVhY2goKGRpdiwgaSkgPT57XG4gICAgICAgIGxldCB7aG91clRvRGlzcGxheSwgc3RhdHVzLCBpY29uLCBhbHRUZXh0LCB0ZW1wQywgdGVtcEZ9ID0gQVBJLmdldEhvdXJseVN0YXRzKGkpO1xuXG4gICAgICAgIGRpdi5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGhvdXJUb0Rpc3BsYXk7XG4gICAgICAgIGRpdi5jaGlsZHJlblsxXS5zcmMgPSBpY29uO1xuICAgICAgICBkaXYuY2hpbGRyZW5bMV0uYWx0ID0gYWx0VGV4dDtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gc3RhdHVzO1xuICAgICAgICBkaXYuY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSBpc0NlbHNpdXMgPyBcbiAgICAgICAgICAgIHRlbXBDKyfCsEMnIDpcbiAgICAgICAgICAgIHRlbXBGKyfCsEYnO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHNldERhaWx5VmFsdWVzKCl7XG4gICAgLy9jcmVhdGUgYSBtZXRob2QgaW4gQVBJIHdoaWNoIHJldHVybnMgdGhlIG5lY2Vzc2FyeSBkYXRhXG4gICAgLy8gZm9yIG5leHQgNiBkYXlzXG4gICAgLy8gbWF5IG5lZWQgYSBkYXRlLXRvLWRheSBoZWxwZXIgbWV0aG9kXG4gICAgLy8gbWF5YmUgdXNlIG1pbi9tYXggdGVtcFxuICAgIC8vIG90aGVyd2lzZSB0aGUgc2FtZVxuICAgIGRheURpdnMuZm9yRWFjaCgoZGl2LCBpKT0+e1xuICAgICAgICBsZXQge1xuICAgICAgICAgICAgZGF5VG9EaXNwbGF5LFxuICAgICAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgaWNvbixcbiAgICAgICAgICAgIGFsdFRleHQsXG4gICAgICAgICAgICBoaVRlbXBDLCBcbiAgICAgICAgICAgIGxvd1RlbXBDLFxuICAgICAgICAgICAgaGlUZW1wRixcbiAgICAgICAgICAgIGxvd1RlbXBGXG4gICAgICAgICAgICB9ID0gQVBJLmdldERhaWx5U3RhdHMoaSk7XG4gICAgICAgIFxuICAgICAgICBkaXYuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSBkYXlUb0Rpc3BsYXk7XG4gICAgICAgIGRpdi5jaGlsZHJlblsxXS5zcmMgPSBpY29uO1xuICAgICAgICBkaXYuY2hpbGRyZW5bMV0uYWx0ID0gYWx0VGV4dDtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gc3RhdHVzO1xuICAgICAgICBkaXYuY2hpbGRyZW5bM10udGV4dENvbnRlbnQgPSBpc0NlbHNpdXMgPyBcbiAgICAgICAgTWF0aC5yb3VuZChoaVRlbXBDKSsnwrBDJyA6XG4gICAgICAgIE1hdGgucm91bmQoaGlUZW1wRikrJ8KwRic7XG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiBzZXRJc0NlbHNpdXModmFsdWUpe1xuICAgIGlzQ2Vsc2l1cyA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBzZXRJc01waCh2YWx1ZSl7XG4gICAgaXNNcGggPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheUVycm9yTXNnKG1zZyl7XG4gICAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBtc2c7XG59XG5cblxuZXhwb3J0IHtcbiAgICBzZXRBbGxWYWx1ZXMsIFxuICAgIGluaXQsIFxuICAgIHNldElzQ2Vsc2l1cywgXG4gICAgc2V0SXNNcGgsXG4gICAgZGlzcGxheUVycm9yTXNnLFxuICAgIH07IiwiaW1wb3J0ICogYXMgQVBJIGZyb20gJy4vYXBpJztcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL2RvbSc7XG5cbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYm94ID4gYnV0dG9uJylcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ib3ggPiBpbnB1dCcpO1xuY29uc3QgY2Vsc2l1c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjLWJ0bicpO1xuY29uc3QgZmFocmVuaGVpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmLWJ0bicpO1xuY29uc3QgbXBoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21waC1idG4nKTtcbmNvbnN0IGttQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ttLWJ0bicpO1xuY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXktYnRuJyk7XG5jb25zdCB3ZWVrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWstYnRuJyk7XG5jb25zdCBob3VybHlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1mb3JlY2FzdCcpO1xuY29uc3QgZGFpbHlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhaWx5LWZvcmVjYXN0Jyk7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZVNlYXJjaEJ0bkNsaWNrKCl7XG4gICAgbGV0IHVzZXJJbnB1dCA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGlmKHVzZXJJbnB1dCA9PSAnJykgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coJ2lucHV0ICcsIHVzZXJJbnB1dCk7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IEFQSS5nZXRGb3JlY2FzdCh1c2VySW5wdXQpO1xuICAgIFxuICAgIC8vbmVlZCB0byBjaGVjayByZXN1bHQgZm9yIGVycm9ycyBeXG4gICAgaWYocmVzdWx0ID09PSB1bmRlZmluZWQpe1xuICAgICAgICBjb25zb2xlLmxvZygnYmxsbG9vb29wJyk7XG4gICAgfSBlbHNle1xuICAgICAgICBET00uc2V0QWxsVmFsdWVzKHJlc3VsdCk7XG4gICAgfVxuXG4gICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9DZWxzaXVzKCl7XG4gICAgY2Vsc2l1c0J0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGZhaHJlbmhlaXRCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9GYWhyZW5oZWl0KCl7XG4gICAgZmFocmVuaGVpdEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGNlbHNpdXNCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2Vsc2l1c0J0bkNsaWNrKCl7XG4gICAgaWYoY2Vsc2l1c0J0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHJldHVybjtcbiAgICBjaGFuZ2VUb0NlbHNpdXMoKTtcbiAgICAvLyBtYWtlIGEgbmV3IGNhbGw/IE5vLi4uXG4gICAgY29uc3Qgd2VhdGhlck9iaiA9IEFQSS5nZXRMYXRlc3RXZWF0aGVyT2JqKCk7XG4gICAgRE9NLnNldElzQ2Vsc2l1cyh0cnVlKTtcbiAgICBET00uc2V0QWxsVmFsdWVzKHdlYXRoZXJPYmopO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVGYWhyZW5oZWl0QnRuQ2xpY2soKXtcbiAgICBpZihmYWhyZW5oZWl0QnRuLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuICAgIGNoYW5nZVRvRmFocmVuaGVpdCgpO1xuICAgIC8vIG1ha2UgYSBuZXcgY2FsbD8gTm8uLi5cbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gQVBJLmdldExhdGVzdFdlYXRoZXJPYmooKTtcbiAgICBET00uc2V0SXNDZWxzaXVzKGZhbHNlKTtcbiAgICBET00uc2V0QWxsVmFsdWVzKHdlYXRoZXJPYmopO1xufVxuZnVuY3Rpb24gY2hhbmdlVG9NcGgoKXtcbiAgICBtcGhCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBrbUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0ttKCl7XG4gICAga21CdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBtcGhCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTXBoQnRuQ2xpY2soKXtcbiAgICBpZihtcGhCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSByZXR1cm47XG4gICAgY2hhbmdlVG9NcGgoKTtcbiAgICAvLyBtYWtlIGEgbmV3IGNhbGw/IE5vLi4uXG4gICAgY29uc3Qgd2VhdGhlck9iaiA9IEFQSS5nZXRMYXRlc3RXZWF0aGVyT2JqKCk7XG4gICAgRE9NLnNldElzTXBoKHRydWUpO1xuICAgIERPTS5zZXRBbGxWYWx1ZXMod2VhdGhlck9iaik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUttQnRuQ2xpY2soKXtcbiAgICBpZihrbUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHJldHVybjtcbiAgICBjaGFuZ2VUb0ttKCk7XG4gICAgLy8gbWFrZSBhIG5ldyBjYWxsPyBOby4uLlxuICAgIGNvbnN0IHdlYXRoZXJPYmogPSBBUEkuZ2V0TGF0ZXN0V2VhdGhlck9iaigpO1xuICAgIERPTS5zZXRJc01waChmYWxzZSk7XG4gICAgRE9NLnNldEFsbFZhbHVlcyh3ZWF0aGVyT2JqKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9Ib3VybHlGb3JlY2FzdCgpe1xuICAgIGhvdXJseURpc3BsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgdG9kYXlCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBkYWlseURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgd2Vla0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRvRGFpbHlGb3JlY2FzdCgpe1xuICAgIGRhaWx5RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB3ZWVrQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgaG91cmx5RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB0b2RheUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXG59XG5cbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNlYXJjaEJ0bkNsaWNrKTtcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpPT57XG4gICAgaWYoZS5rZXkgPT0gJ0VudGVyJykgaGFuZGxlU2VhcmNoQnRuQ2xpY2soKTtcbn0pXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpPT57XG4gICAgRE9NLmRpc3BsYXlFcnJvck1zZygnJyk7XG59KVxuY2Vsc2l1c0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNlbHNpdXNCdG5DbGljayk7XG5mYWhyZW5oZWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlRmFocmVuaGVpdEJ0bkNsaWNrKTtcbm1waEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1waEJ0bkNsaWNrKTtcbmttQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlS21CdG5DbGljayk7XG50b2RheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRvSG91cmx5Rm9yZWNhc3QpO1xud2Vla0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVRvRGFpbHlGb3JlY2FzdCk7IiwiZnVuY3Rpb24gZ2V0TG9jYWxIb3VyKHdlYXRoZXJPYmope1xuICAvLyBob3cgSSBjdXQgb3V0IHRoZSBob3VyIGlzIGNhdXNpbmcgcHJvYmxlbXNcbiAgLy8gd2hlbiBpdCdzIGEgc2luZ2xlLWRpZ2l0IGhvdXJcbiAgLy8gc28gaSBkZWZhdWx0IGl0IHRvIGEgZGF0ZSBmb3JtYXRcbiAgLy8gYW5kIGN1dCB0aGUgaG91ciBmcm9tIHRoYXRcblxuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHdlYXRoZXJPYmoubG9jYXRpb24ubG9jYWx0aW1lKTtcbiAgbGV0IGhvdXIgPSBTdHJpbmcoZGF0ZSkuc3Vic3RyaW5nKDE2LCAxOCk7XG5cbiAgcmV0dXJuIGhvdXI7XG59XG5cbmZ1bmN0aW9uIGdldEhvdXJUb0Rpc3BsYXkoaG91ck9iail7XG4gICAgbGV0IHRpbWUgPSBob3VyT2JqLnRpbWU7XG4gICAgbGV0IGhvdXIgPSB0aW1lLnN1YnN0cmluZyh0aW1lLmxlbmd0aC01LCB0aW1lLmxlbmd0aCk7XG5cbiAgICByZXR1cm4gaG91cjtcbn1cblxuLy8gaGVscGZ1bCBmb3Igc2xpY2luZy4uLlxuLy8wMTIzNDU2Nzg5MDEyMzQ1Njc4OTAxMjNcbi8vVGh1IE9jdCAyNiAyMDIzIDEzOjE2OjAwIEdNVCswMTAwXG5cbi8vIGV4Y2VsbGVudCBwaWVjZSBvZiBoZWxwZXIgY29kZSBJIGJvcnJvd2VkICYgbW9kaWZpZWQgZnJvbVxuLy8gJ2h0dHBzOi8vZ2l0aHViLmNvbS9ic2NvdHRuei93ZWF0aGVyLWFwcC9ibG9iL21haW4vc3JjL2pzL3V0aWxzLmpzJ1xuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlLCBkYXRlRm9ybWF0ID0gJ2Z1bGwnLCB3YW50U2hvcnREYXkgPSBmYWxzZSkge1xuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBuZXcgRGF0ZShkYXRlKS50b1N0cmluZygpO1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZVN0cmluZy5zbGljZSg0LCA4KTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZVN0cmluZy5zbGljZSgxMywgMTUpO1xuICAgIGxldCBob3VyID0gZGF0ZVN0cmluZy5zbGljZSgxNiwxOCk7XG4gICAgbGV0IGRheU9mV2VlayA9IGRhdGVTdHJpbmcuc2xpY2UoMCwgMyk7XG4gICAgbGV0IGRheU9mTW9udGggPSBkYXRlU3RyaW5nLnNsaWNlKDgsIDEwKTtcbiAgICBsZXQgdGltZSA9IGRhdGVTdHJpbmcuc2xpY2UoMTYsMjEpO1xuICAgIGxldCBkYXlTdWZmaXg7XG4gICAgbGV0IHRpbWVTdWZmaXg7XG5cbiAgICAvL2NvbnNvbGUubG9nKCdkYXRlIHN0cmluZyAnLCBkYXRlU3RyaW5nKTtcbiAgXG4gICAgLy8gY2hhbmdlIDAxIHRvIDEgZXRjXG4gICAgaWYgKGRheU9mTW9udGggPCAxMCkge1xuICAgICAgZGF5T2ZNb250aCA9IGRheU9mTW9udGguc2xpY2UoMSk7XG4gICAgfVxuICBcbiAgICAvLyBnZW5lcmF0ZSBjb3JlY3QgZGF0ZSBkYXlTdWZmaXhcbiAgICBpZiAoZGF5T2ZNb250aC5zbGljZSgtMSkgPT09ICcxJykge1xuICAgICAgZGF5U3VmZml4ID0gJ3N0JztcbiAgICB9IGVsc2UgaWYgKGRheU9mTW9udGguc2xpY2UoLTEpID09PSAnMicpIHtcbiAgICAgIGRheVN1ZmZpeCA9ICduZCc7XG4gICAgfSBlbHNlIGlmIChkYXlPZk1vbnRoLnNsaWNlKC0xKSA9PT0gJzMnKSB7XG4gICAgICBkYXlTdWZmaXggPSAncmQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlTdWZmaXggPSAndGgnO1xuICAgIH1cblxuICAgIC8vIGdlbmVyYXRlIGNvcnJlY3QgdGltZSBzdWZmaXhcbiAgICBpZihob3VyIDw9IDEyKXtcbiAgICAgIHRpbWVTdWZmaXggPSAnYW0nO1xuICAgIH1lbHNle1xuICAgICAgdGltZVN1ZmZpeCA9ICdwbSc7XG4gICAgfVxuICAgIC8vIGFuZCAxMmhyIGZvcm1hdFxuICAgIGlmKGhvdXIgPiAxMil7XG4gICAgICBob3VyIC09IDEyO1xuICAgICAgdGltZSA9IFN0cmluZyhob3VyKS5zbGljZSgwLDIpKyc6Jyt0aW1lLnNsaWNlKDMsNSk7XG4gICAgfVxuICBcbiAgXG4gICAgLy8gdGhvc2UgcGVza3kgMTEsIDEyLCAxMyB0aHNcbiAgICBpZiAoZGF5T2ZNb250aCA+IDMgJiYgZGF5T2ZNb250aCA8IDIxKSB7XG4gICAgICBkYXlTdWZmaXggPSAndGgnO1xuICAgIH1cbiAgXG4gICAgLy8gY29udmVydCBzaG9ydCBkYXkgbmFtZSB0byBmdWxsIGRheSBuYW1lXG4gICAgaWYoIXdhbnRTaG9ydERheSl7ICAgIFxuICAgICAgICBpZiAoZGF5T2ZXZWVrID09PSAnTW9uJykge1xuICAgICAgICBkYXlPZldlZWsgPSAnTW9uZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdUdWUnKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdUdWVzZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdXZWQnKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdXZWRuZXNkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1RodScpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1RodXJzZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdGcmknKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdGcmlkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1NhdCcpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1NhdHVyZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdTdW4nKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdTdW5kYXknO1xuICAgICAgICB9XG4gICAgfVxuICBcbiAgICAvLyByZXR1cm4gb25seSB0aGUgZGF5IG9mIHdlZWtcbiAgICBpZiAoZGF0ZUZvcm1hdCA9PT0gJ2RheScpIHtcbiAgICAgIHJldHVybiBkYXlPZldlZWs7XG4gICAgfVxuICBcbiAgICAvLyByZXR1cm4gZnVsbCBkYXRlIHN0cmluZ1xuICAgIHJldHVybiBgJHt0aW1lfSR7dGltZVN1ZmZpeH0sICR7ZGF5T2ZXZWVrfSwgJHtkYXlPZk1vbnRofSR7ZGF5U3VmZml4fSAke21vbnRofSAnJHt5ZWFyfWA7XG4gIH1cblxuZXhwb3J0IHtcbiAgICBnZXRMb2NhbEhvdXIsXG4gICAgZ2V0SG91clRvRGlzcGxheSxcbiAgICBmb3JtYXREYXRlICAgIFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIEFQSSBmcm9tICcuL21vZHVsZXMvYXBpJztcbmltcG9ydCAqIGFzIEhlbHBlciBmcm9tICcuL21vZHVsZXMvaGVscGVycyc7XG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9tb2R1bGVzL2RvbSc7XG5pbXBvcnQgJy4vbW9kdWxlcy9ldmVudHMnO1xuXG5pbXBvcnQgJy4vc3R5bGVzL21haW4uc2Nzcyc7XG5cbi8vIHNldCBzb21lIHBsYWNlaG9sZGVyIHZhbHVlcyBmb3Igd2hlbiB0aGUgcGFnZVxuLy8gbG9hZHMgZm9yIHRoZSBmaXJzdCB0aW1lXG5mdW5jdGlvbiBkb21Jbml0KCl7XG4gICAgRE9NLmluaXQoKTtcbn1cblxuZG9tSW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9