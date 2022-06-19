import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-purchase',
  templateUrl: './edit-purchase.component.html',
  styleUrls: ['./edit-purchase.component.scss']
})
export class EditPurchaseComponent implements OnInit {
  public inventoryId: any;
  public inventoryObj: any = {};
  public pageOfItems: any = [];
  public items: any = [];

  constructor(private router: Router,
    public activatedRoute: ActivatedRoute,) {
    this.inventoryObj = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {

    this.items = Array(50).fill(0).map((x, i) => ({

      "customerName": "C.K Lohia",
      "phone": `987${i + 1}54321${i + 1}`,
      "email": "c.k.lohia@gmail.com",
      "address": `${i + 1}/12, Bandra Road, Maharastra`,
    }));
  }
  goToSales() {
    this.router.navigate([`/sales`]);
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
