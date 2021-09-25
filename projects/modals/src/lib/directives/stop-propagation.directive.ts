import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[stopPropagation]'
})
export class StopPropagationDirective {

  @HostListener('click', ['$event'])
  preventEvent(event: MouseEvent) {
    event.stopPropagation();
  }
}
