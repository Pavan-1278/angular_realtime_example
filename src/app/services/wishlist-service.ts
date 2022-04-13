import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {

  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  
  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'key': '1234'
    }),
  };

  getWishlists(){
    return this.http
      .get(this.apiURL + '/wishlists')
      .pipe(retry(1), catchError(this.handleError));
  }

   getWishlist(id: any) {
     return this.http
      .get(this.apiURL + '/wishlists/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  createWishlist(wishlist: any) {
    return this.http
      .post(
        this.apiURL + '/wishlists',
        JSON.stringify(wishlist),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  updateWishlist(id: any, wishlist: any){
    return this.http
      .put(
        this.apiURL + '/wishlists/' + id,
        JSON.stringify(wishlist),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteWishlist(id: any) {
    return this.http
      .delete(this.apiURL + '/wishlists/' + id, this.httpOptions)
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