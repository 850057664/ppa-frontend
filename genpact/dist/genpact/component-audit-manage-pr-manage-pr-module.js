(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-audit-manage-pr-manage-pr-module"],{

/***/ "./src/app/component/audit/manage-pr/manage-pr-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/component/audit/manage-pr/manage-pr-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ManagePrRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePrRoutingModule", function() { return ManagePrRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _potential_recovery_potential_recovery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./potential-recovery/potential-recovery.component */ "./src/app/component/audit/manage-pr/potential-recovery/potential-recovery.component.ts");





const routes = [
    {
        path: 'potential_recovery',
        component: _potential_recovery_potential_recovery_component__WEBPACK_IMPORTED_MODULE_2__["PotentialRecoveryComponent"],
        data: {
            title: 'Potential Recovery',
            headerDisplay: "none"
        }
    },
];
class ManagePrRoutingModule {
}
ManagePrRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManagePrRoutingModule });
ManagePrRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManagePrRoutingModule_Factory(t) { return new (t || ManagePrRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManagePrRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagePrRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/audit/manage-pr/manage-pr.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/component/audit/manage-pr/manage-pr.module.ts ***!
  \***************************************************************/
/*! exports provided: ManagePrModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePrModule", function() { return ManagePrModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _manage_pr_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-pr-routing.module */ "./src/app/component/audit/manage-pr/manage-pr-routing.module.ts");
/* harmony import */ var _potential_recovery_potential_recovery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./potential-recovery/potential-recovery.component */ "./src/app/component/audit/manage-pr/potential-recovery/potential-recovery.component.ts");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng_zorro_antd_popconfirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/popconfirm */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-popconfirm.js");
/* harmony import */ var ng_zorro_antd_descriptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/descriptions */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-descriptions.js");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-avatar.js");
/* harmony import */ var ng_zorro_antd_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/list */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-list.js");
/* harmony import */ var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-zorro-antd/upload */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-upload.js");
/* harmony import */ var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/tooltip */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-tooltip.js");














