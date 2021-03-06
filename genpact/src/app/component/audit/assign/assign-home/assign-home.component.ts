import { Component, OnInit } from '@angular/core';
import { stringList } from 'aws-sdk/clients/datapipeline';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import * as XLSX from 'xlsx';
import {
  NzTableFilterFn,
  NzTableFilterList,
  NzTableSortFn,
  NzTableSortOrder,
} from 'ng-zorro-antd/table';
import { Router } from '@angular/router';

interface ItemData {
  id: number;
  UserChg: string;
  AuditYear: number;
  Tier: number;
  VendorSAP: string;
  VendorName: string;
  VendorNbr: number;
  Deal: number;
  ApprovedNot: string;
  ApprovedBy: string;
  AllItem: string;
  StartDate: string;
}

interface ColumnItem {
  name: string;
  sortOrder?: NzTableSortOrder;
  sortFn?: NzTableSortFn;
  listOfFilter?: NzTableFilterList;
  filterFn?: NzTableFilterFn;
  filterMultiple?: boolean;
  sortDirections?: NzTableSortOrder[];
}
@Component({
  selector: 'app-assign-home',
  templateUrl: './assign-home.component.html',
  styleUrls: ['./assign-home.component.scss'],
})
export class AssignHomeComponent implements OnInit {
  // **************************************************************************************
  // Variable Start
  cuntry_name_value: string = '';
  inputValue: string;

  isVisible = false;
  isConfirmLoading = false;
  checked = false;
  indeterminate = false;
  checked_td = false;
  checked_name: false;
  exportSelectedDisabled: boolean = true;
  disableSubmitAssign: boolean = true;
  isChangePRstatusVisible: boolean = false;

  listOfCurrentPageData: ItemData[] = [];
  listOfData: ItemData[] = [];
  fileName = 'ExcelSheet.xlsx';
  selectedlistOfCurrentPageData = [];
  id_checked;
  setOfCheckedId = new Set<number>();
  checkedValue: any;
  comment_value: string = '';

  i = 0;
  editId: string | null;

  auditor_name_value = '';
  supplier_value = '';
  status_value = '';
  year_value = '';
  Department_value = '';
  format_value = '';

  country_list = [
    { label: 'India', value: 'india' },
    { label: 'Spain', value: 'spain' },
  ];

  supplier_list = [
    { label: 'Audit Type 1', value: 'Audit Type 1' },
    { label: 'Audit Type 2', value: 'Audit Type 2' },
  ];

  year_list = [
    { label: '2021', value: '2021' },
    { label: '2020', value: '2020' },
  ];

  status_list = [
    { label: 'booked', value: 'booked' },
    { label: 'pending', value: 'pending' },
  ];
  Department_list = [
    { label: 'Department one', value: 'Department' },
    { label: 'Department two', value: 'Department' },
  ];

  Format_list = [
    { label: 'Format one', value: 'Format' },
    { label: 'Format two', value: 'Format' },
  ];

  listOfOption = ['Dmart', 'Tata', 'Puma', 'Dell'];
  listOfSelectedValue: string[] = [];

  isNotSelected(value: string): boolean {
    return this.listOfSelectedValue.indexOf(value) === -1;
  }
  trackByName(_: number, item: ColumnItem): string {
    return item.name;
  }

