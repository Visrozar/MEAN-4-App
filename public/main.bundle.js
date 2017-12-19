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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_project_form_project_form_component__ = __webpack_require__("../../../../../src/app/components/project-form/project-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_workflow_guard_service__ = __webpack_require__("../../../../../src/app/services/workflow-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/components/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    {
        path: 'project_details',
        component: __WEBPACK_IMPORTED_MODULE_9__components_project_detail_project_detail_component__["a" /* ProjectDetailComponent */]
    },
    {
        path: 'project_form',
        component: __WEBPACK_IMPORTED_MODULE_5__components_project_form_project_form_component__["a" /* ProjectFormComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'vc_list',
        component: __WEBPACK_IMPORTED_MODULE_3__components_vclist_vclist_component__["a" /* VclistComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_notAuth_guard__["a" /* NotAuthGuard */]]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_11__guards_notAuth_guard__["a" /* NotAuthGuard */]]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */]]
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
        providers: [__WEBPACK_IMPORTED_MODULE_6__services_workflow_guard_service__["a" /* WorkflowGuard */]],
        bootstrap: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_vclist_vclist_component__ = __webpack_require__("../../../../../src/app/components/vclist/vclist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_vclist_service__ = __webpack_require__("../../../../../src/app/services/vclist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_workflow_service__ = __webpack_require__("../../../../../src/app/services/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_vcfilter_pipe__ = __webpack_require__("../../../../../src/app/pipes/vcfilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_project_form_project_form_component__ = __webpack_require__("../../../../../src/app/components/project-form/project-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_project_form_contact_person_contact_person_component__ = __webpack_require__("../../../../../src/app/components/project-form/contact-person/contact-person.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_project_form_deal_description_deal_description_component__ = __webpack_require__("../../../../../src/app/components/project-form/deal-description/deal-description.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_project_form_form_result_form_result_component__ = __webpack_require__("../../../../../src/app/components/project-form/form-result/form-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_upload_file_service__ = __webpack_require__("../../../../../src/app/services/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_notAuth_guard__ = __webpack_require__("../../../../../src/app/guards/notAuth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/components/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pipes_dashboard_pipe__ = __webpack_require__("../../../../../src/app/pipes/dashboard.pipe.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_vclist_vclist_component__["a" /* VclistComponent */],
            __WEBPACK_IMPORTED_MODULE_15__pipes_vcfilter_pipe__["a" /* VcfilterPipe */],
            __WEBPACK_IMPORTED_MODULE_16__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_project_form_project_form_component__["a" /* ProjectFormComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_project_form_contact_person_contact_person_component__["a" /* ContactPersonComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_project_form_deal_description_deal_description_component__["a" /* DealDescriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_project_form_form_result_form_result_component__["a" /* FormResultComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_28__pipes_dashboard_pipe__["a" /* DashboardPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__services_vclist_service__["a" /* VclistService */], __WEBPACK_IMPORTED_MODULE_17__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_26__guards_notAuth_guard__["a" /* NotAuthGuard */], __WEBPACK_IMPORTED_MODULE_13__services_form_service__["a" /* FormService */], __WEBPACK_IMPORTED_MODULE_22__services_upload_file_service__["a" /* UploadFileService */],
            { provide: __WEBPACK_IMPORTED_MODULE_14__services_workflow_service__["a" /* WorkflowService */], useClass: __WEBPACK_IMPORTED_MODULE_14__services_workflow_service__["a" /* WorkflowService */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header text-center\">Dashboard</h2>\r\n<div class=\"container\">\r\n  <div class=\"card\" *ngFor=\"let project of projects\">\r\n    <div class=\"card-body\">\r\n      <div class=\"row\" style=\"cursor: pointer;\" (click)=\"viewEntry(project);\">\r\n        <h4 class=\"card-title text-center\">{{project.dealName}}</h4>\r\n      </div>\r\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\r\n        <div class=\"row\" *ngIf=\"username === project.createdBy\">\r\n          <div class=\"col-xs-3 text-center padd\">\r\n            <a routerLink=\"/project_form\">\r\n              <button type=\"button\" name=\"button\" (click)=\"editEntry(project);\" class=\"btn btn-sm btn-info\">Edit</button>\r\n            </a>\r\n          </div>\r\n          <div class=\"col-xs-3 text-center padd\" *ngIf=\"username === project.createdBy\">\r\n            <button type=\"button\" name=\"button\" (click)=\"removeEntry(project._id)\" class=\"btn btn-sm btn-danger\">Delete</button>\r\n\r\n          </div>\r\n          <div class=\"col-xs-3 text-center padd\">\r\n            <div class=\"glyphicon glyphicon-thumbs-up\">\r\n              <span class=\"views\">{{project.likedBy.length}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xs-3 glyphicon glyphicon-eye-open padd text-center\">\r\n            <span class=\"views\">{{project.viewedBy.length}}</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"username !== project.createdBy\">\r\n          <div class=\"col-xs-6 text-center padd\">\r\n            <div *ngIf=\"!project.likedBy.includes(username);\" class=\"glyphicon glyphicon-heart-empty\" (click)=\"addToLiked(project);\">\r\n              <span class=\"views\">{{project.likedBy.length}}</span>\r\n            </div>\r\n            <div *ngIf=\"project.likedBy.includes(username);\" class=\"glyphicon glyphicon-heart\" (click)=\"addToLiked(project);\">\r\n              <span class=\"views\">{{project.likedBy.length}}</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-xs-6 glyphicon glyphicon-eye-open padd text-center\">\r\n            <span class=\"views\">{{project.viewedBy.length}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <table class=\"table\" (click)=\"viewEntry(project);\" style=\"cursor: pointer;\">\r\n        <tr *ngIf=\"project.name\">\r\n          <td class=\"vr\">Name:</td>\r\n          <td>{{project.name}}</td>\r\n        </tr>\r\n\r\n        <tr *ngIf=\"project.name\">\r\n          <td class=\"vr\">Role:</td>\r\n          <td>{{project.role}}</td>\r\n        </tr>\r\n\r\n        <tr *ngIf=\"project.name\">\r\n          <td class=\"vr\">E-mail:</td>\r\n          <td>{{project.email}}</td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row text-center\">\r\n  <a routerLink=\"/project_form\">\r\n    <button type=\"button\" class=\"btn btn-primary btn-outline-rounded\">\r\n      Add Project\r\n    </button>\r\n  </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*,\n::after,\n::before {\n  box-sizing: border-box; }\n\n.danger-btn {\n  background: red;\n  color: white;\n  float: right; }\n\n.table {\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\n  margin-bottom: 0px;\n  font-size: 16px; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  border-top: none; }\n\n.vr {\n  border-right: 1px solid rgba(0, 0, 0, 0.125);\n  width: 200px;\n  font-weight: bold; }\n\n.card {\n  position: relative;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-direction: column;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: .25rem;\n  margin: 10px 0; }\n\n.card-body {\n  -ms-flex: 1 1 auto;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n  padding: 1.25rem; }\n\n.card-title {\n  margin-bottom: .75rem; }\n\n.h4,\nh4 {\n  font-size: 2.2rem; }\n\n.card-text {\n  margin-top: 0;\n  margin-bottom: 1rem; }\n\n.card-link {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation; }\n\n.padd {\n  padding: 10px; }\n\n.glyphicon-heart-empty {\n  cursor: pointer;\n  font-size: 20px;\n  color: cornflowerblue; }\n\n.glyphicon-heart-empty:hover:before {\n  content: \"\\E005\"; }\n\n.glyphicon-thumbs-up {\n  font-size: 20px;\n  color: cornflowerblue; }\n\n.glyphicon-eye-open {\n  font-size: 20px; }\n\n.views {\n  font-size: 28px;\n  margin-left: -10px; }\n\n.glyphicon-heart {\n  cursor: pointer;\n  font-size: 20px;\n  color: cornflowerblue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_upload_file_service__ = __webpack_require__("../../../../../src/app/services/upload-file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_dashboard_pipe__ = __webpack_require__("../../../../../src/app/pipes/dashboard.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(uploadService, authService, formService, router) {
        this.uploadService = uploadService;
        this.authService = authService;
        this.formService = formService;
        this.router = router;
        this.projects = [];
        this.style = 'glyphicon-heart-empty';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
            _this.role = profile.user.role;
        });
        this.getDashboard();
    };
    DashboardComponent.prototype.getDashboard = function () {
        var _this = this;
        this.authService.getDashboard().subscribe(function (dashboard) {
            _this.projects = dashboard.projects;
        });
    };
    DashboardComponent.prototype.removeEntry = function (projectId) {
        var _this = this;
        this.authService.deleteProject(projectId).subscribe(function (data) {
            _this.message = data.message;
        });
        this.getDashboard();
    };
    DashboardComponent.prototype.editEntry = function (dash) {
        this.formService.editClick = true;
        this.formService.id = dash._id;
        var picked = (function (_a) {
            var _id = _a._id, name = _a.name, role = _a.role, organization = _a.organization, telephone = _a.telephone, email = _a.email, website = _a.website;
            return ({ name: name, role: role, organization: organization, telephone: telephone, email: email, website: website });
        })(dash);
        this.formService.contact = picked;
        var picked1 = (function (_a) {
            var dealName = _a.dealName, location = _a.location, sector = _a.sector, indication = _a.indication, stageLead = _a.stageLead, financing = _a.financing, investment = _a.investment, techonology = _a.techonology, programDescription = _a.programDescription, comments = _a.comments, fileName = _a.fileName;
            return ({
                dealName: dealName, location: location, sector: sector, indication: indication, stageLead: stageLead, financing: financing, investment: investment,
                techonology: techonology, programDescription: programDescription, comments: comments, fileName: fileName
            });
        })(dash);
        this.formService.deal = picked1;
    };
    DashboardComponent.prototype.viewEntry = function (dash) {
        var _this = this;
        var a = $.inArray(this.username, dash.viewedBy);
        this.formService.detailData = dash;
        this.router.navigate(['/project_details']);
        if (this.username !== dash.createdBy) {
            if (a === -1) {
                dash.viewedBy.push(this.username);
            }
            // dash.views = dash.views + 1;
            dash.likeClick = true;
            this.uploadService.editProject(dash).subscribe(function (data) {
                if (!data.success) {
                    _this.getDashboard();
                    console.log(data.message); // Return error message
                }
                else {
                    console.log(data.message); // Return success message
                }
            });
        }
    };
    DashboardComponent.prototype.changeStyle = function ($event) {
        this.style = $event.type === 'mouseover' ? 'glyphicon-heart' : 'glyphicon-heart-empty';
    };
    DashboardComponent.prototype.addToLiked = function (dash) {
        var _this = this;
        var a = $.inArray(this.username, dash.likedBy);
        if (a === -1) {
            dash.likedBy.push(this.username);
        }
        else {
            var index = dash.likedBy.indexOf(this.username);
            if (index > -1) {
                dash.likedBy.splice(index, 1);
            }
        }
        dash.likeClick = true;
        this.uploadService.editProject(dash).subscribe(function (data) {
            if (!data.success) {
                _this.getDashboard();
                console.log(data.message); // Return error message
            }
            else {
                console.log(data.message); // Return success message
            }
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__pipes_dashboard_pipe__["a" /* DashboardPipe */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_upload_file_service__["a" /* UploadFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_upload_file_service__["a" /* UploadFileService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"body-style\">\r\n  <div id=\"head\" class=\"jumbotron header-img\">\r\n    <div class=\"container cont-style\">\r\n      <h2 class=\"display-1 heading\">Virtual Boitech is the first online community for life science investors in Europe</h2>\r\n       <p class=\"small-heading\">VirtualBiotech is a non-commercial initiative managed by venture capital professionals with the aim\r\n      to form a free online community for life science investors in Europe.</p>\r\n      <div class=\"row banner-btns\">\r\n        <a class=\"btn btn-primary overlay-buttons\" style=\"display:table-cell; vertical-align:middle; text-align:center\"\r\n        routerLink=\"/login\" role=\"button\">Join our investor community &raquo;</a>\r\n        <a class=\"btn btn-primary overlay-buttons\" style=\"display:table-cell; vertical-align:middle; text-align:center\"\r\n        routerLink=\"/login\" role=\"button\">Submit your business plan &raquo;</a>\r\n      </div>\r\n      <div class=\"row\">\r\n        <section id=\"section05\" class=\"col-md-12 text-center demo\">\r\n          <a class=\"scroll-button\" (click)=\"scrollDown()\">\r\n            <span></span>See how you can benefit from Virtual Biotech</a>\r\n        </section>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container cont-1\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5 stake-holders\">\r\n          <h2 class=\"point-head\">For life science investors:</h2>\r\n          <ul>\r\n            <li class=\"points\">Browse the listed investment opportunities and stay up to date with the life science startup scene in Europe</li>\r\n            <li class=\"points\">Download the available slide decks freely and anonymously and move any time to direct contact with the founders</li>\r\n            <li class=\"points\">Find out which projects are most popular in the community and have the choice to express your interest in any\r\n              listed project</li>\r\n            <li class=\"points\">By expressing interest, you will be introduced to other interested members to potentially share your due diligence\r\n              and build syndicates</li>\r\n          </ul>\r\n          <div class=\"col-md-12 text-center sh-btn\">\r\n            <a class=\"btn btn-primary point-btn\" routerLink=\"/login\" role=\"button\">Join our investor community &raquo;</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-5 col-md-offset-2 stake-holders\">\r\n          <h2 class=\"point-head\">For life science entrepreneurs:</h2>\r\n          <ul>\r\n            <li class=\"points\">Benefit from our community to reach more life science investors, pave the way for future contact or follow up\r\n              in a soft and indirect way</li>\r\n            <li class=\"points\">List your company or project simply and without any commitment to our platform</li>\r\n            <li class=\"points\">Your company will be added to our deal flow which will be sent to our community members of life science investors</li>\r\n            <li class=\"points\">The investors will be able to check your company profile, contact you directly and share their interest with\r\n              other investors</li>\r\n          </ul>\r\n          <div class=\"col-md-12 text-center sh-btn\">\r\n            <a class=\"btn btn-primary point-btn\" routerLink=\"/login\" role=\"button\">Submit your business plan &raquo;</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr>\r\n  </div>\r\n</main>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left {\n  float: left; }\n\n.demo {\n  margin-top: 10px; }\n\n.demo a {\n  z-index: 2;\n  color: white;\n  font-size: 20px;\n  text-decoration: none;\n  transition: opacity .3s; }\n\n.demo a:hover {\n  opacity: .5; }\n\n#section05 a span {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  border-left: 1px solid white;\n  border-bottom: 1px solid white;\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n  -webkit-animation: sdb05 1.5s infinite;\n  animation: sdb05 1.5s infinite;\n  box-sizing: border-box; }\n\n@-webkit-keyframes sdb05 {\n  0% {\n    -webkit-transform: rotate(-45deg) translate(0, 0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\n    opacity: 0; } }\n\n@keyframes sdb05 {\n  0% {\n    -webkit-transform: rotate(-45deg) translate(0, 0);\n            transform: rotate(-45deg) translate(0, 0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: rotate(-45deg) translate(-20px, 20px);\n            transform: rotate(-45deg) translate(-20px, 20px);\n    opacity: 0; } }\n\n.left {\n  float: left; }\n\n.body-style {\n  background: #f5f5f5; }\n\n.point-head {\n  margin-bottom: 20px; }\n\n.points {\n  margin-bottom: 10px; }\n\n.point-btn {\n  margin-top: 10px; }\n\n.header-img {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/banner.jpg") + ");\n  background-size: cover;\n  background-position: center;\n  height: auto;\n  border-radius: 0px; }\n\n.banner-btns {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.small-heading {\n  font-size: 20px; }\n\n.sh-btn {\n  margin-top: 10px; }\n\nul {\n  margin-bottom: 0px;\n  margin-left: -39px; }\n\n.overlay-buttons {\n  margin: 15px auto; }\n\n.modal {\n  display: block;\n  position: fixed;\n  z-index: 2;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.5); }\n\n.modal-content {\n  background-color: #f4f4f4;\n  margin: 15% auto;\n  width: 70%;\n  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.17);\n  -webkit-animation-name: modalopen;\n          animation-name: modalopen;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s; }\n\n.modal-header h2,\n.modal-footer h3 {\n  margin: 0; }\n\n.modal-header {\n  padding: 15px;\n  color: #fff; }\n\n.modal-body {\n  padding: 10px 20px; }\n\n.closeBtn {\n  color: #e95420;\n  float: right;\n  font-size: 30px;\n  margin-right: -10px;\n  margin-top: -15px; }\n\n.closeBtn:hover,\n.closeBtn:focus {\n  color: #333333;\n  text-decoration: none;\n  cursor: pointer; }\n\n@-webkit-keyframes modalopen {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes modalopen {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.row {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap; }\n\n.scroll-button {\n  cursor: pointer; }\n\n.cont-style {\n  color: white; }\n\n.cont-1 {\n  padding-top: 35px; }\n\n.description {\n  margin-top: 40px;\n  color: #333333; }\n\n.stake-holders {\n  color: #333333;\n  font-size: 18px; }\n  .stake-holders h2 {\n    margin-top: 0; }\n\n.heading {\n  text-overflow: ellipsis;\n  color: white;\n  font-size: 40px; }\n\n.box {\n  background: white;\n  border-radius: 0.3rem;\n  padding: 15px;\n  font-size: 20px !important; }\n\n.shadow {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.btn {\n  position: relative;\n  display: inline-block;\n  letter-spacing: 1.2px;\n  padding: 12px 32px;\n  text-align: center;\n  text-transform: uppercase;\n  overflow: hidden;\n  z-index: 1;\n  cursor: pointer; }\n\n.btn:focus {\n  outline: none; }\n\n.btn-primary {\n  background: #7AACD6;\n  border-color: #9EC5E6; }\n\n.btn-primary:hover {\n  background: #3a5c97; }\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem; }\n\n@media only screen and (max-width: 520px) {\n  .heading {\n    font-size: 30px; } }\n\n@media only screen and (min-width: 576px) {\n  .jumbotron {\n    padding: 4rem 2rem; } }\n\n@media only screen and (max-width: 768px) {\n  .sh-styles {\n    margin-top: 0; }\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px; } }\n\n@media only screen and (max-width: 992px) {\n  .sh-styles {\n    width: 250px !important;\n    height: 200px !important;\n    margin-top: 20%; }\n  .stake-holders {\n    margin-bottom: 50px; } }\n", ""]);

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header text-center\">Login</h2>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Login Form -->\r\n<form [formGroup]=\"form\" (submit)=\"onLoginSubmit()\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8\">\r\n\r\n      <!-- Username Field -->\r\n      <div class=\"row\">\r\n        <div class='col-xs-12 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <div [ngClass]=\"{'has-error': form.controls.username.errors && form.controls.username.dirty, 'has-success': form.controls.username.valid && form.controls.username.dirty }\">\r\n              <input class=\"form-control\" type=\"text\" name=\"username\" formControlName=\"username\" />\r\n              <!-- Validation -->\r\n              <ul class=\"help-block\">\r\n                <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required.</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Password Field  -->\r\n      <div class=\"row\">\r\n        <div class='col-xs-12 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <div [ngClass]=\"{'has-error': form.controls.password.errors && form.controls.password.dirty, 'has-success': form.controls.password.valid && form.controls.password.dirty }\">\r\n              <input class=\"form-control\" type=\"password\" name=\"password\" formControlName=\"password\" />\r\n              <!-- Validation -->\r\n              <ul class=\"help-block\">\r\n                <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required.</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Submit Button -->\r\n      <div class=\"row text-center\">\r\n        <input [disabled]=\"!form.valid || processing\" class=\"btn btn-primary\" type=\"submit\" value=\"Login\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm(); // Create Login Form when component is constructed
    }
    // Function to create login form
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required] // Password field
        });
    };
    // Function to disable form
    LoginComponent.prototype.disableForm = function () {
        this.form.controls['username'].disable(); // Disable username field
        this.form.controls['password'].disable(); // Disable password field
    };
    // Function to enable form
    LoginComponent.prototype.enableForm = function () {
        this.form.controls['username'].enable(); // Enable username field
        this.form.controls['password'].enable(); // Enable password field
    };
    // Functiont to submit form and login user
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        this.processing = true; // Used to submit button while is being processed
        this.disableForm(); // Disable form while being process
        // Create user object from user's input
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value // Password input field
        };
        // Function to send login data to API
        this.authService.login(user).subscribe(function (data) {
            // Check if response was a success or error
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set bootstrap error class
                _this.message = data.message; // Set error message
                _this.processing = false; // Enable submit button
                _this.enableForm(); // Enable form for editting
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set bootstrap success class
                _this.message = data.message; // Set success message
                // Function to store user's token in client local storage
                _this.authService.storeUserData(data.token, data.user);
                // After 2 seconds, redirect to dashboard page
                setTimeout(function () {
                    _this.router.navigate(['/dashboard']); // Navigate to dashboard view
                }, 2000);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/home\">\r\n        <img src=\"../assets/images/main-logo.png\"/>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/home\">Home</a>\r\n        </li>\r\n        <li [routerLinkActive]=\"['active']\" class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/vc_list\">VC List</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/register\">Register</a>\r\n        </li>\r\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard</a>\r\n        </li>\r\n        <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\" (click)=\"onLogoutClick()\">Logout</a>\r\n        </li>\r\n      </ul>\r\n      <!-- <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a class=\"ml-auto navbar-text\" routerLink=\"/login\">Login</a>\r\n        </li>\r\n      </ul> -->\r\n    </div>\r\n  </div>\r\n  <hr>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left {\n  float: left; }\n\na:hover {\n  background: white; }\n\na:focus {\n  background: white; }\n\n.navbar-default {\n  background-color: white;\n  border-color: white; }\n\n.navbar-nav > li > a {\n  color: darkblue;\n  font-size: 21px; }\n\n.navbar-nav > li > a:hover {\n  background: white; }\n\n.navbar-right {\n  margin-top: 77px; }\n\nhr {\n  margin-bottom: 0px;\n  margin-top: 0px; }\n\n.navbar-brand {\n  padding: 10px 5px 0 30px; }\n  .navbar-brand > img {\n    height: 100px; }\n\n.navbar {\n  margin-bottom: 0px;\n  border-radius: 0px; }\n\n.navbar-toggle {\n  border-color: cornflowerblue;\n  background-color: white; }\n  .navbar-toggle .icon-bar {\n    background-color: cornflowerblue; }\n\n.navbar-collapse {\n  border-color: cornflowerblue; }\n\n.navbar-toggle:focus {\n  background-color: white; }\n\n.navbar-toggle:hover {\n  background: #3a5c97; }\n\n/* change the brand and text color */\n.navbar-custom .navbar-brand,\n.navbar-custom .navbar-text {\n  color: #333333; }\n\n/* change the link color */\n.navbar-custom .navbar-nav .nav-link {\n  color: #333333; }\n\n/* change the color of active or hovered links */\n.navbar-custom .nav-item.active .nav-link,\n.navbar-custom .nav-item:hover .nav-link {\n  color: white; }\n\n#bs-example-navbar-collapse-1 > ul > li > a:hover {\n  color: #3C85C5; }\n\n.navbar-text {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.navbar-default .navbar-nav > .active {\n  background: white;\n  color: #3C85C5; }\n\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  background: white;\n  color: #3C85C5; }\n\n@media only screen and (max-width: 768px) {\n  .navbar-brand {\n    padding: 0 5px 0 5px; }\n    .navbar-brand > img {\n      height: 45px; }\n  .navbar-right {\n    margin-top: 0px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.router.navigate(['/']);
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project-detail/project-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header text-center\">{{this.projectDetail.dealName}}</h2>\r\n<div class='row'>\r\n    <div class='col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-8'>\r\n        <div class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">Name: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.name}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">Role: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.role}}\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"this.projectDetail.organization\" class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">Organization: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.organization}}\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"this.projectDetail.telephone\" class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">Telephone: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.telephone}}\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"this.projectDetail.website\" class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">Website: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.website}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"email\">Email: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.email}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"email\">Location: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.location}}\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"email\">Sector: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.sector}}\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"this.projectDetail.indication\" class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">Indication: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.indication}}\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"this.projectDetail.stageLead\" class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">Stage of lead program: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.stageLead}}\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"this.projectDetail.financing\" class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">Financing round: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.financing}}\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"this.projectDetail.investment\" class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">Investment amount: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.investment}}\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"this.projectDetail.techonology\" class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">Technology Description: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.techonology}}\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"this.projectDetail.techonology\" class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">Lead program description: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.programDescription}}\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"this.projectDetail.comments\" class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">Other comments: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.projectDetail.comments}}\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"this.formService.file\" class=\"row\">\r\n            <div class='col-xs-3 col-sm-2'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"control-label\" for=\"name\">File to upload: </label>\r\n                </div>\r\n            </div>\r\n            <div class='col-xs-9 col-sm-10'>\r\n                {{this.formService.file}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/project-detail/project-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-detail/project-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_upload_file_service__ = __webpack_require__("../../../../../src/app/services/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(authService, router, uploadService, formService) {
        this.authService = authService;
        this.router = router;
        this.uploadService = uploadService;
        this.formService = formService;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
            _this.role = profile.user.role;
        });
        this.projectDetail = this.formService.detailData;
    };
    return ProjectDetailComponent;
}());
ProjectDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-detail',
        template: __webpack_require__("../../../../../src/app/components/project-detail/project-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project-detail/project-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_upload_file_service__["a" /* UploadFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_upload_file_service__["a" /* UploadFileService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */]) === "function" && _d || Object])
], ProjectDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=project-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project-form/contact-person/contact-person.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header text-center\">Contact Person</h2>\r\n<form #personalForm=\"ngForm\" class=\"editForm\" novalidate>\r\n    <div class=\"tab-pane fade in active\">\r\n        <!-- <h4 class=\"head text-center\">{{title}}</h4> -->\r\n        <br/>\r\n        <div class='row'>\r\n            <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\r\n                <div class=\"row\">\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"name\">Name</label>\r\n                            <input class=\"form-control input-md\" #name=\"ngModel\" required pattern=\"^[a-zA-Z ]{2,20}$\" name=\"name\" type=\"text\" placeholder=\"Name\" [(ngModel)]=\"personal.name\">\r\n                            <div class=\"alert alert-danger\" [hidden]=\"name.valid\">Name is required and must be valid</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"role\">Role in the Deal</label>\r\n                            <select class=\"form-control select-md\" #role=\"ngModel\" required name=\"role\" type=\"text\" placeholder=\"role\" [(ngModel)]=\"personal.role\">\r\n                                <option *ngFor=\"let rolel of roleList\" value=\"{{rolel}}\">{{rolel}}</option>\r\n                            </select>\r\n                            <div class=\"alert alert-danger\" [hidden]=\"role.valid\">Role is required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"organization\">Organization</label>\r\n                            <input class=\"form-control input-md\" #organization=\"ngModel\" pattern=\"^[a-zA-Z ]{2,50}$\" name=\"organization\" type=\"text\" placeholder=\"Organization\" [(ngModel)]=\"personal.organization\">\r\n                            <div class=\"alert alert-danger\" [hidden]=\"organization.valid\">Invalid organization name</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"telephone\">Telephone</label>\r\n                            <input class=\"form-control input-md\" #telephone=\"ngModel\" pattern=\"^\\s*-?[0-9]{8,15}\\s*$\" name=\"telephone\" type=\"number\" placeholder=\"Telephone\" [(ngModel)]=\"personal.telephone\">\r\n                            <div class=\"alert alert-danger\" [hidden]=\"telephone.valid\">Telephone number must be valid</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"email\">Email</label>\r\n                            <input class=\"form-control input-md\" #email=\"ngModel\" required pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" name=\"email\" type=\"text\"\r\n                                placeholder=\"Email\" [(ngModel)]=\"personal.email\">\r\n                            <div class=\"alert alert-danger\" [hidden]=\"email.valid\">Email is required and must be valid</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-xs-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\" for=\"website\">Website</label>\r\n                            <input class=\"form-control input-md\" #website=\"ngModel\" pattern=\"^((https?|ftp|smtp):\\/\\/)?(www.)?[a-z0-9]+\\.[a-z]+(\\/[a-zA-Z0-9#]+\\/?)*$\" name=\"website\" type=\"text\" placeholder=\"Website\" [(ngModel)]=\"personal.website\">\r\n                            <div class=\"alert alert-danger\" [hidden]=\"website.valid\">Website must be valid</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group text-center\">\r\n                    <button type=\"button\" class=\"btn btn-primary btn-outline-rounded\" [disabled]=\"!personalForm.valid\" (click)=\"goToNext(personalForm)\">\r\n                        Deal Discription\r\n                        <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/project-form/contact-person/contact-person.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-form/contact-person/contact-person.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPersonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPersonComponent = (function () {
    function ContactPersonComponent(router, formService) {
        var _this = this;
        this.router = router;
        this.formService = formService;
        this.roleList = [];
        this.formService.getSelectData().subscribe(function (data) {
            _this.roleList = data.role;
            _this.roleList.unshift('');
        });
    }
    ContactPersonComponent.prototype.ngOnInit = function () {
        if (this.formService.editClick === true) {
            this.personal = this.formService.contact;
        }
        else {
            this.personal = this.formService.getPersonal();
        }
    };
    ContactPersonComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formService.setPersonal(this.personal);
        return true;
    };
    ContactPersonComponent.prototype.goToNext = function (form) {
        if (this.save(form)) {
            // Navigate to the work page
            this.formService.showContactForm = false;
            this.formService.showDealForm = true;
        }
    };
    return ContactPersonComponent;
}());
ContactPersonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact-person',
        template: __webpack_require__("../../../../../src/app/components/project-form/contact-person/contact-person.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project-form/contact-person/contact-person.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */]) === "function" && _b || Object])
], ContactPersonComponent);

