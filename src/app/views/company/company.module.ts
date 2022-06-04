import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyEditComponent } from './company-edit/company-edit.component';
import { TabsModule } from 'ngx-tabset';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [CompanyComponent, CompanyEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    CompanyRoutingModule,
    TabsModule.forRoot(),
    AgGridModule.withComponents([])
  ]
})
export class CompanyModule { }
