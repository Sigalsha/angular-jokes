import { JokesService } from './../../services/api/jokes.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Joke } from 'src/app/models/joke.model';
import { JokeModalComponent } from 'src/app/components/joke-modal/joke-modal.component';
import { randomNumbers } from '../../utils/utils';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  jokes!: Joke[];
  isModalOpen = false;
  dialogRef!: any;
  jokeModalSub!: Subscription;

  constructor(private jokesService: JokesService, public modal: MatDialog) {}

  openJokeModal(joke: Joke) {
    this._createJokeModal(joke);
  }

  _createJokeModal(joke: Joke) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: joke.id,
      jokeText:
        joke.type === 'single' ? joke.joke : `${joke.setup} ${joke.delivery}`,
      category: joke.category,
      type: joke.type,
      flags: this._isJokeHasFlags(joke.flags),
      suggestedJokes: this.generateRandomJokes(joke.type, joke.id),
    };
    dialogConfig.panelClass = 'custom-modal';
    this.jokesService.clickedJokeSub.next(joke);

    this.modal.open(JokeModalComponent, dialogConfig);

    this.dialogRef = this.modal.open(JokeModalComponent, dialogConfig);
  }

  _isJokeHasFlags(dataFlags: Record<string, boolean>): string[] {
    let jokeFlags = [];
    for (const flag in dataFlags) {
      if (dataFlags[flag] === true) {
        jokeFlags.push(flag);
      }
    }
    return jokeFlags;
  }

  generateRandomJokes(jokeType: string, id: number): Joke[] | null {
    if (this.jokes.length > 1) {
      const randomJokes: Joke[] = [];
      const jokesByType = this.jokes.filter(
        (joke) => joke.type === jokeType && joke.id !== id
      );

      randomNumbers(jokesByType.length).forEach((item) => {
        if (!randomJokes.includes(jokesByType[item])) {
          randomJokes.push(jokesByType[item]);
        }
      });
      return randomJokes;
    }
    return null;
  }

  ngOnInit(): void {
    this.subscription = this.jokesService
      .fetchJokes()
      .subscribe((jokesData: Joke[]) => (this.jokes = jokesData));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.jokeModalSub?.unsubscribe();
  }
}
