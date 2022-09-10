import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { JokeModal } from '../../models/jokeModal.model';

@Component({
  selector: 'app-joke-modal',
  templateUrl: './joke-modal.component.html',
  styleUrls: ['./joke-modal.component.scss'],
})
export class JokeModalComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: JokeModal) {}

  ngOnInit(): void {}
}
