import { Routes } from '@angular/router';
import { SignInViewComponent } from './sign-in-view/sign-in-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

export const routes: Routes = 
[
    { path: '', title: 'Home', component: HomeViewComponent },
    { path: 'sign-in', title: 'Sign In', component: SignInViewComponent },
    { path: 'profile', title: 'Profile', component: ProfileViewComponent },
];
