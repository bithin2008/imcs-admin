import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { WebService } from 'src/app/service/common-service';
@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit {
  printModalRef?: BsModalRef;
  viewModalRef?: BsModalRef;
  purchaseModalRef?: BsModalRef;
  filterForm: any = {
    searchText: '',
  };


  public pageOfItems: any = [];
  public purchaseList: any = [];

  constructor(private router: Router, private modalService: BsModalService, private webService: WebService) { }

  ngOnInit(): void {

    // this.items = Array(50).fill(0).map((x, i) => ({
    //   "vendorName": `Tilak Jewelers ${i + 1}`,
    //   "vendorNumber": `500${i + 1}`,
    //   "isLocked": false,
    //   "purchaseDate": `2022-03-${i + 1}`
    // }));

    this.getSubscriptionList();
  }

  getSubscriptionList() {
    // this.spinnerService.show();
    let url = `tilak/purchaseOrders`;
    if (this.filterForm.searchText)
      url = url + `&searchText=${this.filterForm.searchText}`;
    this.webService.get(url).subscribe((response: any) => {
      //  this.spinnerService.hide();
      if (response.length > 0) {
        this.purchaseList = response;
        // this.purchaseList = response.forEach(element => {
        //   Array(response.length).fill(0).map((x, i) => (element));
        // });

      } else {
        this.purchaseList = [];
      }
    }, (error) => {
      console.log('error', error);
    });
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
