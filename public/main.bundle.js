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

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<footer class=\"container\">\r\n    <p class=\"text-center\"><img src=\"../assets/images/main-logo.png\" width=\"200px\" height=\"75px\"/></p>\r\n    <p class=\"text-center\">&copy; VirtualBiotech 2017. All rights reserved</p>\r\n</footer>"

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

module.exports = "<main role=\"main\" class=\"body-style\">\r\n  <div id=\"head\" class=\"jumbotron header-img\">\r\n    <div class=\"container cont-style\">\r\n      <h2 class=\"display-1 heading\">Virtual Boitech is the first online community for life science investors in Europe</h2>\r\n       <p class=\"small-heading\">VirtualBiotech is a non-commercial initiative managed by venture capital professionals with the aim\r\n      to form a free online community for life science investors in Europe.</p>\r\n      <div class=\"row banner-btns\">\r\n        <a class=\"btn btn-primary overlay-buttons\" style=\"display:table-cell; vertical-align:middle; text-align:center\"\r\n          href=\"#\" role=\"button\">Join our investor community &raquo;</a>\r\n        <a class=\"btn btn-primary overlay-buttons\" style=\"display:table-cell; vertical-align:middle; text-align:center\"\r\n          href=\"#\" role=\"button\">Submit your business plan &raquo;</a>\r\n      </div>\r\n      <div class=\"row\">\r\n        <section id=\"section05\" class=\"col-md-12 text-center demo\">\r\n          <a class=\"scroll-button\" (click)=\"scrollDown()\">\r\n            <span></span>See how you can benefit from Virtual Biotech</a>\r\n        </section>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container cont-1\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5 stake-holders\">\r\n          <h2 class=\"point-head\">For life science investors:</h2>\r\n          <ul>\r\n            <li class=\"points\">Browse the listed investment opportunities and stay up to date with the life science startup scene in Europe</li>\r\n            <li class=\"points\">Download the available slide decks freely and anonymously and move any time to direct contact with the founders</li>\r\n            <li class=\"points\">Find out which projects are most popular in the community and have the choice to express your interest in any\r\n              listed project</li>\r\n            <li class=\"points\">By expressing interest, you will be introduced to other interested members to potentially share your due diligence\r\n              and build syndicates</li>\r\n          </ul>\r\n          <div class=\"col-md-12 text-center sh-btn\">\r\n            <a class=\"btn btn-primary point-btn\" href=\"#\" role=\"button\">Join our investor community &raquo;</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-5 col-md-offset-2 stake-holders\">\r\n          <h2 class=\"point-head\">For life science entrepreneurs:</h2>\r\n          <ul>\r\n            <li class=\"points\">Benefit from our community to reach more life science investors, pave the way for future contact or follow up\r\n              in a soft and indirect way</li>\r\n            <li class=\"points\">List your company or project simply and without any commitment to our platform</li>\r\n            <li class=\"points\">Your company will be added to our deal flow which will be sent to our community members of life science investors</li>\r\n            <li class=\"points\">The investors will be able to check your company profile, contact you directly and share their interest with\r\n              other investors</li>\r\n          </ul>\r\n          <div class=\"col-md-12 text-center sh-btn\">\r\n            <a class=\"btn btn-primary point-btn\" href=\"#\" role=\"button\">Submit your business plan &raquo;</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".demo {\n  margin-top: 10px; }\n\n.demo a {\n  z-index: 2;\n  color: white;\n  font-size: 20px;\n  text-decoration: none;\n  transition: opacity .3s; }\n\n.demo a:hover {\n  opacity: .5; }\n\n#section05 a span {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  border-left: 1px solid white;\n  border-bottom: 1px solid white;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  -webkit-animation: sdb05 1.5s infinite;\n  animation: sdb05 1.5s infinite;\n  box-sizing: border-box; }\n\n@-webkit-keyframes sdb05 {\n  0% {\n    -webkit-transform: rotate(-45deg) translate(0, 0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\n    opacity: 0; } }\n\n@keyframes sdb05 {\n  0% {\n    -webkit-transform: rotate(-45deg) translate(0, 0);\n            transform: rotate(-45deg) translate(0, 0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\n            transform: rotate(-45deg) translate(-20px, 20px);\n    opacity: 0; } }\n\n.body-style {\n  background: #f5f5f5; }\n\n.point-head {\n  margin-bottom: 20px; }\n\n.points {\n  margin-bottom: 10px; }\n\n.point-btn {\n  margin-top: 10px; }\n\n.header-img {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/banner.jpg") + ");\n  background-size: cover;\n  background-position: center;\n  height: auto;\n  border-radius: 0px; }\n\n.banner-btns {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.small-heading {\n  font-size: 20px; }\n\n.sh-btn {\n  margin-top: 10px; }\n\nul {\n  margin-bottom: 0px;\n  margin-left: -39px; }\n\n.overlay-buttons {\n  margin: 15px auto; }\n\n.modal {\n  display: block;\n  position: fixed;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.modal-content {\n  background-color: #f4f4f4;\n  margin: 15% auto;\n  width: 70%;\n  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);\n  -webkit-animation-name: modalopen;\n          animation-name: modalopen;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s; }\n\n.modal-header h2,\n.modal-footer h3 {\n  margin: 0; }\n\n.modal-header {\n  padding: 15px;\n  color: #fff; }\n\n.modal-body {\n  padding: 10px 20px; }\n\n.closeBtn {\n  color: #e95420;\n  float: right;\n  font-size: 30px;\n  margin-right: -10px;\n  margin-top: -15px; }\n\n.closeBtn:hover,\n.closeBtn:focus {\n  color: #333333;\n  text-decoration: none;\n  cursor: pointer; }\n\n@-webkit-keyframes modalopen {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes modalopen {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.row {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.scroll-button {\n  cursor: pointer; }\n\n.cont-style {\n  color: white; }\n\n.cont-1 {\n  padding-top: 35px; }\n\n.description {\n  margin-top: 40px;\n  color: #333333; }\n\n.stake-holders {\n  color: #333333;\n  font-size: 18px; }\n  .stake-holders h2 {\n    margin-top: 0; }\n\n.heading {\n  text-overflow: ellipsis;\n  color: white;\n  font-size: 40px; }\n\n.box {\n  background: white;\n  border-radius: 0.3rem;\n  padding: 15px;\n  font-size: 20px !important; }\n\n.shadow {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.btn {\n  position: relative;\n  display: inline-block;\n  letter-spacing: 1.2px;\n  padding: 12px 32px;\n  text-align: center;\n  text-transform: uppercase;\n  overflow: hidden;\n  z-index: 1;\n  cursor: pointer; }\n\n.btn:focus {\n  outline: none; }\n\n.btn-primary {\n  background: #7AACD6;\n  border-color: #9EC5E6; }\n\n.btn-primary:hover {\n  background: #3a5c97; }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem; }\n\n@media only screen and (max-width: 520px) {\n  .heading {\n    font-size: 30px; } }\n\n@media only screen and (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem; } }\n\n@media only screen and (max-width: 768px) {\n  .sh-styles {\n    margin-top: 0; }\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px; } }\n\n@media only screen and (max-width: 992px) {\n  .sh-styles {\n    width: 250px !important;\n    height: 200px !important;\n    margin-top: 20%; }\n  .stake-holders {\n    margin-bottom: 50px; } }\n", ""]);

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

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/home\">\r\n        <img src=\"../assets/images/main-logo.png\"/>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/vc_list\">VC List</a>\r\n        </li>\r\n      </ul>\r\n      <!-- <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a class=\"ml-auto navbar-text\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n      </ul> -->\r\n    </div>\r\n  </div>\r\n  <hr>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover {\n  background: white; }\n\na:focus {\n  background: white; }\n\n.navbar-default {\n  background-color: white;\n  border-color: white; }\n\n.navbar-nav > li > a {\n  color: darkblue;\n  font-size: 21px; }\n\n.navbar-nav > li > a:hover {\n  background: white; }\n\n.navbar-right {\n  margin-top: 77px; }\n\nhr {\n  margin-bottom: 0px;\n  margin-top: 0px; }\n\n.navbar-brand {\n  padding: 10px 5px 0 30px; }\n  .navbar-brand > img {\n    height: 100px; }\n\n.navbar {\n  margin-bottom: 0px;\n  border-radius: 0px; }\n\n.navbar-toggle {\n  border-color: cornflowerblue;\n  background-color: white; }\n  .navbar-toggle .icon-bar {\n    background-color: cornflowerblue; }\n\n.navbar-collapse {\n  border-color: cornflowerblue; }\n\n.navbar-toggle:focus {\n  background-color: white; }\n\n.navbar-toggle:hover {\n  background: #3a5c97; }\n\n/* change the brand and text color */\n.navbar-custom .navbar-brand,\n.navbar-custom .navbar-text {\n  color: #333333; }\n\n/* change the link color */\n.navbar-custom .navbar-nav .nav-link {\n  color: #333333; }\n\n/* change the color of active or hovered links */\n.navbar-custom .nav-item.active .nav-link,\n.navbar-custom .nav-item:hover .nav-link {\n  color: white; }\n\n#bs-example-navbar-collapse-1 > ul > li > a:hover {\n  color: #3C85C5; }\n\n.navbar-text {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.navbar-default .navbar-nav > .active {\n  background: white;\n  color: #3C85C5; }\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  background: white;\n  color: #3C85C5; }\n\n@media only screen and (max-width: 768px) {\n  .navbar-brand {\n    padding: 0 5px 0 5px; }\n    .navbar-brand > img {\n      height: 45px; }\n  .navbar-right {\n    margin-top: 0px; } }\n", ""]);

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

