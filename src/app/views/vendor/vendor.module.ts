import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor.component';
import { VendorRoutingModule } from './vendor-routing.module';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { TabsModule } from 'ngx-tabset';
import { FormsModule } from '@angular/forms';
import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [VendorComponent, VendorEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    VendorRoutingModule,
    JwPaginationModule,
    TabsModule.forRoot()
  ]
})
export class VendorModule { }
