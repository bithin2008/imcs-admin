import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerminalComponent } from './terminal.component';
import { TerminalRoutingModule } from './terminal-routing.module';
import { TerminalEditComponent } from './terminal-edit/terminal-edit.component';
import { TabsModule } from 'ngx-tabset';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TerminalComponent, TerminalEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    TerminalRoutingModule,
    TabsModule.forRoot()
  ]
})
export class TerminalModule { }
