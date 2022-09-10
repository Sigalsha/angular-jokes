import { JokesService } from './../../services/api/jokes.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Joke } from 'src/app/models/joke.model';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  jokes!: Joke[];

  constructor(private jokesService: JokesService) {}

  ngOnInit(): void {
    this.subscription = this.jokesService
      .fetchJokes()
      .subscribe((jokesData: Joke[]) => (this.jokes = jokesData));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
