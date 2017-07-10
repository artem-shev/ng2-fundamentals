import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { EventsService } from './shared/events.service';

@Injectable()
export class EventRouteAcvtivator implements CanActivate{
  constructor (
    private eventsService: EventsService,
    private router: Router
    ) {}
  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventsService.getEvent(+route.params.id);

    if (!eventExist) { this.router.navigate(['/404']); }
    return eventExist;
  }
}