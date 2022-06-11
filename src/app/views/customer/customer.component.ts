import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  public pageOfItems: any = [];
  public items: any = [];
  constructor(private router: Router,) {
  }




  ngOnInit(): void {
    this.items = Array(50).fill(0).map((x, i) => ({

      "customerName": "C.K Lohia",
      "phone": `987${i + 1}54321${i + 1}`,
      "email": "c.k.lohia@gmail.com",
      "address": `${i + 1}/12, Bandra Road, Maharastra`,
    }));
  }

  createCustomer() {
    this.router.navigate([`/customer/add`]);
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
