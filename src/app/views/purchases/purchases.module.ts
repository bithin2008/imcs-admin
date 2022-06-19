import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases.component';
import { PurchasesRoutingModule } from './purchases-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxPaginationModule } from 'ngx-pagination';
import { JwPaginationModule } from 'jw-angular-pagination';
import { EditPurchaseComponent } from './edit-purchase/edit-purchase.component';
import { TabsModule } from 'ngx-tabset';
@NgModule({
  declarations: [PurchasesComponent, EditPurchaseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PurchasesRoutingModule,
    NgxPaginationModule,
    TabsModule
  ]
})
export class PurchasesModule { }
