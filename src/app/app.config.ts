import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { mockingInterceptor } from '../main';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([mockingInterceptor])),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always' }),
    ),
  ],
};
