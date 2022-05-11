import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationComponent } from './communication.component';
import { CommunicationRoutingModule } from './communication-routing.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommunicationComponent],
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule
  ]
})
export class CommunicationModule { }
