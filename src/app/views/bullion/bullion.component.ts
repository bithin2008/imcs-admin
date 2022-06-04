import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bullion',
  templateUrl: './bullion.component.html',
  styleUrls: ['./bullion.component.scss']
})
export class BullionComponent implements OnInit {
  bullionList: Array<any> = [];
  bullionObj:any={};
  newbullionRow: any = {};
  constructor(private router: Router) {
   }

  ngOnInit(): void {
     
  }

  addbullionListRow() {
    if ((this.bullionObj.bullionName && this.bullionObj.bullionName !== '') 
    && (this.bullionObj.metal && this.bullionObj.metal !== '')) {
      this.newbullionRow = { bullionName: this.bullionObj.bullionName, metal: this.bullionObj.metal, 
        calculations: this.bullionObj.calculations, weight: this.bullionObj.weight,
        premium: this.bullionObj.premium, taxExempt: this.bullionObj.taxExempt};
      this.bullionList.push(this.newbullionRow);
      this.clearbullion();
      return true;
    }
  }
  deletebullionRow(index: number) {
    if (this.bullionList.length == 0) {
      return false;
    } else {
      this.bullionList.splice(index, 1);
      return true;
    }
  }
  clearbullion() {
    this.bullionObj.bullionName = '';
    this.bullionObj.metal = '';
  }
}
