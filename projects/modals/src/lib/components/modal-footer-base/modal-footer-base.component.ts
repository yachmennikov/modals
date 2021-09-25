import {Component, Input} from '@angular/core';

@Component({
  selector: 'modal-footer-base',
  templateUrl: 'modal-footer-base.component.html',
  styleUrls: ['modal-footer-base.component.less']
})
export class ModalFooterBaseComponent {

  @Input() title: string = 'Footer Template';

}
