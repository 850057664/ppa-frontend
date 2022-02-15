(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["component-reports-reports-module"],{

/***/ "./src/app/component/reports/reports-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/component/reports/reports-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _reports_view_reports_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-view/reports-view.component */ "./src/app/component/reports/reports-view/reports-view.component.ts");





const routes = [
    {
        path: 'reports_view',
        component: _reports_view_reports_view_component__WEBPACK_IMPORTED_MODULE_2__["ReportsViewComponent"],
        data: {
            title: 'Reports',
            headerDisplay: "none"
        }
    },
];
class ReportsRoutingModule {
}
ReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportsRoutingModule });
ReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportsRoutingModule_Factory(t) { return new (t || ReportsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/reports/reports-view/reports-view.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/reports/reports-view/reports-view.component.ts ***!
  \**************************************************************************/
/*! exports provided: ReportsViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsViewComponent", function() { return ReportsViewComponent; });
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


















function ReportsViewComponent_nz_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "nz-option", 28);
} if (rf & 2) {
    const o_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzValue", o_r4.value)("nzLabel", o_r4.label);
} }
function ReportsViewComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzSortOrderChange", function ReportsViewComponent_th_33_Template_th_nzSortOrderChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const column_r5 = ctx.$implicit; return column_r5.sortOrder = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSortOrder", column_r5.sortOrder)("nzSortFn", column_r5.sortFn)("nzFilters", column_r5.listOfFilter)("nzFilterFn", column_r5.filterFn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r5.name, "");
} }
function ReportsViewComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function ReportsViewComponent_tr_35_Template_td_nzCheckedChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const data_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onItemChecked(data_r8.id, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsViewComponent_tr_35_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const data_r8 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.startEdit(data_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportsViewComponent_tr_35_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const data_r8 = ctx.$implicit; return data_r8.name = $event; })("blur", function ReportsViewComponent_tr_35_Template_input_blur_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.stopEdit(); });
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
    const data_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzChecked", ctx_r3.setOfCheckedId.has(data_r8.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.editId === data_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r8.UserChg, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r3.editId !== data_r8.id)("ngModel", data_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8.AuditYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8.Tier);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8.VendorSAP);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8.VendorName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8.VendorNbr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8.Deal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8.ApprovedNot);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8.ApprovedBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8.AllItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r8.StartDate);
} }
const _c0 = function () { return { x: "1200px", y: "240px" }; };
class ReportsViewComponent {
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
ReportsViewComponent.ɵfac = function ReportsViewComponent_Factory(t) { return new (t || ReportsViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"])); };
ReportsViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportsViewComponent, selectors: [["app-reports-view"]], decls: 40, vars: 14, consts: [["nz-typography", ""], [1, "row", "row_top"], [1, "col-xs-12", "col-sm-12", "col-md-7", "col-lg-7"], [1, "section"], [2, "margin-bottom", "10px"], [1, "breadcrumb_active", 3, "routerLink"], ["nz-icon", "", "nzType", "home", "nzTheme", "fill", 2, "color", "#073262"], [1, "breadcrumb_text"], [1, "col-xs-12", "col-sm-12", "col-md-2", "col-lg-2"], ["nzIcon", "user", "nzSrc", "../../../assets/images/logo/chile.png"], [2, "float", "right !important"], ["nzShowSearch", "", "nzAllowClear", "", "nzPlaceHolder", "New Store", 2, "margin-bottom", "5px", 3, "ngModel", "ngModelChange"], [3, "nzValue", "nzLabel", 4, "ngFor", "ngForOf"], [1, "col-xs-12", "col-sm-12", "col-md-1", "col-lg-1"], ["nz-popover", "", "nzPopoverContent", "Clear selection", 2, "font-weight", "bold", "font-size", "20px", 3, "click"], ["nz-icon", "", "nzType", "reload", "nzTheme", "outline"], [2, "opacity", "1 !important"], [1, "row"], [1, "col-xs-12", "col-sm-12", "col-md-12", "col-lg-12"], ["id", "excel-table", 3, "nzData", "nzScroll", "nzShowPagination", "nzCurrentPageDataChange"], ["rowSelectionTable", ""], [2, "font-size", "12px !important"], [3, "nzSelections", "nzChecked", "nzIndeterminate", "nzCheckedChange"], [3, "nzSortOrder", "nzSortFn", "nzFilters", "nzFilterFn", "nzSortOrderChange", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngFor", "ngForOf"], [1, "row", "row-top"], [1, "col-sm-12", "col-md-7", "col-lg-9"], ["nz-button", "", "nzType", "primary", 2, "float", "left", "color", "#fff !important", "margin-right", "10px !important", 3, "disabled", "click"], [3, "nzValue", "nzLabel"], [3, "nzSortOrder", "nzSortFn", "nzFilters", "nzFilterFn", "nzSortOrderChange"], [3, "nzChecked", "nzCheckedChange"], [1, "editable-cell", 3, "hidden", "click"], ["type", "text", "nz-input", "", 3, "hidden", "ngModel", "ngModelChange", "blur"]], template: function ReportsViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reports");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Reports ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportsViewComponent_Template_nz_select_ngModelChange_19_listener($event) { return ctx.supplier_value = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ReportsViewComponent_nz_option_20_Template, 1, 2, "nz-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsViewComponent_Template_a_click_22_listener() { return ctx.ResetClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "nz-card", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-table", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCurrentPageDataChange", function ReportsViewComponent_Template_nz_table_nzCurrentPageDataChange_28_listener($event) { return ctx.onCurrentPageDataChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzCheckedChange", function ReportsViewComponent_Template_th_nzCheckedChange_32_listener($event) { return ctx.checked = $event; })("nzCheckedChange", function ReportsViewComponent_Template_th_nzCheckedChange_32_listener($event) { return ctx.onAllChecked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ReportsViewComponent_th_33_Template, 2, 5, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ReportsViewComponent_tr_35_Template, 26, 15, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportsViewComponent_Template_button_click_38_listener() { return ctx.exportexcelSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/authentication/landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.supplier_value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supplier_list);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzData", ctx.listOfData)("nzScroll", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0))("nzShowPagination", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSelections", ctx.listOfSelection)("nzChecked", ctx.checked)("nzIndeterminate", ctx.indeterminate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listOfColumns)("ngForTrackBy", ctx.trackByName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _r1.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.exportSelectedDisabled);
    } }, directives: [ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbComponent"], ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["NzBreadCrumbItemComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_6__["NzIconDirective"], ng_zorro_antd_avatar__WEBPACK_IMPORTED_MODULE_7__["NzAvatarComponent"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_8__["NzColDirective"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_9__["NzFormLabelComponent"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzPopoverDirective"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_13__["NzCardComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTableComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTheadComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTrDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTableCellDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzThMeasureDirective"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzThSelectionComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTbodyComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_14__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], ng_zorro_antd_select__WEBPACK_IMPORTED_MODULE_10__["NzOptionComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzThAddOnComponent"], ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzTdAddOnComponent"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_16__["NzInputDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZXBvcnRzL3JlcG9ydHMtdmlldy9yZXBvcnRzLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reports-view',
                templateUrl: './reports-view.component.html',
                styleUrls: ['./reports-view.component.scss']
            }]
    }], function () { return [{ type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/component/reports/reports.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/component/reports/reports.module.ts ***!
  \*****************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/component/reports/reports-routing.module.ts");
/* harmony import */ var _reports_view_reports_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-view/reports-view.component */ "./src/app/component/reports/reports-view/reports-view.component.ts");
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
class ReportsModule {
}
ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportsModule });
ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportsModule_Factory(t) { return new (t || ReportsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ...antdModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsModule, { declarations: [_reports_view_reports_view_component__WEBPACK_IMPORTED_MODULE_3__["ReportsViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
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
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_reports_view_reports_view_component__WEBPACK_IMPORTED_MODULE_3__["ReportsViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    ...antdModule,
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=component-reports-reports-module.js.map