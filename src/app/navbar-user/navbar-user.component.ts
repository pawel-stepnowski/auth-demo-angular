import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet } from '@angular/common';
import { AuthButton, Authentication, SessionItem } from '@liquescens/auth-angular';

@Component
({
  selector: 'navbar-user',
  imports: [RouterLink, AsyncPipe, NgTemplateOutlet, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, AuthButton],
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
})
export class NavbarUserComponent
{
  auth: Authentication = inject(Authentication);

  constructor()
  {
  }

  async setActiveSession(item: SessionItem)
  {
    await this.auth.setActiveSession(item.session);
  }

  async connect()
  {
    await this.auth.initialize();
  }

  async signOut()
  {
    this.auth.signOut();
  }
}