var _a, _b;
//# sourceMappingURL=contact-person.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project-form/deal-description/deal-description.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header text-center\">Deal Discription</h2>\r\n<form #workForm=\"ngForm\" class=\"editForm\" novalidate>\r\n  <div class=\"tab-pane fade in active\">\r\n    <br/>\r\n    <div class='row'>\r\n      <div class='col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8'>\r\n        <div class=\"row\">\r\n          <div class='col-xs-12 col-sm-6'>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"dealName\">Deal Name</label>\r\n              <input class=\"form-control input-md\" #dealName=\"ngModel\" required pattern=\"^[a-zA-Z0-9 ]{2,50}$\" name=\"dealName\" type=\"text\"\r\n                placeholder=\"Deal Name\" [(ngModel)]=\"deal.dealName\" (blur)=\"checkDealName(deal.dealName)\">\r\n              <div class=\"alert alert-danger\" [hidden]=\"dealName.valid\">Deal Name is required or Invalid deal name</div>\r\n              <div class=\"alert alert-danger\" [hidden]=\"!this.showAlready\">Deal Name already exists</div>\r\n            </div>\r\n          </div>\r\n          <div class='col-xs-12 col-sm-6'>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"location\">Location</label>\r\n              <input class=\"form-control select-md\" #location=\"ngModel\" required pattern=\"^[a-zA-Z ]{2,30}$\" name=\"location\" type=\"text\"\r\n                placeholder=\"Location\" [(ngModel)]=\"deal.location\">\r\n              <div class=\"alert alert-danger\" [hidden]=\"location.valid\">Location is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class='col-xs-12 col-sm-6'>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"sector\">Sector</label>\r\n              <select (change)=\"onChange($event.target.value)\" class=\"form-control select-md\" #sector=\"ngModel\" required name=\"sector\"\r\n                type=\"text\" placeholder=\"Sector\" [(ngModel)]=\"deal.sector\">\r\n                <option *ngFor=\"let sector of sectorList\" value=\"{{sector}}\">{{sector}}</option>\r\n              </select>\r\n              <div class=\"alert alert-danger\" [hidden]=\"sector.valid\">Sector is required</div>\r\n            </div>\r\n          </div>\r\n          <div [hidden]=\"this.hideIndication\" class='col-xs-12 col-sm-6'>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"indication\">Indication</label>\r\n              <select class=\"form-control select-md\" #indication=\"ngModel\" name=\"indication\" type=\"text\" placeholder=\"Indication\" [(ngModel)]=\"deal.indication\">\r\n                <option *ngFor=\"let indication of indicationList\" value=\"{{indication}}\">{{indication}}</option>\r\n              </select>\r\n              <div class=\"alert alert-danger\" [hidden]=\"indication.valid\">Indication is required</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class='col-xs-12 col-sm-6'>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"stageLead\">Stage of lead program</label>\r\n              <select class=\"form-control select-md\" #stageLead=\"ngModel\" name=\"stageLead\" type=\"text\" placeholder=\"Stage of lead program\"\r\n                [(ngModel)]=\"deal.stageLead\">\r\n                <option *ngFor=\"let stage of stageProgramList\" value=\"{{stage}}\">{{stage}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class='col-xs-12 col-sm-6'>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"financing\">Financing round</label>\r\n              <select class=\"form-control select-md\" #financing=\"ngModel\" name=\"financing\" type=\"text\" placeholder=\"Financing\" [(ngModel)]=\"deal.financing\">\r\n                <option *ngFor=\"let financing of financingList\" value=\"{{financing}}\">{{financing}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class='col-xs-12 col-sm-6'>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"investment\">Investment amount</label>\r\n              <input class=\"form-control select-md\" #investment=\"ngModel\" pattern=\"^.*[^+-.*/].*$\" name=\"investment\" type=\"number\" placeholder=\"Investment amount\"\r\n                [(ngModel)]=\"deal.investment\">\r\n              <div class=\"alert alert-danger\" [hidden]=\"investment.valid\">Invalid amount</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class='col-xs-12 col-sm-12'>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"technology\">Technology Description</label>\r\n              <textarea class=\"form-control select-md\" #technology=\"ngModel\" name=\"technology\" type=\"text-box\" placeholder=\"Technology Description\"\r\n                [(ngModel)]=\"deal.technology\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class='col-xs-12 col-sm-12'>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"programDescription\">Lead program description</label>\r\n              <textarea class=\"form-control select-md\" #programDescription=\"ngModel\" name=\"programDescription\" type=\"text-box\" placeholder=\"Lead program description\"\r\n                [(ngModel)]=\"deal.programDescription\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class='col-xs-12 col-sm-12'>\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"comments\">Other comments</label>\r\n              <textarea class=\"form-control select-md\" #comments=\"ngModel\" name=\"comments\" type=\"text-box\" [(ngModel)]=\"deal.comments\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class='col-xs-12 col-sm-12'>\r\n            <div class=\"form-group text-center\">\r\n              <label class=\"control-label\" for=\"comments\">Upload non-confidential presentation</label>\r\n              <div *ngIf=\"this.alreadyFileUpload\">Uploaded file: {{this.deal.fileName}}</div>\r\n              <div *ngIf=\"currentFileUpload\" class=\"progress\" style=\"width:400px\">\r\n                <div class=\"progress-bar progress-bar-info progress-bar-striped\" role=\"progressbar\" attr.aria-valuenow=\"{{progress.percentage}}\"\r\n                  aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{width:progress.percentage+'%'}\">\r\n                  {{progress.percentage}}%</div>\r\n              </div>\r\n              <input style=\"margin: 0 auto;\" id=\"selectFile\" type=\"file\" name=\"myFile\" placeholder=\"Upload File\">\r\n              \r\n              <button style=\"margin-top:5px;\" class=\"btn btn-info btn-outline-rounded\" (click)=\"uploadFile()\"> Upload File</button>\r\n              <button style=\"margin-top:5px;\" class=\"btn btn-default btn-outline-rounded\" (click)=\"removeFile()\"> Remove File</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group text-center space-20\">\r\n          <button type=\"button\" class=\"btn btn-outline-rounded btn-primary\" (click)=\"goToPrevious(workForm)\">\r\n            <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Contact Person</button>\r\n          <button type=\"button\" class=\"btn btn-outline-rounded btn-primary\" [disabled]=\"!workForm.valid || (progress.percentage !== 100 && progress.percentage !== 0)\"\r\n            (click)=\"goToNext(workForm)\">\r\n            Next\r\n            <span style=\"margin-left:10px;\" class=\"glyphicon glyphicon-arrow-right\"></span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/project-form/deal-description/deal-description.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-form/deal-description/deal-description.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealDescriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formData_model__ = __webpack_require__("../../../../../src/app/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fileupload__ = __webpack_require__("../../../../../src/app/fileupload.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_upload_file_service__ = __webpack_require__("../../../../../src/app/services/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DealDescriptionComponent = (function () {
    function DealDescriptionComponent(uploadService, router, formService, elem, authService) {
        var _this = this;
        this.uploadService = uploadService;
        this.router = router;
        this.formService = formService;
        this.elem = elem;
        this.authService = authService;
        this.progress = { percentage: 0 };
        this.sectorList = [];
        this.indicationList = [];
        this.stageProgramList = [];
        this.financingList = [];
        this.hideIndication = false;
        this.showAlready = false;
        this.alreadyFileUpload = false;
        this.formService.getSelectData().subscribe(function (data) {
            _this.sectorList = data.sector;
            _this.sectorList.unshift('');
            _this.indicationList = data.indication;
            _this.indicationList.unshift('');
            _this.stageProgramList = data.stage;
            _this.stageProgramList.unshift('');
            _this.financingList = data.financing;
            _this.financingList.unshift('');
        });
    }
    DealDescriptionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
        });
        this.formData = this.formService.getFormData();
        if (this.formService.editClick === true) {
            this.formData._id = this.formService.contact._id;
        }
        if (this.formService.editClick === true) {
            this.deal = this.formService.deal;
            if (this.deal.fileName) {
                this.alreadyFileUpload = true;
            }
        }
        else {
            this.deal = this.formService.getAddress();
            this.alreadyFileUpload = false;
        }
        this.formService.file = '';
    };
    DealDescriptionComponent.prototype.save = function (form) {
        if (!form.valid) {
            return false;
        }
        this.formService.setAddress(this.deal);
        return true;
    };
    DealDescriptionComponent.prototype.onChange = function (deviceValue) {
        if (deviceValue.toString() === 'Agro') {
            this.hideIndication = true;
        }
        else {
            this.hideIndication = false;
        }
    };
    DealDescriptionComponent.prototype.goToPrevious = function (form) {
        this.formService.showDealForm = false;
        this.formService.showContactForm = true;
    };
    DealDescriptionComponent.prototype.goToNext = function (form) {
        this.formService.showDealForm = false;
        this.formService.showResultForm = true;
        if (this.save(form)) {
            this.formService.showResultForm = true;
        }
    };
    DealDescriptionComponent.prototype.checkDealName = function (test) {
        // Function from authentication file to check if username is taken
        this.authService.checkDealname(test.toString()).subscribe(function (data) {
            // Check if success true or success false was returned from API
            if (!data.success) {
                // this.showAlready = true;
            }
            else {
            }
        });
    };
    DealDescriptionComponent.prototype.uploadFile = function () {
        this.formData.createdBy = this.username;
        if (this.elem.nativeElement.querySelector('#selectFile').files[0]) {
            var fileSelected = this.elem.nativeElement.querySelector('#selectFile').files[0];
            this.currentFileUpload = new __WEBPACK_IMPORTED_MODULE_5__fileupload__["a" /* FileUpload */](fileSelected);
            this.uploadService.pushFileToStorage(this.currentFileUpload, this.progress);
            this.formService.file = fileSelected.name;
        }
    };
    DealDescriptionComponent.prototype.removeFile = function () {
        this.alreadyFileUpload = false;
        this.formService.file = '';
    };
    return DealDescriptionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__formData_model__["a" /* FormData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__formData_model__["a" /* FormData */]) === "function" && _a || Object)
], DealDescriptionComponent.prototype, "formData", void 0);
DealDescriptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-deal-description',
        template: __webpack_require__("../../../../../src/app/components/project-form/deal-description/deal-description.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project-form/deal-description/deal-description.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_upload_file_service__["a" /* UploadFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_upload_file_service__["a" /* UploadFileService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_form_service__["a" /* FormService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _f || Object])
], DealDescriptionComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=deal-description.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project-form/form-result/form-result.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"this.formService.showThanks || this.showError\" class=\"tab-pane fade in active\">\r\n    <h4 class=\"page-header text-center\">Here is a copy of the information you have entered:</h4>\r\n    <div class='row'>\r\n        <div class='col-xs-offset-1 col-xs-10 col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-8'>\r\n            <div class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">Name: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.name}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">Role: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.role}}\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"formData.organization\" class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">Organization: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.organization}}\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"formData.telephone\" class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">Telephone: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.telephone}}\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"formData.website\" class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">Website: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.website}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"email\">Email: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.email}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"email\">Deal Name: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.dealName}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"email\">Location: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.location}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"email\">Sector: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.sector}}\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"formData.indication\" class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">Indication: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.indication}}\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"formData.stageLead\" class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">Stage of lead program: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.stageLead}}\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"formData.financing\" class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">Financing round: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.financing}}\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"formData.investment\" class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">Investment amount: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.investment}}\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"formData.technology\" class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">Technology Description: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.technology}}\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"formData.technology\" class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">Lead program description: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.programDescription}}\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"formData.comments\" class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">Other comments: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{formData.comments}}\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"this.formService.file\" class=\"row\">\r\n                <div class='col-xs-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"control-label\" for=\"name\">File to upload: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-xs-9 col-sm-10'>\r\n                    {{this.formService.file}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <button type=\"button\" class=\"btn btn-outline-rounded btn-primary\" (click)=\"goToPrevious(isFormValid)\">\r\n            <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span> Deal Discripton</button>\r\n        <button class=\"btn btn-success btn-outline-rounded\" (click)=\"submit()\"> Submit</button>\r\n    </div>\r\n</div>\r\n<div [hidden]=\"!this.formService.showThanks\">\r\n    <div class='row text-center thanks'>\r\n        <h4 class=\"text-center thank\">Thank you for submitting your investment opportunity. The deal will be reviewed shortly and you will be notified\r\n            when the deal is added to our deal flow.</h4>\r\n    </div>\r\n</div>\r\n\r\n<div [hidden]=\"!this.showError\">\r\n    <div class='row text-center thanks'>\r\n        <h4 class=\"text-center thank\">Oops something was not right, try resubmitting with proper details.</h4>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-outline-rounded btn-primary\" (click)=\"goToStart()\">\r\n        <span style=\"margin-right:10px;\" class=\"glyphicon glyphicon-arrow-left\"></span>Go back\r\n    </button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/project-form/form-result/form-result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".thanks {\n  padding: 100px; }\n\n.thank {\n  line-height: 25px; }\n\n@media only screen and (max-width: 700px) {\n  .thanks {\n    padding: 100px 50px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-form/form-result/form-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formData_model__ = __webpack_require__("../../../../../src/app/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_upload_file_service__ = __webpack_require__("../../../../../src/app/services/upload-file.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormResultComponent = (function () {
    function FormResultComponent(formService, router, uploadService, authService) {
        this.formService = formService;
        this.router = router;
        this.uploadService = uploadService;
        this.authService = authService;
        this.isFormValid = false;
        this.progress = { percentage: 0 };
        this.showError = false;
    }
    FormResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formService.showThanks = false;
        this.formData = this.formService.getFormData();
        if (this.formService.editClick === true) {
            this.formData._id = this.formService.contact._id;
        }
        // get profile data
        this.authService.getProfile().subscribe(function (profile) {
            _this.username = profile.user.username;
        });
        this.isFormValid = this.formService.isFormValid();
    };
    FormResultComponent.prototype.goToPrevious = function (form) {
        this.formService.showDealForm = true;
        this.formService.showResultForm = false;
    };
    FormResultComponent.prototype.goToStart = function () {
        this.formService.showContactForm = true;
        this.formService.showDealForm = false;
        this.formService.showResultForm = false;
        this.showError = false;
        this.formService.showThanks = false;
    };
    FormResultComponent.prototype.submit = function () {
        var _this = this;
        this.formData.createdBy = this.username;
        if (this.formService.editClick === true) {
            this.formData._id = this.formService.id;
            if (this.formService.file === '') {
                this.formService.fileName = '';
                this.formService.fileUrl = '';
            }
            this.formData.fileName = this.formService.fileName;
            this.formData.fileUrl = this.formService.fileUrl;
            this.uploadService.editProject(this.formData).subscribe(function (data) {
                if (!data.success) {
                    _this.formService.showThanks = false;
                    _this.showError = true;
                    console.log(data.message); // Return error message
                }
                else {
                    _this.formService.showThanks = true;
                    console.log(data.message); // Return success message
                }
            });
        }
        else {
            if (this.formService.file === '') {
                this.formService.fileName = '';
                this.formService.fileUrl = '';
            }
            this.formData.fileName = this.formService.fileName;
            this.formData.fileUrl = this.formService.fileUrl;
            this.uploadService.newProject(this.formData).subscribe(function (data) {
                if (!data.success) {
                    _this.formService.showThanks = false;
                    _this.showError = true;
                    console.log(data.message); // Return error message
                }
                else {
                    _this.formService.showThanks = true;
                    console.log(data.message); // Return success message
                }
            });
        }
        this.formService.submited = true;
        this.isFormValid = false;
    };
    return FormResultComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__formData_model__["a" /* FormData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__formData_model__["a" /* FormData */]) === "function" && _a || Object)
], FormResultComponent.prototype, "formData", void 0);
FormResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-form-result',
        template: __webpack_require__("../../../../../src/app/components/project-form/form-result/form-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project-form/form-result/form-result.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_upload_file_service__["a" /* UploadFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_upload_file_service__["a" /* UploadFileService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _e || Object])
], FormResultComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=form-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/project-form/project-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\r\n  <!-- Modal content -->\r\n  <div class=\"modal-content\">\r\n    <span class=\"close\" (click)=\"closeModal();\">&times;</span>\r\n    <app-contact-person [hidden]=\"!this.formService.showContactForm\"></app-contact-person>\r\n    <app-deal-description [hidden]=\"!this.formService.showDealForm\"></app-deal-description>\r\n    <app-form-result [hidden]=\"!this.formService.showResultForm\"></app-form-result>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/project-form/project-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content */\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; }\n\n/* The Close Button */\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/project-form/project-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectFormComponent = (function () {
    function ProjectFormComponent(formService, router) {
        this.formService = formService;
        this.router = router;
    }
    ProjectFormComponent.prototype.ngOnInit = function () {
        this.formData = this.formService.getFormData();
        this.formService.showContactForm = true;
    };
    ProjectFormComponent.prototype.closeModal = function () {
        this.formService.editClick = false;
        this.formService.resetFormData();
        this.router.navigate(['/dashboard']);
        if (this.formService.submited === true) {
            for (var i = 0; i < document.getElementsByTagName('form').length; i++) {
                document.getElementsByTagName('form')[i].reset();
            }
        }
        this.formService.showContactForm = true;
        this.formService.showDealForm = false;
        this.formService.showResultForm = false;
        this.formService.submited = false;
        this.formService.showThanks = false;
    };
    return ProjectFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProjectFormComponent.prototype, "formData", void 0);
ProjectFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-project-form',
        template: __webpack_require__("../../../../../src/app/components/project-form/project-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/project-form/project-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_form_service__["a" /* FormService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProjectFormComponent);

var _a, _b;
//# sourceMappingURL=project-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header text-center\">Register Page</h2>\r\n\r\n<!-- Custom Success/Error Message -->\r\n<div class=\"row show-hide-message\">\r\n  <div [ngClass]=\"messageClass\">\r\n    {{ message }}\r\n  </div>\r\n</div>\r\n\r\n<!-- Registration Form -->\r\n<form [formGroup]=\"form\" (submit)=\"onRegisterSubmit()\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-offset-1 col-xs-10 col-sm-offset-2 col-sm-8\">\r\n\r\n\r\n      <!-- Username Input -->\r\n      <div class=\"row\">\r\n        <div class='col-xs-12 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty) || (!usernameValid && form.controls.username.dirty), 'has-success': !form.controls.username.errors && usernameValid}\">\r\n              <input type=\"text\" name=\"username\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Username\" formControlName=\"username\"\r\n                (blur)=\"checkUsername()\" />\r\n              <!-- Validation -->\r\n              <ul class=\"help-block\">\r\n                <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">This field is required</li>\r\n                <li *ngIf=\"form.controls.username.errors?.minlength && form.controls.username.dirty || form.controls.username.errors?.maxlength && form.controls.username.dirty \">Minimum characters: 3, Maximum characters: 15</li>\r\n                <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty\">Username must not have any special characters</li>\r\n                <li *ngIf=\"usernameMessage\">{{ usernameMessage }}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Email Input -->\r\n      <div class=\"row\">\r\n        <div class='col-xs-12 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) || (!emailValid && form.controls.email.dirty), 'has-success': !form.controls.email.errors && emailValid}\">\r\n              <input type=\"text\" name=\"email\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Email\" formControlName=\"email\" (blur)=\"checkEmail()\"\r\n              />\r\n              <!-- Validation -->\r\n              <ul class=\"help-block\">\r\n                <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">This field is required</li>\r\n                <li *ngIf=\"(form.controls.email.errors?.minlength && form.controls.email.dirty || form.controls.email.errors?.maxlength && form.controls.email.dirty ) && form.controls.email.dirty\">Minimum characters: 5, Maximum characters: 30</li>\r\n                <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty\">This must be a valid e-mail</li>\r\n                <li *ngIf=\"emailMessage\">{{ emailMessage}}</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Password Input -->\r\n      <div class=\"row\">\r\n        <div class='col-xs-12 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), 'has-success': !form.controls.password.errors}\">\r\n              <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\"\r\n              />\r\n              <!-- Validation -->\r\n              <ul class=\"help-block\">\r\n                <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">This field is required</li>\r\n                <li *ngIf=\"form.controls.password.errors?.minlength && form.controls.password.dirty || form.controls.password.errors?.maxlength && form.controls.password.dirty \">Minimum characters: 8, Maximum characters: 35</li>\r\n                <li *ngIf=\"form.controls.password.errors?.validatePassword && form.controls.password.dirty\">Password must have at least one uppercase, lowercase, special character, and number</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Confirm Password Input -->\r\n      <div class=\"row\">\r\n        <div class='col-xs-12 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"confirm\">Confirm Password</label>\r\n            <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty) || (form.errors?.matchingPasswords && form.controls.confirm.dirty), 'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\r\n              <input type=\"password\" name=\"confirm\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Confirm Password\" formControlName=\"confirm\"\r\n              />\r\n              <!-- Validation -->\r\n              <ul class=\"help-block\">\r\n                <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">This field is required</li>\r\n                <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">Password do not match</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Role Input -->\r\n      <div class=\"row\">\r\n        <div class='col-xs-12 col-sm-12'>\r\n          <div class=\"form-group\">\r\n            <label for=\"role\">Role</label>\r\n            <div [ngClass]=\"{'has-error': (form.controls.role.errors && form.controls.role.dirty), 'has-success': !form.controls.role.errors}\">\r\n              <!-- <input type=\"password\" name=\"password\" class=\"form-control\" autocomplete=\"off\" placeholder=\"*Password\" formControlName=\"password\" /> -->\r\n              <select placeholder=\"*Role\" class=\"form-control\" id=\"role\" formControlName=\"role\" required>\r\n                <option value=\"investor\">Investor</option>\r\n                <option value=\"enterpreneur\">Entrepreneur</option>\r\n              </select>\r\n              <!-- Validation -->\r\n              <ul class=\"help-block\">\r\n                <li *ngIf=\"form.controls.role.errors?.required && form.controls.role.dirty\">This field is required</li>\r\n                <li *ngIf=\"form.controls.role.errors?.validateRole && form.controls.role.dirty\">Must be Valid Role</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Submit Input -->\r\n      <div class=\"row text-center\">\r\n        <input [disabled]=\"!form.valid || processing || !emailValid || !usernameValid\" type=\"submit\" class=\"btn btn-primary\" value=\"Submit\"\r\n        />\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</form>\r\n<!-- Registration Form /-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.processing = false;
        this.createForm(); // Create Angular 4 Form when component loads
    }
    // Function to create registration form
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            // Email Input
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(5),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(30),
                    this.validateEmail // Custom validation
                ])],
            // Username Input
            username: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(3),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(15),
                    this.validateUsername // Custom validation
                ])],
            // Password Input
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].maxLength(35),
                    this.validatePassword // Custom validation
                ])],
            // Role Input
            role: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required,
                    this.validateRole // Custom validation
                ])],
            // Confirm Password Input
            confirm: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* Validators */].required] // Field is required
        }, { validator: this.matchingPasswords('password', 'confirm') }); // Add custom validator to form for matching passwords
    };
    // Function to disable the registration form
    RegisterComponent.prototype.disableForm = function () {
        this.form.controls['email'].disable();
        this.form.controls['username'].disable();
        this.form.controls['password'].disable();
        this.form.controls['confirm'].disable();
        this.form.controls['role'].disable();
    };
    // Function to enable the registration form
    RegisterComponent.prototype.enableForm = function () {
        this.form.controls['email'].enable();
        this.form.controls['username'].enable();
        this.form.controls['password'].enable();
        this.form.controls['confirm'].enable();
        this.form.controls['role'].enable();
    };
    // Function to validate e-mail is proper format
    RegisterComponent.prototype.validateEmail = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // Test email against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid email
        }
        else {
            return { 'validateEmail': true }; // Return as invalid email
        }
    };
    // Function to validate username is proper format
    RegisterComponent.prototype.validateUsername = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^[a-zA-Z0-9]+$/);
        // Test username against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid username
        }
        else {
            return { 'validateUsername': true }; // Return as invalid username
        }
    };
    // Function to validate password
    RegisterComponent.prototype.validatePassword = function (controls) {
        // Create a regular expression
        var regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
        // Test password against regular expression
        if (regExp.test(controls.value)) {
            return null; // Return as valid password
        }
        else {
            return { 'validatePassword': true }; // Return as invalid password
        }
    };
    // Function to validate password
    RegisterComponent.prototype.validateRole = function (controls) {
        // Test role
        if (controls.value === 'investor' || controls.value === 'enterpreneur') {
            return null; // Return as valid role
        }
        else {
            return { 'validateRole': true }; // Return as invalid role
        }
    };
    // Funciton to ensure passwords match
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            // Check if both fields are the same
            if (group.controls[password].value === group.controls[confirm].value) {
                return null; // Return as a match
            }
            else {
                return { 'matchingPasswords': true }; // Return as error: do not match
            }
        };
    };
    // Function to submit form
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        this.processing = true; // Used to notify HTML that form is in processing, so that it can be disabled
        this.disableForm(); // Disable the form
        // Create user object form user's inputs
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value,
            role: this.form.get('role').value // Role input field
        };
        // Function from authentication service to register user
        this.authService.registerUser(user).subscribe(function (data) {
            // Resposne from registration attempt
            if (!data.success) {
                _this.messageClass = 'alert alert-danger'; // Set an error class
                _this.message = data.message; // Set an error message
                _this.processing = false; // Re-enable submit button
                _this.enableForm(); // Re-enable form
            }
            else {
                _this.messageClass = 'alert alert-success'; // Set a success class
                _this.message = data.message; // Set a success message
                // After 2 second timeout, navigate to the login page
                setTimeout(function () {
                    _this.router.navigate(['/login']); // Redirect to login view
                }, 2000);
            }
        });
    };
    // Function to check if e-mail is taken
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        // Function from authentication file to check if e-mail is taken
        this.authService.checkEmail(this.form.get('email').value).subscribe(function (data) {
            // Check if success true or false was returned from API
            if (!data.success) {
                _this.emailValid = false; // Return email as invalid
                _this.emailMessage = data.message; // Return error message
            }
            else {
                _this.emailValid = true; // Return email as valid
                _this.emailMessage = data.message; // Return success message
            }
        });
    };
    // Function to check if username is available
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        // Function from authentication file to check if username is taken
        this.authService.checkUsername(this.form.get('username').value).subscribe(function (data) {
            // Check if success true or success false was returned from API
            if (!data.success) {
                _this.usernameValid = false; // Return username as invalid
                _this.usernameMessage = data.message; // Return error message
            }
            else {
                _this.usernameValid = true; // Return username as valid
                _this.usernameMessage = data.message; // Return success message
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], RegisterComponent);

var _a, _b, _c;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vclist/vclist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 header-img\">\r\n  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute\r\n    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\r\n    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n  </p>\r\n  <p class=\"text-center\" style=\"margin-top:30px;\">\r\n    <a class=\"btn btn-primary\" href=\"#\" role=\"button\">Join our investor community &raquo;</a>\r\n    <a class=\"btn btn-primary resp-btn\" href=\"#\" role=\"button\">Submit your business plan &raquo;</a>\r\n  </p>\r\n</div>\r\n\r\n<div class=\"row body-style\">\r\n  <form class=\"col-md-3\">\r\n    <div class=\"form-group sticky\">\r\n      <div class=\"multiselect col-md-12 filter hide-box\">\r\n        <div class=\"selectBox hide-box\" (click)=\"showCheckboxes('location')\">\r\n          <select>\r\n            <option>Location</option>\r\n          </select>\r\n          <div class=\"overSelect\"></div>\r\n        </div>\r\n        <div class=\"hide-box\" id=\"locationCheckboxes\">\r\n          <label class=\"hide-box\" *ngFor=\"let location of country\">\r\n            <input class=\"hide-box\" type=\"checkbox\" name=\"locati\" (click)=\"filterList() \" />{{ location==''?'Location':location }}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"multiselect col-md-12 filter\">\r\n        <div class=\"selectBox\" (click)=\"showCheckboxes('focus')\">\r\n          <select>\r\n            <option>Investment Focus</option>\r\n          </select>\r\n          <div class=\"overSelect\"></div>\r\n        </div>\r\n        <div class=\"hide-box\" id=\"focusCheckboxes\">\r\n          <label class=\"hide-box\" *ngFor=\"let foc of focus\">\r\n            <input class=\"hide-box\" type=\"checkbox\" name=\"focu\" (click)=\"filterList() \" />{{ foc==''?'Investment Focus':foc }}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"multiselect col-md-12 filter\">\r\n        <div class=\"selectBox\" (click)=\"showCheckboxes('indication')\">\r\n          <select>\r\n            <option>Prefered Indication</option>\r\n          </select>\r\n          <div class=\"overSelect\"></div>\r\n        </div>\r\n        <div class=\"hide-box\" id=\"indicationCheckboxes\">\r\n          <label class=\"hide-box\" *ngFor=\"let indicat of indication\">\r\n            <input class=\"hide-box\" type=\"checkbox\" name=\"indica\" (click)=\"filterList() \" />{{ indicat==''?'Prefered Indication':indicat }}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"multiselect col-md-12 filter\">\r\n        <div class=\"selectBox\" (click)=\"showCheckboxes('investment')\">\r\n          <select>\r\n            <option>Investment Stage</option>\r\n          </select>\r\n          <div class=\"overSelect\"></div>\r\n        </div>\r\n        <div class=\"hide-box\" id=\"investmentCheckboxes\">\r\n          <label class=\"hide-box\" *ngFor=\"let invest of investment\">\r\n            <input class=\"hide-box\" type=\"checkbox\" name=\"inves\" (click)=\"filterList() \" />{{ invest==''?'Investment Stage':invest }}</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"display-filter-labels\">\r\n        <div class=\"location-labels\" *ngFor=\"let location of locationLabels\">{{location}}\r\n          <button type=\"button\" class=\"close left\" (click)=\"clearSpecificFilter(location);\">&times;</button>\r\n        </div>\r\n        <div class=\"focus-labels\" *ngFor=\"let focus of focusLabels\">{{focus}}\r\n          <button type=\"button\" class=\"close left\" (click)=\"clearSpecificFilter(focus);\">&times;</button>\r\n        </div>\r\n        <div class=\"indication-labels\" *ngFor=\"let indication of indicationLabels\">{{indication}}\r\n          <button type=\"button\" class=\"close left\" (click)=\"clearSpecificFilter(indication);\">&times;</button>\r\n        </div>\r\n        <div class=\"investment-labels\" *ngFor=\"let investment of investmentLabels\">{{investment}}\r\n          <button type=\"button\" class=\"close left\" (click)=\"clearSpecificFilter(investment);\">&times;</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xs-12 filter-label text-center\">\r\n        <button class=\"btn btn-primary clear-filter\" style=\"margin-top:10px;\" (click)=\"clearFilter()\">Clear Filter</button>\r\n      </div>\r\n\r\n      <div class=\"col-xs-12 filter-label\">\r\n        <h3 class=\"text-center\">Filtered VCs {{vclists.length}}\r\n        </h3>\r\n        <hr>\r\n        <p class=\"text-center\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\r\n          aliqua.\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"wrap\">\r\n\r\n    <div *ngFor=\"let vclist of vclists\">\r\n      <div [ngClass]=\"{'background-change' : vclist.Featured }\" class=\"container col-md-9\">\r\n        <div [ngClass]=\"{'featured' : vclist.Featured }\" class=\"list\">\r\n          <div class=\"row card\">\r\n            <div class=\"col-xs-3\">\r\n              <img class=\"feature-logo\" *ngIf=\"vclist.Featured\" src=\"../assets/images/feature1.png\">\r\n              <img class=\"sh-styles\" src=\"assets/images/company-logos/{{vclist['VC Name']}}.png\" (error)=\"this.error=null; updateUrl($event)\"\r\n                alt=\"company logo\">\r\n            </div>\r\n            <div class=\"col-xs-6 slide-name\">\r\n              <a class=\"no-underline\" href=\"{{vclist.Website}}\" target=\"_blank\">\r\n                <h3 class=\"text-center small-name\">{{vclist['VC Name']}}</h3>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-xs-3 show-btn\">\r\n              <p class=\"website\">\r\n                <a class=\"website btn btn-primary\" href=\"{{vclist.Website}}\" role=\"button\" target=\"_blank\">visit website &raquo;</a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <table class=\"table\">\r\n              <tr *ngIf=\"vclist['Investment Focus']\">\r\n                <td class=\"vr\">Investment Focus:</td>\r\n                <td>{{vclist['Investment Focus'].split(',').join(' |')}}</td>\r\n              </tr>\r\n              <tr *ngIf=\"vclist['Investment Stage']\">\r\n                <td class=\"vr\">Investment Stage:</td>\r\n                <td>{{vclist['Investment Stage'].split(',').join(' |')}}</td>\r\n              </tr>\r\n              <tr *ngIf=\"vclist['Fund Status']\">\r\n                <td class=\"vr\">Fund Status:</td>\r\n                <td>{{vclist['Fund Status']}}</td>\r\n              </tr>\r\n              <tr *ngIf=\"vclist['Special Criteria']\">\r\n                <td class=\"vr\">Special Criteria:</td>\r\n                <td>{{vclist['Special Criteria']}}</td>\r\n              </tr>\r\n              <tr *ngIf=\"vclist.Research[' Industry Partner']\">\r\n                <td class=\"vr\">Research/Industry Partner:</td>\r\n                <td>{{vclist.Research[' Industry Partner'].split(',').join(' |')}}</td>\r\n              </tr>\r\n              <tr *ngIf=\"vclist.Location\">\r\n                <td class=\"vr\">Location:</td>\r\n                <td>{{vclist.Location.join(' | ')}}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/vclist/vclist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".left {\n  float: left; }\n\na {\n  color: #3C84C4; }\n\n.close {\n  margin-right: 5px; }\n\n.location-labels {\n  display: inline-block;\n  border: 1px solid grey;\n  border-radius: 5px;\n  height: 35px !important;\n  margin-right: 15px;\n  letter-spacing: 1.2px;\n  padding: 6px 6px;\n  overflow: hidden;\n  background: #cccccc;\n  margin-top: 10px; }\n\n.focus-labels {\n  display: inline-block;\n  border: 1px solid grey;\n  border-radius: 5px;\n  height: 35px !important;\n  margin-right: 15px;\n  letter-spacing: 1.2px;\n  padding: 6px 6px;\n  overflow: hidden;\n  background: #cccccc;\n  margin-top: 10px; }\n\n.indication-labels {\n  display: inline-block;\n  border: 1px solid grey;\n  border-radius: 5px;\n  height: 35px !important;\n  margin-right: 15px;\n  letter-spacing: 1.2px;\n  padding: 6px 6px;\n  overflow: hidden;\n  background: #cccccc;\n  margin-top: 10px; }\n\n.investment-labels {\n  display: inline-block;\n  border: 1px solid grey;\n  border-radius: 5px;\n  height: 35px !important;\n  margin-right: 15px;\n  letter-spacing: 1.2px;\n  padding: 6px 6px;\n  overflow: hidden;\n  background: #cccccc;\n  margin-top: 10px; }\n\ninput {\n  margin: 4px 8px 0; }\n\n.clear-filter {\n  z-index: 0 !important; }\n\n.overSelect {\n  cursor: pointer; }\n\n.selectBox select {\n  width: 108%;\n  height: 40px;\n  margin-right: 15px;\n  display: inline-block;\n  letter-spacing: 1.2px;\n  padding: 6px 6px;\n  overflow: hidden;\n  z-index: 1;\n  cursor: pointer;\n  border-radius: 5px;\n  color: cornflowerblue;\n  background: white;\n  border-color: cornflowerblue; }\n\n.container {\n  border-left: 4px solid darkblue;\n  float: right; }\n\n.multiselect {\n  width: 200px; }\n\n.background-change {\n  background-color: #9ec5e6;\n  border-bottom: 4px solid darkblue;\n  padding-bottom: 30px; }\n\n.selectBox {\n  position: relative; }\n\n.selectBox select {\n  font-family: arial; }\n\n.overSelect {\n  width: 108%;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n#investmentCheckboxes,\n#locationCheckboxes,\n#indicationCheckboxes,\n#focusCheckboxes {\n  display: none;\n  border: 1px #dadada solid;\n  background: white;\n  position: absolute;\n  z-index: 1; }\n\n#investmentCheckboxes label {\n  display: block;\n  font-weight: 400;\n  font-family: Arial, Helvetica, sans-serif;\n  width: 182px; }\n\n#locationCheckboxes label {\n  display: block;\n  font-weight: 400;\n  font-family: Arial, Helvetica, sans-serif;\n  width: 182px; }\n\n#indicationCheckboxes label {\n  display: block;\n  font-weight: 400;\n  font-family: Arial, Helvetica, sans-serif;\n  width: 182px; }\n\n#focusCheckboxes label {\n  display: block;\n  font-weight: 400;\n  font-family: Arial, Helvetica, sans-serif;\n  width: 182px; }\n\n#investmentCheckboxes label:hover {\n  background-color: #1e90ff; }\n\n#locationCheckboxes label:hover {\n  background-color: #1e90ff; }\n\n#indicationCheckboxes label:hover {\n  background-color: #1e90ff; }\n\n#focusCheckboxes label:hover {\n  background-color: #1e90ff; }\n\nbody {\n  margin: 0; }\n\n.small-name {\n  font-weight: bold; }\n\n.fixed {\n  position: fixed;\n  top: 0; }\n\n.filter {\n  margin-top: 10px; }\n\nhr {\n  border-top: 1px solid #cbcbcb; }\n\n.wrap {\n  border-left: 2px solid darkblue;\n  position: relative;\n  height: 100%; }\n\n.banner-btns {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.overlay-buttons {\n  margin: 15px auto; }\n\n.btn-left {\n  text-align: left !important; }\n\n.filtered-item {\n  margin-bottom: 15px; }\n\n.body-style {\n  background: #f5f5f5; }\n\n.header-img {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/banner.jpg") + ");\n  background-size: cover;\n  background-position: center;\n  min-height: 360px;\n  border-radius: 0px;\n  padding: 20px;\n  color: white; }\n\n.dropdown-content {\n  color: #333333; }\n\n.table {\n  margin-bottom: 0px;\n  font-size: 16px; }\n\n.sh-styles {\n  float: left;\n  margin: 15px 0;\n  max-height: 45px;\n  max-width: 180px; }\n\n.website {\n  float: right;\n  margin: 9px 0; }\n\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  border-top: none; }\n\n.no-underline {\n  text-decoration: none; }\n\n.card {\n  border-bottom: 1px solid #333333; }\n\n.field {\n  padding-top: 12px; }\n\n.vr {\n  border-right: 1px solid #333333;\n  width: 200px;\n  font-weight: bold; }\n\n.list {\n  position: relative;\n  margin-top: 60px !important;\n  background: white;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  box-shadow: rgba(0, 0, 0, 0.75) 10px 10px 23px -4px; }\n\n.btn {\n  height: 34px;\n  margin-right: 15px;\n  position: relative;\n  display: inline-block;\n  letter-spacing: 1.2px;\n  padding: 6px 6px;\n  text-align: center;\n  overflow: hidden;\n  z-index: 1;\n  cursor: pointer; }\n\n.btn:focus {\n  outline: none; }\n\n.btn-primary {\n  background: cornflowerblue;\n  border-color: cornflowerblue;\n  color: white; }\n\n.btn-primary:hover {\n  background: #3a5c97; }\n\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.form-group {\n  z-index: 1;\n  max-width: 242px;\n  float: left;\n  margin-top: 60px;\n  height: 94%; }\n\n.featured {\n  position: relative; }\n\n.feature-logo {\n  height: 30px;\n  margin: -60px 0px 0px -30px;\n  float: left; }\n\n@media only screen and (max-width: 1000px) {\n  .filter {\n    margin: 10px auto; }\n  .form-group {\n    position: relative;\n    float: none;\n    max-width: 100%; }\n  .list {\n    width: 100%; }\n  .sticky {\n    position: relative !important; }\n  .container {\n    float: none; }\n  .filter-label {\n    float: none; } }\n\n@media only screen and (max-width: 552px) {\n  .resp-btn {\n    margin-top: 20px; } }\n\n@media only screen and (max-width: 450px) {\n  .vr {\n    width: 100px; } }\n\n@media only screen and (max-width: 620px) {\n  .show-btn {\n    display: none; }\n  .slide-name {\n    float: right; }\n  .small-name {\n    font-size: 18px; }\n  .sh-styles {\n    max-width: 140px; } }\n\n.location-labels {\n  height: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vclist/vclist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VclistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vclist_service__ = __webpack_require__("../../../../../src/app/services/vclist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_vcfilter_pipe__ = __webpack_require__("../../../../../src/app/pipes/vcfilter.pipe.ts");
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
    function VclistComponent(vclistService, metaService, listFilter, router) {
        var _this = this;
        this.vclistService = vclistService;
        this.metaService = metaService;
        this.listFilter = listFilter;
        this.router = router;
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
        this.locationLabels = [];
        this.indicationLabels = [];
        this.focusLabels = [];
        this.investmentLabels = [];
        this.listOpen = false;
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
        var self = this;
        document.addEventListener('click', function (event) {
            if (event.srcElement.className.toString() !== 'overSelect' &&
                event.srcElement.className.toString() !== 'hide-box' && self.router.url.toString() === '/vc_list') {
                self.onBlur();
            }
        });
    };
    VclistComponent.prototype.onBlur = function () {
        var locationCheckboxes = document.getElementById('locationCheckboxes');
        var focusCheckboxes = document.getElementById('focusCheckboxes');
        var indicationCheckboxes = document.getElementById('indicationCheckboxes');
        var investmentCheckboxes = document.getElementById('investmentCheckboxes');
        if (locationCheckboxes.style.display) {
            locationCheckboxes.style.display = 'none';
            this.location = false;
        }
        if (focusCheckboxes.style.display) {
            focusCheckboxes.style.display = 'none';
            this.focus1 = false;
        }
        if (indicationCheckboxes.style.display) {
            indicationCheckboxes.style.display = 'none';
            this.indication1 = false;
        }
        if (investmentCheckboxes.style.display) {
            investmentCheckboxes.style.display = 'none';
            this.investment1 = false;
        }
    };
    VclistComponent.prototype.updateUrl = function (event) {
        event.target.src = event.target.currentSrc.slice(0, -3) + 'png';
        return;
    };
    VclistComponent.prototype.filterList = function () {
        var location = $("input[name=locati]:checked");
        var focus = $("input[name=focu]:checked");
        var indication = $("input[name=indica]:checked");
        var investment = $("input[name=inves]:checked");
        var locationArray = [];
        var investmentArray = [];
        var indicationArray = [];
        var focusArray = [];
        if (investment.length !== 0) {
            for (var i = 0; i < investment.length; i++) {
                investmentArray.push(investment[i].nextSibling.data);
            }
        }
        if (location.length !== 0) {
            for (var i = 0; i < location.length; i++) {
                locationArray.push(location[i].nextSibling.data);
            }
        }
        if (focus.length !== 0) {
            for (var i = 0; i < focus.length; i++) {
                focusArray.push(focus[i].nextSibling.data);
            }
        }
        if (indication.length !== 0) {
            for (var i = 0; i < indication.length; i++) {
                indicationArray.push(indication[i].nextSibling.data);
            }
        }
        this.indicationLabels = indicationArray;
        this.focusLabels = focusArray;
        this.locationLabels = locationArray;
        this.investmentLabels = investmentArray;
        this.vclists = this.listFilter.transform(this.saveList, locationArray, focusArray, indicationArray, investmentArray);
    };
    VclistComponent.prototype.clearFilter = function () {
        var location = $("input[name=locati]:checked");
        var focus = $("input[name=focu]:checked");
        var indication = $("input[name=indica]:checked");
        var investment = $("input[name=inves]:checked");
        if (location) {
            for (var i = 0; i < location.length; i++) {
                location[i].checked = false;
            }
        }
        if (focus) {
            for (var i = 0; i < focus.length; i++) {
                focus[i].checked = false;
            }
        }
        if (indication) {
            for (var i = 0; i < indication.length; i++) {
                indication[i].checked = false;
            }
        }
        if (investment) {
            for (var i = 0; i < investment.length; i++) {
                investment[i].checked = false;
            }
        }
        this.indicationLabels = [];
        this.focusLabels = [];
        this.locationLabels = [];
        this.investmentLabels = [];
        this.vclists = this.saveList;
    };
    VclistComponent.prototype.clearSpecificFilter = function (value) {
        var location = $("input[name=locati]:checked");
        var focus = $("input[name=focu]:checked");
        var indication = $("input[name=indica]:checked");
        var investment = $("input[name=inves]:checked");
        if (location) {
            var locationIndex = this.locationLabels.indexOf(value);
            for (var i = 0; i < location.length; i++) {
                if (location[i].nextSibling.data === value) {
                    location[i].checked = false;
                    this.locationLabels.splice(locationIndex, 1);
                }
            }
        }
        if (focus) {
            var focusIndex = this.focusLabels.indexOf(value);
            for (var i = 0; i < focus.length; i++) {
                if (focus[i].nextSibling.data === value) {
                    focus[i].checked = false;
                    this.focusLabels.splice(focusIndex, 1);
                }
            }
        }
        if (indication) {
            var indicationIndex = this.indicationLabels.indexOf(value);
            for (var i = 0; i < indication.length; i++) {
                if (indication[i].nextSibling.data === value) {
                    indication[i].checked = false;
                    this.indicationLabels.splice(indicationIndex, 1);
                }
            }
        }
        if (investment) {
            var investmentIndex = this.investmentLabels.indexOf(value);
            for (var i = 0; i < investment.length; i++) {
                if (investment[i].nextSibling.data === value) {
                    investment[i].checked = false;
                    this.investmentLabels.splice(investmentIndex, 1);
                }
            }
        }
        this.filterList();
    };
    VclistComponent.prototype.showCheckboxes = function (type) {
        this.listOpen = true;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vclist',
        template: __webpack_require__("../../../../../src/app/components/vclist/vclist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vclist/vclist.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_4__pipes_vcfilter_pipe__["a" /* VcfilterPipe */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_vclist_service__["a" /* VclistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_vclist_service__["a" /* VclistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* Meta */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__pipes_vcfilter_pipe__["a" /* VcfilterPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__pipes_vcfilter_pipe__["a" /* VcfilterPipe */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], VclistComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=vclist.component.js.map

/***/ }),

/***/ "../../../../../src/app/fileupload.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUpload; });
var FileUpload = (function () {
    function FileUpload(file) {
        this.file = file;
    }
    return FileUpload;
}());

//# sourceMappingURL=fileupload.js.map

/***/ }),

