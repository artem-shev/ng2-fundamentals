import { Component } from '@angular/core';

@Component({
  selector: 'collapsable-well',
  template: `
    <div class="well pointable" (click)="toggleContent()">
      <h4>
        <ng-content select="[well-title]"></ng-content>
      </h4>
      <ng-content select="[well-body]" *ngIf="visible"></ng-content>
    </div>
  `,
})
export class CollapsableWellComponent {
  visible: boolean = true;
  toggleContent() {
    this.visible = !this.visible;
  }
}