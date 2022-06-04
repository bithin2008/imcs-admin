import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  public userId: any;
  public userObj: any = {};
  constructor(private router: Router,
    public activatedRoute: ActivatedRoute,) {
    this.userId = this.activatedRoute.snapshot.paramMap.get("id");

  }

  ngOnInit(): void {
  }
  goToUser() {
    this.router.navigate([`/user`]);
  }
  
}
