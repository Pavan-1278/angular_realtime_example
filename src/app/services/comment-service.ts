import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CommentService {

  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  
  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'key': '1234'
    }),
  };

  getComments(){
    return this.http
      .get(this.apiURL + '/comments')
      .pipe(retry(1), catchError(this.handleError));
  }

   getComment(id: any) {
     return this.http
      .get(this.apiURL + '/comments/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  createComment(comment: any) {
    return this.http
      .post(
        this.apiURL + '/comments',
        JSON.stringify(comment),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  updateComment(id: any, comment: any){
    return this.http
      .put(
        this.apiURL + '/comments/' + id,
        JSON.stringify(comment),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deleteComment(id: any) {
    return this.http
      .delete(this.apiURL + '/comments/' + id, this.httpOptions)
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