import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalsService } from '../../modals.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'modal-body-base',
  templateUrl: 'modal-body-base.component.html',
  styleUrls: ['modal-body-base.component.less']
})
export class ModalBodyBaseComponent implements OnInit, OnDestroy {

  public baseForm: FormGroup;
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private formBuilder: FormBuilder, private modalService: ModalsService) {}

  ngOnInit(): void {
    this.baseForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.modalService.submitEvent
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {

        if (this.baseForm.valid) {
          this.modalService.setFormData(this.baseForm.getRawValue());
          this.baseForm.reset();
        } else {
          Object.keys(this.baseForm.controls).forEach(controlName => this.baseForm.controls[controlName].markAsTouched());
        }
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