const antdModule = [
    ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__["NzToolTipModule"],
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
class ManagePrModule {
}
ManagePrModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManagePrModule });
ManagePrModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManagePrModule_Factory(t) { return new (t || ManagePrModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _manage_pr_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManagePrRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ...antdModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManagePrModule, { declarations: [_potential_recovery_potential_recovery_component__WEBPACK_IMPORTED_MODULE_3__["PotentialRecoveryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _manage_pr_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManagePrRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_12__["NzToolTipModule"],
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
        ng_zorro_antd__WEBPACK_IMPORTED_MODULE_5__["NzBreadCrumbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManagePrModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_potential_recovery_potential_recovery_component__WEBPACK_IMPORTED_MODULE_3__["PotentialRecoveryComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _manage_pr_routing_module__WEBPACK_IMPORTED_MODULE_2__["ManagePrRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    ...antdModule,
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/audit/manage-pr/potential-recovery/potential-recovery.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/component/audit/manage-pr/potential-recovery/potential-recovery.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PotentialRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PotentialRecoveryComponent", function() { return PotentialRecoveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-breadcrumb.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-avatar.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");


















function PotentialRecoveryComponent_nz_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 44);
} if (rf & 2) {
    const o_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r22.value)("nzLabel", o_r22.label);
} }
function PotentialRecoveryComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSortOrderChange", function PotentialRecoveryComponent_th_39_Template_th_nzSortOrderChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const column_r23 = ctx.$implicit; return column_r23.sortOrder = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSortOrder", column_r23.sortOrder)("nzSortFn", column_r23.sortFn)("nzFilters", column_r23.listOfFilter)("nzFilterFn", column_r23.filterFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r23.name, "");
} }
function PotentialRecoveryComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function PotentialRecoveryComponent_tr_41_Template_td_nzCheckedChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const data_r26 = ctx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.onItemChecked(data_r26.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_tr_41_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const data_r26 = ctx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.startEdit(data_r26.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PotentialRecoveryComponent_tr_41_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const data_r26 = ctx.$implicit; return data_r26.name = $event; })("blur", function PotentialRecoveryComponent_tr_41_Template_input_blur_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.stopEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r26 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx_r3.setOfCheckedId.has(data_r26.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.editId === data_r26.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r26.UserChg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.editId !== data_r26.id)("ngModel", data_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r26.AuditYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r26.Tier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r26.VendorSAP);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r26.VendorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r26.VendorNbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r26.Deal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r26.ApprovedNot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r26.ApprovedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r26.AllItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r26.StartDate);
} }
function PotentialRecoveryComponent_ng_template_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Change PR Status ");
} }
function PotentialRecoveryComponent_ng_template_61_nz_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 52);
} if (rf & 2) {
    const option_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLabel", option_r33)("nzValue", option_r33);
} }
function PotentialRecoveryComponent_ng_template_61_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PotentialRecoveryComponent_ng_template_61_Template_nz_select_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.change_status_value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PotentialRecoveryComponent_ng_template_61_nz_option_1_Template, 1, 2, "nz-option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "textarea", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PotentialRecoveryComponent_ng_template_61_Template_textarea_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.change_reason_value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.change_status_value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.ListOfChangeStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.change_reason_value);
} }
function PotentialRecoveryComponent_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_ng_template_63_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.ChangePRstatusCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_ng_template_63_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.ChangePRstatusOk(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PotentialRecoveryComponent_ng_template_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Edit Data Row ");
} }
function PotentialRecoveryComponent_ng_template_68_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PotentialRecoveryComponent_ng_template_68_tr_11_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const data_r42 = ctx.$implicit; return data_r42.new_val = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r42.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r42.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r42.new_val);
} }
const _c0 = function () { return { y: "300px" }; };
function PotentialRecoveryComponent_ng_template_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Old Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PotentialRecoveryComponent_ng_template_68_tr_11_Template, 7, 3, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r13.listOfEditData)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r40.data);
} }
function PotentialRecoveryComponent_ng_template_70_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_ng_template_70_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_ng_template_70_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.EditCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PotentialRecoveryComponent_ng_template_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Edit Data Row ");
} }
function PotentialRecoveryComponent_ng_template_75_tr_11_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PotentialRecoveryComponent_ng_template_75_tr_11_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const data_r50 = ctx.$implicit; return data_r50.new_val = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r50.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r50.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", data_r50.new_val);
} }
function PotentialRecoveryComponent_ng_template_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-table", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Old Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "New Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PotentialRecoveryComponent_ng_template_75_tr_11_Template, 7, 3, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx_r19.listOfEditData)("nzShowPagination", false)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r48.data);
} }
function PotentialRecoveryComponent_ng_template_77_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_ng_template_77_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.handleCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_ng_template_77_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.EditCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { x: "1200px", y: "240px" }; };
class PotentialRecoveryComponent {
    // Variable end
    // **************************************************************************************
    // **************************************************************************************
    // Variable start
    constructor(message, route, modalService) {
        this.message = message;
        this.route = route;
        this.modalService = modalService;
        // **************************************************************************************
        // Variable start
        this.cuntry_name_value = '';
        this.isVisible = false;
        this.isConfirmLoading = false;
        this.isCreateClaimLoading = false;
        this.checked = false;
        this.indeterminate = false;
        this.checked_td = false;
        this.exportSelectedDisabled = true;
        this.disableSubmitAssign = true;
        this.listOfCurrentPageData = [];
        this.listOfData = [];
        this.setOfCheckedId = new Set();
        this.comment_value = '';
        this.i = 0;
        this.auditor_name_value = '';
        this.supplier_value = '';
        this.status_value = '';
        this.year_value = '';
        this.Department_value = '';
        this.format_value = '';
        this.listOfChangeStatus = [];
        this.change_reason_value = '';
        this.change_status_value = '';
        this.isChangePRstatusVisible = false;
        this.ListOfChangeStatus = ['Not Assigned', 'In Progress', 'Deduction Created', 'Immaterial/Negative', 'Completed/Reviewed'];
        this.country_list = [
            { label: 'India', value: 'india' },
            { label: 'Spain', value: 'spain' },
        ];
        this.supplier_list = [
            { label: 'Audit Type 1', value: 'Audit Type 1' },
            { label: 'Audit Type 2', value: 'Audit Type 2' },
        ];
        this.year_list = [
            { label: '2021', value: '2021' },
            { label: '2020', value: '2020' },
        ];
        this.status_list = [
            { label: 'booked', value: 'booked' },
            { label: 'pending', value: 'pending' },
        ];
        this.Department_list = [
            { label: 'Department one', value: 'Department' },
            { label: 'Department two', value: 'Department' },
        ];
        this.Format_list = [
            { label: 'Format one', value: 'Format' },
            { label: 'Format two', value: 'Format' },
        ];
        this.listOfOption = ['Dmart', 'Tata', 'Puma', 'Dell'];
        this.listOfSelectedValue = [];
        this.listOfColumns = [
            {
                name: 'User Chg',
                sortOrder: 'descend',
                sortFn: (a, b) => a.AuditYear - b.AuditYear,
                sortDirections: ['descend', null],
                listOfFilter: [
                    { text: 'Yes', value: 'Yes' },
                    { text: 'No', value: 'No' },
                ],
                filterFn: (list, item) => list.some((name) => item.UserChg.indexOf(name) !== -1),
            },
            {
                name: 'Audit Year',
                sortOrder: 'descend',
                sortFn: (a, b) => a.AuditYear - b.AuditYear,
                sortDirections: ['descend', null],
                listOfFilter: [
                    { text: 'Yes', value: 'Yes' },
                    { text: 'No', value: 'No' },
                ],
                filterFn: (list, item) => list.some((name) => item.UserChg.indexOf(name) !== -1),
            },
            {
                name: 'Tier',
                sortOrder: 'descend',
                sortFn: (a, b) => a.AuditYear - b.AuditYear,
                sortDirections: ['descend', null],
                listOfFilter: [
                    { text: 'Yes', value: 'Yes' },
                    { text: 'No', value: 'No' },
                ],
                filterFn: (list, item) => list.some((name) => item.UserChg.indexOf(name) !== -1),
            },
            {
                name: 'Vendor SAP',
                sortOrder: 'descend',
                sortFn: (a, b) => a.AuditYear - b.AuditYear,
                sortDirections: ['descend', null],
                listOfFilter: [
                    { text: 'Yes', value: 'Yes' },
                    { text: 'No', value: 'No' },
                ],
                filterFn: (list, item) => list.some((name) => item.UserChg.indexOf(name) !== -1),
            },
            {
                name: 'Vendor Name',
                sortOrder: 'descend',
                sortFn: (a, b) => a.AuditYear - b.AuditYear,
                sortDirections: ['descend', null],
                listOfFilter: [
                    { text: 'Yes', value: 'Yes' },
                    { text: 'No', value: 'No' },
                ],
                filterFn: (list, item) => list.some((name) => item.UserChg.indexOf(name) !== -1),
            },
            {
                name: 'Vendor Nbr',
                sortOrder: 'descend',
                sortFn: (a, b) => a.AuditYear - b.AuditYear,
                sortDirections: ['descend', null],
                listOfFilter: [
                    { text: 'Yes', value: 'Yes' },
                    { text: 'No', value: 'No' },
                ],
                filterFn: (list, item) => list.some((name) => item.UserChg.indexOf(name) !== -1),
            },
            {
                name: 'Deal',
                sortOrder: 'descend',
                sortFn: (a, b) => a.AuditYear - b.AuditYear,
                sortDirections: ['descend', null],
                listOfFilter: [
                    { text: 'Yes', value: 'Yes' },
                    { text: 'No', value: 'No' },
                ],
                filterFn: (list, item) => list.some((name) => item.UserChg.indexOf(name) !== -1),
            },
            {
                name: 'Approved/Not',
                sortOrder: 'descend',
                sortFn: (a, b) => a.AuditYear - b.AuditYear,
                sortDirections: ['descend', null],
                listOfFilter: [
                    { text: 'Yes', value: 'Yes' },
                    { text: 'No', value: 'No' },
                ],
                filterFn: (list, item) => list.some((name) => item.UserChg.indexOf(name) !== -1),
            },
            {
                name: 'Approved By',
                sortOrder: 'descend',
                sortFn: (a, b) => a.AuditYear - b.AuditYear,
                sortDirections: ['descend', null],
                listOfFilter: [
                    { text: 'Yes', value: 'Yes' },
                    { text: 'No', value: 'No' },
                ],
                filterFn: (list, item) => list.some((name) => item.UserChg.indexOf(name) !== -1),
            },
            {
                name: 'All Items',
                sortOrder: 'descend',
                sortFn: (a, b) => a.AuditYear - b.AuditYear,
                sortDirections: ['descend', null],
                listOfFilter: [
                    { text: 'Yes', value: 'Yes' },
                    { text: 'No', value: 'No' },
                ],
                filterFn: (list, item) => list.some((name) => item.UserChg.indexOf(name) !== -1),
            },
            {
                name: 'Start Date',
                sortOrder: 'descend',
                sortFn: (a, b) => a.AuditYear - b.AuditYear,
                sortDirections: ['descend', null],
                listOfFilter: [
                    { text: 'Yes', value: 'Yes' },
                    { text: 'No', value: 'No' },
                ],
                filterFn: (list, item) => list.some((name) => item.UserChg.indexOf(name) !== -1),
            },
        ];
        this.listOfSelection = [
            {
                text: 'Select All Row',
                onSelect: () => {
                    this.onAllChecked(true);
                },
            },
            {
                text: 'Select Odd Row',
                onSelect: () => {
                    this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 !== 0));
                    this.refreshCheckedStatus();
                },
            },
            {
                text: 'Select Even Row',
                onSelect: () => {
                    this.listOfCurrentPageData.forEach((data, index) => this.updateCheckedSet(data.id, index % 2 === 0));
                    this.refreshCheckedStatus();
                },
            },
        ];
        this.listOfEditData = [
            {
                name: 'Catch Rate',
                value: '0.00',
                new_val: ''
            },
            {
                name: 'Auditor',
                value: '0.00',
                new_val: ''
            },
            {
                name: 'Complete Dt',
                value: '0.00',
                new_val: ''
            },
            {
                name: 'Status',
                value: '0.00',
                new_val: ''
            },
            {
                name: 'Auditor Complete',
                value: '0.00',
                new_val: ''
            },
            {
                name: 'Catch Rate',
                value: '0.00',
                new_val: ''
            },
            {
                name: 'Auditor',
                value: '0.00',
                new_val: ''
            },
            {
                name: 'Complete Dt',
                value: '0.00',
                new_val: ''
            },
            {
                name: 'Status',
                value: '0.00',
                new_val: ''
            },
            {
                name: 'Auditor Complete',
                value: '0.00',
                new_val: ''
            },
        ];
        this.selectedlistOfCurrentPageData = [];
        this.fileName = 'ExcelSheet.xlsx';
    }
    isNotSelected(value) {
        return this.listOfSelectedValue.indexOf(value) === -1;
    }
    trackByName(_, item) {
        return item.name;
    }
    // Variable end
    // **************************************************************************************
    // **************************************************************************************
    // Variable start
    showModal() {
        console.log(this.setOfCheckedId.size, 'listOfSelection');
        if (this.setOfCheckedId.size == 0) {
            this.message.create('error', `Please select Supplier from table!`);
        }
        else {
            this.isVisible = true;
        }
    }
    // Variable end
    // **************************************************************************************
    // **************************************************************************************
    // Variable start
    handleOk() {
        if (this.listOfSelectedValue.length == 0) {
            this.message.create('error', `Please select Audiors!`);
        }
        else if (this.comment_value == '') {
            this.message.create('error', `Please add your comments!`);
        }
        else {
            this.isVisible = false;
            this.modalService.confirm({
                nzTitle: 'Are you sure, you want to assign selected QR!',
                nzContent: '.',
                nzOkText: 'Confirm',
                nzCancelText: 'Cancel',
                nzOnOk: () => new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                    this.disableSubmitAssign = false;
                }).catch(() => console.log('Oops errors!')),
            });
        }
    }
    // Variable end
    // **************************************************************************************
    // **************************************************************************************
    // Variable start
    handleCancel() {
        this.isVisible = false;
    }
    // **************************************************************************************
    // Variable start
    updateCheckedSet(id, checked) {
        if (checked) {
            this.setOfCheckedId.add(id);
        }
        else {
            this.setOfCheckedId.delete(id);
        }
    }
    // Variable end
    // **************************************************************************************
    // **************************************************************************************
    // onItemChecked start
    onItemChecked(id, checked) {
        this.exportSelectedDisabled = false;
        this.updateCheckedSet(id, checked);
        this.refreshCheckedStatus();
        console.log(checked, id);
        if (checked == true) {
            let selected_list = this.listOfCurrentPageData.filter((object) => {
                return object['id'] == id;
            });
            this.selectedlistOfCurrentPageData.push(selected_list[0]);
        }
        else {
            this.selectedlistOfCurrentPageData =
                this.selectedlistOfCurrentPageData.filter((object) => {
                    return object['id'] != id;
                });
        }
    }
    // onItemChecked end
    // **************************************************************************************
    // **************************************************************************************
    // onAllChecked start
    onAllChecked(value) {
        this.listOfCurrentPageData.forEach((item) => this.updateCheckedSet(item.id, value));
        this.refreshCheckedStatus();
        let selectedAllData = [];
        if (value == true) {
            this.selectedlistOfCurrentPageData = this.listOfCurrentPageData;
            console.log(this.selectedlistOfCurrentPageData);
            this.exportSelectedDisabled = false;
        }
        else {
            this.selectedlistOfCurrentPageData = selectedAllData;
            this.exportSelectedDisabled = true;
        }
    }
    // onAllChecked end
    // **************************************************************************************
    // **************************************************************************************
    //onCurrentPageDataChange start
    onCurrentPageDataChange($event) {
        this.listOfCurrentPageData = $event;
        this.refreshCheckedStatus();
    }
    //onCurrentPageDataChange end
    // **************************************************************************************
    // **************************************************************************************
    //refreshCheckedStatus start
    refreshCheckedStatus() {
        this.checked = this.listOfCurrentPageData.every((item) => this.setOfCheckedId.has(item.id));
        this.indeterminate =
            this.listOfCurrentPageData.some((item) => this.setOfCheckedId.has(item.id)) && !this.checked;
    }
    //refreshCheckedStatus end
    // **************************************************************************************
    // **************************************************************************************
    //ngOnInit start
    ngOnInit() {
        this.listOfData = new Array(100).fill(0).map((_, index) => {
            return {
                id: index,
                UserChg: 'Yes',
                AuditYear: 2021,
                Tier: 1,
                VendorSAP: '000112230',
                VendorName: 'John Doe',
                VendorNbr: 1745,
                Deal: 1745,
                ApprovedNot: 'Khiem Le',
                ApprovedBy: 'QA',
                AllItem: 'No',
                StartDate: '12/04/2021',
            };
        });
    }
    //ngOnInit end
    //**************************************************************************************
    // **************************************************************************************
    // startEdit start
    startEdit(id) {
        this.editId = id;
    }
    // startEdit end
    // **************************************************************************************
    // **************************************************************************************
    // stopEdit start
    stopEdit() {
        this.editId = null;
    }
    // stopEdit end
    // **************************************************************************************
    // **************************************************************************************
    // addRow start
    addRow() {
        console.log();
        this.listOfData = [
            ...this.listOfData,
            {
                id: 1,
                UserChg: '',
                AuditYear: null,
                Tier: null,
                VendorSAP: '',
                VendorName: '',
                VendorNbr: null,
                Deal: null,
                ApprovedNot: '',
                ApprovedBy: '',
                AllItem: '',
                StartDate: '',
            },
        ];
        this.i++;
    }
    // addRow end
    // **************************************************************************************
    // **************************************************************************************
    // deleteRow start
    deleteRow(id) {
        // this.listOfData = this.listOfData.filter(d => d.id !== id);
    }
    // deleteRow end
    // **************************************************************************************
    // **************************************************************************************
    // exportexcel start
    exportexcel() {
        /* pass here the table id */
        let element = document.getElementById('excel-table');
        const ws = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].table_to_sheet(element);
        /* generate workbook and add the worksheet */
        const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_new();
        xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_append_sheet(wb, ws, 'Sheet1');
        /* save to file */
        xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](wb, this.fileName);
    }
    // exportexcel end
    // **************************************************************************************
    // **************************************************************************************
    // exportexcelSelected start
    exportexcelSelected() {
        if (this.setOfCheckedId.size == 0) {
            this.message.create('error', `Please select Supplier from table!`);
            this.selectedlistOfCurrentPageData = [];
        }
        else {
            const ws = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].json_to_sheet(this.selectedlistOfCurrentPageData);
            const wb = xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_new();
            xlsx__WEBPACK_IMPORTED_MODULE_1__["utils"].book_append_sheet(wb, ws, 'test');
            xlsx__WEBPACK_IMPORTED_MODULE_1__["writeFile"](wb, this.fileName);
            setTimeout(() => { }, 2000);
        }
    }
    // exportexcelSelected end
    // **************************************************************************************
    // **************************************************************************************
    // ResetClick start
    ResetClick() {
        this.cuntry_name_value = '';
        this.supplier_value = '';
        this.status_value = '';
        this.format_value = '';
        this.Department_value = '';
        this.year_value = '';
    }
    // ResetClick end
    // **************************************************************************************
    // **************************************************************************************
    // clickHistory start
    clickHistory() {
        this.route.navigate(['/assign/assign-history']);
    }
    // clickHistory end
    // **************************************************************************************
    // **************************************************************************************
    // CreateClaim start
    CreateClaim() {
        if (this.setOfCheckedId.size == 0) {
            this.message.create('error', `Please select Supplier from table!`);
            this.isCreateClaimLoading = false;
            this.selectedlistOfCurrentPageData = [];
        }
        else {
            this.isCreateClaimLoading = true;
            setTimeout(() => {
                this.route.navigate(['/potential_recovery/create_claim']);
            }, 1000);
        }
    }
    // CreateClaim end
    // **************************************************************************************
    // **************************************************************************************
    // SubmitAssign start
    SubmitAssign() { }
    // SubmitAssign end
    // **************************************************************************************
    // **************************************************************************************
    // ChangePRstatus start
    ChangePRstatusCancel() {
        this.isChangePRstatusVisible = false;
    }
    changeStatusFnCall() {
        console.log(this.setOfCheckedId.size);
        if (this.setOfCheckedId.size == 0) {
            this.message.create('error', `Please select Supplier from table!`);
        }
        else {
            this.isChangePRstatusVisible = true;
        }
    }
    ChangePRstatus() {
    }
    // ChangePRstatus end
    // **************************************************************************************
    // **************************************************************************************
    // Edit Data start
    EditCancel() {
    }
}
PotentialRecoveryComponent.ɵfac = function PotentialRecoveryComponent_Factory(t) { return new (t || PotentialRecoveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"])); };
PotentialRecoveryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PotentialRecoveryComponent, selectors: [["app-potential-recovery"]], decls: 79, vars: 27, consts: [["nz-typography", ""], [1, "row", "row_top"], [1, "col-xs-12", "col-sm-12", "col-md-5", "col-lg-5"], [1, "section"], [2, "margin-bottom", "10px"], [1, "breadcrumb_active", 3, "routerLink"], ["nz-icon", "", "nzType", "home", "nzTheme", "fill", 2, "color", "#073262"], [1, "breadcrumb_text"], [1, "col-xs-12", "col-sm-12", "col-md-3", "col-lg-3"], [2, "text-align", "right !important"], ["nzIcon", "user", "nzSrc", "../../../assets/images/logo/chile.png"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-5", "col-lg-5", 2, "font-size", "10px !important"], [1, "col-xs-12", "col-sm-12", "col-md-7", "col-lg-7", 2, "font-size", "10px !important"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "New Store", 2, "margin-bottom", "5px", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-sm-12", "col-md-1", "col-lg-1"], ["nz-popover", "", "nzPopoverContent", "Clear selection", 2, "font-weight", "bold", "font-size", "20px", "text-align", "center", 3, "click"], ["nz-icon", "", "nzType", "reload", "nzTheme", "outline"], [2, "opacity", "1 !important"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], ["id", "excel-table", 3, "nzData", "nzScroll", "nzShowPagination", "nzCurrentPageDataChange"], ["rowSelectionTable", ""], [2, "font-size", "12px !important"], [3, "nzSelections", "nzChecked", "nzIndeterminate", "nzCheckedChange"], [3, "nzSortOrder", "nzSortFn", "nzFilters", "nzFilterFn", "nzSortOrderChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngFor", "ngForOf"], [1, "row", "row-top"], [1, "col-sm-12", "col-md-7", "col-lg-7"], ["nz-button", "", "nzType", "primary", 2, "float", "left", "color", "#fff !important", "margin-right", "10px !important", 3, "disabled", "click"], ["nz-button", "", "nzType", "primary", 2, "float", "left", "color", "#fff !important", "margin-right", "10px !important", 3, "click"], [1, "col-sm-12", "col-md-5", "col-lg-5"], [2, "float", "right !important"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 2, "float", "left", "color", "#fff !important", "margin-right", "10px !important", 3, "click"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 2, "float", "left", "color", "#fff !important", "margin-right", "10px !important", 3, "nzLoading", "click"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 2, "float", "left", "color", "#fff !important", 3, "nzLoading", "click"], ["nzTitle", "Change PR Status", 3, "nzVisible", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle_change_status", ""], ["modalContent_change_status", ""], ["modalFooter_change_status", ""], [3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle_Edit_data", ""], ["modalContent_edit_data", ""], ["modalFooter_edit_data", ""], [3, "nzValue", "nzLabel"], [3, "nzSortOrder", "nzSortFn", "nzFilters", "nzFilterFn", "nzSortOrderChange"], [3, "nzChecked", "nzCheckedChange"], [1, "editable-cell", 3, "hidden", "click"], ["type", "text", "nz-input", "", 3, "hidden", "ngModel", "ngModelChange", "blur"], ["nzPlaceHolder", "Chage Status", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue", 4, "ngFor", "ngForOf"], ["rows", "4", "nz-input", "", "placeholder", "Change Reason", 2, "margin-top", "10px", 3, "ngModel", "ngModelChange"], [3, "nzLabel", "nzValue"], ["nz-button", "", "nzType", "default", "nzDanger", "", 3, "click"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 3, "click"], [3, "nzData", "nzShowPagination", "nzScroll"], ["basicTable", ""], ["nz-input", "", "placeholder", "Basic usage", "placeholder", "New Value", 3, "ngModel", "ngModelChange"], ["nz-button", "", "nzType", "default", "nzShape", "circle"], ["nz-icon", "", "nzType", "reload", "nzTooltipTitle", "Reset"]], template: function PotentialRecoveryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Potential Recovery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-breadcrumb", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-breadcrumb-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Potential Recovery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "nz-avatar", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Chile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-form-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Audit Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "nz-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PotentialRecoveryComponent_Template_nz_select_ngModelChange_25_listener($event) { return ctx.supplier_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PotentialRecoveryComponent_nz_option_26_Template, 1, 2, "nz-option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_Template_a_click_28_listener() { return ctx.ResetClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "nz-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-table", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCurrentPageDataChange", function PotentialRecoveryComponent_Template_nz_table_nzCurrentPageDataChange_34_listener($event) { return ctx.onCurrentPageDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "thead", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function PotentialRecoveryComponent_Template_th_nzCheckedChange_38_listener($event) { return ctx.checked = $event; })("nzCheckedChange", function PotentialRecoveryComponent_Template_th_nzCheckedChange_38_listener($event) { return ctx.onAllChecked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, PotentialRecoveryComponent_th_39_Template, 2, 5, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, PotentialRecoveryComponent_tr_41_Template, 26, 15, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_Template_button_click_44_listener() { return ctx.exportexcelSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_Template_button_click_46_listener() { return ctx.changeStatusFnCall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Change Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_Template_button_click_48_listener() { return ctx.clickHistory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Check History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_Template_button_click_52_listener() { return ctx.showModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Edit Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_Template_button_click_54_listener() { return ctx.SubmitAssign(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Insert Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PotentialRecoveryComponent_Template_button_click_56_listener() { return ctx.CreateClaim(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Create Claim");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "nz-modal", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function PotentialRecoveryComponent_Template_nz_modal_nzVisibleChange_58_listener($event) { return ctx.isChangePRstatusVisible = $event; })("nzOnCancel", function PotentialRecoveryComponent_Template_nz_modal_nzOnCancel_58_listener() { return ctx.ChangePRstatusCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, PotentialRecoveryComponent_ng_template_59_Template, 1, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, PotentialRecoveryComponent_ng_template_61_Template, 3, 3, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, PotentialRecoveryComponent_ng_template_63_Template, 4, 0, "ng-template", null, 39, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "nz-modal", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function PotentialRecoveryComponent_Template_nz_modal_nzVisibleChange_65_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function PotentialRecoveryComponent_Template_nz_modal_nzOnCancel_65_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, PotentialRecoveryComponent_ng_template_66_Template, 1, 0, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, PotentialRecoveryComponent_ng_template_68_Template, 12, 5, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, PotentialRecoveryComponent_ng_template_70_Template, 6, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "nz-modal", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function PotentialRecoveryComponent_Template_nz_modal_nzVisibleChange_72_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function PotentialRecoveryComponent_Template_nz_modal_nzOnCancel_72_listener() { return ctx.handleCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, PotentialRecoveryComponent_ng_template_73_Template, 1, 0, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, PotentialRecoveryComponent_ng_template_75_Template, 12, 5, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, PotentialRecoveryComponent_ng_template_77_Template, 6, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](69);
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/authentication/landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supplier_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c1))("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelections", ctx.listOfSelection)("nzChecked", ctx.checked)("nzIndeterminate", ctx.indeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfColumns)("ngForTrackBy", ctx.trackByName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r1.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.exportSelectedDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.isConfirmLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzLoading", ctx.isCreateClaimLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isChangePRstatusVisible)("nzContent", _r6)("nzFooter", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzTitle", _r10)("nzContent", _r12)("nzFooter", _r14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzTitle", _r10)("nzContent", _r12)("nzFooter", _r14);
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_8__["NzFormLabelComponent"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_9__["NzAvatarComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzPopoverDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__["NzCardComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTableComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTheadComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTrDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTableCellDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzThMeasureDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzThSelectionComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTbodyComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzOptionComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzThAddOnComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTdAddOnComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hdWRpdC9tYW5hZ2UtcHIvcG90ZW50aWFsLXJlY292ZXJ5L3BvdGVudGlhbC1yZWNvdmVyeS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PotentialRecoveryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-potential-recovery',
                templateUrl: './potential-recovery.component.html',
                styleUrls: ['./potential-recovery.component.scss'],
            }]
    }], function () { return [{ type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=component-audit-manage-pr-manage-pr-module.js.map