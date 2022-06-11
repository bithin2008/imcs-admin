import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { JwPaginationModule } from 'jw-angular-pagination';
import { TabsModule } from 'ngx-tabset';
import { AddCustomerComponent } from './add-customer/add-customer.component';
@NgModule({
  declarations: [CustomerComponent, AddCustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    JwPaginationModule,
    TabsModule
  ]
})
export class CustomerModule { }
