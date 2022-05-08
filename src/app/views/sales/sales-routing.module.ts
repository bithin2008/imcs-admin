import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesComponent } from './sales.component';
import { SalesEditComponent } from './sales-edit/sales-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent
  },
  {
    path: 'new',
    component: SalesEditComponent
  },
  {
    path: ':id',
    component: SalesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
