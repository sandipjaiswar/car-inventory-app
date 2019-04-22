import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DatabaseComponent } from './database/database.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ModelComponent } from './model/model.component';

const routes: Route[] = [
  { path: 'view-inventory', component: DatabaseComponent },
  { path: 'model', component: ModelComponent },
  { path: 'manufacturer', component: ManufacturerComponent },
  { path: '', component: DatabaseComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
