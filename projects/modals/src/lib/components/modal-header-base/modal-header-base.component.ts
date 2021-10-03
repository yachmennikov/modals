import {Component, Input} from '@angular/core';

@Component({
  selector: 'modal-header-base',
  templateUrl: 'modal-header-base.component.html',
  styleUrls: ['modal-header-base.component.less']
})
export class ModalHeaderBaseComponent {

  @Input() title: string = 'Base Form Header';

}
