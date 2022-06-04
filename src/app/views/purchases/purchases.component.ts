import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {
  printModalRef?: BsModalRef;
  viewModalRef?: BsModalRef;
  purchaseModalRef?: BsModalRef;
  public purchaseList: any = [
    {
      "vendorName": "Fairmont creations",
      "vendorNumber": "1003",
      "purchaseDate": "2022-04-28"
    },
    {
      "vendorName": "Tilak Jewelers",
      "vendorNumber": "5003",
      "purchaseDate": "2022-03-15"
    }, {
      "vendorName": "HEENA GEMS",
      "vendorNumber": "1010",
      "purchaseDate": "2022-03-22"
    },
    {
      "vendorName": "SHRI VARDHAMAN JEWELERS",
      "vendorNumber": " 10049 ",
      "purchaseDate": "2022-02-25"
    },

  ];

  public pageOfItems: any = [];
  public items: any = [];

  constructor(private router: Router, private modalService: BsModalService) { }

  ngOnInit(): void {

    this.items = Array(50).fill(0).map((x, i) => ({
      "vendorName": `Tilak Jewelers ${i + 1}`,
      "vendorNumber": `500${i + 1}`,
      "isLocked": false,
      "purchaseDate": `2022-03-${i + 1}`
    }));
  }

  createInvoice() {
    this.router.navigate([`/sales/new`]);
  }

  openPrintModal(template: TemplateRef<any>) {
    this.printModalRef = this.modalService.show(template, { class: 'modal-xl' });
  }

  openViewModal(template: TemplateRef<any>) {
    this.viewModalRef = this.modalService.show(template, { class: 'modal-xl' });
  }

  openPurchaseModal(template: TemplateRef<any>) {
    this.purchaseModalRef = this.modalService.show(template);
  }


  editSales(item) {
    this.router.navigate([`/sales/${item.invoiceNo}`]);
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}
