import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registerr/register.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register'
  },
  {
    path: 'area/:id',
    component: UserAreaComponent,
    title: 'User Area'
  },
  {
    path: 'user/:id',
    component: UserProfileComponent,
    title: 'User Profile'
  }
];
