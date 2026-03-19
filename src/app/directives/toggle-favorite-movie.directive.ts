import {
  computed,
  Directive,
  HostListener,
  inject,
  input,
} from '@angular/core';
import { Movie } from '../model/movie.model';
import { FavoritesService } from '../services/favorites.service';

@Directive({
  selector: '[appToggleFavoriteMovie]',
  host: {
    '[class.active]': 'isActive()',
  },
})
export class ToggleFavoriteMovie {
  private favoriteService = inject(FavoritesService);

  readonly movie = input.required<Movie>({ alias: 'appToggleFavoriteMovie' });
  readonly isActive = computed(() => {
    const currentMovie = this.movie();
    const allFavs = this.favoriteService.favorites();
    return allFavs.find((fav) => fav.id === currentMovie.id);
  });

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.stopPropagation();
    this.favoriteService.toggleFavorite(this.movie());
  }
}
