import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AuthenticationService } from '@liquescens/auth-angular';

function loadConfiguration()
{
  
}

export const appConfig: ApplicationConfig =
{
  providers:
  [
    // { provide: 'authentication-configuration', useValue: environment.authentication },
    { provide: 'authentication-configuration', useFactory: loadConfiguration },
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
};
