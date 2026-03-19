import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie, MovieDetails } from '../model/movie.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  protected httpClient = inject(HttpClient);
  private readonly ratings: Record<Movie['id'], WritableSignal<number>> = {};

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>('/movies');
  }

  getMovieDetails(movieId: string): Observable<MovieDetails> {
    return this.httpClient.get<MovieDetails>('/movies/' + movieId);
  }

  filterMovieList(title = '', year = ''): Observable<Movie[]> {
    return this.getMovies().pipe(
      map((movies) =>
        movies.filter(
          (movie) =>
            (year.length < 4 ||
              (year.length === 4 &&
                movie.release_date.split('-')[0].includes(year))) &&
            movie.title.toLowerCase().includes(title),
        ),
      ),
    );
  }

  getRating(movie: Movie): WritableSignal<number> {
    if (!this.ratings?.[movie.id]) {
      this.ratings[movie.id] = signal(0);
    }
    return this.ratings[movie.id];
  }
}