/***/ "../../../../../src/app/formData.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormData; });
/* unused harmony export Personal */
/* unused harmony export Deal */
var FormData = (function () {
    function FormData() {
        this.name = '';
        this.role = '';
        this.organization = '';
        this.telephone = null;
        this.email = '';
        this.website = '';
        this.work = '';
        this.dealName = '';
        this.location = '';
        this.sector = '';
        this.indication = '';
        this.stageLead = '';
        this.financing = '';
        this.investment = '';
        this.technology = '';
        this.programDescription = '';
        this.comments = '';
        this.fileUrl = '';
        this.fileName = '';
        this.createdBy = '';
        this.views = null;
        this.likedBy = [];
        this.viewedBy = [];
    }
    FormData.prototype.clear = function () {
        delete this._id;
        this.name = '';
        this.organization = '';
        delete this.telephone;
        this.website = '';
        this.role = '';
        this.email = '';
        this.work = '';
        this.dealName = '';
        this.location = '';
        this.sector = '';
        this.indication = '';
        this.stageLead = '';
        this.financing = '';
        this.investment = '';
        this.technology = '';
        this.programDescription = '';
        this.comments = '';
        this.fileUrl = '';
        this.fileName = '';
        this.createdBy = '';
        delete this.views;
        this.likedBy = [];
        this.viewedBy = [];
    };
    return FormData;
}());

