(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-data-data-module"],{

/***/ "./src/app/component/data/data-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/component/data/data-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DataRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataRoutingModule", function() { return DataRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _data_view_data_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-view/data-view.component */ "./src/app/component/data/data-view/data-view.component.ts");





const routes = [
    {
        path: 'data_view',
        component: _data_view_data_view_component__WEBPACK_IMPORTED_MODULE_2__["DataViewComponent"],
        data: {
            title: 'Potential Recovery',
            headerDisplay: "none"
        }
    },
];
class DataRoutingModule {
}
DataRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataRoutingModule });
DataRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataRoutingModule_Factory(t) { return new (t || DataRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/data/data-view/data-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/data/data-view/data-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: DataViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataViewComponent", function() { return DataViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-breadcrumb.js");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-transition-patch.js");
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/icon */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-icon.js");
/* harmony import */ var ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/avatar */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-avatar.js");
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/grid */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-grid.js");
/* harmony import */ var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/form */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-form.js");
/* harmony import */ var ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/select */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/card */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-card.js");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-zorro-antd/button */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-button.js");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-core-wave.js");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/input */ "./node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-input.js");


















function DataViewComponent_nz_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 34);
} if (rf & 2) {
    const o_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r10.value)("nzLabel", o_r10.label);
} }
function DataViewComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSortOrderChange", function DataViewComponent_th_33_Template_th_nzSortOrderChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const column_r11 = ctx.$implicit; return column_r11.sortOrder = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSortOrder", column_r11.sortOrder)("nzSortFn", column_r11.sortFn)("nzFilters", column_r11.listOfFilter)("nzFilterFn", column_r11.filterFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r11.name, "");
} }
function DataViewComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function DataViewComponent_tr_35_Template_td_nzCheckedChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const data_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onItemChecked(data_r14.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataViewComponent_tr_35_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const data_r14 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.startEdit(data_r14.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DataViewComponent_tr_35_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const data_r14 = ctx.$implicit; return data_r14.name = $event; })("blur", function DataViewComponent_tr_35_Template_input_blur_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.stopEdit(); });
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
    const data_r14 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx_r3.setOfCheckedId.has(data_r14.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.editId === data_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r14.UserChg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.editId !== data_r14.id)("ngModel", data_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.AuditYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.Tier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.VendorSAP);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.VendorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.VendorNbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.Deal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.ApprovedNot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.ApprovedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.AllItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r14.StartDate);
} }
function DataViewComponent_ng_template_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Bulk Update ");
} }
function DataViewComponent_ng_template_47_Template(rf, ctx) { }
function DataViewComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataViewComponent_ng_template_49_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.AssignCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataViewComponent_ng_template_49_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.AssignAudior(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { x: "1200px", y: "240px" }; };
class DataViewComponent {
    // Variable end
    // **************************************************************************************
    // **************************************************************************************
    // constructor Start
    constructor(message, route, modalService) {
        this.message = message;
        this.route = route;
        this.modalService = modalService;
        // **************************************************************************************
        // Variable Start
        this.cuntry_name_value = '';
        this.isVisible = false;
        this.isConfirmLoading = false;
        this.checked = false;
        this.indeterminate = false;
        this.checked_td = false;
        this.exportSelectedDisabled = true;
        this.disableSubmitAssign = true;
        this.isChangePRstatusVisible = false;
        this.listOfCurrentPageData = [];
        this.listOfData = [];
        this.fileName = 'ExcelSheet.xlsx';
        this.selectedlistOfCurrentPageData = [];
        this.setOfCheckedId = new Set();
        this.comment_value = '';
        this.i = 0;
        this.auditor_name_value = '';
        this.supplier_value = '';
        this.status_value = '';
        this.year_value = '';
        this.Department_value = '';
        this.format_value = '';
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
    }
    isNotSelected(value) {
        return this.listOfSelectedValue.indexOf(value) === -1;
    }
    trackByName(_, item) {
        return item.name;
    }
    // constructor end
    // **************************************************************************************
    // **************************************************************************************
    // showModal Start
    BulkUpdateFnCall() {
        console.log(this.setOfCheckedId.size, 'listOfSelection');
        if (this.setOfCheckedId.size == 0) {
            this.message.create('error', `Please select Supplier from table!`);
        }
        else {
            this.isVisible = true;
        }
    }
    // showModal end
    // **************************************************************************************
    // **************************************************************************************
    // handleOk Start
    AssignAudior() {
        if (this.listOfSelectedValue.length == 0) {
            this.message.create('error', `Please select Audiors!`);
        }
        else if (this.comment_value == '') {
            this.message.create('error', `Please add your comments!`);
        }
        else {
            this.isVisible = false;
            this.modalService.confirm({
                nzTitle: 'Are you sure to Assign auditor for selected claims?',
                nzContent: 'Action taken once can not be undone.',
                nzOkText: 'Confirm',
                nzCancelText: 'Cancel',
                nzOnOk: () => new Promise((resolve, reject) => {
                    setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
                    setTimeout(() => {
                        this.isConfirmLoading = false;
                        this.message.create('success', `Auditor assigned successfully!`);
                        this.route
                            .navigateByUrl('/manage_pr/potential_recovery', {
                            skipLocationChange: true,
                        })
                            .then(() => {
                            this.route.navigate(['/dashboard/home']);
                        });
                    }, 1000);
                }).catch(() => console.log('Oops errors!')),
            });
        }
    }
    // handleOk end
    // **************************************************************************************
    // **************************************************************************************
    // handleCancel Start
    AssignCancel() {
        this.isVisible = false;
    }
    // handleCancel end
    // **************************************************************************************
    // **************************************************************************************
    // updateCheckedSet Start
    updateCheckedSet(id, checked) {
        if (checked) {
            this.setOfCheckedId.add(id);
            // this.exportSelectedDisabled = false;
        }
        else {
            this.setOfCheckedId.delete(id);
            // this.exportSelectedDisabled = true;
        }
    }
    // updateCheckedSet end
    // **************************************************************************************
    // **************************************************************************************
    // onItemChecked Start
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
            // this.selectedlistOfCurrentPageData.push(selected_list_1[0])
        }
    }
    // onItemChecked end
    // **************************************************************************************
    // **************************************************************************************
    // onAllChecked Start
    onAllChecked(value) {
        console.log(value);
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
    // onAllChecked Start
    onCurrentPageDataChange($event) {
        this.listOfCurrentPageData = $event;
        this.refreshCheckedStatus();
    }
    // onAllChecked end
    // **************************************************************************************
    // **************************************************************************************
    // refreshCheckedStatus Start
    refreshCheckedStatus() {
        this.checked = this.listOfCurrentPageData.every((item) => this.setOfCheckedId.has(item.id));
        this.indeterminate =
            this.listOfCurrentPageData.some((item) => this.setOfCheckedId.has(item.id)) && !this.checked;
    }
    // refreshCheckedStatus end
    // **************************************************************************************
    // **************************************************************************************
    // ngOnInit Start
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
    // ngOnInit end
    // **************************************************************************************
    // **************************************************************************************
    // startEdit Start
    startEdit(id) {
        this.editId = id;
    }
    // startEdit end
    // **************************************************************************************
    // **************************************************************************************
    // stopEdit Start
    stopEdit() {
        this.editId = null;
    }
    // stopEdit end
    // **************************************************************************************
    // **************************************************************************************
    // addRow Start
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
    // deleteRow Start
    deleteRow(id) {
        // this.listOfData = this.listOfData.filter(d => d.id !== id);
    }
    // deleteRow end
    // **************************************************************************************
    // **************************************************************************************
    // exportexcel Start
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
    // exportexcelSelected Start
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
    // ResetClick Start
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
    // clickHistory Start
    clickHistory() {
        this.route.navigate(['/assign/assign-history']);
    }
}
DataViewComponent.ɵfac = function DataViewComponent_Factory(t) { return new (t || DataViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"])); };
DataViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DataViewComponent, selectors: [["app-data-view"]], decls: 51, vars: 18, consts: [["nz-typography", ""], [1, "row", "row_top"], [1, "col-xs-12", "col-sm-12", "col-md-7", "col-lg-7"], [1, "section"], [2, "margin-bottom", "10px"], [1, "breadcrumb_active", 3, "routerLink"], ["nz-icon", "", "nzType", "home", "nzTheme", "fill", 2, "color", "#073262"], [1, "breadcrumb_text"], [1, "col-xs-12", "col-sm-12", "col-md-2", "col-lg-2"], ["nzIcon", "user", "nzSrc", "../../../assets/images/logo/chile.png"], [2, "float", "right !important"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "New Store", 2, "margin-bottom", "5px", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-sm-12", "col-md-1", "col-lg-1"], ["nz-popover", "", "nzPopoverContent", "Clear selection", 2, "font-weight", "bold", "font-size", "20px", 3, "click"], ["nz-icon", "", "nzType", "reload", "nzTheme", "outline"], [2, "opacity", "1 !important"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], ["id", "excel-table", 3, "nzData", "nzScroll", "nzShowPagination", "nzCurrentPageDataChange"], ["rowSelectionTable", ""], [2, "font-size", "12px !important"], [3, "nzSelections", "nzChecked", "nzIndeterminate", "nzCheckedChange"], [3, "nzSortOrder", "nzSortFn", "nzFilters", "nzFilterFn", "nzSortOrderChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngFor", "ngForOf"], [1, "row", "row-top"], [1, "col-sm-12", "col-md-7", "col-lg-9"], ["nz-button", "", "nzType", "primary", 2, "float", "left", "color", "#fff !important", "margin-right", "10px !important", 3, "disabled", "click"], [1, "col-sm-12", "col-md-5", "col-lg-3"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 2, "float", "left", "color", "#fff !important", "margin-right", "10px !important", 3, "click"], [3, "nzVisible", "nzTitle", "nzContent", "nzFooter", "nzVisibleChange", "nzOnCancel"], ["modalTitle", ""], ["modalContent", ""], ["modalFooter", ""], [3, "nzValue", "nzLabel"], [3, "nzSortOrder", "nzSortFn", "nzFilters", "nzFilterFn", "nzSortOrderChange"], [3, "nzChecked", "nzCheckedChange"], [1, "editable-cell", 3, "hidden", "click"], ["type", "text", "nz-input", "", 3, "hidden", "ngModel", "ngModelChange", "blur"], ["nz-button", "", "nzType", "default", "nzDanger", "", 3, "click"], ["nz-button", "", "nzType", "primary", "nzDanger", "", 3, "click"]], template: function DataViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Data");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "nz-avatar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Chile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-form-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Audit Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nz-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DataViewComponent_Template_nz_select_ngModelChange_19_listener($event) { return ctx.supplier_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DataViewComponent_nz_option_20_Template, 1, 2, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataViewComponent_Template_a_click_22_listener() { return ctx.ResetClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-table", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCurrentPageDataChange", function DataViewComponent_Template_nz_table_nzCurrentPageDataChange_28_listener($event) { return ctx.onCurrentPageDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function DataViewComponent_Template_th_nzCheckedChange_32_listener($event) { return ctx.checked = $event; })("nzCheckedChange", function DataViewComponent_Template_th_nzCheckedChange_32_listener($event) { return ctx.onAllChecked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DataViewComponent_th_33_Template, 2, 5, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DataViewComponent_tr_35_Template, 26, 15, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataViewComponent_Template_button_click_38_listener() { return ctx.exportexcelSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DataViewComponent_Template_button_click_42_listener() { return ctx.BulkUpdateFnCall(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Bulk Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "nz-modal", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function DataViewComponent_Template_nz_modal_nzVisibleChange_44_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function DataViewComponent_Template_nz_modal_nzOnCancel_44_listener() { return ctx.AssignCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, DataViewComponent_ng_template_45_Template, 1, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, DataViewComponent_ng_template_47_Template, 0, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, DataViewComponent_ng_template_49_Template, 4, 0, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](46);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/authentication/landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supplier_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0))("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelections", ctx.listOfSelection)("nzChecked", ctx.checked)("nzIndeterminate", ctx.indeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfColumns)("ngForTrackBy", ctx.trackByName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r1.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.exportSelectedDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible)("nzTitle", _r4)("nzContent", _r6)("nzFooter", _r8);
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__["NzAvatarComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormLabelComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzPopoverDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__["NzCardComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTableComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTheadComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTrDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTableCellDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzThMeasureDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzThSelectionComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTbodyComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzOptionComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzThAddOnComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTdAddOnComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kYXRhL2RhdGEtdmlldy9kYXRhLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-data-view',
                templateUrl: './data-view.component.html',
                styleUrls: ['./data-view.component.scss']
            }]
    }], function () { return [{ type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/data/data.module.ts":
/*!***********************************************!*\
  !*** ./src/app/component/data/data.module.ts ***!
  \***********************************************/
/*! exports provided: DataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModule", function() { return DataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _data_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-routing.module */ "./src/app/component/data/data-routing.module.ts");
/* harmony import */ var _data_view_data_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-view/data-view.component */ "./src/app/component/data/data-view/data-view.component.ts");
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
class DataModule {
}
DataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DataModule });
DataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DataModule_Factory(t) { return new (t || DataModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _data_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ...antdModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DataModule, { declarations: [_data_view_data_view_component__WEBPACK_IMPORTED_MODULE_3__["DataViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _data_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataRoutingModule"],
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_data_view_data_view_component__WEBPACK_IMPORTED_MODULE_3__["DataViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _data_routing_module__WEBPACK_IMPORTED_MODULE_2__["DataRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    ...antdModule,
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=component-data-data-module.js.map