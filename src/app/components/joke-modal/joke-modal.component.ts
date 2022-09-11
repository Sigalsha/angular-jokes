import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JokeModal } from '../../models/jokeModal.model';
import { JokesService } from '../../services/api/jokes.service';
import { Joke } from '../../models/joke.model';

@Component({
  selector: 'app-joke-modal',
  templateUrl: './joke-modal.component.html',
  styleUrls: ['./joke-modal.component.scss'],
})
export class JokeModalComponent implements OnInit {
  @Output() jokeClick = new EventEmitter<Joke>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: JokeModal,
    private dialogRef: MatDialogRef<JokeModalComponent>
  ) {}

  clickSuggestedJoke(joke: Joke) {
    this.dialogRef.close(joke);
  }

  closeModal() {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
