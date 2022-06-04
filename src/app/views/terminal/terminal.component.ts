import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {
  terminalList:any=null;
  allterminalList:any=null;
  constructor(private router: Router,) {
   }

  ngOnInit(): void {
     this.terminalList = [
      {
        "Id":1,
        "terminalName": "IMCS001",
        "status": "Not-in-Use"
      },
      {
        "Id":2,
        "terminalName": "IMCS002",
        "status": "Not-in-Use"
      },{
        "Id":3,
        "terminalName": "IMCS003",
        "status": "In-Use"
      },
      {
        "Id":4,
        "terminalName": "IMCS004",
        "status": "Not-in-Use"
      }, {
        "Id":5,
        "terminalName": "IMCS005",
        "status": "In-Use"
      },
      {
        "Id":6,
        "terminalName": "IMCS006",
        "status": "Not-in-Use"
      }, {
        "Id":7,
        "terminalName": "IMCS007",
        "status": "In-Use"
      },
      {
        "Id":8,
        "terminalName": "IMCS008",
        "status": "Not-in-Use"
      }
  
    ];
  this.allterminalList=this.terminalList;
  }

  createTerminal() {
    this.router.navigate([`/terminal/new`]);
  }

  search(value: string): void {
    this.terminalList = this.allterminalList;
    if (value === "") {
      this.terminalList = this.terminalList;
    }
    else {
      this.terminalList = this.terminalList.filter((val) => val.terminalName.includes(value));
    }
  }
  
  editTerminal(item) {
    this.router.navigate([`/terminal/${item.id}`]);
  }
}
