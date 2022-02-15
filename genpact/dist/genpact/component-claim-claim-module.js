(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-claim-claim-module"],{

/***/ "./src/app/component/claim/claim-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/component/claim/claim-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ClaimRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimRoutingModule", function() { return ClaimRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_claim_create_claim_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-claim/create-claim.component */ "./src/app/component/claim/create-claim/create-claim.component.ts");





const routes = [
    {
        path: 'create_claim',
        component: _create_claim_create_claim_component__WEBPACK_IMPORTED_MODULE_2__["CreateClaimComponent"],
        data: {
            title: 'Create Claim',
            headerDisplay: "none"
        }
    },
];
class ClaimRoutingModule {
}
ClaimRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ClaimRoutingModule });
ClaimRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ClaimRoutingModule_Factory(t) { return new (t || ClaimRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ClaimRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClaimRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/claim/claim.module.ts":
/*!*************************************************!*\
  !*** ./src/app/component/claim/claim.module.ts ***!
  \*************************************************/
/*! exports provided: ClaimModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimModule", function() { return ClaimModule; });
/* harmony import */ var _claim_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./claim-routing.module */ "./src/app/component/claim/claim-routing.module.ts");
/* harmony import */ var _create_claim_create_claim_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-claim/create-claim.component */ "./src/app/component/claim/create-claim/create-claim.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-popconfirm.js");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-descriptions.js");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-avatar.js");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/list */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-list.js");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/upload */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-upload.js");













