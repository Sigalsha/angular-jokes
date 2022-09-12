import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Joke } from '../../models/joke.model';
@Component({
  selector: 'app-jokes-gallery',
  templateUrl: './jokes-gallery.component.html',
  styleUrls: ['./jokes-gallery.component.scss'],
})
export class JokesGalleryComponent implements OnInit {
  @Input() jokes!: Joke[];
  @Output() jokeClick = new EventEmitter<Joke>();
  breakpoint!: number;

  constructor() {}

  openJokeModal(joke: Joke) {
    this.jokeClick.emit(joke);
  }

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 6;
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 6;
  }
}
