import { Component, Input } from '@angular/core';
import { ModalsService } from '../../modals.service';
import { FooterI } from '../../models';

@Component({
  selector: 'modal-footer-base',
  templateUrl: 'modal-footer-base.component.html',
  styleUrls: ['modal-footer-base.component.less']
})
export class ModalFooterBaseComponent implements FooterI {

  @Input() title: string = 'Footer Template';
  @Input() submitBtn: boolean = true;
  @Input() cancelBtn: boolean = true;

  constructor(private modalService: ModalsService) {}

  close(): void {
    this.modalService.closeModal();
  }

  submit(): void {
    this.modalService.submitEvent.emit();
  }

}
