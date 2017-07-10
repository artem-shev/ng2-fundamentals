import { Directive, Input, Inject, ElementRef } from '@angular/core';
import { JQ_TOKEN } from './index';

@Directive({ selector: '[modal-triger]' })
export class ModalTrigerDirective {
  @Input('modal-triger') modalId: string;

  private el: HTMLElement;

  constructor(
    @Inject(JQ_TOKEN) private $: any,
    ref: ElementRef,
  ) {
    this.el = ref.nativeElement;
  }
  ngOnInit() {
    this.el.addEventListener('click', (e) => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}