import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  // public salesList: any = [
  //   {
  //     "invoiceNo": "IMCS001",
  //     "dateTime": "01 May, 2022",
  //     "customerName": "C.K Lohia",
  //     "channel": "-",
  //     "orderType": "Online",
  //     "paymentMode": "Net Banking",
  //     "salesRepresentative": "G.C. Dhamija",
  //     "totalSales": "27,450.00",
  //     "status": "Confirmed"
  //   },
  //   {
  //     "invoiceNo": "IMCS002",
  //     "dateTime": "29 Apr, 2022",
  //     "customerName": "S.M VInod",
  //     "channel": "-",
  //     "orderType": "Online",
  //     "paymentMode": "UPI",
  //     "salesRepresentative": "A. Sen",
  //     "totalSales": "44,250.00",
  //     "status": "Pending"
  //   }, {
  //     "invoiceNo": "IMCS003",
  //     "dateTime": "01 May, 2022",
  //     "customerName": "C.K Lohia",
  //     "channel": "-",
  //     "orderType": "Online",
  //     "paymentMode": "Net Banking",
  //     "salesRepresentative": "G.C. Dhamija",
  //     "totalSales": "27,450.00",
  //     "status": "Confirmed"
  //   },
  //   {
  //     "invoiceNo": "IMCS004",
  //     "dateTime": "29 Apr, 2022",
  //     "customerName": "S.M VInod",
  //     "channel": "-",
  //     "orderType": "Online",
  //     "paymentMode": "UPI",
  //     "salesRepresentative": "A. Sen",
  //     "totalSales": "44,250.00",
  //     "status": "Pending"
  //   }, {
  //     "invoiceNo": "IMCS005",
  //     "dateTime": "01 May, 2022",
  //     "customerName": "C.K Lohia",
  //     "channel": "-",
  //     "orderType": "Online",
  //     "paymentMode": "Net Banking",
  //     "salesRepresentative": "G.C. Dhamija",
  //     "totalSales": "27,450.00",
  //     "status": "Confirmed"
  //   },
  //   {
  //     "invoiceNo": "IMCS006",
  //     "dateTime": "29 Apr, 2022",
  //     "customerName": "S.M VInod",
  //     "channel": "-",
  //     "orderType": "Online",
  //     "paymentMode": "UPI",
  //     "salesRepresentative": "A. Sen",
  //     "totalSales": "44,250.00",
  //     "status": "Pending"
  //   }, {
  //     "invoiceNo": "IMCS007",
  //     "dateTime": "01 May, 2022",
  //     "customerName": "C.K Lohia",
  //     "channel": "-",
  //     "orderType": "Online",
  //     "paymentMode": "Net Banking",
  //     "salesRepresentative": "G.C. Dhamija",
  //     "totalSales": "27,450.00",
  //     "status": "Confirmed"
  //   },
  //   {
  //     "invoiceNo": "IMCS008",
  //     "dateTime": "29 Apr, 2022",
  //     "customerName": "S.M VInod",
  //     "channel": "-",
  //     "orderType": "Online",
  //     "paymentMode": "UPI",
  //     "salesRepresentative": "A. Sen",
  //     "totalSales": "44,250.00",
  //     "status": "Pending"
  //   }

  // ];
  public pageOfItems: any = [];
  public items: any = [];
  constructor(private router: Router,) {
  }




  ngOnInit(): void {
    this.items = Array(50).fill(0).map((x, i) => ({

      "invoiceNo": `IMCS00${i + 1}`,
      "dateTime": `${i + 1} May, 2022`,
      "customerName": "C.K Lohia",
      "channel": "-",
      "orderType": "Online",
      "paymentMode": "Net Banking",
      "salesRepresentative": "G.C. Dhamija",
      "totalSales": `${i + 1}7,450.00`,
      "status": "Confirmed"
    }));
  }

  createInvoice() {
    this.router.navigate([`/sales/new`]);
  }


  editSales(item) {
    this.router.navigate([`/sales/${item.invoiceNo}`]);
  }

  salesReturn() {
    this.router.navigate([`/sales/sales-return`]);
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
