import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import API from '../API.js';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  url = API;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  registerUser(user: any): Observable<any[]> {
    return this.httpClient
      .post<any[]>(
        this.url + '/register',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  loginUser(user: any): Observable<any[]> {
    return this.httpClient
      .post<any[]>(
        this.url + '/authenticate',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage =
        `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
