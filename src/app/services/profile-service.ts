import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  
  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'key': '1234'
    }),
  };

  getProfiles(){
    return this.http
      .get(this.apiURL + '/profiles')
      .pipe(retry(1), catchError(this.handleError));
  }

   getProfile(id: any) {
     return this.http
      .get(this.apiURL + '/profiles/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  createProfile(profile: any) {
    return this.http
      .post(
        this.apiURL + '/profiles',
        JSON.stringify(profile),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  updateProfile(id: any, profile: any){
    return this.http
      .put(
        this.apiURL + '/profiles/' + id,
        JSON.stringify(profile),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteProfile(id: any) {
    return this.http
      .delete(this.apiURL + '/profiles/' + id, this.httpOptions)
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