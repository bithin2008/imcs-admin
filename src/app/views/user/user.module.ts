import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserEditComponent } from './user-edit/user-edit.component';
import { TabsModule } from 'ngx-tabset';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [UserComponent, UserEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    TabsModule.forRoot(),
    AgGridModule.withComponents([])
  ]
})
export class UserModule { }
