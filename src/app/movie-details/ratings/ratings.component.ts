import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-ratings',
  imports: [],
  templateUrl: './ratings.component.html',
  styleUrl: './ratings.component.scss',
})
export class RatingsComponent {
  readonly rating = input.required<number>();
  readonly ratingChange = output<number>();

  setRating(newRating: number) {
    this.ratingChange.emit(newRating);
  }
}
