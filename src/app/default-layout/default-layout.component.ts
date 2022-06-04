import { Component, OnInit } from '@angular/core';
import { AvatarModule, AvatarConfig } from "ngx-avatar";
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  userName: any;
  isOpenSettings: boolean = false
  constructor(private router: Router) {
    this.userName = localStorage.getItem('username');
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      console.log(evt);
      this.isOpenSettings = false;
    });

  }

}
