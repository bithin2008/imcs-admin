import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesEditComponent } from './roles-edit/roles-edit.component';
import { TabsModule } from 'ngx-tabset';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [RolesComponent, RolesEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    RolesRoutingModule,
    TabsModule.forRoot(),
    AgGridModule.withComponents([])
  ]
})
export class RolesModule { }
