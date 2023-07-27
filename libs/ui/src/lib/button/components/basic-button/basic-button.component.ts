import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ClassBinder } from '@aurora/common';

@Component({
  selector: 'au-ui-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class BasicButtonComponent {
  constructor(classBinder: ClassBinder) {
    classBinder.bind('basic-button');
  }
}