var Personal = (function () {
    function Personal() {
        this.name = '';
        this.role = '';
        this.organization = '';
        this.website = '';
        this.email = '';
    }
    return Personal;
}());

var Deal = (function () {
    function Deal() {
        this.dealName = '';
        this.location = '';
        this.sector = '';
        this.indication = '';
        this.stageLead = '';
        this.financing = '';
        this.investment = '';
        this.technology = '';
        this.programDescription = '';
        this.comments = '';
        this.fileName = '';
    }
    return Deal;
}());

//# sourceMappingURL=formData.model.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to check if user is authorized to view route
    AuthGuard.prototype.canActivate = function (router, state) {
        // Check if user is logge din
        if (this.authService.loggedIn()) {
            return true; // Return true: User is allowed to view route
        }
        else {
            this.redirectUrl = state.url; // Grab previous urul
            this.router.navigate(['/login']); // Return error and route to login page
            return false; // Return false: user not authorized to view page
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/notAuth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthGuard = (function () {
    function NotAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // Function to determine whether user is authorized to view route
    NotAuthGuard.prototype.canActivate = function () {
        // Check if user is logged in
        if (this.authService.loggedIn()) {
            this.router.navigate(['/']); // Return error, route to home
            return false; // Return false: user not allowed to view route
        }
        else {
            return true; // Return true: user is allowed to view route
        }
    };
    return NotAuthGuard;
}());
NotAuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], NotAuthGuard);

