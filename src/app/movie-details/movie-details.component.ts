import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MovieDetails } from '../model/movie.model';

@Component({
  selector: 'app-movie-details',
  template: `
    <h1>{{ movie().title }}</h1>
    <div class="details">
      @if (movie().poster) {
        <img
          [ngSrc]="movie().poster || ''"
          width="200"
          height="100"
          alt="Poster"
        />
      }
      <div>
        <p>
          <span>Summary: </span>
          <span>{{ movie().summary }}</span>
        </p>
      </div>
    </div>
    <div>
      Display:
      <button (click)="goToNumbersDetails()">Numbers</button>
      <button (click)="goToPeopleDetails()">People</button>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['movie-details.component.scss'],
  imports: [NgOptimizedImage, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsComponent {
  readonly movie = input.required<MovieDetails>();
  readonly router = inject(Router);
  goToNumbersDetails() {
    this.router.navigate([`details/${this.movie().id}/numbers`]);
  }
  goToPeopleDetails() {
    this.router.navigate([`details/${this.movie().id}/people`]);
  }
}
