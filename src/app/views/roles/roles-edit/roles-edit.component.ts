import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-roles-edit',
  templateUrl: './roles-edit.component.html',
  styleUrls: ['./roles-edit.component.scss']
})
export class RolesEditComponent implements OnInit {
  public rolesId: any;
  public rolesObj: any = {};
  
  constructor(private router: Router,
    public activatedRoute: ActivatedRoute,) {
    this.rolesId = this.activatedRoute.snapshot.paramMap.get("id");

  }

  ngOnInit(): void {
  }
  goToRoles() {
    this.router.navigate([`/roles`]);
  }
  
}
