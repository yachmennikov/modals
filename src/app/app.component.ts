import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalsService } from '../../projects/modals/src/lib/modals.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private modalService: ModalsService) {}

  ngOnInit(): void {
    this.modalService.formData$.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public showModal() {
    this.modalService.openModal();
  }
}
