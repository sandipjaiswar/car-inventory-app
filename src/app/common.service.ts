import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  apiUrl = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  addManufacturer(manufacturer): Observable<any> {
    return this.http.post(`${this.apiUrl}/addManufacturerName.php`, JSON.stringify(manufacturer))
      .pipe(
        catchError((this.handleError))
      );
  }

  fetchManufacturer() {
    return this.http.get(`${this.apiUrl}/fetchManufacturer.php`)
      .pipe(
        catchError((this.handleError))
      );
  }

  addModel(model): Observable<any> {
    return this.http.post(`${this.apiUrl}/create.php`, JSON.stringify(model))
      .pipe(
        catchError((this.handleError))
      );
  }

  fetchInventory() {
    return this.http.get(`${this.apiUrl}/read.php`)
      .pipe(
        catchError((this.handleError))
      );
  }

  soldCar(model): Observable<any> {
    return this.http.post(`${this.apiUrl}/deleteOne.php`, JSON.stringify(model))
      .pipe(
        catchError((this.handleError))
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
