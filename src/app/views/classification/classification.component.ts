import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {
  classificationList: Array<any> = [];
  classificationObj:any={};
  newclassificationRow: any = {};
  constructor(private router: Router) {
   }

  ngOnInit(): void {
     
  }

  addclassificationListRow() {
    if ((this.classificationObj.classificationName && this.classificationObj.classificationName !== '') 
    && (this.classificationObj.subClassificationName && this.classificationObj.subClassificationName !== '')) {
      this.newclassificationRow = { classificationName: this.classificationObj.classificationName, subClassificationName: this.classificationObj.subClassificationName, laborCharges: this.classificationObj.laborCharges, wastage: this.classificationObj.wastage };
      this.classificationList.push(this.newclassificationRow);
      this.clearclassification();
      return true;
    }
  }
  deleteclassificationRow(index: number) {
    if (this.classificationList.length == 0) {
      return false;
    } else {
      this.classificationList.splice(index, 1);
      return true;
    }
  }
  clearclassification() {
    this.classificationObj.classificationName = '';
    this.classificationObj.subClassificationName = '';
    this.classificationObj.laborCharges = '';
    this.classificationObj.wastage = '';
  }
  
 
}
