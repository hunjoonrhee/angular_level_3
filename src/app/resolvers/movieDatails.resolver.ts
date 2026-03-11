import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { MoviesService } from '../services/movies.service';

export function movieDetailsResolver(route: ActivatedRouteSnapshot) {
  const movieId = route.paramMap.get('id') ?? '';
  return inject(MoviesService).getMovieDetails(movieId);
}
