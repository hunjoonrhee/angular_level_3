import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../model/movie.model';

@Pipe({
  name: 'calculateNumberMovies',
})
export class CalculateNumberMoviesPipe implements PipeTransform {
  transform(movies: Movie[] | null): string {
    if (!movies) {
      return 'No movies';
    }
    if (movies.length === 0) {
      return 'No results found';
    } else if (movies.length === 1) {
      return 'One result found';
    } else {
      return `${movies.length} results found`;
    }
  }
}
