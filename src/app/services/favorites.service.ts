import { effect, inject, Injectable, signal } from '@angular/core';
import { Movie } from '../model/movie.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly STORAGE_KEY = 'favorites';
  readonly storageService = inject(StorageService);
  readonly favorites = signal<Movie[]>(
    this.storageService.getValue<Movie[]>(this.STORAGE_KEY, []),
  );

  constructor() {
    effect(() => {
      this.storageService.setValue<Movie[]>(this.STORAGE_KEY, this.favorites());
    });
  }

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
