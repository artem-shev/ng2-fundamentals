import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  template: `
    <div class="votingWidgetContainer pointable" (click)="onClick()">
      <div class="well votingWidget">
        <div class="votingBtn">
          <i class="glyphicon glyphicon-heart" [style.color]="iconColor" style="margin-left: -6px;"></i>
        </div>
        <div class="badge badge-inverse votingCount">
          <div>{{count}}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: [`./upvote.css`],
})
export class UpvoteComponent {
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'grey'
  };
  @Output() vote = new EventEmitter();
  iconColor: string;

  onClick() {
    this.vote.emit({})
  }
}