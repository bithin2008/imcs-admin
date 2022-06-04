import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';

const routes: Routes = [
  {
    path: '',
    component: VendorComponent
  },
  {
    path: 'new',
    component: VendorEditComponent
  },
  {
    path: ':id',
    component: VendorEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
