webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/WindowRef.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the native window obj
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], WindowRef);

//# sourceMappingURL=WindowRef.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<app-nav></app-nav>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navComponent_navComponent_component__ = __webpack_require__("../../../../../src/app/navComponent/navComponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__WindowRef__ = __webpack_require__("../../../../../src/app/WindowRef.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_capsFirstLetter_pipe__ = __webpack_require__("../../../../../src/app/pipes/capsFirstLetter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import the WindowRef provider


/*Bootstrap*/

var AppModule = (function () {
    function AppModule(winRef) {
        this.winRef = winRef;
        console.log('Window Variable' + window["browser"]);
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__navComponent_navComponent_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_7__pipes_capsFirstLetter_pipe__["a" /* CapsFirstLetter */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_8_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_device_detector__["a" /* Ng2DeviceDetectorModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* CommonModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__WindowRef__["a" /* WindowRef */], __WEBPACK_IMPORTED_MODULE_7__pipes_capsFirstLetter_pipe__["a" /* CapsFirstLetter */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__WindowRef__["a" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__WindowRef__["a" /* WindowRef */]) === "function" && _a || Object])
], AppModule);

var _a;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/navComponent/navComponent.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".boxes{\r\n    \r\n        \r\n        font-weight: bold;\r\n        height:200px;\r\n        color: grey;\r\n        text-align: center;\r\n        position: relative;\r\n        border: 10px solid white;\r\n        padding:20px;\r\n       /* background: rgb(209, 209, 209);  For browsers that do not support gradients */\r\n        background: rgb(209, 209, 209); /* For browsers that do not support gradients */ /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\r\n        background: linear-gradient(to top,#D1D1D1, white); /* Standard syntax */\r\n    }\r\n    \r\n    h1{\r\n      color:#003A6F;\r\n    }\r\n    \r\n    .inputTxt{\r\n    \r\n     padding:5px;\r\n      color:grey; \r\n      width:300px;\r\n      font-size:13px;\r\n      font-weight: bold;\r\n    }\r\n    \r\n    .inputBtn{\r\n      padding:5px;\r\n      color:grey; \r\n      width:100px;\r\n      font-size:13px;\r\n      font-weight: bold;\r\n    }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navComponent/navComponent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <div class=\"row\">\r\n                <div class=\"col-sm\">\r\n                        <a href=\"http://www.systemdata.in\" alt=\"System Data\"><img src=\"./assets/sd_logo.png\" class=\"img-fluid\" alt=\"system data logo\"></a>\r\n                </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"margin-top:60px;\">\r\n                <div class=\"col-sm boxes\">\r\n                        Your Web Browser\r\n                        <h1>{{this.device.browser | capsFirstLetter}}<br>{{this.device.browser_version | capsFirstLetter}}</h1>\r\n                </div>\r\n                <div class=\"col-sm boxes\">\r\n                        Browser Connection\r\n                        <h1>{{this.onLine | capsFirstLetter}}</h1>\r\n                </div>\r\n                <div class=\"col-sm boxes\">\r\n                        Your Operating System\r\n                        <h1>{{this.device.os | capsFirstLetter}}<br>{{this.device.os_version | capsFirstLetter}}</h1>\r\n                </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"margin-top:40px;\">\r\n                <div class=\"col-sm boxes\">\r\n                       Language\r\n                        <h1>{{this.lang}}</h1>\r\n                </div>\r\n                <div class=\"col-sm boxes\">\r\n                        OS Platform\r\n                        <h1>{{this.OSplatform | capsFirstLetter}}</h1>\r\n                </div>\r\n                <div class=\"col-sm boxes\">\r\n                        Browser Code name\r\n                        <h1>{{this.appCodeName | capsFirstLetter}}</h1>\r\n                </div>\r\n\r\n        </div>\r\n        <div class=\"row\" style=\"margin-top:40px;\">\r\n                <div class=\"col-sm boxes\">\r\n                        Javascript\r\n                        <h1>{{this.device.javascript | capsFirstLetter}}</h1>\r\n                </div>\r\n                <div class=\"col-sm boxes\">\r\n                        Cookies\r\n                        <h1>{{this.cookieEnabled | capsFirstLetter}}</h1>\r\n                </div>\r\n                <div class=\"col-sm boxes\">\r\n                        Max touch points on the device\r\n                        <h1>{{this.maxTouchPoints}}</h1>\r\n                </div>\r\n\r\n        </div>\r\n        <!-- Email form -->\r\n        <!--<div class=\"row\" style=\"margin-top:10px;\">\r\n                <p style=\"float:right;font-weight: bold;color:white;padding:9px; background-color: #003A6F;\">\r\n                        <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Your name\" class=\"inputTxt\">\r\n                        <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Your Email \" class=\"inputTxt\">\r\n                        <input type=\"text\" name=\"remail\" id=\"remail\" placeholder=\"Receipient Email \" class=\"inputTxt\">\r\n                        <input type=\"button\" name=\"submit\" id=\"submit\"   class=\"inputBtn\" value=\"Send details\">\r\n                </p>\r\n        </div>-->\r\n        <div class=\"row\">\r\n                <p style=\"float:right;font-weight: bold;color:white;padding:9px; background-color: grey;\">Email for queries or any other information which you feel should be included in the about displayed\r\n                        information, please email to > contact@systemdata.in</p>\r\n        </div>\r\n        <div class=\"row\" style=\"float:right;\">\r\n                        <p style=\"float:right;font-weight: bold;color:grey;padding:9px;font-size:11px;\">Crafted by <a href=\"http://www.whizlab.in\" target=\"_blank\">Whizlab</a></p>\r\n                </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/navComponent/navComponent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_device_detector__ = __webpack_require__("../../../../ng2-device-detector/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = (function () {
    function NavComponent(deviceService) {
        this.deviceService = deviceService;
        this.device = null;
        this.jsBool = false;
        this.cookieEnabled = navigator.cookieEnabled ? "enabled" : "disabled";
        this.onLine = navigator.onLine ? "Online!" : "Offline";
        this.lang = navigator.language;
        this.OSplatform = navigator.platform;
        this.maxTouchPoints = navigator.maxTouchPoints;
        this.appCodeName = navigator.appCodeName;
        this.device = deviceService.getDeviceInfo();
        if (this.device) {
            this.jsBool = true;
        }
        this.device.javascript = null;
        console.log("jsBool : " + this.jsBool);
        if (this.jsBool) {
            this.device.javascript = "enabled";
        }
    }
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/navComponent/navComponent.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navComponent/navComponent.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_device_detector__["b" /* Ng2DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng2_device_detector__["b" /* Ng2DeviceService */]) === "function" && _a || Object])
], NavComponent);

var _a;
//# sourceMappingURL=navComponent.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/capsFirstLetter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapsFirstLetter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
 * Usage:
 *  value | capsFirstLetter
 * Example:
 *  // value.name = daniel
 *  {{ value.name | capsFirstLetter  }}
 *  fromats to: Daniel
*/
var CapsFirstLetter = (function () {
    function CapsFirstLetter() {
    }
    CapsFirstLetter.prototype.transform = function (value, args) {
        if (value === null)
            return 'Not assigned';
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    };
    return CapsFirstLetter;
}());
CapsFirstLetter = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
        name: 'capsFirstLetter'
    })
], CapsFirstLetter);

//# sourceMappingURL=capsFirstLetter.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map