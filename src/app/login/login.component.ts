import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebService } from '../service/common-service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: boolean = false;
  token: any;
  queryParams: any = {};
  constructor(private router: Router, private formBuilder: FormBuilder, private webService: WebService, private toastr: ToastrService,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    let data = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value,
    }
    let url = 'auth/login';
    //  this.spinnerService.show();
    this.webService.login(data, url).subscribe((response: any) => {
      //  this.spinnerService.hide();
      if (response.jwt) {
        localStorage.setItem("token", response.jwt);
        localStorage.setItem("userid", response.user.id);
        let firstName = response.user.firstName;
        let lastName = response.user.lastName;
        let username = firstName + ' ' + lastName;
        localStorage.setItem("username", username);
        this.toastr.success('Login Successfully', 'Success');
        if (this.queryParams.return_url)
          this.router.navigate([`/${this.queryParams.return_url}`]);
        else
          this.router.navigate(['/reports']);

      } else if (response.status === 404) {
        this.toastr.error('Wrong credential', 'Warning');
      }
      //  if (response.result) {



      // } else {
      //   this.toastr.error(response.results.error, 'Error');
      // }
      // } else {
      //   this.toastr.error(response.message, 'Error');
      // }
    }, (error) => {
      console.log("error ts: ", error);
      //  this.toastr.error(error);
    })
    // this.router.navigate(['/default']);
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  goToReport() {
    this.router.navigate(['/reports']);
  }

}
