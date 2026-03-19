import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MovieDetails } from '../../model/movie.model';

@Component({
  selector: 'app-people',
  imports: [],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PeopleComponent {
  protected movie = input.required<MovieDetails>();
}