module.exports = "<div class=\"col-md-12 header-img\">\r\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\r\n    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r\n    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n  </p>\r\n  <p class=\"text-center\" style=\"margin-top:30px;\">\r\n    <a class=\"btn btn-primary\" href=\"#\" role=\"button\">Join our investor community &raquo;</a>\r\n    <a class=\"btn btn-primary resp-btn\" href=\"#\" role=\"button\">Submit your business plan &raquo;</a>\r\n  </p>\r\n</div>\r\n\r\n<div class=\"row body-style\">\r\n  <form class=\"col-md-3\">\r\n    <div class=\"form-group sticky\">\r\n      <div class=\"multiselect col-md-12 filter\">\r\n        <div class=\"selectBox\" (click)=\"showCheckboxes('location')\">\r\n          <select>\r\n            <option>Location</option>\r\n          </select>\r\n          <div class=\"overSelect\"></div>\r\n        </div>\r\n        <div id=\"locationCheckboxes\">\r\n          <label *ngFor=\"let location of country\">\r\n            <input type=\"checkbox\" name=\"locati\" (click)=\"filterList(location, 'locati') \" />{{ location==''?'Location':location }}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"multiselect col-md-12 filter\">\r\n        <div class=\"selectBox\" (click)=\"showCheckboxes('focus')\">\r\n          <select>\r\n            <option>Investment Focus</option>\r\n          </select>\r\n          <div class=\"overSelect\"></div>\r\n        </div>\r\n        <div id=\"focusCheckboxes\">\r\n          <label *ngFor=\"let foc of focus\">\r\n            <input type=\"checkbox\" name=\"focu\" (click)=\"filterList(foc, 'focu') \" />{{ foc==''?'Investment Focus':foc }}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"multiselect col-md-12 filter\">\r\n        <div class=\"selectBox\" (click)=\"showCheckboxes('indication')\">\r\n          <select>\r\n            <option>Prefered Indication</option>\r\n          </select>\r\n          <div class=\"overSelect\"></div>\r\n        </div>\r\n        <div id=\"indicationCheckboxes\">\r\n          <label *ngFor=\"let indicat of indication\">\r\n            <input type=\"checkbox\" name=\"indica\" (click)=\"filterList(indicat, 'indica') \" />{{ indicat==''?'Prefered Indication':indicat }}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"multiselect col-md-12 filter\">\r\n        <div class=\"selectBox\" (click)=\"showCheckboxes('investment')\">\r\n          <select>\r\n            <option>Investment Stage</option>\r\n          </select>\r\n          <div class=\"overSelect\"></div>\r\n        </div>\r\n        <div id=\"investmentCheckboxes\">\r\n          <label *ngFor=\"let invest of investment\">\r\n            <input type=\"checkbox\" name=\"inves\" (click)=\"filterList(invest, 'inves') \" />{{ invest==''?'Investment Stage':invest }}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 filter-label\">\r\n        <h3 class=\"text-center\">Filtered Items({{vclists.length}})\r\n        </h3>\r\n        <hr>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"wrap\">\r\n\r\n    <div *ngFor=\"let vclist of vclists\" >\r\n      <div [ngClass]=\"{'background-change' : vclist.Featured }\" class=\"container col-md-9\">\r\n        <div [ngClass]=\"{'featured' : vclist.Featured }\" class=\"list\">\r\n      <div class=\"row card\">\r\n        <div class=\"col-xs-3\">\r\n          <img class=\"feature-logo\" *ngIf=\"vclist.Featured\" src=\"../assets/images/feature1.png\">\r\n          <img class=\"sh-styles\" src=\"assets/images/company-logos/{{vclist['VC Name']}}.png\" (error)=\"this.error=null; updateUrl($event)\"\r\n            alt=\"company logo\">\r\n        </div>\r\n        <div class=\"col-xs-6 slide-name\">\r\n          <a class=\"no-underline\" href=\"{{vclist.Website}}\" target=\"_blank\">\r\n            <h3 class=\"text-center small-name\">{{vclist['VC Name']}}</h3>\r\n          </a>\r\n        </div>\r\n        <div class=\"col-xs-3 show-btn\">\r\n          <p class=\"website\">\r\n            <a class=\"website btn btn-primary\" href=\"{{vclist.Website}}\" role=\"button\" target=\"_blank\">visit website &raquo;</a>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <table class=\"table\">\r\n          <tr *ngIf=\"vclist['Investment Focus']\">\r\n            <td class=\"vr\">Investment Focus:</td>\r\n            <td>{{vclist['Investment Focus'].split(',').join(' |')}}</td>\r\n          </tr>\r\n          <tr *ngIf=\"vclist['Investment Stage']\">\r\n            <td class=\"vr\">Investment Stage:</td>\r\n            <td>{{vclist['Investment Stage'].split(',').join(' |')}}</td>\r\n          </tr>\r\n          <tr *ngIf=\"vclist['Fund Status']\">\r\n            <td class=\"vr\">Fund Status:</td>\r\n            <td>{{vclist['Fund Status']}}</td>\r\n          </tr>\r\n          <tr *ngIf=\"vclist['Special Criteria']\">\r\n            <td class=\"vr\">Special Criteria:</td>\r\n            <td>{{vclist['Special Criteria']}}</td>\r\n          </tr>\r\n          <tr *ngIf=\"vclist.Research[' Industry Partner']\">\r\n            <td class=\"vr\">Research/Industry Partner:</td>\r\n            <td>{{vclist.Research[' Industry Partner'].split(',').join(' |')}}</td>\r\n          </tr>\r\n          <tr *ngIf=\"vclist.Location\">\r\n            <td class=\"vr\">Location:</td>\r\n            <td>{{vclist.Location.join(' | ')}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/vclist/vclist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  color: #3C84C4; }\n\n.overSelect {\n  cursor: pointer; }\n\n.selectBox select {\n  width: 100%;\n  height: 34px;\n  margin-right: 15px;\n  display: inline-block;\n  letter-spacing: 1.2px;\n  padding: 6px 6px;\n  overflow: hidden;\n  z-index: 1;\n  cursor: pointer;\n  border-radius: 5px;\n  color: white;\n  background: cornflowerblue; }\n\n.container {\n  border-left: 4px solid darkblue;\n  float: right; }\n\n.multiselect {\n  width: 200px; }\n\n.background-change {\n  background-color: #9ec5e6;\n  border-bottom: 4px solid darkblue;\n  padding-bottom: 30px; }\n\n.selectBox {\n  position: relative; }\n\n.selectBox select {\n  width: 100%;\n  font-weight: bold; }\n\n.overSelect {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n#investmentCheckboxes,\n#locationCheckboxes,\n#indicationCheckboxes,\n#focusCheckboxes {\n  display: none;\n  border: 1px #dadada solid;\n  background: white;\n  position: absolute;\n  z-index: 1; }\n\n#investmentCheckboxes label {\n  display: block;\n  width: 168px; }\n\n#locationCheckboxes label {\n  display: block;\n  width: 168px; }\n\n#indicationCheckboxes label {\n  display: block;\n  width: 168px; }\n\n#focusCheckboxes label {\n  display: block;\n  width: 168px; }\n\n#investmentCheckboxes label:hover {\n  background-color: #1e90ff; }\n\n#locationCheckboxes label:hover {\n  background-color: #1e90ff; }\n\n#indicationCheckboxes label:hover {\n  background-color: #1e90ff; }\n\n#focusCheckboxes label:hover {\n  background-color: #1e90ff; }\n\nbody {\n  margin: 0; }\n\n.small-name {\n  font-weight: bold; }\n\n.fixed {\n  position: fixed;\n  top: 0; }\n\n.filter {\n  margin-top: 10px; }\n\nhr {\n  border-top: 1px solid #cbcbcb; }\n\n.wrap {\n  border-left: 2px solid darkblue;\n  position: relative;\n  height: 100%; }\n\n.wrap::after {\n  content: \"\";\n  background-color: darkblue;\n  display: block;\n  width: 3px;\n  height: 103%;\n  position: absolute;\n  left: 255px; }\n\n.banner-btns {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.overlay-buttons {\n  margin: 15px auto; }\n\n.btn-left {\n  text-align: left !important; }\n\n.filtered-item {\n  margin-bottom: 15px; }\n\n.body-style {\n  background: #f5f5f5; }\n\n.header-img {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/banner.jpg") + ");\n  background-size: cover;\n  background-position: center;\n  min-height: 360px;\n  border-radius: 0px;\n  padding: 20px;\n  color: white; }\n\n.dropdown-content {\n  color: #333333; }\n\n.table {\n  margin-bottom: 0px;\n  font-size: 16px; }\n\n.sh-styles {\n  float: left;\n  margin: 15px 0;\n  max-height: 45px;\n  max-width: 180px; }\n\n.website {\n  float: right;\n  margin: 9px 0; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  border-top: none; }\n\n.no-underline {\n  text-decoration: none; }\n\n.card {\n  border-bottom: 1px solid #333333; }\n\n.field {\n  padding-top: 12px; }\n\n.vr {\n  border-right: 1px solid #333333;\n  width: 200px;\n  font-weight: bold; }\n\n.list {\n  position: relative;\n  margin-top: 60px !important;\n  background: white;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  box-shadow: rgba(0, 0, 0, 0.75) 10px 10px 23px -4px; }\n\n.btn {\n  height: 34px;\n  margin-right: 15px;\n  position: relative;\n  display: inline-block;\n  letter-spacing: 1.2px;\n  padding: 6px 6px;\n  text-align: center;\n  overflow: hidden;\n  z-index: 1;\n  cursor: pointer; }\n\n.btn:focus {\n  outline: none; }\n\n.btn-primary {\n  background: cornflowerblue;\n  border-color: cornflowerblue;\n  color: white; }\n\n.btn-primary:hover {\n  background: #3a5c97; }\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.form-group {\n  z-index: 1;\n  max-width: 242px;\n  float: left;\n  margin-top: 60px;\n  height: 94%; }\n\n.featured {\n  position: relative; }\n\n.feature-logo {\n  height: 30px;\n  margin: -60px 0px 0px -30px;\n  float: left; }\n\n@media only screen and (max-width: 1000px) {\n  .form-group {\n    position: relative;\n    float: none;\n    max-width: 100%; }\n  .feature-logo {\n    margin: -30px 0px 0px -30px; }\n  .list {\n    width: 100%; }\n  .sticky {\n    position: relative !important; }\n  .container {\n    float: none; }\n  .filter-label {\n    float: none; } }\n\n@media only screen and (max-width: 552px) {\n  .resp-btn {\n    margin-top: 20px; } }\n\n@media only screen and (max-width: 450px) {\n  .vr {\n    width: 100px; } }\n\n@media only screen and (max-width: 620px) {\n  .show-btn {\n    display: none; }\n  .slide-name {\n    float: right; }\n  .small-name {\n    font-size: 18px; }\n  .sh-styles {\n    max-width: 140px; } }\n", ""]);

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
    function VclistComponent(vclistService, metaService, listFilter) {
        var _this = this;
        this.vclistService = vclistService;
        this.metaService = metaService;
        this.listFilter = listFilter;
        this.vclists = [];
        this.country = [];
        this.focus = [];
        this.indication = [];
        this.investment = [];
        this.count = {};
        this.reset = true;
        this.expanded = false;
        this.location = false;
        this.focus1 = false;
        this.indication1 = false;
        this.investment1 = false;
        this.saveList = [];
        this.vclistService.getVclist().subscribe(function (data) {
            _this.vclists = data;
            _this.saveList = _this.vclists;
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
                        val[key].forEach(function (element) {
                            locat.push(element.split(' ').splice(-1)[0]);
                        });
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
            // filtering unique values from array
            function onlyUnique(value, index, self) {
                return self.indexOf(value) === index;
            }
            // country
            _this.country = locat.filter(onlyUnique).filter(Boolean);
            // Investment Focus
            focus = [].concat.apply([], focus);
            focus = focus.map(function (el) {
                return el.trim();
            });
            _this.focus = focus.filter(onlyUnique).filter(Boolean);
            // Prefered Indication
            indication = [].concat.apply([], indication);
            indication = indication.map(function (el) {
                return el.trim();
            });
            indication = indication.filter(onlyUnique);
            _this.indication = indication.filter(Boolean);
            // Investment Stage
            investment = [].concat.apply([], investment);
            investment = investment.map(function (el) {
                return el.trim();
            });
            investment = investment.filter(onlyUnique);
            _this.investment = investment.filter(Boolean);
            _this.metaService.addTags([
                { name: 'keywords', content: vc_name.toString() }
            ]);
        });
    }
    VclistComponent.prototype.ngOnInit = function () {
        var stickyOffset = $('.sticky').offset().top;
        $(window).scroll(function () {
            var sticky = $('.sticky'), scroll = $(window).scrollTop();
            if (scroll >= stickyOffset) {
                sticky.addClass('fixed');
            }
            else {
                sticky.removeClass('fixed');
            }
        });
    };
    VclistComponent.prototype.updateUrl = function (event) {
        event.target.src = event.target.currentSrc.slice(0, -3) + 'png';
        return;
    };
    VclistComponent.prototype.filterList = function (ele, type) {
        var boxes = $("input[name=" + type + "]:checked");
        this.vclists = this.saveList;
        if (boxes.length !== 0 && type === 'inves') {
            for (var i = 0; i < boxes.length; i++) {
                this.vclists = this.listFilter.transform(this.vclists, '', '', '', boxes[i].nextSibling.data);
            }
        }
        else if (boxes.length !== 0 && type === 'locati') {
            for (var i = 0; i < boxes.length; i++) {
                this.vclists = this.listFilter.transform(this.vclists, boxes[i].nextSibling.data, '', '', '');
            }
        }
        else if (boxes.length !== 0 && type === 'focu') {
            for (var i = 0; i < boxes.length; i++) {
                this.vclists = this.listFilter.transform(this.vclists, '', boxes[i].nextSibling.data, '', '');
            }
        }
        else if (boxes.length !== 0 && type === 'indica') {
            for (var i = 0; i < boxes.length; i++) {
                this.vclists = this.listFilter.transform(this.vclists, '', '', boxes[i].nextSibling.data, '');
            }
        }
        else {
            this.vclists = this.listFilter.transform(this.saveList, '', '', '', '');
        }
    };
    VclistComponent.prototype.showlocationCheckboxes = function () {
        var locationCheckboxes = document.getElementById('locationCheckboxes');
        if (!this.location) {
            locationCheckboxes.style.display = 'block';
            this.location = true;
        }
        else {
            locationCheckboxes.style.display = 'none';
            this.location = false;
        }
    };
    VclistComponent.prototype.showCheckboxes = function (type) {
        var locationCheckboxes = document.getElementById('locationCheckboxes');
        var focusCheckboxes = document.getElementById('focusCheckboxes');
        var indicationCheckboxes = document.getElementById('indicationCheckboxes');
        var investmentCheckboxes = document.getElementById('investmentCheckboxes');
        if (type === 'location' && !this.location) {
            locationCheckboxes.style.display = 'block';
            this.location = true;
        }
        else {
            locationCheckboxes.style.display = 'none';
            this.location = false;
        }
        if (type === 'focus' && !this.focus1) {
            focusCheckboxes.style.display = 'block';
            this.focus1 = true;
        }
        else {
            focusCheckboxes.style.display = 'none';
            this.focus1 = false;
        }
        if (type === 'indication' && !this.indication1) {
            indicationCheckboxes.style.display = 'block';
            this.indication1 = true;
        }
        else {
            indicationCheckboxes.style.display = 'none';
            this.indication1 = false;
        }
        if (type === 'investment' && !this.investment1) {
            investmentCheckboxes.style.display = 'block';
            this.investment1 = true;
        }
        else {
            investmentCheckboxes.style.display = 'none';
            this.investment1 = false;
        }
    };
    return VclistComponent;
}());
VclistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-vclist',
        template: __webpack_require__("../../../../../src/app/components/vclist/vclist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vclist/vclist.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_3__vcfilter_pipe__["a" /* VcfilterPipe */]]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__vcfilter_pipe__["a" /* VcfilterPipe */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_vclist_service__["a" /* VclistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_vclist_service__["a" /* VclistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["b" /* Meta */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__vcfilter_pipe__["a" /* VcfilterPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__vcfilter_pipe__["a" /* VcfilterPipe */]) === "function" && _c || Object])
], VclistComponent);

var _a, _b, _c;
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
                if ((location && !item.Location.find(function (b) { return b.includes(location); })) && location !== 'Location') {
                    return false;
                }
                if ((focus && item['Investment Focus'].toLowerCase().indexOf(focus.toString().toLowerCase()) === -1)
                    && focus !== 'Investment Focus') {
                    return false;
                }
                if ((indication && item['Prefered Indication'].toLowerCase().indexOf(indication.toLowerCase()) === -1)
                    && indication !== 'Prefered Indication') {
                    return false;
                }
                if ((investment && item['Investment Stage'].toLowerCase().indexOf(investment.toLowerCase()) === -1)
                    && investment !== 'Investment Stage') {
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

module.exports = __webpack_require__.p + "banner.515769998c51d6d4e4e4.jpg";

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