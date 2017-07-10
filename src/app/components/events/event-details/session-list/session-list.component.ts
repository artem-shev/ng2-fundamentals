import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

import { ISession } from '../../index';
import { AuthService } from '../../../user/shared/auth.service'
import { VoterService } from './voter.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.html',
  styles: [`
     a { text-decoration: none; color: inherit; }
  `],
})
export class SessionListComponent {
  @Input() sessions: ISession[];
  @Input() filter: string;
  @Input() sort: string;
  visibleSessions: ISession[] =[];

  constructor(
    private voterService: VoterService,
    private authService: AuthService,
  ) {}

  ngOnChanges({sessions, filter, sort}) {
    if (this.sessions) {
      this.filterSessions();
      this.sortSessions();
    }
  }
  filterSessions() {
    if (this.filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => session.level.toLowerCase() === this.filter);    
    }
  }
  sortSessions() {
    if (this.sort === 'voters') {
      this.visibleSessions.sort((s1, s2) => s2.voters.length - s1.voters.length );
    } else if (this.sort === 'name') {
      this.visibleSessions.sort((s1, s2) => {
        if (s1.name > s2.name) return 1;
        if (s1.name === s2.name) return 0;
        return -1;
      });
    }
  }
  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(session, this.authService.currentUser.userName);
    } else {
      this.voterService.addVoter(session, this.authService.currentUser.userName);
    }
    if (this.sort === 'voters') {
      this.sortSessions();
    } 
  }
  userHasVoted(session: ISession) {
    return this.voterService.userHasVoted(session, this.authService.currentUser.userName);
  }
}