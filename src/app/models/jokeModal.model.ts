import { Joke } from './joke.model';
export interface JokeModal {
  id: number;
  jokeText: string;
  category: string;
  type: string;
  flags?: string[];
  suggestedJokes: Joke[];
}
