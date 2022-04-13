import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {

  apiURL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}
  
  httpOptions = {

    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'key': '1234'
    }),
  };

  getPosts(){
    return this.http
      .get(this.apiURL + '/posts')
      .pipe(retry(1), catchError(this.handleError));
  }

   getPost(id: any) {
     return this.http
      .get(this.apiURL + '/posts/' + id)
      .pipe(retry(1), catchError(this.handleError));
  }
  createPost(post: any) {
    return this.http
      .post(
        this.apiURL + '/posts',
        JSON.stringify(post),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  updatePost(id: any, post: any){
    return this.http
      .put(
        this.apiURL + '/posts/' + id,
        JSON.stringify(post),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  deletePost(id: any) {
    return this.http
      .delete(this.apiURL + '/posts/' + id, this.httpOptions)
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