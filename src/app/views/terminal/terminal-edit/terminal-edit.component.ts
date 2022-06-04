import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-terminal-edit',
  templateUrl: './terminal-edit.component.html',
  styleUrls: ['./terminal-edit.component.scss']
})
export class TerminalEditComponent implements OnInit {
  public terminalId: any;
  public terminalObj: any = {};
  constructor(private router: Router,
    public activatedRoute: ActivatedRoute,) {
    this.terminalId = this.activatedRoute.snapshot.paramMap.get("id");

  }

  ngOnInit(): void {
  }
  goToTerminal() {
    this.router.navigate([`/terminal`]);
  }
  
}
