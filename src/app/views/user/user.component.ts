import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userList:any=null;
  alluserList:any=null;
  statusList: string[] = ['All Users', 'All Inactive Users', 'All Active Users'];
  status: string;
  constructor(private router: Router,) {
   }

  ngOnInit(): void {
     this.userList = [
      {
        "Id":1,
        "Name": "IMCS001",
        "Role": "Admin",
        "status": "Inactive"
      },
      {
        "Id":2,
        "Name": "IMCS001",
        "Role": "Admin",
        "status": "Active"
      }, {
        "Id":3,
        "Name": "IMCS003",
        "Role": "SuperAdmin",
        "status": "Inactive"
      },
      {
        "Id":4,
        "Name": "IMCS004",
        "Role": "SuperAdmin",
        "status": "Inactive"
      }, {
        "Id":5,
        "Name": "IMCS005",
        "Role": "SuperAdmin",
        "status": "Active"
      },
      {
        "Id":6,
        "Name": "IMCS006",
        "Role": "Admin",
        "status": "Active"
      }, {
        "Id":7,
        "Name": "IMCS007",
        "Role": "Admin",
        "status": "Active"
      },
      {
        "Id":8,
        "Name": "IMCS008",
        "Role": "Admin",
        "status": "Active"
      }
  
    ];
  this.alluserList=this.userList;
  }

  createUser() {
    this.router.navigate([`/user/new`]);
  }

  search(value: string): void {
    this.userList = this.alluserList;
    if (value === "") {
      this.userList = this.userList;
    }
    else {
      this.userList = this.userList.filter((val) => val.Name.includes(value));
    }
  }
  changeStatus() {
    this.userList = this.alluserList;
    let userStatus="";
    if(this.status==="All Inactive Users"){
      userStatus="Inactive";
    }
    else if(this.status==="All Active Users")
    {
      userStatus="Active";
    }
    if (this.status === "All Users") {
      this.userList = this.userList;
    }
    else {
      this.userList = this.userList.filter((val) => val.status.includes(userStatus));
    }
  }
  editUser(item) {
    this.router.navigate([`/user/${item.id}`]);
  }
}
