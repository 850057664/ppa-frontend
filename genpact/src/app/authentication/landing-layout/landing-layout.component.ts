import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { formatDistance } from 'date-fns';
import { NzMessageService } from 'ng-zorro-antd';
declare var $: any;

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
})
export class LandingLayoutComponent implements OnInit {
  // **************************************************************************************
  // Variable Start
  radioValue;
  NextBtnDisable: boolean = true;
  showPRRequest: boolean = true;
  showNextFnCall: boolean = false;
  selectionType: string = '';

  listOfData = [];
  disable_next_btn: boolean = true;
  // Variable End
  // **************************************************************************************


  // **************************************************************************************
  // constructor Start
  constructor(private router: Router, private message: NzMessageService) {}
  // constructor End
  // **************************************************************************************


  // **************************************************************************************
  // ngOnInit Start
  ngOnInit(): void {
    var elementData = document.getElementById('data');
    var elementClaim = document.getElementById('claim');
    var elementReports = document.getElementById('reports');
    var elemenAudit = document.getElementById('audit');
    elementData.classList.remove('cardActive');
    elementClaim.classList.remove('cardActive');
    elementReports.classList.remove('cardActive');
    elemenAudit.classList.add('cardActive');

    this.listOfData.push(
      {
        name: `Volume Rebet`,
      },
      {
        name: `New Store`,
      },
      {
        name: `Undeducted Co-op`,
      },

      {
        name: `Miscellaneous`,
      },
      {
        name: `Scan Allowance`,
      },
      {
        name: `Duplicate`,
      },
      {
        name: `Advertising`,
      },
      {
        name: `Shortages`,
      },
      {
        name: `Low Price`,
      },
      {
        name: `Fill Rate`,
      },

      {
        name: `Deducted Co-op`,
      }
    );
  }

  // ngOnInit End
  // **************************************************************************************


  // **************************************************************************************
  // showNav Start
  showNav(show) {}
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

      this.listOfData.push(
        {
          name: `Volume Rebet`,
        },
        {
          name: `New Store`,
        },
        {
          name: `Undeducted Co-op`,
        },

        {
          name: `Scan Allowance`,
        },
        {
          name: `Duplicate`,
        },
        {
          name: `Advertising`,
        },
        {
          name: `Shortages`,
        },
        {
          name: `Low Price`,
        },
        {
          name: `Fill Rate`,
        },

        {
          name: `Deducted Co-op`,
        }
      );
    } else if (e == 'claim') {
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
    } else if (e == 'reports') {
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

      this.listOfData.push(
        {
          name: `Claims Consolidated`,
        },
        {
          name: `Claim Tracking Details`,
        },
        {
          name: `Claims List Pending`,
        }
      );
    } else if (e == 'audit') {
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

      this.listOfData.push(
        {
          name: `Volume Rebet`,
        },
        {
          name: `New Store`,
        },
        {
          name: `Undeducted Co-op`,
        },

        {
          name: `Miscellaneous`,
        },
        {
          name: `Scan Allowance`,
        },
        {
          name: `Duplicate`,
        },
        {
          name: `Advertising`,
        },
        {
          name: `Shortages`,
        },
        {
          name: `Low Price`,
        },
        {
          name: `Fill Rate`,
        },
        {
          name: `Fill Rate`,
        },
        {
          name: `Deducted Co-op`,
        }
      );
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
  ManagePrFnCall(): void {
    console.log(this.radioValue, 'hhh');
    if (this.radioValue !== undefined) {
      this.router.navigate(['/manage_pr/potential_recovery']);
    } else {
      this.NextBtnDisable = false;
    }
  }
  // ManagePrFnCall End
  // **************************************************************************************


  // **************************************************************************************
  // AssignPRFnCall Start
  AssignPRFnCall(): void {
    console.log(this.radioValue, 'hhh');
    if (this.radioValue !== undefined) {
      this.router.navigate(['/assign/home']);
    } else {
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
      console.log(this.selectionType)
      if(this.selectionType == 'reports'){
        this.router.navigate(['/reports/reports_view']);
      }else if(this.selectionType == 'data'){
        this.router.navigate(['/data/data_view']);
      }else{
        this.router.navigate(['/assign/home']);
      }
    } else {
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
  // LogoutUser End
  // **************************************************************************************
}
