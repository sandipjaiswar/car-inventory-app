import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../notification/notification.component';
// import * as moment from 'moment';
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class ModelComponent implements OnInit {
  carForm = new FormGroup({
    model: new FormControl('', Validators.required),
    manufacturer: new FormControl('', Validators.required),
    color: new FormControl('', Validators.required),
    manufacturingyear: new FormControl('', Validators.required),
    registrationno: new FormControl('', Validators.required),
    note: new FormControl('', Validators.required),
    image: new FormControl(''),

  });

  manufacturer = new FormControl();
  options: any[] = [];
  filteredOptions: Observable<any[]>;

  constructor(private commonservice: CommonService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.commonservice.fetchManufacturer().subscribe((res: any) => {
      this.options = res.records;
    });
  }


  displayFn(user?: any): string | undefined {
    return user ? user.manufacturername : undefined;
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    if (this.carForm.value) {
      const data = {
        modelname: this.carForm.value.model,
        manufacturername: this.carForm.value.manufacturer.manufacturername,
        manufacturingyear: this.carForm.value.manufacturingyear.toDateString(),
        registrationno: this.carForm.value.registrationno,
        note: this.carForm.value.note,
        image: this.carForm.value.image,
        color: this.carForm.value.color
      };
      const sub = this.commonservice.addModel(data).subscribe((res) => {
        if (res.success && sub) {
          localStorage.setItem('message', res.message);
          this.snackbar.openFromComponent(NotificationComponent, { duration: 5000 });
          this.carForm.reset();
          sub.unsubscribe();
        }

      });
    }

  }

}
