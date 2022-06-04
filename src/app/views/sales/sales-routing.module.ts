import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';
import { SalesEditComponent } from './sales-edit/sales-edit.component';
import { SalesReturnComponent } from './sales-return/sales-return.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent
  },
  {
    path: 'sales-return',
    component: SalesReturnComponent,
    pathMatch: 'full',
  },
  {
    path: 'new',
    component: SalesEditComponent,
    pathMatch: 'full',
  },
  {
    path: ':id',
    component: SalesEditComponent,
    pathMatch: 'full',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
