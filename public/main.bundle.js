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

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<footer class=\"container\">\r\n    <p>&copy; Company 2017</p>\r\n</footer>\r\n<app-navbar></app-navbar>"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__vcfilter_pipe__ = __webpack_require__("../../../../../src/app/vcfilter.pipe.ts");
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
            __WEBPACK_IMPORTED_MODULE_8__components_vclist_vclist_component__["a" /* VclistComponent */],
            __WEBPACK_IMPORTED_MODULE_10__vcfilter_pipe__["a" /* VcfilterPipe */]
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

module.exports = "<main role=\"main\">\r\n  <div id=\"head\" class=\"jumbotron header-img\">\r\n    <div class=\"container cont-style\">\r\n      <h2 class=\"display-1 heading\">Virtual Boitech is the first online community for life science investors in Europe</h2>\r\n      <p style=\"margin-top:40px;\">\r\n        <a class=\"btn btn--border btn--primary btn--animated\" (click)=\"showModal=true;\" routerLink=\"/home\" role=\"button\">Join us &raquo;</a>\r\n      </p>\r\n\r\n      <div (click)=\"outsideClick($event);\" *ngIf=\"showModal\" class=\"modal\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-body\">\r\n            \r\n              <span (click)=\"showModal=false;\" class=\"closeBtn\">&times;</span>\r\n            <div class=\"row\">\r\n              <img class=\"overlay-buttons\" src=\"assets/images/ent.png\" style=\"width:300px;height:100px;\" alt=\"Join Us\">\r\n            </div>\r\n            <div class=\"row\">\r\n              <a class=\"btn btn--border btn--primary1 btn--animated1 overlay-buttons\" style=\"display:table-cell; vertical-align:middle; text-align:center\"\r\n                href=\"#\" role=\"button\">Join our investor community &raquo;</a>\r\n              <a class=\"btn btn--border btn--primary1 btn--animated1 overlay-buttons\" style=\"display:table-cell; vertical-align:middle; text-align:center\"\r\n                href=\"#\" role=\"button\">Submit your business plan &raquo;</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 description\">\r\n          <p class=\"box shadow\">VirtualBiotech is a non-commercial initiative managed by venture capital professionals with the aim to form a free\r\n            online community for life science investors in Europe.</p>\r\n        </div>\r\n        <div class=\"col-md-6 description\">\r\n          <p class=\"box shadow\">VirtualBiotech is NOT a fund raising platform. We solely enable scientists and life science enterpreneurs to introduce\r\n            their projects/companies to our community members.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <section id=\"section05\" class=\"col-md-12 text-center demo\">\r\n          <a class=\"scroll-button\" (click)=\"scrollDown()\">\r\n            <span></span>See how you can benefit from Virtual Biotech</a>\r\n        </section>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container cont-1\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 stake-holders\">\r\n          <h2>For life science investors:</h2>\r\n          <ul>\r\n            <li>Browse the listed investment opportunities and stay up to date with the life science startup scene in Europe</li>\r\n            <li>Download the available slide decks freely and anonymously and move any time to direct contact with the founders</li>\r\n            <li>Find out which projects are most popular in the community and have the choice to express your interest in any\r\n              listed project</li>\r\n            <li>By expressing interest, you will be introduced to other interested members to potentially share your due diligence\r\n              and build syndicates</li>\r\n          </ul>\r\n          <p>\r\n            <a class=\"btn btn--border btn--primary1 btn--animated1\" style=\"display:table-cell; vertical-align:middle; text-align:center\"\r\n              href=\"#\" role=\"button\">Join our investor community &raquo;</a>\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-6 stake-holders\">\r\n          <h2>For life science entrepreneurs:</h2>\r\n          <ul>\r\n            <li>Benefit from our community to reach more life science investors, pave the way for future contact or follow up\r\n              in a soft and indirect way</li>\r\n            <li>List your company or project simply and without any commitment to our platform</li>\r\n            <li>Your company will be added to our deal flow which will be sent to our community members of life science investors</li>\r\n            <li>The investors will be able to check your company profile, contact you directly and share their interest with\r\n              other investors</li>\r\n          </ul>\r\n          <p>\r\n            <a class=\"btn btn--border btn--primary1 btn--animated1\" style=\"display:table-cell; vertical-align:middle; text-align:center\"\r\n              href=\"#\" role=\"button\">Submit your business plan &raquo;</a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demo {\n  margin-top: 10px; }\n\n.demo a {\n  z-index: 2;\n  color: white;\n  font-size: 20px;\n  text-decoration: none;\n  transition: opacity .3s; }\n\n.demo a:hover {\n  opacity: .5; }\n\n#section05 a span {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  border-left: 1px solid white;\n  border-bottom: 1px solid white;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  -webkit-animation: sdb05 1.5s infinite;\n  animation: sdb05 1.5s infinite;\n  box-sizing: border-box; }\n\n@-webkit-keyframes sdb05 {\n  0% {\n    -webkit-transform: rotate(-45deg) translate(0, 0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\n    opacity: 0; } }\n\n@keyframes sdb05 {\n  0% {\n    -webkit-transform: rotate(-45deg) translate(0, 0);\n            transform: rotate(-45deg) translate(0, 0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\n            transform: rotate(-45deg) translate(-20px, 20px);\n    opacity: 0; } }\n\n.header-img {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/banner.jpg") + ");\n  background-size: cover;\n  height: auto;\n  border-radius: 0px; }\n\n.overlay-buttons {\n  margin: 15px auto; }\n\n.modal {\n  display: block;\n  position: fixed;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.modal-content {\n  background-color: #f4f4f4;\n  margin: 15% auto;\n  width: 70%;\n  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);\n  -webkit-animation-name: modalopen;\n          animation-name: modalopen;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s; }\n\n.modal-header h2,\n.modal-footer h3 {\n  margin: 0; }\n\n.modal-header {\n  padding: 15px;\n  color: #fff; }\n\n.modal-body {\n  padding: 10px 20px; }\n\n.closeBtn {\n  color: #e95420;\n  float: right;\n  font-size: 30px;\n  margin-right: -10px;\n  margin-top: -15px; }\n\n.closeBtn:hover,\n.closeBtn:focus {\n  color: #333333;\n  text-decoration: none;\n  cursor: pointer; }\n\n@-webkit-keyframes modalopen {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes modalopen {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.row {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.scroll-button {\n  cursor: pointer; }\n\n.cont-style {\n  color: white; }\n\n.cont-1 {\n  padding-top: 35px; }\n\n.description {\n  margin-top: 40px;\n  color: #333333; }\n\n.stake-holders {\n  color: #333333;\n  background: white;\n  font-size: 16px; }\n  .stake-holders h2 {\n    margin-top: 0; }\n\n.heading {\n  text-overflow: ellipsis;\n  color: white;\n  font-size: 40px; }\n\n.box {\n  background: white;\n  border-radius: 0.3rem;\n  padding: 15px;\n  font-size: 20px !important; }\n\n.shadow {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.btn {\n  position: relative;\n  display: inline-block;\n  letter-spacing: 1.2px;\n  padding: 12px 32px;\n  text-align: center;\n  text-transform: uppercase;\n  overflow: hidden;\n  z-index: 1;\n  cursor: pointer; }\n\n.btn:focus {\n  outline: none; }\n\n.btn--primary {\n  color: white; }\n\n.btn--primary1 {\n  color: #333333; }\n\n.btn--border {\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 10px;\n  box-sizing: border-box; }\n\n.btn--animated {\n  transition-property: color;\n  transition-duration: 0.5s; }\n\n.btn--animated.btn--border.btn--primary {\n  border: 1px solid white; }\n\n.btn--animated1.btn--border.btn--primary1 {\n  border: 1px solid #333333; }\n\n.btn--animated:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: white;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-out;\n  z-index: -1; }\n\n.btn--animated:hover {\n  color: #333333; }\n\n.btn--animated1:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #333333;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-out;\n  z-index: -1; }\n\n.btn--animated1:hover {\n  color: white; }\n\n.btn--animated:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66); }\n\n.btn--animated1:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66); }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem; }\n\n@media only screen and (max-width: 520px) {\n  .heading {\n    font-size: 30px; } }\n\n@media only screen and (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem; } }\n\n@media only screen and (max-width: 768px) {\n  .sh-styles {\n    margin-top: 0; }\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px; } }\n\n@media only screen and (max-width: 992px) {\n  .sh-styles {\n    width: 250px !important;\n    height: 200px !important;\n    margin-top: 20%; } }\n", ""]);

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
        this.showModal = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.scrollDown = function () {
        $('html,body').animate({
            scrollTop: $(".cont-1").offset().top
        }, 'slow');
    };
    HomeComponent.prototype.outsideClick = function (e) {
        if (e.target.className == "modal") {
            this.showModal = false;
        }
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

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/home\">\r\n        <img src=\"../assets/images/main-logo.png\"/>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/vc_list\">VC List</a>\r\n        </li>\r\n      </ul>\r\n      <!-- <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a class=\"ml-auto navbar-text\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n      </ul> -->\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-default {\n  background-color: #333333;\n  border-color: #333333; }\n\n.nav-item:first-child {\n  margin-left: 20px; }\n\n.nav-link {\n  min-height: 70px;\n  padding-top: 25px; }\n\n.navbar-brand {\n  padding: 0 5px 0 5px; }\n  .navbar-brand > img {\n    height: 65px; }\n\n.navbar {\n  margin-bottom: 0px;\n  border-radius: 0px; }\n\n/* change the brand and text color */\n.navbar-custom .navbar-brand,\n.navbar-custom .navbar-text {\n  color: #333333; }\n\n/* change the link color */\n.navbar-custom .navbar-nav .nav-link {\n  color: #333333; }\n\n/* change the color of active or hovered links */\n.navbar-custom .nav-item.active .nav-link,\n.navbar-custom .nav-item:hover .nav-link {\n  color: white; }\n\n#bs-example-navbar-collapse-1 > ul > li > a:hover {\n  background: #6b6b6b; }\n\n.navbar-text {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.navbar-default .navbar-nav > .active {\n  background: #6b6b6b; }\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  background: #6b6b6b; }\n", ""]);

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

module.exports = "<div class=\"col-md-12\">\r\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\r\n    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r\n    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n  </p>\r\n  <p>\r\n    <a class=\"btn btn--border btn--primary1 btn--animated1\" style=\"display:table-cell; vertical-align:middle; text-align:center\"\r\n      href=\"#\" role=\"button\">Submit your business plan &raquo;</a>\r\n  </p>\r\n</div>\r\n\r\n<form>\r\n  <div class=\"form-group\">\r\n    <div class=\"col-md-6\">\r\n      <label class=\"control-label\">Location</label>\r\n      <select class=\"form-control form-control-sm\" name=\"location\" [(ngModel)]=\"location\">\r\n        <option class=\"dropdown-content\" *ngFor=\"let location of country\">{{ location }}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label class=\"control-label\">Investment Focus</label>\r\n      <select class=\"form-control form-control-sm\" name=\"focus\" [(ngModel)]=\"foc\">\r\n        <option class=\"dropdown-content\" *ngFor=\"let foc of focus\">{{ foc }}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label class=\"control-label\">Prefered Indication</label>\r\n      <select class=\"form-control form-control-sm\" name=\"indication\" [(ngModel)]=\"indicat\">\r\n        <option class=\"dropdown-content\" *ngFor=\"let indicat of indication\">{{ indicat }}</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <label class=\"control-label\">Investment Stage</label>\r\n      <select class=\"form-control form-control-sm\" name=\"investment\" [(ngModel)]=\"invest\">\r\n        <option class=\"dropdown-content\" *ngFor=\"let invest of investment\">{{ invest }}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</form>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12\">\r\n    <h3 class=\"text-center\">Filtered Items({{ (vclists | vcfilter : location:foc:indicat:invest)?.length }})\r\n    </h3>\r\n  </div>\r\n</div>\r\n\r\n<div *ngFor=\"let vclist of vclists  | vcfilter : location:foc:indicat:invest; let l = count\" class=\"container list\">\r\n  <div [ngClass]=\"{'featured' : vclist.Featured  }\" class=\"row card\">\r\n    <div class=\"col-xs-3\">\r\n    <img class=\"sh-styles\" src=\"assets/images/company-logos/{{vclist['VC Name']}}.png\" (error)=\"this.error=null; updateUrl($event)\" alt=\"company logo\">\r\n    </div>\r\n    <div class=\"col-xs-6\">\r\n      <a class=\"no-underline\" href=\"{{vclist.Website}}\" target=\"_blank\">\r\n        <h3 class=\"text-center\">{{vclist['VC Name']}}</h3>\r\n      </a>\r\n    </div>\r\n    <div class=\"col-xs-3\">\r\n      <img class=\"feature-logo\" *ngIf=\"vclist.Featured\" src=\"../assets/images/feature1.png\">\r\n\r\n      <p class=\"website\">\r\n        <a class=\"website btn website-link\" href=\"{{vclist.Website}}\" role=\"button\" target=\"_blank\">visit website &raquo;</a>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  <div [ngClass]=\"{'featured' : vclist.Featured }\" class=\"row\">\r\n    <table class=\"table\">\r\n      <tr *ngIf=\"vclist['Investment Focus']\">\r\n        <td class=\"vr\">Investment Focus:</td>\r\n        <td>{{vclist['Investment Focus'].split(',').join(' |')}}</td>\r\n      </tr>\r\n      <tr *ngIf=\"vclist['Investment Stage']\">\r\n        <td class=\"vr\">Investment Stage:</td>\r\n        <td>{{vclist['Investment Stage'].split(',').join(' |')}}</td>\r\n      </tr>\r\n      <tr *ngIf=\"vclist.Research[' Industry Partner']\">\r\n        <td class=\"vr\">Research/Industry Partner:</td>\r\n        <td>{{vclist.Research[' Industry Partner'].split(',').join(' |')}}</td>\r\n      </tr>\r\n      <tr *ngIf=\"vclist.Location\">\r\n        <td class=\"vr\">Location:</td>\r\n        <td>{{vclist.Location}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/vclist/vclist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  color: blue; }\n\n.website-link {\n  color: white;\n  background: lightseagreen; }\n\n.table {\n  margin-bottom: 0px; }\n\n.sh-styles {\n  float: left;\n  margin: 15px 0;\n  max-height: 45px;\n  max-width: 180px; }\n\n.website {\n  float: right;\n  margin: 9px 0; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  border-top: none; }\n\n.no-underline {\n  text-decoration: none; }\n\n.card {\n  border-bottom: 1px solid #333333; }\n\n.field {\n  padding-top: 12px; }\n\n.vr {\n  border-right: 1px solid #333333;\n  width: 200px;\n  font-weight: bold; }\n\n.list {\n  background: #f5f5f5;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  box-shadow: rgba(0, 0, 0, 0.75) 10px 10px 23px -4px; }\n\n.btn {\n  height: 34px;\n  margin-right: 15px;\n  position: relative;\n  display: inline-block;\n  letter-spacing: 1.2px;\n  padding: 6px 6px;\n  text-align: center;\n  overflow: hidden;\n  z-index: 1;\n  cursor: pointer; }\n\n.btn:focus {\n  outline: none; }\n\n.btn--primary1 {\n  color: #333333; }\n\n.btn--border {\n  border-width: 1px;\n  border-style: solid;\n  border-radius: 10px;\n  box-sizing: border-box; }\n\n.btn--animated {\n  transition-property: color;\n  transition-duration: 0.5s; }\n\n.btn--animated1.btn--border.btn--primary1 {\n  border: 1px solid #333333; }\n\n.btn--animated:hover {\n  color: #333333; }\n\n.btn--animated1:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #333333;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: 0 50%;\n  transform-origin: 0 50%;\n  transition-property: -webkit-transform;\n  transition-property: transform;\n  transition-property: transform, -webkit-transform;\n  transition-duration: 0.5s;\n  transition-timing-function: ease-out;\n  z-index: -1; }\n\n.btn--animated1:hover {\n  color: white; }\n\n.btn--animated1:hover:before {\n  -webkit-transform: scaleX(1);\n  transform: scaleX(1);\n  transition-timing-function: cubic-bezier(0.45, 1.64, 0.47, 0.66); }\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.form-group {\n  min-height: 220px;\n  max-width: 750px;\n  margin: 20px auto; }\n\n.featured {\n  background: #7aff8d; }\n\n.feature-logo {\n  height: 30px;\n  margin: 19px 15px -5px 0;\n  float: right; }\n\n@media only screen and (max-width: 450px) {\n  .vr {\n    width: 100px; } }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vcfilter_pipe__ = __webpack_require__("../../../../../src/app/vcfilter.pipe.ts");
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
    function VclistComponent(vclistService, metaService) {
        var _this = this;
        this.vclistService = vclistService;
        this.metaService = metaService;
        this.vclists = [];
        this.country = [];
        this.focus = [];
        this.indication = [];
        this.investment = [];
        this.count = {};
        this.vclistService.getVclist().subscribe(function (data) {
            _this.vclists = data;
            var allowed = ['VC Name'];
            var vc_name = [];
            var locat = [];
            var focus = [];
            var indication = [];
            var investment = [];
            data.filter(function (val) {
                for (var key in val) {
                    if (key === 'VC Name') {
                        vc_name.push(val[key]); // val1 and etc...
                    }
                    else if (key === 'Location') {
                        locat.push(val[key].split(" ").splice(-1)[0]);
                    }
                    else if (key === 'Investment Focus') {
                        focus.push(val[key].split(','));
                    }
                    else if (key === 'Prefered Indication') {
                        indication.push(val[key].split(','));
                    }
                    else if (key === 'Investment Stage') {
                        investment.push(val[key].split(','));
                    }
                }
            });
            //filtering unique values from array
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
            }
            //country
            _this.country = locat.filter(onlyUnique).filter(Boolean);
            // Investment Focus
            focus = [].concat.apply([], focus);
            focus = focus.map(function (el) {
                return el.trim();
            });
            _this.focus = focus.filter(onlyUnique).filter(Boolean);
            //Prefered Indication
            indication = [].concat.apply([], indication);
            indication = indication.map(function (el) {
                return el.trim();
            });
            indication = indication.filter(onlyUnique);
            _this.indication = indication.filter(Boolean);
            //Investment Stage
            investment = [].concat.apply([], investment);
            investment = investment.map(function (el) {
                return el.trim();
            });
            investment = investment.filter(onlyUnique);
            _this.investment = investment.filter(Boolean);
            _this.country.unshift("");
            _this.focus.unshift("");
            _this.indication.unshift("");
            _this.investment.unshift("");
            // console.log(this.vclists);
            _this.metaService.addTags([
                { name: 'keywords', content: vc_name.toString() }
            ]);
        });
    }
    VclistComponent.prototype.ngOnInit = function () {
    };
    VclistComponent.prototype.updateUrl = function (event) {
        event.target.src = event.target.currentSrc.slice(0, -3) + 'png';
        return;
    };
    return VclistComponent;
}());
VclistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-vclist',
        template: __webpack_require__("../../../../../src/app/components/vclist/vclist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vclist/vclist.component.scss")]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__vcfilter_pipe__["a" /* VcfilterPipe */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vclist_service__["a" /* VclistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vclist_service__["a" /* VclistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Meta */]) === "function" && _b || Object])
], VclistComponent);

var _a, _b;
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

/***/ "../../../../../src/app/vcfilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VcfilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VcfilterPipe = (function () {
    function VcfilterPipe() {
    }
    VcfilterPipe.prototype.transform = function (items, location, focus, indication, investment) {
        if (items && items.length) {
            return items.filter(function (item) {
                if (location && item.Location.toLowerCase().indexOf(location.toLowerCase()) === -1) {
                    return false;
                }
                if (focus && item['Investment Focus'].toLowerCase().indexOf(focus.toString().toLowerCase()) === -1) {
                    return false;
                }
                if (indication && item['Prefered Indication'].toLowerCase().indexOf(indication.toLowerCase()) === -1) {
                    return false;
                }
                if (investment && item['Investment Stage'].toLowerCase().indexOf(investment.toLowerCase()) === -1) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    };
    return VcfilterPipe;
}());
VcfilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'vcfilter'
    })
], VcfilterPipe);

//# sourceMappingURL=vcfilter.pipe.js.map

/***/ }),

/***/ "../../../../../src/assets/images/banner.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner.6c9ab93e22965b2b2bf0.jpg";

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