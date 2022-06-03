import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColDef } from 'ag-grid-community';
@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  public companyId: any;
  public companyObj: any = {};
  newstoreLocationRow: any = {};
  storeLocationsList: Array<any> = [];
  constructor(private router: Router,
    public activatedRoute: ActivatedRoute,) {
    this.companyId = this.activatedRoute.snapshot.paramMap.get("id");

  }

  ngOnInit(): void {
  }
  goToCompany() {
    this.router.navigate([`/company`]);
  }
  addstoreLocationsListRow() {
    if ((this.companyObj.storeNumber && this.companyObj.storeNumber !== '') 
    && (this.companyObj.address && this.companyObj.address !== '')) {
      this.newstoreLocationRow = { storeNumber: this.companyObj.storeNumber, address: this.companyObj.address, city: this.companyObj.city, state: this.companyObj.state };
      this.storeLocationsList.push(this.newstoreLocationRow);
      this.clearstoreLocations();
      return true;
    }
  }
  deletestoreLocationsRow(index: number) {
    if (this.storeLocationsList.length == 0) {
      return false;
    } else {
      this.storeLocationsList.splice(index, 1);
      return true;
    }
  }
  clearstoreLocations() {
    this.companyObj.storeNumber = '';
    this.companyObj.address = '';
    this.companyObj.city = '';
    this.companyObj.state = '';
  }
}
