import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BullionComponent } from './bullion.component';

const routes: Routes = [
  {
    path: '',
    component: BullionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BullionRoutingModule { }
