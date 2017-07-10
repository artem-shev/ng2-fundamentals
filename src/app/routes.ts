import { Routes } from '@angular/router';

import {
  EventRouteAcvtivator,
  EventsListResolver,
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  CreateSessionComponent,
} from './components/events/index';

import { Erorr404Component } from './components/errors/errors.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: { events: EventsListResolver } },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteAcvtivator] },
  { path: '404', component: Erorr404Component },
  { path: '', redirectTo: 'events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/components/user/user.module#UserModule' },
  { path: 'events/session/new', component: CreateSessionComponent },
];