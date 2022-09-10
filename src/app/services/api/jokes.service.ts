import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Joke } from 'src/app/models/joke.model';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  private _jokesDataJson = 'assets/jokes-json.json';
  constructor(private http: HttpClient) {}

  fetchJokes(): Observable<any> {
    return this.http.get(this._jokesDataJson).pipe(
      map((jokesData: any) => {
        console.log(jokesData);
        return jokesData;
      }),
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err);
        }
        return of(err);
      })
    );
  }

  getJoke(id: number) {}

  generateRandomJokes(jokeType: string) {}
}
