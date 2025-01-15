import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registerr/register.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LastEventsComponent } from './last-events/last-events.component';
import { EventsComponent } from './events/events.component';

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
  },
  {
    path: 'last-events',
    component: LastEventsComponent,
    title: 'Last Events'
  },
  {
    path: 'events',
    component: EventsComponent,
    title: 'Events'
  }
];
