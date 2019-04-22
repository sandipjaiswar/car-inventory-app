import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { DatabaseComponent } from './database/database.component';
import { ModelComponent } from './model/model.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationComponent } from './notification/notification.component';
import { MatTableModule } from '@angular/material/table';
import { InventorydetailComponent } from './inventorydetail/inventorydetail.component';
import { MatDialogModule } from '@angular/material/dialog'
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule, MatDatepicker} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    ManufacturerComponent,
    DatabaseComponent,
    ModelComponent,
    NotificationComponent,
    InventorydetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatTableModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatMomentDateModule
  ],
  providers: [MatDatepickerModule, MatDatepicker],
  entryComponents: [NotificationComponent, InventorydetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
