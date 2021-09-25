import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  public isOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  public openModal(): void {
    this.isOpened$.next(true);
  }

  public closeModal(): void {
    this.isOpened$.next(false);
  }
}
