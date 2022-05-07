import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(event) {
    this.router.navigate(['/default']);
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  goToReport() {
    this.router.navigate(['/reports']);
  }

}
