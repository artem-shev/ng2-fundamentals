import toastr from 'toastr';
import 'bootstrap';

declare const $: any;

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { NavBarComponent } from './components/nav/nav.component';
import { Erorr404Component } from './components/errors/errors.component';

import { AuthService } from './components/user/shared/auth.service';

import {
  TOASTR_TOKEN,
  JQ_TOKEN,
  CollapsableWellComponent,
  SimpleModalComponent,
  ModalTrigerDirective,
} from './shared/index';

import { appRoutes } from './routes';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventsService,
  EventRouteAcvtivator,
  EventsListResolver,
  CreateSessionComponent,
  SessionListComponent,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  DurationPipe,
} from './components/events/index';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Erorr404Component,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsableWellComponent,
    SimpleModalComponent,
    UpvoteComponent,
    ModalTrigerDirective,
    LocationValidator,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventsService,
    { provide: TOASTR_TOKEN, useValue: toastr }, 
    { provide: JQ_TOKEN, useValue: $ },
    EventRouteAcvtivator,
    EventsListResolver,
    AuthService,
    VoterService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) 
    return window.confirm('do you really want to leave this page without saving your event?');
  return true;
}

// 100