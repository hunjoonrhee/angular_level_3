import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { movieDetailsResolver } from './resolvers/movieDatails.resolver';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'details/:id',
    loadComponent: () =>
      import('./movie-details/movie-details.component').then(
        (m) => m.MovieDetailsComponent,
      ),
    resolve: { movie: movieDetailsResolver },
    children: [
      {
        path: 'numbers',
        loadComponent: () =>
          import('./movie-details/numbers/numbers.component'),
      },
      {
        path: 'people',
        loadComponent: () => import('./movie-details/people/people.component'),
      },
      {
        path: 'my-data',
        loadComponent: () =>
          import('./movie-details/my-movie-data/my-movie-data.component'),
      },
      { path: '**', redirectTo: 'numbers' },
    ],
  },
];
