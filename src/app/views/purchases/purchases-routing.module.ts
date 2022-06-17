import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPurchaseComponent } from './edit-purchase/edit-purchase.component';
import { PurchasesComponent } from './purchases.component';
const routes: Routes = [
  {
    path: '',
    component: PurchasesComponent
  },
  {
    path: 'purchase/:id',
    component: EditPurchaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasesRoutingModule { }
