import {
  Component,
  inject,
  input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { RatingsComponent } from '../ratings/ratings.component';
import { MovieDetails } from '../../model/movie.model';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-my-movie-data',
  imports: [RatingsComponent],
  templateUrl: './my-movie-data.component.html',
  styleUrl: './my-movie-data.component.scss',
})
export default class MyMovieDataComponent implements OnInit {
  protected movie = input.required<MovieDetails>();
  private service = inject(MoviesService);

  movieRating!: WritableSignal<number>;

  ngOnInit(): void {
    this.movieRating = this.service.getRating(this.movie());
  }

  setRating(newRating: number) {
    this.movieRating.set(newRating);
  }
}
