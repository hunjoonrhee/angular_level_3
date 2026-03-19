import { Injectable, signal } from '@angular/core';
import { Movie } from '../model/movie.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  readonly favorites = signal<Movie[]>([]);

  toggleFavorite(movie: Movie): void {
    this.favorites.update((currentFavs) => {
      const exists = currentFavs.find((fav) => fav.id === movie.id);
      if (exists) {
        return currentFavs.filter((f) => f.id !== movie.id);
      } else {
        return [...currentFavs, movie];
      }
    });
  }
}
