import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../../models/joke.model';
import { JokesService } from '../../services/api/jokes.service';
@Component({
  selector: 'app-jokes-gallery',
  templateUrl: './jokes-gallery.component.html',
  styleUrls: ['./jokes-gallery.component.scss'],
})
export class JokesGalleryComponent implements OnInit {
  @Input() jokes!: Joke[];
  @Output() jokeClick = new EventEmitter<Joke>();

  constructor() {}

  openJokeModal(joke: Joke) {
    this.jokeClick.emit(joke);
    /* this.jokesService.clickedJokeSub.next(joke);
    this.modal.open(JokeModalComponent, {
      data: {
        id: joke.id,
        jokeText:
          joke.type === 'single' ? joke.joke : `${joke.setup} ${joke.delivery}`,
        category: joke.category,
        type: joke.type,
        flags: this._isJokeHasFlags(joke.flags),
        suggestedJokes: this.generateRandomJokes(joke.type),
      },
    }); */
  }

  ngOnInit(): void {}
}
