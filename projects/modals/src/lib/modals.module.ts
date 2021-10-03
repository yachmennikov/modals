import {ModuleWithProviders, NgModule} from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { CrossIconComponent } from './components/cross-icon/cross-icon.component';
import { ModalHeaderBaseComponent } from './components/modal-header-base/modal-header-base.component';
import { ModalBodyBaseComponent } from './components/modal-body-base/modal-body-base.component';
import { ModalFooterBaseComponent } from './components/modal-footer-base/modal-footer-base.component';
import { ModalsService } from './modals.service';
import { CommonModule } from '@angular/common';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalI } from './models';

@NgModule({
  declarations: [
    ModalComponent,
    CrossIconComponent,
    ModalHeaderBaseComponent,
    ModalBodyBaseComponent,
    ModalFooterBaseComponent,
    StopPropagationDirective,
  ],
  providers: [
    ModalsService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalComponent,
    ModalHeaderBaseComponent,
    ModalBodyBaseComponent,
    ModalFooterBaseComponent,
  ]
})
export class ModalsModule {

  static forFeature(config: ModalI = {}): ModuleWithProviders<ModalsModule> {
    return {
      ngModule: ModalsModule,
      providers: [
        {
          provide: 'config',
          useValue: config
        }
      ]
    };
  }
}
