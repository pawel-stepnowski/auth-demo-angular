import * as Auth from '@liquescens/auth-js';
import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { AuthButton, Authentication } from '@liquescens/auth-angular';

@Component
({
  selector: 'app-sign-in-view',
  imports: [AsyncPipe, NgIf, AuthButton],
  templateUrl: './sign-in-view.component.html',
  styleUrl: './sign-in-view.component.css'
})
export class SignInViewComponent
{
  auth: Authentication = inject(Authentication);

  constructor()
  {
  }

  onClick(provider: Auth.OAuth2.Provider)
  {
    provider.authenticate(this.auth.service.configuration.redirect_uri);
  }
}
