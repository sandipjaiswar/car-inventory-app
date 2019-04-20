import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ModelComponent implements OnInit {

  model = new FormControl('', [Validators.required]);
  manufacturer = new FormControl();
  options: any[] = [];
  filteredOptions: Observable<any[]>;

  constructor(private commonservice: CommonService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.commonservice.fetchManufacturer().subscribe((res: any) => {
      this.options = res.records;
    });
    this.filteredOptions = this.manufacturer.valueChanges
      .pipe(
        startWith<string | any>(''),
        map(value => this._filter(value))
      );
  }


  displayFn(user?: any): string | undefined {
    return user ? user.manufacturername : undefined;
  }

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  submit() {
    if (this.manufacturer.value.manufacturername && this.model.value) {
      const sub = this.commonservice.addModel(
        { model: this.model.value, manufacturer: this.manufacturer.value.manufacturername }).subscribe((res) => {
        if (res.success && sub) {
          localStorage.setItem('message', res.message);
          this.snackbar.openFromComponent(NotificationComponent, { duration: 5000 });
          sub.unsubscribe();
        }

      });
    }

  }

}