var _a, _b;
//# sourceMappingURL=notAuth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/dashboard.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardPipe = (function () {
    function DashboardPipe() {
    }
    DashboardPipe.prototype.transform = function (items, location, focus, indication, investment) {
        if (items && items.length) {
            return items.filter(function (item) {
                if (item.Featured) {
                    return true;
                }
                if ((location.length && !location.find(function (b) { return item.Location[0].includes(b); }))) {
                    return false;
                }
                if ((focus.length && !focus.find(function (b) { return item['Investment Focus'].includes(b); }))) {
                    return false;
                }
                if ((indication.length && !indication.find(function (b) { return item['Prefered Indication'].includes(b); }))) {
                    return false;
                }
                if ((investment.length && !investment.find(function (b) { return item['Investment Stage'].includes(b); }))) {
                    return false;
                }
                return true;
            });
        }
        else {
            return items;
        }
    };
    return DashboardPipe;
}());
DashboardPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'dashboard'
    })
], DashboardPipe);

//# sourceMappingURL=dashboard.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/vcfilter.pipe.ts":
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
                if (item.Featured) {
                    return true;
                }
                if ((location.length && !location.find(function (b) { return item.Location[0].includes(b); }))) {
                    return false;
                }
                if ((focus.length && !focus.find(function (b) { return item['Investment Focus'].includes(b); }))) {
                    return false;
                }
                if ((indication.length && !indication.find(function (b) { return item['Prefered Indication'].includes(b); }))) {
                    return false;
                }
                if ((investment.length && !investment.find(function (b) { return item['Investment Stage'].includes(b); }))) {
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'vcfilter'
    })
], VcfilterPipe);

