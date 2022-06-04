import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  unitsList: Array<any> = [];
  unitsObj:any={};
  newunitsRow: any = {};
  constructor(private router: Router) {
   }

  ngOnInit(): void {
     
  }

  addunitsListRow() {
    if ((this.unitsObj.unitName && this.unitsObj.unitName !== '') 
    && (this.unitsObj.symbol && this.unitsObj.symbol !== '')) {
      this.newunitsRow = { unitName: this.unitsObj.unitName, symbol: this.unitsObj.symbol};
      this.unitsList.push(this.newunitsRow);
      this.clearunits();
      return true;
    }
  }
  deleteunitsRow(index: number) {
    if (this.unitsList.length == 0) {
      return false;
    } else {
      this.unitsList.splice(index, 1);
      return true;
    }
  }
  clearunits() {
    this.unitsObj.unitName = '';
    this.unitsObj.symbol = '';
  }
  
 
}
