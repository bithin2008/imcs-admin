import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  token: any;
  constructor(private router: Router) {
    this.token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    if (this.token) {
      this.router.navigate(['/reports'])
    }
  }

}
