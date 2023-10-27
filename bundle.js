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
}`, "",{"version":3,"sources":["webpack://./src/styles/_layout.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AAYA;;;EAGE,SAAA;EACA,UAAA;EACA,sBAAA;EAGA,iCAAA;ACZF;;ADeA;EACI,eAAA;ACZJ;;ADeA;EACI,aAAA;EACA,YAAA;EACA,wIAAA;EACA,sBAAA;EACA,2BAAA;EACA,iBAAA;EAEA,+BA1BS;EA2BT,YAAA;EAEJ;;SAAA;ACZA;;ADiBA;EAEI,aAAA;EACA,sBAAA;EACA,mBAAA;EAEA,mBAAA;EACA,WAAA;EACA,gBAAA;AChBJ;ADkBI;EAVJ;IAWQ,kBAAA;ECfN;AACF;ADmBI;EACI,sBAAA;ACjBR;ADmBQ;EAEI,sBAAA;AClBZ;;ADwBA;EAII,aAAA;EACA,uBAAA;EACA,gBAAA;ACxBJ;AD0BI;EACI,YAAA;EACA,8BAAA;EACA,gBAAA;ACxBR;AD2BI;EACI,YAAA;EACA,YAAA;EACA,+BA/EG;EAgFH,0BAAA;EACA,yBAAA;ACzBR;AD2BQ;EACI,iCAAA;EACA,+BArFD;EAsFC,oBAAA;ACzBZ;AD4BQ;EACI,aAAA;AC1BZ;AD8BI;EACI,YAAA;EACA,WAAA;EACA,yDAAA;EACA,2BAAA;EACA,4BAAA;EACA,sBAAA;AC5BR;;ADiCA;EACI,aAAA;EACA,uBAAA;EACA,gBAAA;EACA,yBAAA;EAEA,+BA9GS;EA+GT,yBAAA;AC/BJ;;ADkCA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,WAAA;EAGA,sCAhIO;EAiIP,mBAAA;EACA,4BAAA;ACjCJ;ADmCI;EACI,eAAA;EACA,kBAAA;ACjCR;ADqCI;EACI,+BAtIK;ACmGb;ADsCI;EACI,+BAxIK;EAyIL,iBAAA;ACpCR;ADuCI;EACI,+BA/IK;EAgJL,0BAAA;EACA,kBAAA;ACrCR;ADwCI;EACI,aAAA;EACA,6BAAA;EACA,mBAAA;ACtCR;ADwCQ;EACI,aAAA;ACtCZ;ADyCQ;EACI,kBAAA;EACA,eAAA;ACvCZ;AD8CI;EACI,aAAA;EACA,uBAAA;AC5CR;AD8CQ;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;EACA,iBAAA;EACA,UAAA;AC5CZ;AD8CY;EACI,WAAA;EACA,YAAA;AC5ChB;;ADkDA;EACI,uCAxLQ;ACyIZ;;ADkDA;EACI,uCA5LQ;EA6LR,qBAAA;AC/CJ;;ADkDA;EACI,+CAAA;EACA,mBAAA;AC/CJ;;ADoDA;EACI,aAAA;EACA,8BAAA;ACjDJ;ADmDI;EACI,WAAA;EACA,YAAA;EACA,qBAAA;EACA,sCAvNG;EAyNH,yBAAA;EACA,YAAA;AClDR;ADqDI;EACI,YAAA;EACA,sCA/NG;EAgOH,gBAAA;ACnDR;;ADwDA;EACI,aAAA;EACA,uBAAA;EACA,kBAAA;ACrDJ;;ADwDA;EACI,aAAA;EACA,uBAAA;EACA,WAAA;ACrDJ;ADuDI;EACI,YAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,sCArPG;EAsPH,gBAAA;ACrDR;ADuDQ;EACI,YAAA;EACA,gBAAA;ACrDZ;;AD4DA;;EAEI,aAAA;EACA,sBAAA;EACA,WAAA;ACzDJ;AD2DI;;EACI,aAAA;ACxDR;AD2DI;;EACI,WAAA;EACA,YAAA;EAEA,aAAA;EACA,+CAAA;EACA,mBAAA;EACA,qBAAA;EACA,sCAnRG;AC0NX;AD2DQ;;EACI,WAAA;EACA,YAAA;ACxDZ;AD2DQ;;EACI,aAAA;ACxDZ;;AD4DA;EAEQ;IACK,qDAAA;EC1DX;ED2DU;IACQ,cAAA;ECzDlB;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap');\n\n$bg-color: rgba(0, 0, 0, 0.151);\n$bg-gradient: linear-gradient(to right, #0000008a, #0000008a);\n$bg-image: url('../assets/peak-district.jpg');\n\n// sizes\n$large-font: calc(1.2rem + 0.3vw);\n$med-font: calc(0.9rem + 0.2vw);\n$small-font: calc(0.8rem + 0.2vw);\n$unit-size: calc($small-font - 0.2vw);\n\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n\n  //font-family: 'Open Sans', sans-serif;\n  font-family: 'Roboto', sans-serif;\n}\n\nbutton{\n    cursor: pointer;\n}\n\nbody{\n    height: 100vh;\n    width: 100vw;\n    background: $bg-gradient, $bg-image;\n    background-size: cover;\n    background-position: center;\n    padding-top: 1rem;\n\n    font-size: $small-font;\n    color: white;\n\n/*     @media screen and (max-height: 800px) {\n        background-size: cover;    \n    } */\n}\n\n.container{\n    //backdrop-filter: blur(2px);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    //gap: 1rem;\n    margin-inline: auto;\n    width: 100%;\n    max-height: 100%;\n\n    @media screen and (max-width: 600px) {\n        overflow-y: scroll;\n\n    }\n    \n    \n    >div{\n        width: min(80%, 800px);\n\n        &.main-info,\n        &.options{\n            width: min(80%, 400px)\n        }\n    }\n}\n\n\n.search-box{\n    //background-color: rgba(0, 128, 0, 0.5);\n    //padding: 1rem 1.5rem;\n\n    display: flex;\n    justify-content: center;\n    margin-top: 1rem;\n\n    *{\n        border: none;\n        border-bottom: 2px solid white;\n        background: none;\n    }\n    \n    input{\n        height: 2rem;\n        color: white;\n        font-size: $med-font;\n        padding: 0 0 0.1rem 0.8rem;\n        text-transform: uppercase;\n        \n        &::placeholder{\n            color: rgba(255, 255, 255, 0.548);\n            font-size: $med-font;\n            padding-left: 0.2rem;\n        }\n\n        &:focus{\n            outline: none;\n        }\n    }\n\n    button{\n        height: 2rem;\n        width:  2rem;\n        background-image: url(../assets/search-icon.png);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n}\n\n.error-msg{\n    display: flex;\n    justify-content: center;\n    min-height: 1rem;\n    margin-block: 0.2rem 1rem;\n\n    font-size: $small-font;\n    color: rgb(255, 255, 255);\n}\n\n.main-info{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.2rem;\n\n    \n    background-color: $bg-color;\n    padding-block: 1rem;\n    border-radius: 10px 10px 0 0;\n\n    >div{\n        min-width: 100%;\n        text-align: center;\n        \n    }\n\n    .city{\n        font-size: $large-font;\n    }\n    \n    .date{\n        font-size: $small-font;\n        color: whitesmoke;\n    }\n    \n    .status{\n        font-size: $large-font;\n        text-transform: capitalize;\n        margin-top: 1.5rem;\n    }\n\n    .img-and-temp{\n        display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n\n        img{\n            width: 6.5rem;\n        }\n        \n        .temperature{\n            position: relative;\n            font-size: 2rem;\n        }\n        \n    }\n    \n\n    \n    .stats{\n        display: flex;\n        margin: 1.5rem 0 0.2rem;\n    \n        .stat-box{\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            gap: 10px;\n            line-height: 1rem;\n            flex: 0.25;\n\n            img{\n                width: 30px;\n                height: 30px;\n            }            \n        }\n    }\n}\n\n.wind-unit{\n    font-size: $unit-size;\n}\n\n.temp-unit{\n    font-size: $unit-size;\n    vertical-align: super;\n}\n\n.feels-like-temp-unit{\n    font-size: calc($unit-size * 0.9);\n    vertical-align: top;\n}\n\n\n\n.options{\n    display: flex;\n    justify-content: space-between;\n\n    button{\n        width: 60px;\n        height: 100%;\n        padding-block: 0.2rem;\n        background-color: $bg-color;\n        \n        color: rgb(145, 145, 145);\n        border: none;\n    }\n    \n    button.selected{\n        color: white;\n        background-color:  $bg-color;\n        font-weight: 600;\n    }\n}\n\n\n.forecast{\n    display: grid;\n    grid-template: auto /  1fr;\n    margin-block: 2rem;\n}\n\n.forecast-choice{\n    display: flex;\n    justify-content: center;\n    gap: 0.5rem;\n\n    button {\n        height: 35px;\n        padding: 0.5rem;\n        border: none;\n        color: grey;\n        background-color:  $bg-color;\n        font-weight: 100;\n\n        &.selected{\n            color: white;\n            font-weight: 600;\n        }\n    }\n\n\n}\n\n.hourly-forecast,\n.daily-forecast{\n    display: none;\n    flex-direction: column;\n    gap: 0.2rem;\n\n    &.active{\n        display: flex;\n    }\n\n    >div{\n        width: 100%;\n        height: 50px;\n\n        display: grid;\n        grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;\n        align-items: center;\n        justify-items: center;\n        background-color:  $bg-color;;\n\n        img{\n            width: 35px;\n            height: 35px;\n        } \n        \n        .day__temperature_min{\n            display: none;\n        }\n    }    \n}\n@media screen and (min-width: 700px) {\n    .daily-forecast{\n        >div{ \n             grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr 0.3fr;\n            .day__temperature_min{\n                    display: block;\n            }\n         }\n    }\n}","@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@500&family=Roboto&display=swap\");\n*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Roboto\", sans-serif;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  height: 100vh;\n  width: 100vw;\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.5411764706), rgba(0, 0, 0, 0.5411764706)), url(\"../assets/peak-district.jpg\");\n  background-size: cover;\n  background-position: center;\n  padding-top: 1rem;\n  font-size: calc(0.8rem + 0.2vw);\n  color: white;\n  /*     @media screen and (max-height: 800px) {\n          background-size: cover;    \n      } */\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-inline: auto;\n  width: 100%;\n  max-height: 100%;\n}\n@media screen and (max-width: 600px) {\n  .container {\n    overflow-y: scroll;\n  }\n}\n.container > div {\n  width: min(80%, 800px);\n}\n.container > div.main-info, .container > div.options {\n  width: min(80%, 400px);\n}\n\n.search-box {\n  display: flex;\n  justify-content: center;\n  margin-top: 1rem;\n}\n.search-box * {\n  border: none;\n  border-bottom: 2px solid white;\n  background: none;\n}\n.search-box input {\n  height: 2rem;\n  color: white;\n  font-size: calc(0.9rem + 0.2vw);\n  padding: 0 0 0.1rem 0.8rem;\n  text-transform: uppercase;\n}\n.search-box input::placeholder {\n  color: rgba(255, 255, 255, 0.548);\n  font-size: calc(0.9rem + 0.2vw);\n  padding-left: 0.2rem;\n}\n.search-box input:focus {\n  outline: none;\n}\n.search-box button {\n  height: 2rem;\n  width: 2rem;\n  background-image: url(../assets/search-icon.png);\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.error-msg {\n  display: flex;\n  justify-content: center;\n  min-height: 1rem;\n  margin-block: 0.2rem 1rem;\n  font-size: calc(0.8rem + 0.2vw);\n  color: rgb(255, 255, 255);\n}\n\n.main-info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.151);\n  padding-block: 1rem;\n  border-radius: 10px 10px 0 0;\n}\n.main-info > div {\n  min-width: 100%;\n  text-align: center;\n}\n.main-info .city {\n  font-size: calc(1.2rem + 0.3vw);\n}\n.main-info .date {\n  font-size: calc(0.8rem + 0.2vw);\n  color: whitesmoke;\n}\n.main-info .status {\n  font-size: calc(1.2rem + 0.3vw);\n  text-transform: capitalize;\n  margin-top: 1.5rem;\n}\n.main-info .img-and-temp {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n}\n.main-info .img-and-temp img {\n  width: 6.5rem;\n}\n.main-info .img-and-temp .temperature {\n  position: relative;\n  font-size: 2rem;\n}\n.main-info .stats {\n  display: flex;\n  margin: 1.5rem 0 0.2rem;\n}\n.main-info .stats .stat-box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  line-height: 1rem;\n  flex: 0.25;\n}\n.main-info .stats .stat-box img {\n  width: 30px;\n  height: 30px;\n}\n\n.wind-unit {\n  font-size: calc(0.8rem + 0.2vw - 0.2vw);\n}\n\n.temp-unit {\n  font-size: calc(0.8rem + 0.2vw - 0.2vw);\n  vertical-align: super;\n}\n\n.feels-like-temp-unit {\n  font-size: calc((0.8rem + 0.2vw - 0.2vw) * 0.9);\n  vertical-align: top;\n}\n\n.options {\n  display: flex;\n  justify-content: space-between;\n}\n.options button {\n  width: 60px;\n  height: 100%;\n  padding-block: 0.2rem;\n  background-color: rgba(0, 0, 0, 0.151);\n  color: rgb(145, 145, 145);\n  border: none;\n}\n.options button.selected {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.151);\n  font-weight: 600;\n}\n\n.forecast {\n  display: grid;\n  grid-template: auto/1fr;\n  margin-block: 2rem;\n}\n\n.forecast-choice {\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.forecast-choice button {\n  height: 35px;\n  padding: 0.5rem;\n  border: none;\n  color: grey;\n  background-color: rgba(0, 0, 0, 0.151);\n  font-weight: 100;\n}\n.forecast-choice button.selected {\n  color: white;\n  font-weight: 600;\n}\n\n.hourly-forecast,\n.daily-forecast {\n  display: none;\n  flex-direction: column;\n  gap: 0.2rem;\n}\n.hourly-forecast.active,\n.daily-forecast.active {\n  display: flex;\n}\n.hourly-forecast > div,\n.daily-forecast > div {\n  width: 100%;\n  height: 50px;\n  display: grid;\n  grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr;\n  align-items: center;\n  justify-items: center;\n  background-color: rgba(0, 0, 0, 0.151);\n}\n.hourly-forecast > div img,\n.daily-forecast > div img {\n  width: 35px;\n  height: 35px;\n}\n.hourly-forecast > div .day__temperature_min,\n.daily-forecast > div .day__temperature_min {\n  display: none;\n}\n\n@media screen and (min-width: 700px) {\n  .daily-forecast > div {\n    grid-template-columns: 0.25fr 0.4fr 0.8fr 0.3fr 0.3fr;\n  }\n  .daily-forecast > div .day__temperature_min {\n    display: block;\n  }\n}"],"sourceRoot":""}]);
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
        '▼ '+Math.round(lowTempF)+'°F':
        '▼ '+Math.round(lowTempC)+'°C' ;
        div.children[4].textContent = isCelsius ? 
        '▲ '+Math.round(hiTempC)+'°C' :
        '▲ '+Math.round(hiTempF)+'°F';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDTztBQUNuRyw0Q0FBNEMsa0lBQThDO0FBQzFGLDRDQUE0Qyw4SEFBNEM7QUFDeEYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRiw4SUFBOEk7QUFDOUkseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUdBQXlHLG1DQUFtQztBQUM1STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLCtIQUErSCxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFlBQVksWUFBWSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLE9B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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxLQUFLLEVBQUUsV0FBVyxJQUFJLFVBQVUsSUFBSSxXQUFXLEVBQUUsV0FBVyxFQUFFLE9BQU8sR0FBRyxLQUFLO0FBQzNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQztBQUNPO0FBQ1A7QUFDWDs7QUFFRTs7QUFFNUI7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBUTtBQUNaOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzL21haW4uc2Nzcz82OWM3Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9oZWxwZXJzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3BlYWstZGlzdHJpY3QuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL3NlYXJjaC1pY29uLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANTAwJmZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYm9keSB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNTQxMTc2NDcwNiksIHJnYmEoMCwgMCwgMCwgMC41NDExNzY0NzA2KSksIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3KTtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDgwMHB4KSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgICAgXG4gICAgICB9ICovXG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4taW5saW5lOiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuLmNvbnRhaW5lciA+IGRpdiB7XG4gIHdpZHRoOiBtaW4oODAlLCA4MDBweCk7XG59XG4uY29udGFpbmVyID4gZGl2Lm1haW4taW5mbywgLmNvbnRhaW5lciA+IGRpdi5vcHRpb25zIHtcbiAgd2lkdGg6IG1pbig4MCUsIDQwMHB4KTtcbn1cblxuLnNlYXJjaC1ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5zZWFyY2gtYm94ICoge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5zZWFyY2gtYm94IGlucHV0IHtcbiAgaGVpZ2h0OiAycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjlyZW0gKyAwLjJ2dyk7XG4gIHBhZGRpbmc6IDAgMCAwLjFyZW0gMC44cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnNlYXJjaC1ib3ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NDgpO1xuICBmb250LXNpemU6IGNhbGMoMC45cmVtICsgMC4ydncpO1xuICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcbn1cbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zZWFyY2gtYm94IGJ1dHRvbiB7XG4gIGhlaWdodDogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uZXJyb3ItbXNnIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDFyZW07XG4gIG1hcmdpbi1ibG9jazogMC4ycmVtIDFyZW07XG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyk7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5tYWluLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG59XG4ubWFpbi1pbmZvID4gZGl2IHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbi1pbmZvIC5jaXR5IHtcbiAgZm9udC1zaXplOiBjYWxjKDEuMnJlbSArIDAuM3Z3KTtcbn1cbi5tYWluLWluZm8gLmRhdGUge1xuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncpO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cbi5tYWluLWluZm8gLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogY2FsYygxLjJyZW0gKyAwLjN2dyk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG4ubWFpbi1pbmZvIC5pbWctYW5kLXRlbXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCBpbWcge1xuICB3aWR0aDogNi41cmVtO1xufVxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIC50ZW1wZXJhdHVyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLm1haW4taW5mbyAuc3RhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEuNXJlbSAwIDAuMnJlbTtcbn1cbi5tYWluLWluZm8gLnN0YXRzIC5zdGF0LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIGZsZXg6IDAuMjU7XG59XG4ubWFpbi1pbmZvIC5zdGF0cyAuc3RhdC1ib3ggaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLndpbmQtdW5pdCB7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyAtIDAuMnZ3KTtcbn1cblxuLnRlbXAtdW5pdCB7XG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyAtIDAuMnZ3KTtcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xufVxuXG4uZmVlbHMtbGlrZS10ZW1wLXVuaXQge1xuICBmb250LXNpemU6IGNhbGMoKDAuOHJlbSArIDAuMnZ3IC0gMC4ydncpICogMC45KTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ub3B0aW9ucyBidXR0b24ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWJsb2NrOiAwLjJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xuICBjb2xvcjogcmdiKDE0NSwgMTQ1LCAxNDUpO1xuICBib3JkZXI6IG5vbmU7XG59XG4ub3B0aW9ucyBidXR0b24uc2VsZWN0ZWQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9yZWNhc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiBhdXRvLzFmcjtcbiAgbWFyZ2luLWJsb2NrOiAycmVtO1xufVxuXG4uZm9yZWNhc3QtY2hvaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuLmZvcmVjYXN0LWNob2ljZSBidXR0b24ge1xuICBoZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogZ3JleTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uZm9yZWNhc3QtY2hvaWNlIGJ1dHRvbi5zZWxlY3RlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhvdXJseS1mb3JlY2FzdCxcbi5kYWlseS1mb3JlY2FzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4ycmVtO1xufVxuLmhvdXJseS1mb3JlY2FzdC5hY3RpdmUsXG4uZGFpbHktZm9yZWNhc3QuYWN0aXZlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5ob3VybHktZm9yZWNhc3QgPiBkaXYsXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAwLjRmciAwLjhmciAwLjNmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcbn1cbi5ob3VybHktZm9yZWNhc3QgPiBkaXYgaW1nLFxuLmRhaWx5LWZvcmVjYXN0ID4gZGl2IGltZyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDM1cHg7XG59XG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2IC5kYXlfX3RlbXBlcmF0dXJlX21pbixcbi5kYWlseS1mb3JlY2FzdCA+IGRpdiAuZGF5X190ZW1wZXJhdHVyZV9taW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAuZGFpbHktZm9yZWNhc3QgPiBkaXYge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yNWZyIDAuNGZyIDAuOGZyIDAuM2ZyIDAuM2ZyO1xuICB9XG4gIC5kYWlseS1mb3JlY2FzdCA+IGRpdiAuZGF5X190ZW1wZXJhdHVyZV9taW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL19sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBWUE7OztFQUdFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFHQSxpQ0FBQTtBQ1pGOztBRGVBO0VBQ0ksZUFBQTtBQ1pKOztBRGVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx3SUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUVBLCtCQTFCUztFQTJCVCxZQUFBO0VBRUo7O1NBQUE7QUNaQTs7QURpQkE7RUFFSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDaEJKO0FEa0JJO0VBVko7SUFXUSxrQkFBQTtFQ2ZOO0FBQ0Y7QURtQkk7RUFDSSxzQkFBQTtBQ2pCUjtBRG1CUTtFQUVJLHNCQUFBO0FDbEJaOztBRHdCQTtFQUlJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDeEJKO0FEMEJJO0VBQ0ksWUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUN4QlI7QUQyQkk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQS9FRztFQWdGSCwwQkFBQTtFQUNBLHlCQUFBO0FDekJSO0FEMkJRO0VBQ0ksaUNBQUE7RUFDQSwrQkFyRkQ7RUFzRkMsb0JBQUE7QUN6Qlo7QUQ0QlE7RUFDSSxhQUFBO0FDMUJaO0FEOEJJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5REFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQzVCUjs7QURpQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBRUEsK0JBOUdTO0VBK0dULHlCQUFBO0FDL0JKOztBRGtDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUdBLHNDQWhJTztFQWlJUCxtQkFBQTtFQUNBLDRCQUFBO0FDakNKO0FEbUNJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDakNSO0FEcUNJO0VBQ0ksK0JBdElLO0FDbUdiO0FEc0NJO0VBQ0ksK0JBeElLO0VBeUlMLGlCQUFBO0FDcENSO0FEdUNJO0VBQ0ksK0JBL0lLO0VBZ0pMLDBCQUFBO0VBQ0Esa0JBQUE7QUNyQ1I7QUR3Q0k7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ3RDUjtBRHdDUTtFQUNJLGFBQUE7QUN0Q1o7QUR5Q1E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUN2Q1o7QUQ4Q0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUM1Q1I7QUQ4Q1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUM1Q1o7QUQ4Q1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQzVDaEI7O0FEa0RBO0VBQ0ksdUNBeExRO0FDeUlaOztBRGtEQTtFQUNJLHVDQTVMUTtFQTZMUixxQkFBQTtBQy9DSjs7QURrREE7RUFDSSwrQ0FBQTtFQUNBLG1CQUFBO0FDL0NKOztBRG9EQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ2pESjtBRG1ESTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0F2Tkc7RUF5TkgseUJBQUE7RUFDQSxZQUFBO0FDbERSO0FEcURJO0VBQ0ksWUFBQTtFQUNBLHNDQS9ORztFQWdPSCxnQkFBQTtBQ25EUjs7QUR3REE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ3JESjs7QUR3REE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDckRKO0FEdURJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQXJQRztFQXNQSCxnQkFBQTtBQ3JEUjtBRHVEUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ3JEWjs7QUQ0REE7O0VBRUksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ3pESjtBRDJESTs7RUFDSSxhQUFBO0FDeERSO0FEMkRJOztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQW5SRztBQzBOWDtBRDJEUTs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ3hEWjtBRDJEUTs7RUFDSSxhQUFBO0FDeERaOztBRDREQTtFQUVRO0lBQ0sscURBQUE7RUMxRFg7RUQyRFU7SUFDUSxjQUFBO0VDekRsQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDUwMCZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbiRiZy1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XFxuJGJnLWdyYWRpZW50OiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDAwMDA4YSwgIzAwMDAwMDhhKTtcXG4kYmctaW1hZ2U6IHVybCgnLi4vYXNzZXRzL3BlYWstZGlzdHJpY3QuanBnJyk7XFxuXFxuLy8gc2l6ZXNcXG4kbGFyZ2UtZm9udDogY2FsYygxLjJyZW0gKyAwLjN2dyk7XFxuJG1lZC1mb250OiBjYWxjKDAuOXJlbSArIDAuMnZ3KTtcXG4kc21hbGwtZm9udDogY2FsYygwLjhyZW0gKyAwLjJ2dyk7XFxuJHVuaXQtc2l6ZTogY2FsYygkc21hbGwtZm9udCAtIDAuMnZ3KTtcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIC8vZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBiYWNrZ3JvdW5kOiAkYmctZ3JhZGllbnQsICRiZy1pbWFnZTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAkc21hbGwtZm9udDtcXG4gICAgY29sb3I6IHdoaXRlO1xcblxcbi8qICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogODAwcHgpIHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICAgIFxcbiAgICB9ICovXFxufVxcblxcbi5jb250YWluZXJ7XFxuICAgIC8vYmFja2Ryb3AtZmlsdGVyOiBibHVyKDJweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIC8vZ2FwOiAxcmVtO1xcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG5cXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG5cXG4gICAgfVxcbiAgICBcXG4gICAgXFxuICAgID5kaXZ7XFxuICAgICAgICB3aWR0aDogbWluKDgwJSwgODAwcHgpO1xcblxcbiAgICAgICAgJi5tYWluLWluZm8sXFxuICAgICAgICAmLm9wdGlvbnN7XFxuICAgICAgICAgICAgd2lkdGg6IG1pbig4MCUsIDQwMHB4KVxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcblxcbi5zZWFyY2gtYm94e1xcbiAgICAvL2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMTI4LCAwLCAwLjUpO1xcbiAgICAvL3BhZGRpbmc6IDFyZW0gMS41cmVtO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG5cXG4gICAgKntcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIH1cXG4gICAgXFxuICAgIGlucHV0e1xcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAkbWVkLWZvbnQ7XFxuICAgICAgICBwYWRkaW5nOiAwIDAgMC4xcmVtIDAuOHJlbTtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICBcXG4gICAgICAgICY6OnBsYWNlaG9sZGVye1xcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQ4KTtcXG4gICAgICAgICAgICBmb250LXNpemU6ICRtZWQtZm9udDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuMnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY6Zm9jdXN7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICBidXR0b257XFxuICAgICAgICBoZWlnaHQ6IDJyZW07XFxuICAgICAgICB3aWR0aDogIDJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL3NlYXJjaC1pY29uLnBuZyk7XFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgfVxcblxcbn1cXG5cXG4uZXJyb3ItbXNne1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogMXJlbTtcXG4gICAgbWFyZ2luLWJsb2NrOiAwLjJyZW0gMXJlbTtcXG5cXG4gICAgZm9udC1zaXplOiAkc21hbGwtZm9udDtcXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLm1haW4taW5mb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjJyZW07XFxuXFxuICAgIFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmctY29sb3I7XFxuICAgIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XFxuXFxuICAgID5kaXZ7XFxuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAuY2l0eXtcXG4gICAgICAgIGZvbnQtc2l6ZTogJGxhcmdlLWZvbnQ7XFxuICAgIH1cXG4gICAgXFxuICAgIC5kYXRle1xcbiAgICAgICAgZm9udC1zaXplOiAkc21hbGwtZm9udDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuc3RhdHVze1xcbiAgICAgICAgZm9udC1zaXplOiAkbGFyZ2UtZm9udDtcXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5pbWctYW5kLXRlbXB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAgICAgaW1ne1xcbiAgICAgICAgICAgIHdpZHRoOiA2LjVyZW07XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC50ZW1wZXJhdHVyZXtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgIH1cXG4gICAgXFxuXFxuICAgIFxcbiAgICAuc3RhdHN7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgbWFyZ2luOiAxLjVyZW0gMCAwLjJyZW07XFxuICAgIFxcbiAgICAgICAgLnN0YXQtYm94e1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcXG4gICAgICAgICAgICBmbGV4OiAwLjI1O1xcblxcbiAgICAgICAgICAgIGltZ3tcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuLndpbmQtdW5pdHtcXG4gICAgZm9udC1zaXplOiAkdW5pdC1zaXplO1xcbn1cXG5cXG4udGVtcC11bml0e1xcbiAgICBmb250LXNpemU6ICR1bml0LXNpemU7XFxuICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcXG59XFxuXFxuLmZlZWxzLWxpa2UtdGVtcC11bml0e1xcbiAgICBmb250LXNpemU6IGNhbGMoJHVuaXQtc2l6ZSAqIDAuOSk7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcblxcblxcblxcbi5vcHRpb25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgIGJ1dHRvbntcXG4gICAgICAgIHdpZHRoOiA2MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgcGFkZGluZy1ibG9jazogMC4ycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJnLWNvbG9yO1xcbiAgICAgICAgXFxuICAgICAgICBjb2xvcjogcmdiKDE0NSwgMTQ1LCAxNDUpO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxuICAgIFxcbiAgICBidXR0b24uc2VsZWN0ZWR7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJGJnLWNvbG9yO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgfVxcbn1cXG5cXG5cXG4uZm9yZWNhc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IGF1dG8gLyAgMWZyO1xcbiAgICBtYXJnaW4tYmxvY2s6IDJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1jaG9pY2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDAuNXJlbTtcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICAgIGhlaWdodDogMzVweDtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGNvbG9yOiBncmV5O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogICRiZy1jb2xvcjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuXFxuICAgICAgICAmLnNlbGVjdGVke1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuXFxufVxcblxcbi5ob3VybHktZm9yZWNhc3QsXFxuLmRhaWx5LWZvcmVjYXN0e1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDAuMnJlbTtcXG5cXG4gICAgJi5hY3RpdmV7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgID5kaXZ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAwLjRmciAwLjhmciAwLjNmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgJGJnLWNvbG9yOztcXG5cXG4gICAgICAgIGltZ3tcXG4gICAgICAgICAgICB3aWR0aDogMzVweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XFxuICAgICAgICB9IFxcbiAgICAgICAgXFxuICAgICAgICAuZGF5X190ZW1wZXJhdHVyZV9taW57XFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIH1cXG4gICAgfSAgICBcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcXG4gICAgLmRhaWx5LWZvcmVjYXN0e1xcbiAgICAgICAgPmRpdnsgXFxuICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yNWZyIDAuNGZyIDAuOGZyIDAuM2ZyIDAuM2ZyO1xcbiAgICAgICAgICAgIC5kYXlfX3RlbXBlcmF0dXJlX21pbntcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICB9XFxuICAgIH1cXG59XCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA1MDAmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcXFwiKTtcXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNTQxMTc2NDcwNiksIHJnYmEoMCwgMCwgMCwgMC41NDExNzY0NzA2KSksIHVybChcXFwiLi4vYXNzZXRzL3BlYWstZGlzdHJpY3QuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgLyogICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MDBweCkge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAgICBcXG4gICAgICB9ICovXFxufVxcblxcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jb250YWluZXIge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICB9XFxufVxcbi5jb250YWluZXIgPiBkaXYge1xcbiAgd2lkdGg6IG1pbig4MCUsIDgwMHB4KTtcXG59XFxuLmNvbnRhaW5lciA+IGRpdi5tYWluLWluZm8sIC5jb250YWluZXIgPiBkaXYub3B0aW9ucyB7XFxuICB3aWR0aDogbWluKDgwJSwgNDAwcHgpO1xcbn1cXG5cXG4uc2VhcmNoLWJveCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4uc2VhcmNoLWJveCAqIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcbi5zZWFyY2gtYm94IGlucHV0IHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjlyZW0gKyAwLjJ2dyk7XFxuICBwYWRkaW5nOiAwIDAgMC4xcmVtIDAuOHJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5zZWFyY2gtYm94IGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0OCk7XFxuICBmb250LXNpemU6IGNhbGMoMC45cmVtICsgMC4ydncpO1xcbiAgcGFkZGluZy1sZWZ0OiAwLjJyZW07XFxufVxcbi5zZWFyY2gtYm94IGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcbi5zZWFyY2gtYm94IGJ1dHRvbiB7XFxuICBoZWlnaHQ6IDJyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvc2VhcmNoLWljb24ucG5nKTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uZXJyb3ItbXNnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDFyZW07XFxuICBtYXJnaW4tYmxvY2s6IDAuMnJlbSAxcmVtO1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3KTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5tYWluLWluZm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcXG4gIHBhZGRpbmctYmxvY2s6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbn1cXG4ubWFpbi1pbmZvID4gZGl2IHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLm1haW4taW5mbyAuY2l0eSB7XFxuICBmb250LXNpemU6IGNhbGMoMS4ycmVtICsgMC4zdncpO1xcbn1cXG4ubWFpbi1pbmZvIC5kYXRlIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygwLjhyZW0gKyAwLjJ2dyk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuLm1haW4taW5mbyAuc3RhdHVzIHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxLjJyZW0gKyAwLjN2dyk7XFxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG59XFxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5tYWluLWluZm8gLmltZy1hbmQtdGVtcCBpbWcge1xcbiAgd2lkdGg6IDYuNXJlbTtcXG59XFxuLm1haW4taW5mbyAuaW1nLWFuZC10ZW1wIC50ZW1wZXJhdHVyZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5tYWluLWluZm8gLnN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDEuNXJlbSAwIDAuMnJlbTtcXG59XFxuLm1haW4taW5mbyAuc3RhdHMgLnN0YXQtYm94IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xcbiAgZmxleDogMC4yNTtcXG59XFxuLm1haW4taW5mbyAuc3RhdHMgLnN0YXQtYm94IGltZyB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLndpbmQtdW5pdCB7XFxuICBmb250LXNpemU6IGNhbGMoMC44cmVtICsgMC4ydncgLSAwLjJ2dyk7XFxufVxcblxcbi50ZW1wLXVuaXQge1xcbiAgZm9udC1zaXplOiBjYWxjKDAuOHJlbSArIDAuMnZ3IC0gMC4ydncpO1xcbiAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xcbn1cXG5cXG4uZmVlbHMtbGlrZS10ZW1wLXVuaXQge1xcbiAgZm9udC1zaXplOiBjYWxjKCgwLjhyZW0gKyAwLjJ2dyAtIDAuMnZ3KSAqIDAuOSk7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG5cXG4ub3B0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ub3B0aW9ucyBidXR0b24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWJsb2NrOiAwLjJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcXG4gIGNvbG9yOiByZ2IoMTQ1LCAxNDUsIDE0NSk7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcbi5vcHRpb25zIGJ1dHRvbi5zZWxlY3RlZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTUxKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogYXV0by8xZnI7XFxuICBtYXJnaW4tYmxvY2s6IDJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1jaG9pY2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcbi5mb3JlY2FzdC1jaG9pY2UgYnV0dG9uIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiBncmV5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE1MSk7XFxuICBmb250LXdlaWdodDogMTAwO1xcbn1cXG4uZm9yZWNhc3QtY2hvaWNlIGJ1dHRvbi5zZWxlY3RlZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaG91cmx5LWZvcmVjYXN0LFxcbi5kYWlseS1mb3JlY2FzdCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC4ycmVtO1xcbn1cXG4uaG91cmx5LWZvcmVjYXN0LmFjdGl2ZSxcXG4uZGFpbHktZm9yZWNhc3QuYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5ob3VybHktZm9yZWNhc3QgPiBkaXYsXFxuLmRhaWx5LWZvcmVjYXN0ID4gZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yNWZyIDAuNGZyIDAuOGZyIDAuM2ZyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xNTEpO1xcbn1cXG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2IGltZyxcXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYgaW1nIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cXG4uaG91cmx5LWZvcmVjYXN0ID4gZGl2IC5kYXlfX3RlbXBlcmF0dXJlX21pbixcXG4uZGFpbHktZm9yZWNhc3QgPiBkaXYgLmRheV9fdGVtcGVyYXR1cmVfbWluIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XFxuICAuZGFpbHktZm9yZWNhc3QgPiBkaXYge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMjVmciAwLjRmciAwLjhmciAwLjNmciAwLjNmcjtcXG4gIH1cXG4gIC5kYWlseS1mb3JlY2FzdCA+IGRpdiAuZGF5X190ZW1wZXJhdHVyZV9taW4ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiO1xuaW1wb3J0ICogYXMgSGVscGVycyBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IHsgZGlzcGxheUVycm9yTXNnIH0gZnJvbSBcIi4vZG9tXCI7XG5cblxuLy9jb25zdCBDVVJSRU5UX1VSTCA9ICdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9NWI3MzYyZTg4MzhlNDRiZGE5MTEyNTMyNDIzMTcxMCc7XG5jb25zdCBGT1JFQ0FTVF9VUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9NWI3MzYyZTg4MzhlNDRiZGE5MTEyNTMyNDIzMTcxMCZkYXlzPTYnO1xuXG4vLyBeXiB0aGUgZm9yZWNhc3QgdXJsIGNhbGwgYWxzbyBpbmNsdWRlcyB0aGUgY3VycmVudCB3ZWF0aGVyXG4vLyBzbyBubyBuZWVkIGZvciB0d28gc2VycGVyYXRlIGNhbGxzXG5cbi8vIHNvIHdlIGFsd2F5cyBrbm93IGN1cnJlbnQgc2VhcmNoZWQgbG9jYXRpb25cbmxldCBsYXN0TG9jYXRpb247XG5cbi8vIHN0b3JlIHRoZSBtb3N0IHJlY2VudCB3ZWF0aGVyIGNhbGwgc28gd2UgZG9uJ3Rcbi8vIGhhdmUgdG8gbWFrZSB1bm5lY2Vzc2FyeSBjYWxsc1xubGV0IGxhc3RGb3JlY2FzdDtcblxuXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChsb2NhdGlvbj0na2lsY29ybWFjJyl7XG4gICAgdHJ5e1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtGT1JFQ0FTVF9VUkx9JnE9JHtsb2NhdGlvbn1gKTtcbiAgICAgICAgLy8gY2hlY2sgdGhhdCB0aGUgcmVzcG9uc2UgaXMgZmluZVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgIGRpc3BsYXlFcnJvck1zZyhcIlNvcnJ5LCB3ZSdyZSBoYXZpbmcgdHJvdWJsZS4uLlwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUGFnZSBub3QgZm91bmQnKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3JNc2coXCJTb3JyeSwgcHJvYmxlbXMgd2l0aCB0aGUgc2VydmVyLi4uXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZXJ2ZXIgZXJyb3InKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICAgICAgZGlzcGxheUVycm9yTXNnKFwiU29ycnksIGNhbid0IGZpbmQgc3VjaCBhIHBsYWNlLi4uXCIpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgUmVxdWVzdCcpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBkaXNwbGF5RXJyb3JNc2coXCJTb3JyeSwgd2UncmUgaGF2aW5nIHRyb3VibGUuLi5cIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICAgICAgfVxuICAgICAgICBsZXQgZm9yZWNhc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgbGFzdExvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIGxhc3RGb3JlY2FzdCA9IGZvcmVjYXN0O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3JlY2FzdCBjYWxsZWQgJywgZm9yZWNhc3QpO1xuXG4gICAgICAgIHJldHVybiBmb3JlY2FzdFxuXG4gICAgfWNhdGNoKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuXG59XG5cbi8qIGFzeW5jIGZ1bmN0aW9uIGdldERhdGUoKXtcbiAgICBsZXQgd2VhdGhlck9iaiA9IGF3YWl0IGdldEZvcmVjYXN0KGxhc3RMb2NhdGlvbik7XG5cbiAgICBsZXQgZGF0ZSA9IHdlYXRoZXJPYmoubG9jYXRpb24ubG9jYWx0aW1lO1xuXG4gICAgcmV0dXJuIGZvcm1hdChuZXcgRGF0ZShkYXRlKSwgXCJlZWVlIGRkIE1NTSB5eSBISDptbVwiKTtcbn0gKi9cblxuLy8gZm9yIHNvbWUgcmVhc29uLCBjaGFuY2Ugb2YgcmFpbiBpcyBzdG9yZWQgZGVlcCBpblxuLy8gZm9yZWNhc3QgPiBmb3JlY2FzdGRheSA+IDAgPiBob3VyID4gLi4uaG91cnMgPiBoZXJlXG4vLyBidXQgd2UgbmVlZCB0aGUgY3VycmVudCBob3VyIHRvIG1hdGNoIGl0IHVwIFxuLy8gc28gd2UgbWFrZSB1c2Ugb2YgYSBoZWxwZXIgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBcbi8vIHRoZSBjdXJyZW50IGxvY2FsIGhvdXJcbmZ1bmN0aW9uIGdldENoYW5jZU9mUmFpbigpe1xuICAgIGxldCBsb2NhbEhvdXIgPSAgTnVtYmVyKEhlbHBlcnMuZ2V0TG9jYWxIb3VyKGxhc3RGb3JlY2FzdCkpOyBcbiAgICBjb25zb2xlLmxvZygnbG9jYWwgaG91ciAnLCBsb2NhbEhvdXIubGVuZ3RoLCBsb2NhbEhvdXIpO1xuICAgIGNvbnNvbGUubG9nKCdsb2NhbCBob3VyIGNpdHknLCBsYXN0Rm9yZWNhc3QpO1xuICAgIGxldCBjaGFuY2VPZlJhaW4gPSBsYXN0Rm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltsb2NhbEhvdXJdLmNoYW5jZV9vZl9yYWluO1xuXG4gICAgcmV0dXJuIGNoYW5jZU9mUmFpbjtcbn1cblxuLy8gSE9VUkxZIFNUQVRTXG4vLyB0aGlzIGlzIHRoZSB0cmlja2llc3QgJiBidXNpZXN0IG9uZSwgSSBuZWVkIHRvIGdldCBob3VybHkgc3RhdHNcbi8vIGFuZCBkaXNwbGF5IHRoZW0gaW4gM2hyIGluY3JlbWVudHMgZnJvbSB0aGUgY3VycmVudCBob3VyLi4uXG4vLyB0aGlzIHRha2VzIGluIHRoZSBob3VyIGFuZCBnZXRzIG5lY2Vzc2FyeSBzdGF0cyBhcyBhbiBvYmplY3RcblxuZnVuY3Rpb24gZ2V0SG91cmx5U3RhdHMoaW5jcmVtZW50TWFnbml0dWRlPTApe1xuXG4gICAgbGV0IGhvdXIgPSBOdW1iZXIoSGVscGVycy5nZXRMb2NhbEhvdXIobGFzdEZvcmVjYXN0KSk7XG4gICAgaG91ciArPSAoMyppbmNyZW1lbnRNYWduaXR1ZGUpO1xuICAgIGxldCBkYXkgPSAwO1xuXG4gICAgLy8gY2hhbmdlIHRvIG5leHQgZGF5IHdoZW4gd2UgcGFzcyBtaWRuaWdodFxuICAgIC8vIGFuZCBmaXggdGhlIGhvdXIgaS5lLiAyNiB3aWxsIGJlIDI2LTI0ID0gMmFtXG4gICAgaWYoaG91ciA+IDIzKXtcbiAgICAgICAgaG91ciAtPSAyNDtcbiAgICAgICAgZGF5ID0gMTtcbiAgICB9XG5cbiAgICBsZXQgaG91ck9iaiA9IGxhc3RGb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmhvdXJbaG91cl07XG4gICAgLy8gdGVzdGluZ1xuXG4gICAgbGV0IGhvdXJUb0Rpc3BsYXkgPSBIZWxwZXJzLmdldEhvdXJUb0Rpc3BsYXkoaG91ck9iaik7XG4gICAgbGV0IHN0YXR1cyA9IGhvdXJPYmouY29uZGl0aW9uLnRleHQ7XG4gICAgbGV0IGljb24gPSBob3VyT2JqLmNvbmRpdGlvbi5pY29uO1xuICAgIGxldCBhbHRUZXh0ID0gaG91ck9iai5jb25kaXRpb24udGV4dDtcbiAgICBsZXQgdGVtcEMgPSBob3VyT2JqLnRlbXBfYztcbiAgICBsZXQgdGVtcEYgPSBob3VyT2JqLnRlbXBfZjtcblxuICAgIC8vIHJvdW5kLW9mZiB0ZW1wc1xuICAgIHRlbXBDID0gTWF0aC5yb3VuZCh0ZW1wQyk7XG4gICAgdGVtcEYgPSBNYXRoLnJvdW5kKHRlbXBGKTtcblxuICAgIHJldHVybntcbiAgICAgICAgaG91clRvRGlzcGxheSwgXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgaWNvbixcbiAgICAgICAgYWx0VGV4dCwgXG4gICAgICAgIHRlbXBDLCBcbiAgICAgICAgdGVtcEZcbiAgICB9O1xuIFxufVxuXG5mdW5jdGlvbiBnZXREYWlseVN0YXRzKGluZGV4KXtcbiAgICBsZXQgZGFpbHlPYmogPSBsYXN0Rm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaW5kZXhdO1xuXG4gICAgLy8gaGVscGVyIHRvIGdldCBuaWNlIGRhdGVcbiAgICBsZXQgZGF5VG9EaXNwbGF5O1xuICAgIGlmKGluZGV4ID09PSAwKXtcbiAgICAgICAgZGF5VG9EaXNwbGF5ID0gJ1RvZGF5JztcbiAgICB9ZWxzZXtcbiAgICAgICAgZGF5VG9EaXNwbGF5ID0gSGVscGVycy5mb3JtYXREYXRlKGRhaWx5T2JqLmRhdGUsICdkYXknLCB0cnVlKTtcbiAgICB9XG4gICAgbGV0IHN0YXR1cyA9IGRhaWx5T2JqLmRheS5jb25kaXRpb24udGV4dDtcbiAgICBsZXQgaWNvbiA9IGRhaWx5T2JqLmRheS5jb25kaXRpb24uaWNvbjtcbiAgICBsZXQgYWx0VGV4dCA9IGRhaWx5T2JqLmRheS5jb25kaXRpb24udGV4dDtcbiAgICBsZXQgaGlUZW1wQyA9IGRhaWx5T2JqLmRheS5tYXh0ZW1wX2M7XG4gICAgbGV0IGxvd1RlbXBDID0gZGFpbHlPYmouZGF5Lm1pbnRlbXBfYztcbiAgICBsZXQgaGlUZW1wRiA9IGRhaWx5T2JqLmRheS5tYXh0ZW1wX2Y7XG4gICAgbGV0IGxvd1RlbXBGID0gZGFpbHlPYmouZGF5Lm1pbnRlbXBfZjtcblxuICAgIHJldHVybntcbiAgICAgICAgZGF5VG9EaXNwbGF5LFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGljb24sXG4gICAgICAgIGFsdFRleHQsXG4gICAgICAgIGhpVGVtcEMsXG4gICAgICAgIGxvd1RlbXBDLFxuICAgICAgICBoaVRlbXBGLFxuICAgICAgICBsb3dUZW1wRixcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldExhdGVzdFdlYXRoZXJPYmooKXtcbiAgICByZXR1cm4gbGFzdEZvcmVjYXN0O1xufVxuXG5leHBvcnQge1xuICAgIGdldEZvcmVjYXN0LFxuICAgIGdldENoYW5jZU9mUmFpbiwgXG4gICAgZ2V0TGF0ZXN0V2VhdGhlck9iaixcbiAgICBnZXRIb3VybHlTdGF0cyxcbiAgICBnZXREYWlseVN0YXRzLFxufTsiLCJpbXBvcnQgKiBhcyBBUEkgZnJvbSAnLi9hcGknO1xuaW1wb3J0ICogYXMgSGVscGVyIGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgZmVlbHNMaWtlSW1nIGZyb20gJy4uL2Fzc2V0cy9mZWVscy1saWtlLnBuZyc7XG5pbXBvcnQgcmFpbkltZyBmcm9tICcuLi9hc3NldHMvcmFpbi1kcm9wcy5wbmcnO1xuaW1wb3J0IGh1bWlkaXR5SW1nIGZyb20gJy4uL2Fzc2V0cy9odW1pZGl0eS5wbmcnO1xuaW1wb3J0IHdpbmRJbWcgZnJvbSAnLi4vYXNzZXRzL3dpbmQucG5nJztcbmltcG9ydCBjbG91ZEljb24gZnJvbSAnLi4vYXNzZXRzL2Nsb3VkLWljb24ucG5nJztcblxuY29uc3QgZmF2aWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmsnKTtcbmNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLW1zZycpO1xuY29uc3Qgd2VhdGhlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWF0aGVyLWltZz5pbWcnKTtcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpO1xuY29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXR1cycpO1xuXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XG5cbmNvbnN0IGZlZWxzTGlrZUltZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWxzLWxpa2UtaW1nJyk7XG5jb25zdCBjaGFuY2VPZlJhaW5JbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFuY2Utb2YtcmFpbi1pbWcnKTtcbmNvbnN0IGh1bWlkaXR5SW1nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHktaW1nJyk7XG5jb25zdCB3aW5kSW1nRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZC1pbWcnKTtcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVscy1saWtlJyk7XG5jb25zdCBjaGFuY2VPZlJhaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmFpbicpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVtaWRpdHknKTtcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luZCcpO1xuXG4vLyBob3VybHkgZWxlbWVudHNcbmNvbnN0IGhvdXJEaXZzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ob3VybHktZm9yZWNhc3QgPiBkaXYnKV07XG4vLyBkYWlseSBlbGVtZW50c1xuY29uc3QgZGF5RGl2cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGFpbHktZm9yZWNhc3QgPiBkaXYnKV07XG5cbi8vIGRlZmF1bHQgdmFsdWVzIGFyZSBDZWxzaXVzICYgTXBoXG5jb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2Vsc2l1cycpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21waCcpO1xuXG5mYXZpY29uLmhyZWYgPSBjbG91ZEljb247XG5cbi8vIHNldCBpY29ucyBmb3IgdGhlIHN0YXQgYm94ZXMgXG5mZWVsc0xpa2VJbWdFbC5zcmMgPSBmZWVsc0xpa2VJbWc7XG5jaGFuY2VPZlJhaW5JbWdFbC5zcmMgPSByYWluSW1nO1xuaHVtaWRpdHlJbWdFbC5zcmMgPSBodW1pZGl0eUltZztcbndpbmRJbWdFbC5zcmMgPSB3aW5kSW1nO1xuXG5sZXQgaXNDZWxzaXVzID0gdHJ1ZTtcbmxldCBpc01waCA9IHRydWU7XG5cblxuLy8gaW5pdGlhbGl6ZSB0aGUgcGFnZSBpY29ucyBhbmQgZGVmYXVsdCB2YWx1ZXNcbmFzeW5jIGZ1bmN0aW9uIGluaXQoKXtcbiAgICAvLyBzZXQgZmF2aWNvbiBhbmQgc29tZSBwYWdlIGljb25zIFxuICAgIGZhdmljb24uaHJlZiA9IGNsb3VkSWNvbjtcbiAgICBmZWVsc0xpa2VJbWdFbC5zcmMgPSBmZWVsc0xpa2VJbWc7XG4gICAgY2hhbmNlT2ZSYWluSW1nRWwuc3JjID0gcmFpbkltZztcbiAgICBodW1pZGl0eUltZ0VsLnNyYyA9IGh1bWlkaXR5SW1nO1xuICAgIHdpbmRJbWdFbC5zcmMgPSB3aW5kSW1nO1xuXG4gICAgLy8gbG9hZCAmIHNldCB3ZWF0aGVyIGluZm8gZnJvbSAna2lsY29ybWFjJ1xuICAgIC8vIGFzIHBsYWNlaG9sZGVyIGluZm9cbiAgICBsZXQgZm9yZWNhc3QgPSBhd2FpdCBBUEkuZ2V0Rm9yZWNhc3QoKTtcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdCk7XG4gICAgc2V0QWxsVmFsdWVzKGZvcmVjYXN0KTtcblxufVxuXG5hc3luYyBmdW5jdGlvbiBzZXRBbGxWYWx1ZXMoZm9yZWNhc3Qpe1xuICAgIC8vIG1haW4gaW5mb1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gZm9yZWNhc3QubG9jYXRpb24ubmFtZTtcbiAgICB3ZWF0aGVySW1nLnNyYyA9IGZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLmljb247XG4gICAgd2VhdGhlckltZy5hbHQgPSBmb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBIZWxwZXIuZm9ybWF0RGF0ZShmb3JlY2FzdC5sb2NhdGlvbi5sb2NhbHRpbWUpO1xuICAgIHRlbXAuaW5uZXJIVE1MID0gaXNDZWxzaXVzID8gXG4gICAgICAgIE1hdGgucm91bmQoZm9yZWNhc3QuY3VycmVudC50ZW1wX2MpK2A8c3BhbiBjbGFzcz0ndGVtcC11bml0Jz7CsEM8L3NwYW4+YFxuICAgICAgICA6TWF0aC5yb3VuZChmb3JlY2FzdC5jdXJyZW50LnRlbXBfZikrYDxzcGFuIGNsYXNzPSd0ZW1wLXVuaXQnPsKwRjwvc3Bhbj5gO1xuXG4gICAgc3RhdHVzLnRleHRDb250ZW50ID0gZm9yZWNhc3QuY3VycmVudC5jb25kaXRpb24udGV4dDtcblxuICAgIGZlZWxzTGlrZS5pbm5lckhUTUwgPSBpc0NlbHNpdXMgPyBcbiAgICAgICAgTWF0aC5yb3VuZChmb3JlY2FzdC5jdXJyZW50LmZlZWxzbGlrZV9jKStgPHNwYW4gY2xhc3M9J2ZlZWxzLWxpa2UtdGVtcC11bml0Jz7CsEM8L3NwYW4+YFxuICAgICAgICA6TWF0aC5yb3VuZChmb3JlY2FzdC5jdXJyZW50LmZlZWxzbGlrZV9mKStgPHNwYW4gY2xhc3M9J2ZlZWxzLWxpa2UtdGVtcC11bml0Jz7CsEY8L3NwYW4+YDtcblxuICAgIGNoYW5jZU9mUmFpbi50ZXh0Q29udGVudCA9IEFQSS5nZXRDaGFuY2VPZlJhaW4oKSsnJSc7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5jdXJyZW50LnRlbXBfYysnJSc7XG4gICAgd2luZC5pbm5lckhUTUwgPSBpc01waCA/IFxuICAgICAgICBNYXRoLnJvdW5kKGZvcmVjYXN0LmN1cnJlbnQuZ3VzdF9tcGgpK2A8c3BhbiBjbGFzcz0nd2luZC11bml0Jz5tcGg8L3NwYW4+YFxuICAgICAgICA6TWF0aC5yb3VuZChmb3JlY2FzdC5jdXJyZW50Lmd1c3Rfa3BoKStgPHNwYW4gY2xhc3M9J3dpbmQtdW5pdCc+a20vaDwvc3Bhbj5gXG5cbiAgICAvLyBob3VybHlcbiAgICBzZXRIb3VybHlWYWx1ZXMoKTtcbiAgICBcbiAgICAvLyB3ZWVrXG4gICAgc2V0RGFpbHlWYWx1ZXMoKTtcbn1cblxuZnVuY3Rpb24gc2V0SG91cmx5VmFsdWVzKCl7XG4gICAgaG91ckRpdnMuZm9yRWFjaCgoZGl2LCBpKSA9PntcbiAgICAgICAgbGV0IHtob3VyVG9EaXNwbGF5LCBzdGF0dXMsIGljb24sIGFsdFRleHQsIHRlbXBDLCB0ZW1wRn0gPSBBUEkuZ2V0SG91cmx5U3RhdHMoaSk7XG5cbiAgICAgICAgZGl2LmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gaG91clRvRGlzcGxheTtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzFdLnNyYyA9IGljb247XG4gICAgICAgIGRpdi5jaGlsZHJlblsxXS5hbHQgPSBhbHRUZXh0O1xuICAgICAgICBkaXYuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBzdGF0dXM7XG4gICAgICAgIGRpdi5jaGlsZHJlblszXS50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1cyA/IFxuICAgICAgICAgICAgdGVtcEMrJ8KwQycgOlxuICAgICAgICAgICAgdGVtcEYrJ8KwRic7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc2V0RGFpbHlWYWx1ZXMoKXtcbiAgICAvL2NyZWF0ZSBhIG1ldGhvZCBpbiBBUEkgd2hpY2ggcmV0dXJucyB0aGUgbmVjZXNzYXJ5IGRhdGFcbiAgICAvLyBmb3IgbmV4dCA2IGRheXNcbiAgICAvLyBtYXkgbmVlZCBhIGRhdGUtdG8tZGF5IGhlbHBlciBtZXRob2RcbiAgICAvLyBtYXliZSB1c2UgbWluL21heCB0ZW1wXG4gICAgLy8gb3RoZXJ3aXNlIHRoZSBzYW1lXG4gICAgZGF5RGl2cy5mb3JFYWNoKChkaXYsIGkpPT57XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBkYXlUb0Rpc3BsYXksXG4gICAgICAgICAgICBzdGF0dXMsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgYWx0VGV4dCxcbiAgICAgICAgICAgIGhpVGVtcEMsIFxuICAgICAgICAgICAgbG93VGVtcEMsXG4gICAgICAgICAgICBoaVRlbXBGLFxuICAgICAgICAgICAgbG93VGVtcEZcbiAgICAgICAgICAgIH0gPSBBUEkuZ2V0RGFpbHlTdGF0cyhpKTtcbiAgICAgICAgXG4gICAgICAgIGRpdi5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IGRheVRvRGlzcGxheTtcbiAgICAgICAgZGl2LmNoaWxkcmVuWzFdLnNyYyA9IGljb247XG4gICAgICAgIGRpdi5jaGlsZHJlblsxXS5hbHQgPSBhbHRUZXh0O1xuICAgICAgICBkaXYuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSBzdGF0dXM7XG4gICAgICAgIGRpdi5jaGlsZHJlblszXS50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1cyA/IFxuICAgICAgICAn4pa8ICcrTWF0aC5yb3VuZChsb3dUZW1wRikrJ8KwRic6XG4gICAgICAgICfilrwgJytNYXRoLnJvdW5kKGxvd1RlbXBDKSsnwrBDJyA7XG4gICAgICAgIGRpdi5jaGlsZHJlbls0XS50ZXh0Q29udGVudCA9IGlzQ2Vsc2l1cyA/IFxuICAgICAgICAn4payICcrTWF0aC5yb3VuZChoaVRlbXBDKSsnwrBDJyA6XG4gICAgICAgICfilrIgJytNYXRoLnJvdW5kKGhpVGVtcEYpKyfCsEYnO1xuICAgIH0pXG5cbn1cblxuZnVuY3Rpb24gc2V0SXNDZWxzaXVzKHZhbHVlKXtcbiAgICBpc0NlbHNpdXMgPSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2V0SXNNcGgodmFsdWUpe1xuICAgIGlzTXBoID0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlFcnJvck1zZyhtc2cpe1xuICAgIGVycm9yTXNnLnRleHRDb250ZW50ID0gbXNnO1xufVxuXG5cbmV4cG9ydCB7XG4gICAgc2V0QWxsVmFsdWVzLCBcbiAgICBpbml0LCBcbiAgICBzZXRJc0NlbHNpdXMsIFxuICAgIHNldElzTXBoLFxuICAgIGRpc3BsYXlFcnJvck1zZyxcbiAgICB9OyIsImltcG9ydCAqIGFzIEFQSSBmcm9tICcuL2FwaSc7XG5pbXBvcnQgKiBhcyBET00gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJveCA+IGJ1dHRvbicpXG5jb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYm94ID4gaW5wdXQnKTtcbmNvbnN0IGNlbHNpdXNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYy1idG4nKTtcbmNvbnN0IGZhaHJlbmhlaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZi1idG4nKTtcbmNvbnN0IG1waEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtcGgtYnRuJyk7XG5jb25zdCBrbUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrbS1idG4nKTtcbmNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5LWJ0bicpO1xuY29uc3Qgd2Vla0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWVrLWJ0bicpO1xuY29uc3QgaG91cmx5RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob3VybHktZm9yZWNhc3QnKTtcbmNvbnN0IGRhaWx5RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kYWlseS1mb3JlY2FzdCcpO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVTZWFyY2hCdG5DbGljaygpe1xuICAgIGxldCB1c2VySW5wdXQgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICBpZih1c2VySW5wdXQgPT0gJycpIHJldHVybjtcblxuICAgIGNvbnNvbGUubG9nKCdpbnB1dCAnLCB1c2VySW5wdXQpO1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBBUEkuZ2V0Rm9yZWNhc3QodXNlcklucHV0KTtcbiAgICBcbiAgICAvL25lZWQgdG8gY2hlY2sgcmVzdWx0IGZvciBlcnJvcnMgXlxuICAgIGlmKHJlc3VsdCA9PT0gdW5kZWZpbmVkKXtcbiAgICAgICAgY29uc29sZS5sb2coJ2JsbGxvb29vcCcpO1xuICAgIH0gZWxzZXtcbiAgICAgICAgRE9NLnNldEFsbFZhbHVlcyhyZXN1bHQpO1xuICAgIH1cblxuICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRvQ2Vsc2l1cygpe1xuICAgIGNlbHNpdXNCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBmYWhyZW5oZWl0QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRvRmFocmVuaGVpdCgpe1xuICAgIGZhaHJlbmhlaXRCdG4uY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBjZWxzaXVzQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNlbHNpdXNCdG5DbGljaygpe1xuICAgIGlmKGNlbHNpdXNCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSByZXR1cm47XG4gICAgY2hhbmdlVG9DZWxzaXVzKCk7XG4gICAgLy8gbWFrZSBhIG5ldyBjYWxsPyBOby4uLlxuICAgIGNvbnN0IHdlYXRoZXJPYmogPSBBUEkuZ2V0TGF0ZXN0V2VhdGhlck9iaigpO1xuICAgIERPTS5zZXRJc0NlbHNpdXModHJ1ZSk7XG4gICAgRE9NLnNldEFsbFZhbHVlcyh3ZWF0aGVyT2JqKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRmFocmVuaGVpdEJ0bkNsaWNrKCl7XG4gICAgaWYoZmFocmVuaGVpdEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdGVkJykpIHJldHVybjtcbiAgICBjaGFuZ2VUb0ZhaHJlbmhlaXQoKTtcbiAgICAvLyBtYWtlIGEgbmV3IGNhbGw/IE5vLi4uXG4gICAgY29uc3Qgd2VhdGhlck9iaiA9IEFQSS5nZXRMYXRlc3RXZWF0aGVyT2JqKCk7XG4gICAgRE9NLnNldElzQ2Vsc2l1cyhmYWxzZSk7XG4gICAgRE9NLnNldEFsbFZhbHVlcyh3ZWF0aGVyT2JqKTtcbn1cbmZ1bmN0aW9uIGNoYW5nZVRvTXBoKCl7XG4gICAgbXBoQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAga21CdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVG9LbSgpe1xuICAgIGttQnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgbXBoQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1waEJ0bkNsaWNrKCl7XG4gICAgaWYobXBoQnRuLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkgcmV0dXJuO1xuICAgIGNoYW5nZVRvTXBoKCk7XG4gICAgLy8gbWFrZSBhIG5ldyBjYWxsPyBOby4uLlxuICAgIGNvbnN0IHdlYXRoZXJPYmogPSBBUEkuZ2V0TGF0ZXN0V2VhdGhlck9iaigpO1xuICAgIERPTS5zZXRJc01waCh0cnVlKTtcbiAgICBET00uc2V0QWxsVmFsdWVzKHdlYXRoZXJPYmopO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVLbUJ0bkNsaWNrKCl7XG4gICAgaWYoa21CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RlZCcpKSByZXR1cm47XG4gICAgY2hhbmdlVG9LbSgpO1xuICAgIC8vIG1ha2UgYSBuZXcgY2FsbD8gTm8uLi5cbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gQVBJLmdldExhdGVzdFdlYXRoZXJPYmooKTtcbiAgICBET00uc2V0SXNNcGgoZmFsc2UpO1xuICAgIERPTS5zZXRBbGxWYWx1ZXMod2VhdGhlck9iaik7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVRvSG91cmx5Rm9yZWNhc3QoKXtcbiAgICBob3VybHlEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHRvZGF5QnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgZGFpbHlEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIHdlZWtCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcblxufVxuXG5mdW5jdGlvbiBjaGFuZ2VUb0RhaWx5Rm9yZWNhc3QoKXtcbiAgICBkYWlseURpc3BsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgd2Vla0J0bi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGhvdXJseURpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgdG9kYXlCdG4uY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcblxufVxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTZWFyY2hCdG5DbGljayk7XG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKT0+e1xuICAgIGlmKGUua2V5ID09ICdFbnRlcicpIGhhbmRsZVNlYXJjaEJ0bkNsaWNrKCk7XG59KVxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKT0+e1xuICAgIERPTS5kaXNwbGF5RXJyb3JNc2coJycpO1xufSlcbmNlbHNpdXNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDZWxzaXVzQnRuQ2xpY2spO1xuZmFocmVuaGVpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUZhaHJlbmhlaXRCdG5DbGljayk7XG5tcGhCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNcGhCdG5DbGljayk7XG5rbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUttQnRuQ2xpY2spO1xudG9kYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUb0hvdXJseUZvcmVjYXN0KTtcbndlZWtCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGFuZ2VUb0RhaWx5Rm9yZWNhc3QpOyIsImZ1bmN0aW9uIGdldExvY2FsSG91cih3ZWF0aGVyT2JqKXtcbiAgLy8gaG93IEkgY3V0IG91dCB0aGUgaG91ciBpcyBjYXVzaW5nIHByb2JsZW1zXG4gIC8vIHdoZW4gaXQncyBhIHNpbmdsZS1kaWdpdCBob3VyXG4gIC8vIHNvIGkgZGVmYXVsdCBpdCB0byBhIGRhdGUgZm9ybWF0XG4gIC8vIGFuZCBjdXQgdGhlIGhvdXIgZnJvbSB0aGF0XG5cbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh3ZWF0aGVyT2JqLmxvY2F0aW9uLmxvY2FsdGltZSk7XG4gIGxldCBob3VyID0gU3RyaW5nKGRhdGUpLnN1YnN0cmluZygxNiwgMTgpO1xuXG4gIHJldHVybiBob3VyO1xufVxuXG5mdW5jdGlvbiBnZXRIb3VyVG9EaXNwbGF5KGhvdXJPYmope1xuICAgIGxldCB0aW1lID0gaG91ck9iai50aW1lO1xuICAgIGxldCBob3VyID0gdGltZS5zdWJzdHJpbmcodGltZS5sZW5ndGgtNSwgdGltZS5sZW5ndGgpO1xuXG4gICAgcmV0dXJuIGhvdXI7XG59XG5cbi8vIGhlbHBmdWwgZm9yIHNsaWNpbmcuLi5cbi8vMDEyMzQ1Njc4OTAxMjM0NTY3ODkwMTIzXG4vL1RodSBPY3QgMjYgMjAyMyAxMzoxNjowMCBHTVQrMDEwMFxuXG4vLyBleGNlbGxlbnQgcGllY2Ugb2YgaGVscGVyIGNvZGUgSSBib3Jyb3dlZCAmIG1vZGlmaWVkIGZyb21cbi8vICdodHRwczovL2dpdGh1Yi5jb20vYnNjb3R0bnovd2VhdGhlci1hcHAvYmxvYi9tYWluL3NyYy9qcy91dGlscy5qcydcbmZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSwgZGF0ZUZvcm1hdCA9ICdmdWxsJywgd2FudFNob3J0RGF5ID0gZmFsc2UpIHtcbiAgICBjb25zdCBkYXRlU3RyaW5nID0gbmV3IERhdGUoZGF0ZSkudG9TdHJpbmcoKTtcbiAgICBjb25zdCBtb250aCA9IGRhdGVTdHJpbmcuc2xpY2UoNCwgOCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGVTdHJpbmcuc2xpY2UoMTMsIDE1KTtcbiAgICBsZXQgaG91ciA9IGRhdGVTdHJpbmcuc2xpY2UoMTYsMTgpO1xuICAgIGxldCBkYXlPZldlZWsgPSBkYXRlU3RyaW5nLnNsaWNlKDAsIDMpO1xuICAgIGxldCBkYXlPZk1vbnRoID0gZGF0ZVN0cmluZy5zbGljZSg4LCAxMCk7XG4gICAgbGV0IHRpbWUgPSBkYXRlU3RyaW5nLnNsaWNlKDE2LDIxKTtcbiAgICBsZXQgZGF5U3VmZml4O1xuICAgIGxldCB0aW1lU3VmZml4O1xuXG4gICAgLy9jb25zb2xlLmxvZygnZGF0ZSBzdHJpbmcgJywgZGF0ZVN0cmluZyk7XG4gIFxuICAgIC8vIGNoYW5nZSAwMSB0byAxIGV0Y1xuICAgIGlmIChkYXlPZk1vbnRoIDwgMTApIHtcbiAgICAgIGRheU9mTW9udGggPSBkYXlPZk1vbnRoLnNsaWNlKDEpO1xuICAgIH1cbiAgXG4gICAgLy8gZ2VuZXJhdGUgY29yZWN0IGRhdGUgZGF5U3VmZml4XG4gICAgaWYgKGRheU9mTW9udGguc2xpY2UoLTEpID09PSAnMScpIHtcbiAgICAgIGRheVN1ZmZpeCA9ICdzdCc7XG4gICAgfSBlbHNlIGlmIChkYXlPZk1vbnRoLnNsaWNlKC0xKSA9PT0gJzInKSB7XG4gICAgICBkYXlTdWZmaXggPSAnbmQnO1xuICAgIH0gZWxzZSBpZiAoZGF5T2ZNb250aC5zbGljZSgtMSkgPT09ICczJykge1xuICAgICAgZGF5U3VmZml4ID0gJ3JkJztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5U3VmZml4ID0gJ3RoJztcbiAgICB9XG5cbiAgICAvLyBnZW5lcmF0ZSBjb3JyZWN0IHRpbWUgc3VmZml4XG4gICAgaWYoaG91ciA8PSAxMil7XG4gICAgICB0aW1lU3VmZml4ID0gJ2FtJztcbiAgICB9ZWxzZXtcbiAgICAgIHRpbWVTdWZmaXggPSAncG0nO1xuICAgIH1cbiAgICAvLyBhbmQgMTJociBmb3JtYXRcbiAgICBpZihob3VyID4gMTIpe1xuICAgICAgaG91ciAtPSAxMjtcbiAgICAgIHRpbWUgPSBTdHJpbmcoaG91cikuc2xpY2UoMCwyKSsnOicrdGltZS5zbGljZSgzLDUpO1xuICAgIH1cbiAgXG4gIFxuICAgIC8vIHRob3NlIHBlc2t5IDExLCAxMiwgMTMgdGhzXG4gICAgaWYgKGRheU9mTW9udGggPiAzICYmIGRheU9mTW9udGggPCAyMSkge1xuICAgICAgZGF5U3VmZml4ID0gJ3RoJztcbiAgICB9XG4gIFxuICAgIC8vIGNvbnZlcnQgc2hvcnQgZGF5IG5hbWUgdG8gZnVsbCBkYXkgbmFtZVxuICAgIGlmKCF3YW50U2hvcnREYXkpeyAgICBcbiAgICAgICAgaWYgKGRheU9mV2VlayA9PT0gJ01vbicpIHtcbiAgICAgICAgZGF5T2ZXZWVrID0gJ01vbmRheSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF5T2ZXZWVrID09PSAnVHVlJykge1xuICAgICAgICBkYXlPZldlZWsgPSAnVHVlc2RheSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF5T2ZXZWVrID09PSAnV2VkJykge1xuICAgICAgICBkYXlPZldlZWsgPSAnV2VkbmVzZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdUaHUnKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdUaHVyc2RheSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF5T2ZXZWVrID09PSAnRnJpJykge1xuICAgICAgICBkYXlPZldlZWsgPSAnRnJpZGF5JztcbiAgICAgICAgfSBlbHNlIGlmIChkYXlPZldlZWsgPT09ICdTYXQnKSB7XG4gICAgICAgIGRheU9mV2VlayA9ICdTYXR1cmRheSc7XG4gICAgICAgIH0gZWxzZSBpZiAoZGF5T2ZXZWVrID09PSAnU3VuJykge1xuICAgICAgICBkYXlPZldlZWsgPSAnU3VuZGF5JztcbiAgICAgICAgfVxuICAgIH1cbiAgXG4gICAgLy8gcmV0dXJuIG9ubHkgdGhlIGRheSBvZiB3ZWVrXG4gICAgaWYgKGRhdGVGb3JtYXQgPT09ICdkYXknKSB7XG4gICAgICByZXR1cm4gZGF5T2ZXZWVrO1xuICAgIH1cbiAgXG4gICAgLy8gcmV0dXJuIGZ1bGwgZGF0ZSBzdHJpbmdcbiAgICByZXR1cm4gYCR7dGltZX0ke3RpbWVTdWZmaXh9LCAke2RheU9mV2Vla30sICR7ZGF5T2ZNb250aH0ke2RheVN1ZmZpeH0gJHttb250aH0gJyR7eWVhcn1gO1xuICB9XG5cbmV4cG9ydCB7XG4gICAgZ2V0TG9jYWxIb3VyLFxuICAgIGdldEhvdXJUb0Rpc3BsYXksXG4gICAgZm9ybWF0RGF0ZSAgICBcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBBUEkgZnJvbSAnLi9tb2R1bGVzL2FwaSc7XG5pbXBvcnQgKiBhcyBIZWxwZXIgZnJvbSAnLi9tb2R1bGVzL2hlbHBlcnMnO1xuaW1wb3J0ICogYXMgRE9NIGZyb20gJy4vbW9kdWxlcy9kb20nO1xuaW1wb3J0ICcuL21vZHVsZXMvZXZlbnRzJztcblxuaW1wb3J0ICcuL3N0eWxlcy9tYWluLnNjc3MnO1xuXG4vLyBzZXQgc29tZSBwbGFjZWhvbGRlciB2YWx1ZXMgZm9yIHdoZW4gdGhlIHBhZ2Vcbi8vIGxvYWRzIGZvciB0aGUgZmlyc3QgdGltZVxuZnVuY3Rpb24gZG9tSW5pdCgpe1xuICAgIERPTS5pbml0KCk7XG59XG5cbmRvbUluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==