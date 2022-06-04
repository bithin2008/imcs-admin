import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsComponent } from './units.component';
import { UnitsRoutingModule } from './units-routing.module';
import { TabsModule } from 'ngx-tabset';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UnitsComponent],
  imports: [
    CommonModule,
    FormsModule,
    UnitsRoutingModule,
    TabsModule.forRoot()
  ]
})
export class UnitsModule { }
