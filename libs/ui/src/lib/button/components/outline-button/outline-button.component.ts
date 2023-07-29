import {
  ChangeDetectionStrategy,
  Component,
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
  constructor(classBinder: ClassBinder) {
    classBinder.bind('outline-button');
  }
}
