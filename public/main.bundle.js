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

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_vclist_vclist_component__ = __webpack_require__("../../../../../src/app/components/vclist/vclist.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'vc_list',
        component: __WEBPACK_IMPORTED_MODULE_3__components_vclist_vclist_component__["a" /* VclistComponent */]
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
        providers: [],
        bootstrap: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_vclist_vclist_component__ = __webpack_require__("../../../../../src/app/components/vclist/vclist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_vclist_service__ = __webpack_require__("../../../../../src/app/services/vclist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_vclist_vclist_component__["a" /* VclistComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_vclist_service__["a" /* VclistService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\">\r\n  <div id=\"head\" class=\"jumbotron header-img\">\r\n    <div class=\"container cont-style\">\r\n      <h2 class=\"display-1 heading\">Virtual Boitech is the first online community for life science investors in Europe</h2>\r\n      <p style=\"margin-top:40px;\">\r\n        <a class=\"btn btn--border btn--primary btn--animated\" href=\"#\" role=\"button\">Join us &raquo;</a>\r\n      </p>\r\n\r\n      <!-- dna code -->\r\n      <div class='dna'>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n        <div class='protein'>\r\n          <b></b>\r\n          <b></b>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5 description\">\r\n          <p class=\"box shadow\">VirtualBiotech is a non-commercial initiative managed by venture capital professionals with the aim to form a free\r\n            online community for life science investors in Europe.</p>\r\n        </div>\r\n        <div class=\"col-md-5 description\">\r\n          <p class=\"box shadow\">VirtualBiotech is NOT a fund raising platform. We solely enable scientists and life science enterpreneurs to introduce\r\n            their projects/companies to our community members.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <section id=\"section05\" class=\"col-md-12 text-center demo\">\r\n          <a class=\"scroll-button\" (click)=\"scrollDown()\">\r\n            <span></span>See how you can benefit from Virtual Biotech</a>\r\n        </section>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container cont-1\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-7 stake-holders\">\r\n          <h2>For life science investors:</h2>\r\n          <ul>\r\n            <li>Browse the listed investment opportunities and stay up to date with the life science startup scene in Europe</li>\r\n            <li>Download the available slide decks freely and anonymously and move any time to direct contact with the founders</li>\r\n            <li>Find out which projects are most popular in the community and have the choice to express your interest in any\r\n              listed project</li>\r\n            <li>By expressing interest, you will be introduced to other interested members to potentially share your due diligence\r\n              and build syndicates</li>\r\n          </ul>\r\n          <p>\r\n            <a class=\"btn btn--border btn--primary1 btn--animated1\" style=\"display:table-cell; vertical-align:middle; text-align:center\"\r\n              href=\"#\" role=\"button\">Join our investor community &raquo;</a>\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-5\" style=\"display:table-cell; vertical-align:middle; text-align:center\">\r\n          <img class=\"sh-styles\" src=\"assets/images/investor.svg\" style=\"width:350px;height:250px;\" alt=\"investor\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top:100px;\">\r\n        <div class=\"col-md-5\" style=\"display:table-cell; vertical-align:middle; text-align:center\">\r\n          <img class=\"sh-styles\" src=\"assets/images/ent.svg\" style=\"width:350px;height:250px;\" alt=\"entrepreneurs\">\r\n        </div>\r\n        <div class=\"col-md-7 stake-holders\">\r\n          <h2>For life science entrepreneurs:</h2>\r\n          <ul>\r\n            <li>Benefit from our community to reach more life science investors, pave the way for future contact or follow up\r\n              in a soft and indirect way</li>\r\n            <li>List your company or project simply and without any commitment to our platform</li>\r\n            <li>Your company will be added to our deal flow which will be sent to our community members of life science investors</li>\r\n            <li>The investors will be able to check your company profile, contact you directly and share their interest with\r\n              other investors</li>\r\n          </ul>\r\n          <p>\r\n            <a class=\"btn btn--border btn--primary1 btn--animated1\" style=\"display:table-cell; vertical-align:middle; text-align:center\"\r\n              href=\"#\" role=\"button\">Submit your business plan &raquo;</a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demo {\n  margin-top: 10px; }\n\n.demo a {\n  z-index: 2;\n  color: white;\n  font-size: 20px;\n  text-decoration: none;\n  transition: opacity .3s; }\n\n.demo a:hover {\n  opacity: .5; }\n\n#section05 a span {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  border-left: 1px solid white;\n  border-bottom: 1px solid white;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  -webkit-animation: sdb05 1.5s infinite;\n  animation: sdb05 1.5s infinite;\n  box-sizing: border-box; }\n\n@-webkit-keyframes sdb05 {\n  0% {\n    -webkit-transform: rotate(-45deg) translate(0, 0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\n    opacity: 0; } }\n\n@keyframes sdb05 {\n  0% {\n    -webkit-transform: rotate(-45deg) translate(0, 0);\n            transform: rotate(-45deg) translate(0, 0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\n            transform: rotate(-45deg) translate(-20px, 20px);\n    opacity: 0; } }\n\n.dna {\n  width: 13em;\n  margin-top: -28%;\n  float: right;\n  padding: 1em;\n  -webkit-perspective: 60em;\n          perspective: 60em;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-transform: translate3d(0, 0, 0) rotateY(40deg);\n          transform: translate3d(0, 0, 0) rotateY(40deg); }\n\n.dna .protein {\n  margin: 0 1em 1em;\n  width: 7em;\n  height: 0.8em;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  -webkit-animation: rot 2s linear infinite;\n          animation: rot 2s linear infinite;\n  position: relative; }\n\n.dna .protein:nth-of-type(20) {\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  background: linear-gradient(to right, #2980b9 50%, #f1c40f 50%); }\n\n.dna .protein:nth-of-type(19) {\n  -webkit-animation-delay: 1.9s;\n          animation-delay: 1.9s;\n  background: linear-gradient(to right, #e67e22 50%, #2ecc71 50%); }\n\n.dna .protein:nth-of-type(18) {\n  -webkit-animation-delay: 1.8s;\n          animation-delay: 1.8s;\n  background: linear-gradient(to right, #2ecc71 50%, #f1c40f 50%); }\n\n.dna .protein:nth-of-type(17) {\n  -webkit-animation-delay: 1.7s;\n          animation-delay: 1.7s;\n  background: linear-gradient(to right, #e67e22 50%, #2980b9 50%); }\n\n.dna .protein:nth-of-type(16) {\n  -webkit-animation-delay: 1.6s;\n          animation-delay: 1.6s;\n  background: linear-gradient(to right, #2ecc71 50%, #2980b9 50%); }\n\n.dna .protein:nth-of-type(15) {\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n  background: linear-gradient(to right, #2980b9 50%, #2980b9 50%); }\n\n.dna .protein:nth-of-type(14) {\n  -webkit-animation-delay: 1.4s;\n          animation-delay: 1.4s;\n  background: linear-gradient(to right, #2ecc71 50%, #f1c40f 50%); }\n\n.dna .protein:nth-of-type(13) {\n  -webkit-animation-delay: 1.3s;\n          animation-delay: 1.3s;\n  background: linear-gradient(to right, #2ecc71 50%, #e67e22 50%); }\n\n.dna .protein:nth-of-type(12) {\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n  background: linear-gradient(to right, #f1c40f 50%, #2ecc71 50%); }\n\n.dna .protein:nth-of-type(11) {\n  -webkit-animation-delay: 1.1s;\n          animation-delay: 1.1s;\n  background: linear-gradient(to right, #2980b9 50%, #2ecc71 50%); }\n\n.dna .protein:nth-of-type(10) {\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n  background: linear-gradient(to right, #2ecc71 50%, #e67e22 50%); }\n\n.dna .protein:nth-of-type(9) {\n  -webkit-animation-delay: 0.9s;\n          animation-delay: 0.9s;\n  background: linear-gradient(to right, #e67e22 50%, #f1c40f 50%); }\n\n.dna .protein:nth-of-type(8) {\n  -webkit-animation-delay: 0.8s;\n          animation-delay: 0.8s;\n  background: linear-gradient(to right, #f1c40f 50%, #e67e22 50%); }\n\n.dna .protein:nth-of-type(7) {\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s;\n  background: linear-gradient(to right, #2ecc71 50%, #f1c40f 50%); }\n\n.dna .protein:nth-of-type(6) {\n  -webkit-animation-delay: 0.6s;\n          animation-delay: 0.6s;\n  background: linear-gradient(to right, #2980b9 50%, #f1c40f 50%); }\n\n.dna .protein:nth-of-type(5) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  background: linear-gradient(to right, #f1c40f 50%, #f1c40f 50%); }\n\n.dna .protein:nth-of-type(4) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n  background: linear-gradient(to right, #e67e22 50%, #2ecc71 50%); }\n\n.dna .protein:nth-of-type(3) {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n  background: linear-gradient(to right, #2ecc71 50%, #2ecc71 50%); }\n\n.dna .protein:nth-of-type(2) {\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s;\n  background: linear-gradient(to right, #2ecc71 50%, #e67e22 50%); }\n\n.dna .protein:nth-of-type(1) {\n  -webkit-animation-delay: 0.1s;\n          animation-delay: 0.1s;\n  background: linear-gradient(to right, #2980b9 50%, #e67e22 50%); }\n\n.dna .protein b {\n  width: 0.8em;\n  height: 2.8em;\n  background: #ff0500;\n  -webkit-transform-origin: 0 center;\n          transform-origin: 0 center;\n  -webkit-transform: rotateX(-40deg);\n          transform: rotateX(-40deg);\n  position: absolute;\n  top: 0;\n  left: -1em; }\n\n.dna .protein b:nth-of-type(2) {\n  -webkit-transform: rotateX(40deg);\n          transform: rotateX(40deg);\n  left: auto;\n  right: -1em;\n  background-color: #3498db; }\n\n.dna .protein:last-child b {\n  display: none; }\n\n@-webkit-keyframes rot {\n  from {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg); }\n  to {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg); } }\n\n@keyframes rot {\n  from {\n    -webkit-transform: rotateY(0deg);\n            transform: rotateY(0deg); }\n  to {\n    -webkit-transform: rotateY(360deg);\n            transform: rotateY(360deg); } }\n\nhtml,\nbody {\n  height: 100%; }\n\n@media only screen and (max-width: 992px) {\n  .dna {\n    margin-top: -18%; } }\n\n@media only screen and (max-width: 520px) {\n  .dna {\n    display: none; } }\n\n@media only screen and (min-width: 1200px) {\n  .dna {\n    margin-top: -24.8%; } }\n\n.header-img {\n  background: #e95420;\n  background-repeat: no-repeat;\n  height: auto;\n  border-radius: 0px; }\n\n.row {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.scroll-button {\n  cursor: pointer; }\n\n.cont-style {\n  color: white; }\n\n.cont-1 {\n  padding-top: 35px; }\n\n.description {\n  margin-top: 40px;\n  color: #155724; }\n\n.stake-holders {\n  color: #155724;\n  background: white; }\n  .stake-holders h2 {\n    margin-top: 0; }\n\n.heading {\n  text-overflow: ellipsis;\n  max-width: 762px;\n  color: white;\n  font-size: 40px; }\n\n.box {\n  background: white;\n  border-radius: 0.3rem;\n  padding: 15px;\n  font-size: 15px !important; }\n\n.shadow {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.btn {\n  position: relative;\n  display: inline-block;\n  letter-spacing: 1.2px;\n  padding: 12px 32px;\n  text-align: center;\n  text-transform: uppercase;\n  overflow: hidden;\n  z-index: 1;\n  cursor: pointer; }\n\n.btn:focus {\n  outline: none; }\n\n.btn--primary {\n  color: white; }\n\n.btn--primary1 {\n  color: #155724; }\n\n.btn--border {\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 10px;\n  box-sizing: border-box; }\n\n.btn--animated {\n  transition-property: color;\n  transition-duration: 0.5s; }\n\n.btn--animated.btn--border.btn--primary {\n  border: 1px solid white; }\n\n.btn--animated1.btn--border.btn--primary1 {\n  border: 1px solid #155724; }\n\n.btn--animated:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: white;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-out;\n  z-index: -1; }\n\n.btn--animated:hover {\n  color: #155724; }\n\n.btn--animated1:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #155724;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-out;\n  z-index: -1; }\n\n.btn--animated1:hover {\n  color: white; }\n\n.btn--animated:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66); }\n\n.btn--animated1:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66); }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem; }\n\n@media only screen and (max-width: 520px) {\n  .heading {\n    font-size: 30px; } }\n\n@media only screen and (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem; } }\n\n@media only screen and (max-width: 768px) {\n  .sh-styles {\n    margin-top: 0; }\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px; } }\n\n@media only screen and (max-width: 992px) {\n  .sh-styles {\n    width: 250px !important;\n    height: 200px !important;\n    margin-top: 20%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (window.innerWidth > 1000 && window.innerWidth < 2000) {
            document.getElementById("head").style.height = window.innerHeight - 51 + 'px';
        }
    };
    HomeComponent.prototype.scrollDown = function () {
        $('html,body').animate({
            scrollTop: $(".cont-1").offset().top
        }, 'slow');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">Virtual Biotech</a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/vc_list\">VC List</a>\r\n        </li>\r\n      </ul>\r\n      <!-- <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a class=\"ml-auto navbar-text\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n      </ul> -->\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-default {\n  background-color: #c34113; }\n\n.navbar {\n  margin-bottom: 0px;\n  border-radius: 0px; }\n\n/* change the brand and text color */\n.navbar-custom .navbar-brand,\n.navbar-custom .navbar-text {\n  color: #155724; }\n\n/* change the link color */\n.navbar-custom .navbar-nav .nav-link {\n  color: #155724; }\n\n/* change the color of active or hovered links */\n.navbar-custom .nav-item.active .nav-link,\n.navbar-custom .nav-item:hover .nav-link {\n  color: white; }\n\n.navbar-text {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.navbar-default .navbar-nav > .active {\n  background: #ac3911; }\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  background: #ac3911; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vclist/vclist.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let vclist of vclists\" class=\"container list\">\r\n  <div class=\"row card\">\r\n    <div class=\"col-xs-3\">\r\n        <img class=\"sh-styles\" src=\"assets/images/logo.ico\" alt=\"company logo\">\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <a class=\"no-underline\" href=\"{{vclist.Website}}\"><h3 class=\"text-center\">{{vclist['VC Name']}}</h3></a>\r\n    </div>\r\n    <div class=\"col-xs-3\">\r\n      <p class=\"website\">\r\n        <a class=\"website btn btn-primary\" href=\"{{vclist.Website}}\" role=\"button\">visit website &raquo;</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <table class=\"table\">\r\n      <tr *ngIf=\"vclist['Investment Focus']\">\r\n        <td class=\"vr\">Investment Focus:</td>\r\n        <td>{{vclist['Investment Focus'].split(',').join(' |')}}</td>\r\n      </tr>\r\n      <tr *ngIf=\"vclist['Investment Stage']\">\r\n        <td class=\"vr\">Investment Stage:</td>\r\n        <td>{{vclist['Investment Stage'].split(',').join(' |')}}</td>\r\n      </tr>\r\n      <tr *ngIf=\"vclist.Research[' Industry Partner']\">\r\n        <td class=\"vr\">Research/Industry Partner:</td>\r\n        <td>{{vclist.Research[' Industry Partner'].split(',').join(' |')}}</td>\r\n      </tr>\r\n      <tr *ngIf=\"vclist.Location\">\r\n        <td class=\"vr\">Location:</td>\r\n        <td>{{vclist.Location.split(',').join(' |')}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/vclist/vclist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\n  margin-bottom: 0px; }\n\n.sh-styles {\n  float: left;\n  margin: 15px 0; }\n\n.website {\n  float: right;\n  margin: 9px 0; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  border-top: none; }\n\n.no-underline {\n  text-decoration: none; }\n\n.card {\n  border-bottom: 1px solid #155724; }\n\n.field {\n  padding-top: 12px; }\n\n.vr {\n  border-right: 1px solid #155724;\n  width: 200px; }\n\n.list {\n  background: #f5f5f5;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  box-shadow: rgba(0, 0, 0, 0.75) 10px 10px 23px -4px; }\n\n.btn {\n  height: 34px;\n  margin-right: 15px;\n  position: relative;\n  display: inline-block;\n  letter-spacing: 1.2px;\n  padding: 6px 6px;\n  text-align: center;\n  overflow: hidden;\n  z-index: 1;\n  cursor: pointer; }\n\n.btn:focus {\n  outline: none; }\n\n.btn--primary1 {\n  color: #155724; }\n\n.btn--border {\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 10px;\n  box-sizing: border-box; }\n\n.btn--animated {\n  transition-property: color;\n  transition-duration: 0.5s; }\n\n.btn--animated1.btn--border.btn--primary1 {\n  border: 1px solid #155724; }\n\n.btn--animated:hover {\n  color: #155724; }\n\n.btn--animated1:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #155724;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-out;\n  z-index: -1; }\n\n.btn--animated1:hover {\n  color: white; }\n\n.btn--animated1:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66); }\n\n@media only screen and (max-width: 450px) {\n  .vr {\n    width: 100px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vclist/vclist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VclistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_vclist_service__ = __webpack_require__("../../../../../src/app/services/vclist.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VclistComponent = (function () {
    function VclistComponent(vclistService) {
        this.vclistService = vclistService;
        this.vclists = [];
    }
    VclistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vclistService.getVclist().subscribe(function (data) {
            _this.vclists = data;
        });
    };
    return VclistComponent;
}());
VclistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-vclist',
        template: __webpack_require__("../../../../../src/app/components/vclist/vclist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vclist/vclist.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vclist_service__["a" /* VclistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vclist_service__["a" /* VclistService */]) === "function" && _a || Object])
], VclistComponent);

var _a;
//# sourceMappingURL=vclist.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/vclist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VclistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VclistService = (function () {
    function VclistService(http) {
        this.http = http;
    }
    VclistService.prototype.getVclist = function () {
        return this.http.get("../assets/csv.json")
            .map(function (res) { return res.json(); });
    };
    return VclistService;
}());
VclistService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], VclistService);

var _a;
//# sourceMappingURL=vclist.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
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