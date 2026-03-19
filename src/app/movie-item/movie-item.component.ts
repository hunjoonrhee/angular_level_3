import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ToggleFavoriteMovie } from '../directives/toggle-favorite-movie.directive';
import { Movie } from '../model/movie.model';
import { MillionDollarPipe } from '../pipes/million-dollar.pipe';
import { MinToDurationPipe } from '../pipes/min-to-duration.pipe';

@Component({
  selector: 'app-movie-item',
  template: `
    <div class="movie-item">
      <div>
        <h4>
          <span [appToggleFavoriteMovie]="movie()" class="icon-star"></span>
          {{ movie().title }}
        </h4>
        <small class="subtitle">
          <span>Release date: {{ movie().release_date }}</span>
          <span>Budget: {{ movie().budget | millionDollar }} </span>
          <span>Duration: {{ movie().duration | minToDuration }}</span>
        </small>
      </div>

      <div>
        <ng-content select="[item-button]"></ng-content>
      </div>
    </div>
  `,
  imports: [MillionDollarPipe, MinToDurationPipe, ToggleFavoriteMovie],
  styleUrls: ['movie-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieItemComponent {
  movie = input.required<Movie>();
}
