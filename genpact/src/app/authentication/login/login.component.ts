import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  // **************************************************************************************
  // Variable start
  show_error_message: boolean = false;
  showUserAuthMessage: boolean = false;

  country_err_text: string = '';
  error_message = '';

  loginForm: FormGroup;
  cuntry_name_value: any;
  country_list = [
    { label: 'India', value: 'india' },
    { label: 'Mexico', value: 'Mexico' },
    { label: 'Chile', value: 'Chile' },
  ];
  // Variable End
  // **************************************************************************************


  // **************************************************************************************
  // constructor start
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private route: ActivatedRoute
  ) {}
  // constructor End
  // **************************************************************************************


  // **************************************************************************************
  // ngOnInit start
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      country_list_fname: [null, [Validators.required]],
    });
  }
  // ngOnInit End
  // **************************************************************************************


  // **************************************************************************************
  // submitForm start
  submitForm(): void {
    this.show_error_message = false;
    for (const i in this.loginForm.controls) {
      this.loginForm.controls[i].markAsDirty();
      this.loginForm.controls[i].updateValueAndValidity();
    }

    if (this.cuntry_name_value == null || this.cuntry_name_value == '') {
      this.showUserAuthMessage = false;
      this.country_err_text = 'Please select country name';
    } else {
      if (
        this.loginForm.value.userName == 'admin@genpact.com' &&
        this.loginForm.value.password == '123456'
      ) {
        this.showUserAuthMessage = false;
        this.router.navigate(['/authentication/landing']);
      } else if (
        this.loginForm.value.userName == 'user@genpact.com' &&
        this.loginForm.value.password == '123456'
      ) {
        this.router.navigate(['/authentication/landing']);
      } else if (
        this.loginForm.value.userName == 'client@genpact.com' &&
        this.loginForm.value.password == '123456'
      ) {
        this.showUserAuthMessage = false;
        this.router.navigate(['/authentication/landing']);
      } else {
        this.showUserAuthMessage = true;
      }
    }
  }
  // submitForm End
  // **************************************************************************************
}
