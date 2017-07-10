import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ActivatedRoute, Params } from '@angular/router';

import { IEvent, ISession } from '../index';

@Component({
    selector: 'event-details',
    templateUrl: './event-details.html',
    styles: [`
        .container { padding: 0 20px; }
        .event-image { height: 100px; }
        a { cursor: pointer; }
        h3 { margin: 0; }
        .active { background-color: #0275d8; }
    `]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'voters';

    constructor(
        private eventsService: EventsService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.route.params.forEach((param: Params) => {
            this.event = this.eventsService.getEvent(+param.id);
            this.addMode = false;
        });
        // this.event = this.eventsService.getEvent(+this.route.snapshot.params.id);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id)) + 1;
        session.id = nextId;
        this.event.sessions.unshift(session);
        this.eventsService.updateEvent(this.event);
        this.addMode = false;
    }
}