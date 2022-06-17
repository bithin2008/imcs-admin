import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases.component';
import { PurchasesRoutingModule } from './purchases-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { JwPaginationModule } from 'jw-angular-pagination';
import { EditPurchaseComponent } from './edit-purchase/edit-purchase.component';
@NgModule({
  declarations: [PurchasesComponent, EditPurchaseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PurchasesRoutingModule,
    JwPaginationModule
  ]
})
export class PurchasesModule { }
