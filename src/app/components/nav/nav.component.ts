import { Component } from '@angular/core';

import { AuthService } from '../user/shared/auth.service';
import { EventsService } from '../events/index';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav.component.html',
    styles: [`
        li > a.active { color: orange }
    `]
})
export class NavBarComponent {
    sessionsQuery: string = '';
    requestedSessions: any[] = [];
    
    constructor(
        private auth: AuthService,
        private eventsService: EventsService,
    ) {}

    searchSessions() {
        const sessions = this.eventsService
            .findSessions(this.sessionsQuery)
            .subscribe(sessions => {
                this.requestedSessions = sessions;
            });
    }
}