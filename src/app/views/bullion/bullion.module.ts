import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BullionComponent } from './bullion.component';
import { BullionRoutingModule } from './bullion-routing.module';
import { TabsModule } from 'ngx-tabset';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BullionComponent],
  imports: [
    CommonModule,
    FormsModule,
    BullionRoutingModule,
    TabsModule.forRoot()
  ]
})
export class BullionModule { }
