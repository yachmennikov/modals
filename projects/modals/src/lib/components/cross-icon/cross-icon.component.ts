import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'cross-icon',
  templateUrl: 'cross-icon.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrossIconComponent {
  @Input() color: string = '#555555';
  @Input() size: string = '20px';
}
