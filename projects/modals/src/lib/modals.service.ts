import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  public isOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private formDataSub$: Subject<any> = new Subject<any>();

  get formData$(): Observable<any> {
    return this.formDataSub$.asObservable();
  }

  @Output() submitEvent: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  public openModal(): void {
    this.isOpened$.next(true);
  }

  public closeModal(): void {
    this.isOpened$.next(false);
  }

  public setFormData(formData: any): void {
    this.formDataSub$.next(formData);
  }
}
