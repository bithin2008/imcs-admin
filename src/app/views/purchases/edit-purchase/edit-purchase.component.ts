import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from 'src/app/service/common-service';
@Component({
  selector: 'app-edit-purchase',
  templateUrl: './edit-purchase.component.html',
  styleUrls: ['./edit-purchase.component.scss']
})
export class EditPurchaseComponent implements OnInit {
  public purchaseOrderNo: any;
  public purchaseDetails: any = {};
  public pageOfItems: any = [];
  public items: any = [];

  constructor(private router: Router,
    public activatedRoute: ActivatedRoute, private webService: WebService) {
    this.purchaseOrderNo = this.activatedRoute.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {

    this.items = Array(50).fill(0).map((x, i) => ({

      "customerName": "C.K Lohia",
      "phone": `987${i + 1}54321${i + 1}`,
      "email": "c.k.lohia@gmail.com",
      "address": `${i + 1}/12, Bandra Road, Maharastra`,
    }));

    this.getPurchaseDetails();
  }

  getPurchaseDetails() {
    // this.spinnerService.show();
    let url = `tilak/purchaseOrder?purchaseOrderNo=${this.purchaseOrderNo}`;

    this.webService.get(url).subscribe((response: any) => {
      //  this.spinnerService.hide();
      if (response) {
        this.purchaseDetails = response;
      }
    }, (error) => {
      console.log('error', error);
    });
  }


  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }


}
