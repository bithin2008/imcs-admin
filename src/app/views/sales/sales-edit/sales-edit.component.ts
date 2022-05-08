import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-sales-edit',
  templateUrl: './sales-edit.component.html',
  styleUrls: ['./sales-edit.component.scss']
})
export class SalesEditComponent implements OnInit {
  public salesId: any;
  public salesObj: any = {};
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
  public paymentList: any = [
    {
      "paymentType": "Cash",
      "Amount": "21,750"
    },
    {
      "paymentType": "Card",
      "Amount": "24,350"
    },
    {
      "paymentType": "Cash",
      "Amount": "21,750"
    },
    {
      "paymentType": "Card",
      "Amount": "24,350"
    },
    {
      "paymentType": "Cash",
      "Amount": "21,750"
    },
    {
      "paymentType": "Card",
      "Amount": "24,350"
    }
  ];
  productList: any = [
    {
      "pid": "Cash",
      "certificateNumber": "21,750",
      "description": "21,750",
      "subTotal": "21,750",
      "taxes": "21,750",
      "removeProduct": "21,750"
    },
  ];
  paymentColumnDefs: ColDef[] = [
    { field: 'paymentType', resizable: true },
    { field: 'Amount', resizable: true }
  ];
  productColumnDefs: ColDef[] = [
    { field: 'pid', resizable: true },
    { field: 'certificateNumber', resizable: true },
    { field: 'description', resizable: true },
    { field: 'subTotal', resizable: true },
    { field: 'taxes', resizable: true },
    { field: 'removeProduct', resizable: true },
  ];
  public defaultColDef: ColDef = {
    resizable: true,
  };
  constructor(private router: Router,
    public activatedRoute: ActivatedRoute,) {
    this.salesId = this.activatedRoute.snapshot.paramMap.get("id");

    this.salesList.forEach(element => {
      if (element.invoiceNo == this.salesId) {
        this.salesObj = element;
      }
    });
  }

  ngOnInit(): void {
  }
  goToSales() {
    this.router.navigate([`/sales`]);
  }

}
