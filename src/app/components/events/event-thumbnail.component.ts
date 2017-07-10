import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './index';

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
            <h2 class="green">{{event.name | uppercase}}</h2>
            <div>Date: {{event.date | date:'shortDate'}}</div>
            <div>Time: {{event.time}}</div>
            <div>Price: {{event.price | currency:'USD':true}}</div>
            <div>
            <span>Location: {{event.address}}</span>
            </div>
            <button class="btn btn-primary" (click)="handleClick()">click me!</button>
        </div>
    `,
    styles: [
        `
            .green { color: green; }
        `
    ]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;
    @Output() eventClick = new EventEmitter();
    logFoo() {
        console.log(`${this.event.name} foo`);
    }
    handleClick() {
        this.eventClick.emit(this.event.name);
    }
}