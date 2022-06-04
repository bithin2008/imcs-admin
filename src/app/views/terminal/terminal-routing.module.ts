import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminalComponent } from './terminal.component';
import { TerminalEditComponent } from './terminal-edit/terminal-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TerminalComponent
  },
  {
    path: 'new',
    component: TerminalEditComponent
  },
  {
    path: ':id',
    component: TerminalEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminalRoutingModule { }
