import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsComponent } from './materials.component';
import { MaterialsRoutingModule } from './materials-routing.module';
import { TabsModule } from 'ngx-tabset';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MaterialsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialsRoutingModule,
    TabsModule.forRoot()
  ]
})
export class MaterialsModule { }
