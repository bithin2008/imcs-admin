import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  rolesList:any=null;
  allrolesList:any=null;
  statusList: string[] = ['All Users', 'All Inactive Users', 'All Active Users'];
  status: string;
  constructor(private router: Router) {
   }

  ngOnInit(): void {
     this.rolesList = [
      {
        "Id":1,
        "Name": "IMCS001",
        "Role": "Admin",
        "status": "Inactive"
      },
      {
        "Id":2,
        "Name": "IMCS001",
        "Role": "Superadmin",
        "status": "Active"
      }, {
        "Id":3,
        "Name": "IMCS002",
        "Role": "Admin",
        "status": "Inactive"
      },
      {
        "Id":4,
        "Name": "IMCS003",
        "Role": "Admin",
        "status": "Inactive"
      }, {
        "Id":5,
        "Name": "IMCS004",
        "Role": "Superadmin",
        "status": "Active"
      },
      {
        "Id":6,
        "Name": "IMCS005",
        "Role": "Superadmin",
        "status": "Active"
      }, {
        "Id":7,
        "Name": "IMCS006",
        "Role": "Superadmin",
        "status": "Active"
      },
      {
        "Id":8,
        "Name": "IMCS007",
        "Role": "Superadmin",
        "status": "Active"
      }
  
    ];
    this.allrolesList = this.rolesList;
  }

  createRoles() {
    this.router.navigate([`/roles/new`]);
  }
  
  search(value: string): void {
    this.rolesList = this.allrolesList;
    if (value === "") {
      this.rolesList = this.rolesList;
    }
    else {
      this.rolesList = this.rolesList.filter((val) => val.Name.includes(value));
    }
  }
  changeStatus() {
    this.rolesList = this.allrolesList;
    let userStatus="";
    if(this.status==="All Inactive Users"){
      userStatus="Inactive";
    }
    else if(this.status==="All Active Users")
    {
      userStatus="Active";
    }
    if (this.status === "All Users") {
      this.rolesList = this.rolesList;
    }
    else {
      this.rolesList = this.rolesList.filter((val) => val.status.includes(userStatus));
    }
  }
  editRoles(item) {
    this.router.navigate([`/roles/${item.id}`]);
  }
}
