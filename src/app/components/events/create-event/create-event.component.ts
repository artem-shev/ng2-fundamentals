import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EventsService } from '../index';

@Component({
  templateUrl: './create-event.html',
})
export class CreateEventComponent {
  isDirty: boolean;
  
  constructor(
    private router: Router,
    private eventsService: EventsService,
  ) {}

  ngOnInit() {
    this.isDirty = true;
  }

  saveEvent(formVal) {
    this.eventsService.saveEvent(formVal);
    this.isDirty = false;
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['/events'])
  }
}
