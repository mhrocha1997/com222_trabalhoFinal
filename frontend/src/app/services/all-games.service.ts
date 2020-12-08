import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import API from '../API.js';
@Injectable({
  providedIn: 'root',
})
export class AllGamesService {
  constructor(private httpClient: HttpClient) {}
  url = API;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getAllProducts(): Observable<any[]> {
    return this.httpClient
      .get<any[]>(this.url + '/games')
      .pipe(retry(2), catchError(this.handleError));
  }

  getGamesInConsole(platform): Observable<any[]> {
    console.log(this.url + '/games/topRated?conso=' + platform);
    return this.httpClient
      .get<any[]>(this.url + '/games/topRated?conso=' + platform)

      .pipe(retry(2), catchError(this.handleError));
  }

  getReviews(name): Observable<any[]> {
    console.log(this.url + '/reviews/' + name);
    return this.httpClient
      .get<any[]>(this.url + '/reviews/?name=' + name, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  createReview(token, aval): Observable<any[]> {
    console.log('token', token, aval);
    let httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.httpClient
      .post<any[]>(
        this.url + '/reviews/create',
        JSON.stringify({
          rate: aval.rate,
          text: aval.text,
          name: aval.name,
          email: aval.email,
        }),
        httpOptionsToken
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  createGame(token, data): Observable<any[]> {
    console.log(data.summary);
    let httpOptionsToken = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
    return this.httpClient
      .post<any[]>(
        this.url + '/games/create',
        JSON.stringify({
          name: data.name,
          summary: data.summary,
          developer: data.developer,
          genre: data.genre,
          imageUrl: data.imageUrl,
          console: data.console,
        }),
        httpOptionsToken
      )
      .pipe(retry(2), catchError(this.handleError));
  }

  search(conso): Observable<any[]> {
    console.log(this.url + '/games/complete');
    return this.httpClient
      .post<any[]>(
        this.url + '/games/complete',
        JSON.stringify({
          conso: conso,
        }),
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
