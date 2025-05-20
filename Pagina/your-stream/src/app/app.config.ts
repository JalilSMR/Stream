// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  provideHttpClient,
  withInterceptorsFromDi
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { routes } from './app.routes';
import { AuthInterceptor } from './core/services/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // Optimización de zone change detection
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Router con rutas
    provideRouter(routes),

    // HttpClient con interceptores DI
    provideHttpClient(withInterceptorsFromDi()),

    // Registra el AuthInterceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
};
