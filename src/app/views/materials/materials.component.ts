import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
  materialsList: Array<any> = [];
  materialsObj:any={};
  newmaterialsRow: any = {};
  constructor(private router: Router) {
   }

  ngOnInit(): void {
     
  }

  addmaterialsListRow() {
    if ((this.materialsObj.materialName && this.materialsObj.materialName !== '') 
    && (this.materialsObj.unit && this.materialsObj.unit !== '')) {
      this.newmaterialsRow = { materialName: this.materialsObj.materialName, unit: this.materialsObj.unit, 
        materialType: this.materialsObj.materialType, metalName: this.materialsObj.metalName,
         costVariation: this.materialsObj.costVariation, calculations: this.materialsObj.calculations,
         perUnitPrice: this.materialsObj.perUnitPrice};
      this.materialsList.push(this.newmaterialsRow);
      this.clearmaterials();
      return true;
    }
  }
  deletematerialsRow(index: number) {
    if (this.materialsList.length == 0) {
      return false;
    } else {
      this.materialsList.splice(index, 1);
      return true;
    }
  }
  clearmaterials() {
    this.materialsObj.materialName = '';
    this.materialsObj.unit = '';
    this.materialsObj.metalName = '';
    this.materialsObj.materialType = '';
  }
  
 
}
