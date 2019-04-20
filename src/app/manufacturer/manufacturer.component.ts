import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { NotificationComponent } from '../notification/notification.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  manufacturerName = new FormControl('', [Validators.required]);

  constructor(private commonservice: CommonService, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  submit() {
    const sub = this.commonservice.addManufacturer({ manufacturername: this.manufacturerName.value }).subscribe((res) => {
      if (res.success && sub) {
        localStorage.setItem('message', res.message);
        this.snackbar.openFromComponent(NotificationComponent, { duration: 5000 });
        sub.unsubscribe();
      }
    });
  }
}
