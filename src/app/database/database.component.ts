import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InventorydetailComponent } from '../inventorydetail/inventorydetail.component';

export interface PeriodicElement {
  serial: number;
  manufacturer: string;
  model: number;
  count: string;
}
const ELEMENT_DATA: any[] = [
  { serial: 1, manufacturer: 'Honda', model: 'honda civic', count: 2, registrationno: 212121212 },
  { serial: 2, manufacturer: 'Hyundai', model: 'Hyundai verna', count: 3, registrationno: 3434444 },
  { serial: 3, manufacturer: 'Suzuki', model: 'Maruti suzuki nexa', count: 1, registrationno: 557567575 },
  { serial: 4, manufacturer: 'BMW', model: 'BMW x3', count: 7, registrationno: 4545435535 },
  { serial: 5, manufacturer: 'GMC', model: 'GMC SIERRA DENALI', count: 8, registrationno: 56456456 },
  { serial: 6, manufacturer: 'Ferrari', model: 'Ferrari 678', count: 5, registrationno: 564566634 },
  { serial: 7, manufacturer: 'Fiat', model: 'Fiat 23', count: 6, registrationno: 4343366475 },
  { serial: 8, manufacturer: 'Ford', model: 'mustong', count: 7, registrationno: 879786868 },
  { serial: 9, manufacturer: 'Jeep', model: 'Jeep wrangler', count: 8, registrationno: 7767676 },
  { serial: 10, manufacturer: 'land Rover', model: 'discovery', count: 4, registrationno: 67676000 },
];

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  animal: string;
  name: string;
  displayedColumns: string[] = ['serial', 'manufacturer', 'model', 'count'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(rowData): void {
    const dialogRef = this.dialog.open(InventorydetailComponent, {
      width: '500px',
      data: rowData
    });

    dialogRef.afterClosed().subscribe(result => {
      this.dataSource.filter(f => {
        if (f.registrationno === result.registrationno) {
          return f.count = result.count;
        }
      });
    });
  }
}
