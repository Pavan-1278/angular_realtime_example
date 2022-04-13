import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  
  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'key': '1234'
    }),
  };

  getProducts(){
    return this.http
      .get(this.apiURL + '/products')
      .pipe(retry(1), catchError(this.handleError));
  }

   getProduct(id: any) {
     return this.http
      .get(this.apiURL + '/products/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  createProduct(product: any) {
    return this.http
      .post(
        this.apiURL + '/products',
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  updateProduct(id: any, product: any){
    return this.http
      .put(
        this.apiURL + '/products/' + id,
        JSON.stringify(product),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteProduct(id: any) {
    return this.http
      .delete(this.apiURL + '/products/' + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}