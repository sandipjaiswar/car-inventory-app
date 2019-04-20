import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseComponent } from '../database/database.component';

@Component({
  selector: 'app-inventorydetail',
  templateUrl: './inventorydetail.component.html',
  styleUrls: ['./inventorydetail.component.css']
})
export class InventorydetailComponent implements OnInit {
  count: number;
  rowData: any[] = [];
  constructor(public dialogRef: MatDialogRef<DatabaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.count = this.data.count;
    for (let i = 0; i < this.data.count; i++) {
      this.rowData.push(this.data);
    }
  }

  soldCar(index) {
    this.count = this.count - 1;
    this.rowData[index] = null;
  }

  close() {
    this.data.count = this.count;
    this.dialogRef.close(this.data);
  }
}
