import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Joke } from '../../models/joke.model';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  private _jokesDataJson = 'assets/jokes-json.json';
  jokesSub: Subject<Joke[]> = new Subject<Joke[]>();
  clickedJokeSub: Subject<Joke> = new Subject<Joke>();

  constructor(private http: HttpClient) {}

  fetchJokes(): Observable<any> {
    return this.http.get(this._jokesDataJson).pipe(
      map((jokesData: any) => {
        console.log(jokesData);
        this.jokesSub.next(jokesData);
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

  getJokes(): Observable<Joke[]> {
    return this.jokesSub.asObservable();
  }

  /*   clickJoke(joke: Joke) {
    this.clickedJokeSub.next(joke);
  } */

  clearClickedJoke() {
    this.clickedJokeSub.complete();
  }

  /*    generateRandomJokes(jokeType: string) {
    let randomJokeIndex = Math.floor(Math.random() * this.jokesSub.subscribe((jokes) => {

    }));
  }  */
}
