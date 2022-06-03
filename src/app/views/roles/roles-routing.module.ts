import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';
import { RolesEditComponent } from './roles-edit/roles-edit.component';

const routes: Routes = [
  {
    path: '',
    component: RolesComponent
  },
  {
    path: 'new',
    component: RolesEditComponent
  },
  {
    path: ':id',
    component: RolesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
