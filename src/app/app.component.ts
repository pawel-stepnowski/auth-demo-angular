import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { Authentication } from '@liquescens/auth-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, NavbarUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'auth-angular-demo';
  auth: Authentication = inject(Authentication);

  constructor()
  {
    this.auth.initialize();
  }
}