//# sourceMappingURL=vcfilter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.domain = ""; // Development Domain - Not Needed in Production
    }
    // Function to create headers, add token, to be used in HTTP requests
    AuthService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken // Attach token
            })
        });
    };
    // Function to get token from client local storage
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
    };
    // Function to register user accounts
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + '/authentication/register', user).map(function (res) { return res.json(); });
    };
    // Function to check if username is taken
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + '/authentication/checkUsername/' + username.toLowerCase()).map(function (res) { return res.json(); });
    };
    // Function to check if dealname is taken
    AuthService.prototype.checkDealname = function (dealname) {
        return this.http.get(this.domain + '/authentication/checkDealname/' + dealname.toLowerCase()).map(function (res) { return res.json(); });
    };
    // Function to check if e-mail is taken
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + '/authentication/checkEmail/' + email.toLowerCase()).map(function (res) { return res.json(); });
    };
    // Function to login user
    AuthService.prototype.login = function (user) {
        return this.http.post(this.domain + '/authentication/login', user).map(function (res) { return res.json(); });
    };
    // Function to logout
    AuthService.prototype.logout = function () {
        this.authToken = null; // Set token to null
        this.user = null; // Set user to null
        localStorage.clear(); // Clear local storage
    };
    // Function to store user's data in client local storage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token); // Set token in local storage
        localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
        this.authToken = token; // Assign token to be used elsewhere
        this.user = user; // Set user to be used elsewhere
    };
    // Function to get user's Dashboard data
    AuthService.prototype.getDashboard = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + '/authentication/dashboard', this.options).map(function (res) { return res.json(); });
    };
    // Function to get user's Profile data
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.get(this.domain + '/authentication/profile', this.options).map(function (res) { return res.json(); });
    };
    // Function to delete a Project
    AuthService.prototype.deleteProject = function (id) {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.delete(this.domain + '/projects/deleteProject/' + id, this.options).map(function (res) { return res.json(); });
    };
    // Function to check if user is logged in
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formData_model__ = __webpack_require__("../../../../../src/app/formData.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_service__ = __webpack_require__("../../../../../src/app/services/workflow.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__workflow_model__ = __webpack_require__("../../../../../src/app/workflow.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormService = (function () {
    function FormService(workflowService, http) {
        this.workflowService = workflowService;
        this.http = http;
        this.formData = new __WEBPACK_IMPORTED_MODULE_1__formData_model__["a" /* FormData */]();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
        this.showProjectForm = false;
        this.showContactForm = false;
        this.showDealForm = false;
        this.showResultForm = false;
        this.submited = false;
        this.showThanks = false;
        this.editClick = false;
        this.showError = false;
    }
    FormService.prototype.getSelectData = function () {
        return this.http.get('../assets/form.json')
            .map(function (res) { return res.json(); });
    };
    FormService.prototype.upload = function (formData, name) {
        return this.http.post('https://upload.uploadcare.com/base/' + name, formData)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* Observable */].throw(error); });
    };
    FormService.prototype.getPersonal = function () {
        // Return the Personal data
        var personal = {
            _id: this.formData._id,
            name: this.formData.name,
            role: this.formData.role,
            organization: this.formData.organization,
            telephone: this.formData.telephone,
            website: this.formData.website,
            email: this.formData.email
        };
        return personal;
    };
    FormService.prototype.setPersonal = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData._id = data._id;
        this.formData.name = data.name;
        this.formData.role = data.role;
        this.formData.organization = data.organization;
        this.formData.telephone = data.telephone;
        this.formData.website = data.website;
        this.formData.email = data.email;
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_model__["a" /* STEPS */].contact_person);
    };
    FormService.prototype.getWork = function () {
        // Return the work type
        return this.formData.work;
    };
    FormService.prototype.setWork = function (data) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_model__["a" /* STEPS */].deal_discription);
    };
    FormService.prototype.getAddress = function () {
        // Return the Address data
        var deal = {
            dealName: this.formData.dealName,
            location: this.formData.location,
            sector: this.formData.sector,
            indication: this.formData.indication,
            stageLead: this.formData.stageLead,
            financing: this.formData.financing,
            investment: this.formData.investment,
            technology: this.formData.technology,
            programDescription: this.formData.programDescription,
            comments: this.formData.comments,
            fileName: this.formData.fileName
        };
        return deal;
    };
    FormService.prototype.setAddress = function (data) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.dealName = data.dealName;
        this.formData.location = data.location;
        this.formData.sector = data.sector;
        this.formData.indication = data.indication;
        this.formData.stageLead = data.stageLead;
        this.formData.financing = data.financing;
        this.formData.investment = data.investment;
        this.formData.technology = data.technology;
        this.formData.programDescription = data.programDescription;
        this.formData.comments = data.comments;
        this.formData.fileName = data.fileName;
        this.workflowService.validateStep(__WEBPACK_IMPORTED_MODULE_3__workflow_model__["a" /* STEPS */].deal_discription);
    };
    FormService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormService.prototype.resetFormData = function () {
        // Return the form data after all this.* members had been reset
        this.workflowService.resetSteps();
        this.formData.clear();
        this.isPersonalFormValid = this.isAddressFormValid = false;
        return this.formData;
    };
    FormService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isAddressFormValid;
    };
    return FormService;
}());
FormService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _b || Object])
], FormService);

