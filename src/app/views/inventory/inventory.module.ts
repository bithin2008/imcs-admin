import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwPaginationModule } from 'jw-angular-pagination';
import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';
import { TabsModule } from 'ngx-tabset';

@NgModule({
  declarations: [InventoryComponent, InventoryEditComponent],
  imports: [
    CommonModule,
    TabsModule,
    JwPaginationModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
