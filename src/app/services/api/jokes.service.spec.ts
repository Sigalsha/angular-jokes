import { TestBed } from '@angular/core/testing';

import { JokesService } from './jokes.service';

describe('ApiService', () => {
  let service: JokesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
