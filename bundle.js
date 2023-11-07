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
  background-attachment: fixed;
  background-position: center;
  padding-top: 1rem;
  font-size: calc(0.8rem + 0.2vw);
  color: white;
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
  width: min(80%, 1000px);
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

.forecast-title {
  margin-top: 3rem;
  padding-bottom: 0.5rem;
  font-size: calc(1.2rem + 0.3vw);
  text-align: center;
}

.forecast {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  /*  box-shadow: -2px 0px 0px 0px rgba(102, 100, 100, 0.479), 
               2px 0px 0px 0px rgba(102, 100, 100, 0.479); */
  /* box-shadow: inset 10px 0 10px -5px rgba(102, 100, 100, 0.479),
              inset -10px 0 10px -5px rgba(102, 100, 100, 0.479); */
}
.forecast .hourly-forecast {
  display: flex;
  gap: 0.8rem;
  overflow-x: scroll;
}
@media (min-width: 1225px) {
  .forecast .hourly-forecast {
    overflow-x: hidden;
  }
}
.forecast .hourly-forecast > div {
  z-index: 1;
  width: 100px;
  padding-block: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.151);
}
.forecast .hourly-forecast > div .hour__time {
  font-size: calc(1.2rem + 0.3vw);
}
.forecast .hourly-forecast > div .img-container {
  width: 70px;
  height: 75px;
}
.forecast .hourly-forecast > div .img-container img {
  width: 100%;
  height: 70px;
  padding: 0;
}
.forecast .hourly-forecast > div .hour__temperature {
  font-size: calc(0.9rem + 0.2vw);
}`, "",{"version":3,"sources":["webpack://./src/styles/_layout.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AAYA;;;EAGE,SAAA;EACA,UAAA;EACA,sBAAA;EAGA,iCAAA;ACZF;;ADeA;EACI,eAAA;ACZJ;;ADeA;EACI,aAAA;EACA,YAAA;EACA,wIAAA;EACA,sBAAA;EACA,4BAAA;EACA,2BAAA;EACA,iBAAA;EAEA,+BA3BS;EA4BT,YAAA;ACbJ;;ADiBA;EAEI,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,mBAAA;EACA,WAAA;EACA,gBAAA;AChBJ;ADkBI;EAVJ;IAWQ,kBAAA;ECfN;AACF;ADmBI;EACI,uBAAA;ACjBR;ADmBQ;EAEI,sBAAA;AClBZ;;ADwBA;EAII,aAAA;EACA,uBAAA;EACA,gBAAA;ACxBJ;AD0BI;EACI,YAAA;EACA,8BAAA;EACA,gBAAA;ACxBR;AD2BI;EACI,YAAA;EACA,YAAA;EACA,+BA7EG;EA8EH,0BAAA;EACA,yBAAA;ACzBR;AD2BQ;EACI,iCAAA;EACA,+BAnFD;EAoFC,oBAAA;ACzBZ;AD4BQ;EACI,aAAA;AC1BZ;AD8BI;EACI,YAAA;EACA,WAAA;EACA,yDAAA;EACA,2BAAA;EACA,4BAAA;EACA,sBAAA;AC5BR;;ADiCA;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,yBAAA;EAEA,+BA5GS;EA6GT,yBAAA;AC/BJ;;ADkCA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EAGA,sCA9HO;EA+HP,mBAAA;EACA,4BAAA;ACjCJ;ADmCI;EACI,eAAA;EACA,kBAAA;ACjCR;ADqCI;EACI,+BApIK;ACiGb;ADsCI;EACI,+BAtIK;EAuIL,iBAAA;ACpCR;ADuCI;EACI,+BA7IK;EA8IL,0BAAA;EACA,kBAAA;ACrCR;ADwCI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;ACtCR;ADwCQ;EACI,aAAA;ACtCZ;ADyCQ;EACI,kBAAA;EACA,eAAA;ACvCZ;AD8CI;EACI,aAAA;EACA,uBAAA;AC5CR;AD8CQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,iBAAA;EACA,UAAA;AC5CZ;AD8CY;EACI,WAAA;EACA,YAAA;AC5ChB;;ADkDA;EACI,uCAtLQ;ACuIZ;;ADkDA;EACI,uCA1LQ;EA2LR,qBAAA;AC/CJ;;ADkDA;EACI,+CAAA;EACA,mBAAA;AC/CJ;;ADoDA;EACI,aAAA;EACA,8BAAA;ACjDJ;ADmDI;EACI,WAAA;EACA,YAAA;EACA,qBAAA;EACA,sCArNG;EAuNH,yBAAA;EACA,YAAA;AClDR;ADqDI;EACI,YAAA;EACA,sCA7NG;EA8NH,gBAAA;ACnDR;;ADuDA;EACI,gBAAA;EACA,sBAAA;EACA,+BAhOS;EAiOT,kBAAA;ACpDJ;;ADyDA;EACI,aAAA;EACA,uBAAA;EACA,mBAAA;EAGD;4DAAA;EAEC;mEAAA;ACvDJ;AD0DI;EACI,aAAA;EACA,WAAA;EACA,kBAAA;ACxDR;AD0DQ;EALJ;IAMQ,kBAAA;ECvDV;AACF;AD4DQ;EACI,UAAA;EACA,YAAA;EACA,mBAAA;EAEA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,kBAAA;EAEA,sCA9QD;ACkNX;AD8DY;EACI,+BA5QH;ACgNb;AD+DY;EACI,WAAA;EACA,YAAA;AC7DhB;AD+DgB;EACI,WAAA;EACA,YAAA;EACA,UAAA;AC7DpB;ADiEY;EACI,+BA1RL;AC2NX","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap');\n\n$bg-color: rgba(0, 0, 0, 0.151);\n$bg-gradient: linear-gradient(to right, #0000008a, #0000008a);\n$bg-image: url('../assets/peak-district.jpg');\n\n// sizes\n$large-font: calc(1.2rem + 0.3vw);\n$med-font: calc(0.9rem + 0.2vw);\n$small-font: calc(0.8rem + 0.2vw);\n$unit-size: calc($small-font - 0.2vw);\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n\n  //font-family: 'Open Sans', sans-serif;\n  font-family: 'Roboto', sans-serif;\n}\n\nbutton{\n    cursor: pointer;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    background: $bg-gradient, $bg-image;\n    background-size: cover;\n    background-attachment: fixed;\n    background-position: center;\n    padding-top: 1rem;\n\n    font-size: $small-font;\n    color: white;\n\n}\n\n.container{\n    //backdrop-filter: blur(2px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    //gap: 1rem;\n    margin-inline: auto;\n    width: 100%;\n    max-height: 100%;\n\n    @media screen and (max-width: 600px) {\n        overflow-y: scroll;\n\n    }\n    \n    \n    >div{\n        width: min(80%, 1000px);\n\n        &.main-info,\n        &.options{\n            width: min(80%, 400px)\n        }\n    }\n}\n\n\n.search-box{\n    //background-color: rgba(0, 128, 0, 0.5);\n    //padding: 1rem 1.5rem;\n\n    display: flex;\n    justify-content: center;\n    margin-top: 1rem;\n\n    *{\n        border: none;\n        border-bottom: 2px solid white;\n        background: none;\n    }\n    \n    input{\n        height: 2rem;\n        color: white;\n        font-size: $med-font;\n        padding: 0 0 0.1rem 0.8rem;\n        text-transform: uppercase;\n        \n        &::placeholder{\n            color: rgba(255, 255, 255, 0.548);\n            font-size: $med-font;\n            padding-left: 0.2rem;\n        }\n\n        &:focus{\n            outline: none;\n        }\n    }\n\n    button{\n        height: 2rem;\n        width:  2rem;\n        background-image: url(../assets/search-icon.png);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n}\n\n.error-msg{\n    display: flex;\n    justify-content: center;\n    min-height: 1rem;\n    margin-block: 0.2rem 1rem;\n\n    font-size: $small-font;\n    color: rgb(255, 255, 255);\n}\n\n.main-info{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.2rem;\n\n    \n    background-color: $bg-color;\n    padding-block: 1rem;\n    border-radius: 10px 10px 0 0;\n\n    >div{\n        min-width: 100%;\n        text-align: center;\n        \n    }\n\n    .city{\n        font-size: $large-font;\n    }\n    \n    .date{\n        font-size: $small-font;\n        color: whitesmoke;\n    }\n    \n    .status{\n        font-size: $large-font;\n        text-transform: capitalize;\n        margin-top: 1.5rem;\n    }\n\n    .img-and-temp{\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n\n        img{\n            width: 6.5rem;\n        }\n        \n        .temperature{\n            position: relative;\n            font-size: 2rem;\n        }\n        \n    }\n    \n\n    \n    .stats{\n        display: flex;\n        margin: 1.5rem 0 0.2rem;\n    \n        .stat-box{\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 10px;\n            line-height: 1rem;\n            flex: 0.25;\n\n            img{\n                width: 30px;\n                height: 30px;\n            }            \n        }\n    }\n}\n\n.wind-unit{\n    font-size: $unit-size;\n}\n\n.temp-unit{\n    font-size: $unit-size;\n    vertical-align: super;\n}\n\n.feels-like-temp-unit{\n    font-size: calc($unit-size * 0.9);\n    vertical-align: top;\n}\n\n\n\n.options{\n    display: flex;\n    justify-content: space-between;\n\n    button{\n        width: 60px;\n        height: 100%;\n        padding-block: 0.2rem;\n        background-color: $bg-color;\n        \n        color: rgb(145, 145, 145);\n        border: none;\n    }\n    \n    button.selected{\n        color: white;\n        background-color:  $bg-color;\n        font-weight: 600;\n    }\n}\n\n.forecast-title{\n    margin-top: 3rem;\n    padding-bottom: 0.5rem;\n    font-size: $large-font;\n    text-align: center;\n    //text-transform: uppercase;\n    //background-color: $bg-color;\n}\n\n.forecast{\n    display: flex;\n    justify-content: center;\n    margin-bottom: 1rem;\n\n    //put some shadow/blur effect on sides\n   /*  box-shadow: -2px 0px 0px 0px rgba(102, 100, 100, 0.479), \n                2px 0px 0px 0px rgba(102, 100, 100, 0.479); */\n    /* box-shadow: inset 10px 0 10px -5px rgba(102, 100, 100, 0.479),\n                inset -10px 0 10px -5px rgba(102, 100, 100, 0.479); */\n\n    .hourly-forecast{\n        display: flex;\n        gap: 0.8rem;\n        overflow-x: scroll;\n\n        @media (min-width: 1225px){\n            overflow-x: hidden;\n\n        }\n    \n        //padding-bottom: 3em;\n    \n        >div{\n            z-index: 1;\n            width: 100px;\n            padding-block: 1rem;\n    \n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: space-between;\n            gap: 2rem;\n            text-align: center;\n    \n            background-color:  $bg-color;\n    \n            .hour__time{\n                font-size: $large-font;\n            }\n    \n            .img-container{\n                width: 70px;\n                height: 75px;\n    \n                img{\n                    width: 100%;\n                    height: 70px;\n                    padding: 0;\n                } \n            }\n\n            .hour__temperature{\n                font-size: $med-font;\n            }\n    \n        \n        }    \n    }\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.5411764706), rgba(0, 0, 0, 0.5411764706)), url(\"../assets/peak-district.jpg\");\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n  padding-top: 1rem;\n  font-size: calc(0.8rem + 0.2vw);\n  color: white;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-inline: auto;\n  width: 100%;\n  max-height: 100%;\n}\n@media screen and (max-width: 600px) {\n  .container {\n    overflow-y: scroll;\n  }\n}\n.container > div {\n  width: min(80%, 1000px);\n}\n.container > div.main-info, .container > div.options {\n  width: min(80%, 400px);\n}\n\n.search-box {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n.search-box * {\n  border: none;\n  border-bottom: 2px solid white;\n  background: none;\n}\n.search-box input {\n  height: 2rem;\n  color: white;\n  font-size: calc(0.9rem + 0.2vw);\n  padding: 0 0 0.1rem 0.8rem;\n  text-transform: uppercase;\n}\n.search-box input::placeholder {\n  color: rgba(255, 255, 255, 0.548);\n  font-size: calc(0.9rem + 0.2vw);\n  padding-left: 0.2rem;\n}\n.search-box input:focus {\n  outline: none;\n}\n.search-box button {\n  height: 2rem;\n  width: 2rem;\n  background-image: url(../assets/search-icon.png);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.error-msg {\n  display: flex;\n  justify-content: center;\n  min-height: 1rem;\n  margin-block: 0.2rem 1rem;\n  font-size: calc(0.8rem + 0.2vw);\n  color: rgb(255, 255, 255);\n}\n\n.main-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.151);\n  padding-block: 1rem;\n  border-radius: 10px 10px 0 0;\n}\n.main-info > div {\n  min-width: 100%;\n  text-align: center;\n}\n.main-info .city {\n  font-size: calc(1.2rem + 0.3vw);\n}\n.main-info .date {\n  font-size: calc(0.8rem + 0.2vw);\n  color: whitesmoke;\n}\n.main-info .status {\n  font-size: calc(1.2rem + 0.3vw);\n  text-transform: capitalize;\n  margin-top: 1.5rem;\n}\n.main-info .img-and-temp {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.main-info .img-and-temp img {\n  width: 6.5rem;\n}\n.main-info .img-and-temp .temperature {\n  position: relative;\n  font-size: 2rem;\n}\n.main-info .stats {\n  display: flex;\n  margin: 1.5rem 0 0.2rem;\n}\n.main-info .stats .stat-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  line-height: 1rem;\n  flex: 0.25;\n}\n.main-info .stats .stat-box img {\n  width: 30px;\n  height: 30px;\n}\n\n.wind-unit {\n  font-size: calc(0.8rem + 0.2vw - 0.2vw);\n}\n\n.temp-unit {\n  font-size: calc(0.8rem + 0.2vw - 0.2vw);\n  vertical-align: super;\n}\n\n.feels-like-temp-unit {\n  font-size: calc((0.8rem + 0.2vw - 0.2vw) * 0.9);\n  vertical-align: top;\n}\n\n.options {\n  display: flex;\n  justify-content: space-between;\n}\n.options button {\n  width: 60px;\n  height: 100%;\n  padding-block: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.151);\n  color: rgb(145, 145, 145);\n  border: none;\n}\n.options button.selected {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.151);\n  font-weight: 600;\n}\n\n.forecast-title {\n  margin-top: 3rem;\n  padding-bottom: 0.5rem;\n  font-size: calc(1.2rem + 0.3vw);\n  text-align: center;\n}\n\n.forecast {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 1rem;\n  /*  box-shadow: -2px 0px 0px 0px rgba(102, 100, 100, 0.479), \n               2px 0px 0px 0px rgba(102, 100, 100, 0.479); */\n  /* box-shadow: inset 10px 0 10px -5px rgba(102, 100, 100, 0.479),\n              inset -10px 0 10px -5px rgba(102, 100, 100, 0.479); */\n}\n.forecast .hourly-forecast {\n  display: flex;\n  gap: 0.8rem;\n  overflow-x: scroll;\n}\n@media (min-width: 1225px) {\n  .forecast .hourly-forecast {\n    overflow-x: hidden;\n  }\n}\n.forecast .hourly-forecast > div {\n  z-index: 1;\n  width: 100px;\n  padding-block: 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.151);\n}\n.forecast .hourly-forecast > div .hour__time {\n  font-size: calc(1.2rem + 0.3vw);\n}\n.forecast .hourly-forecast > div .img-container {\n  width: 70px;\n  height: 75px;\n}\n.forecast .hourly-forecast > div .img-container img {\n  width: 100%;\n  height: 70px;\n  padding: 0;\n}\n.forecast .hourly-forecast > div .hour__temperature {\n  font-size: calc(0.9rem + 0.2vw);\n}"],"sourceRoot":""}]);
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

function getHourlyStats(i) {

    let hour = Number(_helpers__WEBPACK_IMPORTED_MODULE_0__.getLocalHour(lastForecast));
    hour += (i);
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

/* function getDailyStats(index){
    let dailyObj = lastForecast.forecast.forecastday[index];

    // helper to get nice date
    let dayToDisplay;
    if(index === 0){
        dayToDisplay = 'Today';
    }else{
        dayToDisplay = Helpers.formatDate(dailyObj.date, 'day', true);
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
} */

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
//const dayDivs = [...document.querySelectorAll('.daily-forecast > div')];

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
    //setDailyValues();
}

function setHourlyValues(){
    hourDivs.forEach((div, i) =>{
        let {hourToDisplay, status, icon, altText, tempC, tempF} = _api__WEBPACK_IMPORTED_MODULE_0__.getHourlyStats(i);

        div.children[0].textContent = hourToDisplay.slice(0,2);
        div.children[1].children[0].src = icon;
        div.children[1].alt = altText;
        div.children[2].textContent = status;
        div.children[3].textContent = isCelsius ? 
            tempC+'°C' :
            tempF+'°F';
    })
}

/* function setDailyValues(){
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
            } = API.getDailyStats(i);
        
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

} */

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
//const todayBtn = document.getElementById('today-btn');
//const weekBtn = document.getElementById('week-btn');
const hourlyDisplay = document.querySelector('.hourly-forecast');
//const dailyDisplay = document.querySelector('.daily-forecast');

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

/* function changeToHourlyForecast(){
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

} */

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
/* todayBtn.addEventListener('click', changeToHourlyForecast);
weekBtn.addEventListener('click', changeToDailyForecast); */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsa0lBQThDO0FBQzFGLDRDQUE0Qyw4SEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4SUFBOEk7QUFDOUkseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUdBQXlHLG1DQUFtQztBQUM1STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLCtIQUErSCxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxLQUFLLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFlBQVksV0FBVyxNQUFNLE1BQU0sV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxPQUFPLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxZQUFZLFlBQVksV0FB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Ozs7Ozs7OztVQ2xHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFDO0FBQ087QUFDUDtBQUNYOztBQUVFOztBQUU1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhDQUFRO0FBQ1o7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvcGVhay1kaXN0cmljdC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvc2VhcmNoLWljb24ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA1MDAmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41NDExNzY0NzA2KSwgcmdiYSgwLCAwLCAwLCAwLjU0MTE3NjQ3MDYpKSwgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuLmNvbnRhaW5lciA+IGRpdiB7XG4gIHdpZHRoOiBtaW4oODAlLCAxMDAwcHgpO1xufVxuLmNvbnRhaW5lciA+IGRpdi5tYWluLWluZm8sIC5jb250YWluZXIgPiBkaXYub3B0aW9ucyB7XG4gIHdpZHRoOiBtaW4oODAlLCA0MDBweCk7XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG4uc2VhcmNoLWJveCAqIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4uc2VhcmNoLWJveCBpbnB1dCB7XG4gIGhlaWdodDogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IGNhbGMoMC45cmVtICsgMC4ydncpO1xuICBwYWRkaW5nOiAwIDAgMC4xcmVtIDAuOHJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zZWFyY2gtYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ4KTtcbiAgZm9udC1zaXplOiBjYWxjKDAuOXJlbSArIDAuMnZ3KTtcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XG59XG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc2VhcmNoLWJveCBidXR0b24ge1xuICBoZWlnaHQ6IDJyZW07XG4gIHdpZHRoOiAycmVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmVycm9yLW1zZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAxcmVtO1xuICBtYXJnaW4tYmxvY2s6IDAuMnJlbSAxcmVtO1xuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncpO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4ubWFpbi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xufVxuLm1haW4taW5mbyA+IGRpdiB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW4taW5mbyAuY2l0eSB7XG4gIGZvbnQtc2l6ZTogY2FsYygxLjJyZW0gKyAwLjN2dyk7XG59XG4ubWFpbi1pbmZvIC5kYXRlIHtcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3KTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG4ubWFpbi1pbmZvIC5zdGF0dXMge1xuICBmb250LXNpemU6IGNhbGMoMS4ycmVtICsgMC4zdncpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAgaW1nIHtcbiAgd2lkdGg6IDYuNXJlbTtcbn1cbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCAudGVtcGVyYXR1cmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5tYWluLWluZm8gLnN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxLjVyZW0gMCAwLjJyZW07XG59XG4ubWFpbi1pbmZvIC5zdGF0cyAuc3RhdC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICBmbGV4OiAwLjI1O1xufVxuLm1haW4taW5mbyAuc3RhdHMgLnN0YXQtYm94IGltZyB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi53aW5kLXVuaXQge1xuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncgLSAwLjJ2dyk7XG59XG5cbi50ZW1wLXVuaXQge1xuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncgLSAwLjJ2dyk7XG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcbn1cblxuLmZlZWxzLWxpa2UtdGVtcC11bml0IHtcbiAgZm9udC1zaXplOiBjYWxjKCgwLjhyZW0gKyAwLjJ2dyAtIDAuMnZ3KSAqIDAuOSk7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm9wdGlvbnMgYnV0dG9uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy1ibG9jazogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcbiAgY29sb3I6IHJnYigxNDUsIDE0NSwgMTQ1KTtcbiAgYm9yZGVyOiBub25lO1xufVxuLm9wdGlvbnMgYnV0dG9uLnNlbGVjdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZvcmVjYXN0LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgZm9udC1zaXplOiBjYWxjKDEuMnJlbSArIDAuM3Z3KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9yZWNhc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgLyogIGJveC1zaGFkb3c6IC0ycHggMHB4IDBweCAwcHggcmdiYSgxMDIsIDEwMCwgMTAwLCAwLjQ3OSksIFxuICAgICAgICAgICAgICAgMnB4IDBweCAwcHggMHB4IHJnYmEoMTAyLCAxMDAsIDEwMCwgMC40NzkpOyAqL1xuICAvKiBib3gtc2hhZG93OiBpbnNldCAxMHB4IDAgMTBweCAtNXB4IHJnYmEoMTAyLCAxMDAsIDEwMCwgMC40NzkpLFxuICAgICAgICAgICAgICBpbnNldCAtMTBweCAwIDEwcHggLTVweCByZ2JhKDEwMiwgMTAwLCAxMDAsIDAuNDc5KTsgKi9cbn1cbi5mb3JlY2FzdCAuaG91cmx5LWZvcmVjYXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjhyZW07XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjI1cHgpIHtcbiAgLmZvcmVjYXN0IC5ob3VybHktZm9yZWNhc3Qge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxufVxuLmZvcmVjYXN0IC5ob3VybHktZm9yZWNhc3QgPiBkaXYge1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xufVxuLmZvcmVjYXN0IC5ob3VybHktZm9yZWNhc3QgPiBkaXYgLmhvdXJfX3RpbWUge1xuICBmb250LXNpemU6IGNhbGMoMS4ycmVtICsgMC4zdncpO1xufVxuLmZvcmVjYXN0IC5ob3VybHktZm9yZWNhc3QgPiBkaXYgLmltZy1jb250YWluZXIge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3NXB4O1xufVxuLmZvcmVjYXN0IC5ob3VybHktZm9yZWNhc3QgPiBkaXYgLmltZy1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogMDtcbn1cbi5mb3JlY2FzdCAuaG91cmx5LWZvcmVjYXN0ID4gZGl2IC5ob3VyX190ZW1wZXJhdHVyZSB7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjlyZW0gKyAwLjJ2dyk7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBWUE7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFHQSxpQ0FBQTtBQ1pGOztBRGVBO0VBQ0ksZUFBQTtBQ1pKOztBRGVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx3SUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBRUEsK0JBM0JTO0VBNEJULFlBQUE7QUNiSjs7QURpQkE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDaEJKO0FEa0JJO0VBVko7SUFXUSxrQkFBQTtFQ2ZOO0FBQ0Y7QURtQkk7RUFDSSx1QkFBQTtBQ2pCUjtBRG1CUTtFQUVJLHNCQUFBO0FDbEJaOztBRHdCQTtFQUlJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDeEJKO0FEMEJJO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUN4QlI7QUQyQkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQTdFRztFQThFSCwwQkFBQTtFQUNBLHlCQUFBO0FDekJSO0FEMkJRO0VBQ0ksaUNBQUE7RUFDQSwrQkFuRkQ7RUFvRkMsb0JBQUE7QUN6Qlo7QUQ0QlE7RUFDSSxhQUFBO0FDMUJaO0FEOEJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5REFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQzVCUjs7QURpQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBRUEsK0JBNUdTO0VBNkdULHlCQUFBO0FDL0JKOztBRGtDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUdBLHNDQTlITztFQStIUCxtQkFBQTtFQUNBLDRCQUFBO0FDakNKO0FEbUNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDakNSO0FEcUNJO0VBQ0ksK0JBcElLO0FDaUdiO0FEc0NJO0VBQ0ksK0JBdElLO0VBdUlMLGlCQUFBO0FDcENSO0FEdUNJO0VBQ0ksK0JBN0lLO0VBOElMLDBCQUFBO0VBQ0Esa0JBQUE7QUNyQ1I7QUR3Q0k7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ3RDUjtBRHdDUTtFQUNJLGFBQUE7QUN0Q1o7QUR5Q1E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUN2Q1o7QUQ4Q0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUM1Q1I7QUQ4Q1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUM1Q1o7QUQ4Q1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzVDaEI7O0FEa0RBO0VBQ0ksdUNBdExRO0FDdUlaOztBRGtEQTtFQUNJLHVDQTFMUTtFQTJMUixxQkFBQTtBQy9DSjs7QURrREE7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0FDL0NKOztBRG9EQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ2pESjtBRG1ESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FyTkc7RUF1TkgseUJBQUE7RUFDQSxZQUFBO0FDbERSO0FEcURJO0VBQ0ksWUFBQTtFQUNBLHNDQTdORztFQThOSCxnQkFBQTtBQ25EUjs7QUR1REE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBaE9TO0VBaU9ULGtCQUFBO0FDcERKOztBRHlEQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBR0Q7NERBQUE7RUFFQzttRUFBQTtBQ3ZESjtBRDBESTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUN4RFI7QUQwRFE7RUFMSjtJQU1RLGtCQUFBO0VDdkRWO0FBQ0Y7QUQ0RFE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUVBLHNDQTlRRDtBQ2tOWDtBRDhEWTtFQUNJLCtCQTVRSDtBQ2dOYjtBRCtEWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDN0RoQjtBRCtEZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUM3RHBCO0FEaUVZO0VBQ0ksK0JBMVJMO0FDMk5YXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbiRiZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XFxuJGJnLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDA4YSwgIzAwMDAwMDhhKTtcXG4kYmctaW1hZ2U6IHVybCgnLi4vYXNzZXRzL3BlYWstZGlzdHJpY3QuanBnJyk7XFxuXFxuLy8gc2l6ZXNcXG4kbGFyZ2UtZm9udDogY2FsYygxLjJyZW0gKyAwLjN2dyk7XFxuJG1lZC1mb250OiBjYWxjKDAuOXJlbSArIDAuMnZ3KTtcXG4kc21hbGwtZm9udDogY2FsYygwLjhyZW0gKyAwLjJ2dyk7XFxuJHVuaXQtc2l6ZTogY2FsYygkc21hbGwtZm9udCAtIDAuMnZ3KTtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIC8vZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiAkYmctZ3JhZGllbnQsICRiZy1pbWFnZTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAkc21hbGwtZm9udDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbn1cXG5cXG4uY29udGFpbmVye1xcbiAgICAvL2JhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvL2dhcDogMXJlbTtcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxuXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuXFxuICAgIH1cXG4gICAgXFxuICAgIFxcbiAgICA+ZGl2e1xcbiAgICAgICAgd2lkdGg6IG1pbig4MCUsIDEwMDBweCk7XFxuXFxuICAgICAgICAmLm1haW4taW5mbyxcXG4gICAgICAgICYub3B0aW9uc3tcXG4gICAgICAgICAgICB3aWR0aDogbWluKDgwJSwgNDAwcHgpXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuXFxuLnNlYXJjaC1ib3h7XFxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAxMjgsIDAsIDAuNSk7XFxuICAgIC8vcGFkZGluZzogMXJlbSAxLjVyZW07XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcblxcbiAgICAqe1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgaW5wdXR7XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6ICRtZWQtZm9udDtcXG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjFyZW0gMC44cmVtO1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgIFxcbiAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XFxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDgpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJG1lZC1mb250O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJjpmb2N1c3tcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIGhlaWdodDogMnJlbTtcXG4gICAgICAgIHdpZHRoOiAgMnJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvc2VhcmNoLWljb24ucG5nKTtcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB9XFxuXFxufVxcblxcbi5lcnJvci1tc2d7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgICBtYXJnaW4tYmxvY2s6IDAuMnJlbSAxcmVtO1xcblxcbiAgICBmb250LXNpemU6ICRzbWFsbC1mb250O1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4ubWFpbi1pbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDAuMnJlbTtcXG5cXG4gICAgXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZy1jb2xvcjtcXG4gICAgcGFkZGluZy1ibG9jazogMXJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG5cXG4gICAgPmRpdntcXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIFxcbiAgICB9XFxuXFxuICAgIC5jaXR5e1xcbiAgICAgICAgZm9udC1zaXplOiAkbGFyZ2UtZm9udDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmRhdGV7XFxuICAgICAgICBmb250LXNpemU6ICRzbWFsbC1mb250O1xcbiAgICAgICAgY29sb3I6IHdoaXRlc21va2U7XFxuICAgIH1cXG4gICAgXFxuICAgIC5zdGF0dXN7XFxuICAgICAgICBmb250LXNpemU6ICRsYXJnZS1mb250O1xcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxLjVyZW07XFxuICAgIH1cXG5cXG4gICAgLmltZy1hbmQtdGVtcHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgICAgICBpbWd7XFxuICAgICAgICAgICAgd2lkdGg6IDYuNXJlbTtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLnRlbXBlcmF0dXJle1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgfVxcbiAgICBcXG5cXG4gICAgXFxuICAgIC5zdGF0c3tcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBtYXJnaW46IDEuNXJlbSAwIDAuMnJlbTtcXG4gICAgXFxuICAgICAgICAuc3RhdC1ib3h7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgICAgICAgICAgIGZsZXg6IDAuMjU7XFxuXFxuICAgICAgICAgICAgaW1ne1xcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4ud2luZC11bml0e1xcbiAgICBmb250LXNpemU6ICR1bml0LXNpemU7XFxufVxcblxcbi50ZW1wLXVuaXR7XFxuICAgIGZvbnQtc2l6ZTogJHVuaXQtc2l6ZTtcXG4gICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xcbn1cXG5cXG4uZmVlbHMtbGlrZS10ZW1wLXVuaXR7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygkdW5pdC1zaXplICogMC45KTtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuXFxuXFxuLm9wdGlvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXG4gICAgYnV0dG9ue1xcbiAgICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBwYWRkaW5nLWJsb2NrOiAwLjJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuICAgICAgICBcXG4gICAgICAgIGNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgIGJ1dHRvbi5zZWxlY3RlZHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkYmctY29sb3I7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB9XFxufVxcblxcbi5mb3JlY2FzdC10aXRsZXtcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG4gICAgZm9udC1zaXplOiAkbGFyZ2UtZm9udDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAvL3RleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xcbn1cXG5cXG4uZm9yZWNhc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcblxcbiAgICAvL3B1dCBzb21lIHNoYWRvdy9ibHVyIGVmZmVjdCBvbiBzaWRlc1xcbiAgIC8qICBib3gtc2hhZG93OiAtMnB4IDBweCAwcHggMHB4IHJnYmEoMTAyLCAxMDAsIDEwMCwgMC40NzkpLCBcXG4gICAgICAgICAgICAgICAgMnB4IDBweCAwcHggMHB4IHJnYmEoMTAyLCAxMDAsIDEwMCwgMC40NzkpOyAqL1xcbiAgICAvKiBib3gtc2hhZG93OiBpbnNldCAxMHB4IDAgMTBweCAtNXB4IHJnYmEoMTAyLCAxMDAsIDEwMCwgMC40NzkpLFxcbiAgICAgICAgICAgICAgICBpbnNldCAtMTBweCAwIDEwcHggLTVweCByZ2JhKDEwMiwgMTAwLCAxMDAsIDAuNDc5KTsgKi9cXG5cXG4gICAgLmhvdXJseS1mb3JlY2FzdHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDAuOHJlbTtcXG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG5cXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjI1cHgpe1xcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG5cXG4gICAgICAgIH1cXG4gICAgXFxuICAgICAgICAvL3BhZGRpbmctYm90dG9tOiAzZW07XFxuICAgIFxcbiAgICAgICAgPmRpdntcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgICAgICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgICBcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgZ2FwOiAycmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICRiZy1jb2xvcjtcXG4gICAgXFxuICAgICAgICAgICAgLmhvdXJfX3RpbWV7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGxhcmdlLWZvbnQ7XFxuICAgICAgICAgICAgfVxcbiAgICBcXG4gICAgICAgICAgICAuaW1nLWNvbnRhaW5lcntcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogNzVweDtcXG4gICAgXFxuICAgICAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgICAgICAgICAgfSBcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmhvdXJfX3RlbXBlcmF0dXJle1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6ICRtZWQtZm9udDtcXG4gICAgICAgICAgICB9XFxuICAgIFxcbiAgICAgICAgXFxuICAgICAgICB9ICAgIFxcbiAgICB9XFxufVxcblwiLFwiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANTAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXFxcIik7XFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjU0MTE3NjQ3MDYpLCByZ2JhKDAsIDAsIDAsIDAuNTQxMTc2NDcwNikpLCB1cmwoXFxcIi4uL2Fzc2V0cy9wZWFrLWRpc3RyaWN0LmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICB9XFxufVxcbi5jb250YWluZXIgPiBkaXYge1xcbiAgd2lkdGg6IG1pbig4MCUsIDEwMDBweCk7XFxufVxcbi5jb250YWluZXIgPiBkaXYubWFpbi1pbmZvLCAuY29udGFpbmVyID4gZGl2Lm9wdGlvbnMge1xcbiAgd2lkdGg6IG1pbig4MCUsIDQwMHB4KTtcXG59XFxuXFxuLnNlYXJjaC1ib3gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG59XFxuLnNlYXJjaC1ib3ggKiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG4uc2VhcmNoLWJveCBpbnB1dCB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IGNhbGMoMC45cmVtICsgMC4ydncpO1xcbiAgcGFkZGluZzogMCAwIDAuMXJlbSAwLjhyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uc2VhcmNoLWJveCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDgpO1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOXJlbSArIDAuMnZ3KTtcXG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xcbn1cXG4uc2VhcmNoLWJveCBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG4uc2VhcmNoLWJveCBidXR0b24ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3NlYXJjaC1pY29uLnBuZyk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmVycm9yLW1zZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgbWFyZ2luLWJsb2NrOiAwLjJyZW0gMXJlbTtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyk7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4ubWFpbi1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XFxuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcXG59XFxuLm1haW4taW5mbyA+IGRpdiB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5tYWluLWluZm8gLmNpdHkge1xcbiAgZm9udC1zaXplOiBjYWxjKDEuMnJlbSArIDAuM3Z3KTtcXG59XFxuLm1haW4taW5mbyAuZGF0ZSB7XFxuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxufVxcbi5tYWluLWluZm8gLnN0YXR1cyB7XFxuICBmb250LXNpemU6IGNhbGMoMS4ycmVtICsgMC4zdncpO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxufVxcbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAgaW1nIHtcXG4gIHdpZHRoOiA2LjVyZW07XFxufVxcbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCAudGVtcGVyYXR1cmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG4ubWFpbi1pbmZvIC5zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAxLjVyZW0gMCAwLjJyZW07XFxufVxcbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG4gIGZsZXg6IDAuMjU7XFxufVxcbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCBpbWcge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcblxcbi53aW5kLXVuaXQge1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3IC0gMC4ydncpO1xcbn1cXG5cXG4udGVtcC11bml0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyAtIDAuMnZ3KTtcXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXG59XFxuXFxuLmZlZWxzLWxpa2UtdGVtcC11bml0IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygoMC44cmVtICsgMC4ydncgLSAwLjJ2dykgKiAwLjkpO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuXFxuLm9wdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLm9wdGlvbnMgYnV0dG9uIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZy1ibG9jazogMC4ycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XFxuICBjb2xvcjogcmdiKDE0NSwgMTQ1LCAxNDUpO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG4ub3B0aW9ucyBidXR0b24uc2VsZWN0ZWQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZm9yZWNhc3QtdGl0bGUge1xcbiAgbWFyZ2luLXRvcDogM3JlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxuICBmb250LXNpemU6IGNhbGMoMS4ycmVtICsgMC4zdncpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIC8qICBib3gtc2hhZG93OiAtMnB4IDBweCAwcHggMHB4IHJnYmEoMTAyLCAxMDAsIDEwMCwgMC40NzkpLCBcXG4gICAgICAgICAgICAgICAycHggMHB4IDBweCAwcHggcmdiYSgxMDIsIDEwMCwgMTAwLCAwLjQ3OSk7ICovXFxuICAvKiBib3gtc2hhZG93OiBpbnNldCAxMHB4IDAgMTBweCAtNXB4IHJnYmEoMTAyLCAxMDAsIDEwMCwgMC40NzkpLFxcbiAgICAgICAgICAgICAgaW5zZXQgLTEwcHggMCAxMHB4IC01cHggcmdiYSgxMDIsIDEwMCwgMTAwLCAwLjQ3OSk7ICovXFxufVxcbi5mb3JlY2FzdCAuaG91cmx5LWZvcmVjYXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuOHJlbTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyMjVweCkge1xcbiAgLmZvcmVjYXN0IC5ob3VybHktZm9yZWNhc3Qge1xcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICB9XFxufVxcbi5mb3JlY2FzdCAuaG91cmx5LWZvcmVjYXN0ID4gZGl2IHtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogMTAwcHg7XFxuICBwYWRkaW5nLWJsb2NrOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XFxufVxcbi5mb3JlY2FzdCAuaG91cmx5LWZvcmVjYXN0ID4gZGl2IC5ob3VyX190aW1lIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxLjJyZW0gKyAwLjN2dyk7XFxufVxcbi5mb3JlY2FzdCAuaG91cmx5LWZvcmVjYXN0ID4gZGl2IC5pbWctY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiA3NXB4O1xcbn1cXG4uZm9yZWNhc3QgLmhvdXJseS1mb3JlY2FzdCA+IGRpdiAuaW1nLWNvbnRhaW5lciBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uZm9yZWNhc3QgLmhvdXJseS1mb3JlY2FzdCA+IGRpdiAuaG91cl9fdGVtcGVyYXR1cmUge1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOXJlbSArIDAuMnZ3KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuaW1wb3J0ICogYXMgSGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgZGlzcGxheUVycm9yTXNnIH0gZnJvbSBcIi4vZG9tXCI7XG5cblxuLy9jb25zdCBDVVJSRU5UX1VSTCA9ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NWI3MzYyZTg4MzhlNDRiZGE5MTEyNTMyNDIzMTcxMCc7XG5jb25zdCBGT1JFQ0FTVF9VUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NWI3MzYyZTg4MzhlNDRiZGE5MTEyNTMyNDIzMTcxMCZkYXlzPTYnO1xuXG4vLyBeXiB0aGUgZm9yZWNhc3QgdXJsIGNhbGwgYWxzbyBpbmNsdWRlcyB0aGUgY3VycmVudCB3ZWF0aGVyXG4vLyBzbyBubyBuZWVkIGZvciB0d28gc2VycGVyYXRlIGNhbGxzXG5cbi8vIHNvIHdlIGFsd2F5cyBrbm93IGN1cnJlbnQgc2VhcmNoZWQgbG9jYXRpb25cbmxldCBsYXN0TG9jYXRpb247XG5cbi8vIHN0b3JlIHRoZSBtb3N0IHJlY2VudCB3ZWF0aGVyIGNhbGwgc28gd2UgZG9uJ3Rcbi8vIGhhdmUgdG8gbWFrZSB1bm5lY2Vzc2FyeSBjYWxsc1xubGV0IGxhc3RGb3JlY2FzdDtcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChsb2NhdGlvbj0na2lsY29ybWFjJyl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtGT1JFQ0FTVF9VUkx9JnE9JHtsb2NhdGlvbn1gKTtcbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgcmVzcG9uc2UgaXMgZmluZVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvck1zZyhcIlNvcnJ5LCB3ZSdyZSBoYXZpbmcgdHJvdWJsZS4uLlwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFnZSBub3QgZm91bmQnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3JNc2coXCJTb3JyeSwgcHJvYmxlbXMgd2l0aCB0aGUgc2VydmVyLi4uXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJ2ZXIgZXJyb3InKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yTXNnKFwiU29ycnksIGNhbid0IGZpbmQgc3VjaCBhIHBsYWNlLi4uXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgUmVxdWVzdCcpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3JNc2coXCJTb3JyeSwgd2UncmUgaGF2aW5nIHRyb3VibGUuLi5cIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgfVxuICAgICAgICBsZXQgZm9yZWNhc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgbGFzdExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIGxhc3RGb3JlY2FzdCA9IGZvcmVjYXN0O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3JlY2FzdCBjYWxsZWQgJywgZm9yZWNhc3QpO1xuXG4gICAgICAgIHJldHVybiBmb3JlY2FzdFxuXG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuXG59XG5cblxuLy8gZm9yIHNvbWUgcmVhc29uLCBjaGFuY2Ugb2YgcmFpbiBpcyBzdG9yZWQgZGVlcCBpblxuLy8gZm9yZWNhc3QgPiBmb3JlY2FzdGRheSA+IDAgPiBob3VyID4gLi4uaG91cnMgPiBoZXJlXG4vLyBidXQgd2UgbmVlZCB0aGUgY3VycmVudCBob3VyIHRvIG1hdGNoIGl0IHVwIFxuLy8gc28gd2UgbWFrZSB1c2Ugb2YgYSBoZWxwZXIgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBcbi8vIHRoZSBjdXJyZW50IGxvY2FsIGhvdXJcbmZ1bmN0aW9uIGdldENoYW5jZU9mUmFpbigpe1xuICAgIGxldCBsb2NhbEhvdXIgPSAgTnVtYmVyKEhlbHBlcnMuZ2V0TG9jYWxIb3VyKGxhc3RGb3JlY2FzdCkpOyBcbiAgICBjb25zb2xlLmxvZygnbG9jYWwgaG91ciAnLCBsb2NhbEhvdXIubGVuZ3RoLCBsb2NhbEhvdXIpO1xuICAgIGNvbnNvbGUubG9nKCdsb2NhbCBob3VyIGNpdHknLCBsYXN0Rm9yZWNhc3QpO1xuICAgIGxldCBjaGFuY2VPZlJhaW4gPSBsYXN0Rm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltsb2NhbEhvdXJdLmNoYW5jZV9vZl9yYWluO1xuXG4gICAgcmV0dXJuIGNoYW5jZU9mUmFpbjtcbn1cblxuLy8gSE9VUkxZIFNUQVRTXG4vLyB0aGlzIGlzIHRoZSB0cmlja2llc3QgJiBidXNpZXN0IG9uZSwgSSBuZWVkIHRvIGdldCBob3VybHkgc3RhdHNcbi8vIGFuZCBkaXNwbGF5IHRoZW0gaW4gM2hyIGluY3JlbWVudHMgZnJvbSB0aGUgY3VycmVudCBob3VyLi4uXG4vLyB0aGlzIHRha2VzIGluIHRoZSBob3VyIGFuZCBnZXRzIG5lY2Vzc2FyeSBzdGF0cyBhcyBhbiBvYmplY3RcblxuZnVuY3Rpb24gZ2V0SG91cmx5U3RhdHMoaSkge1xuXG4gICAgbGV0IGhvdXIgPSBOdW1iZXIoSGVscGVycy5nZXRMb2NhbEhvdXIobGFzdEZvcmVjYXN0KSk7XG4gICAgaG91ciArPSAoaSk7XG4gICAgbGV0IGRheSA9IDA7XG5cbiAgICAvLyBjaGFuZ2UgdG8gbmV4dCBkYXkgd2hlbiB3ZSBwYXNzIG1pZG5pZ2h0XG4gICAgLy8gYW5kIGZpeCB0aGUgaG91ciBpLmUuIDI2IHdpbGwgYmUgMjYtMjQgPSAyYW1cbiAgICBpZihob3VyID4gMjMpe1xuICAgICAgICBob3VyIC09IDI0O1xuICAgICAgICBkYXkgPSAxO1xuICAgIH1cblxuICAgIGxldCBob3VyT2JqID0gbGFzdEZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uaG91cltob3VyXTtcbiAgICAvLyB0ZXN0aW5nXG5cbiAgICBsZXQgaG91clRvRGlzcGxheSA9IEhlbHBlcnMuZ2V0SG91clRvRGlzcGxheShob3VyT2JqKTtcbiAgICBsZXQgc3RhdHVzID0gaG91ck9iai5jb25kaXRpb24udGV4dDtcbiAgICBsZXQgaWNvbiA9IGhvdXJPYmouY29uZGl0aW9uLmljb247XG4gICAgbGV0IGFsdFRleHQgPSBob3VyT2JqLmNvbmRpdGlvbi50ZXh0O1xuICAgIGxldCB0ZW1wQyA9IGhvdXJPYmoudGVtcF9jO1xuICAgIGxldCB0ZW1wRiA9IGhvdXJPYmoudGVtcF9mO1xuXG4gICAgLy8gcm91bmQtb2ZmIHRlbXBzXG4gICAgdGVtcEMgPSBNYXRoLnJvdW5kKHRlbXBDKTtcbiAgICB0ZW1wRiA9IE1hdGgucm91bmQodGVtcEYpO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBob3VyVG9EaXNwbGF5LCBcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBpY29uLFxuICAgICAgICBhbHRUZXh0LCBcbiAgICAgICAgdGVtcEMsIFxuICAgICAgICB0ZW1wRlxuICAgIH07XG4gXG59XG5cbi8qIGZ1bmN0aW9uIGdldERhaWx5U3RhdHMoaW5kZXgpe1xuICAgIGxldCBkYWlseU9iaiA9IGxhc3RGb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVtpbmRleF07XG5cbiAgICAvLyBoZWxwZXIgdG8gZ2V0IG5pY2UgZGF0ZVxuICAgIGxldCBkYXlUb0Rpc3BsYXk7XG4gICAgaWYoaW5kZXggPT09IDApe1xuICAgICAgICBkYXlUb0Rpc3BsYXkgPSAnVG9kYXknO1xuICAgIH1lbHNle1xuICAgICAgICBkYXlUb0Rpc3BsYXkgPSBIZWxwZXJzLmZvcm1hdERhdGUoZGFpbHlPYmouZGF0ZSwgJ2RheScsIHRydWUpO1xuICAgIH1cbiAgICBsZXQgc3RhdHVzID0gZGFpbHlPYmouZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgIGxldCBpY29uID0gZGFpbHlPYmouZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIGxldCBhbHRUZXh0ID0gZGFpbHlPYmouZGF5LmNvbmRpdGlvbi50ZXh0O1xuICAgIGxldCBoaVRlbXBDID0gZGFpbHlPYmouZGF5Lm1heHRlbXBfYztcbiAgICBsZXQgbG93VGVtcEMgPSBkYWlseU9iai5kYXkubWludGVtcF9jO1xuICAgIGxldCBoaVRlbXBGID0gZGFpbHlPYmouZGF5Lm1heHRlbXBfZjtcbiAgICBsZXQgbG93VGVtcEYgPSBkYWlseU9iai5kYXkubWludGVtcF9mO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBkYXlUb0Rpc3BsYXksXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgaWNvbixcbiAgICAgICAgYWx0VGV4dCxcbiAgICAgICAgaGlUZW1wQyxcbiAgICAgICAgbG93VGVtcEMsXG4gICAgICAgIGhpVGVtcEYsXG4gICAgICAgIGxvd1RlbXBGLFxuICAgIH1cbn0gKi9cblxuZnVuY3Rpb24gZ2V0TGF0ZXN0V2VhdGhlck9iaigpe1xuICAgIHJldHVybiBsYXN0Rm9yZWNhc3Q7XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0Rm9yZWNhc3QsXG4gICAgZ2V0Q2hhbmNlT2ZSYWluLCBcbiAgICBnZXRMYXRlc3RXZWF0aGVyT2JqLFxuICAgIGdldEhvdXJseVN0YXRzLFxuICAgIC8qIGdldERhaWx5U3RhdHMsICovXG59OyIsImltcG9ydCAqIGFzIEFQSSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgKiBhcyBIZWxwZXIgZnJvbSAnLi9oZWxwZXJzJztcbmltcG9ydCBmZWVsc0xpa2VJbWcgZnJvbSAnLi4vYXNzZXRzL2ZlZWxzLWxpa2UucG5nJztcbmltcG9ydCByYWluSW1nIGZyb20gJy4uL2Fzc2V0cy9yYWluLWRyb3BzLnBuZyc7XG5pbXBvcnQgaHVtaWRpdHlJbWcgZnJvbSAnLi4vYXNzZXRzL2h1bWlkaXR5LnBuZyc7XG5pbXBvcnQgd2luZEltZyBmcm9tICcuLi9hc3NldHMvd2luZC5wbmcnO1xuaW1wb3J0IGNsb3VkSWNvbiBmcm9tICcuLi9hc3NldHMvY2xvdWQtaWNvbi5wbmcnO1xuXG5jb25zdCBmYXZpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGluaycpO1xuY29uc3QgZXJyb3JNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbXNnJyk7XG5jb25zdCB3ZWF0aGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaW1nPmltZycpO1xuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xuY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XG5jb25zdCBzdGF0dXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzJyk7XG5cbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKTtcblxuY29uc3QgZmVlbHNMaWtlSW1nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlbHMtbGlrZS1pbWcnKTtcbmNvbnN0IGNoYW5jZU9mUmFpbkltZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoYW5jZS1vZi1yYWluLWltZycpO1xuY29uc3QgaHVtaWRpdHlJbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eS1pbWcnKTtcbmNvbnN0IHdpbmRJbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kLWltZycpO1xuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UnKTtcbmNvbnN0IGNoYW5jZU9mUmFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYWluJyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNodW1pZGl0eScpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW5kJyk7XG5cbi8vIGhvdXJseSBlbGVtZW50c1xuY29uc3QgaG91ckRpdnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhvdXJseS1mb3JlY2FzdCA+IGRpdicpXTtcbi8vIGRhaWx5IGVsZW1lbnRzXG4vL2NvbnN0IGRheURpdnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRhaWx5LWZvcmVjYXN0ID4gZGl2JyldO1xuXG4vLyBkZWZhdWx0IHZhbHVlcyBhcmUgQ2Vsc2l1cyAmIE1waFxuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NlbHNpdXMnKTtcbmNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtcGgnKTtcblxuZmF2aWNvbi5ocmVmID0gY2xvdWRJY29uO1xuXG4vLyBzZXQgaWNvbnMgZm9yIHRoZSBzdGF0IGJveGVzIFxuZmVlbHNMaWtlSW1nRWwuc3JjID0gZmVlbHNMaWtlSW1nO1xuY2hhbmNlT2ZSYWluSW1nRWwuc3JjID0gcmFpbkltZztcbmh1bWlkaXR5SW1nRWwuc3JjID0gaHVtaWRpdHlJbWc7XG53aW5kSW1nRWwuc3JjID0gd2luZEltZztcblxubGV0IGlzQ2Vsc2l1cyA9IHRydWU7XG5sZXQgaXNNcGggPSB0cnVlO1xuXG5cbi8vIGluaXRpYWxpemUgdGhlIHBhZ2UgaWNvbnMgYW5kIGRlZmF1bHQgdmFsdWVzXG5hc3luYyBmdW5jdGlvbiBpbml0KCl7XG4gICAgLy8gc2V0IGZhdmljb24gYW5kIHNvbWUgcGFnZSBpY29ucyBcbiAgICBmYXZpY29uLmhyZWYgPSBjbG91ZEljb247XG4gICAgZmVlbHNMaWtlSW1nRWwuc3JjID0gZmVlbHNMaWtlSW1nO1xuICAgIGNoYW5jZU9mUmFpbkltZ0VsLnNyYyA9IHJhaW5JbWc7XG4gICAgaHVtaWRpdHlJbWdFbC5zcmMgPSBodW1pZGl0eUltZztcbiAgICB3aW5kSW1nRWwuc3JjID0gd2luZEltZztcblxuICAgIC8vIGxvYWQgJiBzZXQgd2VhdGhlciBpbmZvIGZyb20gJ2tpbGNvcm1hYydcbiAgICAvLyBhcyBwbGFjZWhvbGRlciBpbmZvXG4gICAgbGV0IGZvcmVjYXN0ID0gYXdhaXQgQVBJLmdldEZvcmVjYXN0KCk7XG4gICAgY29uc29sZS5sb2coZm9yZWNhc3QpO1xuICAgIHNldEFsbFZhbHVlcyhmb3JlY2FzdCk7XG5cbn1cblxuYXN5bmMgZnVuY3Rpb24gc2V0QWxsVmFsdWVzKGZvcmVjYXN0KXtcbiAgICAvLyBtYWluIGluZm9cbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmxvY2F0aW9uLm5hbWU7XG4gICAgd2VhdGhlckltZy5zcmMgPSBmb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuICAgIHdlYXRoZXJJbWcuYWx0ID0gZm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gSGVscGVyLmZvcm1hdERhdGUoZm9yZWNhc3QubG9jYXRpb24ubG9jYWx0aW1lKTtcbiAgICB0ZW1wLmlubmVySFRNTCA9IGlzQ2Vsc2l1cyA/IFxuICAgICAgICBNYXRoLnJvdW5kKGZvcmVjYXN0LmN1cnJlbnQudGVtcF9jKStgPHNwYW4gY2xhc3M9J3RlbXAtdW5pdCc+wrBDPC9zcGFuPmBcbiAgICAgICAgOk1hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC50ZW1wX2YpK2A8c3BhbiBjbGFzcz0ndGVtcC11bml0Jz7CsEY8L3NwYW4+YDtcblxuICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG5cbiAgICBmZWVsc0xpa2UuaW5uZXJIVE1MID0gaXNDZWxzaXVzID8gXG4gICAgICAgIE1hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC5mZWVsc2xpa2VfYykrYDxzcGFuIGNsYXNzPSdmZWVscy1saWtlLXRlbXAtdW5pdCc+wrBDPC9zcGFuPmBcbiAgICAgICAgOk1hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC5mZWVsc2xpa2VfZikrYDxzcGFuIGNsYXNzPSdmZWVscy1saWtlLXRlbXAtdW5pdCc+wrBGPC9zcGFuPmA7XG5cbiAgICBjaGFuY2VPZlJhaW4udGV4dENvbnRlbnQgPSBBUEkuZ2V0Q2hhbmNlT2ZSYWluKCkrJyUnO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gZm9yZWNhc3QuY3VycmVudC50ZW1wX2MrJyUnO1xuICAgIHdpbmQuaW5uZXJIVE1MID0gaXNNcGggPyBcbiAgICAgICAgTWF0aC5yb3VuZChmb3JlY2FzdC5jdXJyZW50Lmd1c3RfbXBoKStgPHNwYW4gY2xhc3M9J3dpbmQtdW5pdCc+bXBoPC9zcGFuPmBcbiAgICAgICAgOk1hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC5ndXN0X2twaCkrYDxzcGFuIGNsYXNzPSd3aW5kLXVuaXQnPmttL2g8L3NwYW4+YFxuXG4gICAgLy8gaG91cmx5XG4gICAgc2V0SG91cmx5VmFsdWVzKCk7XG4gICAgXG4gICAgLy8gd2Vla1xuICAgIC8vc2V0RGFpbHlWYWx1ZXMoKTtcbn1cblxuZnVuY3Rpb24gc2V0SG91cmx5VmFsdWVzKCl7XG4gICAgaG91ckRpdnMuZm9yRWFjaCgoZGl2LCBpKSA9PntcbiAgICAgICAgbGV0IHtob3VyVG9EaXNwbGF5LCBzdGF0dXMsIGljb24sIGFsdFRleHQsIHRlbXBDLCB0ZW1wRn0gPSBBUEkuZ2V0SG91cmx5U3RhdHMoaSk7XG5cbiAgICAgICAgZGl2LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gaG91clRvRGlzcGxheS5zbGljZSgwLDIpO1xuICAgICAgICBkaXYuY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uc3JjID0gaWNvbjtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzFdLmFsdCA9IGFsdFRleHQ7XG4gICAgICAgIGRpdi5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IHN0YXR1cztcbiAgICAgICAgZGl2LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gaXNDZWxzaXVzID8gXG4gICAgICAgICAgICB0ZW1wQysnwrBDJyA6XG4gICAgICAgICAgICB0ZW1wRisnwrBGJztcbiAgICB9KVxufVxuXG4vKiBmdW5jdGlvbiBzZXREYWlseVZhbHVlcygpe1xuICAgIC8vY3JlYXRlIGEgbWV0aG9kIGluIEFQSSB3aGljaCByZXR1cm5zIHRoZSBuZWNlc3NhcnkgZGF0YVxuICAgIC8vIGZvciBuZXh0IDYgZGF5c1xuICAgIC8vIG1heSBuZWVkIGEgZGF0ZS10by1kYXkgaGVscGVyIG1ldGhvZFxuICAgIC8vIG1heWJlIHVzZSBtaW4vbWF4IHRlbXBcbiAgICAvLyBvdGhlcndpc2UgdGhlIHNhbWVcbiAgICBkYXlEaXZzLmZvckVhY2goKGRpdiwgaSk9PntcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGRheVRvRGlzcGxheSxcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBhbHRUZXh0LFxuICAgICAgICAgICAgaGlUZW1wQywgXG4gICAgICAgICAgICBsb3dUZW1wQyxcbiAgICAgICAgICAgIGhpVGVtcEYsXG4gICAgICAgICAgICBsb3dUZW1wRlxuICAgICAgICAgICAgfSA9IEFQSS5nZXREYWlseVN0YXRzKGkpO1xuICAgICAgICBcbiAgICAgICAgZGl2LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gZGF5VG9EaXNwbGF5O1xuICAgICAgICBkaXYuY2hpbGRyZW5bMV0uc3JjID0gaWNvbjtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzFdLmFsdCA9IGFsdFRleHQ7XG4gICAgICAgIGRpdi5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IHN0YXR1cztcbiAgICAgICAgZGl2LmNoaWxkcmVuWzNdLnRleHRDb250ZW50ID0gaXNDZWxzaXVzID8gXG4gICAgICAgIE1hdGgucm91bmQobG93VGVtcEMpKyfCsEMnIDpcbiAgICAgICAgTWF0aC5yb3VuZChsb3dUZW1wRikrJ8KwRic7XG4gICAgICAgIGRpdi5jaGlsZHJlbls0XS50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1cyA/IFxuICAgICAgICBNYXRoLnJvdW5kKGhpVGVtcEMpKyfCsEMnIDpcbiAgICAgICAgTWF0aC5yb3VuZChoaVRlbXBGKSsnwrBGJztcbiAgICB9KVxuXG59ICovXG5cbmZ1bmN0aW9uIHNldElzQ2Vsc2l1cyh2YWx1ZSl7XG4gICAgaXNDZWxzaXVzID0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHNldElzTXBoKHZhbHVlKXtcbiAgICBpc01waCA9IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5RXJyb3JNc2cobXNnKXtcbiAgICBlcnJvck1zZy50ZXh0Q29udGVudCA9IG1zZztcbn1cblxuXG5leHBvcnQge1xuICAgIHNldEFsbFZhbHVlcywgXG4gICAgaW5pdCwgXG4gICAgc2V0SXNDZWxzaXVzLCBcbiAgICBzZXRJc01waCxcbiAgICBkaXNwbGF5RXJyb3JNc2csXG4gICAgfTsiLCJpbXBvcnQgKiBhcyBBUEkgZnJvbSAnLi9hcGknO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vZG9tJztcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1ib3ggPiBidXR0b24nKVxuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJveCA+IGlucHV0Jyk7XG5jb25zdCBjZWxzaXVzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2MtYnRuJyk7XG5jb25zdCBmYWhyZW5oZWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2YtYnRuJyk7XG5jb25zdCBtcGhCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXBoLWJ0bicpO1xuY29uc3Qga21CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna20tYnRuJyk7XG4vL2NvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWJ0bicpO1xuLy9jb25zdCB3ZWVrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWstYnRuJyk7XG5jb25zdCBob3VybHlEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhvdXJseS1mb3JlY2FzdCcpO1xuLy9jb25zdCBkYWlseURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGFpbHktZm9yZWNhc3QnKTtcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VhcmNoQnRuQ2xpY2soKXtcbiAgICBsZXQgdXNlcklucHV0ID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgaWYodXNlcklucHV0ID09ICcnKSByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZygnaW5wdXQgJywgdXNlcklucHV0KTtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgQVBJLmdldEZvcmVjYXN0KHVzZXJJbnB1dCk7XG4gICAgXG4gICAgLy9uZWVkIHRvIGNoZWNrIHJlc3VsdCBmb3IgZXJyb3JzIF5cbiAgICBpZihyZXN1bHQgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKCdibGxsb29vb3AnKTtcbiAgICB9IGVsc2V7XG4gICAgICAgIERPTS5zZXRBbGxWYWx1ZXMocmVzdWx0KTtcbiAgICB9XG5cbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0NlbHNpdXMoKXtcbiAgICBjZWxzaXVzQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgZmFocmVuaGVpdEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0ZhaHJlbmhlaXQoKXtcbiAgICBmYWhyZW5oZWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgY2Vsc2l1c0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDZWxzaXVzQnRuQ2xpY2soKXtcbiAgICBpZihjZWxzaXVzQnRuLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuICAgIGNoYW5nZVRvQ2Vsc2l1cygpO1xuICAgIC8vIG1ha2UgYSBuZXcgY2FsbD8gTm8uLi5cbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gQVBJLmdldExhdGVzdFdlYXRoZXJPYmooKTtcbiAgICBET00uc2V0SXNDZWxzaXVzKHRydWUpO1xuICAgIERPTS5zZXRBbGxWYWx1ZXMod2VhdGhlck9iaik7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZhaHJlbmhlaXRCdG5DbGljaygpe1xuICAgIGlmKGZhaHJlbmhlaXRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSByZXR1cm47XG4gICAgY2hhbmdlVG9GYWhyZW5oZWl0KCk7XG4gICAgLy8gbWFrZSBhIG5ldyBjYWxsPyBOby4uLlxuICAgIGNvbnN0IHdlYXRoZXJPYmogPSBBUEkuZ2V0TGF0ZXN0V2VhdGhlck9iaigpO1xuICAgIERPTS5zZXRJc0NlbHNpdXMoZmFsc2UpO1xuICAgIERPTS5zZXRBbGxWYWx1ZXMod2VhdGhlck9iaik7XG59XG5mdW5jdGlvbiBjaGFuZ2VUb01waCgpe1xuICAgIG1waEJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGttQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRvS20oKXtcbiAgICBrbUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIG1waEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNcGhCdG5DbGljaygpe1xuICAgIGlmKG1waEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHJldHVybjtcbiAgICBjaGFuZ2VUb01waCgpO1xuICAgIC8vIG1ha2UgYSBuZXcgY2FsbD8gTm8uLi5cbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gQVBJLmdldExhdGVzdFdlYXRoZXJPYmooKTtcbiAgICBET00uc2V0SXNNcGgodHJ1ZSk7XG4gICAgRE9NLnNldEFsbFZhbHVlcyh3ZWF0aGVyT2JqKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlS21CdG5DbGljaygpe1xuICAgIGlmKGttQnRuLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuICAgIGNoYW5nZVRvS20oKTtcbiAgICAvLyBtYWtlIGEgbmV3IGNhbGw/IE5vLi4uXG4gICAgY29uc3Qgd2VhdGhlck9iaiA9IEFQSS5nZXRMYXRlc3RXZWF0aGVyT2JqKCk7XG4gICAgRE9NLnNldElzTXBoKGZhbHNlKTtcbiAgICBET00uc2V0QWxsVmFsdWVzKHdlYXRoZXJPYmopO1xufVxuXG4vKiBmdW5jdGlvbiBjaGFuZ2VUb0hvdXJseUZvcmVjYXN0KCl7XG4gICAgaG91cmx5RGlzcGxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB0b2RheUJ0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGRhaWx5RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB3ZWVrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9EYWlseUZvcmVjYXN0KCl7XG4gICAgZGFpbHlEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHdlZWtCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBob3VybHlEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHRvZGF5QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cbn0gKi9cblxuc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2VhcmNoQnRuQ2xpY2spO1xuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSk9PntcbiAgICBpZihlLmtleSA9PSAnRW50ZXInKSBoYW5kbGVTZWFyY2hCdG5DbGljaygpO1xufSlcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSk9PntcbiAgICBET00uZGlzcGxheUVycm9yTXNnKCcnKTtcbn0pXG5jZWxzaXVzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2Vsc2l1c0J0bkNsaWNrKTtcbmZhaHJlbmhlaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVGYWhyZW5oZWl0QnRuQ2xpY2spO1xubXBoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTXBoQnRuQ2xpY2spO1xua21CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVLbUJ0bkNsaWNrKTtcbi8qIHRvZGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVG9Ib3VybHlGb3JlY2FzdCk7XG53ZWVrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlVG9EYWlseUZvcmVjYXN0KTsgKi8iLCJmdW5jdGlvbiBnZXRMb2NhbEhvdXIod2VhdGhlck9iail7XG4gIC8vIGhvdyBJIGN1dCBvdXQgdGhlIGhvdXIgaXMgY2F1c2luZyBwcm9ibGVtc1xuICAvLyB3aGVuIGl0J3MgYSBzaW5nbGUtZGlnaXQgaG91clxuICAvLyBzbyBpIGRlZmF1bHQgaXQgdG8gYSBkYXRlIGZvcm1hdFxuICAvLyBhbmQgY3V0IHRoZSBob3VyIGZyb20gdGhhdFxuXG4gIGxldCBkYXRlID0gbmV3IERhdGUod2VhdGhlck9iai5sb2NhdGlvbi5sb2NhbHRpbWUpO1xuICBsZXQgaG91ciA9IFN0cmluZyhkYXRlKS5zdWJzdHJpbmcoMTYsIDE4KTtcblxuICByZXR1cm4gaG91cjtcbn1cblxuZnVuY3Rpb24gZ2V0SG91clRvRGlzcGxheShob3VyT2JqKXtcbiAgICBsZXQgdGltZSA9IGhvdXJPYmoudGltZTtcbiAgICBsZXQgaG91ciA9IHRpbWUuc3Vic3RyaW5nKHRpbWUubGVuZ3RoLTUsIHRpbWUubGVuZ3RoKTtcblxuICAgIHJldHVybiBob3VyO1xufVxuXG4vLyBoZWxwZnVsIGZvciBzbGljaW5nLi4uXG4vLzAxMjM0NTY3ODkwMTIzNDU2Nzg5MDEyM1xuLy9UaHUgT2N0IDI2IDIwMjMgMTM6MTY6MDAgR01UKzAxMDBcblxuLy8gZXhjZWxsZW50IHBpZWNlIG9mIGhlbHBlciBjb2RlIEkgYm9ycm93ZWQgJiBtb2RpZmllZCBmcm9tXG4vLyAnaHR0cHM6Ly9naXRodWIuY29tL2JzY290dG56L3dlYXRoZXItYXBwL2Jsb2IvbWFpbi9zcmMvanMvdXRpbHMuanMnXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsIGRhdGVGb3JtYXQgPSAnZnVsbCcsIHdhbnRTaG9ydERheSA9IGZhbHNlKSB7XG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IG5ldyBEYXRlKGRhdGUpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbW9udGggPSBkYXRlU3RyaW5nLnNsaWNlKDQsIDgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlU3RyaW5nLnNsaWNlKDEzLCAxNSk7XG4gICAgbGV0IGhvdXIgPSBkYXRlU3RyaW5nLnNsaWNlKDE2LDE4KTtcbiAgICBsZXQgZGF5T2ZXZWVrID0gZGF0ZVN0cmluZy5zbGljZSgwLCAzKTtcbiAgICBsZXQgZGF5T2ZNb250aCA9IGRhdGVTdHJpbmcuc2xpY2UoOCwgMTApO1xuICAgIGxldCB0aW1lID0gZGF0ZVN0cmluZy5zbGljZSgxNiwyMSk7XG4gICAgbGV0IGRheVN1ZmZpeDtcbiAgICBsZXQgdGltZVN1ZmZpeDtcblxuICAgIC8vY29uc29sZS5sb2coJ2RhdGUgc3RyaW5nICcsIGRhdGVTdHJpbmcpO1xuICBcbiAgICAvLyBjaGFuZ2UgMDEgdG8gMSBldGNcbiAgICBpZiAoZGF5T2ZNb250aCA8IDEwKSB7XG4gICAgICBkYXlPZk1vbnRoID0gZGF5T2ZNb250aC5zbGljZSgxKTtcbiAgICB9XG4gIFxuICAgIC8vIGdlbmVyYXRlIGNvcmVjdCBkYXRlIGRheVN1ZmZpeFxuICAgIGlmIChkYXlPZk1vbnRoLnNsaWNlKC0xKSA9PT0gJzEnKSB7XG4gICAgICBkYXlTdWZmaXggPSAnc3QnO1xuICAgIH0gZWxzZSBpZiAoZGF5T2ZNb250aC5zbGljZSgtMSkgPT09ICcyJykge1xuICAgICAgZGF5U3VmZml4ID0gJ25kJztcbiAgICB9IGVsc2UgaWYgKGRheU9mTW9udGguc2xpY2UoLTEpID09PSAnMycpIHtcbiAgICAgIGRheVN1ZmZpeCA9ICdyZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVN1ZmZpeCA9ICd0aCc7XG4gICAgfVxuXG4gICAgLy8gZ2VuZXJhdGUgY29ycmVjdCB0aW1lIHN1ZmZpeFxuICAgIGlmKGhvdXIgPD0gMTIpe1xuICAgICAgdGltZVN1ZmZpeCA9ICdhbSc7XG4gICAgfWVsc2V7XG4gICAgICB0aW1lU3VmZml4ID0gJ3BtJztcbiAgICB9XG4gICAgLy8gYW5kIDEyaHIgZm9ybWF0XG4gICAgaWYoaG91ciA+IDEyKXtcbiAgICAgIGhvdXIgLT0gMTI7XG4gICAgICB0aW1lID0gU3RyaW5nKGhvdXIpLnNsaWNlKDAsMikrJzonK3RpbWUuc2xpY2UoMyw1KTtcbiAgICB9XG4gIFxuICBcbiAgICAvLyB0aG9zZSBwZXNreSAxMSwgMTIsIDEzIHRoc1xuICAgIGlmIChkYXlPZk1vbnRoID4gMyAmJiBkYXlPZk1vbnRoIDwgMjEpIHtcbiAgICAgIGRheVN1ZmZpeCA9ICd0aCc7XG4gICAgfVxuICBcbiAgICAvLyBjb252ZXJ0IHNob3J0IGRheSBuYW1lIHRvIGZ1bGwgZGF5IG5hbWVcbiAgICBpZighd2FudFNob3J0RGF5KXsgICAgXG4gICAgICAgIGlmIChkYXlPZldlZWsgPT09ICdNb24nKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdNb25kYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1R1ZScpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1R1ZXNkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1dlZCcpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1dlZG5lc2RheSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF5T2ZXZWVrID09PSAnVGh1Jykge1xuICAgICAgICBkYXlPZldlZWsgPSAnVGh1cnNkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ0ZyaScpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ0ZyaWRheSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF5T2ZXZWVrID09PSAnU2F0Jykge1xuICAgICAgICBkYXlPZldlZWsgPSAnU2F0dXJkYXknO1xuICAgICAgICB9IGVsc2UgaWYgKGRheU9mV2VlayA9PT0gJ1N1bicpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ1N1bmRheSc7XG4gICAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIHJldHVybiBvbmx5IHRoZSBkYXkgb2Ygd2Vla1xuICAgIGlmIChkYXRlRm9ybWF0ID09PSAnZGF5Jykge1xuICAgICAgcmV0dXJuIGRheU9mV2VlaztcbiAgICB9XG4gIFxuICAgIC8vIHJldHVybiBmdWxsIGRhdGUgc3RyaW5nXG4gICAgcmV0dXJuIGAke3RpbWV9JHt0aW1lU3VmZml4fSwgJHtkYXlPZldlZWt9LCAke2RheU9mTW9udGh9JHtkYXlTdWZmaXh9ICR7bW9udGh9ICcke3llYXJ9YDtcbiAgfVxuXG5leHBvcnQge1xuICAgIGdldExvY2FsSG91cixcbiAgICBnZXRIb3VyVG9EaXNwbGF5LFxuICAgIGZvcm1hdERhdGUgICAgXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgQVBJIGZyb20gJy4vbW9kdWxlcy9hcGknO1xuaW1wb3J0ICogYXMgSGVscGVyIGZyb20gJy4vbW9kdWxlcy9oZWxwZXJzJztcbmltcG9ydCAqIGFzIERPTSBmcm9tICcuL21vZHVsZXMvZG9tJztcbmltcG9ydCAnLi9tb2R1bGVzL2V2ZW50cyc7XG5cbmltcG9ydCAnLi9zdHlsZXMvbWFpbi5zY3NzJztcblxuLy8gc2V0IHNvbWUgcGxhY2Vob2xkZXIgdmFsdWVzIGZvciB3aGVuIHRoZSBwYWdlXG4vLyBsb2FkcyBmb3IgdGhlIGZpcnN0IHRpbWVcbmZ1bmN0aW9uIGRvbUluaXQoKXtcbiAgICBET00uaW5pdCgpO1xufVxuXG5kb21Jbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=