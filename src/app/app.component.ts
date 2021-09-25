import { Component } from '@angular/core';
import { ModalsService } from '../../projects/modals/src/lib/modals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  constructor(private modalService: ModalsService) {}

  public showModal() {
    this.modalService.openModal();
  }
}
