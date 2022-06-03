import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyList:any=null;
  constructor(private router: Router,) {
   }

  ngOnInit(): void {
     this.companyList = [
      {
        "Id":1,
        "companyName": "IMCS001",
        "lincenseStartDate": "01 May, 2022",
        "lincenseEndDate": "01 May, 2022",
        "invoiceStartNumber": 12121213,
        "poStartNumber": 35353535,
        "pidStart": 88656855
      },
      {
        "Id":2,
        "companyName": "IMCS002",
        "lincenseStartDate": "01 May, 2022",
        "lincenseEndDate": "01 May, 2022",
        "invoiceStartNumber": 12121213,
        "poStartNumber": 35353535,
        "pidStart": 88656855
      }, {
        "Id":3,
        "companyName": "IMCS003",
        "lincenseStartDate": "01 May, 2022",
        "lincenseEndDate": "01 May, 2022",
        "invoiceStartNumber": 12121213,
        "poStartNumber": 35353535,
        "pidStart": 88656855
      },
      {
        "Id":4,
        "companyName": "IMCS004",
        "lincenseStartDate": "01 May, 2022",
        "lincenseEndDate": "01 May, 2022",
        "invoiceStartNumber": 12121213,
        "poStartNumber": 35353535,
        "pidStart": 88656855
      }, {
        "Id":5,
        "companyName": "IMCS005",
        "lincenseStartDate": "01 May, 2022",
        "lincenseEndDate": "01 May, 2022",
        "invoiceStartNumber": 12121213,
        "poStartNumber": 35353535,
        "pidStart": 88656855
      },
      {
        "Id":6,
        "companyName": "IMCS006",
        "lincenseStartDate": "01 May, 2022",
        "lincenseEndDate": "01 May, 2022",
        "invoiceStartNumber": 12121213,
        "poStartNumber": 35353535,
        "pidStart": 88656855
      }, {
        "Id":7,
        "companyName": "IMCS007",
        "lincenseStartDate": "01 May, 2022",
        "lincenseEndDate": "01 May, 2022",
        "invoiceStartNumber": 12121213,
        "poStartNumber": 35353535,
        "pidStart": 88656855
      },
      {
        "Id":8,
        "companyName": "IMCS008",
        "lincenseStartDate": "01 May, 2022",
        "lincenseEndDate": "01 May, 2022",
        "invoiceStartNumber": 12121213,
        "poStartNumber": 35353535,
        "pidStart": 88656855
      }
  
    ];
  
  }

  createCompany() {
    this.router.navigate([`/company/new`]);
  }
  

  editCompany(item) {
    this.router.navigate([`/company/${item.invoiceNo}`]);
  }
}
