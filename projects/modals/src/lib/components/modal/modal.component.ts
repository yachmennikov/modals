import { Component } from '@angular/core';
import { ModalsService } from '../../modals.service';

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.less'],
})
export class ModalComponent {

  get isOpened$() {
    return this.modalsService.isOpened$;
  }

  constructor(private modalsService: ModalsService) {}

  public closeModal(): void {
    this.modalsService.closeModal();
  }

}
