import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorComponent } from './vendor.component';
import { VendorRoutingModule } from './vendor-routing.module';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { TabsModule } from 'ngx-tabset';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VendorComponent, VendorEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    VendorRoutingModule,
    TabsModule.forRoot()
  ]
})
export class VendorModule { }
