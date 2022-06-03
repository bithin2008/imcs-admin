import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificationComponent } from './classification.component';
import { ClassificationRoutingModule } from './classification-routing.module';
import { TabsModule } from 'ngx-tabset';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClassificationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClassificationRoutingModule,
    TabsModule.forRoot()
  ]
})
export class ClassificationModule { }
