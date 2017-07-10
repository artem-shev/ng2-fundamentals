import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EventsService } from '../shared/events.service';

import { EventDetailsComponent } from '../index';

@Component({
  selector: 'events-list',
  template: `
    <event-thumbnail #test *ngFor="let event of events" 
        [event]="event"
        (click)="test.logFoo()"
        (eventClick)="clickListener($event)">
    </event-thumbnail>
    `
})
export class EventsListComponent implements OnInit {
  events: any;
  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
  ) {}
  title: string = 'Upcoming Angular Events';
  clickListener(data) {
    console.log('recived data', data);
  }
  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
