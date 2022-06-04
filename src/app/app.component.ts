import { Component } from '@angular/core';
import { Router, ActivatedRoute, } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  token: any;
  returnUrl: any;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.token = localStorage.getItem('token');
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  ngOnInit(): void {


    // if (this.token) {
    //   if (this.returnUrl)
    //     this.router.navigateByUrl(this.returnUrl);
    //   else this.router.navigate(['/reports'])
    // }

  }

}
