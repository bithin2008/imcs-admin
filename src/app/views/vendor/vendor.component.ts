import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  vendorList: any = null;
  allvendorList: any = null;
  constructor(private router: Router,) {
  }

  ngOnInit(): void {
    this.vendorList = [
      {
        "Id": 1,
        "VendorNumber": "IMCS001",
        "CompanyName": "amazon",
        "Address": "71 ST. NICHOLAS DRIVE",
        "ContactName": "ABC ABC"
      },
      {
        "Id": 2,
        "VendorNumber": "IMCS002",
        "CompanyName": "amazon",
        "Address": "71 ST. NICHOLAS DRIVE",
        "ContactName": "ABC ABC"
      }, {
        "Id": 3,
        "VendorNumber": "IMCS003",
        "CompanyName": "Google",
        "Address": "71 ST. NICHOLAS DRIVE",
        "ContactName": "ABC ABC"
      },
      {
        "Id": 4,
        "VendorNumber": "IMCS004",
        "CompanyName": "Google",
        "Address": "71 ST. NICHOLAS DRIVE",
        "ContactName": "ABC ABC"
      }, {
        "Id": 5,
        "VendorNumber": "IMCS005",
        "CompanyName": "amazon",
        "Address": "71 ST. NICHOLAS DRIVE",
        "ContactName": "ABC ABC"
      },
      {
        "Id": 6,
        "VendorNumber": "IMCS006",
        "CompanyName": "amazon",
        "Address": "71 ST. NICHOLAS DRIVE",
        "ContactName": "ABC ABC"
      }, {
        "Id": 7,
        "VendorNumber": "IMCS007",
        "CompanyName": "Google",
        "Address": "71 ST. NICHOLAS DRIVE",
        "ContactName": "ABC ABC"
      },
      {
        "Id": 8,
        "VendorNumber": "IMCS008",
        "CompanyName": "Google",
        "Address": "71 ST. NICHOLAS DRIVE",
        "ContactName": "ABC ABC"
      }

    ];
    this.allvendorList = this.vendorList;
  }

  createVendor() {
    this.router.navigate([`/vendor/new`]);
  }

  search(value: string): void {
    this.vendorList = this.allvendorList;
    if (value === "") {
      this.vendorList = this.vendorList;
    }
    else {
      this.vendorList = this.vendorList.filter((val) => val.VendorNumber.includes(value));
    }
  }

  editVendor(item) {
    this.router.navigate([`/vendor/${item.id}`]);
  }
}
