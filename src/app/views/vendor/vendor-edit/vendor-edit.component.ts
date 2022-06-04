import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.scss']
})
export class VendorEditComponent implements OnInit {
  public vendorId: any;
  public vendorObj: any = {};
  constructor(private router: Router,
    public activatedRoute: ActivatedRoute,) {
    this.vendorId = this.activatedRoute.snapshot.paramMap.get("id");

  }

  ngOnInit(): void {
  }
  goToVendor() {
    this.router.navigate([`/vendor`]);
  }
  
}
