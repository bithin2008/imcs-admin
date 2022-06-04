import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales.component';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesEditComponent } from './sales-edit/sales-edit.component';
import { TabsModule } from 'ngx-tabset';
import { FormsModule } from '@angular/forms';
//import { AgGridModule } from 'ag-grid-angular';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [SalesComponent, SalesEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    SalesRoutingModule,
    TabsModule.forRoot(),
    JwPaginationModule
    //  AgGridModule.withComponents([])
  ]
})
export class SalesModule { }