var _a, _b;
//# sourceMappingURL=form.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/upload-file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadFileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_service__ = __webpack_require__("../../../../../src/app/services/form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__("../../../../firebase/firebase-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadFileService = (function () {
    function UploadFileService(db, http, authService, formService) {
        this.db = db;
        this.http = http;
        this.authService = authService;
        this.formService = formService;
        this.basePath = '/uploads';
    }
    // Function to create headers, add token, to be used in HTTP requests
    UploadFileService.prototype.createAuthenticationHeaders = function () {
        this.loadToken(); // Get token so it can be attached to headers
        // Headers configuration options
        this.options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["RequestOptions"]({
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken // Attach token
            })
        });
    };
    // Function to get token from client local storage
    UploadFileService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token'); // Get token and asssign to variable to be used elsewhere
    };
    UploadFileService.prototype.pushFileToStorage = function (fileUpload, progress) {
        var _this = this;
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + fileUpload.file.name).put(fileUpload.file);
        var fileUrl = uploadTask.on(__WEBPACK_IMPORTED_MODULE_5_firebase__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // in progress
            var snap = snapshot;
            progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, function (error) {
            // fail
            console.log(error);
        }, function () {
            // success
            fileUpload.url = uploadTask.snapshot.downloadURL;
            fileUpload.name = fileUpload.file.name;
            _this.formService.fileUrl = fileUpload.url;
            _this.formService.fileName = fileUpload.name;
        });
    };
    UploadFileService.prototype.newProject = function (data) {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.post(this.authService.domain + '/projects/newProject', data, this.options).map(function (res) { return res.json(); });
    };
    UploadFileService.prototype.editProject = function (data) {
        this.createAuthenticationHeaders(); // Create headers before sending to API
        return this.http.put(this.authService.domain + '/projects/editProject', data, this.options).map(function (res) { return res.json(); });
    };
    UploadFileService.prototype.saveFileData = function (fileUpload) {
        this.db.list(this.basePath + "/").push(fileUpload);
    };
    return UploadFileService;
}());
UploadFileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__form_service__["a" /* FormService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__form_service__["a" /* FormService */]) === "function" && _d || Object])
], UploadFileService);

var _a, _b, _c, _d;
//# sourceMappingURL=upload-file.service.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], VclistService);

var _a;
//# sourceMappingURL=vclist.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/workflow-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workflow_service__ = __webpack_require__("../../../../../src/app/services/workflow.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkflowGuard = (function () {
    function WorkflowGuard(router, workflowService) {
        this.router = router;
        this.workflowService = workflowService;
    }
    WorkflowGuard.prototype.canActivate = function (route, state) {
        var path = route.routeConfig.path;
        return this.verifyWorkFlow(path);
    };
    WorkflowGuard.prototype.verifyWorkFlow = function (path) {
        console.log("Entered '" + path + "' path.");
        // If any of the previous steps is invalid, go back to the first invalid step
        var firstPath = this.workflowService.getFirstInvalidStep(path);
        if (firstPath.length > 0) {
            console.log("Redirected to '" + firstPath + "' path which it is the first invalid step.");
            var url = "/" + firstPath;
            this.router.navigate([url]);
            return false;
        }
        ;
        return true;
    };
    return WorkflowGuard;
}());
WorkflowGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__workflow_service__["a" /* WorkflowService */]) === "function" && _b || Object])
], WorkflowGuard);

var _a, _b;
//# sourceMappingURL=workflow-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/workflow.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkflowService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__workflow_model__ = __webpack_require__("../../../../../src/app/workflow.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WorkflowService = (function () {
    function WorkflowService() {
        this.workflow = [
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].contact_person, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].deal_discription, valid: false },
            { step: __WEBPACK_IMPORTED_MODULE_1__workflow_model__["a" /* STEPS */].form_result, valid: false }
        ];
    }
    WorkflowService.prototype.validateStep = function (step) {
        // If the state is found, set the valid field to true
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    };
    return WorkflowService;
}());
WorkflowService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], WorkflowService);

//# sourceMappingURL=workflow.service.js.map

/***/ }),

/***/ "../../../../../src/app/workflow.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STEPS; });
var STEPS = {
    contact_person: 'contact_person',
    deal_discription: 'deal_discription',
    form_result: 'form_result'
};
//# sourceMappingURL=workflow.model.js.map

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
    production: false,
    firebase: {
        apiKey: 'AIzaSyAqCL3HM6QL1qCJ6mIjxE7jlxHoq4y-Y0Y',
        authDomain: 'virtual-biotech.firebaseapp.com',
        databaseURL: 'https://virtual-biotech.firebaseio.com',
        projectId: 'virtual-biotech',
        storageBucket: 'gs://virtual-biotech.appspot.com',
        messagingSenderId: '1067100368417'
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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