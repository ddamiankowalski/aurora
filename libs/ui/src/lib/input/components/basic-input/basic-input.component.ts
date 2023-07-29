import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClassBinder } from '@aurora/common';

@Component({
  selector: 'au-ui-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [ClassBinder],
})
export class BasicInputComponent {
  @Input({ required: true }) label = '';
  @Input({ required: true }) control?: FormControl<string>;
  @Input() placeholder = '';
  @Input() type?: string;

  constructor(classBinder: ClassBinder) {
    classBinder.bind('basic-input');
  }
}
