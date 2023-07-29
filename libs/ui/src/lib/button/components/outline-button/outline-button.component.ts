import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';

@Component({
  selector: 'au-ui-outline-button',
  templateUrl: './outline-button.component.html',
  styleUrls: ['./outline-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class OutlineButtonComponent {
  @Input()
  set color(value: string) {
    this._classBinder.bind(`outline-button--${value}`);
  }

  constructor(private _classBinder: ClassBinder) {
    _classBinder.bind('outline-button');
  }
}