const antdModule = [
    ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_11__["NzUploadModule"],
    ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__["NzListModule"],
    ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__["NzAvatarModule"],
    ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__["NzDescriptionsModule"],
    ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_7__["NzPopconfirmModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDividerModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDatePickerModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzAlertModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSpinModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageServiceModule"],
    ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSelectModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzEmptyModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzProgressModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzFormModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzRadioModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputNumberModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzPageHeaderModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSwitchModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzPopoverModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzBadgeModule"],
    ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzBreadCrumbModule"]
];
class ClaimModule {
}
ClaimModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ClaimModule });
ClaimModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ClaimModule_Factory(t) { return new (t || ClaimModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _claim_routing_module__WEBPACK_IMPORTED_MODULE_0__["ClaimRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ...antdModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ClaimModule, { declarations: [_create_claim_create_claim_component__WEBPACK_IMPORTED_MODULE_1__["CreateClaimComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _claim_routing_module__WEBPACK_IMPORTED_MODULE_0__["ClaimRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_11__["NzUploadModule"],
        ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__["NzListModule"],
        ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__["NzAvatarModule"],
        ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__["NzDescriptionsModule"],
        ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_7__["NzPopconfirmModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDividerModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzCardModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzDatePickerModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzButtonModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzAlertModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSpinModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzTableModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzMessageServiceModule"],
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__["NzIconModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSelectModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzEmptyModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzProgressModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzModalModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzCheckboxModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzFormModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzRadioModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzInputNumberModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzPageHeaderModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzSwitchModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzPopoverModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzBadgeModule"],
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzBreadCrumbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ClaimModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [_create_claim_create_claim_component__WEBPACK_IMPORTED_MODULE_1__["CreateClaimComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _claim_routing_module__WEBPACK_IMPORTED_MODULE_0__["ClaimRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    ...antdModule,
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/claim/create-claim/create-claim.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/claim/create-claim/create-claim.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateClaimComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClaimComponent", function() { return CreateClaimComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-breadcrumb.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/list */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-list.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");
/* harmony import */ var ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/checkbox */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-checkbox.js");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/upload */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-upload.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");






















function CreateClaimComponent_nz_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r16.value)("nzLabel", o_r16.label);
} }
function CreateClaimComponent_nz_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r17.value)("nzLabel", o_r17.label);
} }
function CreateClaimComponent_nz_option_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r18.value)("nzLabel", o_r18.label);
} }
function CreateClaimComponent_nz_option_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r19.value)("nzLabel", o_r19.label);
} }
function CreateClaimComponent_nz_option_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r20.value)("nzLabel", o_r20.label);
} }
function CreateClaimComponent_nz_option_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r21.value)("nzLabel", o_r21.label);
} }
function CreateClaimComponent_nz_option_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r22.value)("nzLabel", o_r22.label);
} }
function CreateClaimComponent_nz_option_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r23.value)("nzLabel", o_r23.label);
} }
function CreateClaimComponent_nz_option_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r24.value)("nzLabel", o_r24.label);
} }
function CreateClaimComponent_nz_option_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r25.value)("nzLabel", o_r25.label);
} }
function CreateClaimComponent_nz_option_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r26.value)("nzLabel", o_r26.label);
} }
function CreateClaimComponent_nz_option_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r27.value)("nzLabel", o_r27.label);
} }
function CreateClaimComponent_nz_option_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r28.value)("nzLabel", o_r28.label);
} }
function CreateClaimComponent_nz_option_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r29.value)("nzLabel", o_r29.label);
} }
function CreateClaimComponent_nz_option_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r30.value)("nzLabel", o_r30.label);
} }
function CreateClaimComponent_nz_option_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "nz-option", 38);
} if (rf & 2) {
    const o_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzValue", o_r31.value)("nzLabel", o_r31.label);
} }
const _c0 = function () { return { minRows: 4, maxRows: 6 }; };
const _c1 = function () { return { minRows: 6, maxRows: 6 }; };
class CreateClaimComponent {
    constructor(http, msg) {
        this.http = http;
        this.msg = msg;
        this.check_include_auth = true;
        this.supplier_value = 'Auditor_Id';
        this.supplier_list = [
            { label: "1234", value: "Auditor_Id" },
            { label: "2356", value: "2356" },
        ];
        this.claim_holder_value = 'new_store';
        this.claim_holder_list = [
            { label: "New Store", value: "new_store" },
            { label: "New Store o1", value: "new_store_01" },
            { label: "New Store o2", value: "new_store_02" },
        ];
        this.claim_type_value = 'john_Deo';
        this.claim_type_list = [
            { label: "John Deo", value: "john_Deo" },
            { label: "Cris", value: "cris" },
            { label: "David", value: "davi" },
        ];
        this.root_causes_value = 'john_Deo';
        this.root_causes_list = [
            { label: "Pending Approval in the commercial area", value: "john_Deo" },
            { label: "Completed in the commercial area", value: "cris" },
            { label: "Cancelled Approval in the commercial area", value: "davi" },
        ];
        this.claim_reason_value = 'john_Deo';
        this.claim_reason_list = [
            { label: "1234", value: "john_Deo" },
            { label: "342342", value: "cris" },
            { label: "4344", value: "davi" },
        ];
        this.wm_claim_reason_value = 'john_Deo';
        this.wm_claim_reason_list = [
            { label: "1234", value: "john_Deo" },
            { label: "45345", value: "cris" },
            { label: "54354", value: "davi" },
        ];
        this.format_name_value = 'john_Deo';
        this.format_name_list = [
            { label: "Format Name", value: "john_Deo" },
            { label: "Format Name 01", value: "cris" },
            { label: "Format Name 02", value: "davi" },
        ];
        this.orginal_claim_amt_value = 'john_Deo';
        this.orginal_claim_amt_list = [
            { label: "$24567", value: "john_Deo" },
            { label: "$34324", value: "cris" },
            { label: "$343", value: "davi" },
        ];
        this.currency_value = 'john_Deo';
        this.currency_list = [
            { label: "CLP", value: "john_Deo" },
            { label: "Rupees", value: "cris" },
            { label: "USD", value: "davi" },
        ];
        this.uploading = false;
        this.fileList = [];
        this.beforeUpload = (file) => {
            this.fileList = this.fileList.concat(file);
            return false;
        };
    }
    ngOnInit() {
    }
    handleUpload() {
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        this.fileList.forEach((file) => {
            formData.append('files[]', file);
        });
        this.uploading = true;
        // You can use any AJAX library you like
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpRequest"]('POST', 'https://www.mocky.io/v2/5cc8019d300000980a055e76', formData, {
        // reportProgress: true
        });
        this.http
            .request(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(e => e instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpResponse"]))
            .subscribe(() => {
            this.uploading = false;
            this.fileList = [];
            this.msg.success('upload successfully.');
        }, () => {
            this.uploading = false;
            this.msg.error('upload failed.');
        });
    }
}
CreateClaimComponent.ɵfac = function CreateClaimComponent_Factory(t) { return new (t || CreateClaimComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"])); };
CreateClaimComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateClaimComponent, selectors: [["app-create-claim"]], decls: 189, vars: 56, consts: [["nz-typography", ""], [1, "row", "row_top"], [1, "col-xs-12", "col-sm-12", "col-md-5", "col-lg-5"], [1, "section"], [2, "margin-bottom", "10px"], [1, "breadcrumb_active", 3, "routerLink"], ["nz-icon", "", "nzType", "home", "nzTheme", "fill", 2, "color", "#073262"], [1, "breadcrumb_text"], [1, "col-xs-12", "col-sm-12", "col-md-10", "col-lg-15"], [1, "row", 2, "font-size", "16px !important"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], ["nzItemLayout", "horizontal"], [2, "border", "1px solid #ddd", "padding", "10px", "background-color", "rgb(255, 255, 255)"], ["nzDescription", "Claim Number"], ["href", "https://ng.ant.design"], ["nzDescription", "Date"], ["nzDescription", "Audit year"], [1, "row", "row-top", 2, "font-size", "16px !important"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "New Store", 2, "margin-bottom", "5px", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], [1, "col-xs-12", "col-sm-12", "col-md-6", "col-lg-6"], ["nz-input", "", "placeholder", "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 3, "nzAutosize"], ["nz-checkbox", "", 3, "ngModel", "ngModelChange"], ["nz-input", "", "placeholder", "Add final note here", 3, "nzAutosize"], [3, "nzFileList", "nzBeforeUpload", "nzFileListChange"], ["nz-button", "", 2, "width", "400px !important"], ["nz-icon", "", "nzType", "upload"], ["nz-button", "", 3, "nzType", "nzLoading", "disabled", "click"], [1, "row", "row-top"], [1, "col-sm-12", "col-md-7", "col-lg-7"], ["nz-button", "", "nzType", "primary", 2, "float", "left", "color", "#fff !important", "margin-right", "10px !important"], [1, "col-sm-12", "col-md-5", "col-lg-5"], [2, "float", "right !important"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 2, "float", "left", "color", "#fff !important", "margin-right", "10px !important"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 2, "float", "left", "color", "#fff !important"], [1, "col-xs-12", "col-sm-12", "col-md-2", "col-lg-2"], ["nzTitle", "Selected QA", 2, "height", "400px", 3, "nzBordered"], [3, "nzValue", "nzLabel"]], template: function CreateClaimComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create Claim");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nz-breadcrumb", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Potential Recovery");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "nz-breadcrumb-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Create Claim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "nz-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "nz-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "nz-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "nz-list-item-meta", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "nz-list-item-meta-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "nz-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "nz-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "nz-list-item-meta", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "nz-list-item-meta-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "nz-list", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "nz-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "nz-list-item-meta", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "nz-list-item-meta-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Audit Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_42_listener($event) { return ctx.supplier_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, CreateClaimComponent_nz_option_43_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Claim Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_47_listener($event) { return ctx.claim_type_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, CreateClaimComponent_nz_option_48_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "claim Holder");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_52_listener($event) { return ctx.claim_holder_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, CreateClaimComponent_nz_option_53_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Root Cause");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_58_listener($event) { return ctx.root_causes_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](59, CreateClaimComponent_nz_option_59_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Claim Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_64_listener($event) { return ctx.claim_reason_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, CreateClaimComponent_nz_option_65_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "WM Claim Reason");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_69_listener($event) { return ctx.wm_claim_reason_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, CreateClaimComponent_nz_option_70_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Claim Explanation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Buyer Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_80_listener($event) { return ctx.claim_reason_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, CreateClaimComponent_nz_option_81_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Supplier Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_85_listener($event) { return ctx.wm_claim_reason_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](86, CreateClaimComponent_nz_option_86_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Supplier Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](91, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Format");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_96_listener($event) { return ctx.format_name_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, CreateClaimComponent_nz_option_97_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Original Claim Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_102_listener($event) { return ctx.orginal_claim_amt_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](103, CreateClaimComponent_nz_option_103_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_107_listener($event) { return ctx.currency_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, CreateClaimComponent_nz_option_108_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Supplier Remark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Auditor's Findings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "textarea", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Department NBR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_122_listener($event) { return ctx.currency_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](123, CreateClaimComponent_nz_option_123_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126, "Area of responsibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_127_listener($event) { return ctx.currency_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, CreateClaimComponent_nz_option_128_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Time period");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_132_listener($event) { return ctx.currency_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](133, CreateClaimComponent_nz_option_133_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "Conversion Likelihood :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_137_listener($event) { return ctx.currency_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, CreateClaimComponent_nz_option_138_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "SAMS Cat ::");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "nz-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_nz_select_ngModelChange_143_listener($event) { return ctx.currency_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](144, CreateClaimComponent_nz_option_144_Template, 1, 2, "nz-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_label_ngModelChange_147_listener($event) { return ctx.check_include_auth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Include Authorization Mode on Print");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateClaimComponent_Template_label_ngModelChange_151_listener($event) { return ctx.check_include_auth = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Include 30-day warning on Cover Sheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Additional Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "textarea", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "nz-upload", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("nzFileListChange", function CreateClaimComponent_Template_nz_upload_nzFileListChange_160_listener($event) { return ctx.fileList = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Attach File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateClaimComponent_Template_button_click_165_listener() { return ctx.handleUpload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Create Payback");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "Create Claim Package");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "nz-card", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Card content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Card content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Card content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/authentication/landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/potential_recovery/create_claim");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("12007- 4567");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("12-03-2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]("2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.supplier_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.supplier_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.claim_type_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.claim_type_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.claim_holder_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.claim_holder_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.root_causes_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.root_causes_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.claim_reason_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.claim_reason_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.wm_claim_reason_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.wm_claim_reason_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](51, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.claim_reason_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.claim_reason_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.wm_claim_reason_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.wm_claim_reason_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](52, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.format_name_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.format_name_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.orginal_claim_amt_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orginal_claim_amt_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currency_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currency_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](53, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](54, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currency_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currency_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currency_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currency_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currency_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currency_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currency_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currency_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.currency_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.currency_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.check_include_auth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.check_include_auth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzAutosize", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](55, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzFileList", ctx.fileList)("nzBeforeUpload", ctx.beforeUpload);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzType", "primary")("nzLoading", ctx.uploading)("disabled", ctx.fileList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.uploading ? "Uploading" : "Upload", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nzBordered", true);
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_6__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_7__["NzIconDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_8__["NzCardComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__["NzListComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__["NzListItemComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__["NzListItemMetaComponent"], ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_9__["NzListItemMetaTitleComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_10__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_11__["NzFormLabelComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__["NzInputDirective"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_15__["NzAutosizeDirective"], ng_zorro_antd_checkbox__WEBPACK_IMPORTED_MODULE_16__["NzCheckboxComponent"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_17__["NzUploadComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_18__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_19__["NzWaveDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_12__["NzOptionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jbGFpbS9jcmVhdGUtY2xhaW0vY3JlYXRlLWNsYWltLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreateClaimComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-create-claim',
                templateUrl: './create-claim.component.html',
                styleUrls: ['./create-claim.component.scss']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NzMessageService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=component-claim-claim-module.js.map