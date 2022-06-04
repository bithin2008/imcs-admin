import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public pageOfItems: any = [];
  public items: any = [];
  constructor(private router: Router,) {
  }




  ngOnInit(): void {
    this.items = Array(50).fill(0).map((x, i) => ({

      "pidNo": `PID00${i + 1}`,
      "description": `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, commodi?`,
      "classification": 'Bring to the table',
      "subClassification": 'Capitalize',
      "status": "damaged"
    }));
  }

  createInventory() {

  }


  editInventory(item) {
    this.router.navigate([`/inventory/${item.pidNo}`]);
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }



}
