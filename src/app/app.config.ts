import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { AuthenticationService } from '@liquescens/auth-angular';

async function loadAuthentication()
{
  const configuration = await AuthenticationService.fetchConfiguration(environment.authentication.configuration_uri);
  return new AuthenticationService(configuration);
}

export const appConfig: ApplicationConfig =
{
  providers:
  [
    { provide: 'authentication-service-provider', useValue: loadAuthentication },
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes)
  ]
};
