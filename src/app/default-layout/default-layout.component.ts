import { Component, OnInit } from '@angular/core';
import { AvatarModule, AvatarConfig } from "ngx-avatar";
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {
  userName: any;
  constructor() {
    this.userName = localStorage.getItem('username');
  }

  ngOnInit(): void {
  }

}
