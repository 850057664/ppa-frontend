(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/authentication-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/authentication-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _landing_layout_landing_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-layout/landing-layout.component */ "./src/app/authentication/landing-layout/landing-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");






const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: {
            title: 'Login'
        }
    },
    {
        path: 'landing',
        component: _landing_layout_landing_layout_component__WEBPACK_IMPORTED_MODULE_2__["LandingLayoutComponent"],
        data: {
            title: 'landing'
        }
    },
];
class AuthenticationRoutingModule {
}
AuthenticationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationRoutingModule });
AuthenticationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticationRoutingModule_Factory(t) { return new (t || AuthenticationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication-routing.module */ "./src/app/authentication/authentication-routing.module.ts");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-checkbox.js");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/alert */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-alert.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _landing_layout_landing_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./landing-layout/landing-layout.component */ "./src/app/authentication/landing-layout/landing-layout.component.ts");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/list */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-list.js");
/* harmony import */ var ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/message */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-message.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");


















const antdModule = [
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__["NzListModule"],
    ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzDividerModule"],
    ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardModule"],
    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputModule"],
    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
    ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__["NzAlertModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzSpinModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzTableModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzMessageServiceModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzEmptyModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzProgressModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzModalModule"],
    ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__["NzCheckboxModule"],
    ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzRadioModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzInputNumberModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzPageHeaderModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzSwitchModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzPopoverModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzDescriptionsModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzBadgeModule"]
];
class AuthenticationModule {
    constructor(router) {
        this.router = router;
    }
}
AuthenticationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuthenticationModule });
AuthenticationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuthenticationModule_Factory(t) { return new (t || AuthenticationModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"])); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthenticationRoutingModule"],
            ...antdModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthenticationModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
        _landing_layout_landing_layout_component__WEBPACK_IMPORTED_MODULE_13__["LandingLayoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthenticationRoutingModule"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_14__["NzListModule"],
        ng_zorro_antd_message__WEBPACK_IMPORTED_MODULE_15__["NzMessageModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzDividerModule"],
        ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_6__["NzInputModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_7__["NzButtonModule"],
        ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_10__["NzAlertModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzSpinModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzTableModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzMessageServiceModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzIconModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzSelectModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzEmptyModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzProgressModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzModalModule"],
        ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_9__["NzCheckboxModule"],
        ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_5__["NzFormModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzRadioModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzInputNumberModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzPageHeaderModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzSwitchModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzPopoverModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzDescriptionsModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_12__["NzBadgeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _authentication_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthenticationRoutingModule"],
                    ...antdModule
                ],
                declarations: [
                    _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                    _landing_layout_landing_layout_component__WEBPACK_IMPORTED_MODULE_13__["LandingLayoutComponent"],
                ],
                providers: []
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/landing-layout/landing-layout.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/authentication/landing-layout/landing-layout.component.ts ***!
  \***************************************************************************/
/*! exports provided: LandingLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingLayoutComponent", function() { return LandingLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/radio */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-radio.js");













function LandingLayoutComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-radio-group", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LandingLayoutComponent_div_59_Template_nz_radio_group_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.radioValue = $event; })("ngModelChange", function LandingLayoutComponent_div_59_Template_nz_radio_group_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const val_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.changeAudiType(val_r4.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.radioValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nzValue", val_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](val_r4.name);
} }
function LandingLayoutComponent_button_67_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingLayoutComponent_button_67_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.NextFnCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.NextBtnDisable);
} }
function LandingLayoutComponent_button_68_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingLayoutComponent_button_68_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.AssignPRFnCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Assign PR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.NextBtnDisable);
} }
function LandingLayoutComponent_button_69_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingLayoutComponent_button_69_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.ManagePrFnCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manage PR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.NextBtnDisable);
} }
class LandingLayoutComponent {
    // Variable End
    // **************************************************************************************
    // **************************************************************************************
    // constructor Start
    constructor(router, message) {
        this.router = router;
        this.message = message;
        this.NextBtnDisable = true;
        this.showPRRequest = true;
        this.showNextFnCall = false;
        this.selectionType = '';
        this.listOfData = [];
        this.disable_next_btn = true;
    }
    // constructor End
    // **************************************************************************************
    // **************************************************************************************
    // ngOnInit Start
    ngOnInit() {
        var elementData = document.getElementById('data');
        var elementClaim = document.getElementById('claim');
        var elementReports = document.getElementById('reports');
        var elemenAudit = document.getElementById('audit');
        elementData.classList.remove('cardActive');
        elementClaim.classList.remove('cardActive');
        elementReports.classList.remove('cardActive');
        elemenAudit.classList.add('cardActive');
        this.listOfData.push({
            name: `Volume Rebet`,
        }, {
            name: `New Store`,
        }, {
            name: `Undeducted Co-op`,
        }, {
            name: `Miscellaneous`,
        }, {
            name: `Scan Allowance`,
        }, {
            name: `Duplicate`,
        }, {
            name: `Advertising`,
        }, {
            name: `Shortages`,
        }, {
            name: `Low Price`,
        }, {
            name: `Fill Rate`,
        }, {
            name: `Deducted Co-op`,
        });
    }
    // ngOnInit End
    // **************************************************************************************
    // **************************************************************************************
    // showNav Start
    showNav(show) { }
    // showNav End
    // **************************************************************************************
    // **************************************************************************************
    // selectPPA Start
    selectPPA(e) {
        this.listOfData = [];
        console.log(e);
        this.selectionType = e;
        if (e == 'data') {
            this.showNextFnCall = true;
            this.showPRRequest = false;
            var elementData = document.getElementById('data');
            var elementClaim = document.getElementById('claim');
            var elementReports = document.getElementById('reports');
            var elemenAudit = document.getElementById('audit');
            elementData.classList.add('cardActive');
            elementClaim.classList.remove('cardActive');
            elementReports.classList.remove('cardActive');
            elemenAudit.classList.remove('cardActive');
            this.listOfData.push({
                name: `Volume Rebet`,
            }, {
                name: `New Store`,
            }, {
                name: `Undeducted Co-op`,
            }, {
                name: `Scan Allowance`,
            }, {
                name: `Duplicate`,
            }, {
                name: `Advertising`,
            }, {
                name: `Shortages`,
            }, {
                name: `Low Price`,
            }, {
                name: `Fill Rate`,
            }, {
                name: `Deducted Co-op`,
            });
        }
        else if (e == 'claim') {
            this.showNextFnCall = true;
            this.showPRRequest = false;
            var elementData = document.getElementById('data');
            var elementClaim = document.getElementById('claim');
            var elementReports = document.getElementById('reports');
            var elemenAudit = document.getElementById('audit');
            elementClaim.classList.add('cardActive');
            elementData.classList.remove('cardActive');
            elementReports.classList.remove('cardActive');
            elemenAudit.classList.remove('cardActive');
            this.listOfData.push();
        }
        else if (e == 'reports') {
            this.showNextFnCall = true;
            this.showPRRequest = false;
            var elementData = document.getElementById('data');
            var elementClaim = document.getElementById('claim');
            var elementReports = document.getElementById('reports');
            var elemenAudit = document.getElementById('audit');
            elementReports.classList.add('cardActive');
            elementData.classList.remove('cardActive');
            elementClaim.classList.remove('cardActive');
            elemenAudit.classList.remove('cardActive');
            this.listOfData.push({
                name: `Claims Consolidated`,
            }, {
                name: `Claim Tracking Details`,
            }, {
                name: `Claims List Pending`,
            });
        }
        else if (e == 'audit') {
            this.showNextFnCall = false;
            this.showPRRequest = true;
            var elementData = document.getElementById('data');
            var elementClaim = document.getElementById('claim');
            var elementReports = document.getElementById('reports');
            var elemenAudit = document.getElementById('audit');
            elemenAudit.classList.add('cardActive');
            elementData.classList.remove('cardActive');
            elementReports.classList.remove('cardActive');
            elementClaim.classList.remove('cardActive');
            this.listOfData.push({
                name: `Volume Rebet`,
            }, {
                name: `New Store`,
            }, {
                name: `Undeducted Co-op`,
            }, {
                name: `Miscellaneous`,
            }, {
                name: `Scan Allowance`,
            }, {
                name: `Duplicate`,
            }, {
                name: `Advertising`,
            }, {
                name: `Shortages`,
            }, {
                name: `Low Price`,
            }, {
                name: `Fill Rate`,
            }, {
                name: `Fill Rate`,
            }, {
                name: `Deducted Co-op`,
            });
        }
    }
    // selectPPA End
    // **************************************************************************************
    // **************************************************************************************
    // changeAudiType Start
    changeAudiType(e) {
        this.radioValue = e;
        this.NextBtnDisable = false;
    }
    // changeAudiType End
    // **************************************************************************************
    // **************************************************************************************
    // ManagePrFnCall Start
    ManagePrFnCall() {
        console.log(this.radioValue, 'hhh');
        if (this.radioValue !== undefined) {
            this.router.navigate(['/manage_pr/potential_recovery']);
        }
        else {
            this.NextBtnDisable = false;
        }
    }
    // ManagePrFnCall End
    // **************************************************************************************
    // **************************************************************************************
    // AssignPRFnCall Start
    AssignPRFnCall() {
        console.log(this.radioValue, 'hhh');
        if (this.radioValue !== undefined) {
            this.router.navigate(['/assign/home']);
        }
        else {
            this.NextBtnDisable = false;
            // this.message.create('error', `Please select Audit type!`);
        }
    }
    // AssignPRFnCall End
    // **************************************************************************************
    // **************************************************************************************
    // NextFnCall Start
    NextFnCall() {
        if (this.radioValue !== undefined) {
            console.log(this.selectionType);
            if (this.selectionType == 'reports') {
                this.router.navigate(['/reports/reports_view']);
            }
            else if (this.selectionType == 'data') {
                this.router.navigate(['/data/data_view']);
            }
            else {
                this.router.navigate(['/assign/home']);
            }
        }
        else {
            this.NextBtnDisable = false;
            // this.message.create('error', `Please select Audit type!`);
        }
    }
    // NextFnCall End
    // **************************************************************************************
    // **************************************************************************************
    // LogoutUser Start
    LogoutUser() {
        this.router.navigate(['/authentication/login']);
    }
}
LandingLayoutComponent.ɵfac = function LandingLayoutComponent_Factory(t) { return new (t || LandingLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"])); };
LandingLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingLayoutComponent, selectors: [["app-landing-layout"]], decls: 70, vars: 4, consts: [[1, "container-fluid", "p-0", "h-100"], [1, "row", "no-gutters", "h-100"], [1, "col-lg-12", "d-none", "d-lg-flex", 2, "background-image", "url('assets/images/logo/Login-Bg_Image.png')", "padding-top", "20px", "background-repeat", "no-repeat", "background-size", "cover"], [1, "h-100", "p-h-40"], [1, "row"], [1, "col-sm-9"], ["src", "../../../assets/images/logo/logo2.png", "alt", "", 2, "margin-bottom", "20px", "margin-top", "10px", "width", "70px !important", "text-align", "left !important"], [2, "font-size", "30px", "margin-left", "20px", "color", "#fff !important"], [1, "col-sm-3"], ["ngModel", "jack", 2, "width", "150px !important", "color", "#fff !important"], ["nzValue", "jack", "nzLabel", "English"], ["nzValue", "lucy", "nzLabel", "Spanish"], ["nz-button", "", "nzType", "default", "title", "Logout", "title", "Logout", "nzShape", "", 2, "background", "transparent !important", "color", "#fff !important", "height", "45px !important", 3, "click"], ["nz-icon", "", "nzType", "logout", 2, "color", "#00AECF"], [1, "container"], [1, "col-sm-1"], ["src", "../../../assets/images/logo/user_icon.png", "width", "53px", "height", "53px"], [1, "col-sm-2"], [2, "font-size", "16px", "color", "#FF555F", "float", "left", "text-align", "left"], [2, "font-size", "18px", "color", "#fff !important"], [1, "row", "row-top"], [1, "col-xs-12", "col-sm-12", "col-md-8", "col-lg-8"], [1, "col-sm-6"], ["id", "data", "onfocus", "showNav(false)", 1, "card", 2, "height", "120px", 3, "click"], ["id", "claim", "onfocus", "showNav(false)", "onblur", "showNav(true)", "routerLink", "/claim/create_claim", 1, "card", 2, "height", "120px", 3, "click"], ["id", "reports", "onfocus", "showNav(false)", "onblur", "showNav(true)", 1, "card", 2, "height", "120px", 3, "click"], ["id", "audit", "onfocus", "showNav(false)", 1, "card", 2, "height", "120px", 3, "click"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [2, "height", "300px", "background", "#F2F2F2 !important", "overflow", "auto"], [4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-sm-12", "col-md-1", "col-lg-1"], [1, "container-fluid", "h-100"], [1, "d-flex", "h-100", "p-v-15", "flex-column", "justify-content-between"], [1, "d-none", "d-md-flex", "p-h-40"], ["src", "assets/images/logo/logo.png", "alt", ""], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], ["nz-button", "", "style", "float: left;  color: #fff !important;", "nzDanger", "", "nzType", "primary", 3, "disabled", "click", 4, "ngIf"], [2, "margin-bottom", "15px !important", 3, "ngModel", "ngModelChange"], ["nz-radio", "", 3, "ngStyle", "nzValue"], ["nz-button", "", "nzDanger", "", "nzType", "primary", 2, "float", "left", "color", "#fff !important", 3, "disabled", "click"]], template: function LandingLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Post Payment Audit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "nz-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nz-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingLayoutComponent_Template_button_click_14_listener() { return ctx.LogoutUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Welcome, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cristian Castillo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingLayoutComponent_Template_div_click_32_listener() { return ctx.selectPPA("data"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "View and Download Data from Reference Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingLayoutComponent_Template_div_click_38_listener() { return ctx.selectPPA("claim"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Claim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "View / Edit and Create Both Regular and Miscellaneous Claims");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingLayoutComponent_Template_div_click_44_listener() { return ctx.selectPPA("reports"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Reports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Track / Manage / Measure Claims and Audit Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingLayoutComponent_Template_div_click_50_listener() { return ctx.selectPPA("audit"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Audit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Qualified Record Sets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "nz-card", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Select Audit Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, LandingLayoutComponent_div_59_Template, 4, 4, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, LandingLayoutComponent_button_67_Template, 2, 1, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, LandingLayoutComponent_button_68_Template, 2, 1, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, LandingLayoutComponent_button_69_Template, 2, 1, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showNextFnCall);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPRRequest);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPRRequest);
    } }, directives: [ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_3__["NzOptionComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_8__["NzIconDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_9__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__["NzRadioGroupComponent"], ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_11__["NzRadioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-layout',
                templateUrl: './landing-layout.component.html',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-checkbox.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/alert */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-alert.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");


















function LoginComponent_nz_alert_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-alert", 37);
} }
function LoginComponent_nz_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r6.value)("nzLabel", o_r6.label);
} }
function LoginComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 39);
} }
function LoginComponent_ng_template_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 40);
} }
const _c0 = function () { return ["/authentication/reset-password-1"]; };
class LoginComponent {
    // Variable End
    // **************************************************************************************
    // **************************************************************************************
    // constructor start
    constructor(fb, router, auth, route) {
        this.fb = fb;
        this.router = router;
        this.auth = auth;
        this.route = route;
        // **************************************************************************************
        // Variable start
        this.show_error_message = false;
        this.showUserAuthMessage = false;
        this.country_err_text = '';
        this.error_message = '';
        this.country_list = [
            { label: 'India', value: 'india' },
            { label: 'Mexico', value: 'Mexico' },
            { label: 'Chile', value: 'Chile' },
        ];
    }
    // constructor End
    // **************************************************************************************
    // **************************************************************************************
    // ngOnInit start
    ngOnInit() {
        this.loginForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            country_list_fname: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    // ngOnInit End
    // **************************************************************************************
    // **************************************************************************************
    // submitForm start
    submitForm() {
        this.show_error_message = false;
        for (const i in this.loginForm.controls) {
            this.loginForm.controls[i].markAsDirty();
            this.loginForm.controls[i].updateValueAndValidity();
        }
        if (this.cuntry_name_value == null || this.cuntry_name_value == '') {
            this.showUserAuthMessage = false;
            this.country_err_text = 'Please select country name';
        }
        else {
            if (this.loginForm.value.userName == 'admin@genpact.com' &&
                this.loginForm.value.password == '123456') {
                this.showUserAuthMessage = false;
                this.router.navigate(['/authentication/landing']);
            }
            else if (this.loginForm.value.userName == 'user@genpact.com' &&
                this.loginForm.value.password == '123456') {
                this.router.navigate(['/authentication/landing']);
            }
            else if (this.loginForm.value.userName == 'client@genpact.com' &&
                this.loginForm.value.password == '123456') {
                this.showUserAuthMessage = false;
                this.router.navigate(['/authentication/landing']);
            }
            else {
                this.showUserAuthMessage = true;
            }
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 57, vars: 9, consts: [[1, "container-fluid", "p-0", "h-100"], [1, "row", "no-gutters", "h-100"], [1, "col-lg-12", "d-none", "d-lg-flex", 2, "background-image", "url('assets/images/logo/Login-Bg_Image.png')", "padding-top", "20px", "background-repeat", "no-repeat", "background-size", "cover"], [1, "d-flex", "h-100", "p-h-40", "flex-column", "justify-content-between"], ["src", "assets/images/logo/logo.png", "alt", ""], [1, "container"], [1, "row", "align-items-center"], [1, "offset-md-1", "col-md-5", "d-none", "d-md-block"], ["src", "assets/images/logo/logo1.png", "alt", "", 1, "img-fluid", 2, "height", "70%", "margin-bottom", "20px", "width", "200px !important", "text-align", "left !important"], [2, "letter-spacing", "0px", "text-align", "left !important", "color", "#FFFFFF"], [2, "font-size", "26px"], [2, "font-size", "35px"], [1, "col-md-4", 2, "margin-top", "20px", "margin-bottom", "20px"], [1, "m-t-10"], ["nzType", "error", "nzMessage", "User doesn't exist!", 4, "ngIf"], ["nz-form", "", "nzLayout", "vertical", 1, "login-form", 3, "formGroup", "ngSubmit"], ["nzRequired", "", "nzFor", "userName"], ["nzErrorTip", "Please input your username!"], [3, "nzPrefix"], ["type", "text", "nz-input", "", "formControlName", "userName", "placeholder", "Username"], [1, "relative"], ["nzRequired", "", "nzFor", "password"], ["nzErrorTip", "Please input your Password!"], ["type", "password", "nz-input", "", "formControlName", "password", "placeholder", "Password"], ["nzErrorTip", "Please input your Country!"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "Select a Country", "formControlName", "country_list_fname", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "row", "row-top", "Remember_form"], [1, "col-sm-7"], ["nz-checkbox", "", "ngModel", "true"], [1, "col-sm-5"], [1, "login-form-forgot"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "float-right", "font-size-13", "p-t-10", "text-muted", 2, "position", "absolute", "right", "0", 3, "routerLink"], ["nz-button", "", 1, "login-form-button", 2, "background", "#FF4A55 !important", "border", "1px solid #FF4A55 !important", 3, "nzType"], ["prefixUser", ""], ["prefixLock", ""], ["nzType", "error", "nzMessage", "User doesn't exist!"], [3, "nzValue", "nzLabel"], ["nz-icon", "", "nzType", "user"], ["nz-icon", "", "nzType", "lock"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Welcome to,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Post Payment Audit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginComponent_nz_alert_19_Template, 1, 0, "nz-alert", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_20_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-form-label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-form-control", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-input-group", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nz-form-item", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-form-label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-form-control", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "nz-input-group", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "nz-form-item", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-form-label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Select Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "nz-form-control", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "nz-select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_nz_select_ngModelChange_37_listener($event) { return ctx.cuntry_name_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, LoginComponent_nz_option_38_Template, 1, 2, "nz-option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Remember me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Forgot password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "nz-form-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "nz-form-control");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Forget Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, LoginComponent_ng_template_53_Template, 1, 0, "ng-template", null, 35, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, LoginComponent_ng_template_55_Template, 1, 0, "ng-template", null, 36, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showUserAuthMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPrefix", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzPrefix", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cuntry_name_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzType", "primary");
    } }, directives: [ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_4__["NzCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzRowDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormItemComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormLabelComponent"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_6__["NzFormControlComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputGroupComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputGroupWhitSuffixOrPrefixDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_8__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_10__["NzCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_11__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_12__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_13__["ɵNzTransitionPatchDirective"], ng_zorro_antd_alert__WEBPACK_IMPORTED_MODULE_14__["NzAlertComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_9__["NzOptionComponent"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_15__["NzIconDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib-esm/index.js");
/* harmony import */ var _aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @aws-amplify/core */ "./node_modules/@aws-amplify/core/lib-esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






// import { CognitoUser } from 'amazon-cognito-identity-js';
class AuthService {
    constructor(_router) {
        this._router = _router;
        this._authState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.authState = this._authState.asObservable();
        _aws_amplify_core__WEBPACK_IMPORTED_MODULE_2__["Hub"].listen('auth', (data) => {
            const { channel, payload } = data;
            if (channel === 'auth') {
                this._authState.next(payload.event);
            }
        });
    }
    signIn(username, password) {
        return new Promise((resolve, reject) => {
            _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__["default"].signIn(username, password)
                .then((user) => {
                this.signinValue = user;
                this.loggedIn = true;
                resolve(user);
            }).catch((error) => reject(error));
        });
    }
    completeNewPasswordChallenge(userData, password, requiredAttributes) {
        return new Promise((resolve, reject) => {
            _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__["default"].completeNewPassword(userData, password, requiredAttributes)
                .then((user) => {
                // this.loggedIn = true;
                resolve(user);
            }).catch((error) => reject(error));
        });
    }
    signOut() {
        return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__["default"].signOut()
            .then(() => this._router.navigate(['/authentication/login']));
    }
    signOutUser() {
        return _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__["default"].signOut()
            .then(() => this._router.navigate(['/authentication/login']));
    }
}
AuthService.SIGN_IN = 'signIn';
AuthService.SIGN_OUT = 'signOut';
AuthService.FACEBOOK = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__["CognitoHostedUIIdentityProvider"].Facebook;
AuthService.GOOGLE = _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__["CognitoHostedUIIdentityProvider"].Google;
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map