import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InventorydetailComponent } from '../inventorydetail/inventorydetail.component';
import { CommonService } from '../common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  displayedColumns: string[] = ['id', 'manufacturername', 'modelname', 'count'];
  dataSource: any[] = [];
  constructor(
    public dialog: MatDialog,
    private commonservice: CommonService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.commonservice.fetchInventory().subscribe((res: any) => {
      this.dataSource = res.records;
      this.dataSource.forEach(ele => {
        if (ele.status === 0) {
          return ele.status;
        }
      });
    });
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
      const sub = this.commonservice.soldCar(this.dataSource[0]).subscribe((res) => {
        localStorage.setItem('message', res.message);
        this.snackbar.openFromComponent(NotificationComponent, { duration: 5000 });
        sub.unsubscribe();
      });
    });
  }
}
