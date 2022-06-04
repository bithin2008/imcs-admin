import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.scss']
})
export class InventoryEditComponent implements OnInit {
  public inventoryId: any;
  public inventoryObj: any = {};
  public salesList: any = [
    {
      "invoiceNo": "IMCS001",
      "dateTime": "01 May, 2022",
      "customerName": "C.K Lohia",
      "channel": "-",
      "orderType": "Online",
      "paymentMode": "Net Banking",
      "salesRepresentative": "G.C. Dhamija",
      "totalSales": "27,450.00",
      "status": "Confirmed"
    },
    {
      "invoiceNo": "IMCS002",
      "dateTime": "29 Apr, 2022",
      "customerName": "S.M VInod",
      "channel": "-",
      "orderType": "Online",
      "paymentMode": "UPI",
      "salesRepresentative": "A. Sen",
      "totalSales": "44,250.00",
      "status": "Pending"
    }, {
      "invoiceNo": "IMCS003",
      "dateTime": "01 May, 2022",
      "customerName": "C.K Lohia",
      "channel": "-",
      "orderType": "Online",
      "paymentMode": "Net Banking",
      "salesRepresentative": "G.C. Dhamija",
      "totalSales": "27,450.00",
      "status": "Confirmed"
    },
    {
      "invoiceNo": "IMCS004",
      "dateTime": "29 Apr, 2022",
      "customerName": "S.M VInod",
      "channel": "-",
      "orderType": "Online",
      "paymentMode": "UPI",
      "salesRepresentative": "A. Sen",
      "totalSales": "44,250.00",
      "status": "Pending"
    }, {
      "invoiceNo": "IMCS005",
      "dateTime": "01 May, 2022",
      "customerName": "C.K Lohia",
      "channel": "-",
      "orderType": "Online",
      "paymentMode": "Net Banking",
      "salesRepresentative": "G.C. Dhamija",
      "totalSales": "27,450.00",
      "status": "Confirmed"
    },
    {
      "invoiceNo": "IMCS006",
      "dateTime": "29 Apr, 2022",
      "customerName": "S.M VInod",
      "channel": "-",
      "orderType": "Online",
      "paymentMode": "UPI",
      "salesRepresentative": "A. Sen",
      "totalSales": "44,250.00",
      "status": "Pending"
    }, {
      "invoiceNo": "IMCS007",
      "dateTime": "01 May, 2022",
      "customerName": "C.K Lohia",
      "channel": "-",
      "orderType": "Online",
      "paymentMode": "Net Banking",
      "salesRepresentative": "G.C. Dhamija",
      "totalSales": "27,450.00",
      "status": "Confirmed"
    },
    {
      "invoiceNo": "IMCS008",
      "dateTime": "29 Apr, 2022",
      "customerName": "S.M VInod",
      "channel": "-",
      "orderType": "Online",
      "paymentMode": "UPI",
      "salesRepresentative": "A. Sen",
      "totalSales": "44,250.00",
      "status": "Pending"
    }

  ];



  constructor(private router: Router,
    public activatedRoute: ActivatedRoute,) {
    this.inventoryObj = this.activatedRoute.snapshot.paramMap.get("id");


  }

  ngOnInit(): void {
  }
  goToSales() {
    this.router.navigate([`/sales`]);
  }
}
