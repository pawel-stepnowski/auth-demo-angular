import * as Auth from '@liquescens/auth-js';
import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthButton, Authentication, AuthenticationService } from '@liquescens/auth-angular';

@Component
({
  selector: 'app-sign-in-view',
  imports: [NgIf, AuthButton],
  templateUrl: './sign-in-view.component.html',
  styleUrl: './sign-in-view.component.css'
})
export class SignInViewComponent
{
  auth: Authentication = inject(Authentication);

  constructor()
  {
  }

  onClick(service: AuthenticationService, provider: Auth.OAuth2.Provider)
  {
    provider.authenticate(service.configuration.redirect_uri);
  }
}
