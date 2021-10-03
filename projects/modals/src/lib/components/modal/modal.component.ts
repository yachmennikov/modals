import { Component, Input } from '@angular/core';
import { ModalsService } from '../../modals.service';
import { ModalI } from '../../models';

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.less'],
})
export class ModalComponent {

  @Input() config: ModalI = {};

  get isOpened$() {
    return this.modalsService.isOpened$;
  }

  constructor(private modalsService: ModalsService) {}

  public closeModal(): void {
    this.modalsService.closeModal();
  }

}
