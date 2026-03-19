import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { HighlightDirective } from '../directives/highlight.directive';
import { Movie } from '../model/movie.model';
import { MovieItemComponent } from '../movie-item/movie-item.component';
import { CalculateNumberMoviesPipe } from '../pipes/calculate-number-movies.pipe';
import { FavoritesService } from '../services/favorites.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  imports: [
    HighlightDirective,
    MovieItemComponent,
    AsyncPipe,
    RouterLink,
    CalculateNumberMoviesPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private moviesService = inject(MoviesService);
  protected movies$: Observable<Movie[]> = this.moviesService.getMovies();
  protected favoritesService = inject(FavoritesService);

  filter(title: string, year: string) {
    this.movies$ = this.moviesService.filterMovieList(title, year);
  }
}