  listOfColumns: ColumnItem[] = [
    {
      name: 'User Chg',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.AuditYear - b.AuditYear,
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: ItemData) =>
        list.some((name) => item.UserChg.indexOf(name) !== -1),
    },
    {
      name: 'Audit Year',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.AuditYear - b.AuditYear,
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: ItemData) =>
        list.some((name) => item.UserChg.indexOf(name) !== -1),
    },
    {
      name: 'Tier',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.AuditYear - b.AuditYear,
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: ItemData) =>
        list.some((name) => item.UserChg.indexOf(name) !== -1),
    },
    {
      name: 'Vendor SAP',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.AuditYear - b.AuditYear,
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: ItemData) =>
        list.some((name) => item.UserChg.indexOf(name) !== -1),
    },
    {
      name: 'Vendor Name',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.AuditYear - b.AuditYear,
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: ItemData) =>
        list.some((name) => item.UserChg.indexOf(name) !== -1),
    },
    {
      name: 'Vendor Nbr',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.AuditYear - b.AuditYear,
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: ItemData) =>
        list.some((name) => item.UserChg.indexOf(name) !== -1),
    },
    {
      name: 'Deal',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.AuditYear - b.AuditYear,
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: ItemData) =>
        list.some((name) => item.UserChg.indexOf(name) !== -1),
    },
    {
      name: 'Approved/Not',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.AuditYear - b.AuditYear,
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: ItemData) =>
        list.some((name) => item.UserChg.indexOf(name) !== -1),
    },
    {
      name: 'Approved By',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.AuditYear - b.AuditYear,
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: ItemData) =>
        list.some((name) => item.UserChg.indexOf(name) !== -1),
    },
    {
      name: 'All Items',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.AuditYear - b.AuditYear,
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: ItemData) =>
        list.some((name) => item.UserChg.indexOf(name) !== -1),
    },
    {
      name: 'Start Date',
      sortOrder: 'descend',
      sortFn: (a: ItemData, b: ItemData) => a.AuditYear - b.AuditYear,
      sortDirections: ['descend', null],
      listOfFilter: [
        { text: 'Yes', value: 'Yes' },
        { text: 'No', value: 'No' },
      ],
      filterFn: (list: string[], item: ItemData) =>
        list.some((name) => item.UserChg.indexOf(name) !== -1),
    },
  ];

  listOfSelection = [
    {
      text: 'Select All Row',
      onSelect: () => {
        this.onAllChecked(true);
      },
    },
    {
      text: 'Select Odd Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 !== 0)
        );
        this.refreshCheckedStatus();
      },
    },
    {
      text: 'Select Even Row',
      onSelect: () => {
        this.listOfCurrentPageData.forEach((data, index) =>
          this.updateCheckedSet(data.id, index % 2 === 0)
        );
        this.refreshCheckedStatus();
      },
    },
  ];
  // Variable end
  // **************************************************************************************

  // **************************************************************************************
  // constructor Start
  constructor(
    private message: NzMessageService,
    private route: Router,
    private modalService: NzModalService
  ) {}
  // constructor end
  // **************************************************************************************

  // **************************************************************************************
  // showModal Start
  showModal(): void {
    console.log(this.setOfCheckedId.size, 'listOfSelection');
    if (this.setOfCheckedId.size == 0) {
      this.message.create('error', `Please select Supplier from table!`);
    } else {
      this.isVisible = true;
    }
  }
  // showModal end
  // **************************************************************************************

  // **************************************************************************************
  // handleOk Start
  AssignAudior(): void {
    if (this.listOfSelectedValue.length == 0) {
      this.message.create('error', `Please select Audiors!`);
    } else if (this.comment_value == '') {
      this.message.create('error', `Please add your comments!`);
    } else {
      this.isVisible = false;

      this.modalService.confirm({
        nzTitle: 'Are you sure to Assign auditor for selected claims?',
        nzContent: 'Action taken once can not be undone.',
        nzOkText: 'Confirm',
        nzCancelText: 'Cancel',
        nzOnOk: () =>
          new Promise((resolve, reject) => {
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
  AssignCancel(): void {
    this.isVisible = false;
  }
  // handleCancel end
  // **************************************************************************************

  // **************************************************************************************
  // updateCheckedSet Start
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
      // this.exportSelectedDisabled = false;
    } else {
      this.setOfCheckedId.delete(id);
      // this.exportSelectedDisabled = true;
    }
  }
  // updateCheckedSet end
  // **************************************************************************************

  // **************************************************************************************
  // onItemChecked Start
  onItemChecked(id: number, checked: boolean): void {
    this.exportSelectedDisabled = false;
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
    console.log(checked, id);
    if (checked == true) {
      let selected_list = this.listOfCurrentPageData.filter((object) => {
        return object['id'] == id;
      });

      this.selectedlistOfCurrentPageData.push(selected_list[0]);
    } else {
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
  onAllChecked(value: boolean): void {
    console.log(value);

    this.listOfCurrentPageData.forEach((item) =>
      this.updateCheckedSet(item.id, value)
    );
    this.refreshCheckedStatus();
    let selectedAllData: any = [];

    if (value == true) {
      this.selectedlistOfCurrentPageData = this.listOfCurrentPageData;
      console.log(this.selectedlistOfCurrentPageData);
      this.exportSelectedDisabled = false;
    } else {
      this.selectedlistOfCurrentPageData = selectedAllData;
      this.exportSelectedDisabled = true;
    }
  }
  // onAllChecked end
  // **************************************************************************************

  // **************************************************************************************
  // onAllChecked Start
  onCurrentPageDataChange($event: ItemData[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }
  // onAllChecked end
  // **************************************************************************************

  // **************************************************************************************
  // refreshCheckedStatus Start
  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      this.listOfCurrentPageData.some((item) =>
        this.setOfCheckedId.has(item.id)
      ) && !this.checked;
  }
  // refreshCheckedStatus end
  // **************************************************************************************

  // **************************************************************************************
  // ngOnInit Start
  ngOnInit(): void {
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
  startEdit(id: string): void {
    this.editId = id;
  }
  // startEdit end
  // **************************************************************************************

  // **************************************************************************************
  // stopEdit Start
  stopEdit(): void {
    this.editId = null;
  }
  // stopEdit end
  // **************************************************************************************

  // **************************************************************************************
  // addRow Start
  addRow(): void {
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
  deleteRow(id: string): void {
    // this.listOfData = this.listOfData.filter(d => d.id !== id);
  }
  // deleteRow end
  // **************************************************************************************

  // **************************************************************************************
  // exportexcel Start
  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }
  // exportexcel end
  // **************************************************************************************

  // **************************************************************************************
  // exportexcelSelected Start
  exportexcelSelected() {
    if (this.setOfCheckedId.size == 0) {
      this.message.create('error', `Please select Supplier from table!`);
      this.selectedlistOfCurrentPageData = [];
    } else {
      const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(
        this.selectedlistOfCurrentPageData
      );
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'test');

      XLSX.writeFile(wb, this.fileName);
      setTimeout(() => {}, 2000);
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
  // clickHistory end
  // **************************************************************************************

}
