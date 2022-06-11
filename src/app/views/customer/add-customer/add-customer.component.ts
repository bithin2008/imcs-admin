import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customerObj: any = {};
  public pageOfItems: any = [];
  public items: any = [];
  constructor() { }

  ngOnInit(): void {
    this.items = Array(50).fill(0).map((x, i) => ({

      "invoiceNumner": `YK000${i + 1}`,
      "dateTime": `${i + 1}/05/2022`,
      "channel": "-",
      "orderType": `Online`,
      "paymentMode": `Online`,
      "totalSales": `$500${i + 1}`,
      "Status": `Pending`,
    }));
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }


}

