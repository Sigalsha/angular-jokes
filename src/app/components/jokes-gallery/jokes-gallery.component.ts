import { Component, OnInit, Input } from '@angular/core';
import { Joke } from '../../models/joke.model';

@Component({
  selector: 'app-jokes-gallery',
  templateUrl: './jokes-gallery.component.html',
  styleUrls: ['./jokes-gallery.component.scss'],
})
export class JokesGalleryComponent implements OnInit {
  @Input() jokes!: Joke[];

  constructor() {}

  ngOnInit(): void {}
}
